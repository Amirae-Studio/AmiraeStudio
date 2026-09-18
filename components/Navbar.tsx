"use client";

import { useState } from "react";
import Link from "next/link";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/#projects" },
    { name: "FAQ", href: "/#faq" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-black/10 dark:border-white/10 font-[family-name:var(--font-your-hero-font)]">
      <div className="flex items-center justify-between px-6 py-4 md:px-12 max-w-7xl mx-auto">
        
        {/* Left: Brand / Logo */}
        <Link href="/" className="flex items-center transition-opacity hover:opacity-80 z-50">
          <img 
            src="https://joewkzjnrikotpgzyywh.supabase.co/storage/v1/object/public/gallery/brand/amirae_studio_logo-removebg-preview.webp" 
            alt="Amiraé Studio" 
            className="h-9 md:h-11 w-auto object-contain drop-shadow-xs"
          />
        </Link>

        {/* Center: Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-xs font-mono font-bold uppercase tracking-wider text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right: Action Button & Mobile Toggle */}
        <div className="flex items-center gap-4 z-50">
          <Link 
            href="/#quote" 
            className="hidden sm:inline-flex h-10 items-center justify-center rounded-2xl bg-[#21E1B5] px-6 font-mono text-xs font-bold uppercase tracking-wider text-black transition-all hover:bg-[#1bc79f] hover:scale-105 active:scale-95 shadow-xs"
          >
            Request a Quote
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button 
            className="md:hidden p-2 text-gray-900 dark:text-white cursor-pointer rounded-xl hover:bg-gray-100 dark:hover:bg-zinc-800"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-zinc-950 border-b border-black/10 dark:border-zinc-800 px-6 py-6 shadow-xl flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-sm font-mono font-bold uppercase tracking-wider text-gray-900 dark:text-white hover:text-teal-600 transition-colors py-1"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/#quote" 
            className="inline-flex h-12 w-full mt-2 items-center justify-center rounded-2xl bg-[#21E1B5] px-6 text-xs font-mono font-bold uppercase tracking-wider text-black transition-all active:scale-95 shadow-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Request a Quote →
          </Link>
        </div>
      )}
    </nav>
  );
}