import { useRef, useState } from "react";
import type { ReactNode, MouseEvent } from 'react';
import { motion, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { SplitText } from "../ui/SplitText";
import { MagneticButton } from "../ui/MagneticButton";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col justify-center pt-24 pb-20 overflow-hidden bg-transparent">
      
      {/* Video Background / More dynamic creative element */}
      <div className="absolute inset-0 z-0 flex items-center justify-end">
        <motion.div 
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute right-0 top-0 w-full lg:w-[60%] h-full"
        >
          <img 
            src="https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?q=80&w=2670&auto=format&fit=crop" 
            alt="Hot dip galvanized wire processing" 
            className="w-full h-full object-cover opacity-[0.4] filter grayscale mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-obsidian/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-obsidian/20" />
        </motion.div>
      </div>

      <div className="max-w-[1280px] w-full mx-auto px-[5vw] relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Column - Typography & CTAs */}
        <div className="flex flex-col justify-center col-span-1 lg:col-span-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="inline-flex items-center gap-3 mb-8"
          >
            <span className="w-12 h-[1px] bg-amber/80" />
            <span className="font-mono text-xs text-amber tracking-[0.25em] uppercase">Forging The Future · Since 2008</span>
          </motion.div>

          <h1 className="font-bebas text-[clamp(64px,10vw,140px)] flex flex-col uppercase tracking-wider leading-[0.85] text-cream">
            <span className="metallic-text drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">
              <SplitText text="PRECISION" delayOffset={0.1} />
            </span>
            <div className="flex items-center gap-4 lg:ml-12">
              <span className="text-steel opacity-80"><SplitText text="IN" delayOffset={0.2} /></span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber to-amber-dim drop-shadow-[0_0_15px_rgba(249,115,22,0.3)]">
                <SplitText text="EVERY" delayOffset={0.3} />
              </span>
            </div>
            <span className="metallic-text">
              <SplitText text="STRAND." delayOffset={0.4} />
            </span>
          </h1>

          <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center mt-12 lg:ml-12 border-l-2 border-glass-border pl-6 lg:border-none lg:pl-0">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="font-sans font-light text-base lg:text-lg text-steel/80 max-w-[400px] leading-relaxed"
            >
              Mastering the art of High-Tensile Galvanized Steel Wire manufacturing for global infrastructure standards.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="hidden lg:flex items-center justify-center w-16 h-16 rounded-full border border-glass-border hover:border-amber hover:bg-amber/10 transition-colors cursor-pointer group"
            >
              <Play className="w-5 h-5 text-cream group-hover:text-amber transition-colors ml-1" />
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-wrap items-center gap-8 mt-16"
          >
            <MagneticButton>
              <a href="#contact" className="relative group overflow-hidden rounded-full font-mono text-xs tracking-[0.2em] uppercase flex items-center justify-center shadow-[0_8px_20px_rgba(234,88,12,0.3)] min-w-[200px]">
                <div className="absolute inset-0 bg-amber transition-transform duration-500" />
                <div className="absolute inset-0 bg-cream translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
                <span className="relative px-8 py-5 text-obsidian font-bold transition-colors">Request a Quote</span>
              </a>
            </MagneticButton>

            <a href="#products" className="group flex items-center gap-4 font-mono text-xs tracking-[0.2em] uppercase text-cream hover:text-amber transition-colors py-4">
              <span>View Catalogue</span>
              <motion.div
                className="w-10 h-10 rounded-full border border-glass-border flex items-center justify-center group-hover:border-amber transition-colors"
                whileHover={{ x: 5 }}
              >
                <ArrowRight className="w-4 h-4" />
              </motion.div>
            </a>
          </motion.div>
        </div>

        {/* Right Column - Data Visualization / Interactive Elements */}
        <div className="hidden lg:flex col-span-4 relative flex-col justify-end pb-20 items-end">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="glass-panel p-8 rounded-2xl w-full max-w-[320px] backdrop-blur-xl border-amber/20"
          >
            <div className="flex justify-between items-end mb-6">
              <div className="font-bebas text-6xl text-cream leading-none">700<span className="text-amber">+</span></div>
              <div className="font-mono text-xs text-steel uppercase tracking-widest text-right">Metric Tons<br/>Monthly</div>
            </div>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-[10px] font-mono tracking-widest text-steel mb-2 uppercase">
                  <span>Production Yield</span>
                  <span className="text-amber">98%</span>
                </div>
                <div className="w-full h-[2px] bg-glass-border rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "98%" }}
                    transition={{ duration: 1.5, delay: 1.5, ease: "easeOut" }}
                    className="h-full bg-amber" 
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Ticker / Info */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-0 inset-x-0 overflow-hidden whitespace-nowrap py-4 border-t border-glass-border bg-obsidian/30 backdrop-blur-md z-20"
      >
        <div className="flex items-center gap-12 font-mono text-xs tracking-widest uppercase text-steel/60">
          <span className="w-full flex justify-between animate-[marquee_20s_linear_infinite]">
            <span className="inline-flex items-center gap-2"><span className="w-2 h-2 bg-amber rounded-full"></span> IS 280 CERTIFIED</span>
            <span className="inline-flex items-center gap-2"><span className="w-2 h-2 bg-amber rounded-full"></span> 15+ YEARS EXCELLENCE</span>
            <span className="inline-flex items-center gap-2"><span className="w-2 h-2 bg-amber rounded-full"></span> IS 3975 CERTIFIED</span>
            <span className="inline-flex items-center gap-2"><span className="w-2 h-2 bg-amber rounded-full"></span> GLOBAL STANDARDS</span>
            {/* Duplicate for seamless looping */}
            <span className="inline-flex items-center gap-2"><span className="w-2 h-2 bg-amber rounded-full"></span> IS 280 CERTIFIED</span>
            <span className="inline-flex items-center gap-2"><span className="w-2 h-2 bg-amber rounded-full"></span> 15+ YEARS EXCELLENCE</span>
          </span>
        </div>
      </motion.div>
    </section>
  );
}
