"use client";

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { SplitText } from '../ui/SplitText';

const StatCounter = ({ value, label, suffix = "" }: { value: number; label: string; suffix?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="glass-panel p-3 md:p-6 flex flex-col items-center justify-center text-center backdrop-blur-xl">
      <div className="font-bebas text-3xl md:text-5xl text-cream mb-1 md:mb-2 flex items-center">
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
      <div className="font-mono text-[8px] md:text-[10px] text-steel tracking-[0.1em] md:tracking-widest uppercase line-clamp-2 md:line-clamp-none">{label}</div>
    </div>
  );
};

export function About() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const yContent = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <section ref={containerRef} id="about" className="relative py-32 overflow-hidden selection:bg-amber/30 bg-transparent">
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]) }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bebas text-[200px] lg:text-[400px] text-cream opacity-[0.02] pointer-events-none select-none z-0"
      >
        02
      </motion.div>

      <div className="max-w-[1280px] mx-auto px-[5vw] grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-2xl overflow-hidden relative group shadow-2xl bg-charcoal">
            <motion.img 
              style={{ y: yImage, scale: 1.1 }}
              src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1200" 
              alt="Khemji Wire Manufacturing Facility" 
              className="w-full h-[120%] object-cover filter grayscale contrast-125 brightness-110 group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-[1.5s]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(18,20,24,0.8)] via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-700" />
            <div className="absolute inset-x-0 bottom-0 p-8 pt-20 bg-gradient-to-t from-obsidian to-transparent">
               <h4 className="font-bebas text-3xl text-cream tracking-wider">Facility & Excellence</h4>
               <p className="font-mono text-xs text-amber mt-2 uppercase tracking-widest">Jaipur, India</p>
            </div>
          </div>

          <div className="absolute -bottom-8 -right-8 w-[calc(100%+2rem)] grid grid-cols-3 gap-4">
            <StatCounter value={700} suffix="+" label="MT Capacity" />
            <StatCounter value={2008} label="Est. Year" />
            <StatCounter value={50} suffix="+" label="Employees" />
          </div>
        </motion.div>

        <motion.div
          style={{ y: yContent }}
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col pt-10 md:pt-0"
        >
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="h-[1px] bg-amber/50 max-w-[100px] mb-6 block"
          />
          <h3 className="font-mono text-[11px] text-amber tracking-widest uppercase mb-4">About Company</h3>
          <h2 className="font-bebas text-[clamp(48px,6vw,90px)] leading-[0.85] text-cream mb-10 border-l-[3px] border-amber pl-6 py-2 uppercase min-h-[160px]">
            <SplitText text="KHEMJI WIRE" delayOffset={0.1} /> <br />
            <span className="text-steel"><SplitText text="& WIRE PVT. LTD." delayOffset={0.3} /></span>
          </h2>
          <div className="space-y-6 font-sans font-light text-base lg:text-lg text-steel/90 max-w-[480px]">
             <p>
              Established in 2008, Khemji Wire & Wire Pvt. Ltd. has emerged as a trusted manufacturer of galvanized steel wire solutions catering to the cable, infrastructure, and industrial sectors.
            </p>
            <p>
              With a commitment to quality manufacturing and customer satisfaction, we produce wire products that meet stringent Indian standards and industrial performance requirements.
            </p>
          </div>

          <div className="mt-10 grid gap-3 font-mono text-[10px] lg:text-xs uppercase tracking-widest text-cream">
            {['Established in 2008', 'Manufacturing Capacity: 700+ MT', 'IS Standard Compliant Products', 'Specialized in Cable Armouring Wire', 'Custom Manufacturing Capability'].map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="flex items-center gap-4 group"
              >
                <div className="w-8 h-[1px] bg-glass-border relative overflow-hidden">
                  <motion.div 
                    initial={{ x: "-100%" }}
                    whileInView={{ x: "0%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 + i * 0.1 }}
                    className="absolute inset-0 bg-amber" 
                  />
                </div>
                <span>{item}</span>
              </motion.div>
            ))}
          </div>

          <motion.a 
            href="#products" 
            className="group mt-16 flex items-center gap-4 w-fit px-6 py-4 rounded-full border border-glass-border hover:border-amber hover:bg-glass-panel transition-all duration-300"
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="font-mono text-xs text-amber tracking-widest uppercase">
              Explore Our Legacy
            </span>
            <span className="w-8 h-8 rounded-full bg-amber/10 group-hover:bg-amber flex items-center justify-center transition-colors">
              <span className="text-amber group-hover:text-obsidian transition-colors">→</span>
            </span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
