import Image from "next/image";
import Link from "next/link";
import { FAQ, PROJECTS, STUDIO, TONE_BG } from "@/lib/content";
import { ServiceMockup } from "./ServiceMockups";

export function SectionHeading({
  title,
  intro,
  dot,
  dotClass = "bg-blush text-pink",
}: {
  title: React.ReactNode;
  intro?: React.ReactNode;
  dot?: string;
  dotClass?: string;
}) {
  return (
    <div className="mb-10 flex items-center justify-between gap-8 md:mb-14">
      <div className="max-w-[620px]">
        <h2 className="display text-[clamp(2.3rem,4.6vw,3.8rem)]">{title}</h2>
        {intro && <p className="mt-5 text-[17px] leading-[1.75] text-muted">{intro}</p>}
      </div>
      {dot && (
        <span className={`heading-dot hidden shrink-0 md:grid ${dotClass}`} aria-hidden>
          {dot}
        </span>
      )}
    </div>
  );
}

export function Letter() {
  return (
    <section className="page-width py-10 md:py-16">
      <div className="reveal relative mx-auto max-w-[760px] rounded-[36px] bg-surface p-8 shadow-[0_20px_60px_-30px_#252b4440] ring-1 ring-line sm:p-12">
        <span
          className="float-slow absolute -right-3 -top-5 grid h-14 w-14 place-items-center rounded-2xl bg-lime text-2xl text-brand-ink"
          aria-hidden
        >
          ✦
        </span>
        <h2 className="display text-[clamp(2rem,4vw,3rem)]">for the makers.</h2>
        <div className="mt-6 grid gap-5 text-[17px] leading-[1.8] text-muted">
          <p>
            We started Amirae with one belief: 3D design shouldn&apos;t stay trapped behind a screen. The best ideas deserve to become something you can pick up, turn over, and show a friend.
          </p>
          <p>
            So we do both halves. Precise digital modeling <em>and</em> the craft of actually printing, finishing and shipping it. When we launched FrameCity on MakerWorld, backers around the world pledged{" "}
            <strong className="text-ink">$1,700+</strong> for hand-modeled cities in frames. That told us people want this too.
          </p>
          <p>
            Bring us a sketch, a reference photo, or a half-formed idea. We&apos;ll handle the topology, tolerances and test prints, and you&apos;ll own every file at the end.
          </p>
        </div>
        <p className="display mt-8 text-2xl text-teal">— the amirae team</p>
        <Link href="/about" className="text-link mt-2">
          read our story <span aria-hidden>↗</span>
        </Link>
      </div>
    </section>
  );
}

export function Work() {
  return (
    <section id="work" className="page-width py-20 md:py-28">
      <SectionHeading
        title={
          <>
            things we&apos;ve
            <br />
            made lately.
          </>
        }
        intro="Our own products double as proof: every piece below was modeled, engineered and printed in-house."
        dot="✦"
        dotClass="bg-butter text-orange"
      />

      <div className="grid gap-5 md:grid-cols-2 md:gap-6">
        {PROJECTS.map((p, i) => {
          const featured = i === 0;
          return (
            <article
              key={p.id}
              className={`card reveal group flex flex-col ${featured ? "md:col-span-2 md:flex-row" : ""}`}
            >
              <div
                className={`relative overflow-hidden ${TONE_BG[p.tone]} ${
                  featured ? "aspect-[4/3] md:aspect-auto md:w-[58%]" : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={p.image}
                  alt={`${p.title}: ${p.blurb}`}
                  fill
                  sizes={featured ? "(min-width: 768px) 700px, 100vw" : "(min-width: 768px) 600px, 100vw"}
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>
              <div className={`flex flex-1 flex-col p-7 sm:p-9 ${featured ? "md:justify-center" : ""}`}>
                <p className="eyebrow flex flex-wrap items-center gap-2">
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-xs ${
                      p.status === "live" ? "bg-mint text-teal" : "bg-soft"
                    }`}
                  >
                    {p.status === "live" ? "● live" : "coming soon"}
                  </span>
                  {p.tags.join(" · ")}
                </p>
                <h3 className={`display mt-4 ${featured ? "text-[clamp(2.2rem,4vw,3.4rem)]" : "text-3xl"}`}>
                  {p.title}
                </h3>
                <p className="mt-4 leading-[1.75] text-muted">{p.desc}</p>
                <div className="mt-auto pt-6">
                  {p.link ? (
                    <a href={p.link} target="_blank" rel="noopener noreferrer" className="text-link">
                      visit project <span aria-hidden>↗</span>
                    </a>
                  ) : (
                    <Link href="/#contact" className="text-link text-muted">
                      get notified at launch <span aria-hidden>→</span>
                    </Link>
                  )}
                  {p.id === "framecity" && (
                    <a
                      href={STUDIO.makerworld}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-link ml-6"
                    >
                      $1,700+ backed on MakerWorld <span aria-hidden>↗</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

const SERVICE_CARDS = [
  {
    id: "3d-modeling",
    eyebrow: "3D modeling & assets",
    title: "files that just work.",
    body: "Clean topology, real-world tolerances and PBR textures. CAD, STL, OBJ, FBX or GLB, ready for print, tooling or real-time.",
  },
  {
    id: "product-design",
    eyebrow: "product prototyping",
    title: "sketch today. holding it next week.",
    body: "We turn napkin drawings into functional, manufacturable parts, with DfAM checks and test prints before anything is final.",
  },
  {
    id: "3d-printing",
    eyebrow: "3D printing & fabrication",
    title: "down to 0.05mm.",
    body: "High-resolution FDM and resin prints, cleaned, cured, finished and packed. Snap-fit kits, framed displays and small batches.",
  },
  {
    id: "architectural",
    eyebrow: "architecture & heritage",
    title: "whole skylines, framed.",
    body: "Landmarks and cityscapes rebuilt at scale: wall-mounted reliefs, heritage archives and architectural miniatures.",
  },
  {
    id: "digital-ecosystems",
    eyebrow: "interactive 3D web",
    title: "let people spin it.",
    body: "Three.js and React Three Fiber viewers and product configurators that make your 3D work on any screen. Try the one above.",
  },
  {
    id: "ip",
    eyebrow: "contracts & IP",
    title: "yours, start to finish.",
    body: "Milestone billing, NDAs on request and full commercial IP transferred on handover. No surprises, no strings.",
  },
];

export function Services() {
  return (
    <section id="services" className="page-width py-20 md:py-28">
      <SectionHeading
        title={
          <>
            less guesswork.
            <br />
            more making.
          </>
        }
        intro="One studio for the whole journey, from the first mesh to the parcel on your doorstep."
        dot="✺"
      />

      <div className="grid gap-5 md:grid-cols-2 md:gap-6">
        {SERVICE_CARDS.map((s) => (
          <article key={s.id} className="card reveal flex flex-col">
            <div className="grid min-h-[280px] place-items-center bg-soft/60 p-6 sm:p-8">
              <ServiceMockup id={s.id} />
            </div>
            <div className="flex flex-1 flex-col p-7 sm:p-9">
              <p className="eyebrow">{s.eyebrow}</p>
              <h3 className="display mt-3 text-[28px]">{s.title}</h3>
              <p className="mt-4 leading-[1.75] text-muted">{s.body}</p>
              <Link
                href={s.id === "ip" ? "/services#revenue-model" : `/services#${s.id}`}
                className="text-link mt-auto pt-5"
              >
                learn more <span aria-hidden>→</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Engagement() {
  return (
    <section className="page-width py-16 md:py-24">
      <div className="mx-auto mb-10 max-w-[680px] text-center">
        <h2 className="display text-[clamp(2.4rem,5vw,4rem)]">
          simple terms.
          <br />
          <span className="text-teal">no surprises.</span>
        </h2>
        <p className="mt-5 text-[17px] text-muted">
          Half to start, half at handover. You own everything we make for you.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 md:gap-6">
        <div className="reveal rounded-[32px] bg-mint p-8 sm:p-11">
          <p className="eyebrow">digital</p>
          <h3 className="mt-2 text-3xl">models, files &amp; renders</h3>
          <p className="display mt-6 flex flex-wrap items-baseline gap-3 text-[clamp(3rem,6vw,4.4rem)]">
            <span className="text-teal">3–10</span>
            <span className="font-sans text-lg font-semibold tracking-normal">business days</span>
          </p>
          <ul className="mt-6 grid gap-2.5">
            {["CAD, STEP, STL, OBJ, GLB exports", "4K / 8K photoreal render passes", "Asset licensing or full buy-out", "Full commercial IP on handover"].map((li) => (
              <li key={li} className="flex gap-3">
                <span className="text-teal" aria-hidden>✓</span>
                {li}
              </li>
            ))}
          </ul>
        </div>
        <div className="reveal rounded-[32px] bg-sky p-8 sm:p-11">
          <p className="eyebrow">physical</p>
          <h3 className="mt-2 text-3xl">prints, prototypes &amp; miniatures</h3>
          <p className="display mt-6 flex flex-wrap items-baseline gap-3 text-[clamp(3rem,6vw,4.4rem)]">
            <span className="text-blue">2–4</span>
            <span className="font-sans text-lg font-semibold tracking-normal">weeks</span>
          </p>
          <ul className="mt-6 grid gap-2.5">
            {["FDM & resin, down to 0.05mm layers", "Test prints & quality inspection", "Framed displays & snap-fit kits", "Tracked shipping, worldwide"].map((li) => (
              <li key={li} className="flex gap-3">
                <span className="text-blue" aria-hidden>✓</span>
                {li}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8 flex flex-col items-center gap-3 text-center text-sm text-muted">
        <p>Projects typically start from $500. NDAs signed on request. Monthly retainers available.</p>
        <Link href="/#quote" className="btn-press mt-3">
          start my quote <span className="arrow">↗</span>
        </Link>
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <section id="faq" className="page-width grid gap-10 py-20 md:py-28 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
      <h2 className="display text-[clamp(2.4rem,5vw,4rem)]">
        good
        <br />
        questions.
      </h2>
      <div className="divide-y divide-line border-y border-line">
        {FAQ.map((item, i) => (
          <details key={item.q} className="group" open={i === 0}>
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 [&::-webkit-details-marker]:hidden">
              <span className="display text-xl sm:text-2xl">{item.q}</span>
              <span
                className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-soft text-xl transition-transform duration-200 group-open:rotate-45 group-open:bg-mint"
                aria-hidden
              >
                +
              </span>
            </summary>
            <p className="max-w-[640px] pb-7 leading-[1.8] text-muted">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="page-width py-20 text-center md:py-28">
      <div className="relative mx-auto max-w-[900px]">
        <span className="float-slow absolute -left-2 top-0 hidden h-6 w-6 rounded-full bg-[#ffb6d5] md:block" aria-hidden />
        <span className="float-slow absolute right-4 top-10 hidden h-4 w-4 rounded-full bg-[#f9aa49] md:block" aria-hidden />
        <h2 className="display text-[clamp(2.6rem,6.4vw,5.2rem)]">
          every skyline started
          <br />
          with <span className="marker">one sketch.</span>
        </h2>
        <p className="display mt-6 text-2xl text-muted">let&apos;s make yours.</p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-7 gap-y-4">
          <Link href="/#quote" className="btn-press">
            request a quote <span className="arrow">→</span>
          </Link>
          <a href={`mailto:${STUDIO.email}`} className="text-link">
            {STUDIO.email} <span aria-hidden>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
