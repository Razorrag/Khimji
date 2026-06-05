import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const StatCounter = ({ value, label, suffix = "" }: { value: number; label: string; suffix?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="glass-panel p-6 flex flex-col items-center justify-center text-center">
      <div className="font-bebas text-5xl text-cream mb-2 flex items-center">
        {isInView ? (
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {value}
          </motion.span>
        ) : (
          <span className="opacity-0">{value}</span>
        )}
        <span className="text-amber ml-1">{suffix}</span>
      </div>
      <div className="font-mono text-[10px] text-steel tracking-widest uppercase">{label}</div>
    </div>
  );
};

export function About() {
  return (
    <section id="about" className="relative py-32 overflow-hidden selection:bg-amber/30 bg-charcoal metallic-bg-charcoal">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bebas text-[200px] text-cream opacity-[0.02] pointer-events-none select-none z-0">
        02
      </div>

      <div className="max-w-[1280px] mx-auto px-[5vw] grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="aspect-[3/4] rounded-2xl overflow-hidden relative group shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1200" 
              alt="Khemji Wire Manufacturing Facility" 
              className="w-full h-full object-cover filter grayscale contrast-125 brightness-110 group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-[1s]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-700" />
          </div>

          <div className="absolute -bottom-8 -right-8 w-[calc(100%+2rem)] grid grid-cols-3 gap-4">
            <StatCounter value={700} suffix="+" label="MT Capacity" />
            <StatCounter value={2008} label="Est. Year" />
            <StatCounter value={50} suffix="+" label="Employees" />
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col"
        >
          <h3 className="font-mono text-[11px] text-amber tracking-widest uppercase mb-6">About Company</h3>
          <h2 className="font-bebas text-6xl lg:text-[80px] leading-[0.9] text-cream mb-8 uppercase">
            Khemji Wire <br />
            <span className="text-steel">& Wire Pvt. Ltd.</span>
          </h2>
          <div className="space-y-6 font-sans font-light text-lg text-steel max-w-[480px]">
             <p>
              Established in 2008, Khemji Wire & Wire Pvt. Ltd. has emerged as a trusted manufacturer of galvanized steel wire solutions catering to the cable, infrastructure, and industrial sectors.
            </p>
            <p>
              With a commitment to quality manufacturing and customer satisfaction, we produce wire products that meet stringent Indian standards and industrial performance requirements.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 font-mono text-[11px] uppercase tracking-widest text-cream">
            <div className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-amber" /> Established in 2008</div>
            <div className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-amber" /> Manufacturing Capacity: 700 MT</div>
            <div className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-amber" /> IS Standard Compliant Products</div>
            <div className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-amber" /> Specialized in Cable Armouring Wire</div>
            <div className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-amber" /> Custom Manufacturing Capability</div>
          </div>

          <a href="#products" className="group mt-12 flex items-center gap-4 w-fit">
            <span className="font-mono text-xs text-amber tracking-widest uppercase pb-1 border-b border-amber/30 group-hover:border-amber transition-colors">
              More About Us
            </span>
            <motion.span 
              className="text-amber"
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
            >
              →
            </motion.span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
