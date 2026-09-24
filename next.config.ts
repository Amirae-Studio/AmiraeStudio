import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), browsing-topics=()" },
];

const nextConfig: NextConfig = {
  images: {
    // Project images live in the Supabase "gallery" bucket; next/image resizes and converts them.
    remotePatterns: [new URL("https://joewkzjnrikotpgzyywh.supabase.co/storage/v1/object/public/gallery/**")],
    formats: ["image/avif", "image/webp"],
    // Supabase serves `no-cache`, so hold optimized copies for 31 days.
    minimumCacheTTL: 2678400,
    // Local networks using NAT64 resolve Supabase to 64:ff9b:: addresses, which the optimizer
    // rejects as private IPs — so in dev, load images straight from the source instead.
    unoptimized: process.env.NODE_ENV === "development",
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
