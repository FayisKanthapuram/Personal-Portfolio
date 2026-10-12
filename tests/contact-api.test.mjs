import test from "node:test";
import assert from "node:assert/strict";

const base = process.env.TEST_BASE_URL || "http://localhost:3017";
const send = (body, headers = {}) =>
  fetch(`${base}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json", ...headers },
    body: typeof body === "string" ? body : JSON.stringify(body),
  });

test("contact capability returns a boolean without exposing configuration", async () => {
  const response = await fetch(`${base}/api/contact`);
  assert.equal(response.status, 200);
  const result = await response.json();
  assert.deepEqual(Object.keys(result), ["available"]);
  assert.equal(typeof result.available, "boolean");
  assert.match(response.headers.get("cache-control"), /no-store/);
});

test("invalid inputs are rejected before attempting delivery", async () => {
  const valid = {
    name: "QA Test",
    email: "qa@example.com",
    message: "Contact validation test.",
  };
  const cases = [
    null,
    [],
    {},
    { ...valid, name: {} },
    { ...valid, name: "Header\r\nInjection" },
    { ...valid, email: "not-an-email" },
    { ...valid, email: "qa@example.com\nBcc: bad@example.com" },
    { ...valid, message: "short" },
    { ...valid, message: "x".repeat(5001) },
    { ...valid, website: "spam" },
  ];
  for (const body of cases) {
    const response = await send(body);
    assert.equal(
      response.status,
      400,
      `Unexpected status for ${JSON.stringify(body).slice(0, 100)}`,
    );
    assert.equal(typeof (await response.json()).error, "string");
  }
});

test("malformed JSON, wrong content type, and oversized bodies are rejected", async () => {
  assert.equal((await send("{")).status, 400);
  assert.equal(
    (await send("{}", { "Content-Type": "text/plain" })).status,
    415,
  );
  assert.equal((await send({ message: "x".repeat(25000) })).status, 413);
});

test("cross-origin submissions are rejected", async () => {
  assert.equal(
    (await send({}, { Origin: "https://unrelated.example" })).status,
    403,
  );
});

test("missing credentials produce an honest unavailable response", async (t) => {
  const { available } = await (await fetch(`${base}/api/contact`)).json();
  if (available) {
    t.skip("SMTP is configured; this suite deliberately never sends email.");
    return;
  }
  const response = await send({
    name: "QA Test",
    email: "qa@example.com",
    message: "This should not send an email.",
  });
  assert.equal(response.status, 503);
  assert.match((await response.json()).error, /email/);
});
