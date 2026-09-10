import ContactSection from "@/components/contact";
import FooterSection from "@/components/footer";
import Hero from "@/components/hero";
import ProductSection from "@/components/product";
import TeamSection from "@/components/team";



export default function Home() {
  return (
    <div>
      <Hero />
      <ProductSection/>
      <TeamSection/>
      <ContactSection/>
      <FooterSection />
    </div>
  )
}
