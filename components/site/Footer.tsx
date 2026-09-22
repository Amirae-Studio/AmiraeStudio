"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS, STUDIO } from "@/lib/content";
import { LineReveal } from "./Reveal";
import { Magnetic } from "./Magnetic";
import { PillButton } from "./PillButton";

export function Footer() {
  const pathname = usePathname();
  const showCta = pathname !== "/contact";

  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-10">
        {showCta && (
          <div className="relative border-b border-white/10 pb-20 pt-24 md:pb-28 md:pt-36">
            <div className="flex items-center gap-4 text-white/50">
              <img src={STUDIO.logo} alt="" className="h-12 w-12 rounded-full bg-white/10 object-contain p-1.5" />
              <span className="text-[15px]">Have a project in mind?</span>
            </div>
            <LineReveal className="mt-8 text-[13vw] font-medium leading-[0.95] tracking-[-0.04em] md:text-[8.5vw] xl:text-[132px]">
              <span>Let’s work</span>
              <span>
                <span className="font-serif font-normal italic">together</span>
              </span>
            </LineReveal>

            <div className="mt-12 md:absolute md:right-0 md:top-1/2 md:mt-0 md:-translate-y-1/4">
              <Magnetic strength={0.4}>
                <Link
                  href="/contact"
                  className="btn-fill flex h-44 w-44 items-center justify-center rounded-full bg-[#2f2f2f] text-lg font-medium transition-colors duration-500 hover:text-ink md:h-52 md:w-52"
                >
                  Get in touch
                </Link>
              </Magnetic>
            </div>

            <div className="mt-14 flex flex-wrap gap-3">
              <PillButton href={`mailto:${STUDIO.email}`} variant="outline-light" external>
                {STUDIO.email}
              </PillButton>
              <PillButton href="/contact" variant="outline-light">
                Request a quote
              </PillButton>
            </div>
          </div>
        )}

        <div className="grid gap-12 py-16 text-[15px] md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="text-sm text-white/40">Studio</p>
            <p className="mt-3 max-w-sm leading-relaxed text-white/80">
              {STUDIO.legalName} — 3D modeling, prototyping, fabrication and interactive 3D web for brands and makers
              worldwide.
            </p>
            <p className="mt-4 text-white/50">{STUDIO.address}</p>
          </div>
          <div className="md:col-span-3">
            <p className="text-sm text-white/40">Pages</p>
            <ul className="mt-3 space-y-2">
              {NAV_LINKS.map((l) => (
                <li key={l.name}>
                  <Link href={l.href} className="link-line">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-4">
            <p className="text-sm text-white/40">Follow</p>
            <ul className="mt-3 space-y-2">
              {STUDIO.socials.map((s) => (
                <li key={s.name}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="link-line">
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-white/10 py-8 text-sm text-white/40 sm:flex-row sm:justify-between">
          <span>
            © {new Date().getFullYear()} {STUDIO.legalName}. All rights reserved.
          </span>
          <a href="#" className="link-line w-fit">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
