"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

interface FaqItem {
  question: string;
  answer: string;
  author: string;
  role: string;
  handle: string;
  avatar: string;
  bubbleColor: string;
  align: "left" | "right";
  sticker?: string;
}

const faqData: FaqItem[] = [
  {
    question: "What does AMIRAE STUDIO LLC actually create and deliver?",
    answer: "AMIRAE STUDIO LLC is a commercial 3D design house and fabrication studio. We deliver production-grade 3D CAD/STL files, custom physical 3D miniatures (like FrameCity), architectural scale models, and interactive WebGL 3D web visualizations.",
    author: "Commercial Scope",
    role: "Studio Operations",
    handle: "@AmiraeCommercial",
    avatar: "/bird.webp",
    bubbleColor: "bg-[#3B82F6] text-white",
    align: "left",
    sticker: "3D Studio",
  },
  {
    question: "How does AMIRAE STUDIO LLC generate revenue and handle billing?",
    answer: "Revenue is generated via milestone-based custom 3D project contracts, digital 3D asset licensing/downloads, direct physical product/print sales, and software development retainers. Invoices are issued with transparent payment milestones.",
    author: "Financial Terms",
    role: "Billing & Accounts",
    handle: "@AmiraeAccounts",
    avatar: "/bird2.avif",
    bubbleColor: "bg-[#10B981] text-gray-900",
    align: "right",
    sticker: "Revenue Model",
  },
  {
    question: "How long does a typical 3D design and fabrication project take?",
    answer: "Timelines range from 3 to 10 business days for digital 3D CAD assets and 2 to 4 weeks for complex physical miniature collections or custom architectural modeling with full quality inspection.",
    author: "Delivery Timelines",
    role: "Project Management",
    handle: "@AmiraeDelivery",
    avatar: "/bird.webp",
    bubbleColor: "bg-[#F97316] text-white",
    align: "left",
    sticker: "Fast Delivery",
  },
  {
    question: "Does AMIRAE STUDIO LLC serve U.S. and international clients?",
    answer: "Yes. We serve enterprise and individual clients in the United States and worldwide. We deliver digital assets electronically and fulfill physical 3D prints via tracked international carriers.",
    author: "Global Operations",
    role: "Fulfillment Team",
    handle: "@AmiraeGlobal",
    avatar: "/bird2.avif",
    bubbleColor: "bg-[#2AD5C6] text-gray-900",
    align: "right",
    sticker: "U.S. & Global",
  },
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const containerRef = useRef<HTMLElement>(null);

  // Track scroll progress using a React useRef properly initialized
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [60, 0, 0, -60]);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <motion.section
      id="faq"
      ref={containerRef}
      style={{ opacity, y }}
      className="relative bg-white text-gray-900 py-28 px-4 sm:px-6 lg:px-8 overflow-hidden font-[family-name:var(--font-your-hero-font)]"
    >
      {/* Graph-paper background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.5]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-hand text-2xl text-gray-800 mb-1">got questions?</p>
          <motion.div 
            whileHover={{ scale: 1.03, rotate: 0 }}
            className="relative inline-block" 
            style={{ transform: "rotate(-1deg)" }}
          >
            <div className="absolute -inset-4 border border-gray-800 shadow-sm" />
            {["-top-1.5 -left-1.5", "-top-1.5 -right-1.5", "-bottom-1.5 -left-1.5", "-bottom-1.5 -right-1.5"].map(
              (pos) => (
                <span
                  key={pos}
                  className={`absolute ${pos} w-3 h-3 bg-white border-2 border-[#2AD5C6] shadow-sm`}
                />
              )
            )}
            <h2 className="font-pixel text-4xl sm:text-5xl tracking-wider px-6 py-3 bg-white/60 backdrop-blur-xs">
              FAQ CHAT
            </h2>
          </motion.div>
        </motion.div>

        <div className="space-y-12">
          {faqData.map((faq, index) => {
            const isOpen = activeIndex === index;
            const isRight = faq.align === "right";

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isRight ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`flex flex-col ${isRight ? "items-end" : "items-start"} w-full`}
              >
                {/* Question trigger styled like a clickable chat bubble label */}
                <motion.button
                  onClick={() => toggleAccordion(index)}
                  whileHover={{ scale: 1.015 }}
                  whileTap={{ scale: 0.985 }}
                  className={`relative max-w-2xl w-full p-6 sm:p-8 rounded-3xl shadow-xl text-left cursor-pointer ${faq.bubbleColor}`}
                  style={{
                    borderBottomLeftRadius: isRight ? "1.5rem" : "0.3rem",
                    borderBottomRightRadius: isRight ? "0.3rem" : "1.5rem",
                  }}
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-pixel text-sm sm:text-base tracking-wide">
                      {faq.question}
                    </span>
                    <motion.span 
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-xl font-bold shrink-0"
                    >
                      {isOpen ? "—" : "+"}
                    </motion.span>
                  </div>

                  {/* Expanded Answer Body with Framer Motion */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0, y: -10 }}
                        animate={{ opacity: 1, height: "auto", y: 0 }}
                        exit={{ opacity: 0, height: 0, y: -10 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <motion.p 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.1, duration: 0.3 }}
                          className="font-hand text-2xl sm:text-3xl mt-4 pt-4 border-t border-white/20 leading-relaxed"
                        >
                          {faq.answer}
                        </motion.p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Sticker badge element with spring entry */}
                  {faq.sticker && (
                    <motion.div 
                      initial={{ scale: 0, rotate: -20 }}
                      animate={{ scale: 1, rotate: 6 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      className="absolute -bottom-3 right-6 bg-black text-white font-pixel text-[10px] px-2.5 py-1 rounded-full shadow-md border border-white/40"
                    >
                      {faq.sticker}
                    </motion.div>
                  )}
                </motion.button>

                {/* Author profile tag below the chat bubble */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
                  className={`flex items-center gap-3 mt-3 px-2 ${
                    isRight ? "flex-row-reverse text-right" : "flex-row text-left"
                  }`}
                >
                  <img
                    src={faq.avatar}
                    alt={faq.author}
                    className="w-10 h-10 rounded-full object-cover border-2 border-gray-800 shadow-sm"
                  />
                  <div>
                    <p className="text-[11px] font-mono text-gray-500">{faq.handle}</p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}