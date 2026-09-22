"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PROJECTS, STUDIO, TONE_BG, TONE_TEXT } from "@/lib/content";

export function Hero() {
  const [activeId, setActiveId] = useState(PROJECTS[0].id);
  const active = PROJECTS.find((p) => p.id === activeId) ?? PROJECTS[0];

  return (
    <section className="page-width grid items-center gap-14 pb-24 pt-6 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:pb-32 lg:pt-12">
      <div>
        <p className="eyebrow mb-6 flex items-center gap-2.5 text-ink">
          <span className="color-dots" aria-hidden>
            <i className="bg-brand" />
            <i className="bg-[#f58220]" />
            <i className="bg-[#ed438b]" />
          </span>
          3D design &amp; digital fabrication studio
        </p>

        <h1 className="display text-[clamp(3.1rem,7vw,5.4rem)]">
          your idea,
          <br />
          in your <span className="marker">hands.</span>
        </h1>

        <p className="mt-7 max-w-[540px] text-lg leading-[1.7] text-muted">
          We model, prototype, print and ship. From miniature cityscapes to production-ready product parts and interactive 3D on the web, all made by one small, obsessive studio.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
          <Link href="/#quote" className="btn-press">
            request a quote <span className="arrow">→</span>
          </Link>
          <Link href="/#work" className="text-link">
            <span aria-hidden>↓</span> see the work
          </Link>
        </div>
        <p className="mt-5 text-[13px] text-muted">
          Digital in 3–10 days · physical shipped worldwide · replies within 24h
        </p>

        <a
          href={`mailto:${STUDIO.email}`}
          className="mt-10 inline-flex items-center gap-3 rounded-full border border-line py-2 pl-2 pr-5 text-sm transition-colors hover:border-teal"
        >
          <span className="grid h-9 w-9 place-items-center rounded-full bg-mint text-base" aria-hidden>
            ✉
          </span>
          <span>
            <span className="font-semibold">Just want to talk?</span>{" "}
            <span className="text-muted">{STUDIO.email} ↗</span>
          </span>
        </a>
      </div>

      {/* Preview: project chips + photo on a tilted blob */}
      <div className="relative isolate min-w-0 pb-10 pt-4">
        <div
          className="absolute inset-x-[-12px] bottom-0 top-16 -z-10 rotate-[-8deg] rounded-[47%_49%_41%_46%] bg-mint"
          aria-hidden
        >
          <span className="absolute right-6 top-2 h-6 w-6 rounded-full bg-[#ffb6d5]" />
          <span className="absolute -left-3 bottom-8 h-3.5 w-3.5 rounded-full bg-[#f9aa49]" />
        </div>

        <div
          className="relative z-10 -mb-4 flex -rotate-3 flex-wrap justify-center gap-2 px-2"
          role="group"
          aria-label="Choose a project to preview"
        >
          {PROJECTS.map((p) => (
            <button
              key={p.id}
              type="button"
              className={`chip ${p.id === activeId ? TONE_TEXT[p.tone] : ""}`}
              aria-pressed={p.id === activeId}
              onClick={() => setActiveId(p.id)}
            >
              <span
                className={`grid h-7 w-7 place-items-center rounded-[10px] text-xs font-extrabold ${TONE_BG[p.tone]} ${TONE_TEXT[p.tone]}`}
              >
                {p.mark}
              </span>
              <span className="text-ink">{p.title}</span>
            </button>
          ))}
        </div>

        <div className="relative mx-auto max-w-[560px] rotate-[1.5deg] overflow-hidden rounded-[32px] border-[6px] border-surface bg-surface shadow-[0_24px_60px_-20px_#252b4440]">
          <div className="relative aspect-[5/4]">
            {PROJECTS.map((p) => (
              <Image
                key={p.id}
                src={p.image}
                alt={`${p.title}: ${p.blurb}`}
                fill
                sizes="(min-width: 1024px) 560px, 100vw"
                priority={p.id === PROJECTS[0].id}
                className={`object-cover transition-opacity duration-500 ${p.id === activeId ? "opacity-100" : "opacity-0"}`}
              />
            ))}
          </div>
          <div className="flex items-center justify-between gap-4 px-5 py-4">
            <div className="min-w-0">
              <p className="display truncate text-xl">{active.title}</p>
              <p className="truncate text-sm text-muted">{active.blurb}</p>
            </div>
            <span
              className={`shrink-0 rounded-full px-3 py-1 text-xs font-bold ${
                active.status === "live" ? "bg-mint text-teal" : "bg-soft text-muted"
              }`}
            >
              {active.status === "live" ? "● live" : "coming soon"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
