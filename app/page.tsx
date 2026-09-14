import ContactSection from "@/components/contact";
import FaqSection from "@/components/Faq";
import FooterSection from "@/components/footer";
import { Navbar } from "@/components/Navbar";
import HeroSection from "@/components/pages/Hero";

import ProductSection from "@/components/product";
import TeamSection from "@/components/team";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AMIRAE STUDIO LLC — 3D Design, Prototyping & Physical Modeling",
  description: "AMIRAE STUDIO LLC is a premier 3D design and digital product studio specializing in high-precision 3D modeling, rapid product prototyping, physical 3D miniatures, and interactive digital engineering.",
  metadataBase: new URL("https://www.amirae.studio"),
  openGraph: {
    title: "AMIRAE STUDIO LLC — 3D Design, Prototyping & Physical Modeling",
    description: "AMIRAE STUDIO LLC is a premier 3D design and digital product studio specializing in high-precision 3D modeling, rapid product prototyping, physical 3D miniatures, and interactive digital engineering.",
    url: "https://www.amirae.studio",
    siteName: "AMIRAE STUDIO LLC",
    images: [
      {
        url: "https://joewkzjnrikotpgzyywh.supabase.co/storage/v1/object/public/gallery/brand/amirae_studio_logo-removebg-preview.webp",
        width: 1200,
        height: 630,
        alt: "AMIRAE STUDIO LLC Preview Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AMIRAE STUDIO LLC — 3D Design, Prototyping & Physical Modeling",
    description: "AMIRAE STUDIO LLC is a premier 3D design and digital product studio specializing in high-precision 3D modeling, rapid product prototyping, physical 3D miniatures, and interactive digital engineering.",
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
      <FaqSection />
      {/* <ImageSlideshow/> */}
      <ContactSection/>
      <FooterSection />
    </div>
  )
}
