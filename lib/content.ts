// Single source of truth for studio copy used across pages.

export const STUDIO = {
  name: "Amirae Studio",
  legalName: "AMIRAE STUDIO LLC",
  email: "contact@amirae.studio",
  address: "30 N Gould St Ste R Sheridan, WY 82801",
  logo: "https://joewkzjnrikotpgzyywh.supabase.co/storage/v1/object/public/gallery/amiraeimages/logo2.png",
  makerworld:
    "https://makerworld.com/en/crowdfunding/313-framecity-high-detailed-cities-in-frames",
  socials: [
    { name: "Instagram", href: "https://www.instagram.com/amirae__studio/" },
    { name: "Discord", href: "https://discord.com/channels/1529705981926182953" },
    { name: "MakerWorld", href: "https://makerworld.com/en/crowdfunding/313-framecity-high-detailed-cities-in-frames" },
  ],
};

export const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Work", href: "/#work" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export type Project = {
  id: string;
  title: string;
  status: string;
  summary: string;
  desc: string;
  tags: string[];
  image: string;
  tint: string;
  link?: string;
};

// Current images are 1:1, 2:3 and 16:9 posters with text near the edges, so titles get clipped;
// upload ~1200×1440 versions with the text kept inside the centre.
export const PROJECTS: Project[] = [
  {
    id: "01",
    title: "FrameCity",
    status: "Live — Aug 2026",
    summary: "Hand-modeled cities, turned into framed 3D art",
    desc: "A curated collection of hand-modeled cities, transformed into refined, customizable 3D art. Every city includes its most iconic districts, skylines and landmarks, modeled for maximum print quality.",
    tags: ["3D Printing", "Miniatures"],
    image: "https://joewkzjnrikotpgzyywh.supabase.co/storage/v1/object/public/gallery/amiraeimages/Launch-thumbnail1.jpg",
    tint: "#d8ecff",
    link: "https://frame-city.vercel.app/",
  },
  {
    id: "02",
    title: "Maze Foundry",
    status: "Upcoming",
    summary: "A modular marble-maze builder you can print",
    desc: "Design your own path by combining crafted modular pieces. Shape every twist, turn and obstacle, preview it in 3D and export a ready-to-print masterpiece.",
    tags: ["Web 3D", "3D Printing"],
    image: "https://joewkzjnrikotpgzyywh.supabase.co/storage/v1/object/public/gallery/amiraeimages/maze3.png",
    tint: "#e9e9e9",
    link: "https://maze-foundry.vercel.app/",
  },
  {
    id: "03",
    title: "Food Clickers",
    status: "Upcoming",
    summary: "Tactile fidget toys inspired by food we love",
    desc: "Fruits, desserts and favourite snacks reimagined as charming little clickers — designed to bring fun and satisfying interaction to every click.",
    tags: ["Product Art", "Tabletop"],
    image: "https://joewkzjnrikotpgzyywh.supabase.co/storage/v1/object/public/gallery/amiraeimages/click.jpg",
    tint: "#fbefc4",
  },
  {
    id: "04",
    title: "Heritage Buildings",
    status: "Upcoming",
    summary: "Monuments and towers as printable scale models",
    desc: "Iconic buildings and timeless towers, each hand-crafted by 3D artists to capture proportion, silhouette and façade detail in a printable model.",
    tags: ["Architecture", "3D Models"],
    image: "https://joewkzjnrikotpgzyywh.supabase.co/storage/v1/object/public/gallery/20260722_130751.jpg",
    tint: "#dfe6f0",
  },
  {
    id: "05",
    title: "Aquatic Flexi Toys",
    status: "Upcoming",
    summary: "Wiggly, printable sea creatures for little hands",
    desc: "Happy fish, cute crabs, friendly turtles and playful dolphins — colourful flexi toys designed to twist, wiggle and explore.",
    tags: ["3D Printing", "Toys"],
    image: "https://joewkzjnrikotpgzyywh.supabase.co/storage/v1/object/public/gallery/amiraeimages/aqua.jpg",
    tint: "#ffd9e8",
  },
];

export type Service = {
  id: string;
  number: string;
  title: string;
  short: string;
  description: string;
  deliverables: string[];
  clients: string;
  engagement: string;
  timeline: string;
  image: string;
};

export const SERVICES: Service[] = [
  {
    id: "3d-modeling",
    number: "01",
    title: "3D Modeling & Digital Assets",
    short: "Production-grade meshes, PBR texturing and cinematic renders for products, games and media.",
    description:
      "We sculpt, model and optimize production-grade 3D assets for commercial products, digital media, gaming, VFX and real-time experiences.",
    deliverables: [
      "Subdivision-ready CAD, OBJ, FBX and GLTF models",
      "4K/8K PBR material maps",
      "High-poly sculpts and quad-topology game assets",
      "Lighting setups and studio-grade render passes",
    ],
    clients: "Consumer electronics brands, agencies, game studios, indie developers",
    engagement: "Milestone-based fees or licensing per asset pack",
    timeline: "3–10 business days per batch",
    image: "https://i.pinimg.com/736x/8e/e6/65/8ee6655b8a9d0b85af1f597c04d2d677.jpg", //ADD IMAGE HERE — /f5.jpg is missing from public/ (currently 404s).
  },
  {
    id: "product-design",
    number: "02",
    title: "Product Design & Prototyping",
    short: "From concept sketch to precision CAD and functional prototypes ready for tooling.",
    description:
      "We translate industrial concepts into functional, ergonomic and striking 3D CAD files — validated with rapid physical prototypes.",
    deliverables: [
      "Parametric STEP / IGES precision CAD",
      "Design for Additive Manufacturing tolerance checks",
      "Exploded views and assembly specifications",
      "Photorealistic product visualization",
    ],
    clients: "Hardware startups, product manufacturers, Kickstarter creators",
    engagement: "50% upfront, 50% on final CAD sign-off",
    timeline: "2–4 weeks",
    image: "https://joewkzjnrikotpgzyywh.supabase.co/storage/v1/object/public/gallery/amiraeimages/click.jpg",
  },
  {
    id: "3d-printing",
    number: "03",
    title: "3D Printing & Fabrication",
    short: "High-resolution FDM and resin production of miniatures, kits and display pieces.",
    description:
      "Physical fabrication and small-batch production of intricate miniatures, framed dimensional art, tabletop models and prototypes.",
    deliverables: [
      "FDM / SLA prints down to 0.05mm layer height",
      "Multi-part, supportless assembly kits",
      "Framed miniature display pieces",
      "Post-processed, cured and packaged shipments",
    ],
    clients: "Collectors, architecture firms, interior designers, consumers",
    engagement: "Unit sales, custom fabrication fees, batch runs",
    timeline: "5–14 business days incl. QA",
    image: "https://i.pinimg.com/736x/7e/7f/9c/7e7f9c6faa36041e2dc4a0cd552cbaee.jpg",
  },
  {
    id: "architectural",
    number: "04",
    title: "Architectural Scale Models",
    short: "Landmarks, skylines and heritage structures reconstructed at miniature scale.",
    description:
      "Digital reconstruction and physical scale modeling of monuments, civic landmarks and custom urban topographies.",
    deliverables: [
      "Accurate scale architectural data sets",
      "Wall-mountable framed skyline reliefs",
      "Heritage conservation archives and printable meshes",
      "Interactive architectural walk-through assets",
    ],
    clients: "Cultural institutions, heritage projects, developers, collectors",
    engagement: "Fixed-price contracts and limited-edition runs",
    timeline: "2–6 weeks",
    image: "https://joewkzjnrikotpgzyywh.supabase.co/storage/v1/object/public/gallery/amiraeimages/london-table.jpg",
  },
  {
    id: "web-3d",
    number: "05",
    title: "Interactive 3D Web",
    short: "WebGL, Three.js and Next.js experiences that put your 3D assets in the browser.",
    description:
      "Web engineering that bridges 3D assets with modern full-stack apps — configurators, viewers and immersive brand sites.",
    deliverables: [
      "WebGL / Three.js / React Three Fiber viewers",
      "3D product configurators with live material swaps",
      "High-performance Next.js applications",
      "Automated asset compression pipelines",
    ],
    clients: "E-commerce retailers, SaaS platforms, design agencies",
    engagement: "Fixed-scope contracts or monthly retainers",
    timeline: "2–8 weeks",
    image: "https://joewkzjnrikotpgzyywh.supabase.co/storage/v1/object/public/gallery/amiraeimages/images.jpg",
  },
];

export const PROCESS = [
  {
    step: "01",
    title: "Discovery",
    desc: "We review your sketches, references and constraints, then write a Statement of Work with fixed deliverables and timelines.",
  },
  {
    step: "02",
    title: "Modeling",
    desc: "Our artists sculpt high-fidelity meshes, verify topology and share photorealistic previews for your approval.",
  },
  {
    step: "03",
    title: "Prototype & QA",
    desc: "For testing work we slice, test-print and check tolerances to guarantee mechanical integrity.",
  },
  {
    step: "04",
    title: "Handover",
    desc: "Clean CAD/STL/source files transfer with full commercial rights; physical units ship with tracked global delivery.",
  },
];

export const STATS = [
  { value: "10+", label: "Years of hands-on 3D & engineering experience" },
  { value: "$17k+", label: "Crowdfunded for FrameCity on MakerWorld" },
  { value: "100%", label: "Commercial IP transferred to clients" },
  { value: "24h", label: "Response time on every inquiry" },
];

export const FAQS = [
  {
    q: "What services does Amirae Studio provide?",
    a: "We deliver production-ready 3D CAD/STL files, custom physical miniatures (like our FrameCity collection), architectural scale models, rapid product prototypes and interactive WebGL/Three.js web experiences.",
  },
  {
    q: "How is project pricing structured?",
    a: "Bespoke projects run on milestone contracts — typically a 50% deposit at kickoff and 50% on final sign-off and file handover. We also offer fixed-price asset licensing, direct product sales and monthly engineering retainers.",
  },
  {
    q: "What is the typical turnaround time?",
    a: "Digital modeling batches usually take 3–10 business days. Complex physical fabrication, multi-part collections or custom architectural models take 2–4 weeks, including quality inspection and packing.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes. We work with brands, hardware startups, architecture firms and collectors worldwide. Digital assets are delivered via secure cloud repositories and physical prints ship globally with tracking.",
  },
  {
    q: "Who owns the rights to custom models?",
    a: "Once the final milestone is settled, full commercial IP and fabrication rights for commissioned assets transfer to you. We're happy to sign a mutual NDA before kickoff.",
  },
];
