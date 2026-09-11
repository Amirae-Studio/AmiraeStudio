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
    question: "What does Amiraé Studio actually create?",
    answer: "Amiraé Studio is a 3D design house turning imagination into intricate, physical detail—from miniature cityscapes to hyper-real product art. We design, sculpt, and print worlds you can hold in your hands.",
    author: "Helen Reyes",
    role: "Brand Manager",
    handle: "@GlowUp Cosmetics",
    avatar: "/bird.webp",
    bubbleColor: "bg-[#3B82F6] text-white",
    align: "left",
    sticker: "Chill Out",
  },
  {
    question: "How long does a typical 3D design and print project take?",
    answer: "Timelines depend on complexity, but most initial concept sculpts and digital iterations are delivered within 1 to 2 weeks before physical printing and shipping.",
    author: "Mia Thompson",
    role: "Creative Director",
    handle: "@SnackLab",
    avatar: "/bird2.avif",
    bubbleColor: "bg-[#10B981] text-gray-900",
    align: "right",
    sticker: "Nice",
  },
  {
    question: "Can you handle custom physical scaling and miniature world building?",
    answer: "Creative, colourful, and always on point. Yes! We specialize in custom spatial scales, miniature architectural models, and bespoke textured product environments.",
    author: "Liam Vance",
    role: "Lead Designer",
    handle: "@VanceStudio",
    avatar: "/bird.webp",
    bubbleColor: "bg-[#F97316] text-white",
    align: "left",
    sticker: "Awesome",
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