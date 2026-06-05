import { useRef, useState } from "react";
import type { ReactNode, MouseEvent } from 'react';
import { motion, useSpring, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

const SplitText = ({ text, delayOffset = 0 }: { text: string; delayOffset?: number }) => {
  return (
    <div className="flex overflow-hidden leading-[0.85] pb-2">
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ y: 150, opacity: 0, rotate: 10 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
            delay: delayOffset + index * 0.04
          }}
          className={`${char === " " ? "w-6" : "inline-block"} origin-bottom`}
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
};

const MagneticButton = ({ children, className }: { children: ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = (mouseX / width - 0.5) * 20; // Max movement 20px
    const yPct = (mouseY / height - 0.5) * 20;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ x, y }}
      className={`relative inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
};

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center pt-24 pb-20 overflow-hidden bg-obsidian metallic-bg-dark">
      {/* Full-bleed cinematic background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute right-0 top-0 w-full lg:w-[60%] h-full">
          <img 
            src="https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?q=80&w=2670&auto=format&fit=crop" 
            alt="Hot dip galvanized wire processing" 
            className="w-full h-full object-cover opacity-[0.4] filter grayscale contrast-125"
          />
                    <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/70 to-transparent" />
          {/* Vertical gradient to fade out bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent" />
        </div>
      </div>

      <div className="max-w-[1280px] w-full mx-auto px-[5vw] relative z-10 grid grid-cols-1 lg:grid-cols-[55%_45%] h-full pt-10">
        
        {/* Left Column - Typography & CTAs */}
        <div className="flex flex-col justify-center w-full lg:pr-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="inline-flex items-center gap-3 mb-8"
          >
            <span className="w-8 h-[1px] bg-amber" />
            <span className="font-mono text-[10px] text-amber tracking-[0.2em] uppercase">LEADING GI WIRE MANUFACTURER · JAIPUR, RAJASTHAN</span>
          </motion.div>

          <h1 className="font-bebas text-[clamp(56px,8vw,120px)] flex flex-col uppercase tracking-wide leading-[0.85]">
            <span className="metallic-text relative z-10 drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]"><SplitText text="PRECISION" delayOffset={0.1} /></span>
            <div className="flex flex-col lg:flex-row lg:items-end gap-x-6">
              <span className="text-steel ml-[5vw] lg:ml-[2vw] opacity-80"><SplitText text="IN EVERY STRAND." delayOffset={0.2} /></span>
            </div>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber to-amber-dim drop-shadow-[0_0_15px_rgba(249,115,22,0.3)] mt-2">
              <SplitText text="STRENGTH" delayOffset={0.3} />
            </span>
             <span className="text-steel ml-[5vw] lg:ml-[2vw] opacity-80"><SplitText text="IN EVERY CONNECTION." delayOffset={0.4} /></span>
          </h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="font-sans font-light text-base lg:text-lg text-steel/80 max-w-[500px] mt-10 leading-relaxed border-l border-amber/30 pl-6 lg:ml-2"
          >
            Leading manufacturer of Hot Dip Galvanized Mild Steel Wire, Low Carbon Galvanized Steel Wire, and Formed Wire for Cable Armouring Applications. Manufactured as per IS 280 and IS 3975 standards.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-wrap items-center gap-6 mt-12 lg:ml-2"
          >
            <MagneticButton>
              <a href="#contact" className="relative group overflow-hidden rounded-full font-mono text-[11px] tracking-[0.15em] uppercase flex items-center justify-center shadow-[0_8px_20px_rgba(234,88,12,0.3)] hover:shadow-[0_8px_30px_rgba(234,88,12,0.5)] transition-shadow">
                <div className="absolute inset-0 bg-amber transition-transform duration-500" />
                <div className="absolute inset-0 bg-amber-dim translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
                <span className="relative px-8 py-4 text-charcoal font-bold drop-shadow-md">Request a Quote</span>
              </a>
            </MagneticButton>

            <a href="#products" className="group flex items-center gap-4 font-mono text-[11px] tracking-[0.15em] uppercase text-cream hover:text-amber transition-colors py-4">
              <span>Download Catalogue</span>
              <motion.div
                className="w-8 h-8 rounded-full border border-glass-border flex items-center justify-center group-hover:border-amber transition-colors"
                whileHover={{ x: 5 }}
              >
                <ArrowRight className="w-3 h-3" />
              </motion.div>
            </a>
          </motion.div>
        </div>

        {/* Right Column - Floating Glass Metrics */}
        <div className="relative min-h-[500px] hidden lg:block">
          {/* Stat Cards - Absolutely Positioned */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="absolute top-12 right-0 glass-panel p-6 rounded-2xl border border-glass-border shadow-2xl min-w-[200px]"
          >
            <div className="font-bebas text-5xl text-cream mb-1">700<span className="text-amber">+</span></div>
            <div className="font-mono text-[10px] text-amber tracking-widest uppercase font-medium">MT Capacity</div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="absolute bottom-32 -right-8 glass-panel p-6 rounded-2xl border border-glass-border shadow-2xl min-w-[200px]"
          >
            <div className="font-bebas text-5xl text-cream mb-1">IS 280</div>
            <div className="font-mono text-[10px] text-amber tracking-widest uppercase font-medium">& IS 3975</div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="absolute top-1/2 left-0 -translate-y-1/2 glass-panel p-6 rounded-2xl border border-glass-border shadow-2xl min-w-[160px]"
          >
            <div className="font-mono text-[10px] text-steel tracking-widest uppercase font-medium mb-1">Since</div>
            <div className="font-bebas text-4xl text-amber">2008</div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Strip */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="absolute bottom-0 inset-x-0 border-t border-glass-border bg-obsidian/50 backdrop-blur-md z-20"
      >
        <div className="max-w-[1280px] mx-auto px-[5vw] py-6 flex flex-col md:flex-row items-center justify-between gap-6 overflow-x-auto">
          <div className="flex items-center gap-4 text-steel">
            <span className="w-8 h-[1px] bg-amber hidden md:block" />
            <span className="font-mono text-xs uppercase tracking-widest whitespace-nowrap">16+ Years Excellence</span>
          </div>
          <div className="flex items-center gap-4 text-steel">
            <span className="w-8 h-[1px] bg-amber hidden md:block" />
            <span className="font-mono text-xs uppercase tracking-widest whitespace-nowrap">50+ Skilled Employees</span>
          </div>
          <div className="flex items-center gap-4 text-steel">
            <span className="w-8 h-[1px] bg-amber hidden md:block" />
            <span className="font-mono text-xs uppercase tracking-widest whitespace-nowrap">IS Certified Company</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
