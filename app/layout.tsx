import type { Metadata } from "next";
import { Instrument_Serif, Inter_Tight } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Cursor } from "@/components/site/Cursor";

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

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable} antialiased`}>
      <body className="min-h-screen bg-background text-foreground">
        <Cursor />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
