"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/footer";
import { 
  ShieldCheck, 
  Clock, 
  FileText, 
  ChevronRight, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUp, 
  Check, 
  Copy,
  ExternalLink,
  ListOrdered
} from "lucide-react";

export interface LegalSection {
  id: string;
  number: string;
  title: string;
  content: React.ReactNode;
}

interface LegalDocViewerProps {
  title: string;
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
      const scrollPosition = window.scrollY + 180;
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
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveSection(id);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("contact@amirae.studio");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#faf9f5] text-gray-900 font-sans selection:bg-[#21E1B5]/30">
      <Navbar />

      {/* Reading Progress Indicator */}
      <div 
        className="fixed top-[65px] left-0 h-1 bg-[#21E1B5] z-40 transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      {/* Header / Hero Section */}
      <header className="relative pt-32 pb-14 sm:pt-36 sm:pb-18 px-4 sm:px-6 lg:px-8 border-b border-black/10 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb & Meta Tag */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-mono font-bold uppercase tracking-wider text-gray-500 mb-4">
            <Link href="/" className="hover:text-teal-700 transition-colors">
              Home
            </Link>
            <ChevronRight size={12} className="text-gray-400" />
            <span className="text-gray-400">Legal &amp; Compliance</span>
            <ChevronRight size={12} className="text-gray-400" />
            <span className="text-teal-700 font-extrabold">{title}</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-[11px] font-mono font-bold uppercase tracking-wider mb-4">
                <ShieldCheck size={14} className="text-teal-600" />
                <span>AMIRAE STUDIO LLC Governance</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
                {title}
              </h1>
              <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
                {description}
              </p>
            </div>

            {/* Document Metadata Pill Box */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 p-3.5 rounded-2xl bg-[#faf9f5] border border-black/10 text-xs font-mono">
              <div className="px-3 py-1.5 rounded-xl bg-white border border-black/5 shadow-2xs">
                <span className="text-gray-400 block text-[10px] uppercase">Effective Date</span>
                <span className="font-bold text-gray-900">{effectiveDate}</span>
              </div>
              <div className="px-3 py-1.5 rounded-xl bg-white border border-black/5 shadow-2xs">
                <span className="text-gray-400 block text-[10px] uppercase">Last Updated</span>
                <span className="font-bold text-teal-700">{lastUpdated}</span>
              </div>
              <div className="px-3 py-1.5 rounded-xl bg-white border border-black/5 shadow-2xs">
                <span className="text-gray-400 block text-[10px] uppercase">Version</span>
                <span className="font-bold text-gray-900">{version}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Two-Column Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* ══════════════════════════════════════════════════════════════════════
              LEFT / MAIN CONTENT COLUMN (Scrollable Legal Content)
             ══════════════════════════════════════════════════════════════════════ */}
          <main className="lg:col-span-8 space-y-12 bg-white p-6 sm:p-10 md:p-12 rounded-3xl border border-black/10 shadow-xs">
            
            {/* Quick Summary / Advisory Alert Box */}
            <div className="p-5 sm:p-6 rounded-2xl bg-teal-50/70 border border-teal-200/80 text-teal-950">
              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-xl bg-teal-600 text-white shrink-0 mt-0.5 shadow-xs">
                  <FileText size={18} />
                </div>
                <div className="space-y-1.5">
                  <h2 className="text-sm font-bold uppercase tracking-wider text-teal-900 font-mono">
                    Summary &amp; Applicability Notice
                  </h2>
                  <p className="text-xs sm:text-sm text-teal-900/90 leading-relaxed font-normal">
                    This document sets forth the binding legal provisions between you (whether an individual or commercial enterprise) and <strong>AMIRAE STUDIO LLC</strong>. Please read each section carefully. For inquiries regarding our commercial terms, CAD rights, or privacy handling, contact our legal desk at <a href="mailto:contact@amirae.studio" className="underline font-bold hover:text-teal-950">contact@amirae.studio</a>.
                  </p>
                </div>
              </div>
            </div>

            {/* Mobile Table of Contents Accordion / Quick Jump */}
            <div className="lg:hidden p-4 rounded-2xl bg-[#faf9f5] border border-black/10">
              <div className="flex items-center gap-2 mb-3 text-xs font-mono font-bold uppercase tracking-wider text-gray-700">
                <ListOrdered size={16} className="text-teal-600" />
                <span>Jump to Section</span>
              </div>
              <select
                value={activeSection}
                onChange={(e) => scrollToSection(e.target.value)}
                className="w-full p-2.5 rounded-xl border border-black/15 bg-white text-xs font-medium text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                {sections.map((section) => (
                  <option key={section.id} value={section.id}>
                    {section.number}. {section.title}
                  </option>
                ))}
              </select>
            </div>

            {/* Legal Sections */}
            <div className="space-y-14 divide-y divide-gray-100">
              {sections.map((section, idx) => (
                <section
                  key={section.id}
                  id={section.id}
                  className={`scroll-mt-32 ${idx > 0 ? "pt-12" : ""}`}
                >
                  <div className="flex items-start gap-3 sm:gap-4 mb-4">
                    <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-teal-50 border border-teal-200 text-teal-800 font-mono font-extrabold text-xs shrink-0 mt-0.5">
                      {section.number}
                    </span>
                    <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-950">
                      {section.title}
                    </h2>
                  </div>

                  <div className="text-sm sm:text-base text-gray-700 leading-relaxed pl-0 sm:pl-12 space-y-4">
                    {section.content}
                  </div>
                </section>
              ))}
            </div>

            {/* Contact / Legal Entity Verification Box */}
            <div className="mt-14 pt-8 border-t border-gray-200">
              <div className="rounded-2xl bg-zinc-950 text-white p-6 sm:p-8 relative overflow-hidden">
                <div className="relative z-10 space-y-4">
                  <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#21E1B5]">
                    <ShieldCheck size={14} />
                    <span>AMIRAE STUDIO LLC • Legal Information</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold">Have Questions About This Policy?</h3>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    Our compliance and studio management team is available to assist you with commercial contracts, custom Non-Disclosure Agreements (NDAs), and data requests.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-mono">
                    <div className="flex items-center gap-2.5 p-3 rounded-xl bg-zinc-900 border border-zinc-800">
                      <Mail size={15} className="text-[#21E1B5] shrink-0" />
                      <div className="truncate">
                        <span className="text-zinc-500 block text-[10px]">Email Legal Desk</span>
                        <a href="mailto:contact@amirae.studio" className="font-bold text-white hover:underline">
                          contact@amirae.studio
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5 p-3 rounded-xl bg-zinc-900 border border-zinc-800">
                      <Phone size={15} className="text-[#21E1B5] shrink-0" />
                      <div>
                        <span className="text-zinc-500 block text-[10px]">Phone Support</span>
                        <span className="font-bold text-white">+91 8951478989</span>
                      </div>
                    </div>

                    <div className="sm:col-span-2 flex items-start gap-2.5 p-3 rounded-xl bg-zinc-900 border border-zinc-800">
                      <MapPin size={15} className="text-[#21E1B5] shrink-0 mt-0.5" />
                      <div>
                        <span className="text-zinc-500 block text-[10px]">Registered Entity Office</span>
                        <span className="text-zinc-200 text-xs">
                          AMIRAE STUDIO LLC, Thirunagar, Madurai, Tamil Nadu, 625006, India
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </main>


          {/* ══════════════════════════════════════════════════════════════════════
              RIGHT COLUMN: Sticky Table of Contents Sidebar (All 15 Items Visible Without Scroll)
             ══════════════════════════════════════════════════════════════════════ */}
          <aside className="hidden lg:block lg:col-span-4 sticky top-24 space-y-5">
            
            {/* Table of Contents Card */}
            <div className="p-5 sm:p-6 rounded-3xl bg-white border border-black/10 shadow-xs">
              <div className="flex items-center justify-between pb-3.5 mb-3 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <ListOrdered size={16} className="text-teal-600" />
                  <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-gray-900">
                    Contents
                  </h2>
                </div>
                <span className="text-[11px] font-mono text-gray-400 font-semibold">
                  {sections.length} Sections
                </span>
              </div>

              {/* Full un-scrolled list showing all 15 sections directly */}
              <nav className="space-y-1 text-xs">
                {sections.map((section) => {
                  const isActive = activeSection === section.id;
                  return (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full text-left px-2.5 py-1.5 rounded-xl transition-all flex items-center justify-between group cursor-pointer ${
                        isActive
                          ? "bg-teal-500/10 text-teal-900 font-bold border-l-2 border-teal-600 pl-2"
                          : "text-gray-600 hover:text-gray-900 hover:bg-gray-50 font-medium"
                      }`}
                    >
                      <div className="flex items-start gap-2 min-w-0 pr-1 py-0.5">
                        <span className={`font-mono text-[11px] shrink-0 mt-0.5 ${isActive ? "text-teal-700 font-bold" : "text-gray-400 group-hover:text-gray-600"}`}>
                          {section.number}.
                        </span>
                        <span className="text-[11.5px] leading-snug text-left">{section.title}</span>
                      </div>
                     
                    </button>
                  );
                })}
              </nav>

              {/* Bottom Quick Action: Copy Email / Back to Top */}
              <div className="pt-3.5 mt-3 border-t border-gray-100 flex items-center justify-between">
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 text-[11px] font-mono text-gray-600 hover:text-black font-bold transition-colors cursor-pointer"
                >
                  {copiedEmail ? (
                    <>
                      <Check size={13} className="text-teal-600" />
                      <span className="text-teal-600">Copied email</span>
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
                  className="inline-flex items-center gap-1 text-[11px] font-mono text-gray-400 hover:text-teal-700 transition-colors cursor-pointer"
                >
                  <span>Top</span>
                  <ArrowUp size={12} />
                </button>
              </div>
            </div>

            {/* Related Legal Document Card */}
            <div className="p-4 rounded-2xl bg-[#f0faf8] border border-teal-100 flex items-center justify-between gap-3">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-teal-700 block">
                  Related Document
                </span>
                <h4 className="text-xs font-bold text-gray-900 mt-0.5">
                  {relatedDoc.title}
                </h4>
              </div>
              <Link
                href={relatedDoc.href}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-teal-600 text-white font-mono text-[11px] font-bold uppercase hover:bg-teal-700 transition-all shrink-0"
              >
                <span>Read</span>
                <ExternalLink size={11} />
              </Link>
            </div>

          </aside>

        </div>
      </div>

      <Footer />
    </div>
  );
}
