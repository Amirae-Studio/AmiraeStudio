import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/footer";
import { 
  Boxes, 
  Cpu, 
  Layers, 
  Landmark, 
  Code2, 
  CheckCircle2, 
  DollarSign, 
  Building2, 
  Globe2, 
  ShieldCheck, 
  ArrowRight,
  Download,
  Printer,
  Sparkles
} from "lucide-react";

export const metadata: Metadata = {
  title: "Commercial Services & Revenue Model — AMIRAE STUDIO LLC",
  description: "Explore the genuine commercial 3D modeling, product prototyping, 3D printing fabrication, architectural scale modeling, and digital asset engineering services by AMIRAE STUDIO LLC.",
  metadataBase: new URL("https://www.amirae.studio"),
  openGraph: {
    title: "Commercial Services & Revenue Model — AMIRAE STUDIO LLC",
    description: "Detailed commercial services, pricing structure, revenue models, and operational capabilities of AMIRAE STUDIO LLC.",
    url: "https://www.amirae.studio/services",
    siteName: "AMIRAE STUDIO LLC",
  },
};

const SERVICES = [
  {
    id: "3d-modeling",
    number: "01",
    title: "3D Modeling & Digital Asset Creation",
    subtitle: "High-Fidelity Virtual Assets & PBR Texturing",
    badge: "Digital Assets",
    icon: Boxes,
    color: "#2AD5C6",
    description: "We sculpt, model, and optimize production-grade 3D assets for commercial products, digital media, gaming, VFX, and real-time interactive experiences.",
    deliverables: [
      "Subdivision-ready CAD, OBJ, FBX, and GLTF models",
      "4K/8K PBR material maps (Normal, Roughness, Metallic, AO)",
      "High-poly sculpts and quad-topology low-poly game assets",
      "Rigging, lighting setups, and studio-grade cinematic render passes"
    ],
    clients: "Consumer electronics brands, digital marketing agencies, game studios, indie developers",
    revenueStream: "Milestone-based project fees or commercial licensing per asset pack",
    timeline: "3 to 10 business days per asset batch"
  },
  {
    id: "product-design",
    number: "02",
    title: "3D Product Design & Rapid Prototyping",
    subtitle: "From Concept Sketch to Precision Manufacturing",
    badge: "Industrial Design",
    icon: Cpu,
    color: "#4db8ff",
    description: "Comprehensive product design services translating industrial concepts into functionally viable, ergonomic, and aesthetically striking 3D CAD files ready for tooling.",
    deliverables: [
      "Parametric SolidWorks / STEP / IGES precision CAD models",
      "Design for Additive Manufacturing (DfAM) tolerance checks",
      "Exploded view technical diagrams and assembly specifications",
      "Photorealistic product visualization & marketing mockups"
    ],
    clients: "Hardware startups, consumer product manufacturers, Kickstarter creators",
    revenueStream: "Custom milestone contracts (50% upfront, 50% upon final CAD signoff)",
    timeline: "2 to 4 weeks depending on mechanical complexity"
  },
  {
    id: "3d-printing",
    number: "03",
    title: "3D Printing & Physical Model Fabrication",
    subtitle: "Precision FDM & Resin Physical Production",
    badge: "Physical Goods",
    icon: Printer,
    color: "#f0c239",
    description: "Physical fabrication and small-batch production of intricate miniatures, framed dimensional art pieces (like FrameCity), tabletop models, and physical product prototypes.",
    deliverables: [
      "High-resolution FDM/SLA resin physical prints (up to 0.05mm layer height)",
      "Multi-part supportless assembly kits engineered for clean prints",
      "Framed physical miniature display pieces with protective encasements",
      "Post-processed, cleaned, cured, and packaged physical shipments"
    ],
    clients: "Collectors, architectural firms, interior designers, direct consumers",
    revenueStream: "Direct physical unit sales, custom print fabrication fees, batch manufacturing",
    timeline: "5 to 14 business days including quality assurance and dispatch"
  },
  {
    id: "architectural",
    number: "04",
    title: "Architectural & Heritage Scale Modeling",
    subtitle: "Precision Historic Landmarks & Urban Miniature Displays",
    badge: "Scale Architecture",
    icon: Landmark,
    color: "#e6005c",
    description: "Digital reconstruction and physical scale modeling of historical monuments, civic landmarks, and custom urban architectural topographies.",
    deliverables: [
      "Accurate scale miniature 3D architectural data sets",
      "Wall-mountable framed skyline reliefs (e.g. London, Paris, Tokyo)",
      "Heritage conservation 3D digital archives and printable meshes",
      "Interactive digital 3D architectural walk-through assets"
    ],
    clients: "Cultural institutions, municipal heritage projects, real estate developers, collectors",
    revenueStream: "Fixed-price project contracts and limited-edition physical collection runs",
    timeline: "2 to 6 weeks for custom architectural projects"
  },
  {
    id: "digital-ecosystems",
    number: "05",
    title: "Interactive 3D Web & Visualization Engineering",
    subtitle: "WebGL, Three.js & Modern Interactive Frameworks",
    badge: "Web & Software",
    icon: Code2,
    color: "#84CC16",
    description: "Custom web software engineering bridging 3D visual assets with modern full-stack web applications, interactive 3D model configurators, and immersive brand websites.",
    deliverables: [
      "Custom WebGL / Three.js / React Three Fiber interactive 3D viewers",
      "Web-based 3D product configurators with live texture / color swaps",
      "High-performance responsive Next.js / React web applications",
      "Automated asset compression pipelines and model viewers"
    ],
    clients: "E-commerce retailers, SaaS platforms, design agencies seeking 3D web interactivity",
    revenueStream: "Fixed-scope software development contracts and monthly technical retainers",
    timeline: "2 to 8 weeks based on software requirements"
  }
];

const REVENUE_STREAMS = [
  {
    icon: DollarSign,
    title: "Custom Project Fees",
    desc: "Direct B2B and B2C bespoke client engagements with structured milestone billing (e.g., 50% deposit upon kickoff, 50% upon delivery of final CAD/3D assets).",
    pct: "Primary Revenue"
  },
  {
    icon: Download,
    title: "Digital Asset Licensing",
    desc: "Commercial and personal licensing of proprietary 3D print files, STL meshes, and digital asset packs sold via direct digital distribution and MakerWorld.",
    pct: "Recurring Digital"
  },
  {
    icon: Printer,
    title: "Physical Product Sales",
    desc: "Direct sales of finished 3D printed art, framed miniature cityscapes (FrameCity), and physical scale models shipped directly to clients worldwide.",
    pct: "Commercial E-Commerce"
  },
  {
    icon: Code2,
    title: "Software & Web Engineering",
    desc: "Contract-based software engineering and monthly retainers for interactive 3D product configurators, WebGL integrations, and high-performance studio websites.",
    pct: "Service Contracts"
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#faf9f5] text-gray-900 font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 sm:px-8 md:px-16 overflow-hidden border-b border-black/10 bg-white">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto relative z-10">

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-gray-900 mb-6 leading-tight">
            Commercial Services &amp;<br />
            <span className="text-teal-600">Business Capabilities</span>
          </h1>

          <p className="max-w-3xl text-lg sm:text-xl text-gray-700 leading-relaxed font-normal mb-8">
            <strong>AMIRAE STUDIO LLC</strong> is a legally registered 3D design house and digital product studio. We specialize in high-precision 3D modeling, rapid product prototyping, physical 3D model fabrication, architectural scale miniatures, and interactive 3D web engineering.
          </p>

          {/* Quick Overview Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-gray-200">
            <div>
              <span className="text-xs font-mono uppercase text-gray-500 block">Legal Entity</span>
              <span className="text-sm font-bold text-gray-900">AMIRAE STUDIO LLC</span>
            </div>
            <div>
              <span className="text-xs font-mono uppercase text-gray-500 block">Core Disciplines</span>
              <span className="text-sm font-bold text-gray-900">3D Design &amp; Fabrication</span>
            </div>
            <div>
              <span className="text-xs font-mono uppercase text-gray-500 block">Client Base</span>
              <span className="text-sm font-bold text-gray-900">U.S. &amp; Worldwide</span>
            </div>
            <div>
              <span className="text-xs font-mono uppercase text-gray-500 block">Fulfillment</span>
              <span className="text-sm font-bold text-gray-900">Digital &amp; Physical</span>
            </div>
          </div>
        </div>
      </section>

      {/* Business Model & Who We Serve Matrix */}
      <section className="py-16 px-6 sm:px-8 md:px-16 bg-[#f4f1ea] border-b border-black/10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
              Clear Business Description &amp; Scope
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-black/10 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center text-teal-700 mb-4 font-mono font-bold text-sm">
                01
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">What We Do</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                We create production-ready 3D digital CAD assets, design physical product prototypes, fabricate high-detail 3D printed architectural miniatures, and develop custom interactive 3D web visualizations.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-black/10 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center text-teal-700 mb-4 font-mono font-bold text-sm">
                02
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Who We Serve</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                We serve consumer hardware brands, architectural studios, gaming and miniature collectors, digital agencies, and independent creators seeking precision 3D craft and technical excellence.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-black/10 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center text-teal-700 mb-4 font-mono font-bold text-sm">
                03
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">What We Deliver</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Clients receive industry-standard CAD/STEP/STL models, photorealistic marketing renders, physical 3D printed and framed miniature displays, and WebGL codebases for online experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Itemized Commercial Services */}
      <section className="py-20 px-6 sm:px-8 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-4">
              Itemized Commercial Services
            </h2>
            <p className="text-gray-600 text-base sm:text-lg">
              Each service is backed by verified commercial production standards, transparent pricing structures, and defined delivery milestones.
            </p>
          </div>

          <div className="space-y-8">
            {SERVICES.map((service) => {
              const Icon = service.icon;
              return (
                <div 
                  key={service.id} 
                  id={service.id}
                  className="bg-white rounded-3xl border border-black/10 p-6 sm:p-10 shadow-md hover:shadow-lg transition-all"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-gray-100">
                    <div className="flex items-start gap-4">
                      <div 
                        className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-sm"
                        style={{ backgroundColor: `${service.color}20`, color: service.color }}
                      >
                        <Icon size={28} />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-3 mb-1">
                          <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-800">
                            SERVICE {service.number}
                          </span>
                          <span 
                            className="font-mono text-xs font-bold px-2.5 py-0.5 rounded-full text-black"
                            style={{ backgroundColor: `${service.color}40` }}
                          >
                            {service.badge}
                          </span>
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                          {service.title}
                        </h3>
                        <p className="text-sm text-gray-500 font-mono mt-0.5">
                          {service.subtitle}
                        </p>
                      </div>
                    </div>

                    <a 
                      href="/#contact"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-black text-white text-xs font-mono font-bold uppercase tracking-wider hover:bg-gray-800 transition-all shrink-0"
                    >
                      Inquire About This Service <ArrowRight size={14} />
                    </a>
                  </div>

                  <p className="text-gray-700 text-base leading-relaxed my-6">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                    {/* Deliverables */}
                    <div className="bg-gray-50 p-5 rounded-2xl border border-gray-200/60">
                      <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-gray-700 mb-3 flex items-center gap-2">
                        <CheckCircle2 size={14} className="text-teal-600" /> Commercial Deliverables
                      </h4>
                      <ul className="space-y-2">
                        {service.deliverables.map((item, idx) => (
                          <li key={idx} className="text-xs sm:text-sm text-gray-600 flex items-start gap-2">
                            <span className="text-teal-600 font-bold">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Operational & Pricing Details */}
                    <div className="bg-gray-50 p-5 rounded-2xl border border-gray-200/60 flex flex-col justify-between">
                      <div className="space-y-3 text-xs sm:text-sm">
                        <div>
                          <span className="font-mono uppercase text-gray-500 block text-[11px]">Target Client Base:</span>
                          <span className="font-medium text-gray-800">{service.clients}</span>
                        </div>
                        <div>
                          <span className="font-mono uppercase text-gray-500 block text-[11px]">Revenue Model:</span>
                          <span className="font-medium text-gray-800">{service.revenueStream}</span>
                        </div>
                        <div>
                          <span className="font-mono uppercase text-gray-500 block text-[11px]">Standard Delivery Timeline:</span>
                          <span className="font-medium text-gray-800">{service.timeline}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Revenue Model Breakdown */}
      <section id="revenue-model" className="py-20 px-6 sm:px-8 md:px-16 bg-[#18181b] text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
              Comprehensive Revenue Model
            </h2>
            <p className="text-gray-400 text-base sm:text-lg">
              AMIRAE STUDIO LLC operates on four clear, verifiable commercial revenue channels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {REVENUE_STREAMS.map((rev, i) => {
              const Icon = rev.icon;
              return (
                <div 
                  key={i}
                  className="bg-zinc-900 border border-zinc-800 p-6 sm:p-8 rounded-2xl relative overflow-hidden"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#2AD5C6]/10 text-[#2AD5C6] flex items-center justify-center">
                      <Icon size={24} />
                    </div>
                    <span className="font-mono text-xs px-3 py-1 rounded-full bg-zinc-800 text-[#2AD5C6] border border-zinc-700">
                      {rev.pct}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{rev.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{rev.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Payment & Invoicing Terms */}
          <div className="mt-12 bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 sm:p-8">
            <h4 className="text-sm font-mono uppercase tracking-widest text-[#2AD5C6] font-bold mb-4">
              Commercial Payment Terms &amp; Settlement
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs sm:text-sm text-gray-300">
              <div>
                <strong className="text-white block mb-1">Invoicing &amp; Contracts</strong>
                Standardized Statements of Work (SOW) and commercial invoices issued per engagement.
              </div>
              <div>
                <strong className="text-white block mb-1">Payment Methods</strong>
                Settlement accepted via ACH Transfer, US Wire, Corporate Cards, and compliant merchant gateways.
              </div>
              <div>
                <strong className="text-white block mb-1">Milestone Security</strong>
                Funds structured on milestone delivery ensures transparency and prompt delivery.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* U.S. Operations & Global Reach */}
      <section id="us-operations" className="py-20 px-6 sm:px-8 md:px-16 bg-[#f4f1ea] border-b border-black/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
            
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-6">
                U.S. Operations &amp; Global Fulfillment
              </h2>
              <div className="space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed">
                <p>
                  <strong>AMIRAE STUDIO LLC</strong> is established to serve clients across the United States and globally. We engage with U.S.-based hardware startups, architectural practices, and consumers through digital asset delivery and physical fabrication fulfillment.
                </p>
                <p>
                  Through platforms such as <strong>MakerWorld</strong> (where our project <em>FrameCity</em> earned over $1,700+ from global and U.S. backers) and our direct studio commissions, we maintain active digital delivery systems and international shipping workflows.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-black/10">
                    <Globe2 className="text-teal-600 shrink-0 mt-0.5" size={20} />
                    <div>
                      <strong className="text-xs uppercase font-mono block text-gray-900">Global Deliveries</strong>
                      <span className="text-xs text-gray-600">Digital downloads delivered immediately; physical units shipped via standard trackable logistics.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-black/10">
                    <ShieldCheck className="text-teal-600 shrink-0 mt-0.5" size={20} />
                    <div>
                      <strong className="text-xs uppercase font-mono block text-gray-900">Compliance &amp; IP</strong>
                      <span className="text-xs text-gray-600">Full commercial licensing rights, non-disclosure agreements (NDAs), and IP assignment.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Corporate & Address Card */}
            <div className="lg:col-span-5 bg-white p-8 rounded-3xl border border-black/15 shadow-xl">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                <Building2 className="text-teal-600" size={28} />
                <div>
                  <h3 className="font-bold text-gray-900 text-base">AMIRAE STUDIO LLC</h3>
                  <span className="text-xs text-gray-500 font-mono">Corporate Identity Details</span>
                </div>
              </div>

              <div className="space-y-4 text-xs font-mono">
                <div>
                  <span className="text-gray-500 uppercase block text-[10px]">Legal Entity Name:</span>
                  <span className="font-bold text-gray-900 text-sm">AMIRAE STUDIO LLC</span>
                </div>
                <div>
                  <span className="text-gray-500 uppercase block text-[10px]">Business Type:</span>
                  <span className="text-gray-800">Limited Liability Company (LLC)</span>
                </div>
                <div>
                  <span className="text-gray-500 uppercase block text-[10px]">Industry Classification:</span>
                  <span className="text-gray-800">3D Design, Modeling &amp; Digital Product Studio</span>
                </div>
                <div>
                  <span className="text-gray-500 uppercase block text-[10px]">Official Support &amp; Inquiries Email:</span>
                  <a href="mailto:arun@amirae.studio" className="text-teal-700 font-bold hover:underline">
                    arun@amirae.studio
                  </a>
                </div>
                <div>
                  <span className="text-gray-500 uppercase block text-[10px]">Operating Hours:</span>
                  <span className="text-gray-800">Monday – Friday: 9:00 AM – 6:00 PM EST</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100">
                <a 
                  href="/#contact"
                  className="w-full inline-flex items-center justify-center py-3 px-4 rounded-xl bg-teal-500 text-black font-bold text-xs uppercase tracking-wider hover:bg-teal-400 transition-all"
                >
                  Contact Studio Leadership
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 sm:px-8 md:px-16 text-center bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Ready to Start a Commercial 3D Project?
          </h2>
          <p className="text-gray-600 mb-8 text-base">
            Reach out to discuss custom 3D modeling, rapid physical prototyping, architectural scale modeling, or digital asset licensing with AMIRAE STUDIO LLC.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 bg-black text-white text-xs font-mono font-bold uppercase tracking-wider px-8 py-4 rounded-2xl hover:bg-gray-800 transition-all"
          >
            Submit Project Requirements <ArrowRight size={16} />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
