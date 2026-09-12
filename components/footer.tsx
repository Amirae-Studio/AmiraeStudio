"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { motion, useInView, Variants, AnimatePresence } from "framer-motion";
import { GradientComponent } from "./GradientComponent";
import GlassPaneBG from "./GlassPlane";

// --- DATA FOR EASY UPDATES (Amiraé Studio) ---
const footerLinks = [
  {
    title: "Innovations",
    links: [
      { name: "FrameCity", href: "https://frame-city.vercel.app/" },
      { name: "VibeArt.in", href: "https://vibeart.in/" },
      { name: "Food Item Clickers", href: "#" },
      { name: "Heritage Buildings", href: "#" },
    ],
  },
  {
    title: "Studio",
    links: [
      { name: "About Us", href: "#team" },
      { name: "Contact", href: "#contact" },
      { name: "Makers World", href: "https://makerworld.com/en/crowdfunding/313-framecity-high-detailed-cities-in-frames" },
    ],
  },
];

const socialLinks = [
  { 
    name: "Instagram", 
    href: "https://www.instagram.com/amirae__studio/", 
    svgPath: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" 
  },
  { 
    name: "Gmail", 
    href: "mailto:arun@amirae.studio", 
    svgPath: "M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.713v13.426h24v-13.426l-12 9.713z" 
  },
  { 
    name: "Discord", 
    href: "https://discord.com/channels/1529705981926182953", 
    svgPath: "M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.927 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" 
  },
];

const gradientColors = {
  primary: "#14B8A6",
  secondary: "#2AD5C6",
  accent1: "#84CC16",
  accent2: "#A7F3D0",
  accent3: "#38BDF8",
  highlight1: "#FACC15",
  highlight2: "#22D3EE",
};

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);
  const isInView = useInView(footerRef, { once: true, margin: "0px 0px -80px 0px" });
  const [copied, setCopied] = useState(false);

  const handleEmailClick = (e: React.MouseEvent, socialName: string, email: string) => {
    if (socialName === "Gmail") {
      e.preventDefault();
      navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <footer
      ref={footerRef}
      className="relative mt-20 overflow-hidden text-gray-900 lg:mt-32"
      style={{ backgroundColor: "#2AD5C6" }}
    >
      
        {/* Background Ambient Gradient positioned cleanly behind content */}
        <div className="absolute pointer-events-none left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 overflow-hidden">
          <motion.div
            initial={{ y: 60, opacity: 0, scale: 0.85 }}
            animate={isInView ? { y: 0, opacity: 0.6, scale: 1 } : {}}
            transition={{ duration: 2, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
          >
            <GradientComponent colors={gradientColors} sizeVW={120} isAnimated={true} />
          </motion.div>
        </div>

        <div className="relative z-20 mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {/* ── Left Column: Logo + CTA ── */}
            <motion.div
              className="flex flex-col items-start gap-4"
              variants={fadeUpVariant}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={0}
            >
              <div className="relative flex flex-col items-start px-2 py-1">
                <div className="flex items-center space-x-2">
                  <motion.img
                    src="https://joewkzjnrikotpgzyywh.supabase.co/storage/v1/object/public/gallery/brand/amirae_studio_logo-removebg-preview.webp"
                    alt="Amiraé Studio Logo"
                    className="w-[80px] h-[80px] object-contain"
                    initial={{ opacity: 0, rotate: -15, scale: 0.7 }}
                    animate={isInView ? { opacity: 1, rotate: 0, scale: 1 } : {}}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                  />
                 
                </div>
                <motion.span
                  className="mt-1 text-xs tracking-widest text-gray-900 font-semibold"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                >
                  when the magic happens
                </motion.span>
              </div>

              <motion.p
                className="max-w-xs pt-2 text-gray-900 text-sm font-medium leading-relaxed"
                variants={fadeUpVariant}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                custom={0.2}
              >
                Engineering high-precision physical art, 3D architectural models, and next-gen AI media canvas engines.
              </motion.p>

              <motion.a
                href="#contact"
                variants={fadeUpVariant}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                custom={0.3}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative mt-4 flex w-full items-center justify-center overflow-hidden rounded-[13px] border-2 border-black/30 bg-black/10 p-4 px-12 backdrop-blur-xl sm:w-auto"
              >
                <span className="relative z-10 text-xs font-bold leading-[17px] tracking-widest text-black">
                  GET IN TOUCH
                </span>
              </motion.a>
            </motion.div>

            {/* ── Right Column: Links ── */}
            <div className="grid grid-cols-2 gap-8 lg:col-span-2 lg:pl-16">
              {footerLinks.map((column, colIdx) => (
                <motion.div
                  key={column.title}
                  variants={fadeUpVariant}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  custom={0.15 + colIdx * 0.12}
                >
                  <h3 className="text-xs font-black uppercase tracking-wider text-black">
                    {column.title}
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {column.links.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          target={link.href.startsWith("http") ? "_blank" : "_self"}
                          rel={link.href.startsWith("http") ? "noopener noreferrer" : ""}
                          className="text-xs font-semibold text-gray-900 transition-colors duration-200 hover:text-black hover:underline"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── Bottom Bar ── */}
          <motion.div
            className="relative z-20 mt-16 flex flex-col items-center justify-between gap-6 border-t border-black/20 pt-8 sm:flex-row"
            variants={fadeUpVariant}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={0.5}
          >
            <p className="text-center text-xs font-semibold text-gray-900 sm:text-left">
              &copy; {new Date().getFullYear()} Amiraé Studio. All Rights Reserved.
            </p>
            <div className="relative flex flex-wrap items-center justify-center gap-3">
              {/* Copy Notification Toast */}
              <AnimatePresence>
                {copied && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{ opacity: 1, y: -8, scale: 1 }}
                    exit={{ opacity: 0, y: 4, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute -top-10 left-1/2 -translate-x-1/2 z-30 whitespace-nowrap rounded-md bg-black px-2.5 py-1 text-[11px] font-bold text-white shadow-lg pointer-events-none"
                  >
                    Email copied!
                  </motion.div>
                )}
              </AnimatePresence>

              {socialLinks.map((social) => {
                const emailMatch = social.href.match(/^mailto:(.+)$/);
                const emailAddress = emailMatch ? emailMatch[1] : "";

                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    onClick={(e) => handleEmailClick(e, social.name, emailAddress)}
                    target={social.name === "Gmail" ? "_self" : "_blank"}
                    rel={social.name === "Gmail" ? "" : "noopener noreferrer"}
                    aria-label={social.name}
                    whileHover={{ y: -3, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-black/15 bg-white/50 text-xs font-bold text-black transition-all hover:bg-black hover:text-white"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d={social.svgPath} />
                    </svg>
                    <span>{social.name}</span>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>
    </footer>
  );
};

export default Footer;