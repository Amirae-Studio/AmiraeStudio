import React from "react";

// Updated color palette to match image_1.png (Amirae Studio Logo)
const COLORS = {
  vibrantTeal: "#2AD5C6", // Main color for logo and highlights
  pixelLime: "#BEFF26",   // Sparkle color from the logo
  deepBase: "#121A16",    // Updated dark green-black for depth
  lightBase: "#FEFFE1",   // Creamy background from your logo
  whiteText: "#FFFDF6",   // Warm white for main text
};

// High-tech 3D model visual background (kept from original, now themed)
const BG_IMAGE =
  "https://i.pinimg.com/originals/fc/17/73/fc1773cfa33ee2d00f58ffbedc06fda8.jpg";

export default function Home() {
  return (
    <div className="relative min-h-screen font-sans selection:bg-cyan-300 selection:text-black overflow-x-hidden">
      
      {/* 
        -------------------- NAVBAR (Nexora Style) --------------------
        We keep the Nexora floating pill design, but update the branding.
      */}
      <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
        <nav
          className="w-full max-w-4xl flex items-center justify-between px-6 py-2.5 rounded-full backdrop-blur-lg transition-all duration-300"
          style={{
            background: "rgba(20, 30, 25, 0.4)", // Deeper base with glass effect
            borderColor: "rgba(255, 255, 255, 0.15)",
            borderWidth: "1px",
            boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.2)",
          }}
        >
          {/* Brand Logo - Nexora layout, but uses Amirae Studio styling */}
          <div className="flex items-center gap-2 text-white font-bold text-lg tracking-tight">
            {/* Nexora icon replaced with stylized sparkle */}
            {/* <span className="text-xl" style={{ color: COLORS.pixelLime }}>✦</span>
            <span>Amirae Studio®</span> */}
            <img src="/amirae.webp"alt="logo" className="h-[50px] w-[50px]"/>
          </div>

          {/* Nav Links - Kept from original */}
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-white/90">
            <li><a href="#models" className="hover:text-white transition">Explore Library</a></li>
            <li><a href="#custom" className="hover:text-white transition">Custom Projects</a></li>
            <li><a href="#about" className="hover:text-white transition">Our Craft</a></li>
            <li><a href="#contact" className="hover:text-white transition">Get Quote</a></li>
          </ul>

          {/* Get Started Button - Updated to Teal */}
          <a
            href="#get-started"
            className="px-5 py-2 rounded-full text-xs md:text-sm font-semibold transition-transform duration-200 hover:scale-105 active:scale-95 shadow-md"
            style={{
              background: COLORS.vibrantTeal, // Changed to Teal
              color: "#000", // High contrast
            }}
          >
            Get Started
          </a>
        </nav>
      </header>

      {/* 
        -------------------- HERO SECTION --------------------
        Keeps the Nexora structure and text, now themed.
      */}
      <section className="relative z-10 pt-36 pb-20 min-h-screen flex flex-col justify-center items-center text-center px-4">
        
        {/* Themed Background Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={BG_IMAGE}
            alt="Amirae Studio Digital Craft"
            className="w-full h-full object-cover scale-105"
          />
          {/* Deep overlay themed with Teal/Green */}
          <div 
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(18, 26, 22, 0.6) 0%, rgba(20, 30, 25, 0.8) 60%, #121A16 100%)",
            }}
          />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          
         

          {/* Main Headline - White text with Teal Highlight */}
          <h1
            className="font-sans mx-auto tracking-tight"
            style={{
              fontSize: "clamp(40px, 6vw, 76px)",
              lineHeight: 1.08,
              color: COLORS.whiteText,
              textShadow: "0 2px 20px rgba(0,0,0,0.3)",
            }}
          >
            From the Streets You Walked, <br />
            <span 
              className="italic font-serif font-normal"
              style={{ color: COLORS.vibrantTeal }} // Changed to Teal
            >
              To the Frame on Your Wall.
            </span>
          </h1>

          {/* Subtitle / Descriptive Text - Updated to White */}
          <p 
            className="mt-6 max-w-2xl text-base md:text-xl font-normal leading-relaxed opacity-90"
            style={{ color: COLORS.whiteText }}
          >
            No boundaries, just pure digital craftsmanship. From intricate city blocks to custom designs, Amirae Studio rebuilds your vision from scratch. We merge precise layouts with physical artistry, creating timeless, framed masterpieces.
          </p>

          {/* Search-style Input & Button (Nexora Style) */}
          <div
            className="mt-10 w-full max-w-lg p-1.5 rounded-full flex items-center gap-2 backdrop-blur-lg"
            style={{
              background: "rgba(255, 255, 255, 0.85)", // Keep input bright
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
            }}
          >
            {/* Input area */}
            <div className="flex items-center gap-3 pl-4 flex-grow text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 opacity-60"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Find a custom vision..."
                className="w-full bg-transparent border-none outline-none text-gray-800 text-sm placeholder-gray-500"
              />
            </div>

            {/* Teal Action Button */}
            <button
              className="px-6 py-3 rounded-full text-xs md:text-sm font-semibold transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap shadow-sm"
              style={{
                background: COLORS.vibrantTeal, // Changed to Teal
                color: "#000",
              }}
            >
              Build Your Vision
            </button>
          </div>

        </div>
      </section>
    </div>
  );
}