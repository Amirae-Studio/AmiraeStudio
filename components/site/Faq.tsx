"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FAQS } from "@/lib/content";
import { LineReveal } from "./Reveal";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="mx-auto grid max-w-[1600px] gap-12 px-5 py-28 sm:px-10 md:grid-cols-12 md:py-40">
      <LineReveal className="text-5xl font-medium tracking-[-0.04em] md:col-span-4 md:text-7xl">
        <span>FAQ</span>
      </LineReveal>
      <ul className="border-t border-line md:col-span-8">
        {FAQS.map((item, i) => {
          const isOpen = open === i;
          return (
            <li key={item.q} className="border-b border-line">
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-6 py-7 text-left text-xl font-medium tracking-tight md:text-2xl"
              >
                {item.q}
                <span
                  className={`relative h-10 w-10 shrink-0 rounded-full border border-line transition-all duration-500 ${
                    isOpen ? "rotate-45 border-ink bg-ink text-white" : ""
                  }`}
                >
                  <span className="absolute left-1/2 top-1/2 h-px w-3.5 -translate-x-1/2 -translate-y-1/2 bg-current" />
                  <span className="absolute left-1/2 top-1/2 h-3.5 w-px -translate-x-1/2 -translate-y-1/2 bg-current" />
                </span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="max-w-2xl pb-8 text-[17px] leading-relaxed text-muted">{item.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
