"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// A full-bleed band that widens into place as it enters the viewport.
export function Reel() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "start center"] });
  const scale = useTransform(scrollYProgress, [0, 1], [0.88, 1]);
  const radius = useTransform(scrollYProgress, [0, 1], [56, 24]);

  return (
    <div ref={ref} className="px-0 pt-20 md:pt-28">
      <motion.figure
        style={{ scale, borderRadius: radius }}
        className="relative mx-auto aspect-[16/10] w-full max-w-[1600px] overflow-hidden bg-soft md:aspect-[16/7]"
      >
        {/* //ADD IMAGE HERE — /f1.jpg is missing from public/ (currently 404s). */}
        <Image
          src="https://joewkzjnrikotpgzyywh.supabase.co/storage/v1/object/public/gallery/amiraeimages/f1.jpg"
          alt="A white 3D-printed city skyline model in a black frame on a wooden desk"
          fill
          sizes="(min-width: 1600px) 1600px, 100vw"
          className="object-cover"
        />
      </motion.figure>
    </div>
  );
}
