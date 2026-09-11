import React from "react";

export const GradientComponent = ({
  colors = {
    primary: "#4E93FF",
    secondary: "#639CF2",
    accent1: "#D5FDB9",
    accent2: "#E4F9FF",
    accent3: "#FF7EEA",
    highlight1: "#F3001D",
    highlight2: "#F38300",
  },
  sizeVW = 141.5,
  isAnimated = true,
}) => {
  const scaleX = 2500 / 2596;
  const scaleY = 2500 / 2600;

  // We define the animation styles inside the component for easy portability.
  // The keyframes create a subtle "breathing" and "rotating" effect.
  const animationStyles = `
    @keyframes radiate-main {
      0% {
        transform: scale(1) rotate(0deg);
      }
      50% {
        transform: scale(1.15) rotate(-5deg);
      }
      100% {
        transform: scale(1) rotate(0deg);
      }
    }
    @keyframes radiate-subtle {
      0% {
        transform: scale(1) rotate(0deg);
      }
      50% {
        transform: scale(1.05) rotate(7deg);
      }
      100% {
        transform: scale(1) rotate(0deg);
      }
    }
  `;

  // Helper to construct the animation string, or return 'none' if disabled.
  const getAnimation = (name: string, duration: string, delay = "0s") => {
    if (!isAnimated) return "none";
    // animation: name duration timing-function delay iteration-count direction
    return `${name} ${duration} ease-in-out ${delay} infinite normal`;
  };

  return (
    <>
      <style>{animationStyles}</style>
      <div
        className="relative aspect-square rounded-full"
        style={{
          width: `${sizeVW}vmax`,
          height: `${sizeVW}vmax`,
        }}
      >
        {/* Grain overlay on top */}
      <div
  className="pointer-events-none absolute inset-0 z-10 overflow-hidden rounded-full opacity-[0.15]" // Adjust opacity to control grain intensity
  style={{
    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
    backgroundSize: "200px 200px",
    backgroundRepeat: "repeat",
    mixBlendMode: "overlay",
  }}
/>
        {/* First blue gradient - largest blur */}
        <div
          className="absolute rounded-full"
          style={{
            left: "17.45%",
            right: "17.45%",
            top: "9.81%",
            bottom: "25.19%",
            filter: `blur(${140 * Math.min(scaleX, scaleY)}px)`,
            animation: getAnimation("radiate-main", "22s"), // Slower, large movement
          }}
        >
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: colors.primary,
              opacity: 0.65,
              transform: "rotate(90deg)",
            }}
          />
        </div>
        {/* Second blue gradient - medium blur */}
        <div
          className="absolute rounded-full"
          style={{
            left: "18.2%",
            right: "18.1%",
            top: "10.56%",
            bottom: "25.76%",
            filter: `blur(${60 * Math.min(scaleX, scaleY)}px)`,
            animation: getAnimation("radiate-subtle", "20s", "-5s"), // Start part-way through animation
          }}
        >
          <div
            className="absolute rounded-full"
            style={{
              left: 0,
              right: "0.17%",
              top: 0,
              bottom: "0.08%",
              background: colors.secondary,
              opacity: 0.65,
              transform: "rotate(90deg)",
            }}
          />
        </div>
        {/* Multi-color gradient group - small blur */}
        <div
          className="absolute rounded-full"
          style={{
            left: "20.85%",
            right: "20.76%",
            top: "14.47%",
            bottom: "29.67%",
            filter: `blur(${58 * Math.min(scaleX, scaleY)}px)`,
            animation: getAnimation("radiate-main", "18s"),
          }}
        >
          {/* Green accent */}
          <div
            className="absolute rounded-full"
            style={{
              left: "1.5%",
              right: "1.36%",
              top: "0.26%",
              bottom: "0.3%",
              background: colors.accent1,
              transform: "rotate(90deg)",
            }}
          />

          {/* Light blue background */}
          <div
            className="absolute rounded-full"
            style={{
              left: 0,
              right: "2.36%",
              top: 0,
              bottom: "2.44%",
              background: colors.accent2,
              transform: "rotate(90deg)",
            }}
          />

          {/* Pink accent */}
          <div
            className="absolute rounded-full"
            style={{
              left: "1.5%",
              right: "1.36%",
              top: "0.26%",
              bottom: "0.3%",
              background: colors.accent3,
              opacity: 0.65,
              transform: "rotate(90deg)",
            }}
          />
        </div>
        {/* Red gradient - large blur */}
        <div
          className="absolute rounded-full"
          style={{
            left: "28.51%",
            right: "28.43%",
            top: "21.77%",
            bottom: "36.51%",
            filter: `blur(${115 * Math.min(scaleX, scaleY)}px)`,
            animation: getAnimation("radiate-subtle", "25s", "-10s"), // Very slow, offset start
          }}
        >
          <div
            className="absolute rounded-full"
            style={{
              left: 0,
              right: "-1.19%",
              top: 0,
              bottom: "1.28%",
              background: colors.highlight1,
              transform: "rotate(90deg)",
            }}
          />
        </div>
        {/* Orange gradient - large blur */}
        <div
          className="absolute rounded-full"
          style={{
            left: "31.46%",
            right: "30%",
            top: "19.18%",
            bottom: "35.5%",
            filter: `blur(${115 * Math.min(scaleX, scaleY)}px)`,
            animation: getAnimation("radiate-main", "17s", "-3s"),
            rotate: "90deg", // Note: The original had this rotate here.
          }}
        >
          <div
            className="absolute rounded-full"
            style={{
              left: 0,
              right: "-8.3%",
              top: 0,
              bottom: "-8.31%",
              background: colors.highlight2,
              transform: "rotate(90deg)",
            }}
          />
        </div>
      </div>
    </>
  );
};
