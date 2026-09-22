export const STUDIO = {
  name: "AMIRAE STUDIO LLC",
  email: "contact@amirae.studio",
  phone: "8951478989",
  address: "Thirunagar, Madurai, Tamil Nadu 625006, India",
  hours: "Mon – Fri · 9:00 AM – 6:00 PM EST",
  logo: "https://joewkzjnrikotpgzyywh.supabase.co/storage/v1/object/public/gallery/brand/amirae_studio_logo-removebg-preview.webp",
  instagram: "https://www.instagram.com/amirae__studio/",
  discord: "https://discord.com/channels/1529705981926182953",
  makerworld: "https://makerworld.com/en/crowdfunding/313-framecity-high-detailed-cities-in-frames",
};

export const WEB3FORMS_KEY = "e52fdb81-d925-4fa7-97a3-f37c9bf6032a";

export const NAV_LINKS = [
  { name: "work", href: "/#work" },
  { name: "services", href: "/services" },
  { name: "about", href: "/about" },
  { name: "faq", href: "/#faq" },
  { name: "contact", href: "/#contact" },
];

export type Tone = "mint" | "sky" | "blush" | "butter" | "peach" | "lilac";

export const TONE_BG: Record<Tone, string> = {
  mint: "bg-mint",
  sky: "bg-sky",
  blush: "bg-blush",
  butter: "bg-butter",
  peach: "bg-peach",
  lilac: "bg-lilac",
};

export const TONE_TEXT: Record<Tone, string> = {
  mint: "text-teal",
  sky: "text-blue",
  blush: "text-pink",
  butter: "text-orange",
  peach: "text-orange",
  lilac: "text-blue",
};

export const PROJECTS = [
  {
    id: "framecity",
    title: "FrameCity",
    mark: "F",
    tone: "sky" as Tone,
    status: "live",
    tags: ["3D printing", "miniatures"],
    blurb: "Hand-modeled cities, framed.",
    desc: "A curated collection of hand-modeled cities turned into refined, customizable 3D art. Every city carries its most iconic districts, skylines and landmarks, modeled for maximum print quality.",
    image: "/f1.jpg",
    link: "https://frame-city.vercel.app/",
  },
  {
    id: "maze",
    title: "Maze Foundry",
    mark: "M",
    tone: "peach" as Tone,
    status: "live",
    tags: ["3D printing", "design tool"],
    blurb: "Build your own marble maze.",
    desc: "Turns the simple joy of a marble maze into endless possibilities. Combine modular pieces, shape every twist and elevation, preview it in 3D and export it ready to print.",
    image: "/maze.png",
    link: "https://maze-foundry.vercel.app/",
  },
  {
    id: "clickers",
    title: "Food Clickers",
    mark: "C",
    tone: "blush" as Tone,
    status: "coming soon",
    tags: ["product art", "tabletop"],
    blurb: "Fidget toys you want to eat.",
    desc: "A playful collection of tactile fidget toys inspired by the foods we love. Fruits, ice-creams, cakes and desserts, reimagined as charming little clickers.",
    image: "/click.png",
    link: null,
  },
  {
    id: "aqua",
    title: "Aquatic Flexi",
    mark: "A",
    tone: "mint" as Tone,
    status: "coming soon",
    tags: ["3D printing", "toys"],
    blurb: "Wiggly friends from the sea.",
    desc: "Happy little fish, cute crabs, friendly turtles and playful dolphins. Flexi toys designed for little hands to twist, wiggle and explore.",
    image: "/aqua.jpg",
    link: null,
  },
  {
    id: "heritage",
    title: "Heritage Buildings",
    mark: "H",
    tone: "butter" as Tone,
    status: "coming soon",
    tags: ["architecture", "3D models"],
    blurb: "Landmarks, in miniature.",
    desc: "Monuments, iconic buildings and timeless towers recreated as detailed 3D-printable models, capturing the proportions, silhouettes and façades of each landmark.",
    image: "/paris-frame.jpg",
    link: null,
  },
];

export const SERVICES = [
  {
    id: "3d-modeling",
    short: "3D modeling",
    title: "3D Modeling & Digital Asset Creation",
    subtitle: "High-fidelity virtual assets & PBR texturing",
    badge: "Digital assets",
    tone: "sky" as Tone,
    description:
      "We sculpt, model, and optimize production-grade 3D assets for commercial products, digital media, gaming, VFX, and real-time interactive experiences.",
    deliverables: [
      "Subdivision-ready CAD, OBJ, FBX, and GLTF models",
      "4K/8K PBR material maps (Normal, Roughness, Metallic, AO)",
      "High-poly sculpts and quad-topology low-poly game assets",
      "Rigging, lighting setups, and studio-grade cinematic render passes",
    ],
    clients: "Consumer electronics brands, digital marketing agencies, game studios, indie developers",
    revenueStream: "Milestone-based project fees or commercial licensing per asset pack",
    timeline: "3 to 10 business days per asset batch",
  },
  {
    id: "product-design",
    short: "product prototyping",
    title: "3D Product Design & Rapid Prototyping",
    subtitle: "From concept sketch to precision manufacturing",
    badge: "Industrial design",
    tone: "blush" as Tone,
    description:
      "Comprehensive product design services translating industrial concepts into functionally viable, ergonomic, and aesthetically striking 3D CAD files ready for tooling.",
    deliverables: [
      "Parametric SolidWorks / STEP / IGES precision CAD models",
      "Design for Additive Manufacturing (DfAM) tolerance checks",
      "Exploded view technical diagrams and assembly specifications",
      "Photorealistic product visualization & marketing mockups",
    ],
    clients: "Hardware startups, consumer product manufacturers, Kickstarter creators",
    revenueStream: "Custom milestone contracts (50% upfront, 50% upon final CAD signoff)",
    timeline: "2 to 4 weeks depending on mechanical complexity",
  },
  {
    id: "3d-printing",
    short: "3D printing",
    title: "3D Printing & Physical Model Fabrication",
    subtitle: "Precision FDM & resin physical production",
    badge: "Physical goods",
    tone: "butter" as Tone,
    description:
      "Physical fabrication and small-batch production of intricate miniatures, framed dimensional art pieces (like FrameCity), tabletop models, and physical product prototypes.",
    deliverables: [
      "High-resolution FDM/SLA resin prints (down to 0.05mm layer height)",
      "Multi-part supportless assembly kits engineered for clean prints",
      "Framed physical miniature display pieces with protective encasements",
      "Post-processed, cleaned, cured, and packaged physical shipments",
    ],
    clients: "Collectors, architectural firms, interior designers, direct consumers",
    revenueStream: "Direct physical unit sales, custom print fabrication fees, batch manufacturing",
    timeline: "5 to 14 business days including quality assurance and dispatch",
  },
  {
    id: "architectural",
    short: "architecture & heritage",
    title: "Architectural & Heritage Scale Modeling",
    subtitle: "Historic landmarks & urban miniature displays",
    badge: "Scale architecture",
    tone: "peach" as Tone,
    description:
      "Digital reconstruction and physical scale modeling of historical monuments, civic landmarks, and custom urban architectural topographies.",
    deliverables: [
      "Accurate scale miniature 3D architectural data sets",
      "Wall-mountable framed skyline reliefs (e.g. London, Paris, Tokyo)",
      "Heritage conservation 3D digital archives and printable meshes",
      "Interactive digital 3D architectural walk-through assets",
    ],
    clients: "Cultural institutions, municipal heritage projects, real estate developers, collectors",
    revenueStream: "Fixed-price project contracts and limited-edition physical collection runs",
    timeline: "2 to 6 weeks for custom architectural projects",
  },
  {
    id: "digital-ecosystems",
    short: "interactive 3D web",
    title: "Interactive 3D Web & Visualization Engineering",
    subtitle: "WebGL, Three.js & modern interactive frameworks",
    badge: "Web & software",
    tone: "mint" as Tone,
    description:
      "Custom web software engineering bridging 3D visual assets with modern full-stack web applications, interactive 3D model configurators, and immersive brand websites.",
    deliverables: [
      "Custom WebGL / Three.js / React Three Fiber interactive 3D viewers",
      "Web-based 3D product configurators with live texture / color swaps",
      "High-performance responsive Next.js / React web applications",
      "Automated asset compression pipelines and model viewers",
    ],
    clients: "E-commerce retailers, SaaS platforms, design agencies seeking 3D web interactivity",
    revenueStream: "Fixed-scope software development contracts and monthly technical retainers",
    timeline: "2 to 8 weeks based on software requirements",
  },
];

export const REVENUE_STREAMS = [
  {
    title: "Custom project fees",
    tag: "Primary revenue",
    desc: "Direct B2B and B2C bespoke client engagements with structured milestone billing (e.g., 50% deposit upon kickoff, 50% upon delivery of final CAD/3D assets).",
  },
  {
    title: "Digital asset licensing",
    tag: "Recurring digital",
    desc: "Commercial and personal licensing of proprietary 3D print files, STL meshes, and digital asset packs sold via direct digital distribution and MakerWorld.",
  },
  {
    title: "Physical product sales",
    tag: "Commercial e-commerce",
    desc: "Direct sales of finished 3D printed art, framed miniature cityscapes (FrameCity), and physical scale models shipped directly to clients worldwide.",
  },
  {
    title: "Software & web engineering",
    tag: "Service contracts",
    desc: "Contract-based software engineering and monthly retainers for interactive 3D product configurators, WebGL integrations, and high-performance studio websites.",
  },
];

export const PROCESS = [
  {
    title: "discovery & blueprint",
    desc: "We review your sketches, CAD references, functional constraints and commercial targets, then draft a Statement of Work with fixed deliverables and timelines.",
  },
  {
    title: "modeling & sculpting",
    desc: "Our artists sculpt high-fidelity meshes, verify topology and tolerances, and share photorealistic 4K render previews for your approval.",
  },
  {
    title: "prototyping & QA",
    desc: "For physical deliverables we run slicing, tolerance checks and physical test prints so every part fits and holds together.",
  },
  {
    title: "handover & shipping",
    desc: "Clean CAD / STL / source archives are transferred with full commercial rights, and physical units ship worldwide with tracking.",
  },
];

export const FAQ = [
  {
    q: "What exactly does Amirae Studio make?",
    a: "Production-ready 3D CAD/STL files, custom physical 3D miniatures (like our FrameCity collection), architectural scale models, rapid product prototypes, and interactive WebGL / Three.js web experiences.",
  },
  {
    q: "How does pricing and billing work?",
    a: "Bespoke projects run on clear milestone contracts: typically 50% to start and 50% at final sign-off and file handover. We also offer fixed-price asset licensing, direct product sales, and monthly engineering retainers.",
  },
  {
    q: "How long does a project take?",
    a: "Digital modeling and asset batches usually take 3–10 business days. Complex physical fabrication, multi-part miniature collections or custom architectural models take 2–4 weeks, including quality inspection and packing.",
  },
  {
    q: "Do you work with clients outside India and the U.S.?",
    a: "Yes. We work with brands, hardware startups, architecture firms and collectors worldwide. Digital assets are delivered through secure cloud links; physical prints ship globally with tracking.",
  },
  {
    q: "Who owns the models you make for me?",
    a: "You do. Once the final milestone is settled, full commercial IP and fabrication rights for commissioned work transfer to you. We're happy to sign an NDA before kickoff.",
  },
];
