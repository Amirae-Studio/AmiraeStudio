"use client";

import { useState } from "react";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Projects", href: "#projects" },
    { name: "Team", href: "#team" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-md border-b border-border/40">
      <div className="flex items-center justify-between px-6 py-4 md:px-12">
        
        {/* Left: Brand / Logo */}
        <a href="/" className="flex items-center transition-opacity hover:opacity-80 z-50">
          <img 
            src="https://joewkzjnrikotpgzyywh.supabase.co/storage/v1/object/public/gallery/brand/amirae_studio_logo-removebg-preview.webp" 
            alt="Amiraé Studio" 
            className="h-9 md:h-11 w-auto object-contain drop-shadow-sm"
          />
        </a>

        {/* Center: Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right: Action Button & Mobile Toggle */}
        <div className="flex items-center gap-4 z-50">
          <a 
            href="#contact" 
            className="hidden sm:inline-flex h-10 items-center justify-center rounded-2xl bg-[#21E1B5] px-6 font-medium text-black transition-all hover:scale-105 active:scale-95"
          >
            Contact Us
          </a>

          {/* Mobile Menu Toggle Button */}
          <button 
            className="md:hidden p-2 text-foreground"
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
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border/40 px-6 py-6 shadow-lg flex flex-col gap-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-lg font-medium text-foreground hover:text-muted-foreground transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="inline-flex h-12 w-full mt-2 items-center justify-center rounded-full bg-foreground px-6 text-base font-medium text-background transition-all active:scale-95 sm:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
}