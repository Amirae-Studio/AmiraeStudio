"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_LINKS, STUDIO } from "@/lib/content";
import { cn } from "@/lib/utils";
import { Magnetic } from "./Magnetic";

const EASE = [0.22, 1, 0.36, 1] as const;

function Burger({ open, dark }: { open: boolean; dark?: boolean }) {
  const bar = cn(
    "absolute left-1/2 h-[1.5px] w-5 -translate-x-1/2 transition-all duration-500",
    dark ? "bg-white" : "bg-ink",
  );
  return (
    <span className="relative block h-5 w-5">
      <span className={cn(bar, open ? "top-1/2 rotate-45" : "top-[35%]")} />
      <span className={cn(bar, open ? "top-1/2 -rotate-45" : "top-[65%]")} />
    </span>
  );
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 240);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Close the menu whenever the route changes.
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  return (
    <>
      <header className="absolute inset-x-0 top-0 z-40">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-6 sm:px-10 md:py-8">
          <Link href="/" className="group relative flex items-center" aria-label="Amirae Studio home">
            <div className="relative flex h-15 w-auto items-center">
              <Image
                src={STUDIO.logo}
                alt="Amirae Studio"
                width={60}
                height={60}
                className="h-15 w-auto object-contain transition-all duration-300 ease-out group-hover:scale-95 group-hover:opacity-0"
              />
              <Image
                src="https://joewkzjnrikotpgzyywh.supabase.co/storage/v1/object/public/gallery/brand/amirae_studio_logo-removebg-preview.webp"
                alt=""
                width={367}
                height={243}
                className="absolute inset-0 h-15 w-auto object-contain opacity-0 scale-95 transition-all duration-300 ease-out group-hover:scale-100 group-hover:opacity-100"
              />
            </div>
          </Link>

          <nav className="hidden items-center gap-9 text-[15px] lg:flex" aria-label="Primary">
            {NAV_LINKS.slice(0).map((link) => (
              <Link key={link.name} href={link.href} className="link-line pb-0.5">
                {link.name}
              </Link>
            ))}
          </nav>

          <Magnetic>
            <button
              onClick={() => setOpen(true)}
              className="flex items-center gap-3 rounded-full py-2 pl-4 pr-2 text-[15px] lg:hidden"
              aria-label="Open menu"
              aria-expanded={open}
            >
              Menu
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15">
                <Burger open={false} />
              </span>
            </button>
          </Magnetic>
        </div>
      </header>

      {/* Floating burger once the header scrolls away */}
      <AnimatePresence>
        {(scrolled || open) && (
          <motion.div
            className="fixed right-5 top-5 z-[60] sm:right-10 sm:top-7"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <Magnetic>
              <button
                onClick={() => setOpen((v) => !v)}
                className={cn(
                  "btn-fill flex h-16 w-16 items-center justify-center rounded-full ring-1 ring-white/15 transition-colors duration-500 [--fill:#2b2b2b]",
                  open ? "bg-white/10" : "bg-ink",
                )}
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
              >
                <Burger open={open} dark />
              </button>
            </Magnetic>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-50 bg-black/40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.aside
              role="dialog"
              aria-modal="true"
              aria-label="Site menu"
              className="fixed inset-y-0 right-0 z-50 flex w-full max-w-[560px] flex-col justify-between overflow-y-auto bg-ink px-8 pb-10 pt-28 text-white sm:px-14"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.8, ease: EASE }}
            >
              <div>
                <p className="mb-6 text-sm text-white/60">Menu</p>
                <ul className="space-y-1">
                  {NAV_LINKS.map((link, i) => (
                    <li key={link.name} className="overflow-hidden">
                      <motion.div
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.8, ease: EASE, delay: 0.15 + i * 0.05 }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setOpen(false)}
                          className="group flex items-baseline gap-4 py-1 text-5xl font-medium tracking-tight sm:text-6xl"
                        >
                          <span className="transition-transform duration-500 group-hover:translate-x-3">
                            {link.name}
                          </span>
                          {pathname === link.href && <span className="h-2 w-2 rounded-full bg-accent" />}
                        </Link>
                      </motion.div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-16 grid gap-8 text-[15px] sm:grid-cols-2">
                <div>
                  <p className="mb-3 text-sm text-white/60">Social</p>
                  <ul className="space-y-2">
                    {STUDIO.socials.map((s) => (
                      <li key={s.name}>
                        <a href={s.href} target="_blank" rel="noopener noreferrer" className="link-line">
                          {s.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="mb-3 text-sm text-white/60">Get in touch</p>
                  <a href={`mailto:${STUDIO.email}`} className="link-line">
                    {STUDIO.email}
                  </a>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
