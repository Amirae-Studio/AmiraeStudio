import type { Metadata } from "next";
import { PROCESS, SERVICES } from "@/lib/content";
import { PageHero } from "@/components/site/PageHero";
import { LineReveal, Reveal } from "@/components/site/Reveal";
import { PillButton } from "@/components/site/PillButton";

export const metadata: Metadata = {
  title: "Services",
  description:
    "3D modeling, product prototyping, 3D printing fabrication, architectural scale modeling and interactive 3D web engineering by AMIRAE STUDIO LLC.",
  openGraph: {
    title: "Services — AMIRAE STUDIO LLC",
    description: "Commercial 3D design, fabrication and web services by AMIRAE STUDIO LLC.",
    url: "https://www.amirae.studio/services",
    siteName: "AMIRAE STUDIO LLC",
  },
};

const ENGAGEMENTS = [
  {
    title: "Custom projects",
    desc: "Bespoke engagements on milestone billing — 50% at kickoff, 50% on delivery of final files.",
  },
  {
    title: "Asset licensing",
    desc: "Commercial and personal licenses for our 3D print files, STL meshes and asset packs.",
  },
  {
    title: "Physical products",
    desc: "Finished 3D-printed art, framed cityscapes and scale models shipped worldwide.",
  },
  {
    title: "Retainers",
    desc: "Ongoing monthly engineering for 3D configurators, WebGL integrations and studio sites.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={
          <>
            <span>Digital precision,</span>
            <span>
              <span className="font-serif font-normal italic">physical</span> craft.
            </span>
          </>
        }
        intro="A registered 3D design house covering the full path from model to made: high-precision modeling, prototyping, fabrication, scale architecture and interactive 3D on the web."
      />

      <section className="mx-auto max-w-[1600px] px-5 sm:px-10">
        {SERVICES.map((s) => (
          <article
            key={s.id}
            id={s.id}
            className="grid scroll-mt-24 gap-10 border-t border-line py-16 md:grid-cols-12 md:gap-12 md:py-24"
          >
            <Reveal className="md:col-span-5">
              <div className="overflow-hidden rounded-3xl bg-soft">
                <img
                  src={s.image}
                  alt=""
                  className="aspect-[4/3] w-full object-cover transition-transform duration-[1.2s] ease-out-expo hover:scale-105"
                />
              </div>
            </Reveal>

            <div className="md:col-span-6 md:col-start-7">
              <Reveal>
                <p className="text-sm text-muted">{s.number}</p>
                <h2 className="mt-3 text-4xl font-medium tracking-[-0.03em] md:text-5xl">{s.title}</h2>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{s.description}</p>
              </Reveal>

              <Reveal delay={0.1}>
                <ul className="mt-10 border-t border-line">
                  {s.deliverables.map((d) => (
                    <li key={d} className="flex gap-4 border-b border-line py-4 text-[15px]">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ink" />
                      {d}
                    </li>
                  ))}
                </ul>

                <dl className="mt-10 grid gap-6 text-[15px] sm:grid-cols-3">
                  <div>
                    <dt className="text-sm text-muted">For</dt>
                    <dd className="mt-1.5 leading-relaxed">{s.clients}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-muted">Engagement</dt>
                    <dd className="mt-1.5 leading-relaxed">{s.engagement}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-muted">Timeline</dt>
                    <dd className="mt-1.5 leading-relaxed">{s.timeline}</dd>
                  </div>
                </dl>
              </Reveal>
            </div>
          </article>
        ))}
      </section>

      <section className="bg-soft">
        <div className="mx-auto max-w-[1600px] px-5 py-28 sm:px-10 md:py-40">
          <LineReveal className="text-5xl font-medium tracking-[-0.04em] md:text-7xl">
            <span>
              How we <span className="font-serif font-normal italic">work</span>
            </span>
          </LineReveal>
          <div className="mt-16 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((p, i) => (
              <Reveal key={p.step} delay={i * 0.08} className="border-t border-ink/15 py-8">
                <p className="text-sm text-muted">{p.step}</p>
                <h3 className="mt-4 text-2xl font-medium tracking-tight">{p.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">{p.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1600px] gap-12 px-5 py-28 sm:px-10 md:grid-cols-12 md:py-40">
        <div className="md:col-span-5">
          <LineReveal className="text-5xl font-medium tracking-[-0.04em] md:text-7xl">
            <span>Ways to</span>
            <span>
              work <span className="font-serif font-normal italic">with us</span>
            </span>
          </LineReveal>
          <Reveal delay={0.1} className="mt-10">
            <PillButton href="/contact">Request a quote</PillButton>
          </Reveal>
        </div>
        <div className="grid gap-x-10 sm:grid-cols-2 md:col-span-7">
          {ENGAGEMENTS.map((e, i) => (
            <Reveal key={e.title} delay={i * 0.06} className="border-t border-line py-8">
              <h3 className="text-2xl font-medium tracking-tight">{e.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">{e.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
