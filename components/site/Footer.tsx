import Link from "next/link";
import { STUDIO } from "@/lib/content";
import { Brand } from "./Header";

const COLUMNS = [
  {
    title: "services",
    links: [
      { name: "All services", href: "/services" },
      { name: "3D modeling & assets", href: "/services#3d-modeling" },
      { name: "Product prototyping", href: "/services#product-design" },
      { name: "3D printing", href: "/services#3d-printing" },
      { name: "Architecture & heritage", href: "/services#architectural" },
      { name: "Interactive 3D web", href: "/services#digital-ecosystems" },
    ],
  },
  {
    title: "work",
    links: [
      { name: "FrameCity", href: "https://frame-city.vercel.app/" },
      { name: "FrameCity on MakerWorld", href: STUDIO.makerworld },
      { name: "Maze Foundry", href: "https://maze-foundry.vercel.app/" },
    ],
  },
  {
    title: "company",
    links: [
      { name: "About us", href: "/about" },
      { name: "Request a quote", href: "/#quote" },
      { name: "Revenue & pricing model", href: "/services#revenue-model" },
      { name: "U.S. & global operations", href: "/services#us-operations" },
      { name: "Contact", href: "/#contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="page-width mt-auto border-t border-line pb-10 pt-14">
      <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
        <div className="flex flex-col items-start gap-5">
          <Brand />
          <p className="max-w-sm text-sm text-muted">
            A 3D design and digital fabrication studio making CAD assets, product prototypes, architectural miniatures and interactive 3D for brands and makers worldwide.
          </p>
          <dl className="grid gap-1 text-[13px] text-muted">
            <div>
              <dt className="inline font-semibold text-ink">Entity · </dt>
              <dd className="inline">{STUDIO.name}</dd>
            </div>
            <div>
              <dt className="inline font-semibold text-ink">Email · </dt>
              <dd className="inline">
                <a href={`mailto:${STUDIO.email}`} className="hover:text-teal">{STUDIO.email}</a>
              </dd>
            </div>
            <div>
              <dt className="inline font-semibold text-ink">Phone · </dt>
              <dd className="inline">
                <a href={`tel:+91${STUDIO.phone}`} className="hover:text-teal">{STUDIO.phone}</a>
              </dd>
            </div>
            <div>
              <dt className="inline font-semibold text-ink">Address · </dt>
              <dd className="inline">{STUDIO.address}</dd>
            </div>
          </dl>
        </div>

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="mb-4 text-lg">{col.title}</h3>
              <ul className="grid gap-2 text-sm text-muted">
                {col.links.map((link) => {
                  const external = link.href.startsWith("http");
                  return (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        target={external ? "_blank" : undefined}
                        rel={external ? "noopener noreferrer" : undefined}
                        className="transition-colors hover:text-ink"
                      >
                        {link.name}
                        {external && " ↗"}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-14 flex flex-col gap-4 text-[13px] text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {STUDIO.name}. All rights reserved.</p>
        <div className="flex items-center gap-5">
          <a href={STUDIO.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-ink">instagram ↗</a>
          <a href={STUDIO.discord} target="_blank" rel="noopener noreferrer" className="rounded-full border border-current px-3 py-1 text-teal">
            join the discord
          </a>
        </div>
      </div>
    </footer>
  );
}
