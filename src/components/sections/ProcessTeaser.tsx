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

const STATS = [
  { value: "25+", label: "YEARS OF\nEXCELLENCE" },
  { value: "50K+", label: "TONS ANNUAL\nCAPACITY" },
  { value: "100%", label: "QUALITY\nASSURED" },
  { value: "30+", label: "INDUSTRIES\nSERVED" },
];

function StepIcon({ index }: { index: number }) {
  const icons = [
    // Annealing - thermometer/flame
    <svg key="0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
      <path d="M12 2v6m0 0a4 4 0 104 4H8a4 4 0 004-4zm-4 10v2a4 4 0 008 0v-2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>,
    // Water Quench - drop
    <svg key="1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
      <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>,
    // Pickling - bubbles
    <svg key="2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
      <circle cx="8" cy="8" r="2.5" /><circle cx="16" cy="10" r="3" /><circle cx="10" cy="16" r="2" />
    </svg>,
    // Post-Rinse - shower
    <svg key="3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
      <path d="M4 12h16M6 12V6a2 2 0 012-2h0a2 2 0 012 2v6m-4 0v3m4-3v3m4-3v3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>,
    // Fluxing - flask
    <svg key="4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
      <path d="M9 3h6m-5 0v6.5L5 18a1 1 0 001 1h12a1 1 0 001-1l-5-8.5V3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>,
    // Galvanizing - layers
    <svg key="5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>,
    // Wiping - circular arrow
    <svg key="6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
      <path d="M12 2a10 10 0 0110 10m-10-5a5 5 0 015 5m-5-5H3m19 0h-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>,
    // Bundling - target/coil
    <svg key="7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
      <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
    </svg>,
  ];
  return icons[index] || null;
}

function StepCard({ step, index }: { step: typeof STEPS[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center text-center group"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Icon circle */}
      <div className="relative mb-4">
        {/* Outer glow ring */}
        <div className="absolute inset-0 rounded-full border border-amber/20 scale-[1.8] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        {/* Middle ring */}
        <div className="absolute inset-0 rounded-full border border-amber/10 scale-[1.4]" />
        {/* Icon container */}
        <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-full border border-amber/30 bg-amber/5 flex items-center justify-center text-amber group-hover:border-amber/60 group-hover:bg-amber/10 transition-all duration-500">
          <StepIcon index={index} />
        </div>
      </div>

      {/* Step number */}
      <span className="font-mono text-[10px] font-bold tracking-wider text-amber/70 mb-1">
        {step.num}
      </span>

      {/* Step name */}
      <h4 className="font-bebas text-lg md:text-xl tracking-wide text-cream mb-1 group-hover:text-amber transition-colors duration-500">
        {step.label}
      </h4>

      {/* Description */}
      <p className="font-sans text-[10px] md:text-[11px] text-steel/50 leading-relaxed max-w-[180px] group-hover:text-steel/70 transition-colors duration-500">
        {step.desc}
      </p>
    </motion.div>
  );
}

export function ProcessTeaser() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (pathRef.current) {
        const length = pathRef.current.getTotalLength();
        gsap.set(pathRef.current, {
          strokeDasharray: length,
          strokeDashoffset: length,
        });

        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top 75%",
          end: "bottom 50%",
          scrub: 1.5,
          animation: gsap.to(pathRef.current, {
            strokeDashoffset: 0,
            ease: "none",
          }),
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-16 md:py-24 overflow-hidden border-t border-glass-border" style={{ background: 'linear-gradient(180deg, rgba(18,20,24,0) 0%, rgba(28,30,36,0.4) 50%, rgba(18,20,24,0) 100%)' }}>
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-amber/[0.02] rounded-full blur-[120px] pointer-events-none" />
      {/* Mobile: subtle radial gradient fallback */}
      <div className="absolute inset-0 md:hidden pointer-events-none" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 30%, rgba(249,115,22,0.04) 0%, transparent 70%)' }} />

      <div className="max-w-[1200px] mx-auto px-[5vw] relative z-10">

        {/* Header row */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-14">
          {/* Left: heading + CTA */}
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

          {/* Right: info panel */}
          <ScrollReveal direction="up" delay={0.2}>
            <div className="flex flex-col items-end text-right lg:mt-8">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-mono text-[10px] text-steel/40 tracking-[0.3em] uppercase">Full Process</span>
                <div className="w-1.5 h-1.5 rounded-full bg-amber" />
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

        {/* Process Grid with connecting path */}
        <div className="relative">
          {/* SVG connecting path */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none hidden md:block"
            viewBox="0 0 1000 320"
            preserveAspectRatio="none"
            fill="none"
          >
            {/* Background path (dim) */}
            <path
              d="M 125 50 C 250 50, 250 50, 375 50 C 500 50, 500 50, 625 50 C 750 50, 750 50, 875 50 L 875 50 L 875 120 C 750 120, 750 270, 625 270 C 500 270, 500 270, 375 270 C 250 270, 250 270, 125 270"
              stroke="rgba(249,115,22,0.1)"
              strokeWidth="1"
            />
            {/* Animated path */}
            <path
              ref={pathRef}
              d="M 125 50 C 250 50, 250 50, 375 50 C 500 50, 500 50, 625 50 C 750 50, 750 50, 875 50 L 875 50 L 875 120 C 750 120, 750 270, 625 270 C 500 270, 500 270, 375 270 C 250 270, 250 270, 125 270"
              stroke="#F97316"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            {/* Node dots */}
            {[125, 375, 625, 875, 875, 625, 375, 125].map((x, i) => (
              <circle key={i} cx={x} cy={i < 4 ? 50 : 270} r="3" fill="#F97316" opacity="0.6" />
            ))}
          </svg>

          {/* Mobile: simple vertical line */}
          <div className="absolute left-7 top-0 bottom-0 w-[1px] bg-amber/10 md:hidden" />

          {/* Steps grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 md:gap-y-16 gap-x-4 md:gap-x-8 relative z-10">
            {STEPS.map((step, i) => (
              <StepCard key={step.num} step={step} index={i} />
            ))}
          </div>
        </div>

        {/* Stats bar */}
        <ScrollReveal direction="up" delay={0.3}>
          <div className="mt-14 md:mt-16 border border-glass-border rounded-2xl bg-charcoal/30 backdrop-blur-sm overflow-hidden">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-glass-border">
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="px-6 py-6 md:py-8 flex flex-col items-center text-center group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                >
                  <span className="font-bebas text-3xl md:text-4xl text-amber leading-none mb-1 group-hover:scale-110 transition-transform duration-500">
                    {stat.value}
                  </span>
                  <span className="font-mono text-[8px] md:text-[9px] text-steel/40 tracking-wider uppercase whitespace-pre-line leading-tight">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
