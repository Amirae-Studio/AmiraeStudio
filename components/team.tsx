import React from 'react';
import { Users, Image as ImageIcon, Boxes, Code2 } from 'lucide-react';

const EXPERTISE = [
  {
    id: '01',
    title: '3D Modeling',
    desc: 'High-fidelity assets, sculpted and optimized for real-time rendering.',
    icon: Boxes,
  },
  {
    id: '02',
    title: 'Modern Engineering',
    desc: 'Scalable, robust architectures built on proven coding practices.',
    icon: Code2,
  },
];

export default function TeamExpertiseSection() {
  return (
    <section id='team' className="bg-black text-white font-sans border-y-2 border-[#2AD5C6]/30 mx-4 sm:mx-8 md:mx-32 my-16 md:my-32">
      <div className="flex flex-col md:flex-row">

        {/* LEFT COLUMN: Content */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-16 flex flex-col justify-between border-b-2 md:border-b-0 md:border-r-2 border-[#2AD5C6]/30">

          <div>
            {/* Status line */}
            <div className="font-mono text-xs md:text-sm flex items-center gap-3 uppercase tracking-wider mb-6 md:mb-8">
              <div className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: '#2AD5C6' }} />
              THE PEOPLE BEHIND IT
            </div>

            {/* Title */}
            <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-none mb-6">
              Our Team &amp;<br />Expertise
            </h2>

            <p className="text-base sm:text-lg md:text-xl opacity-90 max-w-md leading-relaxed">
              Industry veterans with{' '}
              <span className="font-semibold" style={{ color: '#2AD5C6' }}>10+ years</span>{' '}
              of hands-on experience in 3D modeling, software development, and modern coding practices — blending creative artistry with deep technical craft.
            </p>

            <a
              href="#"
              className="inline-flex items-center gap-2 mt-6 md:mt-8 font-mono text-sm uppercase tracking-widest hover:opacity-70 transition-opacity"
            >
              Meet the team <span className="text-lg leading-none">↗</span>
            </a>
          </div>

          {/* Expertise blocks */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 mt-10 md:mt-16 border-2 border-[#2AD5C6]/30">
            {EXPERTISE.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className={`p-5 md:p-6 ${i === 0 ? 'border-b-2 sm:border-b-0 sm:border-r-2 border-[#2AD5C6]/30' : ''}`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs tracking-widest opacity-60">{item.id}</span>
                    <Icon size={18} style={{ color: '#2AD5C6' }} />
                  </div>
                  <h3 className="font-semibold text-base mb-1">{item.title}</h3>
                  <p className="text-sm opacity-70 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT COLUMN: Imagery */}
        <div className="w-full md:w-1/2 h-[350px] sm:h-[450px] md:h-auto p-6 md:p-12 relative flex items-center justify-center">
          <div className="relative w-full h-full max-h-[70vh] border-2 border-[#2AD5C6]/30 overflow-hidden">

            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-4 border-l-4 z-10 m-2" style={{ borderColor: '#2AD5C6' }} />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-4 border-r-4 z-10 m-2" style={{ borderColor: '#2AD5C6' }} />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-4 border-l-4 z-10 m-2" style={{ borderColor: '#2AD5C6' }} />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-4 border-r-4 z-10 m-2" style={{ borderColor: '#2AD5C6' }} />

            {/* Faux UI Label */}
            <div className="absolute top-4 right-4 z-10 font-mono text-xs px-3 py-1.5 flex items-center gap-2 bg-white text-black shadow-sm">
              <ImageIcon size={14} /> TEAM.JPG
            </div>

            {/* Faux headcount tag */}
            <div className="absolute bottom-4 left-4 z-10 font-mono text-xs px-3 py-1.5 flex items-center gap-2 shadow-sm" style={{ backgroundColor: '#2AD5C6', color: '#000' }}>
              <Users size={14} /> CROSS-DISCIPLINE
            </div>

            <img
              src="/images.jpeg"
              alt="Our team at work"
              className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
            />
          </div>
        </div>

      </div>
    </section>
  );
}