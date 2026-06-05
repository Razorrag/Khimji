import { motion } from 'framer-motion';

const QUALITY_TESTS = [
  {
    id: 'zinc',
    title: "Zinc Coating Testing",
    desc: "Precision thickness measurement ensuring superior corrosion resistance and longevity.",
    metric: "99.99%",
    unit: "Zn Purity",
  },
  {
    id: 'diameter',
    title: "Diameter Testing",
    desc: "Micrometer precision for consistent cross-section across entire batch lengths.",
    metric: "±0.01",
    unit: "mm Tolerance",
  },
  {
    id: 'uts',
    title: "UTS Testing",
    desc: "Ultimate Tensile Strength verified for structural integrity (300-550 range).",
    metric: "300-550",
    unit: "MPa Strength",
  },
  {
    id: 'surface',
    title: "Surface Finish",
    desc: "Visual and mechanical inspections for absolute smooth extrusion.",
    metric: "0.2µm",
    unit: "Ra Roughness",
  },
  {
    id: 'resistivity',
    title: "Resistivity Testing",
    desc: "Electrical conductivity checks mandated for cable armouring.",
    metric: "1.38",
    unit: "Ω/km Max",
  }
];

export function Quality() {
  return (
    <section id="quality" className="relative bg-obsidian metallic-bg-dark py-32 border-t border-glass-border">
      <div className="max-w-[1280px] mx-auto px-[5vw]">
        
        <div className="flex flex-col lg:flex-row gap-16 justify-between mb-32 items-end">
          <div>
            <h3 className="font-mono text-[11px] text-amber tracking-widest uppercase mb-6">Our Methodology</h3>
            <h2 className="font-playfair italic font-semibold text-5xl md:text-7xl text-cream max-w-2xl leading-[1.1]">
              "Quality is not an act, <br/>
              <span className="text-amber">it's a habit.</span>"
            </h2>
          </div>
          <div className="lg:w-1/3">
             <p className="font-sans text-steel text-lg font-light leading-relaxed border-l border-amber/30 pl-6">
               Rigorous inspections at every stage of production ensure our wire products meet and exceed stringiest industry standards IS 280 and IS 3975.
             </p>
          </div>
        </div>

        <div className="border-t border-glass-border">
          {QUALITY_TESTS.map((test, i) => (
            <motion.div 
               key={test.id}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-10%" }}
               transition={{ duration: 0.6, delay: i * 0.1 }}
               className="relative group flex flex-col md:flex-row md:items-center justify-between py-12 px-8 -mx-8 border-b border-glass-border hover:border-transparent transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-charcoal to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="absolute inset-0 border border-white/10 scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 pointer-events-none rounded-sm" />
              
              <div className="flex items-center gap-10 md:w-1/2 mb-6 md:mb-0 relative z-10">
                <span className="font-mono text-xl text-steel/30 group-hover:text-amber transition-colors duration-500">0{i+1}</span>
                <h3 className="font-bebas text-4xl lg:text-5xl text-cream group-hover:metallic-text transition-colors duration-500 tracking-wide">{test.title}</h3>
              </div>
              <div className="md:w-1/4 mb-6 md:mb-0 pr-8 relative z-10">
                <p className="font-sans text-steel text-sm font-light leading-relaxed group-hover:text-cream transition-colors duration-500 uppercase tracking-wide">{test.desc}</p>
              </div>
              <div className="md:w-1/4 flex flex-col md:items-end text-left md:text-right relative z-10">
                 <span className="font-sans text-4xl lg:text-5xl text-amber font-light tracking-tight drop-shadow-[0_0_15px_rgba(234,88,12,0)] group-hover:drop-shadow-[0_0_15px_rgba(234,88,12,0.4)] transition-all duration-500">{test.metric}</span>
                 <span className="font-mono text-[10px] text-steel group-hover:text-amber/80 transition-colors uppercase tracking-widest mt-1">{test.unit}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
