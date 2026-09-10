"use client";

import React, { useState } from "react";

// Amiraé Studio Color Palette
const COLORS = {
  vibrantTeal: "#0D9488",
  pixelLime: "#84CC16",
  lightBg: "#FFFFFF",
  borderGlass: "rgba(0, 0, 0, 0.08)",
  cyanBorder: "#2AD5C6",
};

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic inga add pannikalam
    console.log("Form Submitted:", formData);
  };

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-white text-gray-900 overflow-hidden font-sans">
      {/* Soft Background Glow */}
      <div
        className="absolute bottom-10 right-10 w-[500px] h-[350px] rounded-full opacity-15 blur-[120px] pointer-events-none"
        style={{ background: COLORS.cyanBorder }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-gray-900">
            Get in Touch
          </h2>
          <p
            className="text-sm sm:text-base italic font-serif mt-2"
            style={{ color: COLORS.vibrantTeal }}
          >
            Let's collaborate and bring your innovative ideas to life.
          </p>
        </div>

        {/* Left Form / Right Image Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT SIDE: Contact Form Card */}
          <div
            className="rounded-3xl p-8 sm:p-10 backdrop-blur-xl border transition-all duration-300 shadow-xl"
            style={{
              background: "rgba(255, 255, 255, 0.95)",
              borderColor: COLORS.borderGlass,
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
            }}
          >
            <h3 className="text-2xl font-extrabold text-gray-900 mb-6">
              Send us a Message
            </h3>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 transition-all text-sm"
                  
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 transition-all text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 transition-all text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl font-bold text-sm tracking-wide text-black uppercase transition-all duration-300 hover:opacity-90 hover:shadow-lg mt-2"
                style={{
                  backgroundColor: COLORS.cyanBorder,
                }}
              >
                Submit Request ✦
              </button>
            </form>
          </div>

          {/* RIGHT SIDE: Styled Image Container */}
          <div className="relative group flex justify-center items-center">
            <div
              className="relative w-full h-[450px] sm:h-[520px] rounded-3xl overflow-hidden border shadow-xl transition-all duration-500 group-hover:scale-[1.01]"
              style={{ borderColor: COLORS.borderGlass }}
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
                alt="Contact & Collaboration"
                className="w-full h-full object-cover"
              />
              {/* Soft Gradient Overlay on Image */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Optional Text Overlay on Image */}
              <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                <span
                  className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase inline-block mb-2"
                  style={{ background: COLORS.cyanBorder, color: "#000" }}
                >
                  Direct Connect
                </span>
                <p className="text-sm font-medium text-gray-200">
                  Ready to launch something extraordinary? Reach out today.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}