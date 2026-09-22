import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.amirae.studio"),
  title: "AMIRAE STUDIO LLC — 3D Design, Prototyping & Physical Modeling",
  description:
    "AMIRAE STUDIO LLC is a 3D design and digital product studio specializing in high-precision 3D modeling, rapid product prototyping, physical 3D miniatures, and interactive 3D web engineering.",
};

// Applies a saved theme before first paint so the page never flashes the wrong one.
const themeInitScript = `try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${nunito.variable} h-full`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
