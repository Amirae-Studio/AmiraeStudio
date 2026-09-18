import { Folder, Image as ImageIcon } from 'lucide-react';

const PROJECTS = [
  {
    id: '01',
    title: 'FrameCity',
    date: 'AUG 1, 2026',
    desc: 'A curated collection of hand-modeled cities, transformed into refined, customizable 3D art model. Every city in our library includes its most iconic districts, skylines, and landmarks, carefully hand-modeled for maximum print quality and visual impact.',
    tags: ['3D PRINTING', 'MINIATURES'],
    bgColor: 'bg-[#4db8ff]', // Cyan
    textColor: 'text-black',
    borderColor: 'border-black',
    image: '/framecity.png',
    link: 'https://frame-city.vercel.app/',
  },
  {
    id: '02',
    title: 'Maze Foundry',
    date: 'JUN 14, 2026',
    desc: 'Turns the simple joy of a marble maze into a world of endless possibilities. Design your own path by combining beautifully crafted modular pieces. Shape every twist, turn, elevation, and obstacle exactly the way you envision it.Preview your creation in 3D and export it as a ready-to-print masterpiece.',
    tags: ['3D PRINTING', 'MINIATURES'],
    bgColor: 'bg-[#1a1a1a]', // Black
    textColor: 'text-white',
    borderColor: 'border-[#333]',
    image: '/maze.png',
    link: 'https://maze-foundry.vercel.app/',
  },
  {
    id: '03',
    title: 'Food Clickers',
    date: 'UpComing',
    desc: 'A playful collection of tactile fidget toys inspired by the foods we all love.From fresh fruits and vegetables to all foods, ice-creams, cakes, and desserts, each familiar favorite is reimagined as a charming little creation.Thoughtfully designed to bring a touch of fun, delight, and satisfying interaction to every click.',
    tags: ['PRODUCT ART', 'TABLETOP'],
    bgColor: 'bg-[#f0c239]', // Yellow
    textColor: 'text-black',
    borderColor: 'border-black',
    image: '/click.png',
    link: '#',
  },
  {
    id: '04',
    title: 'Heritage Buildings',
    date: 'UpComing',
    desc: 'A refined collection of monuments, iconic buildings, celebrated structures, and timeless towers, each thoughtfully recreated as a detailed 3D-printable model.Each model is meticulously hand-crafted by skilled 3D artists, capturing the proportions, form, silhouettes, façades, and distinctive details of each landmark.',
    tags: ['ARCHITECTURE', '3D MODELS'],
    bgColor: 'bg-[#4db8ff]', // Cyan
    textColor: 'text-white',
    borderColor: 'border-white/20',
    image: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&q=80&w=1200',
    link: '#',
  },
  {
    id: '05',
    title: 'Aquatic Flexi Toys',
    date: 'UpComing',
    desc: 'Dive into a world of underwater fun with our collection of adorable and playful flexi toys!Meet happy little fish, cute crabs, friendly turtles, playful dolphins, and more lovable and colorful sea creatures, all designed for little hands to play, twist, wiggle, and explore.',
    tags: ['3D PRINTING', 'MINIATURES'],
    bgColor: 'bg-[#e6005c]', // Pink
    textColor: 'text-white',
    borderColor: 'border-white/20',
    image: '/aqua.jpg',
    link: '#',
  },
];

export default function ProductSection() {
  return (
    <div id="projects" className="relative pt-16 md:pt-32 font-[family-name:var(--font-your-hero-font)]">
      {PROJECTS.map((project, index) => (
        <div 
          key={project.id} 
          className="sticky top-12 md:top-20 flex flex-col pt-10 md:pt-16 mx-4 sm:mx-8 md:mx-32 mb-16 md:mb-0 drop-shadow-xl"
          style={{ zIndex: index * 10 }}
        >
          {/* TAB LAYER */}
          <div className="absolute top-0 left-0 w-full h-10 md:h-16 pointer-events-none z-20">
            <div 
              className={`absolute bottom-[-2px] h-full pointer-events-auto flex items-center px-4 md:px-8 gap-2 font-mono text-xs md:text-sm font-bold tracking-widest rounded-t-2xl ${project.bgColor} ${project.textColor}`}
              style={{
                left: `max(0px, calc(${index} * 8vw))` /* Scaled down offset for mobile, expands on desktop */,
                minWidth: '140px',
              }}
            >
              <Folder size={14} className="opacity-80" /> PROJECT {project.id}
            </div>
          </div>

          {/* BODY LAYER */}
          <div className={`flex-1 w-full ${project.bgColor} ${project.textColor} ${project.borderColor} overflow-hidden rounded-3xl rounded-tl-none flex flex-col md:flex-row relative z-10 border-2 shadow-2xl`}>
            
            {/* Left Column: Project Info */}
            <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-16 flex flex-col justify-between">
              <div>
                {/* Date / Status */}
                <div className="font-mono text-xs md:text-sm flex items-center gap-3 uppercase tracking-wider mb-6 md:mb-8">
                  <div className={`w-3 h-3 rounded-full ${project.textColor === 'text-white' ? 'bg-white' : 'bg-black'}`} />
                  {project.date}
                </div>

                {/* Title & Desc */}
                <h2 className="text-3xl sm:text-4xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-none mb-4 md:mb-6 text-balance">
                  {project.title}
                </h2>
                <p className="text-base md:text-xl opacity-90 max-w-md leading-relaxed">
                  {project.desc}
                </p>

                {/* CTA Link */}
                <a 
                  href={project.link} 
                  target={project.link.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-6 md:mt-8 font-mono text-sm uppercase tracking-widest hover:opacity-70 transition-opacity"
                >
                  View Project <span className="text-lg leading-none">↗</span>
                </a>
              </div>

              {/* Bottom Tags */}
              <div className="flex flex-wrap gap-2 mt-8 md:mt-12">
                {project.tags.map(tag => (
                  <span 
                    key={tag} 
                    className={`font-mono text-xs md:text-sm px-3.5 py-1.5 font-bold rounded-full ${
                      project.textColor === 'text-white' ? 'bg-white text-black' : 'bg-black text-white'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Column: Imagery */}
            <div className={`w-full md:w-1/2 h-[350px] sm:h-[400px] md:h-auto border-t-2 md:border-t-0 md:border-l-2 ${project.borderColor} p-4 sm:p-6 md:p-12 relative flex items-center justify-center`}>
              <div className={`relative w-full h-full max-h-[70vh] rounded-2xl border-2 ${project.borderColor} overflow-hidden shadow-inner`}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                />
              </div>
            </div>

          </div>
        </div>
      ))}
    </div>
  );
}