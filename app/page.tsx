import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { Marquee } from "@/components/home/Marquee";
import { ServicesList } from "@/components/home/ServicesList";
import { WorkGrid } from "@/components/home/WorkGrid";
import { Stats } from "@/components/home/Stats";
import { Faq } from "@/components/site/Faq";

const TITLE = "Amirae Studio — 3D Design, Prototyping & Physical Modeling";
const DESCRIPTION =
  "AMIRAE STUDIO LLC is a premier 3D design and digital product studio specializing in high-precision 3D modeling, rapid product prototyping, physical 3D miniatures, and interactive digital engineering.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://www.amirae.studio",
    siteName: "AMIRAE STUDIO LLC",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
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
