import ContactSection from "@/components/contact";
import FooterSection from "@/components/footer";
import { Navbar } from "@/components/Navbar";
import HeroSection from "@/components/pages/Hero";

import ProductSection from "@/components/product";
import TeamSection from "@/components/team";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Amiraé Studio — 3D Modeling & Modern Engineering",
  description: "Industry veterans bridging high-end 3D visual assets with rock-solid full-stack web engineering and interactive digital ecosystems.",
  metadataBase: new URL("https://www.amirae.studio"),
  openGraph: {
    title: "Amiraé Studio — 3D Modeling & Modern Engineering",
    description: "Industry veterans bridging high-end 3D visual assets with rock-solid full-stack web engineering and interactive digital ecosystems.",
    url: "https://www.amirae.studio",
    siteName: "Amiraé Studio",
    images: [
      {
        url: "https://joewkzjnrikotpgzyywh.supabase.co/storage/v1/object/public/gallery/brand/amirae_studio_logo-removebg-preview.webp", // Replace with your actual R2 image URL
        width: 1200,
        height: 630,
        alt: "Amiraé Studio Preview Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amiraé Studio — 3D Modeling & Modern Engineering",
    description: "Industry veterans bridging high-end 3D visual assets with rock-solid full-stack web engineering.",
    images: ["https://joewkzjnrikotpgzyywh.supabase.co/storage/v1/object/public/gallery/brand/amirae_studio_logo-removebg-preview.webp"],
  },
};


export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ProductSection/>
      <TeamSection/>
      <ContactSection/>
      <FooterSection />
    </div>
  )
}
