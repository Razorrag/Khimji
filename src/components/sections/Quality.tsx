import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SplitText } from '../ui/SplitText';

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
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section ref={containerRef} id="quality" className="relative bg-transparent py-32 border-t border-glass-border">
      <div className="max-w-[1280px] mx-auto px-[5vw] relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-16 justify-between mb-32 items-end">
          <div>
            <motion.div 
               initial={{ width: 0 }}
               whileInView={{ width: "60px" }}
               transition={{ duration: 0.8 }}
               className="h-[1px] bg-amber mb-6"
            />
            <h3 className="font-mono text-[11px] text-amber tracking-widest uppercase mb-6">Our Methodology</h3>
            <h2 className="font-bebas text-[clamp(48px,6vw,90px)] text-cream leading-[0.85] uppercase">
              <SplitText text="UNCOMPROMISING" /> <br/>
              <span className="text-steel"><SplitText text="QUALITY." delayOffset={0.2} /></span>
            </h2>
          </div>
          <motion.div 
            style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "20%"]) }}
            className="lg:w-1/3"
          >
             <p className="font-sans text-steel text-lg font-light leading-relaxed border-l-[3px] border-amber pl-6 py-2">
               Rigorous inspections at every stage of production ensure our wire products meet and exceed stringiest industry standards IS 280 and IS 3975. Every strand is tested for endurance.
             </p>
          </motion.div>
        </div>

        <div className="border-t border-glass-border">
          {QUALITY_TESTS.map((test, i) => (
            <motion.div 
               key={test.id}
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, margin: "-10%" }}
               transition={{ duration: 0.6, delay: i * 0.1 }}
               className="relative group flex flex-col md:flex-row md:items-center justify-between py-12 px-8 -mx-8 border-b border-glass-border hover:border-transparent transition-all duration-500 overflow-hidden"
            >
              {/* Hover effect background */}
              <div className="absolute inset-0 bg-charcoal/80 scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 ease-[0.16,1,0.3,1] pointer-events-none rounded-xl" />
              
              <div className="flex items-center gap-10 md:w-1/2 mb-6 md:mb-0 relative z-10">
                <div className="overflow-hidden">
                   <span className="font-mono text-xl text-steel/30 group-hover:text-amber transition-colors duration-500 block transform group-hover:-translate-y-full">0{i+1}</span>
                   <span className="font-mono text-xl text-amber absolute top-0 transform translate-y-full group-hover:translate-y-0 transition-all duration-500">0{i+1}</span>
                </div>
                <h3 className="font-bebas text-4xl lg:text-5xl text-cream transition-colors duration-500 tracking-wide translate-y-1 group-hover:-translate-y-1 group-hover:text-amber">{test.title}</h3>
              </div>
              <div className="md:w-1/4 mb-6 md:mb-0 pr-8 relative z-10">
                <p className="font-sans text-steel text-sm font-light leading-relaxed group-hover:text-cream transition-colors duration-500">{test.desc}</p>
              </div>
              <div className="md:w-1/4 flex flex-col md:items-end text-left md:text-right relative z-10 overflow-hidden">
                 <span className="font-bebas text-4xl lg:text-5xl text-amber font-light tracking-wide group-hover:scale-110 origin-right transition-transform duration-500">{test.metric}</span>
                 <span className="font-mono text-[10px] text-steel group-hover:text-amber/80 transition-colors uppercase tracking-widest mt-1">{test.unit}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
