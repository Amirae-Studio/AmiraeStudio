import type { Metadata } from "next";
import { LegalDocViewer, LegalSection } from "@/components/LegalDocViewer";
import { STUDIO } from "@/lib/content";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Review the commercial terms, milestone billing, intellectual property assignment, digital file delivery, and physical fabrication policies of AMIRAE STUDIO LLC.",
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "Terms & Conditions — AMIRAE STUDIO LLC",
    description:
      "Review the commercial terms, milestone billing, intellectual property assignment, and physical fabrication policies of AMIRAE STUDIO LLC.",
    url: "https://www.amirae.studio/terms",
    siteName: STUDIO.legalName || STUDIO.name,
    type: "website",
    images: ["/opengraph-image"],
  },
};

const TERMS_SECTIONS: LegalSection[] = [
  {
    id: "acceptance",
    number: "01",
    title: "Acceptance of Terms & Entity Information",
    content: (
      <>
        <p>
          These Terms &amp; Conditions (&quot;Terms&quot;, &quot;Agreement&quot;) constitute a legally binding agreement between you (whether an individual, commercial entity, or enterprise, hereinafter referred to as &quot;Client&quot;, &quot;you&quot;, or &quot;your&quot;) and <strong>{STUDIO.legalName || STUDIO.name}</strong> (&quot;Company&quot;, &quot;Amirae Studio&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), with its registered office at {STUDIO.registeredOffice} and its business address at {STUDIO.businessAddress}.
        </p>
        <p>
          By accessing our website (<a href="https://www.amirae.studio" className="text-ink font-semibold underline underline-offset-4 hover:text-muted">amirae.studio</a>), commissioning bespoke 3D design work, purchasing physical prints or CAD files, or executing a Statement of Work (&quot;SOW&quot;), you acknowledge that you have read, understood, and agreed to be bound by these Terms in full. If you are entering into this Agreement on behalf of a company, you represent that you possess the legal authority to bind that entity.
        </p>
      </>
    ),
  },
  {
    id: "scope-services",
    number: "02",
    title: "Scope of Services & Studio Capabilities",
    content: (
      <>
        <p>
          Amirae Studio specializes in multi-disciplinary 3D engineering, digital asset creation, and physical fabrication. Our commercial capabilities include:
        </p>
        <ul className="list-disc pl-5 space-y-2 mt-2">
          <li><strong>3D Modeling &amp; Digital Asset Creation:</strong> Production-ready CAD, polygonal subdivision models, game-ready assets, UV unwrapping, and 4K/8K PBR texturing.</li>
          <li><strong>Product Design &amp; Rapid Prototyping:</strong> Parametric SolidWorks/STEP engineering, snap-fit mechanics, functional tolerance design, and DfAM (Design for Additive Manufacturing).</li>
          <li><strong>Physical 3D Printing &amp; Fabrication:</strong> High-precision FDM and SLA/resin fabrication, multi-material assembly, post-processing, and framing (such as FrameCity collections).</li>
          <li><strong>Architectural &amp; Heritage Modeling:</strong> Scaled civic miniatures, topography reliefs, and historical conservation archives.</li>
          <li><strong>Interactive 3D Web Visualization:</strong> Three.js, WebGL, React Three Fiber, and high-performance Next.js model configurators.</li>
        </ul>
        <p>
          Each bespoke engagement is governed by an agreed project quote, proposal, or written SOW detailing specific deliverables, file formats, and estimated turnaround timelines.
        </p>
      </>
    ),
  },
  {
    id: "billing-milestones",
    number: "03",
    title: "Quotations, Estimates & Milestone Billing",
    content: (
      <>
        <p>
          Unless explicitly agreed otherwise in a signed SOW, all bespoke commissions operate on a milestone-based payment structure:
        </p>
        <div className="grid sm:grid-cols-2 gap-3 my-3">
          <div className="p-5 rounded-2xl bg-soft/50 border border-line">
            <span className="text-xs font-mono font-bold text-ink block uppercase">Milestone 1 · Kickoff</span>
            <p className="text-sm text-muted mt-1 leading-relaxed font-normal">50% upfront deposit upon contract approval to initiate concept modeling and allocate studio resources.</p>
          </div>
          <div className="p-5 rounded-2xl bg-soft/50 border border-line">
            <span className="text-xs font-mono font-bold text-ink block uppercase">Milestone 2 · Handover</span>
            <p className="text-sm text-muted mt-1 leading-relaxed font-normal">50% final balance upon review approval, prior to dispatch of unlocked high-res CAD archives or physical shipping.</p>
          </div>
        </div>
        <p>
          Invoices are payable within 7 calendar days of issuance via international wire transfer, credit/debit card, Stripe, or approved digital corporate gateways. Prices quoted exclude applicable local import customs, VAT, or regional sales taxes unless explicitly stated.
        </p>
      </>
    ),
  },
  {
    id: "intellectual-property",
    number: "04",
    title: "Intellectual Property & Commercial Rights",
    content: (
      <>
        <p>
          We believe in clear, unencumbered client ownership:
        </p>
        <ul className="list-disc pl-5 space-y-2 mt-2">
          <li><strong>Commissioned Custom Work:</strong> Upon full settlement of all project invoices and milestone fees, {STUDIO.legalName || STUDIO.name} transfers and assigns 100% of the worldwide commercial intellectual property, copyright, and manufacturing rights for the custom deliverables to the Client.</li>
          <li><strong>Pre-Existing Tools &amp; Studio Libraries:</strong> Amirae Studio retains ownership of proprietary underlying shader libraries, parametric procedural node graphs, and foundational toolkits used to create the assets. Client receives a perpetual, irrevocable, royalty-free license to use any embedded studio tools.</li>
          <li><strong>Studio Portfolio Display Rights:</strong> Unless protected under an active Non-Disclosure Agreement (NDA), Amirae Studio reserves the non-commercial right to showcase rendered previews, wireframes, and photos of completed physical models in our digital portfolio, social media, and case studies.</li>
        </ul>
      </>
    ),
  },
  {
    id: "physical-fabrication",
    number: "05",
    title: "Physical 3D Printing, Prototyping & Fabrication",
    content: (
      <>
        <p>
          For physical goods, prototypes, and framed miniature art (e.g. FrameCity editions):
        </p>
        <ul className="list-disc pl-5 space-y-2 mt-2">
          <li><strong>Manufacturing Tolerances:</strong> Additive manufacturing inherently exhibits microscopic layer lines and natural material variations. Standard FDM tolerances are ±0.2mm and SLA/resin tolerances are ±0.05mm. These natural characteristics do not constitute product defects.</li>
          <li><strong>Material Suitability:</strong> Prototyping materials (such as PLA, PETG, ABS, and standard UV resins) are intended for aesthetic evaluation, ergonomic testing, and display unless industrial-grade engineering composites (e.g., Nylon PA12, PEEK) are specifically contracted.</li>
          <li><strong>Quality Assurance:</strong> Every physical item undergoes rigorous multi-point inspection, tolerance verification, and structural curing before leaving our production facility.</li>
        </ul>
      </>
    ),
  },
  {
    id: "digital-deliverables",
    number: "06",
    title: "Delivery of Digital Assets & File Formats",
    content: (
      <>
        <p>
          Digital assets are delivered via encrypted cloud download links upon final milestone settlement. We deliver in industry-standard formats specified in the project SOW, including:
        </p>
        <p className="font-mono text-xs p-5 rounded-2xl bg-soft/50 border border-line text-ink leading-relaxed">
          Parametric / CAD: .STEP, .IGES, .SLDPRT, .DWG<br />
          Mesh / Polygon: .STL, .OBJ, .FBX, .GLTF, .USDZ, .BLEND<br />
          Textures: 4K / 8K PNG, EXR, TIFF (PBR roughness/metallic workflow)
        </p>
        <p>
          The Client has an inspection window of <strong>14 calendar days</strong> following file delivery to report any corrupt archives, missing texture maps, or mesh errors. Verified technical issues will be rectified promptly at no additional cost.
        </p>
      </>
    ),
  },
  {
    id: "shipping-fulfillment",
    number: "07",
    title: "Shipping, International Fulfillment & Risk of Loss",
    content: (
      <>
        <p>
          We fulfill and ship physical models, framed miniatures, and prototypes to clients in the United States, Europe, Asia, and globally:
        </p>
        <ul className="list-disc pl-5 space-y-2 mt-2">
          <li><strong>Carriers &amp; Tracking:</strong> Shipments are dispatched via trusted courier partners (including DHL Express, FedEx, and national postal services) with full end-to-end tracking provided upon dispatch.</li>
          <li><strong>Customs, Duties &amp; Taxes:</strong> The recipient is responsible for any applicable import duties, customs tariffs, VAT, or clearance charges imposed by the destination country&apos;s customs authorities.</li>
          <li><strong>Risk of Loss &amp; Transit Damage:</strong> Title and risk of loss pass to the Client upon carrier handover. In the rare event of transit damage, notify us within <strong>48 hours</strong> of package arrival with photographic evidence of outer packaging and damaged contents to initiate an insurance claim or expedited reprint.</li>
        </ul>
      </>
    ),
  },
  {
    id: "client-materials",
    number: "08",
    title: "Client Materials, Reference Data & Warranties",
    content: (
      <>
        <p>
          When you provide sketches, engineering drawings, logos, brand trademarks, or 3D reference files (&quot;Client Materials&quot;) to Amirae Studio:
        </p>
        <ul className="list-disc pl-5 space-y-2 mt-2">
          <li>You warrant that you own or hold the necessary licenses, rights, and permissions to utilize and authorize Amirae Studio to work with such materials.</li>
          <li>You warrant that Client Materials do not violate any third-party patent, trademark, copyright, trade secret, or privacy right.</li>
          <li>Amirae Studio will not be liable for any infringement claims arising from our faithful execution of Client-supplied designs and specifications.</li>
        </ul>
      </>
    ),
  },
  {
    id: "revisions-scope",
    number: "09",
    title: "Revisions, Iterations & Scope Changes",
    content: (
      <>
        <p>
          Unless otherwise specified in your project agreement:
        </p>
        <ul className="list-disc pl-5 space-y-2 mt-2">
          <li><strong>Included Revisions:</strong> Standard project quotes include up to <strong>two (2) rounds of minor revisions</strong> during the draft rendering/modeling review phase (e.g. adjusting fillet radius, minor proportional tweaks, texture tuning).</li>
          <li><strong>Out-of-Scope Changes:</strong> Fundamental alterations to the design brief, major conceptual pivots, or additions requested after CAD sign-off will be quoted as a separate Addendum or billed at our standard studio rate with prior written Client approval.</li>
        </ul>
      </>
    ),
  },
  {
    id: "confidentiality-nda",
    number: "10",
    title: "Confidentiality & Non-Disclosure (NDA)",
    content: (
      <>
        <p>
          We treat all unreleased hardware inventions, patent filings, CAD blueprints, and proprietary client concepts with the utmost confidentiality.
        </p>
        <p>
          Amirae Studio routinely executes bilateral Non-Disclosure Agreements (NDAs) prior to receiving confidential technical documentation. We implement strict internal access controls, encrypted offline backups, and isolated build environments to safeguard your unreleased intellectual property.
        </p>
      </>
    ),
  },
  {
    id: "cancellation-refunds",
    number: "11",
    title: "Cancellations, Refunds & Termination",
    content: (
      <>
        <p>
          Due to the customized nature of bespoke 3D CAD modeling and custom additive manufacturing:
        </p>
        <ul className="list-disc pl-5 space-y-2 mt-2">
          <li><strong>Deposit Non-Refundability:</strong> The initial 50% kickoff deposit is non-refundable once design and modeling work has commenced, as it compensates for dedicated studio artist time and compute resources.</li>
          <li><strong>Client Cancellation:</strong> If a project is cancelled midway by the Client, Amirae Studio will invoice for hours logged and materials consumed up to the date of cancellation, deliver all work completed to that point, and refund any excess funds.</li>
          <li><strong>Termination by Studio:</strong> Amirae Studio reserves the right to terminate an engagement if the Client breaches payment terms, becomes unresponsive for over 30 days, or requests fabrication of illicit/hazardous goods.</li>
        </ul>
      </>
    ),
  },
  {
    id: "disclaimers",
    number: "12",
    title: "Disclaimers & Warranties Limitation",
    content: (
      <>
        <p>
          Services and deliverables are provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis. Amirae Studio disclaims all warranties, whether express, implied, statutory, or otherwise, including implied warranties of merchantability, fitness for a particular mechanical purpose, or non-infringement.
        </p>
        <p>
          The Client acknowledges that rapid prototypes and 3D printed models are intended for visual, dimensional, and form-fit evaluation. They are not certified for safety-critical structural applications (e.g. aerospace load-bearing, automotive safety, or medical life support) without independent certified engineering validation.
        </p>
      </>
    ),
  },
  {
    id: "liability-limitation",
    number: "13",
    title: "Limitation of Liability",
    content: (
      <>
        <p>
          To the maximum extent permitted by applicable law, in no event shall <strong>{STUDIO.legalName || STUDIO.name}</strong>, its founders, officers, employees, or contractors be liable for any indirect, punitive, incidental, special, exemplary, or consequential damages, including lost profits, loss of goodwill, data corruption, or business interruption.
        </p>
        <p>
          The total cumulative liability of Amirae Studio arising out of or relating to any project, contract, or deliverable shall not exceed the total amount actually paid by the Client to Amirae Studio under the specific Statement of Work giving rise to the claim in the preceding six (6) months.
        </p>
      </>
    ),
  },
  {
    id: "indemnification",
    number: "14",
    title: "Indemnification & Third-Party Claims",
    content: (
      <>
        <p>
          The Client agrees to defend, indemnify, and hold harmless {STUDIO.legalName || STUDIO.name}, its directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses (including reasonable legal fees) arising out of or in any way connected with:
        </p>
        <ul className="list-disc pl-5 space-y-2 mt-2">
          <li>Any breach by the Client of these Terms or project SOW.</li>
          <li>Any allegation that Client Materials infringe the patent, copyright, trademark, or trade secret rights of a third party.</li>
          <li>The downstream commercial manufacture, marketing, sale, or use of end products developed from CAD deliverables supplied by Amirae Studio.</li>
        </ul>
      </>
    ),
  },
  {
    id: "governing-law",
    number: "15",
    title: "Governing Law, Dispute Resolution & Contact",
    content: (
      <>
        <p>
          These Terms and any dispute arising out of them shall be governed by and construed in accordance with applicable commercial laws.
        </p>
        <p>
          In the event of any dispute or controversy, the parties agree to first attempt resolution through amicable good-faith informal negotiations for a period of at least 30 calendar days. If unresolved, disputes shall be submitted to binding arbitration or competent courts.
        </p>
        <div className="p-5 rounded-2xl bg-soft/50 border border-line text-xs font-mono mt-3">
          <strong>{STUDIO.legalName || STUDIO.name}</strong><br />
          Legal Affairs &amp; Contracts Desk<br />
          Email: <a href={`mailto:${STUDIO.email}`} className="text-ink font-semibold underline underline-offset-4 hover:text-muted">{STUDIO.email}</a><br />
          Registered office: {STUDIO.registeredOffice}<br />
          Business address: {STUDIO.businessAddress}
        </div>
      </>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalDocViewer
      title="Terms &amp; conditions. "
      italicTitle=""
      lastUpdated="March 2026"
      effectiveDate="January 1, 2026"
      version="v2.4"
      description="Commercial milestone billing, intellectual property assignment, digital CAD delivery, and precision physical fabrication policies for AMIRAE STUDIO LLC."
      sections={TERMS_SECTIONS}
      relatedDoc={{
        title: "Privacy Policy",
        href: "/privacy",
        description: "Learn how we protect client confidential CAD data, reference blueprints, and personal records.",
      }}
    />
  );
}
