import type { Metadata } from "next";
import { LegalDocViewer, LegalSection } from "@/components/LegalDocViewer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — AMIRAE STUDIO LLC",
  description: "Privacy Policy for AMIRAE STUDIO LLC. Learn how we collect, handle, protect, and process personal data, CAD technical models, and commercial project specifications.",
  metadataBase: new URL("https://www.amirae.studio"),
  openGraph: {
    title: "Privacy Policy — AMIRAE STUDIO LLC",
    description: "Learn how AMIRAE STUDIO LLC protects your personal data and commercial CAD assets.",
    url: "https://www.amirae.studio/privacy-policy",
    siteName: "AMIRAE STUDIO LLC",
  },
};

const PRIVACY_SECTIONS: LegalSection[] = [
  {
    id: "section-1",
    number: "1",
    title: "About Us & Scope of This Policy",
    content: (
      <>
        <p>
          Welcome to <strong>AMIRAE STUDIO LLC</strong> (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;). We are committed to protecting your privacy and ensuring the utmost confidentiality of your personal information, commercial project requirements, and proprietary 3D digital assets.
        </p>
        <p>
          This Privacy Policy explains how AMIRAE STUDIO LLC collects, utilizes, stores, shares, and protects your information when you visit our website (<strong>amirae.studio</strong>), submit quote inquiries, interact with our interactive 3D WebGL viewers, or engage our studio for custom 3D modeling, additive manufacturing, rapid prototyping, and digital asset development services.
        </p>
        <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 text-xs font-mono text-gray-800 space-y-1">
          <div><strong className="text-black">Data Controller Entity:</strong> AMIRAE STUDIO LLC</div>
          <div><strong className="text-black">Registered Address:</strong> Thirunagar, Madurai, Tamil Nadu, 625006, India</div>
          <div><strong className="text-black">Primary Contact:</strong> contact@amirae.studio | +91 8951478989</div>
        </div>
      </>
    ),
  },
  {
    id: "section-2",
    number: "2",
    title: "Data We Collect",
    content: (
      <>
        <p>
          We collect several categories of information depending on your level of interaction with our website and studio services:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Identity &amp; Contact Data:</strong> Full name, professional title, company name, email address, physical billing/shipping address, and telephone number provided when requesting a quote or contacting our team.
          </li>
          <li>
            <strong>Technical Project Data &amp; CAD Specifications:</strong> 2D sketches, 3D CAD files (.STEP, .STL, .OBJ, .FBX, .BLEND), dimensional constraints, material preferences, print tolerances, and project briefs submitted for quotation or fabrication.
          </li>
          <li>
            <strong>Transaction &amp; Commercial Billing Data:</strong> Order records, milestone payment confirmations, invoice details, and tax identification numbers. Note that direct credit card payments are processed securely by PCI-DSS compliant third-party payment gateways; we do not store raw card numbers.
          </li>
          <li>
            <strong>Technical &amp; Device Usage Data:</strong> Internet protocol (IP) address, browser type and version, time zone setting, operating system, WebGL GPU rendering profile (used to optimize real-time 3D canvas performance), and interaction analytics.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "section-3",
    number: "3",
    title: "How We Collect Your Personal Data",
    content: (
      <>
        <p>
          We collect personal and technical data through the following direct and automated channels:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Direct Interactions:</strong> When you complete our online &ldquo;Request a Quote&rdquo; form, email our studio directly, subscribe to updates, or correspond with our directors regarding a Statement of Work (SOW).
          </li>
          <li>
            <strong>File Uploads &amp; Cloud Asset Transfers:</strong> When you upload 3D models, reference imagery, or technical engineering drawings for quote evaluation or production.
          </li>
          <li>
            <strong>Automated Technologies:</strong> As you navigate through our site, automated cookies, server logs, and WebGL diagnostic scripts collect technical device metrics to provide smooth visual framerates.
          </li>
          <li>
            <strong>Community Platforms &amp; Crowdfunding:</strong> When you support or comment on AMIRAE STUDIO campaigns (such as MakerWorld crowdfunding or social channels), we may receive public backer identifiers in accordance with platform policies.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "section-4",
    number: "4",
    title: "How We Use Your Personal Data",
    content: (
      <>
        <p>
          We only process your personal data where we have a lawful legal basis. Specifically, we use your information to:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
          <div className="p-3.5 rounded-xl bg-white border border-gray-200">
            <h4 className="font-bold text-xs uppercase tracking-wider text-teal-800 font-mono mb-1">1. Commercial Execution</h4>
            <p className="text-xs text-gray-600">Draft customized Statements of Work, calculate fabrication pricing, model CAD assets, and fulfill physical print orders.</p>
          </div>
          <div className="p-3.5 rounded-xl bg-white border border-gray-200">
            <h4 className="font-bold text-xs uppercase tracking-wider text-teal-800 font-mono mb-1">2. Client Communications</h4>
            <p className="text-xs text-gray-600">Provide milestone status updates, design review previews, revision requests, and logistics tracking numbers.</p>
          </div>
          <div className="p-3.5 rounded-xl bg-white border border-gray-200">
            <h4 className="font-bold text-xs uppercase tracking-wider text-teal-800 font-mono mb-1">3. Invoicing &amp; Compliance</h4>
            <p className="text-xs text-gray-600">Issue commercial tax invoices, manage payments, and satisfy statutory tax and financial record-keeping mandates.</p>
          </div>
          <div className="p-3.5 rounded-xl bg-white border border-gray-200">
            <h4 className="font-bold text-xs uppercase tracking-wider text-teal-800 font-mono mb-1">4. Performance Optimization</h4>
            <p className="text-xs text-gray-600">Benchmark WebGL 3D rendering framerates across browser engines to guarantee seamless interactive experiences.</p>
          </div>
        </div>
      </>
    ),
  },
  {
    id: "section-5",
    number: "5",
    title: "Client CAD Files, NDA & Strict Confidentiality",
    content: (
      <>
        <p>
          At AMIRAE STUDIO LLC, we recognize that your CAD models, prototype specifications, and industrial concepts represent critical intellectual property.
        </p>
        <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 space-y-2">
          <div className="font-bold text-xs uppercase font-mono tracking-wider">Confidentiality Guarantee:</div>
          <ul className="list-disc pl-5 text-xs sm:text-sm space-y-1">
            <li>We do not sell, rent, license, or publicly showcase your proprietary 3D CAD files or unreleased product designs without explicit prior written authorization.</li>
            <li>All studio engineers, modelers, and fabrication partners are bound by strict non-disclosure obligations.</li>
            <li>We readily sign bilateral or client-provided Non-Disclosure Agreements (NDAs) prior to receiving confidential technical assets.</li>
          </ul>
        </div>
      </>
    ),
  },
  {
    id: "section-6",
    number: "6",
    title: "Disclosures of Your Personal Data",
    content: (
      <>
        <p>
          We do not sell personal data to data brokers or advertising exchanges. We may share necessary data with trusted third-party service providers under strict data processing agreements:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Cloud Infrastructure &amp; Hosting:</strong> Vercel and Supabase for secure application hosting, database storage, and high-speed global content delivery.</li>
          <li><strong>Logistics &amp; Courier Carriers:</strong> International and domestic shipping partners (e.g., DHL, FedEx, India Post) to deliver physical 3D prints, scale models, and prototypes to your specified address.</li>
          <li><strong>Payment Processors:</strong> Certified, PCI-compliant payment gateways handling merchant payments and wire reconciliations.</li>
          <li><strong>Legal &amp; Regulatory Authorities:</strong> When required by court order, subpoena, or applicable regulatory mandates in jurisdictions where we operate.</li>
        </ul>
      </>
    ),
  },
  {
    id: "section-7",
    number: "7",
    title: "International Data Transfers",
    content: (
      <>
        <p>
          AMIRAE STUDIO LLC conducts operations across India, the United States, and internationally. Consequently, personal data and project files may be accessed or transferred across international borders.
        </p>
        <p>
          When transferring data internationally, we ensure that appropriate safeguards are instituted, such as Standard Contractual Clauses (SCCs), robust cloud encryption protocols, and adherence to international cross-border data transfer regulations.
        </p>
      </>
    ),
  },
  {
    id: "section-8",
    number: "8",
    title: "Data Security & Storage Practices",
    content: (
      <>
        <p>
          We have implemented robust technical, organizational, and physical security measures designed to safeguard your information against unauthorized access, alteration, disclosure, or accidental destruction:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>End-to-end SSL/TLS encryption for all data transmitted across our web platform.</li>
          <li>Access control policies restricting sensitive project data and CAD archives strictly to authorized personnel directly involved in your project.</li>
          <li>Encrypted cloud backups and secure repository management for proprietary 3D assets.</li>
        </ul>
      </>
    ),
  },
  {
    id: "section-9",
    number: "9",
    title: "Data Retention Schedule",
    content: (
      <>
        <p>
          We retain personal data only for as long as necessary to fulfill the purposes for which it was collected, including legal, accounting, tax, or reporting requirements:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left border border-gray-200 rounded-xl overflow-hidden mt-2">
            <thead className="bg-gray-100 font-mono text-gray-700 uppercase">
              <tr>
                <th className="p-3 border-b">Data Category</th>
                <th className="p-3 border-b">Retention Period</th>
                <th className="p-3 border-b">Purpose</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 font-normal">
              <tr>
                <td className="p-3 font-semibold">Quote Inquiries &amp; Leads</td>
                <td className="p-3">24 Months</td>
                <td className="p-3">Follow-up discussions and pricing estimates</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">Client 3D CAD Files &amp; Production Specs</td>
                <td className="p-3">Duration of project + 12 Months</td>
                <td className="p-3">Warranty revisions &amp; repeat print runs (or deleted earlier upon written request)</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">Invoicing &amp; Financial Records</td>
                <td className="p-3">7 Years</td>
                <td className="p-3">Statutory tax and commercial auditing compliance</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    ),
  },
  {
    id: "section-10",
    number: "10",
    title: "Your Legal Privacy Rights",
    content: (
      <>
        <p>
          Depending on your location (including the European Economic Area under GDPR, California under CCPA/CPRA, and India under the Digital Personal Data Protection Act), you have substantial rights regarding your personal information:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Right to Access:</strong> You can request a copy of the personal data we hold about you.</li>
          <li><strong>Right to Rectification:</strong> You can request corrections to incomplete or inaccurate data.</li>
          <li><strong>Right to Erasure (&ldquo;Right to be Forgotten&rdquo;):</strong> You may request deletion of your personal data and uploaded CAD files where no overriding legal obligation exists.</li>
          <li><strong>Right to Data Portability:</strong> You can request your digital project data in a structured, machine-readable format.</li>
          <li><strong>Right to Opt-Out:</strong> You can unsubscribe from non-transactional marketing communications at any time.</li>
        </ul>
        <p className="mt-3">
          To exercise any of these rights, email our data desk at <a href="mailto:contact@amirae.studio" className="font-bold text-teal-700 underline">contact@amirae.studio</a>. We respond to verified requests within 30 days.
        </p>
      </>
    ),
  },
  {
    id: "section-11",
    number: "11",
    title: "Cookies & Tracking Technologies",
    content: (
      <>
        <p>
          Our website uses essential and analytics cookies to maintain website integrity, remember user preferences, and analyze navigation patterns.
        </p>
        <p>
          You can set your browser to refuse all or some browser cookies. However, if you disable essential cookies, certain features of our interactive 3D viewers and quotation portals may not function properly.
        </p>
      </>
    ),
  },
  {
    id: "section-12",
    number: "12",
    title: "Third-Party Links & External Platforms",
    content: (
      <>
        <p>
          Our website may contain links to third-party platforms such as MakerWorld, Instagram, Discord, and GitHub. Clicking on those links may allow third parties to collect or share data about you. We do not control these third-party websites and encourage you to review their independent privacy policies.
        </p>
      </>
    ),
  },
  {
    id: "section-13",
    number: "13",
    title: "Children’s Privacy",
    content: (
      <>
        <p>
          Our website and commercial services are strictly directed to businesses, creators, and individuals who are at least 18 years of age. We do not knowingly collect personal data from children under 18. If we discover that a minor has provided us with personal data, we will promptly delete it.
        </p>
      </>
    ),
  },
  {
    id: "section-14",
    number: "14",
    title: "Changes to This Privacy Policy",
    content: (
      <>
        <p>
          We may update this Privacy Policy from time to time to reflect operational, technological, or legal developments. When revisions occur, we will update the &ldquo;Last Updated&rdquo; date at the top of this document. Continued use of our website or services following notice of changes constitutes acceptance of the updated policy.
        </p>
      </>
    ),
  },
  {
    id: "section-15",
    number: "15",
    title: "Official Contact & Notice Information",
    content: (
      <>
        <p>
          If you have questions, feedback, or wish to exercise your data privacy rights, please contact our designated compliance officer at:
        </p>
        <div className="p-4 rounded-2xl bg-white border border-black/10 text-xs font-mono space-y-1.5 shadow-2xs">
          <div className="font-bold text-gray-950 text-sm">AMIRAE STUDIO LLC</div>
          <div><span className="text-gray-500">Attention:</span> Legal &amp; Data Protection Desk</div>
          <div><span className="text-gray-500">Email:</span> <a href="mailto:contact@amirae.studio" className="text-teal-700 underline font-bold">contact@amirae.studio</a></div>
          <div><span className="text-gray-500">Telephone:</span> +91 8951478989</div>
          <div><span className="text-gray-500">Address:</span> Thirunagar, Madurai, Tamil Nadu, 625006, India</div>
          <div><span className="text-gray-500">Website:</span> <a href="https://www.amirae.studio" className="text-teal-700 underline font-bold">www.amirae.studio</a></div>
        </div>
      </>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalDocViewer
      title="Privacy Policy"
      lastUpdated="March 2025"
      effectiveDate="January 1, 2025"
      version="v2.4"
      description="AMIRAE STUDIO LLC is committed to safeguarding your privacy, client CAD data, and confidential commercial 3D specifications. This policy outlines our data collection, usage, security, and disclosure practices."
      sections={PRIVACY_SECTIONS}
      relatedDoc={{
        title: "Terms and Conditions",
        href: "/terms-and-conditions",
        description: "Review our commercial fabrication agreements, milestone terms, CAD licensing, and payment policies.",
      }}
    />
  );
}
