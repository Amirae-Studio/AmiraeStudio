import React from 'react';

export default function TeamExpertiseSection() {
  return (
    <section className="py-20 bg-white text-slate-900 relative overflow-hidden">
      {/* Background Subtle Glow using #2AD5C6 */}
      <div 
        className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-[140px] pointer-events-none opacity-20"
        style={{ backgroundColor: '#2AD5C6' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT SIDE: Text Contents */}
          <div className="lg:col-span-7 space-y-6">
            
           

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Our Team & <span style={{ color: '#2AD5C6' }}>Expertise</span>
            </h2>

            {/* Description */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              We are powered by a team of industry veterans with over{' '}
              <span className="font-semibold text-slate-900 underline decoration-[#2AD5C6] decoration-2 underline-offset-4">
                10+ years
              </span>{' '}
              of hands-on experience in 3D modeling, software development, and modern coding practices. Our team blends creative artistry with deep technical expertise to build immersive, high-performance digital experiences.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Whether it's complex 3D assets or robust code architectures, we bring proven skill and innovation to every project.
            </p>

            {/* Key Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3.5 shadow-sm">
                <div className="p-2 rounded-lg bg-[#2AD5C6]/15 text-slate-900 shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 text-sm">3D Modeling</h3>
                  <p className="text-xs text-slate-500 mt-0.5">High-fidelity 3D assets & visuals</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3.5 shadow-sm">
                <div className="p-2 rounded-lg bg-[#2AD5C6]/15 text-slate-900 shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 text-sm">Modern Engineering</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Scalable & robust architectures</p>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE: Image Section */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Image Frame Glow Accent */}
              <div 
                className="absolute -inset-1 rounded-3xl blur-md opacity-30"
                style={{ backgroundColor: '#2AD5C6' }}
              />

              <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                  alt="Our Team Working"
                  className="w-full h-[380px] sm:h-[450px] object-cover object-center"
                />

                

              </div>

            </div>
          </div>

        </div>
      </div>
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-32 sm:w-48 rounded-full"
        style={{ backgroundColor: "#2AD5C6" }}
      />
    </section>
  );
}