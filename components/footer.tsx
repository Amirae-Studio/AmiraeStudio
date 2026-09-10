"use client";

import React from "react";

// Amiraé Studio Color Palette adapted for Dark Teal / Cyan Background
const COLORS = {
  vibrantTeal: "#0D9488", // Deep Teal line for high contrast against #2AD5C6
  pixelLime: "#84CC16",   // Accent lime
  darkText: "#000000",    // Solid black heading
  subText: "#1F2937",     // Deep dark gray for readability
  borderGlass: "rgba(0, 0, 0, 0.12)", // High contrast border for cyan bg
};
const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/amirae__studio/",
    svgPath: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
  },
  {
    name: "Gmail",
    href: "mailto:hello@amirae.studio",
    svgPath: "M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.713v13.426h24v-13.426l-12 9.713z"
  },
  {
    name: "Discord",
    href: "https://discord.com/channels/1529705981926182953",
    svgPath: "M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.927 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"
  },
];

export default function FooterSection() {
  return (
    <footer 
      className="relative text-gray-900 pt-16 pb-12 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden"
      style={{ backgroundColor: "#2AD5C6" }}
    >
      {/* Subtle White Glow overlay for extra depth */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full opacity-25 blur-[120px] pointer-events-none"
        style={{ background: "#FFFFFF" }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div 
          className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b"
          style={{ borderColor: COLORS.borderGlass }}
        >
          
          {/* Column 1: Brand & Bio */}
          <div className="md:col-span-1 flex flex-col gap-4">
            <a href="#" ><img src="https://joewkzjnrikotpgzyywh.supabase.co/storage/v1/object/public/gallery/brand/amirae_studio_logo-removebg-preview.webp" alt="Amiraé Studio" className="w-20 h-20" /></a>
            {/* <h3 className="text-2xl font-black tracking-tight text-black">
              Amiraé Studio
            </h3> */}
            <p className="text-xs text-gray-800 leading-relaxed font-medium">
              Engineering high-precision physical art, 3D architectural models, and next-gen AI media canvas engines.
            </p>
          
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-3">
            {/* <h4 className="text-xs font-black uppercase tracking-wider text-black">
              Navigation
            </h4>
            <ul className="flex flex-col gap-2 text-xs font-semibold text-gray-800">
              <li>
                <a href="#products" className="hover:text-black hover:underline transition-all">
                  Our Innovations
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-black hover:underline transition-all">
                  About Studio
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-black hover:underline transition-all">
                  Contact Us
                </a>
              </li>
            </ul> */}
          </div>

          {/* Column 3: Featured Products */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-black uppercase tracking-wider text-black">
              Products
            </h4>
            <ul className="flex flex-col gap-2 text-xs font-semibold text-gray-800">
              <li>
                <a href="https://frame-city.vercel.app/" target="_blank" className="hover:text-black hover:underline transition-all flex items-center gap-1">
                  <span>FrameCity</span>
                  <span className="text-[10px] font-mono">✦</span>
                </a>
              </li>
              <li>
                <a href="https://vibeart.in/" target="_blank" className="hover:text-black hover:underline transition-all flex items-center gap-1">
                  <span>VibeArt.in</span>
                  <span className="text-[10px] font-mono">✦</span>
                </a>
              </li>
              <li>
                <p className="hover:text-black transition-all">
                  Food Item Clickers
                </p>
              </li>
              <li>
                <p className="hover:text-black transition-all">
                  Landmark Buildings
                </p>
              </li>
            </ul>
          </div>

          {/* Column 4: Social & Connectivity */}
         <div className="flex flex-col gap-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-black">
              Connect
            </h4>
            <p className="text-xs text-gray-800 font-medium">
              Follow our community & latest releases.
            </p>
            <div className="flex items-center flex-wrap gap-2 mt-1">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-bold text-black transition-all hover:bg-black hover:text-white group"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.4)",
                    borderColor: COLORS.borderGlass,
                  }}
                >
                  <svg 
                    className="w-3.5 h-3.5 fill-current transition-transform group-hover:scale-110" 
                    viewBox="0 0 24 24"
                  >
                    <path d={item.svgPath} />
                  </svg>
                  <span>{item.name}</span>
                </a>
              ))}
            </div>
          </div>

        </div>

      
      </div>

     
    </footer>
  );
}