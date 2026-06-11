"use client";

import { useRef, useState, useEffect } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';

const STEPS = [
  {
    num: "01",
    label: "Wire Drawing",
    temp: "Cold Process",
    desc: "Raw MS wire rod pulled through tungsten carbide dies, reducing diameter to target gauge while hardening the wire.",
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200"
  },
  {
    num: "02",
    label: "Surface Cleaning",
    temp: "Mechanical",
    desc: "Wire surface mechanically descaled and cleaned to remove oxides, loose scale, and contaminants before chemical treatment.",
    img: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=1200"
  },
  {
    num: "03",
    label: "Pickling",
    temp: "HCl Bath",
    desc: "Acid bath (dilute HCl) strips all rust, mill scale, and metallic oxides. Zinc cannot bond to oxidized steel.",
    img: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1200"
  },
  {
    num: "04",
    label: "Fluxing",
    temp: "ZnCl\u2082",
    desc: "Zinc Ammonium Chloride flux solution prevents re-oxidation and catalyzes the metallurgical bonding of molten zinc.",
    img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=1200"
  },
  {
    num: "05",
    label: "Hot Dip Galvanizing",
    temp: "450\u2013460\u00b0C",
    desc: "Wire passes through molten zinc bath. Metallurgical reaction forms bonded zinc-iron alloy layers for lasting protection.",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1200"
  },
  {
    num: "06",
    label: "Cooling",
    temp: "Water Bath",
    desc: "Freshly galvanized wire is rapidly cooled and quenched to solidify the zinc coating and stabilize the surface.",
    img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200"
  },
  {
    num: "07",
    label: "Testing",
    temp: "QC Lab",
    desc: "Diameter, tensile strength, zinc coating weight, and dip test verified per batch before any product leaves the facility.",
    img: "https://images.unsplash.com/photo-1581093458791-9d42e3c7e117?w=1200"
  },
  {
    num: "08",
    label: "Packing",
    temp: "Coiling",
    desc: "Finished wire wound into precise coils of 25\u2013150 kg, wrapped in Hessian cloth and wire-bound for safe transport.",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200"
  },
  {
    num: "09",
    label: "Dispatch",
    temp: "PAN India",
    desc: "Batch-tagged coils dispatched with Material Test Certificate via trusted freight partners across India.",
    img: "https://images.unsplash.com/photo-1586528116475-4e39890ceae2?w=1200"
  },
];

export function ProcessTeaser() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);
  const [stripProgress, setStripProgress] = useState(0);

  useEffect(() => {
    const strip = stripRef.current;
    if (!strip) return;
    const handleScroll = () => {
      const maxScroll = strip.scrollWidth - strip.clientWidth;
      if (maxScroll > 0) {
        setStripProgress(strip.scrollLeft / maxScroll);
      }
    };
    strip.addEventListener('scroll', handleScroll, { passive: true });
    return () => strip.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative py-16 md:py-24 overflow-hidden border-t border-glass-border">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-amber/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-[5vw] relative z-10">

        {/* Header row */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-[2px] w-8 bg-amber" />
              <span className="font-mono text-[10px] text-amber tracking-[0.3em] uppercase">How It&apos;s Made</span>
            </div>
            <h2 className="font-bebas text-[clamp(32px,5vw,56px)] leading-[0.85] text-cream uppercase">
              The Wire <span className="text-amber">Journey</span>
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-baseline gap-2">
              <span className="font-bebas text-4xl text-amber leading-none">09</span>
              <span className="font-mono text-[9px] text-cream/50 tracking-wider uppercase">Steps</span>
            </div>
            <Link
              href="/manufacturing"
              className="blob-btn font-mono text-[9px] tracking-widest uppercase font-bold px-5 py-2.5 inline-flex items-center gap-2 group"
            >
              <span>Explore Full Journey</span>
              <span className="group-hover:translate-x-1 transition-transform duration-300">\u2192</span>
            </Link>
          </div>
        </div>

        {/* Progress bar */}
        <div className="relative h-1 bg-white/5 rounded-full mb-6 overflow-hidden">
          <motion.div
            className="absolute left-0 top-0 h-full bg-amber rounded-full origin-left"
            style={{ scaleX: stripProgress }}
          />
        </div>

        {/* Cinema strip */}
        <div
          ref={stripRef}
          className="relative overflow-x-auto snap-x snap-mandatory flex gap-4 process-cinema-strip pb-4"
          style={{ scrollbarWidth: 'none' }}
        >
          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              className="snap-start flex-shrink-0 w-[75vw] sm:w-[55vw] md:w-[32vw] lg:w-[22vw] h-[45vh] md:h-[50vh] relative rounded-xl overflow-hidden border border-glass-border group"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Background image */}
              <div className="absolute inset-0">
                <img
                  src={step.img}
                  alt={step.label}
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/60 to-transparent" />
              </div>

              {/* Step content at bottom */}
              <div className="absolute bottom-0 inset-x-0 p-4 md:p-5 z-10">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-mono text-[10px] text-amber tracking-widest">{step.num}</span>
                  {step.temp && (
                    <span className="font-mono text-[9px] text-amber/50 border border-amber/20 rounded-full px-2 py-0.5">{step.temp}</span>
                  )}
                </div>
                <h4 className="font-bebas text-2xl md:text-2xl text-cream tracking-wide group-hover:text-amber transition-colors duration-500">{step.label}</h4>
                <p className="font-sans text-[11px] md:text-xs text-steel/80 mt-2 leading-relaxed line-clamp-3">{step.desc}</p>
              </div>

              {/* Step number watermark */}
              <div className="absolute top-3 right-4 font-bebas text-[60px] text-white/[0.04] leading-none select-none">{step.num}</div>

              {/* Hover amber bottom line */}
              <div className="absolute bottom-0 inset-x-0 h-1 bg-amber scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          ))}
        </div>

        {/* Drag hint on desktop */}
        <div className="hidden md:flex items-center justify-center gap-2 mt-4">
          <svg className="w-4 h-4 text-steel/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
          </svg>
          <span className="font-mono text-[9px] text-steel/30 tracking-widest uppercase">Drag to explore</span>
        </div>
      </div>
    </section>
  );
}
