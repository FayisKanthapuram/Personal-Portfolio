"use client";
import { useState } from "react";
import type { FormEvent } from "react";
import { identity } from "@/data/portfolio";

type State =
  | "closed"
  | "checking"
  | "ready"
  | "unavailable"
  | "sending"
  | "sent"
  | "error";
export default function ContactForm() {
  const [state, setState] = useState<State>("closed");
  const [error, setError] = useState("");
  async function openForm() {
    setState("checking");
    try {
      const response = await fetch("/api/contact", { cache: "no-store" });
      const data = await response.json();
      setState(response.ok && data.available ? "ready" : "unavailable");
    } catch {
      setState("unavailable");
    }
  }
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const fields = Object.fromEntries(new FormData(form));
    setState("sending");
    setError("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
        signal: AbortSignal.timeout(20000),
      });
      const result = await response.json();
      if (!response.ok)
        throw new Error(
          result.error ||
            "Your message could not be sent. Please try email instead.",
        );
      form.reset();
      setState("sent");
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Your message could not be sent. Please try email instead.",
      );
      setState("error");
    }
  }
  return (
    <div className="contact-form-wrap">
      {state === "closed" && (
        <button className="text-link" onClick={openForm}>
          Prefer a contact form? <span aria-hidden="true">+</span>
        </button>
      )}
      <div aria-live="polite" role="status">
        {state === "checking" && <p>Checking the contact form…</p>}
        {state === "unavailable" && (
          <p>
            The contact form is unavailable right now.{" "}
            <a href={`mailto:${identity.email}`}>Send me an email instead ↗</a>
          </p>
        )}
        {state === "sent" && (
          <p>
            Message sent. Thanks for reaching out!{" "}
            <button className="text-link" onClick={() => setState("ready")}>
              Send another
            </button>
          </p>
        )}
      </div>
      {["ready", "sending", "error"].includes(state) && (
        <form onSubmit={submit} className="contact-form">
          <div className="form-row">
            <label>
              Your name
              <input name="name" autoComplete="name" required maxLength={100} />
            </label>
            <label>
              Email address
              <input
                name="email"
                type="email"
                autoComplete="email"
                required
                maxLength={254}
              />
            </label>
          </div>
          <label>
            What are you thinking?
            <textarea
              name="message"
              required
              minLength={10}
              maxLength={5000}
              rows={4}
            />
          </label>
          <div className="honeypot" aria-hidden="true">
            <label>
              Website
              <input name="website" tabIndex={-1} autoComplete="off" />
            </label>
          </div>
          {error && (
            <p role="alert" className="form-error">
              {error}
            </p>
          )}
          <button
            className="button button-light"
            disabled={state === "sending"}
            type="submit"
          >
            {state === "sending" ? "Sending…" : "Send message ↗"}
          </button>
        </form>
      )}
    </div>
  );
}
