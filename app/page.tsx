import type { Metadata } from "next";
import { STUDIO } from "@/lib/content";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Engagement, Faq, FinalCta, Letter, Services, Work } from "@/components/site/Sections";
import { Quote } from "@/components/site/Quote";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

const title = "AMIRAE STUDIO LLC — 3D Design, Prototyping & Physical Modeling";
const description =
  "AMIRAE STUDIO LLC is a premier 3D design and digital product studio specializing in high-precision 3D modeling, rapid product prototyping, physical 3D miniatures, and interactive digital engineering.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: "https://www.amirae.studio",
    siteName: STUDIO.name,
    images: [{ url: STUDIO.logo, width: 1200, height: 630, alt: "AMIRAE STUDIO LLC Preview Banner" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [STUDIO.logo],
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Letter />
        <Work />
        <Services />
        <Engagement />
        <Quote />
        <Faq />
        <Contact />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
