"use client";

import React, { useState, useRef } from "react";

export default function ContactSection() {
  const [step, setStep] = useState(1);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    message: "",
    name: "",
    email: "",
  });

  // 3D Tilt Effect State & Ref
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    // Calculate tilt angles (max 10 degrees)
    setRotation({
      x: (-y / (rect.height / 2)) * 8,
      y: (x / (rect.width / 2)) * 8,
    });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  const handleNext = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.message.trim()) setStep(2);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "e52fdb81-d925-4fa7-97a3-f37c9bf6032a",
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSent(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative bg-white text-gray-900 py-28 px-4 sm:px-6 lg:px-8 overflow-hidden font-[family-name:var(--font-your-hero-font)] perspective-1000">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@500;700&family=Silkscreen:wght@400;700&display=swap');
        .font-hand { font-family: 'Caveat', cursive; }
        .font-pixel { font-family: 'Silkscreen', monospace; }
        
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(3deg); }
        }
        .animate-float {
          animation: floatSlow 6s ease-in-out infinite;
        }
        @keyframes floatSlowReverse {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(12px) rotate(-3deg); }
        }
        .animate-float-rev {
          animation: floatSlowReverse 7s ease-in-out infinite;
        }
      `}</style>

      {/* Graph-paper background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.5]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Floating 3D Geometric Badges/Shapes Background */}
      <div className="absolute top-16 left-10 w-16 h-16 bg-gradient-to-br from-[#2AD5C6] to-emerald-400 rounded-2xl shadow-lg rotate-12 animate-float pointer-events-none opacity-80 hidden md:flex items-center justify-center text-white font-pixel text-xl">
        3D
      </div>
      <div className="absolute bottom-20 right-12 w-20 h-20 bg-gradient-to-tr from-amber-300 to-[#F6DFA4] rounded-full shadow-lg animate-float-rev pointer-events-none opacity-80 hidden md:block" />

      {/* "YOU" tag, peeking off the edge */}
      <div
        className="hidden sm:flex absolute top-10 left-0 -translate-x-1/2 items-center justify-center bg-black text-white text-xs font-bold px-4 py-1.5 rounded-full z-20 shadow-xl"
        style={{ transform: "translateX(-40%) rotate(-8deg)" }}
      >
        YOU
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Left polaroid with 3D float */}
        <div
          className="hidden lg:block absolute left-[-50px] top-12 w-52 bg-white p-3 pb-6 rounded-md shadow-2xl animate-float transition-transform duration-300 hover:rotate-0 hover:scale-105 cursor-pointer"
          style={{ transform: "rotate(-7deg)" }}
        >
          <div className="w-full h-60 overflow-hidden bg-gray-100 rounded-sm">
            <img
              src="/bird.webp"
              alt="Random shot"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="font-hand text-xl text-center mt-3 text-gray-700">random shot</p>
        </div>

        {/* Right polaroid with 3D float */}
        <div
          className="hidden lg:block absolute right-[-50px] top-6 w-52 bg-white p-3 pb-6 rounded-md shadow-2xl animate-float-rev transition-transform duration-300 hover:rotate-0 hover:scale-105 cursor-pointer"
          style={{ transform: "rotate(6deg)" }}
        >
          <div className="w-full h-60 overflow-hidden bg-gray-100 rounded-sm">
            <img
              src="/bird2.avif"
              alt="Tiny moment"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="font-hand text-xl text-center mt-3 text-gray-700">tiny moment!</p>
        </div>

        {/* Center column */}
        <div className="max-w-xl mx-auto text-center">
          <p className="font-hand text-2xl text-gray-800 mb-1">leave me a note</p>
          <svg width="120" height="14" viewBox="0 0 120 14" className="mx-auto mb-6" fill="none">
            <path d="M2 8C30 3 60 3 90 6C100 7 110 9 118 5" stroke="#111" strokeWidth="2" strokeLinecap="round" />
            <path d="M2 12C30 8 60 8 90 10C100 11 110 12 118 9" stroke="#111" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
          </svg>

          {/* Heading with Figma-style selection box */}
          <div className="relative inline-block mb-12" style={{ transform: "rotate(-2deg)" }}>
            <div className="absolute -inset-4 border border-gray-800 shadow-sm" />
            {["-top-1.5 -left-1.5", "-top-1.5 -right-1.5", "-bottom-1.5 -left-1.5", "-bottom-1.5 -right-1.5"].map(
              (pos) => (
                <span
                  key={pos}
                  className={`absolute ${pos} w-3 h-3 bg-white border-2 border-[#2AD5C6] shadow-sm`}
                />
              )
            )}
            <h2 className="font-pixel text-5xl sm:text-6xl tracking-wider px-6 py-3 bg-white/40 backdrop-blur-xs">
              CONTACT
            </h2>
          </div>

          {/* 3D Interactive Sticky-Note Form Card */}
          <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative text-left  p-6 sm:p-10 shadow-2xl transition-transform duration-100 ease-out  border-amber-600/30"
            style={{
              backgroundColor: "#F6DFA4",
              transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale3d(1.02, 1.02, 1.02)`,
              transformStyle: "preserve-3d",
            }}
          >
            {/* Glossy highlight for 3D depth */}
            <div className="absolute inset-0  bg-gradient-to-tr from-white/0 via-white/20 to-white/0 pointer-events-none" />

            {!sent && step === 1 && (
              <form onSubmit={handleNext} style={{ transform: "translateZ(30px)" }}>
                <label className="block font-mono text-xs font-bold uppercase tracking-wider text-gray-800 mb-3 drop-shadow-xs">
                  What's on your mind?
                </label>
                <textarea
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white/60 backdrop-blur-xs focus:bg-white focus:outline-none focus:ring-2 focus:ring-black/20 text-sm sm:text-base text-gray-800 resize-y placeholder:text-gray-500  p-4 shadow-inner transition-all"
                  placeholder="Tell me about your project..."
                />
                <button
                  type="submit"
                  className="mt-5 bg-black text-white text-xs font-mono font-bold uppercase tracking-wider px-6 py-3  hover:bg-gray-800 hover:shadow-lg transition-all active:scale-95 cursor-pointer"
                >
                  Next (1/2) →
                </button>
              </form>
            )}

            {!sent && step === 2 && (
              <form onSubmit={handleSubmit} style={{ transform: "translateZ(30px)" }}>
                <label className="block font-mono text-xs font-bold uppercase tracking-wider text-gray-800 mb-3">
                  Who's asking?
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white/70 focus:bg-white focus:outline-none focus:ring-2 focus:ring-black/20 text-sm sm:text-base text-gray-800 placeholder:text-gray-500  px-4 py-3 mb-3 shadow-inner transition-all"
                />
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white/70 focus:bg-white focus:outline-none focus:ring-2 focus:ring-black/20 text-sm sm:text-base text-gray-800 placeholder:text-gray-500  px-4 py-3 shadow-inner transition-all"
                />
                <div className="flex items-center gap-4 mt-6">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="text-xs font-mono font-bold uppercase tracking-wider text-gray-700 hover:opacity-60 transition-opacity cursor-pointer"
                  >
                    ← Back
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-black text-white text-xs font-mono font-bold uppercase tracking-wider px-6 py-3  hover:bg-gray-800 hover:shadow-lg transition-all disabled:opacity-50 active:scale-95 cursor-pointer"
                  >
                    {loading ? "Sending..." : "Send Message (2/2)"}
                  </button>
                </div>
              </form>
            )}

            {sent && (
              <div className="py-8 text-center" style={{ transform: "translateZ(30px)" }}>
                <p className="font-hand text-4xl text-gray-900">got it, thanks! ✦</p>
                <p className="text-sm font-mono text-gray-700 mt-2">I'll get back to you soon.</p>
              </div>
            )}
          </div>

          {/* Handwritten arrow + availability note */}
          <div className="relative mt-8 flex items-start justify-center gap-2">
            <svg width="40" height="40" viewBox="0 0 40 40" className="mt-1 shrink-0 animate-bounce" fill="none">
              <path
                d="M32 8C24 8 10 14 8 26C7.5 29 9 32 12 32"
                stroke="#111"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
              <path d="M6 27L12 32L17 27" stroke="#111" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p className="font-hand text-2xl text-gray-800 -rotate-2">I'm available for new projects!</p>
          </div>

          {/* 3D Floating Social Pill */}
          <div className="inline-flex items-center gap-8 mt-8 bg-white/80 backdrop-blur-md border border-gray-200  px-8 py-5 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
            {/* Instagram */}
            <a href="https://www.instagram.com/amirae__studio/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 text-gray-900 hover:text-[#2AD5C6] transition-colors">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider">Instagram</span>
            </a>

            {/* Discord */}
            <a href="https://discord.com/channels/1529705981926182953" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 text-gray-900 hover:text-indigo-600 transition-colors">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 5.378a19.97 19.97 0 0 0-4.832-1.5 18.57 18.57 0 0 0-1.127 2.348 18.42 18.42 0 0 0-5.8 0 18.3 18.3 0 0 0-1.133-2.348A19.9 19.9 0 0 0 3 5.38C.48 9.24-.22 13.01.21 16.74a20.15 20.15 0 0 0 6.04 3.05 14.86 14.86 0 0 0 1.28-2.11 13.1 13.1 0 0 1-2.03-.98c.17-.12.33-.25.49-.37a14.28 14.28 0 0 0 12.02 0c.16.12.32.25.49.37a13.1 13.1 0 0 1-2.03.98 14.9 14.9 0 0 0 1.28 2.11 20.1 20.1 0 0 0 6.04-3.05c.5-4.32-.82-8.13-3.05-11.36zM8.5 14.33c-1.1 0-2-1.02-2-2.28 0-1.27.88-2.28 2-2.28 1.13 0 2.01 1.03 2 2.28 0 1.26-.88 2.28-2 2.28zm7 0c-1.1 0-2-1.02-2-2.28 0-1.27.88-2.28 2-2.28 1.13 0 2.01 1.03 2 2.28 0 1.26-.87 2.28-2 2.28z"/>
              </svg>
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider">Discord</span>
            </a>

            {/* Email */}
            <a href="mailto:hello@amirae.studio" className="flex flex-col items-center gap-2 text-gray-900 hover:text-amber-600 transition-colors">
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
  <span className="text-[11px] font-mono font-bold uppercase tracking-wider">Mail</span>
</a>
          </div>
        </div>
      </div>
    </section>
  );
}