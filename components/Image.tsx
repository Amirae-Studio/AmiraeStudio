"use client";

import { useMemo, useState, useEffect } from "react";
import DriftWall, { DriftWallItem } from "./DriftWall";

const showcaseSlides = [
  { src: "/london-preview.jpg", label: "London", sub: "City of London" },
  { src: "/f1.jpg", label: "New York City", sub: "Manhattan Skyline" },
  { src: "/f2.jpg", label: "Paris", sub: "Eiffel Tower District" },
  { src: "/paris-frame.jpg", label: "London", sub: "City of London" },
  { src: "/makerworld.jpg", label: "London", sub: "City of London" },
  { src: "/f3.jpg", label: "Paris", sub: "Up Close Detail" },
  { src: "/london-table.jpg", label: "London", sub: "City of London" },
  { src: "/f4.jpg", label: "London", sub: "City of London" },
  { src: "/f5.jpg", label: "London", sub: "City of London" },
  { src: "/london-preview.jpg", label: "London", sub: "Historic Hub" },
  { src: "/f1.jpg", label: "New York City", sub: "Downtown" },
  { src: "/f2.jpg", label: "Paris", sub: "Seine View" },
  { src: "/paris-frame.jpg", label: "London", sub: "Westminster" },
  { src: "/f3.jpg", label: "Paris", sub: "Architecture Detail" },
  { src: "/london-table.jpg", label: "London", sub: "Overview" },
  { src: "/f5.jpg", label: "London", sub: "Night View" },
];

export function ImageSlideshow() {
  const [columns, setColumns] = useState(4);

  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth < 640) {
        setColumns(1);
      } else if (window.innerWidth < 1024) {
        setColumns(2);
      } else {
        setColumns(4);
      }
    };

    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  const driftItems = useMemo<DriftWallItem[]>(() => {
    return showcaseSlides.map((slide) => ({
      image: slide.src,
      title: `${slide.label} - ${slide.sub}`,
    }));
  }, []);

  return (
    <section
      id="gallery"
      className="relative bg-white text-gray-900 py-28 px-4 sm:px-6 lg:px-8 overflow-hidden font-[family-name:var(--font-your-hero-font)] perspective-1000"
    >
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

      {/* Floating 3D Geometric Badges Background */}
      <div className="absolute top-20 right-16 w-16 h-16 bg-gradient-to-br from-[#2AD5C6] to-emerald-400 rounded-2xl shadow-lg -rotate-12 animate-float pointer-events-none opacity-80 hidden md:flex items-center justify-center text-white font-pixel text-xl">
        3D
      </div>

      <div className="max-w-6xl mx-auto relative z-10 text-center">
        <p className="font-hand text-2xl text-gray-800 mb-1">every city, captured</p>
        <svg width="120" height="14" viewBox="0 0 120 14" className="mx-auto mb-6" fill="none">
          <path d="M2 8C30 3 60 3 90 6C100 7 110 9 118 5" stroke="#111" strokeWidth="2" strokeLinecap="round" />
          <path d="M2 12C30 8 60 8 90 10C100 11 110 12 118 9" stroke="#111" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
        </svg>

        {/* Heading with Figma-style selection box */}
        <div className="relative inline-block mb-12" style={{ transform: "rotate(1.5deg)" }}>
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
            THE GALLERY
          </h2>
        </div>

        {/* DriftWall Gallery Container */}
        <div className="relative overflow-hidden rounded-md border-2 border-gray-800 bg-[#F6DFA4]/20 shadow-2xl p-3 sm:p-6">
          <div className="relative h-[480px] sm:h-[550px] md:h-[680px] w-full">
            <DriftWall
              items={driftItems}
              columns={columns}
              tileWidth={columns === 1 ? 280 : 240}
              tileHeight={columns === 1 ? 180 : 150}
              gap={columns === 1 ? 12 : 18}
              speed={32}
              pauseOnHover={true}
              tilt={columns === 1 ? 0 : 8}
              turn={columns === 1 ? 0 : -6}
              parallax={0.5}
              dim={0.95}
              fade={0.2}
            />
          </div>
        </div>
      </div>
    </section>
  );
}