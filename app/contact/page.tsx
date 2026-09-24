import type { Metadata } from "next";
import { STUDIO } from "@/lib/content";
import { LineReveal, Reveal } from "@/components/site/Reveal";
import { QuoteForm } from "@/components/contact/QuoteForm";

export const metadata: Metadata = {
  title: "Contact",
  description: `Request a quote from AMIRAE STUDIO LLC for ${STUDIO.services}.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="mx-auto grid max-w-[1600px] gap-16 px-5 pb-28 pt-36 sm:px-10 md:grid-cols-12 md:pb-40 md:pt-48">
      <div className="md:col-span-5">
        <div className="md:sticky md:top-32">
          <LineReveal
            as="h1"
            className="text-[14vw] font-medium leading-[0.95] tracking-[-0.05em] sm:text-7xl lg:text-8xl"
          >
            <span>Let’s make</span>
            <span>
              <span className="font-serif font-normal italic">something</span>
            </span>
          </LineReveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-sm text-lg leading-relaxed text-muted">
              Share a few details and we’ll come back with a statement of work and a transparent milestone quote.
            </p>
            <dl className="mt-12 space-y-6 text-[15px]">
              <div>
                <dt className="text-sm text-muted">Email</dt>
                <dd className="mt-1">
                  <a href={`mailto:${STUDIO.email}`} className="link-line text-xl">
                    {STUDIO.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm text-muted">Business address</dt>
                <dd className="mt-1">{STUDIO.businessAddress}</dd>
              </div>
              <div>
                <dt className="text-sm text-muted">Registered office</dt>
                <dd className="mt-1">{STUDIO.registeredOffice}</dd>
              </div>
              <div>
                <dt className="text-sm text-muted">Phone</dt>
                <dd className="mt-1">
                  <a href={`tel:${STUDIO.phone.replace(/[^\d+]/g, "")}`} className="link-line">
                    {STUDIO.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm text-muted">Social</dt>
                <dd className="mt-1 flex gap-5">
                  {STUDIO.socials.map((s) => (
                    <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" className="link-line">
                      {s.name}
                    </a>
                  ))}
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </div>

      <Reveal delay={0.15} className="md:col-span-7">
        <QuoteForm />
      </Reveal>
    </section>
  );
}
