"use client";

import { useState } from "react";
import Link from "next/link";
import { NAV_LINKS, STUDIO } from "@/lib/content";
import { ThemeSwitch } from "./ThemeSwitch";

export function Brand() {
  return (
    <Link href="/" className="group inline-flex items-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={STUDIO.logo}
        alt="Amirae Studio"
        className="h-14 w-auto transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:-rotate-3"
      />
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="page-width relative z-40 flex min-h-[100px] items-center justify-between gap-6">
      <Brand />

      <nav className="hidden items-center gap-8 text-sm font-semibold md:flex">
        {NAV_LINKS.map((link) => (
          <Link key={link.name} href={link.href} className="py-3 transition-colors hover:text-teal">
            {link.name}
          </Link>
        ))}
        <ThemeSwitch />
        <Link href="/#quote" className="btn-soft">
          get a quote <span aria-hidden>↗</span>
        </Link>
      </nav>

      <div className="flex items-center gap-2 md:hidden">
        <ThemeSwitch />
        <button
          className="grid h-11 w-11 place-items-center rounded-full bg-soft"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" viewBox="0 0 24 24">
            {open ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 8h16M4 16h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="absolute inset-x-0 top-full rounded-[28px] border border-line bg-surface p-3 shadow-xl md:hidden">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="display block rounded-2xl px-4 py-3 text-2xl hover:bg-soft"
            >
              {link.name}
            </Link>
          ))}
          <Link href="/#quote" onClick={() => setOpen(false)} className="btn-press mt-2 w-full">
            get a quote <span className="arrow">↗</span>
          </Link>
        </div>
      )}
    </header>
  );
}
