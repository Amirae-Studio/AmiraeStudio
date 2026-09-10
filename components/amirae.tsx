export default function AmiraeSection() {
  const features = [
    {
      num: "01",
      title: "Logic Meets Intuition",
      description: "We bridge the gap between strict architectural precision and fluid, organic user experiences that feel instantly alive."
    },
    {
      num: "02",
      title: "Beyond the Syntax",
      description: "Code isn't just instructions passed to a machine—it is a digital canvas crafted for emotional resonance and seamless interaction."
    },
    {
      num: "03",
      title: "Future-Proof Vision",
      description: "Built on high-performance foundations and modern AI-driven frameworks designed to scale effortlessly with your ambitions."
    }
  ];

  return (
    <section id="why-amirae" className="relative w-full py-28 px-6 md:px-16 bg-[#F4F1EA] text-[#1F1E1D] overflow-hidden">
      {/* Subtle grid background lines for architectural feel */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1e1d08_1px,transparent_1px),linear-gradient(to_bottom,#1f1e1d08_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Top Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#1F1E1D]/15">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.4em] text-[#7A7369] mb-3 block">
              // Core Advantages — Why Choose Us
            </span>
            <h2 className="text-5xl md:text-7xl font-serif font-extralight tracking-tight">
              Why Amiraé
            </h2>
          </div>
          <div className="mt-4 md:mt-0 font-mono text-xs tracking-wider text-[#7A7369]">
            [ PURPOSE × PERFORMANCE ]
          </div>
        </div>

        {/* Asymmetric Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Feature Box (Dark Contrast Element - Core Summary) */}
          <div className="lg:col-span-5 bg-[#1F1E1D] text-[#F4F1EA] p-8 md:p-12 flex flex-col justify-between rounded-sm shadow-xl relative overflow-hidden group">
            {/* Decorative background glow */}
            <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-white/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 pointer-events-none" />

            <div>
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#A39B8E] block mb-6">
                The Core Standard
              </span>
              <p className="font-serif italic text-xl md:text-2xl leading-relaxed font-light text-[#EFECE6]">
                "Building systems that don't just function efficiently, but leave a lasting impression through thoughtful execution."
              </p>
            </div>

            <div className="mt-12 pt-6 border-t border-white/15 flex items-center justify-between text-xs font-mono text-[#A39B8E]">
              <span>UNCOMPROMISING CRAFT</span>
              <span>EST. 2026</span>
            </div>
          </div>

          {/* Right Editorial Breakdown (Why Choose Pillars) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
            
            {features.map((item, index) => (
              <div 
                key={index}
                className="bg-white/80 backdrop-blur-sm p-6 md:p-8 border border-[#1F1E1D]/10 rounded-sm shadow-sm relative group hover:border-[#1F1E1D]/30 transition-all duration-300"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-[#7A7369] group-hover:bg-[#1F1E1D] transition-colors" />
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg md:text-xl font-serif font-light text-[#1F1E1D]">
                    {item.title}
                  </h3>
                  <span className="font-mono text-xs text-[#7A7369]">
                    {item.num}
                  </span>
                </div>
                <p className="text-sm md:text-base leading-relaxed text-[#59534E] font-light">
                  {item.description}
                </p>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}