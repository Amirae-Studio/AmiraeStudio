"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronDown, 
  Layers, 
  CreditCard, 
  Clock, 
  Globe, 
  Sparkles,
  ArrowRight,
  HelpCircle,
  CheckCircle2
} from "lucide-react";

interface FaqItem {
  id: string;
  category: string;
  icon: React.ElementType;
  question: string;
  answer: string;
  highlight?: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    id: "01",
    category: "Studio Scope & Capabilities",
    icon: Layers,
    question: "What 3D design, modeling, and fabrication services does AMIRAE STUDIO LLC provide?",
    answer: "AMIRAE STUDIO LLC is a comprehensive 3D design and digital fabrication studio. We deliver production-ready 3D CAD/STL files, custom physical 3D miniatures (such as our FrameCity collections), architectural scale models, rapid product prototypes, and custom interactive WebGL/Three.js web visualizations.",
    highlight: "CAD/STL • Physical Printing • WebGL 3D"
  },
  {
    id: "02",
    category: "Pricing & Commercial Terms",
    icon: CreditCard,
    question: "How does AMIRAE STUDIO LLC structure project pricing, milestones, and billing?",
    answer: "Our engagements operate under clear milestone contracts. For bespoke projects, we typically structure billing into a 50% initiation deposit and 50% upon final sign-off and file handover. We also offer fixed-price digital asset licensing, direct physical product sales, and monthly engineering retainers.",
    highlight: "Milestone Contracts • Secure Invoicing"
  },
  {
    id: "03",
    category: "Turnaround & Timelines",
    icon: Clock,
    question: "What is the typical turnaround time for 3D modeling and physical fabrication?",
    answer: "Digital 3D CAD modeling and asset creation batches typically take between 3 to 10 business days. Complex physical fabrication projects, multi-part miniature collections, or custom architectural models typically require 2 to 4 weeks, including precision quality inspection and packing.",
    highlight: "3–10 Days Digital • 2–4 Weeks Physical"
  },
  {
    id: "04",
    category: "Global Operations & Fulfillment",
    icon: Globe,
    question: "Does AMIRAE STUDIO LLC serve international and U.S.-based clients?",
    answer: "Yes. We actively work with enterprise brands, hardware startups, architectural firms, and individual collectors worldwide. Digital assets are delivered instantly via secure cloud repositories, while physical 3D prints and framed miniatures are shipped globally with end-to-end tracked logistics.",
    highlight: "Worldwide Shipping & Digital Delivery"
  },
  {
    id: "05",
    category: "Intellectual Property & Custom Work",
    icon: Sparkles,
    question: "Who owns the rights to custom 3D models and CAD files created for my project?",
    answer: "Upon final milestone settlement, full commercial intellectual property (IP) and fabrication rights for custom commissioned assets are transferred to the client. We gladly execute mutual Non-Disclosure Agreements (NDAs) prior to project kickoff.",
    highlight: "100% Commercial IP Ownership"
  }
];

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>("01");

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section 
      id="faq" 
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white border-t border-black/10 overflow-hidden font-[family-name:var(--font-your-hero-font)]"
    >
      {/* Background Subtle Grid Pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: "linear-gradient(to right, rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.04) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      {/* Ambient Floating Glow Bubbles */}
      <motion.div
        animate={{
          x: [0, 20, 0],
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 -left-20 w-80 h-80 bg-[#21E1B5]/10 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{
          x: [0, -20, 0],
          y: [0, 20, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-20 -right-20 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Header with Framer Motion entry */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
        >
          

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-gray-900 leading-tight">
            Frequently Asked <span className="text-teal-600">Questions</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about our commercial 3D modeling, prototyping workflows, milestone pricing, and physical delivery.
          </p>
        </motion.div>

        {/* Accordion List with Staggered Motion */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openId === item.id;
            const Icon = item.icon;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.09,
                  ease: [0.22, 1, 0.36, 1] 
                }}
                whileHover={{ y: -2 }}
                className={`rounded-3xl border transition-all duration-300 overflow-hidden ${
                  isOpen 
                    ? "bg-[#faf9f5] border-teal-500/40 shadow-xl ring-1 ring-teal-500/30" 
                    : "bg-white border-black/10 hover:border-black/20 hover:bg-[#faf9f5]/60 hover:shadow-md"
                }`}
              >
                <motion.button
                  onClick={() => toggleAccordion(item.id)}
                  whileTap={{ scale: 0.995 }}
                  className="w-full px-6 py-5 sm:px-8 sm:py-6 flex items-center justify-between text-left gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4 sm:gap-5 flex-1 pr-2">
                    <motion.div 
                      animate={{ 
                        scale: isOpen ? 1.08 : 1,
                        rotate: isOpen ? 5 : 0 
                      }}
                      transition={{ duration: 0.25 }}
                      className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 transition-colors shadow-xs ${
                        isOpen 
                          ? "bg-[#21E1B5] text-black shadow-md" 
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      <Icon size={20} />
                    </motion.div>

                    <div className="flex flex-col">
                      <span className="text-[11px] font-mono uppercase tracking-widest text-teal-700 font-bold mb-1">
                        {item.category}
                      </span>
                      <span className="text-base sm:text-lg font-semibold text-gray-900 tracking-tight">
                        {item.question}
                      </span>
                    </div>
                  </div>

                  <motion.div 
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-colors shadow-xs ${
                      isOpen ? "bg-[#21E1B5] text-black" : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    <ChevronDown size={18} />
                  </motion.div>
                </motion.button>

                {/* Animated Accordion Body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <motion.div 
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ delay: 0.05, duration: 0.25 }}
                        className="px-6 pb-7 sm:px-8 sm:pb-8 pt-2 border-t border-black/5 text-gray-700 text-sm sm:text-base leading-relaxed pl-16 sm:pl-20"
                      >
                        <p>{item.answer}</p>

                        {item.highlight && (
                          <motion.div 
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.15, duration: 0.3 }}
                            className="mt-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200/70 text-teal-900 font-mono text-xs font-semibold shadow-2xs"
                          >
                            <CheckCircle2 size={13} className="text-teal-600" />
                            <span>{item.highlight}</span>
                          </motion.div>
                        )}
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Callout Box with Framer Motion */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ scale: 1.01 }}
          className="mt-14 p-8 sm:p-10 rounded-3xl bg-[#1a1a1a] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl border border-zinc-800 relative overflow-hidden"
        >
          {/* Subtle Corner Glow */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#21E1B5]/15 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-1">
              Have a custom requirement or specialized inquiry?
            </h3>
            <p className="text-sm text-gray-400">
              Our engineering and design team is ready to evaluate your CAD blueprints or product specifications.
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0 relative z-10">
            <motion.a
              href="#quote"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-[#21E1B5] text-black font-semibold text-xs font-mono uppercase tracking-wider hover:bg-[#1bc79f] transition-all shadow-lg"
            >
              Request a Quote <ArrowRight size={14} />
            </motion.a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}