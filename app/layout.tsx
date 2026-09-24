import type { Metadata } from "next";
import { Instrument_Serif, Inter_Tight } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Cursor } from "@/components/site/Cursor";
import { STUDIO } from "@/lib/content";

const sans = Inter_Tight({
  variable: "--font-sans",
  subsets: ["latin"],
});

const serif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.amirae.studio"),
  title: {
    default: "Amirae Studio — 3D Design, Prototyping & Physical Modeling",
    template: "%s — Amirae Studio",
  },
  description:
    "AMIRAE STUDIO LLC is a 3D design and digital fabrication studio: high-precision 3D modeling, rapid product prototyping, physical miniatures and interactive 3D web.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: STUDIO.name,
  legalName: STUDIO.legalName,
  url: "https://www.amirae.studio",
  logo: STUDIO.logo,
  email: STUDIO.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "30 N Gould St Ste R",
    addressLocality: "Sheridan",
    addressRegion: "WY",
    postalCode: "82801",
    addressCountry: "US",
  },
  sameAs: STUDIO.socials.map((s) => s.href),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable} antialiased`}>
      <body className="min-h-screen bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
        <Cursor />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
