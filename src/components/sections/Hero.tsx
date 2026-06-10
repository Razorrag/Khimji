"use client";

import { useRef, useState, useEffect } from "react";
import type { ReactNode, MouseEvent } from 'react';
import { motion, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";
import gsap from "gsap";
import { SplitText } from "../ui/SplitText";
import { MagneticButton } from "../ui/MagneticButton";

export function Hero() {
  const wireLineRef = useRef<SVGPathElement>(null);
  const desktopVideoRef = useRef<HTMLVideoElement>(null);
  const mobileVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Initial wire draw animation
    if (wireLineRef.current) {
      const length = wireLineRef.current.getTotalLength();
      gsap.set(wireLineRef.current, { strokeDasharray: length, strokeDashoffset: length });
      gsap.to(wireLineRef.current, {
        strokeDashoffset: 0,
        duration: 1.5,
        ease: "power3.inOut",
        delay: 0.2
      });
    }

    // Only preload the video matching the current viewport
    const isMobile = window.innerWidth < 768;
    if (mobileVideoRef.current) mobileVideoRef.current.preload = isMobile ? 'auto' : 'none';
    if (desktopVideoRef.current) desktopVideoRef.current.preload = isMobile ? 'none' : 'auto';
  }, []);

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-center pt-24 pb-20 overflow-hidden bg-transparent">
      
      {/* Background with Ambient Gradient (Already in App.tsx) + Static image overlay */}
      <div className="absolute inset-0 z-0 flex items-center justify-end overflow-hidden">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Desktop/Laptop Video */}
          <video
            ref={desktopVideoRef}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover hidden md:block"
            style={{ 
              filter: 'brightness(0.55) contrast(1.15) saturate(1.1)'
            }}
            aria-hidden="true"
          >
            <source src="/landscape.mp4" type="video/mp4" />
          </video>
          {/* Mobile Video */}
          <video
            ref={mobileVideoRef}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover block md:hidden"
            style={{ 
              filter: 'brightness(0.55) contrast(1.15) saturate(1.1)'
            }}
            aria-hidden="true"
          >
            <source src="/portrait.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-obsidian/30" />
        </motion.div>
      </div>

      {/* SVG Wire draw graphic spanning the screen */}
      <div className="absolute top-[35%] left-0 w-full h-[2px] z-0 overflow-hidden opacity-30" aria-hidden="true">
        <svg fill="none" preserveAspectRatio="none" className="w-full h-[80px] -mt-[39px]">
          <path 
            ref={wireLineRef}
            d="M0 40 Q 25% 10, 50% 40 T 100% 40" 
            stroke="#F97316" 
            strokeWidth="1" 
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>

      <div className="max-w-[1280px] w-full mx-auto px-[5vw] relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Column - Typography & CTAs */}
        <div className="flex flex-col justify-center col-span-1 lg:col-span-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            className="inline-flex items-center gap-3 mb-8"
          >
            <span className="w-12 h-[1px] bg-amber/80" />
            <span className="font-mono text-[10px] sm:text-xs text-amber tracking-[0.25em] uppercase">Forging The Future · Since 2008</span>
          </motion.div>

          <h1 className="font-bebas text-[clamp(42px,12vw,140px)] flex flex-col uppercase tracking-wider leading-[0.85] text-cream">
            <span className="metallic-text drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">
              <SplitText text="PRECISION" delayOffset={0.6} />
            </span>
            <div className="flex items-center gap-4 lg:ml-12">
              <span className="text-steel opacity-80"><SplitText text="IN" delayOffset={0.7} /></span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber to-amber-dim drop-shadow-[0_0_15px_rgba(249,115,22,0.3)]">
                <SplitText text="EVERY" delayOffset={0.8} />
              </span>
            </div>
            <span className="metallic-text">
              <SplitText text="STRAND." delayOffset={0.9} />
            </span>
          </h1>

          <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center mt-12 lg:ml-12 border-l-2 border-glass-border pl-6 lg:border-none lg:pl-0">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="font-sans font-light text-base lg:text-lg text-steel/80 max-w-[400px] leading-relaxed"
            >
              Mastering the art of High-Tensile Galvanized Steel Wire manufacturing for global infrastructure standards.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="hidden lg:flex items-center justify-center w-16 h-16 rounded-full border border-glass-border hover:border-amber hover:bg-amber/10 transition-colors cursor-pointer group"
            >
              <Play className="w-5 h-5 text-cream group-hover:text-amber transition-colors ml-1" />
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="flex flex-wrap items-center gap-8 mt-16"
          >
            <MagneticButton>
              <Link href="/contact" className="relative group overflow-hidden rounded-full font-mono text-[11px] tracking-[0.2em] uppercase flex items-center justify-center shadow-[0_8px_20px_rgba(234,88,12,0.3)] min-w-[200px]">
                <div className="absolute inset-0 bg-amber transition-transform duration-500" />
                <div className="absolute inset-0 bg-cream translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
                <span className="relative px-8 py-5 text-obsidian font-bold transition-colors">Request a Quote</span>
              </Link>
            </MagneticButton>

            <MagneticButton>
              <Link href="/products" className="group flex items-center gap-4 font-mono text-[11px] tracking-[0.2em] uppercase text-cream hover:text-amber transition-colors py-4 px-2">
                <span>View Catalogue</span>
                <motion.div
                  className="w-10 h-10 rounded-full border border-glass-border flex items-center justify-center group-hover:border-amber transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </Link>
            </MagneticButton>
          </motion.div>
        </div>

        {/* Right Column - Data Visualization / Interactive Elements */}
        <div className="hidden lg:flex col-span-4 relative flex-col justify-center pb-20 items-end">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.6 }}
            className="glass-panel p-8 rounded-2xl w-full max-w-[320px] backdrop-blur-xl border-amber/20 shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
            style={{ transformStyle: 'preserve-3d', transform: 'perspective(1000px) rotateY(-5deg)' }}
          >
            {/* Spinning Wire Coil SVG visual */}
            <div className="absolute -top-12 -right-8 w-32 h-32 opacity-20 pointer-events-none animate-[spin_20s_linear_infinite]">
              <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1" className="text-amber">
                 <circle cx="50" cy="50" r="40" strokeDasharray="4 4" />
                 <circle cx="50" cy="50" r="30" strokeDasharray="3 3" />
                 <circle cx="50" cy="50" r="20" strokeDasharray="2 2" />
              </svg>
            </div>

            <div className="flex justify-between items-end mb-6 relative z-10">
              <div className="font-bebas text-6xl text-cream leading-none">700<span className="text-amber">+</span></div>
              <div className="font-mono text-[10px] text-steel uppercase tracking-widest text-right leading-relaxed">Metric Tons<br/>Monthly</div>
            </div>
            
            <div className="space-y-4 relative z-10">
              <div>
                <div className="flex justify-between text-[10px] font-mono tracking-widest text-steel mb-2 uppercase">
                  <span>Production Yield</span>
                  <span className="text-amber">99.9%</span>
                </div>
                <div className="w-full h-[2px] bg-glass-border rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "99.9%" }}
                    transition={{ duration: 1.5, delay: 2.0, ease: "easeOut" }}
                    className="h-full bg-amber" 
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
