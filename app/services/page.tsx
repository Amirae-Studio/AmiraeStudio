import type { Metadata } from "next";
import Link from "next/link";
import { REVENUE_STREAMS, SERVICES, STUDIO, TONE_BG, TONE_TEXT } from "@/lib/content";
import { Header } from "@/components/site/Header";
import { FinalCta, SectionHeading } from "@/components/site/Sections";
import { Footer } from "@/components/site/Footer";

export const metadata: Metadata = {
  title: "Commercial Services & Revenue Model — AMIRAE STUDIO LLC",
  description:
    "Explore the commercial 3D modeling, product prototyping, 3D printing fabrication, architectural scale modeling, and digital asset engineering services by AMIRAE STUDIO LLC.",
  openGraph: {
    title: "Commercial Services & Revenue Model — AMIRAE STUDIO LLC",
    description: "Detailed commercial services, pricing structure, revenue models, and operational capabilities of AMIRAE STUDIO LLC.",
    url: "https://www.amirae.studio/services",
    siteName: STUDIO.name,
    type: "website",
  },
};

const SCOPE = [
  {
    title: "what we do",
    tone: "bg-mint",
    desc: "We create production-ready 3D CAD assets, design physical product prototypes, fabricate high-detail 3D printed architectural miniatures, and build interactive 3D web visualizations.",
  },
  {
    title: "who we serve",
    tone: "bg-sky",
    desc: "Consumer hardware brands, architectural studios, gaming and miniature collectors, digital agencies, and independent creators who want precise 3D craft.",
  },
  {
    title: "what you get",
    tone: "bg-blush",
    desc: "Industry-standard CAD / STEP / STL models, photorealistic renders, physical printed and framed miniatures, and WebGL codebases for online experiences.",
  },
];

const PAYMENT_TERMS = [
  { title: "Invoicing & contracts", desc: "A Statement of Work and commercial invoice for every engagement." },
  { title: "Payment methods", desc: "ACH transfer, U.S. wire, corporate cards and compliant merchant gateways." },
  { title: "Milestone security", desc: "Funds tied to milestone delivery keep everything transparent and on time." },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="page-width pb-16 pt-8 md:pb-24 md:pt-14">
          <p className="eyebrow mb-6">services &amp; pricing</p>
          <h1 className="display max-w-[900px] text-[clamp(3rem,7vw,5.6rem)]">
            everything 3D,
            <br />
            under <span className="marker">one roof.</span>
          </h1>
          <p className="mt-7 max-w-[660px] text-lg leading-[1.7] text-muted">
            <strong className="text-ink">{STUDIO.name}</strong> is a registered 3D design house and digital product studio specializing in high-precision 3D modeling, rapid prototyping, physical fabrication, architectural miniatures and interactive 3D web engineering.
          </p>
          <nav className="mt-10 flex flex-wrap gap-2" aria-label="Jump to a service">
            {SERVICES.map((s) => (
              <a key={s.id} href={`#${s.id}`} className={`chip ${TONE_TEXT[s.tone]}`}>
                <span className={`h-2.5 w-2.5 rounded-full bg-current`} aria-hidden />
                <span className="text-ink">{s.short}</span>
              </a>
            ))}
          </nav>
        </section>

        {/* Scope */}
        <section className="page-width grid gap-5 pb-16 md:grid-cols-3">
          {SCOPE.map((s) => (
            <div key={s.title} className={`rounded-[28px] p-7 ${s.tone}`}>
              <h2 className="display text-2xl">{s.title}</h2>
              <p className="mt-3 text-[15px] leading-[1.7] text-muted">{s.desc}</p>
            </div>
          ))}
        </section>

        {/* Itemized services */}
        <section className="page-width py-16 md:py-24">
          <SectionHeading
            title={
              <>
                the services,
                <br />
                itemized.
              </>
            }
            intro="Each service comes with production standards, transparent pricing and defined delivery milestones."
            dot="✺"
          />
          <div className="grid gap-6">
            {SERVICES.map((s) => (
              <article key={s.id} id={s.id} className="card reveal grid scroll-mt-6 lg:grid-cols-[1.1fr_1fr]">
                <div className="p-8 sm:p-11">
                  <span className={`inline-block rounded-full px-3 py-1 text-xs font-bold ${TONE_BG[s.tone]} ${TONE_TEXT[s.tone]}`}>
                    {s.badge}
                  </span>
                  <h3 className="display mt-4 text-[clamp(1.8rem,3vw,2.4rem)]">{s.title}</h3>
                  <p className="mt-1 font-semibold text-muted">{s.subtitle}</p>
                  <p className="mt-5 leading-[1.8] text-muted">{s.description}</p>
                  <ul className="mt-6 grid gap-2.5">
                    {s.deliverables.map((d) => (
                      <li key={d} className="flex gap-3 text-[15px]">
                        <span className={TONE_TEXT[s.tone]} aria-hidden>✓</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`flex flex-col gap-5 p-8 sm:p-11 ${TONE_BG[s.tone]}`}>
                  <dl className="grid gap-5">
                    <div>
                      <dt className="eyebrow">timeline</dt>
                      <dd className="display mt-1 text-xl">{s.timeline}</dd>
                    </div>
                    <div>
                      <dt className="eyebrow">who it&apos;s for</dt>
                      <dd className="mt-1">{s.clients}</dd>
                    </div>
                    <div>
                      <dt className="eyebrow">how it&apos;s billed</dt>
                      <dd className="mt-1">{s.revenueStream}</dd>
                    </div>
                  </dl>
                  <Link href="/#quote" className="btn-press mt-auto self-start">
                    ask about this <span className="arrow">↗</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Revenue model */}
        <section id="revenue-model" className="page-width py-16 md:py-24">
          <SectionHeading
            title={
              <>
                how we
                <br />
                make money.
              </>
            }
            intro={`${STUDIO.name} operates on four clear, verifiable commercial revenue channels.`}
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {REVENUE_STREAMS.map((r, i) => (
              <div key={r.title} className="card reveal p-7">
                <span className={`text-xs font-bold ${["text-teal", "text-blue", "text-pink", "text-orange"][i]}`}>{r.tag}</span>
                <h3 className="display mt-2 text-xl">{r.title}</h3>
                <p className="mt-3 text-[15px] leading-[1.7] text-muted">{r.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-[28px] bg-soft p-7 sm:p-9">
            <h3 className="display text-xl">payment terms &amp; settlement</h3>
            <div className="mt-5 grid gap-6 md:grid-cols-3">
              {PAYMENT_TERMS.map((t) => (
                <div key={t.title}>
                  <p className="font-bold">{t.title}</p>
                  <p className="mt-1 text-sm text-muted">{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* U.S. operations */}
        <section id="us-operations" className="page-width grid gap-10 py-16 md:py-24 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="display text-[clamp(2.3rem,4.6vw,3.6rem)]">
              U.S. operations,
              <br />
              global fulfillment.
            </h2>
            <div className="mt-6 grid gap-5 text-[17px] leading-[1.8] text-muted">
              <p>
                <strong className="text-ink">{STUDIO.name}</strong> serves clients across the United States and globally, working with U.S.-based hardware startups, architectural practices and consumers through digital asset delivery and physical fabrication.
              </p>
              <p>
                Through platforms such as <strong className="text-ink">MakerWorld</strong>, where FrameCity earned $1,700+ from global and U.S. backers, and our direct commissions, we run active digital delivery systems and international shipping workflows.
              </p>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[24px] bg-mint p-5">
                <p className="font-bold">Global deliveries</p>
                <p className="mt-1 text-sm text-muted">Secure cloud delivery for files, tracked international shipping for physical goods.</p>
              </div>
              <div className="rounded-[24px] bg-sky p-5">
                <p className="font-bold">Compliance &amp; IP</p>
                <p className="mt-1 text-sm text-muted">NDAs on request and full commercial IP assignment on final settlement.</p>
              </div>
            </div>
          </div>

          <aside className="card self-start p-8">
            <p className="eyebrow">corporate identity</p>
            <dl className="mt-5 grid gap-4 text-[15px]">
              {[
                ["Legal entity name", STUDIO.name],
                ["Business type", "Limited Liability Company (LLC)"],
                ["Industry", "3D design, modeling & digital product studio"],
                ["Operating hours", STUDIO.hours],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="text-xs font-bold text-muted">{k}</dt>
                  <dd className="font-semibold">{v}</dd>
                </div>
              ))}
              <div>
                <dt className="text-xs font-bold text-muted">Support &amp; inquiries</dt>
                <dd>
                  <a href={`mailto:${STUDIO.email}`} className="font-semibold text-teal hover:underline">{STUDIO.email}</a>
                </dd>
              </div>
            </dl>
            <Link href="/#quote" className="btn-press mt-7 w-full">
              request a quote <span className="arrow">→</span>
            </Link>
          </aside>
        </section>

        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
