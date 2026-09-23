"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS, STUDIO } from "@/lib/content";
import { LineReveal } from "./Reveal";
import { Magnetic } from "./Magnetic";
import { PillButton } from "./PillButton";

const FOOTER_COLUMNS = [
  {
    title: "Services",
    links: [
      { name: "All services", href: "/services" },
      { name: "3D modeling & assets", href: "/services#3d-modeling" },
      { name: "Product prototyping", href: "/services#product-design" },
      { name: "3D printing", href: "/services#3d-printing" },
      { name: "Architecture & heritage", href: "/services#architectural" },
      { name: "Interactive 3D web", href: "/services#digital-ecosystems" },
    ],
  },
  {
    title: "Work",
    links: [
      { name: "FrameCity", href: "https://frame-city.vercel.app/" },
      { name: "FrameCity on MakerWorld", href: STUDIO.makerworld },
      { name: "Maze Foundry", href: "https://maze-foundry.vercel.app/" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About us", href: "/about" },
      { name: "Terms & Conditions", href: "/terms" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Request a quote", href: "/contact" },
      { name: "Revenue & pricing model", href: "/services#revenue-model" },
      { name: "U.S. & global operations", href: "/services#us-operations" },
      { name: "Contact", href: "/contact" },
    ],
  },
];

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

        <div className="grid gap-12 py-16 text-[15px] md:grid-cols-12 lg:gap-14">
          <div className="md:col-span-4 space-y-4">
            <p className="text-sm text-white/40">Studio</p>
            <p className="max-w-sm leading-relaxed text-white/80">
              {STUDIO.legalName || STUDIO.name} — 3D modeling, prototyping, fabrication and interactive 3D web for brands and makers worldwide.
            </p>
            
            <dl className="grid gap-1.5 text-[13px] text-white/60 pt-2">
              <div>
                <dt className="inline text-white/40 font-mono text-[11px] uppercase tracking-wider">Entity · </dt>
                <dd className="inline font-medium text-white/90">{STUDIO.legalName || STUDIO.name}</dd>
              </div>
              <div>
                <dt className="inline text-white/40 font-mono text-[11px] uppercase tracking-wider">Email · </dt>
                <dd className="inline">
                  <a href={`mailto:${STUDIO.email}`} className="link-line text-white/90">{STUDIO.email}</a>
                </dd>
              </div>
              <div>
                <dt className="inline text-white/40 font-mono text-[11px] uppercase tracking-wider">Address · </dt>
                <dd className="inline text-white/70">{STUDIO.address}</dd>
              </div>
            </dl>
          </div>

          <div className="md:col-span-8 grid grid-cols-2 gap-8 sm:grid-cols-4">
            {FOOTER_COLUMNS.map((col) => (
              <div key={col.title}>
                <p className="text-sm text-white/40">{col.title}</p>
                <ul className="mt-3 space-y-2.5">
                  {col.links.map((link) => {
                    const isExternal = link.href.startsWith("http");
                    return (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          target={isExternal ? "_blank" : undefined}
                          rel={isExternal ? "noopener noreferrer" : undefined}
                          className="link-line text-sm text-white/70 hover:text-white"
                        >
                          {link.name}
                          {isExternal && " ↗"}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}

            <div>
              <p className="text-sm text-white/40">Follow</p>
              <ul className="mt-3 space-y-2.5">
                {STUDIO.socials?.map((s) => (
                  <li key={s.name}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-line text-sm text-white/70 hover:text-white"
                    >
                      {s.name} ↗
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 py-8 text-sm text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span>
              © {new Date().getFullYear()} {STUDIO.legalName || STUDIO.name}. All rights reserved.
            </span>
            <Link href="/terms" className="link-line hover:text-white">
              Terms &amp; Conditions
            </Link>
            <Link href="/privacy" className="link-line hover:text-white">
              Privacy Policy
            </Link>
          </div>
          <a href="#" className="link-line w-fit">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
