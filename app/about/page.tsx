import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PROCESS, SERVICES, STUDIO, TONE_BG, TONE_TEXT } from "@/lib/content";
import { Header } from "@/components/site/Header";
import { FinalCta, SectionHeading } from "@/components/site/Sections";
import { Footer } from "@/components/site/Footer";

export const metadata: Metadata = {
  title: "About Us — AMIRAE STUDIO LLC",
  description:
    "Learn about AMIRAE STUDIO LLC — our company story, core capabilities, global customers, operating model, and cross-disciplinary team of 3D artists and engineers.",
  openGraph: {
    title: "About Us — AMIRAE STUDIO LLC",
    description: "AMIRAE STUDIO LLC company story, capabilities, customers, operating model, and team.",
    url: "https://www.amirae.studio/about",
    siteName: STUDIO.name,
    type: "website",
  },
};

const METRICS = [
  { number: "$1,700+", label: "crowdfunded on MakerWorld", tone: "bg-sky text-blue" },
  { number: "100%", label: "commercial IP transferred", tone: "bg-mint text-teal" },
  { number: "24h", label: "guaranteed response", tone: "bg-blush text-pink" },
  { number: "global", label: "U.S. & international shipping", tone: "bg-butter text-orange" },
];

const MILESTONES = [
  {
    tag: "founding",
    title: "physical meets digital",
    desc: "Amirae Studio was founded on one conviction: 3D design shouldn't stay trapped behind glass. We set out to bridge precise parametric modeling with tangible craftsmanship and additive manufacturing.",
  },
  {
    tag: "crowdfunding",
    title: "FrameCity finds its people",
    desc: "We launched FrameCity on MakerWorld, a modular collection of high-detail 3D-printed cityscapes. Backers across the U.S. and worldwide pledged $1,700+ and gave it five-star print feedback.",
  },
  {
    tag: "today",
    title: "an end-to-end 3D studio",
    desc: "Today we're a full-service commercial studio: rapid product prototyping, architectural miniatures, game-ready digital assets and interactive WebGL software for businesses and creators.",
  },
];

const CAPABILITIES = [
  ...SERVICES.map((s) => ({ title: s.short, tagline: s.subtitle, desc: s.description, tone: s.tone })),
  {
    title: "IP & licensing",
    tagline: "Clean, simple governance",
    desc: "Full intellectual property assignment, NDA protection and milestone-backed commercial contracts on every commission.",
    tone: "lilac" as const,
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="page-width pb-16 pt-8 md:pb-24 md:pt-14">
          <p className="eyebrow mb-6">about the studio</p>
          <h1 className="display max-w-[900px] text-[clamp(3rem,7vw,5.6rem)]">
            precision you can <span className="marker">feel.</span>
          </h1>
          <p className="mt-7 max-w-[640px] text-lg leading-[1.7] text-muted">
            <strong className="text-ink">{STUDIO.name}</strong> is a commercial 3D modeling, rapid prototyping, physical fabrication and interactive web visualization studio serving brands and makers across the United States and worldwide.
          </p>

          <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {METRICS.map((m) => (
              <div key={m.label} className={`rounded-[28px] p-6 ${m.tone.split(" ")[0]}`}>
                <p className={`display text-[clamp(2rem,4vw,2.8rem)] ${m.tone.split(" ")[1]}`}>{m.number}</p>
                <p className="mt-1 text-sm font-semibold">{m.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Story */}
        <section className="page-width grid gap-12 py-16 md:py-24 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="display text-[clamp(2.3rem,4.6vw,3.6rem)]">
              from a sketch
              <br />
              to your shelf.
            </h2>
            <div className="mt-6 grid gap-5 text-[17px] leading-[1.8] text-muted">
              <p>
                Founded by 3D artists and computational engineers, Amirae brings rigor, taste and industrial reliability to the place where digital design meets physical manufacturing.
              </p>
              <p>
                Whether it&apos;s a framed architectural relief, a snap-fit prototype for a hardware brand, or an interactive WebGL viewer, we sweat proportion, curvature and printability.
              </p>
            </div>
            <Link href="/services" className="text-link mt-4">
              explore all services <span aria-hidden>→</span>
            </Link>
          </div>

          <ol className="relative grid gap-5 border-l-2 border-line pl-8">
            {MILESTONES.map((m, i) => (
              <li key={m.tag} className="reveal relative">
                <span
                  className={`absolute -left-[45px] top-1 h-5 w-5 rounded-full border-4 border-canvas ${
                    ["bg-brand", "bg-[#f58220]", "bg-[#ed438b]"][i]
                  }`}
                  aria-hidden
                />
                <p className="eyebrow">{m.tag}</p>
                <h3 className="display mt-1 text-2xl">{m.title}</h3>
                <p className="mt-2 leading-[1.75] text-muted">{m.desc}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Capabilities */}
        <section className="page-width py-16 md:py-24">
          <SectionHeading
            title={
              <>
                what we&apos;re
                <br />
                good at.
              </>
            }
            intro="Cross-disciplinary craft spanning digital CAD sculpting, physical fabrication and real-time interactive systems."
            dot="✦"
            dotClass="bg-mint text-teal"
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CAPABILITIES.map((c) => (
              <div key={c.title} className={`reveal rounded-[28px] p-7 ${TONE_BG[c.tone]}`}>
                <p className={`text-sm font-bold ${TONE_TEXT[c.tone]}`}>{c.tagline}</p>
                <h3 className="display mt-2 text-2xl">{c.title}</h3>
                <p className="mt-3 text-[15px] leading-[1.7] text-muted">{c.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Proof */}
        <section className="page-width py-16 md:py-24">
          <div className="card grid lg:grid-cols-2">
            <div className="relative aspect-square lg:aspect-auto">
              <Image src="/makerworld.jpg" alt="FrameCity London framed skyline" fill sizes="(min-width: 1024px) 620px, 100vw" className="object-cover" />
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-12">
              <p className="eyebrow">trusted by makers & brands</p>
              <h2 className="display mt-3 text-[clamp(2.2rem,4vw,3.2rem)]">backed by the people who print.</h2>
              <p className="mt-5 leading-[1.8] text-muted">
                We work with hardware startups, creative agencies, architecture firms and thousands of independent makers across the U.S., Europe and Asia. FrameCity, our flagship collection of hand-modeled skylines in custom frames, raised $1,700+ from backers worldwide.
              </p>
              <ul className="mt-6 grid gap-2.5">
                <li className="flex gap-3"><span className="text-teal">✓</span>Five-star physical print feedback on MakerWorld</li>
                <li className="flex gap-3"><span className="text-teal">✓</span>Milestone contracts &amp; full IP transfer for B2B partners</li>
              </ul>
              <a href={STUDIO.makerworld} target="_blank" rel="noopener noreferrer" className="btn-press mt-8 self-start">
                view the campaign <span className="arrow">↗</span>
              </a>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="page-width py-16 md:py-24">
          <SectionHeading
            title={
              <>
                how a project
                <br />
                actually goes.
              </>
            }
            intro="A transparent four-step workflow with predictable milestones, real QA and prompt delivery."
          />
          <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((p, i) => (
              <li key={p.title} className="card reveal p-7">
                <span className="display grid h-12 w-12 place-items-center rounded-2xl bg-mint text-2xl text-teal">{i + 1}</span>
                <h3 className="display mt-5 text-xl">{p.title}</h3>
                <p className="mt-2 text-[15px] leading-[1.7] text-muted">{p.desc}</p>
              </li>
            ))}
          </ol>
        </section>

        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
