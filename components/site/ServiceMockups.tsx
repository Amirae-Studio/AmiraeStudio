"use client";

import { useState } from "react";
import Image from "next/image";

function FileList() {
  const files = [
    { name: "skyline_nyc.step", size: "18.4 MB", tone: "bg-sky text-blue" },
    { name: "skyline_nyc.stl", size: "42.1 MB", tone: "bg-mint text-teal" },
    { name: "hero_render_8k.png", size: "31.0 MB", tone: "bg-blush text-pink" },
    { name: "web_viewer.glb", size: "3.2 MB", tone: "bg-butter text-orange" },
  ];
  return (
    <ul className="w-full max-w-[360px] -rotate-2 rounded-3xl bg-surface p-3 shadow-[0_12px_40px_-16px_#252b4440]">
      {files.map((f) => (
        <li key={f.name} className="flex items-center gap-3 rounded-2xl px-3 py-2.5 hover:bg-soft">
          <span className={`grid h-9 w-9 place-items-center rounded-xl text-[10px] font-extrabold uppercase ${f.tone}`}>
            {f.name.split(".").pop()}
          </span>
          <span className="min-w-0 flex-1">
            <span className="block truncate text-sm font-semibold">{f.name}</span>
            <span className="block text-xs text-muted">{f.size}</span>
          </span>
          <span className="text-teal" aria-hidden>✓</span>
        </li>
      ))}
    </ul>
  );
}

function Thread() {
  return (
    <div className="w-full max-w-[360px] rotate-1 rounded-3xl bg-surface p-5 text-left shadow-[0_12px_40px_-16px_#252b4440]">
      <p className="mb-1 ml-1 text-[11px] text-muted">you</p>
      <p className="rounded-2xl bg-soft px-4 py-3 text-sm">Can the lid snap-fit instead of using screws?</p>
      <p className="mb-1 ml-1 mt-4 text-[11px] text-pink">amirae studio</p>
      <p className="rounded-2xl bg-blush px-4 py-3 text-sm">
        Yep. Clearance set to 0.2mm, test print going tonight. Photos by morning.
      </p>
      <p className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-teal">
        <span className="text-base">✓</span> prototype v3 approved
      </p>
    </div>
  );
}

function PrintProgress() {
  return (
    <div className="w-full max-w-[360px] -rotate-1 rounded-3xl bg-surface p-5 shadow-[0_12px_40px_-16px_#252b4440]">
      <div className="flex items-center justify-between text-xs font-semibold">
        <span className="flex items-center gap-2 text-orange">
          <span className="h-2 w-2 animate-pulse rounded-full bg-current" /> printing
        </span>
        <span className="text-muted">resin · 0.05mm</span>
      </div>
      <p className="display mt-3 text-2xl">London skyline</p>
      <div className="mt-4 h-3 overflow-hidden rounded-full bg-soft">
        <div className="h-full w-[64%] rounded-full bg-[#f9aa49] [animation:fill-bar_2.4s_ease-out]" />
      </div>
      <div className="mt-2 flex justify-between text-xs text-muted">
        <span>layer 1,204 of 1,860</span>
        <span>64%</span>
      </div>
      <div className="mt-5 grid grid-cols-3 gap-2 text-center text-[11px] font-semibold">
        {["print", "cure", "frame"].map((step, i) => (
          <span key={step} className={`rounded-full py-1.5 ${i === 0 ? "bg-butter text-orange" : "bg-soft text-muted"}`}>
            {step}
          </span>
        ))}
      </div>
    </div>
  );
}

function FramedPhoto() {
  return (
    <div className="relative aspect-square w-full max-w-[280px] rotate-2 overflow-hidden rounded-3xl border-[6px] border-surface shadow-[0_12px_40px_-16px_#252b4460]">
      <Image src="/london-table.jpg" alt="Framed 3D-printed London skyline on a table" fill sizes="280px" className="object-cover" />
    </div>
  );
}

const SWATCHES = [
  { name: "mint", color: "#21e1b5" },
  { name: "coral", color: "#ff7a6b" },
  { name: "sky", color: "#5b8cff" },
  { name: "sun", color: "#ffc23d" },
];

function Configurator() {
  const [swatch, setSwatch] = useState(SWATCHES[0]);
  return (
    <div className="w-full max-w-[360px] overflow-hidden rounded-3xl bg-surface shadow-[0_12px_40px_-16px_#252b4440]">
      <div className="flex items-center gap-1.5 border-b border-line px-4 py-2.5" aria-hidden>
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff6159]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c941]" />
        <span className="ml-3 rounded-full bg-soft px-3 py-0.5 text-[10px] text-muted">configure.yourbrand.com</span>
      </div>
      <div className="grid place-items-center py-6">
        <div
          className="h-24 w-24 rounded-[34%] transition-[background] duration-500 [transform:rotate(-12deg)]"
          style={{
            background: `radial-gradient(circle at 30% 28%, #ffffffcc 0 8%, transparent 32%), radial-gradient(circle at 70% 80%, #00000030, transparent 60%), ${swatch.color}`,
            boxShadow: `0 18px 30px -12px ${swatch.color}`,
          }}
          role="img"
          aria-label={`Product preview in ${swatch.name}`}
        />
      </div>
      <div className="flex items-center justify-between gap-2 px-4 pb-4">
        <span className="text-xs font-semibold">
          color · <span className="text-muted">{swatch.name}</span>
        </span>
        <div className="flex gap-2">
          {SWATCHES.map((s) => (
            <button
              key={s.name}
              type="button"
              onClick={() => setSwatch(s)}
              aria-label={`Show in ${s.name}`}
              aria-pressed={s.name === swatch.name}
              className="h-7 w-7 rounded-full border-2 border-surface ring-2 ring-transparent transition-transform hover:scale-110 aria-pressed:ring-ink"
              style={{ background: s.color }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function Contract() {
  const rows = [
    { label: "Kickoff · 50% deposit", done: true },
    { label: "Model & render approval", done: true },
    { label: "Final handover · 50%", done: false },
    { label: "IP transferred to you", done: false },
  ];
  return (
    <div className="w-full max-w-[360px] rotate-1 rounded-3xl bg-surface p-5 shadow-[0_12px_40px_-16px_#252b4440]">
      <p className="eyebrow">statement of work · #A-0142</p>
      <ul className="mt-3 grid gap-2">
        {rows.map((r) => (
          <li key={r.label} className="flex items-center gap-3 rounded-2xl bg-soft px-3 py-2.5 text-sm">
            <span
              className={`grid h-6 w-6 shrink-0 place-items-center rounded-full text-xs ${
                r.done ? "bg-brand text-brand-ink" : "border-2 border-line"
              }`}
              aria-hidden
            >
              {r.done && "✓"}
            </span>
            <span className={r.done ? "" : "text-muted"}>{r.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ServiceMockup({ id }: { id: string }) {
  switch (id) {
    case "3d-modeling":
      return <FileList />;
    case "product-design":
      return <Thread />;
    case "3d-printing":
      return <PrintProgress />;
    case "architectural":
      return <FramedPhoto />;
    case "digital-ecosystems":
      return <Configurator />;
    default:
      return <Contract />;
  }
}
