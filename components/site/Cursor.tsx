"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type Mode = "default" | "link" | "label";

// A soft follower cursor. Elements can opt into a label with data-cursor="View".
export function Cursor() {
  const [visible, setVisible] = useState(false);
  const [mode, setMode] = useState<Mode>("default");
  const [label, setLabel] = useState("");

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!fine.matches || reduce.matches) return;

    document.documentElement.classList.add("has-cursor");

    let last = { x: -100, y: -100 };
    const update = (target: Element | null) => {
      const labelled = target?.closest<HTMLElement>("[data-cursor]");
      if (labelled) {
        setMode("label");
        setLabel(labelled.dataset.cursor ?? "");
      } else if (target?.closest("a, button, input, textarea, select, label, [role='button']")) {
        setMode("link");
      } else {
        setMode("default");
      }
    };
    const onMove = (e: PointerEvent) => {
      last = { x: e.clientX, y: e.clientY };
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
      update(e.target as Element | null);
    };
    // Content moves under a still pointer while scrolling.
    const onScroll = () => update(document.elementFromPoint(last.x, last.y));
    const onLeave = () => setVisible(false);

    window.addEventListener("pointermove", onMove);
    window.addEventListener("scroll", onScroll, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("scroll", onScroll);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      document.documentElement.classList.remove("has-cursor");
    };
  }, [x, y]);

  const size = mode === "label" ? 96 : mode === "link" ? 44 : 12;

  return (
    <motion.div
      aria-hidden
      className={`pointer-events-none fixed left-0 top-0 z-[100] flex items-center justify-center rounded-full ${
        mode === "label" ? "" : "mix-blend-difference"
      }`}
      style={{ x: sx, y: sy, translateX: "-50%", translateY: "-50%" }}
      animate={{
        width: size,
        height: size,
        opacity: visible ? 1 : 0,
        backgroundColor: mode === "label" ? "rgba(11,11,11,1)" : "rgba(255,255,255,1)",
      }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
    >
      <motion.span
        className="text-xs font-medium tracking-wide text-white"
        animate={{ opacity: mode === "label" ? 1 : 0, scale: mode === "label" ? 1 : 0.6 }}
      >
        {label}
      </motion.span>
    </motion.div>
  );
}
