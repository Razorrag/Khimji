import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';

export function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    // Fake progress: 0 → 100% in 1.5s
    gsap.to({ p: 0 }, {
      p: 100,
      duration: 1.5,
      ease: 'power2.inOut',
      onUpdate: function() { setProgress(Math.round(this.targets()[0].p)); },
      onComplete
    });
  }, [onComplete]);
  
  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-obsidian flex flex-col items-center justify-center p-6"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="absolute inset-0 noise-bg opacity-[0.03] mix-blend-overlay pointer-events-none" />
      
      {/* Logo mark */}
      <div className="font-bebas text-7xl md:text-8xl text-cream mb-4 relative z-10">K</div>
      <div className="font-mono text-[10px] md:text-xs text-steel tracking-[0.3em] md:tracking-[0.5em] uppercase mb-12 text-center relative z-10">
        KHEMJI WIRE & WIRE
      </div>
      
      {/* Wire drawing animation */}
      <div className="w-full max-w-[240px] md:max-w-xs h-[1px] bg-glass-border relative overflow-hidden z-10">
        <motion.div
          className="absolute inset-0 bg-amber origin-left"
          style={{ scaleX: progress / 100 }}
        />
      </div>
      
      <div className="font-mono text-[10px] text-steel/40 mt-4 tracking-widest z-10 relative">
        {progress}%
      </div>
    </motion.div>
  );
}
