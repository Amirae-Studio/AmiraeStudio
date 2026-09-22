"use client";

import { useState } from "react";
import { STUDIO, WEB3FORMS_KEY } from "@/lib/content";

const SERVICE_OPTIONS = [
  { title: "3D CAD & Asset Modeling", desc: "Meshes, topology & PBR textures", icon: "◆", tone: "bg-sky text-blue" },
  { title: "Rapid Product Prototyping", desc: "DfAM CAD & functional prototypes", icon: "⚙", tone: "bg-blush text-pink" },
  { title: "Physical 3D Print Fabrication", desc: "Resin / FDM miniatures & kits", icon: "▲", tone: "bg-butter text-orange" },
  { title: "Architectural Scale Models", desc: "Monuments, cityscapes, relief art", icon: "⌂", tone: "bg-peach text-orange" },
  { title: "Interactive 3D Web / WebGL", desc: "Three.js configurators & web apps", icon: "◎", tone: "bg-mint text-teal" },
  { title: "Custom Studio Commission", desc: "Multi-discipline or retainer", icon: "✦", tone: "bg-lilac text-blue" },
];

const DELIVERABLE_OPTIONS = [
  "Parametric CAD (STEP / IGES)",
  "3D Print Mesh (STL / OBJ / 3MF)",
  "4K / 8K Photorealistic Renders",
  "Physical 3D Prints Shipped",
  "Interactive WebGL Codebase",
  "Commercial IP & Exclusive Rights",
];

const BUDGET_RANGES = ["$500 – $1,500", "$1,500 – $5,000", "$5,000 – $15,000", "$15,000+"];

const TIMELINE_OPTIONS = [
  "Urgent (< 10 business days)",
  "Standard (2 to 4 weeks)",
  "Comprehensive (1 to 2 months)",
  "Flexible / Long-term roadmap",
];

function Pill({ selected, onClick, children }: { selected: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={`rounded-full border-2 px-4 py-2 text-sm font-semibold transition-colors ${
        selected ? "border-brand bg-mint text-ink" : "border-transparent bg-soft text-muted hover:text-ink"
      }`}
    >
      {selected && <span className="mr-1.5 text-teal">✓</span>}
      {children}
    </button>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <p className="mb-3 text-sm font-bold">{children}</p>;
}

export function Quote() {
  const [step, setStep] = useState<1 | 2>(1);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const [service, setService] = useState(SERVICE_OPTIONS[0].title);
  const [deliverables, setDeliverables] = useState<string[]>(DELIVERABLE_OPTIONS.slice(0, 2));
  const [budget, setBudget] = useState(BUDGET_RANGES[1]);
  const [timeline, setTimeline] = useState(TIMELINE_OPTIONS[1]);
  const [brief, setBrief] = useState("");
  const [contact, setContact] = useState({ name: "", email: "", phone: "", company: "", country: "" });

  const toggleDeliverable = (item: string) =>
    setDeliverables((d) => (d.includes(item) ? d.filter((x) => x !== item) : [...d, item]));

  const next = (e: React.FormEvent) => {
    e.preventDefault();
    if (!brief.trim()) {
      setError("Tell us a little about the project first. Even a sentence helps.");
      return;
    }
    setError("");
    setStep(2);
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const message = `
REQUEST A QUOTE SUBMISSION:
--------------------------------------
Service Required: ${service}
Deliverables: ${deliverables.join(", ")}
Budget Range: ${budget}
Target Timeline: ${timeline}
Company/Brand: ${contact.company || "N/A"}
Country/Location: ${contact.country || "N/A"}
Phone/WhatsApp: ${contact.phone || "N/A"}

Project Requirements Brief:
${brief}
    `.trim();

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name: contact.name,
          email: contact.email,
          subject: `New Commercial Quote Request: ${service} - ${contact.name}`,
          message,
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
    <section id="quote" className="page-width py-20 md:py-28">
      <div className="mx-auto mb-10 max-w-[680px] text-center">
        <h2 className="display text-[clamp(2.4rem,5vw,4rem)]">
          tell us what
          <br />
          you&apos;re making.
        </h2>
        <p className="mt-5 text-[17px] text-muted">
          Two quick steps. We&apos;ll come back within 24 hours with a scoped, milestone-based quote.
        </p>
      </div>

      <div className="mx-auto max-w-[920px] rounded-[36px] bg-surface p-6 shadow-[0_20px_60px_-30px_#252b4440] ring-1 ring-line sm:p-10">
        {sent ? (
          <div className="py-10 text-center">
            <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-mint text-3xl text-teal">✓</span>
            <h3 className="display mt-6 text-3xl">quote request received.</h3>
            <p className="mx-auto mt-3 max-w-md text-muted">
              Thanks {contact.name.split(" ")[0] || "there"}! We&apos;ll review your brief and email {contact.email || "you"} within 24 hours.
            </p>
          </div>
        ) : (
          <>
            <ol className="mb-8 flex items-center gap-3 text-sm font-semibold" aria-label="Progress">
              {["your project", "your details"].map((label, i) => {
                const n = i + 1;
                const current = step === n;
                const done = step > n;
                return (
                  <li key={label} className="flex items-center gap-3">
                    {i > 0 && <span className="h-0.5 w-8 rounded-full bg-line" aria-hidden />}
                    <span
                      className={`flex items-center gap-2 rounded-full px-3 py-1.5 ${
                        current ? "bg-mint text-ink" : "text-muted"
                      }`}
                      aria-current={current ? "step" : undefined}
                    >
                      <span
                        className={`grid h-6 w-6 place-items-center rounded-full text-xs ${
                          current || done ? "bg-brand text-brand-ink" : "bg-soft"
                        }`}
                      >
                        {done ? "✓" : n}
                      </span>
                      {label}
                    </span>
                  </li>
                );
              })}
            </ol>

            {step === 1 ? (
              <form onSubmit={next} className="grid gap-8">
                <div>
                  <Label>What do you need?</Label>
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {SERVICE_OPTIONS.map((s) => {
                      const selected = service === s.title;
                      return (
                        <button
                          key={s.title}
                          type="button"
                          onClick={() => setService(s.title)}
                          aria-pressed={selected}
                          className={`flex items-start gap-3 rounded-2xl border-2 p-4 text-left transition-all ${
                            selected ? "border-brand bg-mint/60" : "border-line hover:-translate-y-0.5 hover:border-muted/40"
                          }`}
                        >
                          <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl text-base ${s.tone}`}>
                            {s.icon}
                          </span>
                          <span>
                            <span className="block text-sm font-bold leading-snug">{s.title}</span>
                            <span className="mt-0.5 block text-xs text-muted">{s.desc}</span>
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <Label>Deliverables</Label>
                  <div className="flex flex-wrap gap-2">
                    {DELIVERABLE_OPTIONS.map((d) => (
                      <Pill key={d} selected={deliverables.includes(d)} onClick={() => toggleDeliverable(d)}>
                        {d}
                      </Pill>
                    ))}
                  </div>
                </div>

                <div className="grid gap-8 md:grid-cols-2">
                  <div>
                    <Label>Budget</Label>
                    <div className="flex flex-wrap gap-2">
                      {BUDGET_RANGES.map((b) => (
                        <Pill key={b} selected={budget === b} onClick={() => setBudget(b)}>
                          {b}
                        </Pill>
                      ))}
                    </div>
                  </div>
                  <div>
                    <Label>Timeline</Label>
                    <div className="flex flex-wrap gap-2">
                      {TIMELINE_OPTIONS.map((t) => (
                        <Pill key={t} selected={timeline === t} onClick={() => setTimeline(t)}>
                          {t}
                        </Pill>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="brief" className="mb-3 block text-sm font-bold">
                    Tell us about it <span className="text-pink">*</span>
                  </label>
                  <textarea
                    id="brief"
                    rows={5}
                    value={brief}
                    onChange={(e) => setBrief(e.target.value)}
                    placeholder="What are you making, who is it for, and what does done look like? Links to sketches or references are welcome."
                    className="field resize-y"
                  />
                </div>

                {error && <p className="text-sm font-semibold text-pink" role="alert">{error}</p>}

                <div className="flex justify-end">
                  <button type="submit" className="btn-press">
                    next: your details <span className="arrow">→</span>
                  </button>
                </div>
              </form>
            ) : (
              <form onSubmit={submit} className="grid gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field id="q-name" label="Your name" required value={contact.name} placeholder="Alex Morgan"
                    onChange={(v) => setContact({ ...contact, name: v })} />
                  <Field id="q-email" label="Email" type="email" required value={contact.email} placeholder="alex@company.com"
                    onChange={(v) => setContact({ ...contact, email: v })} />
                  <Field id="q-phone" label="Phone / WhatsApp" value={contact.phone} placeholder="Optional"
                    onChange={(v) => setContact({ ...contact, phone: v })} />
                  <Field id="q-company" label="Company or brand" value={contact.company} placeholder="Optional"
                    onChange={(v) => setContact({ ...contact, company: v })} />
                  <div className="sm:col-span-2">
                    <Field id="q-country" label="Country" value={contact.country} placeholder="Where should things ship?"
                      onChange={(v) => setContact({ ...contact, country: v })} />
                  </div>
                </div>

                <div className="rounded-2xl bg-soft p-4 text-sm text-muted">
                  <span className="font-semibold text-ink">{service}</span> · {budget} · {timeline}
                </div>

                {error && <p className="text-sm font-semibold text-pink" role="alert">{error}</p>}

                <div className="flex flex-wrap items-center justify-between gap-4">
                  <button type="button" onClick={() => setStep(1)} className="text-link">
                    ← back
                  </button>
                  <button type="submit" disabled={loading} className="btn-press">
                    {loading ? "sending…" : "send my quote request"} <span className="arrow">↗</span>
                  </button>
                </div>
              </form>
            )}
          </>
        )}
      </div>
    </section>
  );
}

export function Field({
  id,
  label,
  value,
  onChange,
  type = "text",
  required,
  placeholder,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-bold">
        {label} {required && <span className="text-pink">*</span>}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="field"
      />
    </div>
  );
}
