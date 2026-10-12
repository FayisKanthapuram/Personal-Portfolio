import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";
const configured = () =>
  Boolean(process.env.EMAIL_USER && process.env.EMAIL_PASS);
export async function GET() {
  return NextResponse.json(
    { available: configured() },
    { headers: { "Cache-Control": "no-store" } },
  );
}
export async function POST(req: Request) {
  if (!req.headers.get("content-type")?.includes("application/json")) {
    return NextResponse.json(
      { error: "Please send a valid message." },
      { status: 415 },
    );
  }
  const origin = req.headers.get("origin");
  if (origin && origin !== new URL(req.url).origin) {
    return NextResponse.json(
      { error: "Please use the contact form on this site." },
      { status: 403 },
    );
  }
  // Bound the streamed body too; Content-Length can be absent or misleading.
  const reader = req.body?.getReader();
  if (!reader)
    return NextResponse.json({ error: "Missing message." }, { status: 400 });
  let raw = "";
  let bytes = 0;
  const decoder = new TextDecoder();
  try {
    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      bytes += value.byteLength;
      if (bytes > 24000) {
        await reader.cancel();
        return NextResponse.json(
          { error: "Your message is too long." },
          { status: 413 },
        );
      }
      raw += decoder.decode(value, { stream: true });
    }
    raw += decoder.decode();
    const data = JSON.parse(raw);
    if (!data || typeof data !== "object" || Array.isArray(data))
      throw new Error("Invalid body");
    const { name, email, message, website } = data;
    if (website)
      return NextResponse.json(
        { error: "Please leave the website field empty." },
        { status: 400 },
      );
    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string" ||
      !name.trim() ||
      name.length > 100 ||
      /[\r\n]/.test(name) ||
      email.length > 254 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      message.trim().length < 10 ||
      message.length > 5000
    ) {
      return NextResponse.json(
        {
          error:
            "Add a name, valid email, and a message of 10–5,000 characters.",
        },
        { status: 400 },
      );
    }
    if (!configured()) {
      return NextResponse.json(
        {
          error:
            "The form is unavailable. Please email fayiskanthapuram@gmail.com instead.",
        },
        { status: 503 },
      );
    }
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
      connectionTimeout: 10000,
      socketTimeout: 15000,
    });
    try {
      // Plain text prevents HTML injection; the verified sender remains the From address.
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        replyTo: email.trim(),
        subject: `Portfolio message from ${name.trim()}`,
        text: `Name: ${name.trim()}\nEmail: ${email.trim()}\n\n${message.trim()}`,
      });
      return NextResponse.json({ success: true });
    } catch {
      return NextResponse.json(
        { error: "Your message could not be sent. Please try email instead." },
        { status: 502 },
      );
    }
  } catch {
    return NextResponse.json(
      { error: "Please send a valid message." },
      { status: 400 },
    );
  }
}
