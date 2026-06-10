"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

export function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    gsap.to({ p: 0 }, {
      p: 100,
      duration: 1.2,
      ease: 'power2.inOut',
      onUpdate: function() { setProgress(Math.round(this.targets()[0].p)); },
      onComplete
    });
  }, [onComplete]);
  
  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-obsidian flex flex-col items-center justify-center p-6"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 noise-bg opacity-[0.03] mix-blend-overlay pointer-events-none" />
      
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 mb-8"
      >
        <img
          src="/tab logo just logo.png"
          alt="Khemji Wire"
          className="h-20 md:h-28 w-auto object-contain"
        />
      </motion.div>

      {/* Company name */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative z-10 text-center mb-10"
      >
        <div className="font-bebas text-3xl md:text-4xl text-cream tracking-[0.3em]">KHEMJI WIRE</div>
        <div className="font-mono text-[9px] md:text-[10px] text-steel/50 tracking-[0.4em] uppercase mt-1">& WIRE PVT. LTD.</div>
      </motion.div>
      
      {/* Progress bar */}
      <div className="w-full max-w-[200px] h-[1px] bg-white/10 relative overflow-hidden z-10">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-amber to-amber-dim origin-left"
          style={{ scaleX: progress / 100 }}
        />
      </div>
      
      <div className="font-mono text-[9px] text-white/20 mt-3 tracking-widest z-10 relative">
        {progress}%
      </div>
    </motion.div>
  );
}
