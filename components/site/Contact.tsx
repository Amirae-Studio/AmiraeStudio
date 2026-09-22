"use client";

import { useState } from "react";
import { STUDIO, WEB3FORMS_KEY } from "@/lib/content";
import { Field } from "./Quote";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(STUDIO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name: form.name,
          email: form.email,
          subject: "Commercial Project Inquiry",
          message: form.message,
        }),
      });
      const result = await res.json();
      if (result.success) setSent(true);
      else setError(`Something went wrong. Please email ${STUDIO.email} directly.`);
    } catch {
      setError(`Network error. Please email ${STUDIO.email} directly.`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="page-width py-16 md:py-24">
      <div className="grid gap-6 lg:grid-cols-[1fr_1.25fr]">
        <div className="flex flex-col rounded-[32px] bg-blush p-8 sm:p-11">
          <h2 className="display text-[clamp(2.2rem,4vw,3.2rem)]">
            rather just
            <br />
            talk?
          </h2>
          <p className="mt-5 max-w-sm leading-[1.75] text-muted">
            Questions, a wild idea, or a partnership pitch. Send a note and a real person replies within 24 hours.
          </p>

          <div className="mt-8 grid gap-3">
            <div className="flex items-center justify-between gap-3 rounded-2xl bg-surface/80 p-3 pl-4">
              <a href={`mailto:${STUDIO.email}`} className="min-w-0 truncate font-semibold hover:text-pink">
                {STUDIO.email}
              </a>
              <button type="button" onClick={copyEmail} className="shrink-0 rounded-full bg-soft px-3 py-1.5 text-xs font-bold">
                {copied ? "copied ✓" : "copy"}
              </button>
            </div>
            <p className="rounded-2xl bg-surface/80 p-3 pl-4 text-sm">
              <span className="font-semibold">Studio hours</span> <span className="text-muted">· {STUDIO.hours}</span>
            </p>
          </div>

          <div className="mt-auto flex flex-wrap gap-3 pt-8">
            <a href={STUDIO.instagram} target="_blank" rel="noopener noreferrer" className="btn-soft bg-surface/80">
              instagram ↗
            </a>
            <a href={STUDIO.discord} target="_blank" rel="noopener noreferrer" className="btn-soft bg-surface/80">
              discord ↗
            </a>
          </div>
        </div>

        <div className="rounded-[32px] bg-surface p-8 ring-1 ring-line sm:p-11">
          {sent ? (
            <div className="grid h-full place-items-center py-10 text-center">
              <div>
                <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-mint text-3xl text-teal">✓</span>
                <h3 className="display mt-6 text-3xl">message received.</h3>
                <p className="mt-3 text-muted">We&apos;ll get back to you within 24 hours.</p>
                <button
                  type="button"
                  className="text-link mt-4"
                  onClick={() => {
                    setSent(false);
                    setForm({ name: "", email: "", message: "" });
                  }}
                >
                  ← send another
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={submit} className="grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field id="c-name" label="Name" required value={form.name} placeholder="Alex Morgan"
                  onChange={(v) => setForm({ ...form, name: v })} />
                <Field id="c-email" label="Email" type="email" required value={form.email} placeholder="alex@company.com"
                  onChange={(v) => setForm({ ...form, email: v })} />
              </div>
              <div>
                <label htmlFor="c-message" className="mb-2 block text-sm font-bold">
                  Message <span className="text-pink">*</span>
                </label>
                <textarea
                  id="c-message"
                  rows={6}
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="What's on your mind?"
                  className="field resize-y"
                />
              </div>
              {error && <p className="text-sm font-semibold text-pink" role="alert">{error}</p>}
              <div>
                <button type="submit" disabled={loading} className="btn-press">
                  {loading ? "sending…" : "send message"} <span className="arrow">↗</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
