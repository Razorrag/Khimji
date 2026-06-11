"use client";

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

const STEPS = [
  { num: "01", label: "Wire Drawing",        temp: "Cold",     desc: "Cold drawing of wire rod to precise target diameters.", icon: "M9 3H6a2 2 0 00-2 2v3m0 0h14M4 8v8a2 2 0 002 2h8a2 2 0 002-2V8" },
  { num: "02", label: "Surface Cleaning",    temp: "Mech",     desc: "Mechanical descaling and cleaning of the wire surface.", icon: "M7 8h10M7 12h10M7 16h10" },
  { num: "03", label: "Pickling",            temp: "HCl Acid", desc: "Chemical acid cleaning to remove remaining impurities.", icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" },
  { num: "04", label: "Fluxing",             temp: "ZnCl\u2082",   desc: "Applying zinc ammonium chloride flux coating.", icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" },
  { num: "05", label: "Hot Dip Galvanizing", temp: "450\u00B0C",    desc: "Molten zinc bath immersion for ultimate rust protection.", icon: "M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" },
  { num: "06", label: "Cooling",             temp: "Water",    desc: "Water quenching to solidify and stabilize zinc coating.", icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" },
  { num: "07", label: "Testing",             temp: "QC Lab",   desc: "Rigorous testing for tensile strength and coating weight.", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
  { num: "08", label: "Packing",             temp: "Coil",     desc: "Secure packing into coils tailored to user specifications.", icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" },
  { num: "09", label: "Dispatch",            temp: "PAN India",desc: "Prompt logistics and delivery to major industrial hubs.", icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 5H4m0 0l4 4m-4-4l4-4" },
];

export function ProcessTeaser() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-60px' });

  return (
    <section ref={sectionRef} className="relative py-20 md:py-28 overflow-hidden border-t border-glass-border">
      <div className="max-w-[1100px] mx-auto px-[5vw] relative z-10">

        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-16"
        >
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-[2px] w-8 bg-amber" />
              <span className="font-mono text-[10px] text-amber/80 tracking-[0.3em] uppercase">How It&apos;s Made</span>
            </div>
            <h2 className="font-bebas text-[clamp(38px,5.5vw,64px)] leading-[0.85] text-cream uppercase">
              The Wire <span className="text-amber">Journey</span>
            </h2>
          </div>
          <div className="flex items-center gap-4 flex-shrink-0">
            <div className="text-right">
              <div className="font-bebas text-3xl text-amber leading-none">09</div>
              <div className="font-mono text-[9px] text-steel/50 tracking-wider uppercase">Steps</div>
            </div>
            <Link
              href="/manufacturing"
              className="glass-btn font-mono text-[10px] tracking-widest uppercase px-6 py-3 inline-flex items-center hover:bg-amber hover:text-obsidian hover:border-amber transition-all duration-300"
            >
              Full Journey
            </Link>
          </div>
        </motion.div>

        {/* Clean, Simple & Sober Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="group relative p-6 rounded-xl border border-glass-border bg-white/[0.01] hover:bg-amber/[0.02] hover:border-amber/20 transition-all duration-400 flex flex-col justify-between min-h-[170px]"
            >
              {/* Card Header */}
              <div className="flex items-start justify-between mb-4">
                <span className="font-mono text-3xl leading-none text-white/5 group-hover:text-amber/15 font-bold transition-all duration-400">
                  {step.num}
                </span>
                <span className="font-mono text-[9px] px-2 py-0.5 rounded border border-white/10 text-white/40 bg-white/[0.02] tracking-wider uppercase font-semibold">
                  {step.temp}
                </span>
              </div>

              {/* Title & Icon */}
              <div className="flex items-start gap-4 mt-auto">
                <div className="w-10 h-10 rounded-lg border border-white/10 bg-white/[0.03] flex items-center justify-center text-white/60 group-hover:text-amber group-hover:border-amber/30 transition-all duration-400 flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d={step.icon} />
                  </svg>
                </div>
                <div className="min-w-0">
                  <h3 className="font-bebas text-lg md:text-xl text-cream tracking-wide group-hover:text-white transition-colors uppercase leading-snug">
                    {step.label}
                  </h3>
                  <p className="font-sans text-[12px] text-cream/50 group-hover:text-cream/60 transition-colors mt-1 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
