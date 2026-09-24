"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { STUDIO } from "@/lib/content";
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
      { name: "Interactive 3D web", href: "/services#web-3d" },
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
      { name: "Contact", href: "/contact" },
    ],
  },
];

function SocialIcon({ name }: { name: string }) {
  const normalized = name.toLowerCase();

  if (normalized.includes("instagram")) {
    return (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    );
  }

  if (normalized.includes("discord")) {
    return (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
      </svg>
    );
  }

  // Default MakerWorld / 3D model icon
  return (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="m21 16-9 5-9-5V8l9-5 9 5v8z" />
      <path d="M3.27 6.96 12 12.01l8.73-5.05" />
      <path d="M12 22.08V12" />
    </svg>
  );
}

export function Footer() {
  const pathname = usePathname();
  const showCta = pathname !== "/contact";

  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-10">
        {showCta && (
          <div className="relative border-b border-white/10 pb-20 pt-24 md:pb-28 md:pt-36">
            <div className="flex items-center gap-4 text-white/50">
              <Image src={STUDIO.logo} alt="" width={48} height={48} className="h-12 w-12 rounded-full bg-white/10 object-contain p-1.5" />
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
          <div className="md:col-span-5 space-y-5">
            {/* Logo with smooth interactive hover */}
            <Link href="/" className="group relative inline-flex items-center" aria-label="Amirae Studio">
              <div className="relative flex h-14 w-auto items-center">
                <Image
                  src={STUDIO.logo}
                  alt="Amirae Studio"
                  width={56}
                  height={56}
                  className="h-14 w-auto object-contain transition-all duration-300 group-hover:scale-95 group-hover:opacity-0"
                />
                <Image
                  src="https://joewkzjnrikotpgzyywh.supabase.co/storage/v1/object/public/gallery/brand/amirae_studio_logo-removebg-preview.webp"
                  alt=""
                  width={367}
                  height={243}
                  className="absolute inset-0 h-14 w-auto object-contain opacity-0 scale-95 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100"
                />
              </div>
            </Link>

            <p className="max-w-sm leading-relaxed text-white/80 text-sm">
              {STUDIO.legalName} — {STUDIO.services} for brands and makers worldwide.
            </p>
            
            <dl className="grid gap-2 text-[13px] text-white/60 pt-1">
              <div>
                <dt className="inline text-white/60 font-mono text-[11px] uppercase tracking-wider">Entity · </dt>
                <dd className="inline font-medium text-white/90">{STUDIO.legalName || STUDIO.name}</dd>
              </div>
              <div>
                <dt className="inline text-white/60 font-mono text-[11px] uppercase tracking-wider">Registered office · </dt>
                <dd className="inline text-white/70">{STUDIO.registeredOffice}</dd>
              </div>
              <div>
                <dt className="inline text-white/60 font-mono text-[11px] uppercase tracking-wider">Business address · </dt>
                <dd className="inline text-white/70">{STUDIO.businessAddress}</dd>
              </div>
              <div>
                <dt className="inline text-white/60 font-mono text-[11px] uppercase tracking-wider">Email · </dt>
                <dd className="inline">
                  <a href={`mailto:${STUDIO.email}`} className="link-line text-white/90">{STUDIO.email}</a>
                </dd>
              </div>
              <div>
                <dt className="inline text-white/60 font-mono text-[11px] uppercase tracking-wider">Phone · </dt>
                <dd className="inline">
                  <a href={`tel:${STUDIO.phone.replace(/[^\d+]/g, "")}`} className="link-line text-white/70">{STUDIO.phone}</a>
                </dd>
              </div>
            </dl>
          </div>

          <div className="md:col-span-7 grid grid-cols-2 gap-8 sm:grid-cols-3">
            {FOOTER_COLUMNS.map((col) => (
              <div key={col.title}>
                <p className="text-sm font-medium text-white/60">{col.title}</p>
                <ul className="mt-3.5 space-y-2.5">
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
          </div>
        </div>

        {/* Bottom Bar: Copyright, Legal Links, Social Icons Row & Back to Top */}
        <div className="flex flex-col gap-5 border-t border-white/10 py-8 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
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

          {/* Social Links Row with Icons */}
          <div className="flex items-center gap-2.5">
            {STUDIO.socials?.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/70 transition-all duration-300 hover:bg-white hover:text-ink hover:scale-110"
                aria-label={s.name}
                title={s.name}
              >
                <SocialIcon name={s.name} />
              </a>
            ))}

            <a href="#" className="link-line ml-3 text-xs text-white/50 hover:text-white">
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
