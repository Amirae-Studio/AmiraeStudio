"use client";

import { useEffect, useRef, useState } from "react";
import Image, { getImageProps } from "next/image";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { LineReveal, Reveal } from "@/components/site/Reveal";
import { PillButton } from "@/components/site/PillButton";

const CAPSULE_IMAGES = [
  "https://joewkzjnrikotpgzyywh.supabase.co/storage/v1/object/public/gallery/amiraeimages/f1-crop.jpg",
  "https://joewkzjnrikotpgzyywh.supabase.co/storage/v1/object/public/gallery/amiraeimages/pill1.jpg",
  "https://joewkzjnrikotpgzyywh.supabase.co/storage/v1/object/public/gallery/amiraeimages/pill2.jpg",
  "https://joewkzjnrikotpgzyywh.supabase.co/storage/v1/object/public/gallery/amiraeimages/pill3.jpg",
  "https://joewkzjnrikotpgzyywh.supabase.co/storage/v1/object/public/gallery/amiraeimages/pill4.jpg",
].map((src) => getImageProps({ src, alt: "", width: 320, height: 144 }).props);

function HeroImageCapsule() {
  const [index, setIndex] = useState(0);
  const [isFastCycling, setIsFastCycling] = useState(true);

  // Preload all capsule images on mount
  useEffect(() => {
    CAPSULE_IMAGES.forEach((src) => {
      // Warm the resized capsule variants, not the full-size originals.
      const img = new window.Image();
      img.srcset = src.srcSet ?? "";
      img.src = src.src;
    });
  }, []);

  // Phase 1: Rapid 1 full round through all images on initial page load
  useEffect(() => {
    if (!isFastCycling) return;

    let step = 0;
    const totalSteps = CAPSULE_IMAGES.length; // Exactly 1 full cycle of all images

    const interval = setInterval(() => {
      step++;
      setIndex((prev) => (prev + 1) % CAPSULE_IMAGES.length);
      if (step >= totalSteps) {
        clearInterval(interval);
        setIsFastCycling(false);
      }
    }, 500);

    return () => clearInterval(interval);
  }, [isFastCycling]);

  // Phase 2: Steady, smooth slow fade-in / fade-out carousel
  useEffect(() => {
    if (isFastCycling) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % CAPSULE_IMAGES.length);
    }, 2800);

    return () => clearInterval(timer);
  }, [isFastCycling]);

  return (
    <span className="relative inline-block h-[0.72em] w-[1.6em] shrink-0 overflow-hidden rounded-full bg-soft shadow-inner align-middle">
      <AnimatePresence mode="popLayout">
        <motion.img
          key={index}
          src={CAPSULE_IMAGES[index].src}
          srcSet={CAPSULE_IMAGES[index].srcSet}
          alt="Amirae 3D Design work preview"
          initial={{ opacity: 0, scale: isFastCycling ? 1 : 1.12 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: isFastCycling ? 1 : 0.94 }}
          transition={{
            duration: isFastCycling ? 0.06 : 0.85,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </AnimatePresence>
    </span>
  );
}

export function Hero() {
  const reelRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: reelRef, offset: ["start end", "start start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [0.86, 1]);
  const radius = useTransform(scrollYProgress, [0, 1], [48, 24]);

  return (
    <section className="relative">
      <div className="mx-auto max-w-[1600px] px-5 pt-36 sm:px-10 md:pt-48">
        <LineReveal
          as="h1"
          className="text-[15vw] font-medium leading-[0.92] tracking-[-0.05em] sm:text-[12vw] xl:text-[188px]"
        >
          <span>We shape</span>
          <span className="flex items-center gap-[0.18em]">
            ideas
            <HeroImageCapsule />
            into
          </span>
          <span className="font-serif font-normal italic tracking-[-0.02em]">objects.</span>
        </LineReveal>

        <div className="mt-12 grid gap-10 md:mt-16 md:grid-cols-12">
          {/* No fade: the intro copy is the mobile LCP element and must paint before hydration. */}
          <Reveal delay={0.3} fade={false} className="md:col-span-5 md:col-start-7">
            <p className="text-lg leading-relaxed text-muted md:text-xl">
              Amirae Studio is a 3D design and fabrication studio. We turn complex concepts into precise detail
              through 3D modeling, product prototyping, 3D printing &amp; fabrication, architectural models and
              interactive 3D web.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <PillButton href="/contact">Start a project</PillButton>
              <PillButton href="#work" variant="outline">
                See our work
              </PillButton>
            </div>
          </Reveal>
        </div>
      </div>

      <div ref={reelRef} className="mt-20 md:mt-28">
        <motion.div
          style={{ scale, borderRadius: radius }}
          className="relative mx-auto aspect-[16/10] w-full max-w-[1600px] overflow-hidden bg-soft md:aspect-[16/8]"
        >
          <Image
            src="https://joewkzjnrikotpgzyywh.supabase.co/storage/v1/object/public/gallery/IMG-20260831-WA0037.jpg"
            alt="A white 3D-printed city skyline model in a black frame on a wooden desk"
            fill
            sizes="(min-width: 1600px) 1600px, 100vw"
            className="object-cover object-bottom"
          />
        </motion.div>
      </div>
    </section>
  );
}
