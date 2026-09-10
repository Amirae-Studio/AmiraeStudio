"use client";

// Amiraé Studio Color Palette adapted for Light Theme
const COLORS = {
  vibrantTeal: "#0D9488", // Deep Teal for high contrast on light bg
  pixelLime: "#84CC16",   // Lime accent
  lightBg: "#FFFFFF",     // White background
  borderGlass: "rgba(0, 0, 0, 0.08)", // Soft border for light theme
  cyanBorder: "#2AD5C6",  // Bottom border line color
};

interface ProductItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  badge: string;
  badgeColor: string;
  badgeTextColor?: string;
  isUpcoming?: boolean;
  features: string[];
  metrics?: string;
}

const products: ProductItem[] = [
  {
    id: "framecity",
    title: "FrameCity",
    tagline: "High Detailed Cities in Frames",
    description:
      "Hand-modelled city districts, engineered for a perfect print. Pick your place, print your frame. Our breakout crowdfunded masterpiece.",
    badge: "$16,633 Raised on Kickstarter",
    badgeColor: "#2AD5C6",
    badgeTextColor: "#000",
    metrics: "167 Backers • 1600%+ Funded",
    features: [
      "Precision 3D City Wireframes",
      "Hand-modelled architectural scale",
      "Ready-to-print & framed physical art",
    ],
  },
  {
    id: "vibeart",
    title: "VibeArt.in",
    tagline: "AI-Powered Visual Canvas Engine",
    description:
      "Advanced AI media suite enabling multi-model image and video generation using node-based canvas logic for precise creative control.",
    badge: "Live Platform",
    badgeColor: "#2AD5C6",
    badgeTextColor: "#000",
    features: [
      "Multi-Model AI Workflows (Flux & SD)",
      "Interactive Node Canvas Engine",
      "High-Precision Image & Video Synthesis",
    ],
  },
  {
    id: "food-clickers",
    title: "Food Item Clickers",
    tagline: "Sensory Culinary 3D Accessories",
    description:
      "Interactive, tactile food-themed clicker designs and sensory 3D accessories engineered for niche product enthusiasts and custom desktop gear.",
    badge: "Upcoming Project",
    badgeColor: "#2AD5C6",
    badgeTextColor: "#FFF",
    isUpcoming: true,
    features: [
      "Tactile Clicker Mechanism",
      "Hyper-detailed Food Textures",
      "Custom Collectible Desk Art",
    ],
  },
  {
    id: "city-buildings",
    title: "Individual City Buildings",
    tagline: "Micro-Detailed Landmark Models",
    description:
      "Standalone architectural prints of iconic skyscrapers and custom structures designed for collectors, architects, and tabletop displays.",
    badge: "Upcoming Project",
    badgeColor: "#2AD5C6",
    badgeTextColor: "#FFF",
    isUpcoming: true,
    features: [
      "Micro-Detailed Architectural Geometry",
      "Isolated Landmark Extraction",
      "Custom Scaled Display Displays",
    ],
  },
];

export default function ProductSection() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-white text-gray-900 overflow-hidden font-sans">
      {/* Soft background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full opacity-15 blur-[140px] pointer-events-none"
        style={{ background: "#2AD5C6" }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-gray-900">
            Our Products & Innovations
          </h2>
        </div>

        {/* Vertical Stack / Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative flex flex-col justify-between rounded-3xl p-8 backdrop-blur-xl border transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 overflow-hidden"
              style={{
                background: "rgba(255, 255, 255, 0.9)",
                borderColor: COLORS.borderGlass,
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
              }}
            >
              <div>
                {/* Top Pill Status Badge */}
                <div className="flex items-center justify-between flex-wrap gap-2 mb-6">
                  <span
                    className="px-3.5 py-1 rounded-full text-xs font-bold tracking-wide uppercase shadow-sm"
                    style={{
                      background: product.badgeColor,
                      color: product.badgeTextColor || "#000",
                    }}
                  >
                    {product.badge}
                  </span>
                  {product.metrics && (
                    <span className="text-xs text-gray-500 font-mono">
                      {product.metrics}
                    </span>
                  )}
                  {product.isUpcoming && (
                    <span
                      className="text-xs font-mono font-semibold"
                      style={{ color: COLORS.vibrantTeal }}
                    >
                      [ NEXT UP ]
                    </span>
                  )}
                </div>

                {/* Title & Tagline */}
                <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-1">
                  {product.title}
                </h3>
                <p
                  className="text-sm sm:text-base italic font-serif mb-4"
                  style={{ color: COLORS.vibrantTeal }}
                >
                  {product.tagline}
                </p>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {product.description}
                </p>
              </div>

              {/* Feature Highlights List */}
              <div className="pt-6 border-t border-gray-100 flex flex-col gap-2 mb-4">
                {product.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-xs sm:text-sm text-gray-700 p-2.5 rounded-xl border border-gray-100"
                    style={{ background: "rgba(0, 0, 0, 0.02)" }}
                  >
                    <span style={{ color: COLORS.vibrantTeal }}>✦</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

             
            </div>
          ))}
        </div>
      </div>
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-32 sm:w-48 rounded-full"
        style={{ backgroundColor: COLORS.cyanBorder }}
      />
    </section>
  );
}