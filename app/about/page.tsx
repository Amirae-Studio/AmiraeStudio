import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/footer";
import { 
  Boxes, 
  Cpu, 
  Printer, 
  Landmark, 
  Code2, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us — AMIRAE STUDIO LLC",
  description: "Learn about AMIRAE STUDIO LLC — our company story, core capabilities, global customers, operating model, and cross-disciplinary team of 3D artists and engineers.",
  metadataBase: new URL("https://www.amirae.studio"),
  openGraph: {
    title: "About Us — AMIRAE STUDIO LLC",
    description: "AMIRAE STUDIO LLC company story, capabilities, customers, operating model, and team.",
    url: "https://www.amirae.studio/about",
    siteName: "AMIRAE STUDIO LLC",
  },
};

const STORY_MILESTONES = [
  {
    year: "FOUNDING",
    title: "The Vision for Physical-Digital Harmony",
    desc: "AMIRAE STUDIO LLC was founded with a singular conviction: that 3D design should not remain trapped behind glass screens. We set out to bridge high-precision digital 3D parametric modeling with tangible physical craftsmanship and additive manufacturing."
  },
  {
    year: "CROWDFUNDING",
    title: "FrameCity & Global Community Validation",
    desc: "We launched FrameCity on MakerWorld, a modular collection of high-detail 3D printed cityscapes. The project gained overwhelming international support, surpassing $1,700+ in backer funding and establishing our global footprint across the U.S. and worldwide."
  },
  {
    year: "EXPANSION",
    title: "End-to-End Commercial 3D Powerhouse",
    desc: "Today, AMIRAE STUDIO LLC operates as a full-service commercial studio, providing rapid product prototyping, architectural miniatures, digital game-ready assets, and interactive WebGL 3D software for businesses and creators globally."
  }
];

const CAPABILITIES = [
  {
    icon: Boxes,
    title: "3D CAD & Digital Sculpting",
    tagline: "Parametric & Organic Excellence",
    desc: "Production-ready CAD files (STEP, IGES, OBJ, FBX) optimized for injection molding, CNC, and real-time PBR rendering pipelines.",
    color: "#21E1B5",
  },
  {
    icon: Cpu,
    title: "Industrial Product Prototyping",
    tagline: "Concept to Physical Reality",
    desc: "Design for Additive Manufacturing (DfAM), functional mechanical tolerances, ergonomics, and rapid iterative physical prototyping.",
    color: "#4db8ff",
  },
  {
    icon: Printer,
    title: "Additive 3D Print Fabrication",
    tagline: "Ultra-High Resolution SLA & FDM",
    desc: "Precision fabrication of miniatures, art displays, multi-part snap-fit kits, and durable end-use components.",
    color: "#f0c239",
  },
  {
    icon: Landmark,
    title: "Architectural & Heritage Topography",
    tagline: "Timeless Urban Precision",
    desc: "Meticulously accurate scale architectural models, heritage landmark preservation meshes, and framed dimensional cityscapes.",
    color: "#e6005c",
  },
  {
    icon: Code2,
    title: "Interactive WebGL & 3D Web Apps",
    tagline: "Real-Time 3D in the Browser",
    desc: "Custom Three.js, React Three Fiber, and Next.js applications bringing 3D asset configurators to life on the web.",
    color: "#84CC16",
  },
  {
    icon: ShieldCheck,
    title: "Commercial IP & Turnkey Licensing",
    tagline: "Strict Enterprise Governance",
    desc: "Full intellectual property assignment, NDA protection, and milestone-backed commercial contract delivery.",
    color: "#a855f7",
  },
];

const OPERATING_MODEL_STEPS = [
  {
    step: "01",
    title: "Discovery & Blueprint Engineering",
    desc: "We review your sketches, CAD references, functional constraints, and commercial targets to draft a comprehensive Statement of Work with fixed deliverables and timelines.",
  },
  {
    step: "02",
    title: "Parametric 3D Modeling & Sculpting",
    desc: "Our artists sculpt high-fidelity meshes, calibrate subdivision tolerances, verify quad topology, and produce photorealistic 4K render previews for your approval.",
  },
  {
    step: "03",
    title: "DfAM Prototyping & Quality Assurance",
    desc: "For physical deliverables, we conduct structural slicing, thermal tolerance checks, and physical test prints to ensure flawless mechanical integrity.",
  },
  {
    step: "04",
    title: "Digital Handover & Global Fulfillment",
    desc: "Clean, standardized digital archives (CAD/STL/Source files) are transferred with full commercial rights, while physical units are dispatched with tracked global shipping.",
  },
];

const CLIENT_METRICS = [
  { number: "$1,700+", label: "Crowdfunded Backer Support on MakerWorld" },
  { number: "100%", label: "Commercial IP Rights Transferred" },
  { number: "24h", label: "Guaranteed Response SLA" },
  { number: "Global", label: "U.S. & International Fulfillment Network" },
];

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Navbar />

      {/* ── 1. HERO SECTION ── */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-black/10 bg-[#faf9f5]">
        {/* Subtle grid background */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            backgroundImage: "linear-gradient(to right, rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.04) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-gray-900 leading-tight">
            Engineering Precision in <br />
            <span className="text-teal-600">Digital 3D &amp; Physical Detail</span>
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-lg sm:text-xl text-gray-700 leading-relaxed font-normal">
            <strong>AMIRAE STUDIO LLC</strong> is a commercial 3D modeling, rapid product prototyping, physical fabrication, and interactive web visualization studio serving enterprise clients and creators across the United States and worldwide.
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-12 pt-8 border-t border-gray-200">
            {CLIENT_METRICS.map((metric, i) => (
              <div key={i} className="p-5 rounded-2xl bg-white/90 border border-black/10 shadow-xs">
                <div className="font-mono text-2xl sm:text-3xl font-extrabold text-teal-700">{metric.number}</div>
                <div className="text-xs text-gray-600 mt-1 font-medium">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ── 2. COMPANY STORY ── */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white border-b border-black/10">
        <div className="max-w-6xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
                From Conceptual Vision to Tangible Reality
              </h2>

              <p className="text-base text-gray-700 leading-relaxed">
                Founded by passionate 3D artists and computational engineers, AMIRAE STUDIO LLC was established to bring rigor, aesthetic perfection, and industrial reliability to the intersection of digital design and physical additive manufacturing.
              </p>

              <p className="text-base text-gray-700 leading-relaxed">
                Whether creating bespoke framed architectural topographies, engineering snap-fit product prototypes for consumer hardware brands, or deploying interactive 3D WebGL viewers, our studio operates with obsessive attention to proportion, curvature, and physical printability.
              </p>

              <div className="pt-2">
                <a
                  href="/services"
                  className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-teal-700 hover:underline"
                >
                  Explore All Commercial Services <ArrowRight size={14} />
                </a>
              </div>
            </div>

            {/* Timeline Milestones */}
            <div className="lg:col-span-7 space-y-4">
              {STORY_MILESTONES.map((item, idx) => (
                <div 
                  key={idx}
                  className="p-6 sm:p-8 rounded-3xl bg-[#faf9f5] border border-black/10 shadow-xs hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-[#21E1B5] text-black">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed pl-1 sm:pl-2 mt-3">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>


      {/* ── 3. CORE CAPABILITIES ── */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#faf9f5] border-b border-black/10">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
              Our Core <span className="text-teal-600">Capabilities</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-600">
              Cross-disciplinary mastery spanning digital CAD sculpting, physical fabrication, and real-time interactive systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAPABILITIES.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <div 
                  key={i}
                  className="bg-white rounded-3xl p-7 border border-black/10 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div 
                      className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 shadow-xs"
                      style={{ backgroundColor: `${cap.color}25`, color: cap.color }}
                    >
                      <Icon size={24} />
                    </div>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-gray-500 block mb-1">
                      {cap.tagline}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {cap.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {cap.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* ── 4. CUSTOMERS & COMMUNITY PROOF ── */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white border-b border-black/10">
        <div className="max-w-6xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
                Trusted by Innovators, Brands &amp; Collectors Worldwide
              </h2>

              <p className="text-base text-gray-700 leading-relaxed">
                AMIRAE STUDIO LLC collaborates with consumer hardware startups, creative agencies, architecture firms, and thousands of independent makers across the United States, Europe, and Asia.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 bg-[#faf9f5] p-4 rounded-2xl border border-black/10">
                  <CheckCircle2 className="text-teal-600 shrink-0 mt-1" size={20} />
                  <div>
                    <strong className="text-sm font-bold text-gray-900 block">MakerWorld Crowdfunding Success</strong>
                    <span className="text-xs text-gray-600">
                      Our signature project <em>FrameCity</em> gained $1,700+ in global backer pledges with 5-star physical print feedback.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-[#faf9f5] p-4 rounded-2xl border border-black/10">
                  <CheckCircle2 className="text-teal-600 shrink-0 mt-1" size={20} />
                  <div>
                    <strong className="text-sm font-bold text-gray-900 block">Enterprise Milestone Delivery</strong>
                    <span className="text-xs text-gray-600">
                      Structured milestone contracts, full commercial IP transfer, and rapid sprint turnaround for B2B partners.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Featured Showcase Card */}
            <div className="lg:col-span-6 bg-zinc-950 text-white p-8 sm:p-10 rounded-3xl border border-zinc-800 shadow-2xl relative overflow-hidden">
              <span className="font-mono text-xs uppercase tracking-widest text-[#21E1B5] font-bold block mb-2">
                Featured Flagship Collection
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">FrameCity — 3D Skylines in Frames</h3>
              
              <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                A globally celebrated collection of hand-modeled architectural skylines, converted into high-precision modular 3D relief art with custom frames.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-6 font-mono text-xs">
                <div className="p-3.5 rounded-2xl bg-zinc-900 border border-zinc-800">
                  <span className="text-zinc-500 block text-[10px]">Total Funding</span>
                  <span className="text-white font-bold text-base">$1,700+ Raised</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-zinc-900 border border-zinc-800">
                  <span className="text-zinc-500 block text-[10px]">Backer Base</span>
                  <span className="text-[#21E1B5] font-bold text-base">Global &amp; U.S.</span>
                </div>
              </div>

              <a
                href="https://makerworld.com/en/crowdfunding/313-framecity-high-detailed-cities-in-frames"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#21E1B5] text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#1bc79f] transition-all hover:scale-105"
              >
                View Campaign on MakerWorld <ArrowRight size={14} />
              </a>
            </div>

          </div>

        </div>
      </section>


      {/* ── 5. OPERATING MODEL ── */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#18181b] text-white">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Our 4-Stage <span className="text-[#21E1B5]">Operating Model</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-zinc-400">
              A transparent, agile workflow delivering predictable milestones, rigorous QA, and prompt fulfillment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {OPERATING_MODEL_STEPS.map((op) => (
              <div 
                key={op.step}
                className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#21E1B5]/40 transition-all shadow-md"
              >
                <div>
                  <div className="font-mono text-3xl font-extrabold text-[#21E1B5] mb-4">
                    {op.step}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                    {op.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {op.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center gap-2 text-[11px] font-mono text-[#21E1B5]">
                  <CheckCircle2 size={13} />
                  <span>Milestone Verification</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ── 6. CTA / REQUEST A QUOTE BANNER ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#faf9f5] text-center">
        <div className="max-w-4xl mx-auto p-10 sm:p-14 rounded-3xl bg-zinc-950 text-white border border-zinc-800 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#21E1B5]/15 rounded-full blur-3xl pointer-events-none" />

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Ready to Bring Your 3D Vision to Life?
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto mb-8 text-base">
            Request an itemized commercial quote or connect with our studio directors to discuss your custom 3D modeling and fabrication goals.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="/#quote"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-[#21E1B5] text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#1bc79f] transition-all shadow-lg hover:scale-105"
            >
              Request a Commercial Quote <ArrowRight size={16} />
            </a>

            <a
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-zinc-900 text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-zinc-800 transition-all border border-zinc-700"
            >
              Contact Studio Direct
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
