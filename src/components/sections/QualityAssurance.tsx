"use client";

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const TESTS_ROW1 = [
  {
    name: "Diameter Testing",
    desc: "Digital micrometer verification on every coil \u2014 tolerance held to \u00b10.01mm ensuring dimensional accuracy across full batch lengths.",
    metric: "\u00b10.01mm",
    detail: "Inline micrometer checks every 100m of wire. Digital verification logged per batch.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="1" />
        <path d="M12 3v3m0 12v3M3 12h3m12 0h3" strokeLinecap="round" />
      </svg>
    )
  },
  {
    name: "Zinc Coating",
    desc: "Gravimetric acid-strip method measures mass of zinc per m\u00b2. Light, Medium, and Heavy coating classes verified against IS 280 tables.",
    metric: "60\u2013300 g/m\u00b2",
    detail: "Antimony chloride stripping test. Results compared against IS 280 minimum tables per wire diameter.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M4 6h16M4 10h16M4 14h16M4 18h16" strokeLinecap="round" />
        <circle cx="8" cy="6" r="2" fill="currentColor" fillOpacity="0.2" />
        <circle cx="16" cy="10" r="2" fill="currentColor" fillOpacity="0.3" />
        <circle cx="10" cy="14" r="2" fill="currentColor" fillOpacity="0.4" />
      </svg>
    )
  },
  {
    name: "UTS Testing",
    desc: "Universal Testing Machine verifies Ultimate Tensile Strength against grade specification \u2014 soft, half-hard, or hard \u2014 before dispatch.",
    metric: "300\u2013550 N/mm\u00b2",
    detail: "Tensile break test on calibrated UTM. Test certificates issued per batch.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M12 2v20M8 6l4-4 4 4M8 18l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
];

const TESTS_ROW2 = [
  {
    name: "Surface Finish",
    desc: "Visual and tactile inspection for rough spots, zinc drips, bare patches, or surface porosity \u2014 zero tolerance for sub-standard finish.",
    metric: "Visual + Touch",
    detail: "Bright light surface scan and trained inspector hand-verification.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    )
  },
  {
    name: "Resistivity",
    desc: "Mandatory for IS 3975 cable armouring wire. Electrical resistance measured per km \u2014 must not exceed 14.5 \u03a9/km at 20\u00b0C.",
    metric: "\u226414.5 \u03a9/km",
    detail: "Kelvin 4-wire bridge method. Critical for cable earthing continuity compliance.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
];

function AnimatedCounter({ value, isInView }: { value: string; isInView: boolean }) {
  const [display, setDisplay] = useState('');

  useEffect(() => {
    if (!isInView) return;
    let frame = 0;
    const totalFrames = 30;
    const interval = setInterval(() => {
      frame++;
      if (frame <= totalFrames) {
        const progress = frame / totalFrames;
        const chars = value.split('');
        setDisplay(chars.map((c) => {
          if (c.match(/[0-9]/) && Math.random() > progress) {
            return String(Math.floor(Math.random() * 10));
          }
          return c;
        }).join(''));
      } else {
        setDisplay(value);
        clearInterval(interval);
      }
    }, 30);
    return () => clearInterval(interval);
  }, [isInView, value]);

  return <span>{display || value}</span>;
}

function TestCard({ test, index, className }: { test: typeof TESTS_ROW1[0]; index: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.div
      ref={ref}
      className={`blob-card p-3 sm:p-4 md:p-5 group relative flex flex-col justify-between min-h-[150px] sm:min-h-auto ${className || ''}`}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <div>
        {/* Top row: icon + metric */}
        <div className="flex items-center justify-between gap-2 mb-2 sm:mb-3">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg border border-amber/20 bg-amber/[0.06] flex items-center justify-center text-amber group-hover:border-amber/40 group-hover:bg-amber/10 transition-all duration-400 flex-shrink-0">
            <span className="[&_svg]:w-4 [&_svg]:h-4 sm:[&_svg]:w-5 sm:[&_svg]:h-5 animate-none">
              {test.icon}
            </span>
          </div>
          <div className="font-bebas text-lg sm:text-2xl md:text-3xl text-amber leading-none text-glow-amber text-right truncate">
            <AnimatedCounter value={test.metric} isInView={isInView} />
          </div>
        </div>

        {/* Name */}
        <h4 className="font-bebas text-sm sm:text-base md:text-lg text-cream tracking-wide mb-1.5 group-hover:text-amber transition-colors duration-400">
          {test.name}
        </h4>

        {/* Description */}
        <p className="font-sans text-[10px] sm:text-[11px] md:text-xs text-steel/60 leading-relaxed mb-3">
          {test.desc}
        </p>
      </div>

      <div>
        {/* Detail line */}
        <div className="pt-2 border-t border-white/[0.05]">
          <p className="font-mono text-[8px] sm:text-[9px] md:text-[10px] text-steel/40 leading-relaxed">
            {test.detail}
          </p>
        </div>
      </div>

      {/* Bottom accent line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-amber origin-left"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1, delay: index * 0.1 + 0.3, ease: [0.22, 1, 0.36, 1] }}
      />
    </motion.div>
  );
}

export function QualityAssurance() {
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-100px' });

  return (
    <section className="relative py-12 md:py-20 overflow-hidden industrial-grid-bg">
      {/* Top amber accent */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-amber/30 to-transparent" />

      <div className="max-w-[1100px] mx-auto px-[5vw] relative z-10">

        {/* Header */}
        <div ref={headerRef} className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-10">
          <div className="max-w-[600px]">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[2px] w-10 bg-amber" />
              <span className="font-mono text-[10px] text-amber/60 tracking-[0.3em] uppercase">Quality Assurance</span>
            </div>
            <h2 className="font-bebas text-[clamp(36px,5vw,64px)] leading-[0.85] text-cream uppercase mb-3">
              Quality You Can<br/>
              <span className="text-amber">Trust</span>
            </h2>
            <p className="font-sans text-[13px] md:text-sm text-steel/70 leading-relaxed">
              At Khemji Wire & Wire Pvt. Ltd., quality is not a department &mdash; it&apos;s built into every metre of wire we produce.
            </p>
          </div>

          {/* BIS Certified */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={isHeaderInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex-shrink-0 hidden lg:flex flex-col items-center mt-2"
          >
            <div className="cert-seal">
              <div className="text-center">
                <div className="font-bebas text-2xl text-amber leading-none">BIS</div>
                <div className="font-mono text-[8px] text-steel/50 tracking-wider mt-1">CERTIFIED</div>
              </div>
            </div>
            <div className="w-[1px] h-6 bg-amber/40" />
            <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-amber/40" />
              {['IS 280', 'IS 3975'].map((cert, i) => (
                <motion.div
                  key={cert}
                  className="cert-seal"
                  style={{ width: '80px', height: '80px' }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isHeaderInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="text-center">
                    <div className="font-bebas text-base text-amber leading-none">{cert}</div>
                    <div className="font-mono text-[6px] text-steel/40 tracking-wider mt-1">COMPLIANT</div>
                  </div>
                </motion.div>
              ))}
              <div className="w-12 h-[1px] bg-amber/40" />
            </div>
          </motion.div>
        </div>

        {/* Row 1: 3 cards */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 mb-3 md:mb-5">
          {TESTS_ROW1.map((test, i) => (
            <TestCard key={test.name} test={test} index={i} className={i === 2 ? "col-span-2 lg:col-span-1" : ""} />
          ))}
        </div>

        {/* Row 2: 2 cards centered */}
        <div className="grid grid-cols-2 gap-3 md:gap-5 max-w-[740px] mx-auto">
          {TESTS_ROW2.map((test, i) => (
            <TestCard key={test.name} test={test} index={i + 3} />
          ))}
        </div>

      </div>
    </section>
  );
}
