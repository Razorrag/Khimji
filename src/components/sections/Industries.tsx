"use client";

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ScrollReveal } from '../ui/ScrollReveal';

const INDUSTRIES = [
  { name: "Cable Manufacturers", desc: "Armouring & shielding wires.", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
  { name: "Power Sector", desc: "Transmission & distribution networks.", icon: "M13 2L3 14h9l-1 8 10-12h-9l1-8z" },
  { name: "Infrastructure", desc: "Bridges, tunnels & structural binding.", icon: "M3 21h18M3 21V7l9-4 9 4v14M9 21V11h6v10" },
  { name: "Industrial", desc: "Heavy machinery & component manufacturing.", icon: "M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" },
  { name: "Construction", desc: "High-tensile reinforcement & fencing.", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0H5m14 0h2m-16 0H3m4-10h2m4 0h2m-6 4h2m4 0h2" },
  { name: "Agriculture", desc: "Perimeter fencing & structural support.", icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" },
];

function IndustryCard({ ind, index }: { ind: typeof INDUSTRIES[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group relative"
    >
      <div className="industry-card relative rounded-2xl p-5 md:p-6 overflow-hidden border border-white/[0.06] transition-all duration-500 group-hover:border-amber/20 h-full">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal/60 via-obsidian/80 to-charcoal/40 pointer-events-none" />
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(249,115,22,0.08) 0%, transparent 70%)' }} />

        <div className="relative z-10">
          {/* Number + Icon row */}
          <div className="flex items-center justify-between mb-4">
            <span className="font-mono text-[10px] text-amber/50 font-bold tracking-wider">
              {String(index + 1).padStart(2, '0')}
            </span>
            <div className="w-10 h-10 rounded-full border border-amber/20 bg-amber/[0.05] flex items-center justify-center text-amber/70 group-hover:border-amber/40 group-hover:text-amber transition-all duration-500">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4" strokeLinecap="round" strokeLinejoin="round">
                <path d={ind.icon} />
              </svg>
            </div>
          </div>

          {/* Name */}
          <h3 className="font-bebas text-xl md:text-2xl tracking-wide text-cream mb-2 group-hover:text-amber transition-colors duration-500">
            {ind.name}
          </h3>

          {/* Description */}
          <p className="font-sans text-[11px] md:text-xs text-cream/55 leading-relaxed group-hover:text-steel/70 transition-colors duration-500">
            {ind.desc}
          </p>

          {/* Bottom line accent */}
          <div className="mt-4 h-[1px] w-0 group-hover:w-full bg-gradient-to-r from-amber/40 to-transparent transition-all duration-700" />
        </div>
      </div>
    </motion.div>
  );
}

export function Industries() {
  return (
    <section id="industries" className="relative py-20 md:py-28 bg-transparent border-t border-glass-border">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-amber/[0.02] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-[5vw] relative z-10">

        {/* Header */}
        <div className="mb-10 md:mb-12">
          <ScrollReveal direction="up" delay={0.1}>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-[2px] w-12 bg-amber" />
                <span className="font-mono text-[10px] text-amber/60 tracking-[0.3em] uppercase">Sectors We Serve</span>
              </div>
              <h2 className="font-bebas text-[clamp(44px,6vw,80px)] leading-[0.85] text-cream uppercase">
                Global<br/>
                <span className="text-amber">Applications</span>
              </h2>
            </div>
          </ScrollReveal>
        </div>

        {/* Industry cards grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
          {INDUSTRIES.map((ind, i) => (
            <IndustryCard key={ind.name} ind={ind} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
