import { Folder, Image as ImageIcon } from 'lucide-react';

const PROJECTS = [
  {
    id: '01',
    title: 'FrameCity',
    date: 'AUG 6, 2026',
    desc: 'Hand-modelled city skylines, sculpted to fit inside a picture frame — and print without a single support. Earned $1,700+ through crowdfunding on MakerWorld.',
    tags: ['3D PRINTING', 'MINIATURES'],
    bgColor: 'bg-[#4db8ff]', // Cyan
    textColor: 'text-black',
    borderColor: 'border-black',
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=1200',
    link: 'https://frame-city.vercel.app/',
  },
  {
    id: '02',
    title: 'Maze Foundry',
    date: 'JUN 14, 2026',
    desc: 'Used for creating mazes in different sizes, dimensions and shapes as per user requirement.',
    tags: ['3D PRINTING', 'MINIATURES'],
    bgColor: 'bg-[#1a1a1a]', // Black
    textColor: 'text-white',
    borderColor: 'border-[#333]',
    image: '/maze.png',
    link: 'https://maze-foundry.vercel.app/',
  },
  {
    id: '03',
    title: 'Food Clicks',
    date: 'UpComing',
    desc: 'Hyper-detailed miniature 3D models of food items tailored for interactive clickers and tabletop displays.',
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
    desc: 'Intricately detailed 3D printable models of standalone historic and modern architectural landmarks from around the globe.',
    tags: ['ARCHITECTURE', '3D MODELS'],
    bgColor: 'bg-[#e6005c]', // Pink
    textColor: 'text-white',
    borderColor: 'border-white/20',
    image: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&q=80&w=1200',
    link: '#',
  }
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
              className={`absolute bottom-[-2px] h-full pointer-events-auto flex items-center px-4 md:px-8 gap-2 font-mono text-xs md:text-sm font-bold tracking-widest ${project.bgColor} ${project.textColor}`}
              style={{
                left: `max(0px, calc(${index} * 8vw))` /* Scaled down offset for mobile, expands on desktop */,
                minWidth: '140px',
                clipPath: 'polygon(1rem 0, calc(100% - 1rem) 0, 100% 100%, 0 100%)'
              }}
            >
              <Folder size={14} className="opacity-80" /> PROJECT {project.id}
            </div>
          </div>

          {/* BODY LAYER */}
          <div className={`flex-1 w-full ${project.bgColor} ${project.textColor} ${project.borderColor} overflow-hidden flex flex-col md:flex-row relative z-10 border-2`}>
            
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
                    className={`font-mono text-xs md:text-sm px-3 py-1.5 font-bold ${
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
              <div className={`relative w-full h-full max-h-[70vh] border-2 ${project.borderColor} overflow-hidden`}>
                <div className={`absolute top-0 left-0 w-4 h-4 border-t-4 border-l-4 ${project.borderColor} z-10 m-2`} />
                <div className={`absolute top-0 right-0 w-4 h-4 border-t-4 border-r-4 ${project.borderColor} z-10 m-2`} />
                <div className={`absolute bottom-0 left-0 w-4 h-4 border-b-4 border-l-4 ${project.borderColor} z-10 m-2`} />
                <div className={`absolute bottom-0 right-0 w-4 h-4 border-b-4 border-r-4 ${project.borderColor} z-10 m-2`} />

                <div className={`absolute top-4 right-4 z-10 font-mono text-xs px-3 py-1.5 flex items-center gap-2 shadow-sm ${
                  project.textColor === 'text-white' ? 'bg-white text-black' : 'bg-black text-white'
                }`}>
                  <ImageIcon size={14} /> IMAGE.JPG
                </div>

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