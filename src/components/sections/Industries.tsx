import { motion } from 'framer-motion';

const INDUSTRIES = [
  { name: "Cable Manufacturers", desc: "Armouring & shielding wires." },
  { name: "Power Sector", desc: "Transmission & distribution networks." },
  { name: "Infrastructure", desc: "Bridges, tunnels & structural binding." },
  { name: "Industrial", desc: "Heavy machinery & component manufacturing." },
  { name: "Construction", desc: "High-tensile reinforcement & fencing." },
  { name: "Agriculture", desc: "Perimeter fencing & structural support." }
];

const STRENGTHS = [
  { title: "Industry Standards Compliance", desc: "Our products are rigorously tested and certified to comply with IS 280 and IS 3975 standards." },
  { title: "Large Manufacturing Capacity", desc: "Equipped with advanced machinery to support a monthly production capability of 700 MT." },
  { title: "Reliable Delivery", desc: "Optimized logistics and supply chain ensuring timely dispatch and supply consistency nationwide." },
  { title: "Custom Solutions", desc: "Flexible manufacturing processes to deliver products tailored to distinct customer specifications." },
  { title: "Strong Industry Experience", desc: "Established in 2008, bringing over 15 years of domain expertise to every strand we produce." }
];

export function Industries() {
  return (
    <section id="industries" className="relative py-32 bg-obsidian metallic-bg-dark border-t border-glass-border">
      <div className="max-w-[1280px] mx-auto px-[5vw]">
        
        {/* Industries / Applications */}
        <div className="mb-32">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h3 className="font-mono text-[11px] text-amber tracking-widest uppercase mb-4">Sectors We Serve</h3>
              <h2 className="font-bebas text-6xl md:text-[80px] text-cream leading-[0.9] uppercase">Global <span className="text-steel">Applications</span></h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 mt-16">
            {INDUSTRIES.map((ind, i) => (
              <motion.div
                key={ind.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group border-t border-glass-border pt-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bebas text-3xl text-cream tracking-wide group-hover:text-amber transition-colors">{ind.name}</h3>
                  <span className="font-mono text-xs text-steel/30 group-hover:text-amber/50 transition-colors">0{i+1}</span>
                </div>
                <p className="font-sans font-light text-steel leading-relaxed">{ind.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="pt-32 border-t border-glass-border">
          <div className="mb-16 text-center md:text-left">
            <h3 className="font-mono text-[11px] text-amber tracking-widest uppercase mb-4">Our Strengths</h3>
            <h2 className="font-bebas text-6xl md:text-[80px] text-cream leading-[0.9] uppercase">Why Choose <span className="text-steel">Us</span></h2>
          </div>
          
          <div className="flex flex-col gap-6">
            {STRENGTHS.map((strength, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group flex flex-col md:flex-row md:items-center justify-between p-8 bg-charcoal hover:bg-glass-panel border border-transparent hover:border-glass-border transition-all duration-300 rounded-sm"
              >
                <div className="flex items-center gap-8 md:w-1/2 mb-4 md:mb-0">
                  <div className="w-2 h-2 rounded-full bg-steel group-hover:bg-amber transition-colors shadow-[0_0_10px_transparent] group-hover:shadow-[#F97316]" />
                  <h4 className="font-bebas text-3xl text-cream tracking-wide">{strength.title}</h4>
                </div>
                <div className="md:w-1/2 pl-10 md:pl-0">
                  <p className="font-sans text-sm text-steel font-light leading-relaxed">{strength.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
