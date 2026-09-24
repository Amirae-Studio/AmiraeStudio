"use client";

import { useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { STUDIO } from "@/lib/content";
import { Magnetic } from "@/components/site/Magnetic";

const WEB3FORMS_KEY = "1643a366-13f9-403b-ae3d-09fb6f0c868a";

const SERVICE_OPTIONS = [
  "3D modeling",
  "Product prototyping",
  "3D printing",
  "Architectural models",
  "Interactive 3D web",
  "Something else",
];
const DELIVERABLE_OPTIONS = [
  "Parametric CAD (STEP / IGES)",
  "Print mesh (STL / OBJ / 3MF)",
  "4K / 8K renders",
  "Physical prints shipped",
  "WebGL / Three.js code",
  "Exclusive IP rights",
];
const BUDGET_OPTIONS = ["$500 – 1.5k", "$1.5k – 5k", "$5k – 15k", "$15k+"];
const TIMELINE_OPTIONS = ["< 2 weeks", "2 – 4 weeks", "1 – 2 months", "Flexible"];

function Chip({ active, onClick, children }: { active: boolean; onClick: () => void; children: ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "rounded-full border px-5 py-2.5 text-[15px] transition-colors duration-300",
        active ? "border-ink bg-ink text-white" : "border-line hover:border-ink",
      )}
    >
      {children}
    </button>
  );
}

function Group({ label, children }: { label: string; children: ReactNode }) {
  return (
    <fieldset className="mb-12">
      <legend className="mb-5 text-2xl font-medium tracking-tight">{label}</legend>
      <div className="flex flex-wrap gap-2.5">{children}</div>
    </fieldset>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  value,
  onChange,
  textarea,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  value: string;
  onChange: (v: string) => void;
  textarea?: boolean;
}) {
  const classes =
    "peer w-full border-b border-line bg-transparent pb-3 pt-7 text-xl outline-none transition-colors placeholder-shown:border-line focus:border-ink";
  return (
    <label className="relative block">
      {textarea ? (
        <textarea
          name={name}
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder=" "
          rows={4}
          className={cn(classes, "resize-none")}
        />
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder=" "
          className={classes}
        />
      )}
      <span className="pointer-events-none absolute left-0 top-7 text-xl text-muted transition-all duration-300 peer-focus:top-0 peer-focus:text-sm peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-sm">
        {label}
        {required && " *"}
      </span>
    </label>
  );
}

export function QuoteForm() {
  const [service, setService] = useState(SERVICE_OPTIONS[0]);
  const [deliverables, setDeliverables] = useState<string[]>([]);
  const [budget, setBudget] = useState(BUDGET_OPTIONS[1]);
  const [timeline, setTimeline] = useState(TIMELINE_OPTIONS[1]);
  const [info, setInfo] = useState({ name: "", email: "", company: "", country: "", phone: "", brief: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const set = (key: keyof typeof info) => (v: string) => setInfo((prev) => ({ ...prev, [key]: v }));
  const toggleDeliverable = (d: string) =>
    setDeliverables((prev) => (prev.includes(d) ? prev.filter((x) => x !== d) : [...prev, d]));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Honeypot: humans never see this checkbox, so a ticked one means a bot filled the form.
    if (new FormData(e.currentTarget as HTMLFormElement).get("botcheck")) {
      setStatus("sent");
      return;
    }
    setStatus("sending");

    const message = `
REQUEST A QUOTE SUBMISSION:
--------------------------------------
Service Required: ${service}
Deliverables: ${deliverables.join(", ") || "N/A"}
Budget Range: ${budget}
Target Timeline: ${timeline}
Company/Brand: ${info.company || "N/A"}
Country/Location: ${info.country || "N/A"}
Phone/WhatsApp: ${info.phone || "N/A"}

Project Requirements Brief:
${info.brief}
    `.trim();

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name: info.name,
          email: info.email,
          subject: `New Quote Request: ${service} - ${info.name}`,
          message,
        }),
      });
      const result = await res.json();
      setStatus(result.success ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <AnimatePresence mode="wait">
      {status === "sent" ? (
        <motion.div key="sent" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="py-10">
          <p className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-2xl">✓</p>
          <h2 className="mt-8 text-5xl font-medium tracking-[-0.04em]">
            Thank you, <span className="font-serif font-normal italic">{info.name.split(" ")[0] || "friend"}</span>.
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-muted">
            Your brief is with our team. We’ll reply to {info.email} within 24 hours with next steps and a milestone
            quote.
          </p>
        </motion.div>
      ) : (
        <motion.form key="form" onSubmit={onSubmit} exit={{ opacity: 0, y: -20 }}>
          <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
          <Group label="What can we help with?">
            {SERVICE_OPTIONS.map((o) => (
              <Chip key={o} active={service === o} onClick={() => setService(o)}>
                {o}
              </Chip>
            ))}
          </Group>

          <Group label="Deliverables you need">
            {DELIVERABLE_OPTIONS.map((o) => (
              <Chip key={o} active={deliverables.includes(o)} onClick={() => toggleDeliverable(o)}>
                {o}
              </Chip>
            ))}
          </Group>

          <Group label="Budget">
            {BUDGET_OPTIONS.map((o) => (
              <Chip key={o} active={budget === o} onClick={() => setBudget(o)}>
                {o}
              </Chip>
            ))}
          </Group>

          <Group label="Timeline">
            {TIMELINE_OPTIONS.map((o) => (
              <Chip key={o} active={timeline === o} onClick={() => setTimeline(o)}>
                {o}
              </Chip>
            ))}
          </Group>

          <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
            <Field label="Your name" name="name" required value={info.name} onChange={set("name")} />
            <Field label="Email" name="email" type="email" required value={info.email} onChange={set("email")} />
            <Field label="Company" name="company" value={info.company} onChange={set("company")} />
            <Field label="Country" name="country" value={info.country} onChange={set("country")} />
            <div className="sm:col-span-2">
              <Field label="Phone / WhatsApp" name="phone" type="tel" value={info.phone} onChange={set("phone")} />
            </div>
            <div className="sm:col-span-2">
              <Field
                label="Tell us about your project"
                name="brief"
                required
                textarea
                value={info.brief}
                onChange={set("brief")}
              />
            </div>
          </div>

          {status === "error" && (
            <p className="mt-8 text-[15px] text-red-600" role="alert">
              Something went wrong. Please try again or email us at {STUDIO.email}.
            </p>
          )}

          <div className="mt-14 flex items-center gap-6">
            <Magnetic strength={0.4}>
              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-fill flex h-36 w-36 items-center justify-center rounded-full bg-ink text-lg font-medium text-white transition-colors duration-500 hover:text-ink disabled:opacity-60 md:h-40 md:w-40"
              >
                {status === "sending" ? "Sending…" : "Send brief"}
              </button>
            </Magnetic>
            <p className="max-w-[14rem] text-sm text-muted">We reply within 24 hours. NDAs available on request.</p>
          </div>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
