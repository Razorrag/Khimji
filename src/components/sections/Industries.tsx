import { motion } from 'framer-motion';
import { SplitText } from '../ui/SplitText';

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
  { title: "Large Manufacturing Capacity", desc: "Equipped with advanced machinery to support a monthly production capability of 700+ MT." },
  { title: "Reliable Delivery", desc: "Optimized logistics and supply chain ensuring timely dispatch and supply consistency nationwide." },
  { title: "Custom Solutions", desc: "Flexible manufacturing processes to deliver products tailored to distinct customer specifications." },
  { title: "Strong Industry Experience", desc: "Established in 2008, bringing over 15 years of domain expertise to every strand we produce." }
];

export function Industries() {
  return (
    <section id="industries" className="relative py-32 bg-transparent border-t border-glass-border">
      <div className="max-w-[1280px] mx-auto px-[5vw] relative z-10">
        
        {/* Industries / Applications */}
        <div className="mb-32">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div>
              <motion.div 
                 initial={{ width: 0 }}
                 whileInView={{ width: "60px" }}
                 transition={{ duration: 0.8 }}
                 className="h-[1px] bg-amber mb-6"
              />
              <h3 className="font-mono text-[11px] text-amber tracking-widest uppercase mb-4">Sectors We Serve</h3>
              <h2 className="font-bebas text-[clamp(48px,6vw,90px)] text-cream leading-[0.85] uppercase">
                <SplitText text="GLOBAL" /> <br/>
                <span className="text-steel"><SplitText text="APPLICATIONS" delayOffset={0.2} /></span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12 md:gap-y-16">
            {INDUSTRIES.map((ind, i) => (
              <motion.div
                key={ind.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group border-t border-glass-border pt-6 relative bg-obsidian/30 sm:bg-transparent rounded-lg sm:rounded-none p-4 sm:p-0"
              >
                {/* Visual Wire Connector */}
                <div className="absolute top-0 left-0 w-full h-[1px] overflow-hidden">
                  <motion.div 
                    initial={{ x: "-100%" }}
                    whileInView={{ x: "0%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 + i * 0.1 }}
                    className="w-full h-full bg-gradient-to-r from-amber via-transparent to-transparent opacity-50"
                  />
                </div>
                
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
          <div className="mb-20 text-center md:text-left">
            <h3 className="font-mono text-[11px] text-amber tracking-widest uppercase mb-4">Our Strengths</h3>
            <h2 className="font-bebas text-[clamp(48px,6vw,90px)] text-cream leading-[0.85] uppercase">
             <SplitText text="WHY CHOOSE" /> <span className="text-amber"><SplitText text="US" delayOffset={0.2} /></span>
            </h2>
          </div>
          
          <div className="flex flex-col gap-6 relative">
            {/* Visual background wire running down */}
            <div className="absolute left-[39px] md:left-[39px] top-0 bottom-0 w-[2px] bg-glass-border hidden md:block" />
            
            {STRENGTHS.map((strength, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group flex flex-col md:flex-row md:items-center justify-between p-8 bg-charcoal/80 backdrop-blur-md hover:bg-glass-panel border border-glass-border hover:border-amber/50 transition-all duration-300 rounded-xl relative z-10 overflow-hidden shadow-xl"
              >
                {/* Shine effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-[200%] group-hover:translate-x-[200%] transition-transform duration-[1.5s] ease-in-out pointer-events-none" />
                
                <div className="flex items-center gap-8 md:w-1/2 mb-4 md:mb-0 relative z-10">
                  <div className="w-4 h-4 rounded-full border-2 border-amber bg-charcoal group-hover:bg-amber transition-colors shadow-[0_0_10px_transparent] group-hover:shadow-[0_0_15px_rgba(234,88,12,0.6)] flex items-center justify-center">
                     <div className="w-1 h-1 rounded-full bg-cream group-hover:bg-obsidian transition-colors" />
                  </div>
                  <h4 className="font-bebas text-3xl lg:text-4xl text-cream tracking-wide">{strength.title}</h4>
                </div>
                <div className="md:w-1/2 pl-12 md:pl-0 relative z-10">
                  <p className="font-sans text-sm text-steel font-light leading-relaxed border-l border-glass-border/50 pl-6 group-hover:border-amber/50 transition-colors uppercase tracking-wider">{strength.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
