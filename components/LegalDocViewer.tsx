"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { LineReveal, Reveal } from "@/components/site/Reveal";
import { PillButton } from "@/components/site/PillButton";
import { 
  ShieldCheck, 
  FileText, 
  ChevronRight, 
  Mail, 
  MapPin, 
  ArrowUp, 
  Check, 
  Copy,
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
  italicTitle?: string;
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
  italicTitle,
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
      const scrollPosition = window.scrollY + 220;
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
    <div className="min-h-screen bg-white text-ink flex flex-col font-sans selection:bg-ink selection:text-white">
      <Header />

      {/* Reading Progress Indicator */}
      <div 
        className="fixed top-0 left-0 h-[2px] bg-ink z-50 transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      {/* Hero Section matching the Home/About PageHero design */}
      <section className="mx-auto max-w-[1600px] w-full px-5 pt-36 pb-16 sm:px-10 md:pt-48 md:pb-24 border-b border-line">
        <Reveal>
          <div className="mb-6 flex flex-wrap items-center gap-2 text-xs font-mono uppercase tracking-wider text-muted">
            <Link href="/" className="hover:text-ink transition-colors">
              Home
            </Link>
            <ChevronRight size={12} className="text-muted/50" />
            <span className="text-muted/60">Governance</span>
            <ChevronRight size={12} className="text-muted/50" />
            <span className="text-ink font-semibold">{title}</span>
          </div>
        </Reveal>

        <Reveal>
          <p className="mb-6 flex items-center gap-3 text-[15px] text-muted">
            <span className="h-2 w-2 rounded-full bg-accent" />
            {STUDIO.legalName || STUDIO.name} Legal Desk
          </p>
        </Reveal>

        <LineReveal
          as="h1"
          className="text-[12vw] font-medium leading-[0.95] tracking-[-0.05em] sm:text-[9vw] xl:text-[116px]"
        >
          <span>{title}</span>
          {italicTitle && (
            <span className="font-serif font-normal italic tracking-[-0.02em] block sm:inline">
              {" "}{italicTitle}
            </span>
          )}
        </LineReveal>

        <div className="mt-12 grid gap-10 md:mt-16 md:grid-cols-12 md:items-end justify-between">
          <Reveal delay={0.2} className="md:col-span-7">
            <p className="text-lg leading-relaxed text-muted md:text-xl font-normal">
              {description}
            </p>
          </Reveal>

          {/* Metadata Badges in clean home pill style */}
          <Reveal delay={0.3} className="md:col-span-5 flex flex-wrap gap-2.5 md:justify-end">
            <span className="rounded-full border border-line bg-white px-4 py-2 text-xs font-mono text-muted">
              Effective: <strong className="text-ink font-semibold">{effectiveDate}</strong>
            </span>
            <span className="rounded-full border border-line bg-white px-4 py-2 text-xs font-mono text-muted">
              Updated: <strong className="text-ink font-semibold">{lastUpdated}</strong>
            </span>
            <span className="rounded-full border border-line bg-white px-4 py-2 text-xs font-mono text-muted">
              Version: <strong className="text-ink font-semibold">{version}</strong>
            </span>
          </Reveal>
        </div>
      </section>

      {/* Main Two-Column Layout */}
      <div className="mx-auto max-w-[1600px] w-full px-5 sm:px-10 py-16 md:py-24 grow">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* ══════════════════════════════════════════════════════════════════════
              LEFT: Main Content Sections
             ══════════════════════════════════════════════════════════════════════ */}
          <main className="lg:col-span-8 space-y-16">
            
            {/* Quick Summary Box in clean subtle border */}
            <div className="rounded-3xl border border-line bg-soft/50 p-7 sm:p-9 text-ink">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink text-white">
                  <FileText size={18} />
                </div>
                <div className="space-y-2">
                  <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-ink">
                    Summary &amp; Applicability Notice
                  </h2>
                  <p className="text-[15px] leading-relaxed text-muted">
                    This document sets forth the binding legal provisions between you (whether an individual or commercial enterprise) and <strong>{STUDIO.legalName || STUDIO.name}</strong>. For inquiries or bilateral NDA execution, contact our legal desk at <a href={`mailto:${STUDIO.email}`} className="text-ink font-semibold underline underline-offset-4 hover:text-muted">{STUDIO.email}</a>.
                  </p>
                </div>
              </div>
            </div>

            {/* Mobile Table of Contents Accordion */}
            <div className="lg:hidden rounded-2xl border border-line bg-soft/60 p-4">
              <div className="flex items-center gap-2 mb-3 text-xs font-mono font-bold uppercase tracking-wider text-ink">
                <ListOrdered size={16} />
                <span>Jump to Section</span>
              </div>
              <select
                value={activeSection}
                onChange={(e) => scrollToSection(e.target.value)}
                className="w-full rounded-xl border border-line bg-white p-3 text-sm font-medium text-ink focus:outline-none focus:ring-2 focus:ring-ink cursor-pointer"
              >
                {sections.map((section) => (
                  <option key={section.id} value={section.id}>
                    {section.number}. {section.title}
                  </option>
                ))}
              </select>
            </div>

            {/* Legal Sections with clean home dividers */}
            <div className="space-y-16 divide-y divide-line">
              {sections.map((section, idx) => (
                <section
                  key={section.id}
                  id={section.id}
                  className={`scroll-mt-36 ${idx > 0 ? "pt-16" : ""}`}
                >
                  <div className="flex items-baseline gap-4 mb-6">
                    <span className="text-sm font-mono text-muted">{section.number}</span>
                    <h2 className="text-2xl sm:text-4xl font-medium tracking-[-0.03em] text-ink">
                      {section.title}
                    </h2>
                  </div>

                  <div className="text-[16px] sm:text-[17px] text-muted leading-relaxed pl-0 sm:pl-9 space-y-4 font-normal">
                    {section.content}
                  </div>
                </section>
              ))}
            </div>

            {/* Legal Entity Desk Card matching the Footer style */}
            <div className="pt-10 border-t border-line">
              <div className="rounded-3xl bg-ink text-white p-8 sm:p-12 relative overflow-hidden">
                <div className="relative z-10 space-y-4">
                  <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-white/50">
                    <ShieldCheck size={14} className="text-white" />
                    <span>{STUDIO.legalName || STUDIO.name} Legal Desk</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-medium text-white tracking-tight">
                    Have questions about this policy?
                  </h3>
                  <p className="text-[15px] text-white/70 leading-relaxed max-w-xl">
                    Our compliance team is available to assist you with commercial master service agreements, custom NDAs, and data requests.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4 text-xs font-mono">
                    <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/10 border border-white/10">
                      <Mail size={16} className="text-white shrink-0" />
                      <div className="truncate">
                        <span className="text-white/60 block text-[10px]">Email Legal Desk</span>
                        <a href={`mailto:${STUDIO.email}`} className="font-semibold text-white hover:underline">
                          {STUDIO.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/10 border border-white/10">
                      <MapPin size={16} className="text-white shrink-0 mt-0.5" />
                      <div>
                        <span className="text-white/60 block text-[10px]">Registered Entity Office</span>
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
              RIGHT: Sticky Table of Contents Sidebar (Full list — No scrollbar)
             ══════════════════════════════════════════════════════════════════════ */}
          <aside className="hidden lg:block lg:col-span-4 sticky top-28 space-y-6">
            
            {/* Table of Contents Card */}
            <div className="rounded-3xl border border-line bg-white p-6 shadow-xs">
              <div className="flex items-center justify-between pb-4 mb-3 border-b border-line">
                <div className="flex items-center gap-2">
                  <ListOrdered size={16} className="text-ink" />
                  <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-ink">
                    Contents
                  </h2>
                </div>
                <span className="text-xs font-mono text-muted">
                  {sections.length} Sections
                </span>
              </div>

              {/* Full un-scrolled list showing ALL items directly */}
              <nav className="space-y-1">
                {sections.map((section) => {
                  const isActive = activeSection === section.id;
                  return (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full text-left px-3.5 py-2.5 rounded-full transition-all flex items-center justify-between group cursor-pointer text-sm ${
                        isActive
                          ? "bg-ink text-white font-medium shadow-xs"
                          : "text-muted hover:text-ink hover:bg-soft"
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0 pr-1">
                        <span className={`font-mono text-xs shrink-0 ${isActive ? "text-white/70" : "text-muted/60 group-hover:text-ink"}`}>
                          {section.number}.
                        </span>
                        <span className="text-[13px] truncate text-left">{section.title}</span>
                      </div>
                    </button>
                  );
                })}
              </nav>

              {/* Bottom Quick Action: Copy Email / Back to Top */}
              <div className="pt-4 mt-3 border-t border-line flex items-center justify-between">
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-muted hover:text-ink font-medium transition-colors cursor-pointer"
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
                  className="inline-flex items-center gap-1 text-xs font-mono text-muted hover:text-ink transition-colors cursor-pointer"
                >
                  <span>Top</span>
                  <ArrowUp size={12} />
                </button>
              </div>
            </div>

            {/* Related Legal Document Card */}
            <div className="rounded-3xl border border-line bg-white p-6 shadow-xs flex flex-col gap-4">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-muted block">
                  Related Document
                </span>
                <h4 className="text-lg font-medium text-ink mt-1">
                  {relatedDoc.title}
                </h4>
                <p className="text-xs text-muted leading-relaxed mt-1">
                  {relatedDoc.description}
                </p>
              </div>
              <PillButton href={relatedDoc.href} variant="outline" size="md">
                Read document →
              </PillButton>
            </div>

          </aside>

        </div>
      </div>

      <Footer />
    </div>
  );
}
