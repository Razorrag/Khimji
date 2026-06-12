"use client";

import { useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const STEPS = [
  { num: "01", label: "MS Wire Rod Coil", desc: "High quality MS wire rod coils are selected as raw material for GI wire production.", icon: "M4 4h16v16H4z M8 8h8v8H8z M12 2v4 M12 18v4 M2 12h4 M18 12h4", img: "/process/1.jpeg" },
  { num: "02", label: "Descaling Process", desc: "Wire rod is cleaned through descaling process to remove scale, rust and impurities.", icon: "M12 2v6 M12 16v6 M4.93 4.93l4.24 4.24 M14.83 14.83l4.24 4.24 M2 12h6 M16 12h6 M4.93 19.07l4.24-4.24 M14.83 9.17l4.24-4.24", img: "/process/2.jpeg" },
  { num: "03", label: "Wire Drawing Process", desc: "Cleaned wire is drawn through a series of dies to reduce diameter and achieve the desired strength and size.", icon: "M4 12h16 M12 4v16 M8 8l4-4 4 4 M8 16l4 4 4-4", img: "/process/3.jpeg" },
  { num: "04", label: "Annealing Process", desc: "Drawn wire is annealed in a controlled atmosphere to improve ductility and remove internal stresses.", icon: "M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z", img: "/process/4.jpeg" },
  { num: "05", label: "Galvanizing Process", desc: "Annealed wire is hot-dip galvanized in molten zinc to form a uniform, corrosion resistant zinc coating.", icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z", img: "/process/5.jpeg" },
  { num: "06", label: "Cooling & Surface Finish", desc: "Galvanized wire is cooled and passivated to enhance surface finish and increase corrosion resistance.", icon: "M12 2v4 M12 18v4 M4.93 4.93l2.83 2.83 M16.24 16.24l2.83 2.83 M2 12h4 M18 12h4 M4.93 19.07l2.83-2.83 M16.24 7.76l2.83-2.83", img: "/process/6.jpeg" },
  { num: "07", label: "Winding & Packing", desc: "GI wire is wound into coils, checked for quality and packed securely for safe delivery.", icon: "M4 4h16v16H4z M8 8h8v8H8z", img: "/process/7.jpeg" },
];

function ArrowRight() {
  return (
    <div className="flex items-center justify-center flex-shrink-0 w-5 lg:w-7 xl:w-9 self-start mt-[50px] xl:mt-[54px]">
      <svg viewBox="0 0 36 10" fill="none" className="w-full h-2.5">
        <path d="M0 5h28M24 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-amber/60" />
      </svg>
    </div>
  );
}

function ArrowDown() {
  return (
    <div className="flex items-center justify-center py-2.5">
      <svg viewBox="0 0 14 18" fill="none" className="w-3 h-4">
        <path d="M7 0v12M2.5 8.5L7 13l4.5-4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-amber/60" />
      </svg>
    </div>
  );
}

export function ProcessTeaser() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={sectionRef} className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber/[0.015] to-transparent pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-5 md:px-[5vw] relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-5 mb-12 md:mb-16"
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
              <div className="font-bebas text-3xl text-amber leading-none">07</div>
              <div className="font-mono text-[9px] text-white/50 tracking-wider uppercase">Steps</div>
            </div>
            <Link
              href="/manufacturing"
              className="glass-btn font-mono text-[10px] tracking-widest uppercase px-6 py-3 inline-flex items-center hover:bg-amber hover:text-obsidian hover:border-amber transition-all duration-300"
            >
              Full Journey
            </Link>
          </div>
        </motion.div>

        {/* ═══════════════ DESKTOP ═══════════════ */}
        <div className="hidden lg:block">
          {/* Images row with arrows */}
          <div className="flex items-center">
            {STEPS.map((step, i) => (
              <div key={step.num} className="flex items-center flex-1 min-w-0">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="relative w-[100px] xl:w-[115px] h-[100px] xl:h-[115px] rounded-full overflow-hidden border-[2.5px] border-amber/70 shadow-[0_0_24px_rgba(249,115,22,0.12)] flex-shrink-0 mx-auto"
                >
                  <img src={step.img} alt={step.label} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                </motion.div>
                {i < STEPS.length - 1 && <ArrowRight />}
              </div>
            ))}
          </div>

          {/* Cards row */}
          <div className="flex items-stretch mt-6 gap-2.5 xl:gap-3">
            {STEPS.map((step) => (
              <div key={step.num} className="flex-1 flex flex-col items-center text-center rounded-xl border border-white/[0.06] bg-white/[0.02] px-3 xl:px-4 py-5 xl:py-6">
                {/* Number */}
                <div className="w-9 h-9 rounded-full border-2 border-amber flex items-center justify-center bg-amber/15 mb-3">
                  <span className="font-bebas text-sm text-amber leading-none">{step.num}</span>
                </div>

                {/* Title */}
                <h3 className="font-bebas text-[14px] xl:text-[16px] text-amber tracking-wide uppercase mb-2 leading-tight font-bold">
                  {step.label}
                </h3>

                {/* Description */}
                <p className="font-sans text-[10px] xl:text-[11px] text-white/80 leading-[1.75] mb-5 flex-1">
                  {step.desc}
                </p>

                {/* Icon */}
                <div className="w-10 h-10 rounded-lg border border-amber/25 bg-amber/[0.07] flex items-center justify-center text-amber/80">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
                    <path d={step.icon} />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ═══════════════ MOBILE ═══════════════ */}
        <div className="flex lg:hidden flex-col">
          {STEPS.map((step, i) => (
            <div key={step.num}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-4 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4"
              >
                {/* Image */}
                <div className="relative w-[62px] h-[62px] rounded-full overflow-hidden border-[2px] border-amber/70 shadow-[0_0_14px_rgba(249,115,22,0.1)] flex-shrink-0">
                  <img src={step.img} alt={step.label} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-5 h-5 rounded-full border-[1.5px] border-amber flex items-center justify-center bg-amber/15 flex-shrink-0">
                      <span className="font-bebas text-[10px] text-amber leading-none">{step.num}</span>
                    </span>
                    <h3 className="font-bebas text-[14px] text-amber tracking-wide uppercase leading-tight truncate">
                      {step.label}
                    </h3>
                  </div>
                  <p className="font-sans text-[11px] text-white/80 leading-[1.6] line-clamp-2 pl-7">
                    {step.desc}
                  </p>
                </div>

                {/* Icon */}
                <div className="w-9 h-9 rounded-lg border border-amber/25 bg-amber/[0.07] flex items-center justify-center text-amber/80 flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <path d={step.icon} />
                  </svg>
                </div>
              </motion.div>
              {i < STEPS.length - 1 && <ArrowDown />}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
