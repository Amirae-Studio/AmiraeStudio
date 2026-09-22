import type { Metadata } from "next";
import { LegalDocViewer, LegalSection } from "@/components/LegalDocViewer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms and Conditions — AMIRAE STUDIO LLC",
  description: "Terms and Conditions of AMIRAE STUDIO LLC governing commercial 3D modeling, additive manufacturing, physical prototyping, WebGL interactive engineering, and commercial IP assignment.",
  metadataBase: new URL("https://www.amirae.studio"),
  openGraph: {
    title: "Terms and Conditions — AMIRAE STUDIO LLC",
    description: "Review AMIRAE STUDIO LLC's commercial terms of service, IP transfer rules, fabrication guidelines, and warranty terms.",
    url: "https://www.amirae.studio/terms-and-conditions",
    siteName: "AMIRAE STUDIO LLC",
  },
};

const TERMS_SECTIONS: LegalSection[] = [
  {
    id: "section-1",
    number: "1",
    title: "Agreement to Terms & Legal Entity",
    content: (
      <>
        <p>
          These Terms and Conditions (&ldquo;Terms&rdquo;, &ldquo;Agreement&rdquo;) constitute a legally binding agreement made between you, whether personally or on behalf of an entity (&ldquo;Client&rdquo;, &ldquo;you&rdquo;), and <strong>AMIRAE STUDIO LLC</strong> (&ldquo;Company&rdquo;, &ldquo;Studio&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;).
        </p>
        <p>
          By accessing our website (<strong>amirae.studio</strong>), submitting requests for quotation, approving Statements of Work (SOW), or commissioning 3D CAD modeling, additive manufacturing, physical prototyping, architectural topography, or interactive WebGL software development, you expressly agree that you have read, understood, and agreed to be bound by all of these Terms.
        </p>
        <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 text-xs font-mono text-gray-800 space-y-1">
          <div><strong className="text-black">Legal Entity:</strong> AMIRAE STUDIO LLC</div>
          <div><strong className="text-black">Operating Domain:</strong> 3D CAD Modeling • Additive Fabrication • Interactive 3D Web Systems</div>
          <div><strong className="text-black">Registered Address:</strong> Thirunagar, Madurai, Tamil Nadu, 625006, India</div>
          <div><strong className="text-black">Commercial Desk:</strong> contact@amirae.studio | +91 8951478989</div>
        </div>
      </>
    ),
  },
  {
    id: "section-2",
    number: "2",
    title: "Commercial 3D Services & Statements of Work",
    content: (
      <>
        <p>
          AMIRAE STUDIO LLC provides end-to-end commercial 3D design and digital fabrication services, including but not limited to:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Parametric 3D CAD Modeling &amp; Sculpting:</strong> Production-ready mechanical parts, organic sculpting, and digital assets (.STEP, .IGES, .OBJ, .FBX, .BLEND).</li>
          <li><strong>Industrial Product Prototyping:</strong> Design for Additive Manufacturing (DfAM), snap-fit engineering, and iterative physical prototypes.</li>
          <li><strong>3D Print Fabrication:</strong> High-precision SLA, FDM, and multi-part resin/polymer physical prints and miniature models.</li>
          <li><strong>Architectural &amp; Heritage Topography:</strong> Scaled landmark models and framed 3D topography art (e.g. FrameCity collection).</li>
          <li><strong>Interactive WebGL &amp; 3D Web Apps:</strong> Real-time browser-based 3D configurators (Three.js, React Three Fiber, Next.js).</li>
        </ul>
        <p className="mt-2">
          Each customized commercial engagement is governed by an itemized Statement of Work (SOW) or written quotation specifying deliverables, milestone phases, technical tolerances, and delivery timelines.
        </p>
      </>
    ),
  },
  {
    id: "section-3",
    number: "3",
    title: "Quotations, Pricing & Currency",
    content: (
      <>
        <p>
          Quotations issued by AMIRAE STUDIO LLC are valid for thirty (30) calendar days from the date of issuance unless explicitly stated otherwise in writing.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Pricing Structure:</strong> Project fees may be quoted as fixed milestone contracts, sprint-based retainers, or per-unit physical production runs.</li>
          <li><strong>Currencies:</strong> Invoices are billed in United States Dollars (USD) for international clients or Indian Rupees (INR) for domestic clients.</li>
          <li><strong>Taxes &amp; Duties:</strong> Fees are exclusive of applicable value-added taxes, GST, customs tariffs, or import duties levied by destination jurisdictions, which remain the sole responsibility of the Client.</li>
        </ul>
      </>
    ),
  },
  {
    id: "section-4",
    number: "4",
    title: "Intellectual Property Rights & Commercial Assignment",
    content: (
      <>
        <p>
          We uphold crystal-clear intellectual property boundaries to empower our commercial clients while protecting proprietary studio tooling:
        </p>
        <div className="space-y-3 pt-1">
          <div className="p-4 rounded-xl bg-teal-50/80 border border-teal-200">
            <h4 className="font-bold text-xs uppercase tracking-wider text-teal-900 font-mono mb-1">100% Client IP Assignment Upon Full Payment</h4>
            <p className="text-xs sm:text-sm text-teal-950 leading-relaxed">
              Upon receipt of full and final payment for the deliverables specified in an agreed SOW, AMIRAE STUDIO LLC irrevocably transfers and assigns to the Client all worldwide rights, title, and intellectual property interest in the bespoke 3D CAD models, textures, and bespoke designs created specifically for the Client.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
            <h4 className="font-bold text-xs uppercase tracking-wider text-gray-900 font-mono mb-1">Studio Background Technology</h4>
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
              AMIRAE STUDIO LLC retains ownership of pre-existing studio libraries, proprietary shaders, general algorithmic scripts, and internal parametric workflows developed independently of the Client&rsquo;s specific engagement.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
            <h4 className="font-bold text-xs uppercase tracking-wider text-gray-900 font-mono mb-1">Portfolio Showcase Rights</h4>
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
              Unless a separate Non-Disclosure Agreement (NDA) or embargo period is executed, the Studio reserves the non-exclusive right to display non-confidential project imagery and renders in its portfolio, case studies, and promotional channels.
            </p>
          </div>
        </div>
      </>
    ),
  },
  {
    id: "section-5",
    number: "5",
    title: "Confidentiality & Non-Disclosure (NDA)",
    content: (
      <>
        <p>
          Both parties agree to treat all non-public information, technical specifications, patentable concepts, CAD files, and business data exchanged during negotiations or project execution as strictly confidential.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Confidential Information shall not be disclosed to third parties without prior written consent, except to subcontractors or legal advisors under equivalent confidentiality covenants.</li>
          <li>We routinely execute formal bilateral or client-provided NDAs prior to receiving unreleased hardware designs or proprietary engineering blueprints.</li>
        </ul>
      </>
    ),
  },
  {
    id: "section-6",
    number: "6",
    title: "Additive Manufacturing, Tolerances & Physical Deliverables",
    content: (
      <>
        <p>
          For projects involving physical 3D printing and additive prototyping:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Manufacturing Tolerances:</strong> Additive fabrication involves inherent thermal and layer-adhesion variances. Standard dimensional tolerances are ±0.2 mm for SLA resin printing and ±0.4 mm for FDM thermoplastics unless tighter tolerances are formally contracted in the SOW.
          </li>
          <li>
            <strong>Material Characteristics:</strong> Thermoplastics (PLA, PETG, ABS, Nylon) and photo-curable resins exhibit unique mechanical properties. Prototypes are intended for design verification, fit-testing, and presentation, unless certified as end-use production parts in writing.
          </li>
          <li>
            <strong>Pre-Production Sample Sign-Off:</strong> For volume fabrication runs, pre-production sample prints may be fabricated and photographed/shipped for formal Client sign-off prior to batch manufacturing.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "section-7",
    number: "7",
    title: "Milestone Approval & Revision Policy",
    content: (
      <>
        <p>
          Our projects follow structured milestones to ensure predictable delivery:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Included Revisions:</strong> Unless otherwise specified in the SOW, each milestone includes up to two (2) rounds of minor aesthetic or dimensional revisions within the original project scope.
          </li>
          <li>
            <strong>Scope Changes:</strong> Major conceptual pivots, changes to fundamental design architecture, or additions requested after milestone approval will be treated as a Change Order billed at our standard hourly or milestone rates.
          </li>
          <li>
            <strong>Review SLA:</strong> The Client agrees to provide feedback or milestone sign-off within seven (7) business days of deliverable submission. Absence of feedback within this window may result in project schedule pauses.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "section-8",
    number: "8",
    title: "Payment Terms, Deposits & Invoicing",
    content: (
      <>
        <p>
          Commercial terms are structured as follows:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Deposit Requirement:</strong> A minimum commencement deposit (typically 50% for standard projects or milestone-based schedule for enterprise contracts) is required prior to project kick-off.
          </li>
          <li>
            <strong>Final Release:</strong> High-resolution source CAD files (.STEP, native files) and physical shipment dispatch occur upon receipt of the final milestone settlement.
          </li>
          <li>
            <strong>Payment Methods:</strong> We accept verified international wire transfers, SWIFT/ACH, corporate cards, and authorized digital payment gateways.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "section-9",
    number: "9",
    title: "Shipping, Logistics & Risk of Loss",
    content: (
      <>
        <p>
          Physical prototypes and framed miniatures are dispatched via reputed global courier carriers (e.g., DHL, FedEx, India Post) with end-to-end tracking:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Risk of loss transfers to the Client upon handover of packaged goods to the designated freight carrier.</li>
          <li>We package all physical prints with custom high-density shock-absorbing foam and reinforced structural boxing.</li>
          <li>In the event of carrier damage during transit, the Client must notify us within 48 hours of receipt with photographic proof to initiate carrier insurance claims and replacement print evaluation.</li>
        </ul>
      </>
    ),
  },
  {
    id: "section-10",
    number: "10",
    title: "Warranties & Disclaimers",
    content: (
      <>
        <p>
          AMIRAE STUDIO LLC warrants that all 3D modeling and fabrication services will be performed with professional skill, craftsmanship, and in accordance with agreed specifications.
        </p>
        <p className="text-gray-600 text-xs sm:text-sm">
          EXCEPT AS EXPRESSLY STATED HEREIN, ALL DELIVERABLES, PHYSICAL PROTOTYPES, 3D FILES, AND WEBGL SOFTWARE ARE PROVIDED &ldquo;AS IS&rdquo; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO FITNESS FOR A PARTICULAR PURPOSE, STRUCTURAL LOAD PERFORMANCE IN CRITICAL LIFE-SAFETY SYSTEMS, OR UNINTERRUPTED SOFTWARE OPERATION.
        </p>
      </>
    ),
  },
  {
    id: "section-11",
    number: "11",
    title: "Limitation of Liability",
    content: (
      <>
        <p>
          TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL AMIRAE STUDIO LLC, ITS DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE FOR ANY INDIRECT, CONSEQUENTIAL, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, DATA LOSS, MANUFACTURING DOWNTIME, OR THIRD-PARTY CLAIMS ARISING OUT OF THE USE OF OUR 3D ASSETS OR FABRICATED UNITS.
        </p>
        <p>
          OUR TOTAL AGGREGATE LIABILITY ARISING FROM OR RELATED TO ANY SOW OR ENGAGEMENT SHALL NOT EXCEED THE TOTAL AMOUNT ACTUALLY PAID BY THE CLIENT TO AMIRAE STUDIO LLC UNDER THE SPECIFIC SOW GIVING RISE TO THE CLAIM.
        </p>
      </>
    ),
  },
  {
    id: "section-12",
    number: "12",
    title: "Indemnification",
    content: (
      <>
        <p>
          The Client agrees to defend, indemnify, and hold harmless AMIRAE STUDIO LLC and its affiliates from and against any claims, liabilities, damages, and expenses (including reasonable legal fees) arising from:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Any allegation that client-supplied CAD reference files, logos, or specifications infringe third-party patents, copyrights, or trademarks.</li>
          <li>The downstream marketing, sale, or end-use integration of physical products manufactured using the Studio&rsquo;s 3D assets.</li>
        </ul>
      </>
    ),
  },
  {
    id: "section-13",
    number: "13",
    title: "Termination & Cancellation",
    content: (
      <>
        <p>
          Either party may terminate an active engagement for material breach upon fourteen (14) days written notice if such breach remains uncured.
        </p>
        <p>
          In the event of client-requested cancellation without cause, the Client remains liable for all work performed, labor incurred, and non-refundable material costs expended up to the date of cancellation.
        </p>
      </>
    ),
  },
  {
    id: "section-14",
    number: "14",
    title: "Governing Law & Dispute Resolution",
    content: (
      <>
        <p>
          These Terms and any dispute or claim arising out of or in connection with them shall be governed by and construed in accordance with the substantive laws of India, without regard to its conflict of law principles.
        </p>
        <p>
          The parties agree to attempt in good faith to resolve any dispute through direct executive negotiations. In the event of unresolved disputes, the courts situated in Madurai, Tamil Nadu, India shall have exclusive territorial jurisdiction.
        </p>
      </>
    ),
  },
  {
    id: "section-15",
    number: "15",
    title: "Official Contact & Legal Notices",
    content: (
      <>
        <p>
          All formal notices, commercial inquiries, or contract correspondence under these Terms should be directed to:
        </p>
        <div className="p-4 rounded-2xl bg-white border border-black/10 text-xs font-mono space-y-1.5 shadow-2xs">
          <div className="font-bold text-gray-950 text-sm">AMIRAE STUDIO LLC</div>
          <div><span className="text-gray-500">Department:</span> Commercial Contracts &amp; Governance</div>
          <div><span className="text-gray-500">Email:</span> <a href="mailto:contact@amirae.studio" className="text-teal-700 underline font-bold">contact@amirae.studio</a></div>
          <div><span className="text-gray-500">Phone:</span> +91 8951478989</div>
          <div><span className="text-gray-500">Entity Location:</span> Thirunagar, Madurai, Tamil Nadu, 625006, India</div>
          <div><span className="text-gray-500">Portal:</span> <a href="https://www.amirae.studio" className="text-teal-700 underline font-bold">www.amirae.studio</a></div>
        </div>
      </>
    ),
  },
];

export default function TermsAndConditionsPage() {
  return (
    <LegalDocViewer
      title="Terms and Conditions"
      lastUpdated="March 2025"
      effectiveDate="January 1, 2025"
      version="v2.4"
      description="These commercial Terms and Conditions govern all 3D modeling commissions, additive fabrication runs, rapid prototyping milestones, interactive WebGL software development, and IP licensing by AMIRAE STUDIO LLC."
      sections={TERMS_SECTIONS}
      relatedDoc={{
        title: "Privacy Policy",
        href: "/privacy-policy",
        description: "Learn how we safeguard client CAD files, NDA data, and confidential commercial specifications.",
      }}
    />
  );
}
