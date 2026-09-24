import Image from "next/image";
import type { Metadata } from "next";
import { STATS, STUDIO } from "@/lib/content";
import { PageHero } from "@/components/site/PageHero";
import { LineReveal, Reveal } from "@/components/site/Reveal";
import { PillButton } from "@/components/site/PillButton";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about AMIRAE STUDIO LLC — our story, capabilities, customers and cross-disciplinary team of 3D artists and engineers.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About — AMIRAE STUDIO LLC",
    description: "AMIRAE STUDIO LLC company story, capabilities, customers and team.",
    url: "https://www.amirae.studio/about",
    siteName: "AMIRAE STUDIO LLC",
    images: ["/opengraph-image"],
  },
};

const MILESTONES = [
  {
    label: "Founding",
    title: "Physical meets digital",
    desc: "Amirae Studio was founded on one conviction: 3D design shouldn’t stay trapped behind glass. We set out to bridge precise parametric modeling with tangible craft and additive manufacturing.",
  },
  {
    label: "Crowdfunding",
    title: "FrameCity goes global",
    desc: "Our modular, high-detail 3D-printed cityscapes launched on MakerWorld and passed $18,000 from 177 backers — establishing our community across the U.S. and worldwide.",
  },
  {
    label: "Today",
    title: "An end-to-end 3D studio",
    desc: "We now run as a full-service studio: product prototyping, architectural miniatures, game-ready assets and interactive WebGL software for businesses and creators.",
  },
];

const CAPABILITIES = [
  "3D CAD & digital sculpting",
  "Industrial product prototyping",
  "SLA & FDM print fabrication",
  "Architectural & heritage models",
  "WebGL & 3D web apps",
  "IP & turnkey licensing",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title={
          <>
            <span>Artists and</span>
            <span>
              <span className="font-serif font-normal italic">engineers,</span> one
            </span>
            <span>studio.</span>
          </>
        }
        intro="Founded by 3D artists and computational engineers, Amirae Studio brings rigor, aesthetic care and industrial reliability to where digital design meets physical manufacturing."
      />

      <section className="mx-auto max-w-[1600px] px-5 sm:px-10">
        <Reveal className="grid gap-4 md:grid-cols-12">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl md:col-span-7">
            <Image
              src="https://joewkzjnrikotpgzyywh.supabase.co/storage/v1/object/public/gallery/IMG-20260831-WA0048.jpg"
              alt="Close-up of a white 3D-printed skyline model"
              fill
              preload
              sizes="(min-width: 768px) 58vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="relative min-h-72 overflow-hidden rounded-3xl md:col-span-5">
            <Image
              src="https://joewkzjnrikotpgzyywh.supabase.co/storage/v1/object/public/gallery/amiraeimages/images.jpg"
              alt="The Amirae team at work"
              fill
              sizes="(min-width: 768px) 42vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </section>

      <section className="mx-auto grid max-w-[1600px] gap-12 px-5 py-28 sm:px-10 md:grid-cols-12 md:py-40">
        <LineReveal className="text-5xl font-medium tracking-[-0.04em] md:col-span-4 md:text-7xl">
          <span>
            Our <span className="font-serif font-normal italic">story</span>
          </span>
        </LineReveal>
        <div className="md:col-span-8">
          {MILESTONES.map((m, i) => (
            <Reveal key={m.label} delay={i * 0.06}>
              <div className="grid gap-4 border-t border-line py-10 md:grid-cols-8">
                <span className="text-sm text-muted md:col-span-2">{m.label}</span>
                <div className="md:col-span-6">
                  <h3 className="text-3xl font-medium tracking-tight">{m.title}</h3>
                  <p className="mt-4 text-[17px] leading-relaxed text-muted">{m.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-ink text-white">
        <div className="mx-auto max-w-[1600px] px-5 py-28 sm:px-10 md:py-40">
          <LineReveal className="text-5xl font-medium tracking-[-0.04em] md:text-7xl">
            <span>What we’re</span>
            <span>
              <span className="font-serif font-normal italic">good at</span>
            </span>
          </LineReveal>
          <ul className="mt-16 grid border-t border-white/15 sm:grid-cols-2 lg:grid-cols-3">
            {CAPABILITIES.map((c, i) => (
              <li
                key={c}
                className="flex items-baseline gap-5 border-b border-white/15 py-8 text-2xl font-medium tracking-tight"
              >
                <span className="text-sm font-normal text-white/60">{String(i + 1).padStart(2, "0")}</span>
                {c}
              </li>
            ))}
          </ul>
          <div className="mt-20 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="py-6">
                <p className="text-6xl font-medium tracking-[-0.05em]">{s.value}</p>
                <p className="mt-3 max-w-[16rem] text-[15px] text-white/50">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1600px] items-center gap-12 px-5 py-28 sm:px-10 md:grid-cols-12 md:py-40">
        <Reveal className="md:col-span-6">
          <div className="relative aspect-square overflow-hidden rounded-3xl bg-soft">
            <Image
              src="https://joewkzjnrikotpgzyywh.supabase.co/storage/v1/object/public/gallery/amiraeimages/Launch-thumbnail1.jpg"
              alt="FrameCity model on MakerWorld"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
        <Reveal delay={0.1} className="md:col-span-5 md:col-start-8">
          <p className="text-sm text-muted">Signature project</p>
          <h2 className="mt-4 text-5xl font-medium tracking-[-0.04em] md:text-6xl">
            FrameCity — skylines in <span className="font-serif font-normal italic">frames</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            Hand-modeled architectural skylines converted into high-precision modular relief art, backed by makers
            around the world with 5-star print feedback.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <PillButton href={STUDIO.makerworld} external>
              View on MakerWorld ↗
            </PillButton>
            <PillButton href="/services" variant="outline">
              Our services
            </PillButton>
          </div>
        </Reveal>
      </section>
    </>
  );
}
