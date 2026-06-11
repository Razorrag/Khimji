"use client";

import { useRef, useLayoutEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollReveal } from '../ui/ScrollReveal';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  { num: "01", label: "Annealing", temp: "900°C", desc: "Relieves internal stress, restores ductility & softens the wire." },
  { num: "02", label: "Water Quench", temp: "", desc: "Rapid cooling washes away residual annealing medium." },
  { num: "03", label: "Pickling", temp: "HCl", desc: "Acid bath strips rust, mill scale & metallic oxides." },
  { num: "04", label: "Post-Rinse", temp: "", desc: "Stops chemical reaction, removes acid carryover." },
  { num: "05", label: "Fluxing", temp: "ZnCl₂", desc: "Prevents re-oxidation & catalyzes zinc bonding." },
  { num: "06", label: "Galvanizing", temp: "450°C", desc: "Molten zinc forms bonded alloy layers." },
  { num: "07", label: "Wiping", temp: "", desc: "Ensures uniform coating thickness across wire." },
  { num: "08", label: "Bundling", temp: "", desc: "High-speed coiling into transport-ready coils." },
];

function StepIcon({ index }: { index: number }) {
  const icons = [
    <svg key="0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
      <path d="M12 2v6m0 0a4 4 0 104 4H8a4 4 0 004-4zm-4 10v2a4 4 0 008 0v-2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>,
    <svg key="1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
      <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>,
    <svg key="2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
      <circle cx="8" cy="8" r="2.5" /><circle cx="16" cy="10" r="3" /><circle cx="10" cy="16" r="2" />
    </svg>,
    <svg key="3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
      <path d="M4 12h16M6 12V6a2 2 0 012-2h0a2 2 0 012 2v6m-4 0v3m4-3v3m4-3v3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>,
    <svg key="4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
      <path d="M9 3h6m-5 0v6.5L5 18a1 1 0 001 1h12a1 1 0 001-1l-5-8.5V3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>,
    <svg key="5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>,
    <svg key="6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
      <path d="M12 2a10 10 0 0110 10m-10-5a5 5 0 015 5m-5-5H3m19 0h-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>,
    <svg key="7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
      <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
    </svg>,
  ];
  return icons[index] || null;
}

function FlowingArrow({ delay }: { delay: number }) {
  return (
    <div className="absolute top-1/2 -translate-y-1/2 right-0 translate-x-1/2 z-20 pointer-events-none">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="flowing-arrow" style={{ animationDelay: `${delay}s` }}>
        <path d="M5 12h14m0 0l-4-4m4 4l-4 4" stroke="#F97316" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function StepCard({ step, index, total }: { step: typeof STEPS[0]; index: number; total: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const isLast = index === total - 1;

  return (
    <motion.div
      ref={ref}
      className="relative group"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Card with gradient background */}
      <div className="step-card relative rounded-2xl p-5 md:p-6 overflow-hidden border border-white/[0.06] transition-all duration-500 group-hover:border-amber/20">
        {/* Background gradient — mimics card-dark.jpg */}
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal/80 via-obsidian/90 to-charcoal/60 pointer-events-none" />
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(249,115,22,0.08) 0%, transparent 70%)' }} />

        {/* Auto-glow pulse */}
        <div className="step-glow absolute -top-20 -right-20 w-40 h-40 rounded-full pointer-events-none" style={{ animationDelay: `${index * 1.5}s` }} />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center">
          {/* Icon with glow ring */}
          <div className="relative mb-3">
            {/* Animated outer ring */}
            <div className="absolute inset-0 rounded-full border border-amber/20 scale-[1.6] step-ring" style={{ animationDelay: `${index * 0.8}s` }} />
            {/* Icon container */}
            <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full border border-amber/25 bg-amber/[0.06] flex items-center justify-center text-amber group-hover:border-amber/50 group-hover:bg-amber/10 transition-all duration-500">
              <StepIcon index={index} />
            </div>
          </div>

          {/* Step number */}
          <span className="font-mono text-[9px] font-bold tracking-wider text-amber/60 mb-0.5">
            {step.num}
          </span>

          {/* Step name */}
          <h4 className="font-bebas text-base md:text-lg tracking-wide text-cream mb-1 group-hover:text-amber transition-colors duration-500">
            {step.label}
          </h4>

          {/* Temp badge */}
          {step.temp && (
            <span className="font-mono text-[8px] px-2 py-0.5 rounded-full border border-amber/15 text-amber/50 mb-2">
              {step.temp}
            </span>
          )}
          {!step.temp && <div className="mb-2" />}

          {/* Description */}
          <p className="font-sans text-[10px] md:text-[11px] text-steel/45 leading-relaxed group-hover:text-steel/65 transition-colors duration-500">
            {step.desc}
          </p>
        </div>
      </div>

      {/* Flowing arrow between cards (desktop only) */}
      {!isLast && (
        <div className="hidden md:block absolute top-1/2 -translate-y-1/2 -right-4 z-20">
          <div className="flowing-arrow-container">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flowing-arrow" style={{ animationDelay: `${index * 0.6}s` }}>
              <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="#F97316" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      )}
    </motion.div>
  );
}

export function ProcessTeaser() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={sectionRef} className="relative py-16 md:py-24 overflow-hidden border-t border-glass-border">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-amber/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-[5vw] relative z-10">

        {/* Header row */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-12">
          <ScrollReveal direction="up" delay={0.1}>
            <div className="max-w-[500px]">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-[2px] w-12 bg-amber" />
                <span className="font-mono text-[10px] text-amber/60 tracking-[0.3em] uppercase">How It's Made</span>
              </div>
              <h2 className="font-bebas text-[clamp(44px,6vw,80px)] leading-[0.85] text-cream uppercase mb-4">
                The Production<br/>
                <span className="text-amber">Strand</span>
              </h2>
              <p className="font-sans text-sm text-steel/60 leading-relaxed mb-6">
                From raw wire to reliable performance — engineered through 8 precise stages.
              </p>
              <Link
                href="/manufacturing"
                className="blob-btn font-mono text-[10px] tracking-widest uppercase font-bold px-6 py-3 inline-flex items-center gap-2 group"
              >
                <span>Explore Full Journey</span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <div className="flex flex-col items-end text-right lg:mt-8">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-mono text-[10px] text-steel/40 tracking-[0.3em] uppercase">Full Process</span>
                <div className="w-1.5 h-1.5 rounded-full bg-amber step-dot-pulse" />
              </div>
              <div className="flex items-baseline gap-2">
                <span className="font-bebas text-5xl md:text-6xl text-amber leading-none">08</span>
                <span className="font-mono text-[10px] text-steel/40 tracking-wider uppercase">Steps</span>
              </div>
              <p className="font-mono text-[9px] text-steel/30 tracking-wider mt-1">
                Precision in every stage
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 relative z-10">
          {STEPS.map((step, i) => (
            <StepCard key={step.num} step={step} index={i} total={STEPS.length} />
          ))}
        </div>

      </div>
    </section>
  );
}
