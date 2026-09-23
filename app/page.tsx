import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { Marquee } from "@/components/home/Marquee";
import { ServicesList } from "@/components/home/ServicesList";
import { WorkGrid } from "@/components/home/WorkGrid";
import { Stats } from "@/components/home/Stats";
import { Faq } from "@/components/site/Faq";

const TITLE = "AMIRAE STUDIO LLC — 3D Design, Prototyping & Physical Modeling";
const DESCRIPTION =
  "AMIRAE STUDIO LLC is a premier 3D design and digital product studio specializing in high-precision 3D modeling, rapid product prototyping, physical 3D miniatures, and interactive digital engineering.";
const OG_IMAGE =
  "https://joewkzjnrikotpgzyywh.supabase.co/storage/v1/object/public/gallery/brand/amirae_studio_logo-removebg-preview.webp";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://www.amirae.studio",
    siteName: "AMIRAE STUDIO LLC",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "AMIRAE STUDIO LLC Preview Banner" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <ServicesList />
      <WorkGrid />
      <Stats />
      <Faq />
    </>
  );
}
