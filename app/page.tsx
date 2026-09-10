import ContactSection from "@/components/contact";
import FooterSection from "@/components/footer";
import { Navbar } from "@/components/Navbar";
import HeroSection from "@/components/pages/Hero";

import ProductSection from "@/components/product";
import TeamSection from "@/components/team";



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
