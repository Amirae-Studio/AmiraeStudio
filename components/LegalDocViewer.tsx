"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { 
  ShieldCheck, 
  FileText, 
  ChevronRight, 
  Mail, 
  MapPin, 
  ArrowUp, 
  Check, 
  Copy,
  ArrowRight,
  ListOrdered
} from "lucide-react";
import { STUDIO } from "@/lib/content";

export interface LegalSection {
  id: string;
  number: string;
  title: string;
  content: React.ReactNode;
}

interface LegalDocViewerProps {
  title: string;
  subtitle?: string;
  lastUpdated: string;
  effectiveDate: string;
  version: string;
  description: string;
  sections: LegalSection[];
  relatedDoc: {
    title: string;
    href: string;
    description: string;
  };
}

export function LegalDocViewer({
  title,
  subtitle,
  lastUpdated,
  effectiveDate,
  version,
  description,
  sections,
  relatedDoc,
}: LegalDocViewerProps) {
  const [activeSection, setActiveSection] = useState<string>(sections[0]?.id || "");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Track scroll position to update reading progress & active section
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100));
        setScrollProgress(progress);
      }

      // Determine active section based on scroll position
      const scrollPosition = window.scrollY + 200;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -120;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveSection(id);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(STUDIO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#f7f6f2] text-ink flex flex-col font-sans selection:bg-ink selection:text-white">
      <Header />

      {/* Subtle Top Reading Progress Indicator */}
      <div 
        className="fixed top-0 left-0 h-[2px] bg-ink z-50 transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      {/* Hero Section matching the site's editorial typography */}
      <section className="relative mx-auto max-w-[1600px] w-full px-5 pt-36 pb-16 sm:px-10 md:pt-44 md:pb-20 border-b border-black/[0.08]">
        {/* Breadcrumb */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono tracking-wider text-muted uppercase mb-8">
          <Link href="/" className="hover:text-ink transition-colors">
            Home
          </Link>
          <ChevronRight size={12} className="text-black/30" />
          <span className="text-black/40">Governance</span>
          <ChevronRight size={12} className="text-black/30" />
          <span className="text-ink font-semibold">{title}</span>
        </div>

        <div className="grid gap-10 lg:grid-cols-12 lg:items-end justify-between">
          <div className="lg:col-span-8">
            <p className="mb-6 flex items-center gap-3 text-[14px] text-muted font-medium">
              <span className="h-2 w-2 rounded-full bg-ink" />
              {STUDIO.legalName || STUDIO.name} Governance
            </p>
            <h1 className="text-[10vw] sm:text-[7vw] lg:text-[76px] font-medium leading-[0.98] tracking-[-0.04em] text-ink">
              <span>{title}</span>
              {subtitle && (
                <>
                  {" "}
                  <span className="font-serif font-normal italic text-black/70">
                    {subtitle}
                  </span>
                </>
              )}
            </h1>
            <p className="mt-6 max-w-2xl text-lg sm:text-xl text-muted leading-relaxed font-normal">
              {description}
            </p>
          </div>

          {/* Metadata Badges Box */}
          <div className="lg:col-span-4 flex flex-wrap sm:flex-nowrap gap-3 p-4 rounded-2xl bg-white border border-black/[0.08] shadow-xs text-xs font-mono">
            <div className="flex-1 min-w-[100px] p-3 rounded-xl bg-[#faf9f5] border border-black/[0.04]">
              <span className="text-black/40 block text-[10px] uppercase tracking-wider">Effective</span>
              <span className="font-semibold text-ink mt-0.5 block">{effectiveDate}</span>
            </div>
            <div className="flex-1 min-w-[100px] p-3 rounded-xl bg-[#faf9f5] border border-black/[0.04]">
              <span className="text-black/40 block text-[10px] uppercase tracking-wider">Updated</span>
              <span className="font-semibold text-ink mt-0.5 block">{lastUpdated}</span>
            </div>
            <div className="flex-1 min-w-[100px] p-3 rounded-xl bg-[#faf9f5] border border-black/[0.04]">
              <span className="text-black/40 block text-[10px] uppercase tracking-wider">Version</span>
              <span className="font-semibold text-ink mt-0.5 block">{version}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="mx-auto max-w-[1600px] w-full px-5 sm:px-10 py-12 lg:py-16 grow">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* ══════════════════════════════════════════════════════════════════════
              LEFT: Scrollable Content Column
             ══════════════════════════════════════════════════════════════════════ */}
          <main className="lg:col-span-8 space-y-12 bg-white p-6 sm:p-10 md:p-14 rounded-3xl border border-black/[0.08] shadow-xs">
            
            {/* Quick Summary / Advisory Box */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#f5f4ef] border border-black/[0.08] text-ink">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-ink text-white shrink-0 mt-0.5">
                  <FileText size={18} />
                </div>
                <div className="space-y-2">
                  <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-ink">
                    Summary &amp; Applicability Notice
                  </h2>
                  <p className="text-sm text-muted leading-relaxed">
                    This document sets forth the binding legal provisions between you (whether an individual, client, or enterprise) and <strong>{STUDIO.legalName || STUDIO.name}</strong>. Please review each section carefully. For questions or commercial NDA requests, contact our legal desk at <a href={`mailto:${STUDIO.email}`} className="text-ink font-semibold underline underline-offset-2 hover:text-black">{STUDIO.email}</a>.
                  </p>
                </div>
              </div>
            </div>

            {/* Mobile Table of Contents Accordion / Dropdown */}
            <div className="lg:hidden p-4 rounded-2xl bg-[#f5f4ef] border border-black/[0.08]">
              <div className="flex items-center gap-2 mb-3 text-xs font-mono font-bold uppercase tracking-wider text-ink">
                <ListOrdered size={16} />
                <span>Jump to Section</span>
              </div>
              <select
                value={activeSection}
                onChange={(e) => scrollToSection(e.target.value)}
                className="w-full p-3 rounded-xl border border-black/15 bg-white text-xs font-medium text-ink focus:outline-none focus:ring-2 focus:ring-ink cursor-pointer"
              >
                {sections.map((section) => (
                  <option key={section.id} value={section.id}>
                    {section.number}. {section.title}
                  </option>
                ))}
              </select>
            </div>

            {/* Legal Sections */}
            <div className="space-y-16 divide-y divide-black/[0.08]">
              {sections.map((section, idx) => (
                <section
                  key={section.id}
                  id={section.id}
                  className={`scroll-mt-36 ${idx > 0 ? "pt-14" : ""}`}
                >
                  <div className="flex items-start gap-3.5 sm:gap-4 mb-5">
                    <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-[#f5f4ef] border border-black/[0.08] text-ink font-mono font-bold text-xs shrink-0 mt-0.5">
                      {section.number}
                    </span>
                    <h2 className="text-xl sm:text-2xl md:text-[26px] font-medium tracking-tight text-ink">
                      {section.title}
                    </h2>
                  </div>

                  <div className="text-sm sm:text-[15.5px] text-muted leading-relaxed pl-0 sm:pl-12 space-y-4 font-normal">
                    {section.content}
                  </div>
                </section>
              ))}
            </div>

            {/* Studio Legal Entity Verification Box */}
            <div className="mt-14 pt-10 border-t border-black/[0.08]">
              <div className="rounded-2xl bg-ink text-white p-7 sm:p-9 relative overflow-hidden">
                <div className="relative z-10 space-y-4">
                  <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-white/60">
                    <ShieldCheck size={14} className="text-white" />
                    <span>{STUDIO.legalName || STUDIO.name} Governance</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-medium text-white tracking-tight">Have Questions About This Policy?</h3>
                  <p className="text-sm text-white/70 leading-relaxed max-w-xl">
                    Our compliance and management desk is available to assist you with commercial contracts, custom Non-Disclosure Agreements (NDAs), and data requests.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 text-xs font-mono">
                    <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/10 border border-white/10">
                      <Mail size={16} className="text-white shrink-0" />
                      <div className="truncate">
                        <span className="text-white/40 block text-[10px]">Email Legal Desk</span>
                        <a href={`mailto:${STUDIO.email}`} className="font-semibold text-white hover:underline">
                          {STUDIO.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/10 border border-white/10">
                      <MapPin size={16} className="text-white shrink-0 mt-0.5" />
                      <div>
                        <span className="text-white/40 block text-[10px]">Registered Entity Address</span>
                        <span className="text-white/90 text-xs leading-snug">
                          {STUDIO.address}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </main>


          {/* ══════════════════════════════════════════════════════════════════════
              RIGHT: Sticky Table of Contents Sidebar (Full list without internal scroll)
             ══════════════════════════════════════════════════════════════════════ */}
          <aside className="hidden lg:block lg:col-span-4 sticky top-28 space-y-5">
            
            {/* Table of Contents Card (FULL LIST — NO SCROLLBAR) */}
            <div className="p-6 rounded-3xl bg-white border border-black/[0.08] shadow-xs">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-black/[0.08]">
                <div className="flex items-center gap-2">
                  <ListOrdered size={16} className="text-ink" />
                  <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-ink">
                    Contents
                  </h2>
                </div>
                <span className="text-[11px] font-mono text-muted font-medium">
                  {sections.length} Sections
                </span>
              </div>

              {/* Full un-scrolled list showing ALL items directly */}
              <nav className="space-y-1 text-xs">
                {sections.map((section) => {
                  const isActive = activeSection === section.id;
                  return (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full text-left px-3 py-2 rounded-xl transition-all flex items-center justify-between group cursor-pointer ${
                        isActive
                          ? "bg-ink text-white font-semibold shadow-xs"
                          : "text-muted hover:text-ink hover:bg-black/5 font-medium"
                      }`}
                    >
                      <div className="flex items-start gap-2.5 min-w-0 pr-1 py-0.5">
                        <span className={`font-mono text-[11px] shrink-0 mt-0.5 ${isActive ? "text-white/70" : "text-black/30 group-hover:text-black/60"}`}>
                          {section.number}.
                        </span>
                        <span className="text-[12px] leading-snug text-left">{section.title}</span>
                      </div>
                    </button>
                  );
                })}
              </nav>

              {/* Bottom Quick Action: Copy Email / Back to Top */}
              <div className="pt-4 mt-4 border-t border-black/[0.08] flex items-center justify-between">
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 text-[11px] font-mono text-muted hover:text-ink font-medium transition-colors cursor-pointer"
                >
                  {copiedEmail ? (
                    <>
                      <Check size={13} className="text-ink" />
                      <span className="text-ink font-semibold">Copied email</span>
                    </>
                  ) : (
                    <>
                      <Copy size={13} />
                      <span>Copy legal email</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="inline-flex items-center gap-1 text-[11px] font-mono text-muted hover:text-ink transition-colors cursor-pointer"
                >
                  <span>Top</span>
                  <ArrowUp size={12} />
                </button>
              </div>
            </div>

            {/* Related Legal Document Card */}
            <div className="p-5 rounded-2xl bg-white border border-black/[0.08] flex items-center justify-between gap-3 shadow-xs">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-muted block">
                  Related Document
                </span>
                <h4 className="text-xs font-semibold text-ink mt-0.5">
                  {relatedDoc.title}
                </h4>
              </div>
              <Link
                href={relatedDoc.href}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-ink text-white font-mono text-[11px] font-medium hover:bg-black/80 transition-all shrink-0"
              >
                <span>Read</span>
                <ArrowRight size={11} />
              </Link>
            </div>

          </aside>

        </div>
      </div>

      <Footer />
    </div>
  );
}
