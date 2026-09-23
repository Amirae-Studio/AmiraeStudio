"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { SERVICES } from "@/lib/content";
import { LineReveal, Reveal } from "@/components/site/Reveal";

export function ServicesList() {
  const [active, setActive] = useState<number | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 150, damping: 20 });
  const sy = useSpring(y, { stiffness: 150, damping: 20 });

  // Pointer events don't fire while scrolling, so drop the preview explicitly.
  useEffect(() => {
    if (active === null) return;
    const hide = () => setActive(null);
    window.addEventListener("scroll", hide, { passive: true });
    return () => window.removeEventListener("scroll", hide);
  }, [active]);

  return (
    <section className="mx-auto max-w-[1600px] px-5 py-28 sm:px-10 md:py-40">
      <div className="grid gap-10 md:grid-cols-12">
        <LineReveal className="text-5xl font-medium tracking-[-0.04em] md:col-span-6 md:text-7xl">
          <span>What we do</span>
        </LineReveal>
        <Reveal className="md:col-span-5 md:col-start-8" delay={0.1}>
          <p className="text-lg leading-relaxed text-muted">
            With 10+ years of hands-on experience, we partner with brands, hardware startups, architects and makers to
            take an idea from sketch to screen to shelf.
          </p>
        </Reveal>
      </div>

      <ul
        className="relative mt-16 border-t border-line md:mt-24"
        onPointerMove={(e) => {
          x.set(e.clientX);
          y.set(e.clientY);
        }}
        onPointerLeave={() => setActive(null)}
      >
        {SERVICES.map((s, i) => (
          <li key={s.id} className="border-b border-line">
            <Link
              href={`/services#${s.id}`}
              onPointerMove={() => setActive(i)}
              data-cursor="Explore"
              className="group grid items-baseline gap-3 py-8 md:grid-cols-12 md:py-11"
            >
              <span className="text-sm text-muted md:col-span-1">{s.number}</span>
              <span className="text-3xl font-medium tracking-[-0.03em] transition-transform duration-700 ease-out-expo group-hover:translate-x-4 md:col-span-6 md:text-5xl">
                {s.title}
              </span>
              <span className="max-w-md text-[15px] leading-relaxed text-muted md:col-span-5">{s.short}</span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Floating preview follows the pointer on desktop */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-30 hidden h-64 w-80 overflow-hidden rounded-2xl md:block"
        style={{ x: sx, y: sy, translateX: "-50%", translateY: "-50%" }}
        animate={{ scale: active === null ? 0 : 1, opacity: active === null ? 0 : 1 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <AnimatePresence initial={false}>
          {active !== null && (
            <motion.img
              key={active}
              src={SERVICES[active].image}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
              initial={{ opacity: 0, scale: 1.15 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
