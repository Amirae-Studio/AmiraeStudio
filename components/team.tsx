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
    <section id='team' className="bg-black text-white font-sans rounded-3xl border border-[#2AD5C6]/30 mx-4 sm:mx-8 md:mx-32 my-16 md:my-32 overflow-hidden shadow-2xl">
      <div className="flex flex-col md:flex-row">

        {/* LEFT COLUMN: Content */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-16 flex flex-col justify-between border-b md:border-b-0 md:border-r border-[#2AD5C6]/20">

          <div>
            {/* Status line */}
            <div className="font-mono text-xs md:text-sm flex items-center gap-3 uppercase tracking-wider mb-6 md:mb-8">
              <div className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: '#2AD5C6' }} />
              THE PEOPLE BEHIND IT
            </div>

            {/* Title */}
            <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-none mb-6">
              About &amp;<br />Expertise
            </h2>

            <p className="text-base sm:text-lg md:text-xl opacity-90 max-w-md leading-relaxed">
              <strong>AMIRAE STUDIO LLC</strong> brings together industry veterans with{' '}
              <span className="font-semibold" style={{ color: '#2AD5C6' }}>10+ years</span>{' '}
              of hands-on experience in 3D modeling, product prototyping, physical additive fabrication, and modern web software engineering.
            </p>

            <a
              href="/services"
              className="inline-flex items-center gap-2 mt-6 md:mt-8 font-mono text-sm uppercase tracking-widest text-[#2AD5C6] hover:underline"
            >
              Explore Commercial Services <span className="text-lg leading-none">→</span>
            </a>
          </div>

          {/* Expertise blocks */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-10 md:mt-16">
            {EXPERTISE.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className="p-5 md:p-6 rounded-2xl bg-zinc-900/80 border border-[#2AD5C6]/30 shadow-sm"
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
          <div className="relative w-full h-full max-h-[70vh] rounded-2xl border border-[#2AD5C6]/30 overflow-hidden shadow-xl">

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