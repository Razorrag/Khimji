"use client";

import { useRef, useEffect, useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

const TESTS = [
  {
    name: "Diameter Testing",
    desc: "Digital micrometer verification on every coil \u2014 tolerance held to \u00b10.01mm ensuring dimensional accuracy across full batch lengths.",
    metric: "\u00b10.01mm",
    detail: "Inline micrometer checks every 100m of wire. Digital verification logged per batch.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="1" />
        <path d="M12 3v3m0 12v3M3 12h3m12 0h3" strokeLinecap="round" />
      </svg>
    )
  },
  {
    name: "Zinc Coating Testing",
    desc: "Gravimetric acid-strip method measures mass of zinc per m\u00b2. Light, Medium, and Heavy coating classes verified against IS 280 tables.",
    metric: "60\u2013300 g/m\u00b2",
    detail: "Antimony chloride stripping test. Results compared against IS 280 minimum tables per wire diameter.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
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
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M12 2v20M8 6l4-4 4 4M8 18l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    name: "Surface Finish Inspection",
    desc: "Visual and tactile inspection for rough spots, zinc drips, bare patches, or surface porosity \u2014 zero tolerance for sub-standard finish.",
    metric: "Visual + Touch",
    detail: "Bright light surface scan and trained inspector hand-verification.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    )
  },
  {
    name: "Resistivity Testing",
    desc: "Mandatory for IS 3975 cable armouring wire. Electrical resistance measured per km \u2014 must not exceed 14.5 \u03a9/km at 20\u00b0C.",
    metric: "\u226414.5 \u03a9/km",
    detail: "Kelvin 4-wire bridge method. Critical for cable earthing continuity compliance.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
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
        setDisplay(chars.map((c, i) => {
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

function TestCard({ test, index }: { test: typeof TESTS[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      className="blob-card p-7 md:p-8 group relative flex flex-col"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="w-14 h-14 rounded-full border border-amber/25 bg-amber/[0.06] flex items-center justify-center text-amber mb-5 group-hover:border-amber/50 group-hover:bg-amber/10 transition-all duration-500">
        {test.icon}
      </div>
      <div className="font-bebas text-4xl md:text-5xl text-amber leading-none mb-3 text-glow-amber">
        <AnimatedCounter value={test.metric} isInView={isInView} />
      </div>
      <h4 className="font-bebas text-xl text-cream tracking-wide mb-3 group-hover:text-amber transition-colors duration-500">
        {test.name}
      </h4>
      <p className="font-sans text-[12px] text-steel/70 leading-relaxed mb-4 flex-1">
        {test.desc}
      </p>
      <p className="font-mono text-[10px] text-steel/50 leading-relaxed">
        {test.detail}
      </p>
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-amber origin-left"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.2, delay: index * 0.1 + 0.3, ease: [0.22, 1, 0.36, 1] }}
      />
    </motion.div>
  );
}

export function QualityAssurance() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-100px' });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const quoteY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section ref={sectionRef} className="relative py-20 md:py-32 overflow-hidden industrial-grid-bg">
      {/* Top amber accent */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-amber/30 to-transparent" />

      <div className="max-w-[1200px] mx-auto px-[5vw] relative z-10">

        {/* Header */}
        <div ref={headerRef} className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-16">
          <div className="max-w-[600px]">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-[2px] w-12 bg-amber" />
              <span className="font-mono text-[10px] text-amber/60 tracking-[0.3em] uppercase">Quality Assurance</span>
            </div>
            <h2 className="font-bebas text-[clamp(44px,6vw,80px)] leading-[0.85] text-cream uppercase mb-4">
              Quality You Can<br/>
              <span className="text-amber">Trust</span>
            </h2>
            <p className="font-sans text-sm text-steel/80 leading-relaxed">
              At Khemji Wire & Wire Pvt. Ltd., quality is not a department \u2014 it&apos;s built into every metre of wire we produce.
            </p>
          </div>

          {/* Animated cert badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={isHeaderInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="cert-seal flex-shrink-0"
          >
            <div className="text-center">
              <div className="font-bebas text-2xl text-amber leading-none">BIS</div>
              <div className="font-mono text-[8px] text-steel/50 tracking-wider mt-1">CERTIFIED</div>
            </div>
          </motion.div>
        </div>

        {/* Test cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {TESTS.map((test, i) => (
            <TestCard key={test.name} test={test} index={i} />
          ))}
        </div>

        {/* ISI Certification seals */}
        <div className="flex flex-wrap items-center justify-center gap-8 mt-16">
          {['IS 280', 'IS 3975'].map((cert, i) => (
            <motion.div
              key={cert}
              className="cert-seal"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="text-center">
                <div className="font-bebas text-lg text-amber leading-none">{cert}</div>
                <div className="font-mono text-[7px] text-steel/40 tracking-wider mt-1">COMPLIANT</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
