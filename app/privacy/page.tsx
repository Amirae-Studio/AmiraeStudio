import type { Metadata } from "next";
import { LegalDocViewer, LegalSection } from "@/components/LegalDocViewer";
import { STUDIO } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy Policy — AMIRAE STUDIO LLC",
  description:
    "Learn how AMIRAE STUDIO LLC collects, protects, stores, and handles client CAD blueprints, personal information, and international transaction data.",
  openGraph: {
    title: "Privacy Policy — AMIRAE STUDIO LLC",
    description:
      "Learn how AMIRAE STUDIO LLC collects, protects, stores, and handles client CAD blueprints, personal information, and international transaction data.",
    url: "https://www.amirae.studio/privacy",
    siteName: STUDIO.legalName || STUDIO.name,
    type: "website",
  },
};

const PRIVACY_SECTIONS: LegalSection[] = [
  {
    id: "commitment",
    number: "01",
    title: "Privacy Commitment & Entity Scope",
    content: (
      <>
        <p>
          At <strong>{STUDIO.legalName || STUDIO.name}</strong> (&quot;Company&quot;, &quot;Amirae Studio&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), we respect your privacy and are committed to protecting the personal data, intellectual property, and proprietary CAD references you share with us.
        </p>
        <p>
          This Privacy Policy applies to personal information and project data collected through our website (<a href="https://www.amirae.studio" className="text-ink font-semibold underline underline-offset-2 hover:text-black">amirae.studio</a>), direct project inquiries, quote requests, CAD upload portals, custom contract executions, and international fabrication orders.
        </p>
      </>
    ),
  },
  {
    id: "information-collected",
    number: "02",
    title: "Information We Collect",
    content: (
      <>
        <p>
          We collect information necessary to provide commercial 3D design, rapid prototyping, and physical manufacturing services:
        </p>
        <ul className="list-disc pl-5 space-y-2 mt-2">
          <li><strong>Contact &amp; Identification Data:</strong> Full name, corporate entity name, job title, email address, phone number, and billing/shipping addresses.</li>
          <li><strong>Project Specifications &amp; Technical Assets:</strong> 2D concept sketches, reference photos, CAD files (STEP, STL, OBJ, DXF), tolerance constraints, dimension specifications, and project briefs provided during quote or discovery phases.</li>
          <li><strong>Financial &amp; Transactional Data:</strong> Invoicing details, VAT/Tax identification numbers, payment status, milestone records, and wire transaction confirmation identifiers.</li>
          <li><strong>Technical &amp; Usage Data:</strong> Browser type, operating system, IP address, device viewport dimensions, and interface theme preferences.</li>
        </ul>
      </>
    ),
  },
  {
    id: "how-we-use",
    number: "03",
    title: "How We Use Collected Information",
    content: (
      <>
        <p>
          We utilize collected data strictly for legitimate commercial and operational purposes:
        </p>
        <ul className="list-disc pl-5 space-y-2 mt-2">
          <li>To review technical requirements and provide accurate Statements of Work and cost estimates.</li>
          <li>To execute 3D parametric CAD modeling, rendering, additive manufacturing, and physical fabrication.</li>
          <li>To process milestone invoices, track payments, and maintain statutory financial accounting records.</li>
          <li>To dispatch physical shipments, generate international customs waybills, and provide live carrier tracking numbers.</li>
          <li>To communicate project milestones, share draft 4K render approvals, and provide post-delivery customer support.</li>
          <li>To maintain website security, prevent fraudulent submissions, and optimize our 3D interactive web experiences.</li>
        </ul>
      </>
    ),
  },
  {
    id: "cad-confidentiality",
    number: "04",
    title: "Confidentiality of CAD Blueprints & Project Assets",
    content: (
      <>
        <p>
          We understand that your 3D models often represent patent-pending hardware inventions, trade secrets, or unreleased consumer products.
        </p>
        <div className="p-4 rounded-xl bg-[#faf9f5] border border-black/[0.08] text-xs space-y-1.5 my-2">
          <p className="font-bold text-ink">Our Core Security Commitment to Studio Clients:</p>
          <p className="text-muted">✓ We NEVER sell, license, or monetize your custom CAD files, blueprints, or proprietary meshes to third parties.</p>
          <p className="text-muted">✓ All uploaded project files are stored in access-restricted, encrypted cloud environments accessible only by assigned engineers.</p>
          <p className="text-muted">✓ We are glad to countersign your corporate mutual Non-Disclosure Agreement (NDA) prior to receiving sensitive CAD packages.</p>
        </div>
      </>
    ),
  },
  {
    id: "legal-basis",
    number: "05",
    title: "Legal Basis for Data Processing (GDPR & Global)",
    content: (
      <>
        <p>
          If you reside in the European Economic Area (EEA), the United Kingdom, or jurisdictions with comparable privacy frameworks, we process your personal data under the following legal bases:
        </p>
        <ul className="list-disc pl-5 space-y-2 mt-2">
          <li><strong>Contractual Performance:</strong> Processing required to fulfill our design, manufacturing, and delivery obligations under a signed project contract or purchase order.</li>
          <li><strong>Legitimate Interests:</strong> Conducting ordinary business operations, responding to commercial inquiries, preventing fraud, and enhancing our 3D web engineering services.</li>
          <li><strong>Legal Compliance:</strong> Retaining financial transaction records to comply with statutory taxation, accounting, and export control regulations.</li>
          <li><strong>Consent:</strong> Where you have given explicit permission (e.g. subscribing to updates or consenting to feature a completed public case study).</li>
        </ul>
      </>
    ),
  },
  {
    id: "third-parties",
    number: "06",
    title: "Third-Party Service Providers & Subprocessors",
    content: (
      <>
        <p>
          We do not sell personal data. We share information only with trusted infrastructure subprocessors strictly as needed to deliver our services:
        </p>
        <ul className="list-disc pl-5 space-y-2 mt-2">
          <li><strong>Cloud Infrastructure &amp; Hosting:</strong> Vercel (frontend deployment) and Supabase / AWS (encrypted asset storage and databases).</li>
          <li><strong>Form Processing &amp; Communications:</strong> Web3Forms for secure quote routing and enterprise email servers.</li>
          <li><strong>Logistics &amp; Courier Services:</strong> DHL Express, FedEx, and national postal services for generating shipping labels and export documentation.</li>
          <li><strong>Payment Processors:</strong> Stripe and authorized international banking institutions for PCI-compliant payment settlement.</li>
        </ul>
      </>
    ),
  },
  {
    id: "international-transfers",
    number: "07",
    title: "International Data Transfers",
    content: (
      <>
        <p>
          Amirae Studio serves clients worldwide, including in North America, Europe, Asia, and Oceania. Personal information and project data may be transferred to and processed in countries outside your country of residence, including India and the United States.
        </p>
        <p>
          When transferring data cross-border, we ensure appropriate safeguards are implemented, including Standard Contractual Clauses (SCCs), encryption in transit and at rest, and adherence to international data protection standards.
        </p>
      </>
    ),
  },
  {
    id: "data-retention",
    number: "08",
    title: "Data Retention & Archival Policies",
    content: (
      <>
        <p>
          We retain personal data and project assets only for as long as necessary to fulfill the purposes outlined in this policy:
        </p>
        <ul className="list-disc pl-5 space-y-2 mt-2">
          <li><strong>Project CAD Archives:</strong> Backed up for <strong>12 months</strong> following final milestone delivery to allow clients to request replacement files or follow-up fabrication runs, after which archives may be permanently purged upon written request.</li>
          <li><strong>Financial &amp; Invoicing Records:</strong> Retained for <strong>7 years</strong> in accordance with statutory accounting and tax compliance requirements.</li>
          <li><strong>General Inquiries:</strong> Non-contracted inquiry emails and contact form submissions are periodically cleared after 180 days.</li>
        </ul>
      </>
    ),
  },
  {
    id: "security-safeguards",
    number: "09",
    title: "Security Safeguards & Encryption",
    content: (
      <>
        <p>
          We employ industry-standard technical, organizational, and physical security measures to safeguard your personal data and proprietary 3D files against unauthorized access, destruction, loss, or alteration.
        </p>
        <p>
          All web data transmissions occur over secure TLS 1.3 encryption. Cloud repositories utilize AES-256 encryption at rest, multi-factor authentication (MFA), and strict role-based least-privilege access controls.
        </p>
      </>
    ),
  },
  {
    id: "user-rights",
    number: "10",
    title: "Your Rights & Data Subject Access Requests (DSAR)",
    content: (
      <>
        <p>
          Depending on your jurisdiction (such as GDPR in Europe or CCPA/CPRA in California), you have significant rights regarding your personal information:
        </p>
        <ul className="list-disc pl-5 space-y-2 mt-2">
          <li><strong>Right to Access:</strong> Request confirmation of whether we hold your personal data and receive a copy.</li>
          <li><strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete personal records.</li>
          <li><strong>Right to Erasure (&quot;Right to be Forgotten&quot;):</strong> Request the permanent deletion of your personal data, subject to legal and tax retention requirements.</li>
          <li><strong>Right to Data Portability:</strong> Request an export of your personal information in a structured, machine-readable format.</li>
          <li><strong>Right to Object / Opt-Out:</strong> Object to processing based on legitimate interests or opt-out of marketing communications at any time.</li>
        </ul>
        <p>
          To exercise any of these rights, email our privacy desk at <a href={`mailto:${STUDIO.email}`} className="text-ink font-semibold underline underline-offset-2 hover:text-black">{STUDIO.email}</a>. We respond to all verified requests within 30 days.
        </p>
      </>
    ),
  },
  {
    id: "cookies-telemetry",
    number: "11",
    title: "Cookies, Telemetry & Browser Preferences",
    content: (
      <>
        <p>
          Our website uses minimal, privacy-friendly storage technologies:
        </p>
        <ul className="list-disc pl-5 space-y-2 mt-2">
          <li><strong>Essential Functional Storage:</strong> We use browser LocalStorage strictly to remember your chosen visual theme across page visits.</li>
          <li><strong>No Third-Party Advertising Trackers:</strong> We do not use intrusive cross-site tracking cookies, behavioral ad pixels, or third-party data brokers.</li>
        </ul>
      </>
    ),
  },
  {
    id: "policy-updates",
    number: "12",
    title: "Policy Updates & Privacy Officer Contact",
    content: (
      <>
        <p>
          We may update this Privacy Policy from time to time to reflect operational advancements, technical modifications, or evolving legal frameworks. When updates occur, we will revise the &quot;Last Updated&quot; date at the top of this document.
        </p>
        <p>
          For questions, privacy inquiries, or data access requests, please contact our designated privacy officer:
        </p>
        <div className="p-4 rounded-xl bg-[#faf9f5] border border-black/[0.08] text-xs font-mono mt-3">
          <strong>{STUDIO.legalName || STUDIO.name}</strong><br />
          Data Protection &amp; Privacy Officer<br />
          Email: <a href={`mailto:${STUDIO.email}`} className="text-ink font-semibold underline underline-offset-2 hover:text-black">{STUDIO.email}</a><br />
          Address: {STUDIO.address}
        </div>
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <LegalDocViewer
      title="Privacy Policy"
      subtitle="data protection"
      lastUpdated="March 2026"
      effectiveDate="January 1, 2026"
      version="v2.4"
      description="How AMIRAE STUDIO LLC protects, stores, handles, and processes your personal information, CAD project blueprints, and international transaction data."
      sections={PRIVACY_SECTIONS}
      relatedDoc={{
        title: "Terms & Conditions",
        href: "/terms",
        description: "Review our commercial milestone contracts, IP assignment, and physical fabrication policies.",
      }}
    />
  );
}
