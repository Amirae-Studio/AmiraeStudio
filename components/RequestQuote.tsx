"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Boxes, 
  Cpu, 
  Printer, 
  Landmark, 
  Code2, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  Send, 
  ShieldCheck, 
  Clock, 
  DollarSign,
  Building,
  User,
  Mail,
  Phone,
  MapPin
} from "lucide-react";

const SERVICE_OPTIONS = [
  {
    id: "3d-modeling",
    title: "3D CAD & Asset Modeling",
    desc: "Production-ready digital meshes, topology & PBR texturing",
    icon: Boxes,
  },
  {
    id: "product-design",
    title: "Rapid Product Prototyping",
    desc: "Industrial DfAM CAD engineering & functional prototypes",
    icon: Cpu,
  },
  {
    id: "3d-printing",
    title: "Physical 3D Print Fabrication",
    desc: "High-precision resin/FDM finished miniatures & kits",
    icon: Printer,
  },
  {
    id: "architectural",
    title: "Architectural Scale Models",
    desc: "Historic monuments, cityscapes & framed relief art",
    icon: Landmark,
  },
  {
    id: "digital-ecosystems",
    title: "Interactive 3D Web / WebGL",
    desc: "Three.js 3D configurators & high-speed web apps",
    icon: Code2,
  },
  {
    id: "custom-commission",
    title: "Custom Studio Commission",
    desc: "Bespoke multi-discipline project or ongoing retainer",
    icon: Sparkles,
  },
];

const DELIVERABLE_OPTIONS = [
  "Parametric CAD (STEP / IGES)",
  "3D Print Mesh (STL / OBJ / 3MF)",
  "4K / 8K Photorealistic Render Passes",
  "Physical 3D Prints Shipped Worldwide",
  "Interactive WebGL / Three.js Codebase",
  "Commercial IP & Exclusive Rights",
];

const BUDGET_RANGES = [
  { label: "$500 – $1,500", desc: "Single model / asset batch" },
  { label: "$1,500 – $5,000", desc: "Complex prototype / miniature collection" },
  { label: "$5,000 – $15,000", desc: "Full product design or WebGL interactive" },
  { label: "$15,000+", desc: "Enterprise fabrication or ongoing retainer" },
];

const TIMELINE_OPTIONS = [
  "Urgent (< 10 business days)",
  "Standard (2 to 4 weeks)",
  "Comprehensive (1 to 2 months)",
  "Flexible / Long-term roadmap",
];

export default function RequestQuoteSection() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  // Requirements State
  const [selectedService, setSelectedService] = useState(SERVICE_OPTIONS[0].title);
  const [selectedDeliverables, setSelectedDeliverables] = useState<string[]>([
    DELIVERABLE_OPTIONS[0],
    DELIVERABLE_OPTIONS[1],
  ]);
  const [budget, setBudget] = useState(BUDGET_RANGES[1].label);
  const [timeline, setTimeline] = useState(TIMELINE_OPTIONS[1]);
  const [projectBrief, setProjectBrief] = useState("");

  // Contact Info State
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    country: "",
  });

  const toggleDeliverable = (item: string) => {
    if (selectedDeliverables.includes(item)) {
      setSelectedDeliverables(selectedDeliverables.filter((d) => d !== item));
    } else {
      setSelectedDeliverables([...selectedDeliverables, item]);
    }
  };

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (!projectBrief.trim()) {
      alert("Please provide a brief description of your project requirements.");
      return;
    }
    setStep(2);
  };

  const handleSubmitQuote = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const fullMessage = `
REQUEST A QUOTE SUBMISSION:
--------------------------------------
Service Required: ${selectedService}
Deliverables: ${selectedDeliverables.join(", ")}
Budget Range: ${budget}
Target Timeline: ${timeline}
Company/Brand: ${contactInfo.company || "N/A"}
Country/Location: ${contactInfo.country || "N/A"}
Phone/WhatsApp: ${contactInfo.phone || "N/A"}

Project Requirements Brief:
${projectBrief}
    `.trim();

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "e52fdb81-d925-4fa7-97a3-f37c9bf6032a",
          name: contactInfo.name,
          email: contactInfo.email,
          subject: `New Commercial Quote Request: ${selectedService} - ${contactInfo.name}`,
          message: fullMessage,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSent(true);
      } else {
        alert("Something went wrong with the quote submission. Please email contact@amirae.studio directly.");
      }
    } catch (err) {
      alert("Network error. Please email contact@amirae.studio directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section 
      id="quote" 
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-zinc-950 text-white border-t border-zinc-800 overflow-hidden font-[family-name:var(--font-your-hero-font)]"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#21E1B5]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white leading-tight">
            Request a <span className="text-[#21E1B5]">Commercial Quote</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            Select your project requirements, deliverables, and timeline to receive a formal statement of work and transparent milestone quote.
          </p>
        </div>

        {/* Wizard Steps Indicator */}
        {!sent && (
          <div className="flex items-center justify-center gap-4 mb-10 text-xs font-mono">
            <div className={`flex items-center gap-2 px-4 py-2 rounded-2xl border transition-all ${
              step === 1 
                ? "bg-[#21E1B5] text-black border-[#21E1B5] font-bold shadow-md" 
                : "bg-zinc-900 text-zinc-400 border-zinc-800"
            }`}>
              <span className="w-5 h-5 rounded-full bg-black/20 flex items-center justify-center text-[11px] font-bold">1</span>
              <span>1. Customer Requirements</span>
            </div>

            <div className="w-8 h-px bg-zinc-800" />

            <div className={`flex items-center gap-2 px-4 py-2 rounded-2xl border transition-all ${
              step === 2 
                ? "bg-[#21E1B5] text-black border-[#21E1B5] font-bold shadow-md" 
                : "bg-zinc-900 text-zinc-400 border-zinc-800"
            }`}>
              <span className="w-5 h-5 rounded-full bg-black/20 flex items-center justify-center text-[11px] font-bold">2</span>
              <span>2. Contact &amp; Organization</span>
            </div>
          </div>
        )}

        {/* Main Form Container */}
        <div className="bg-zinc-900/90 border border-zinc-800 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
          
          {/* STEP 1: CUSTOMER REQUIREMENTS */}
          {!sent && step === 1 && (
            <motion.form 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              onSubmit={handleNextStep}
              className="space-y-8"
            >
              {/* 1. Service Selection */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider font-bold text-zinc-300 mb-3">
                  Select Primary Service Needed <span className="text-[#21E1B5]">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {SERVICE_OPTIONS.map((srv) => {
                    const isSelected = selectedService === srv.title;
                    const Icon = srv.icon;
                    return (
                      <div
                        key={srv.id}
                        onClick={() => setSelectedService(srv.title)}
                        className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                          isSelected
                            ? "bg-[#21E1B5]/15 border-[#21E1B5] text-white shadow-lg ring-1 ring-[#21E1B5]/30"
                            : "bg-zinc-950/60 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200"
                        }`}
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                            isSelected ? "bg-[#21E1B5] text-black" : "bg-zinc-800 text-zinc-300"
                          }`}>
                            <Icon size={16} />
                          </div>
                          <h4 className="text-sm font-bold text-white leading-snug">{srv.title}</h4>
                        </div>
                        <p className="text-xs text-zinc-400 leading-relaxed pl-11">{srv.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* 2. Deliverables Needed */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider font-bold text-zinc-300 mb-3">
                  Required Deliverables &amp; Output Formats
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                  {DELIVERABLE_OPTIONS.map((deliv) => {
                    const isChecked = selectedDeliverables.includes(deliv);
                    return (
                      <div
                        key={deliv}
                        onClick={() => toggleDeliverable(deliv)}
                        className={`px-4 py-3 rounded-xl border flex items-center gap-3 cursor-pointer text-xs font-medium transition-all ${
                          isChecked
                            ? "bg-zinc-800 border-[#21E1B5] text-white shadow-xs"
                            : "bg-zinc-950/50 border-zinc-800 text-zinc-400 hover:border-zinc-700"
                        }`}
                      >
                        <div className={`w-4 h-4 rounded-md flex items-center justify-center shrink-0 border ${
                          isChecked ? "bg-[#21E1B5] border-[#21E1B5] text-black" : "border-zinc-600 bg-zinc-900"
                        }`}>
                          {isChecked && <CheckCircle2 size={12} className="stroke-[3]" />}
                        </div>
                        <span>{deliv}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* 3. Budget and Timeline Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                {/* Budget */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider font-bold text-zinc-300 mb-3 flex items-center gap-2">
                    <DollarSign size={14} className="text-[#21E1B5]" />
                    Estimated Project Budget
                  </label>
                  <div className="space-y-2">
                    {BUDGET_RANGES.map((b) => (
                      <div
                        key={b.label}
                        onClick={() => setBudget(b.label)}
                        className={`p-3.5 rounded-xl border flex items-center justify-between cursor-pointer text-xs transition-all ${
                          budget === b.label
                            ? "bg-[#21E1B5]/10 border-[#21E1B5] text-white font-semibold shadow-xs"
                            : "bg-zinc-950/50 border-zinc-800 text-zinc-400 hover:border-zinc-700"
                        }`}
                      >
                        <span className="font-mono text-sm text-white font-bold">{b.label}</span>
                        <span className="text-[11px] text-zinc-400">{b.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Timeline */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider font-bold text-zinc-300 mb-3 flex items-center gap-2">
                    <Clock size={14} className="text-[#21E1B5]" />
                    Target Completion Timeline
                  </label>
                  <div className="space-y-2">
                    {TIMELINE_OPTIONS.map((t) => (
                      <div
                        key={t}
                        onClick={() => setTimeline(t)}
                        className={`p-3.5 rounded-xl border flex items-center justify-between cursor-pointer text-xs transition-all ${
                          timeline === t
                            ? "bg-[#21E1B5]/10 border-[#21E1B5] text-white font-semibold shadow-xs"
                            : "bg-zinc-950/50 border-zinc-800 text-zinc-400 hover:border-zinc-700"
                        }`}
                      >
                        <span className="text-xs text-white">{t}</span>
                        <div className={`w-3.5 h-3.5 rounded-full border ${
                          timeline === t ? "bg-[#21E1B5] border-[#21E1B5]" : "border-zinc-600"
                        }`} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* 4. Project Requirements Brief */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider font-bold text-zinc-300 mb-2">
                  Project Requirements &amp; Scope Details <span className="text-[#21E1B5]">*</span>
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Describe your design specifications, dimensions, tolerances, references, or specific deliverables required..."
                  value={projectBrief}
                  onChange={(e) => setProjectBrief(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl p-4 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-[#21E1B5] focus:border-transparent transition-all resize-y"
                />
              </div>

              <div className="flex items-center justify-end pt-4 border-t border-zinc-800">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#21E1B5] text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#1bc79f] transition-all cursor-pointer shadow-lg hover:scale-105"
                >
                  <span>Continue to Contact Info (2/2)</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </motion.form>
          )}

          {/* STEP 2: CONTACT & ORGANIZATION INFORMATION */}
          {!sent && step === 2 && (
            <motion.form
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              onSubmit={handleSubmitQuote}
              className="space-y-6"
            >
              <div>
                <h3 className="text-xl font-bold text-white mb-1">
                  Contact &amp; Delivery Information
                </h3>
                <p className="text-xs text-zinc-400">
                  Where should we send your formal quote, NDA, and milestone breakdown?
                </p>
              </div>

              {/* Requirement Summary Tag */}
              <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 text-xs font-mono space-y-1">
                <div className="text-[#21E1B5] font-bold">Selected Requirements:</div>
                <div className="text-zinc-300">{selectedService} • Budget: {budget} • Timeline: {timeline}</div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider font-bold text-zinc-300 mb-2 flex items-center gap-1.5">
                    <User size={13} className="text-[#21E1B5]" /> Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Sarah Jenkins"
                    value={contactInfo.name}
                    onChange={(e) => setContactInfo({ ...contactInfo, name: e.target.value })}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-[#21E1B5] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider font-bold text-zinc-300 mb-2 flex items-center gap-1.5">
                    <Mail size={13} className="text-[#21E1B5]" /> Email Address <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="sarah@organization.com"
                    value={contactInfo.email}
                    onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-[#21E1B5] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider font-bold text-zinc-300 mb-2 flex items-center gap-1.5">
                    <Building size={13} className="text-[#21E1B5]" /> Company / Organization (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Apex Hardware Labs"
                    value={contactInfo.company}
                    onChange={(e) => setContactInfo({ ...contactInfo, company: e.target.value })}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-[#21E1B5] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider font-bold text-zinc-300 mb-2 flex items-center gap-1.5">
                    <Phone size={13} className="text-[#21E1B5]" /> Phone / WhatsApp (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="+1 (555) 019-2834"
                    value={contactInfo.phone}
                    onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-[#21E1B5] transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider font-bold text-zinc-300 mb-2 flex items-center gap-1.5">
                  <MapPin size={13} className="text-[#21E1B5]" /> Country / Shipping Location (For physical prints)
                </label>
                <input
                  type="text"
                  placeholder="e.g. United States, United Kingdom, Canada, etc."
                  value={contactInfo.country}
                  onChange={(e) => setContactInfo({ ...contactInfo, country: e.target.value })}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-[#21E1B5] transition-all"
                />
              </div>

              <div className="p-4 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 flex items-start gap-3 text-xs text-zinc-400">
                <ShieldCheck size={18} className="text-[#21E1B5] shrink-0 mt-0.5" />
                <span>
                  <strong>Strict Confidentiality:</strong> All shared drawings, CAD files, and technical briefs remain fully protected under mutual NDA standards.
                </span>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-zinc-800">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 hover:text-white transition-colors cursor-pointer"
                >
                  <ArrowLeft size={14} />
                  <span>Back to Requirements</span>
                </button>

                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#21E1B5] text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#1bc79f] transition-all disabled:opacity-50 cursor-pointer shadow-lg hover:scale-105"
                >
                  {loading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-black/40 border-t-black rounded-full animate-spin" />
                      <span>Submitting Quote Request...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Commercial Quote</span>
                      <Send size={14} />
                    </>
                  )}
                </button>
              </div>
            </motion.form>
          )}

          {/* SUCCESS STATE */}
          {sent && (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#21E1B5]/20 text-[#21E1B5] flex items-center justify-center mx-auto ring-8 ring-[#21E1B5]/10">
                <CheckCircle2 size={36} />
              </div>
              <h3 className="text-3xl font-bold text-white tracking-tight">Quote Request Submitted!</h3>
              <p className="text-sm text-zinc-400 max-w-lg mx-auto leading-relaxed">
                Thank you for your submission. Our technical directors will review your requirements and respond with an itemized Statement of Work within <strong>24 business hours</strong>.
              </p>

              <div className="pt-6">
                <button
                  onClick={() => {
                    setSent(false);
                    setStep(1);
                    setProjectBrief("");
                    setContactInfo({ name: "", email: "", phone: "", company: "", country: "" });
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-800 text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-zinc-700 transition-all cursor-pointer hover:scale-105"
                >
                  Submit Another Quote Request
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
