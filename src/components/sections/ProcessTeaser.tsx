"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import Link from 'next/link';

const STEPS = [
  { num: "01", label: "Wire Drawing",       temp: "Cold",    icon: "M9 3H6a2 2 0 00-2 2v3m0 0h14M4 8v8a2 2 0 002 2h8a2 2 0 002-2V8" },
  { num: "02", label: "Surface Cleaning",   temp: "Mech",    icon: "M7 8h10M7 12h10M7 16h10" },
  { num: "03", label: "Pickling",           temp: "HCl",     icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" },
  { num: "04", label: "Fluxing",            temp: "ZnCl\u2082",  icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" },
  { num: "05", label: "Hot Dip Galvanizing",temp: "450\u00B0C",   icon: "M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" },
  { num: "06", label: "Cooling",            temp: "Water",   icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" },
  { num: "07", label: "Testing",            temp: "QC Lab",  icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
  { num: "08", label: "Packing",            temp: "Coil",    icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" },
  { num: "09", label: "Dispatch",           temp: "PAN India",icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 5H4m0 0l4 4m-4-4l4-4" },
];

const ROWS = [
  [0, 1, 2],
  [5, 4, 3],
  [6, 7, 8],
];

function AnimatedHexagon({ step, index, totalDelay }: { step: typeof STEPS[0]; index: number; totalDelay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-20px' });

  return (
    <motion.div
      ref={ref}
      className="relative group flex-shrink-0"
      initial={{ opacity: 0, scale: 0.3, rotate: -15 }}
      animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
      transition={{ 
        duration: 0.8, 
        delay: totalDelay, 
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <div className="relative w-[130px] h-[150px] md:w-[150px] md:h-[173px]">
        {/* Outer glow pulse */}
        <div className="absolute inset-[-16px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none hex-glow" />

        {/* Hexagon border */}
        <div
          className="absolute inset-0 transition-all duration-500 group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.25)]"
          style={{
            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
            background: 'linear-gradient(135deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.28) 100%)',
          }}
        />

        {/* Inner hexagon */}
        <div
          className="absolute inset-[2px] transition-all duration-500"
          style={{
            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
            background: 'rgba(255,255,255,0.03)',
            backdropFilter: 'blur(8px)',
          }}
        />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4">
          <span className="font-mono text-[10px] text-white/50 tracking-widest mb-1">{step.num}</span>
          <div className="w-9 h-9 rounded-full border border-white/25 bg-white/[0.06] flex items-center justify-center text-white/80 group-hover:bg-white/12 group-hover:border-white/50 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.15)] transition-all duration-500 mb-1.5">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <path d={step.icon} />
            </svg>
          </div>
          <h4 className="font-bebas text-[14px] md:text-[16px] text-white tracking-wide leading-tight text-center group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] transition-all duration-400">
            {step.label}
          </h4>
          <span className="font-mono text-[7px] md:text-[8px] px-1.5 py-0.5 rounded-full border border-white/15 text-white/40 bg-white/[0.04] mt-1 whitespace-nowrap">
            {step.temp}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

function AnimatedArrow({ direction, delay }: { direction: 'right' | 'left' | 'down'; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-10px' });

  if (direction === 'down') {
    return (
      <motion.div
        ref={ref}
        className="flex justify-center py-2"
        initial={{ opacity: 0, scaleY: 0 }}
        animate={isInView ? { opacity: 1, scaleY: 1 } : {}}
        transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        <svg viewBox="0 0 12 40" className="w-3 h-10" fill="none">
          <line x1="6" y1="0" x2="6" y2="30" stroke="white" strokeWidth="1.5" strokeDasharray="5 4" opacity="0.35"
                style={{ animation: 'flowV 1.2s linear infinite' }} />
          <path d="M2 30 L6 38 L10 30" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
        </svg>
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className="flex items-center justify-center w-[50px] md:w-[70px] flex-shrink-0"
      initial={{ opacity: 0, scaleX: 0 }}
      animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <svg viewBox="0 0 70 12" className="w-full h-3" fill="none">
        {direction === 'right' ? (
          <>
            <line x1="0" y1="6" x2="56" y2="6" stroke="white" strokeWidth="1.5" strokeDasharray="5 4" opacity="0.35"
                  style={{ animation: 'flowH 1.2s linear infinite' }} />
            <path d="M56 2 L64 6 L56 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
          </>
        ) : (
          <>
            <line x1="14" y1="6" x2="70" y2="6" stroke="white" strokeWidth="1.5" strokeDasharray="5 4" opacity="0.35"
                  style={{ animation: 'flowH 1.2s linear infinite reverse' }} />
            <path d="M14 2 L6 6 L14 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
          </>
        )}
      </svg>
    </motion.div>
  );
}

export function ProcessTeaser() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const headerOpacity = useTransform(scrollYProgress, [0, 0.15], [0, 1]);
  const headerY = useTransform(scrollYProgress, [0, 0.15], [40, 0]);

  return (
    <section ref={sectionRef} className="relative py-16 md:py-24 overflow-hidden">

      <div className="max-w-[1100px] mx-auto px-[5vw] relative z-10">

        {/* Header */}
        <motion.div
          style={{ opacity: headerOpacity, y: headerY }}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12 md:mb-16"
        >
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="h-[2px] w-8 bg-white/40" />
              <span className="font-mono text-[10px] text-white/40 tracking-[0.3em] uppercase">How It&apos;s Made</span>
            </div>
            <h2 className="font-bebas text-[clamp(32px,4.5vw,52px)] leading-[0.88] text-white uppercase">
              The Wire <span className="text-amber">Journey</span>
            </h2>
          </div>
          <div className="flex items-center gap-4 flex-shrink-0">
            <div className="text-right">
              <div className="font-bebas text-3xl text-amber leading-none">09</div>
              <div className="font-mono text-[9px] text-white/30 tracking-wider uppercase">Steps</div>
            </div>
            <Link
              href="/manufacturing"
              className="blob-btn-product font-mono text-[9px] tracking-widest uppercase font-bold px-5 py-2.5 inline-flex items-center gap-2 group"
            >
              <span>Full Journey</span>
              <span className="group-hover:translate-x-1 transition-transform">\u2192</span>
            </Link>
          </div>
        </motion.div>

        {/* Desktop: Hexagonal Grid */}
        <div className="hidden md:flex flex-col items-center">
          {ROWS.map((row, rowIdx) => (
            <div key={rowIdx} className="flex flex-col items-center">
              <div className="flex items-center justify-center">
                {row.map((stepIdx, colIdx) => {
                  const isLast = colIdx === row.length - 1;
                  const isRTL = rowIdx === 1;
                  const stepDelay = rowIdx * 0.4 + colIdx * 0.15;
                  return (
                    <div key={stepIdx} className="flex items-center">
                      <AnimatedHexagon step={STEPS[stepIdx]} index={rowIdx * 3 + colIdx} totalDelay={stepDelay} />
                      {!isLast && (
                        <AnimatedArrow 
                          direction={isRTL ? 'left' : 'right'} 
                          delay={stepDelay + 0.1} 
                        />
                      )}
                    </div>
                  );
                })}
              </div>
              {rowIdx < ROWS.length - 1 && (
                <div className={`flex ${rowIdx === 0 ? 'justify-end' : 'justify-start'}`} style={{ width: '100%', maxWidth: '700px', paddingRight: rowIdx === 0 ? '80px' : '0', paddingLeft: rowIdx === 1 ? '80px' : '0' }}>
                  <AnimatedArrow direction="down" delay={rowIdx * 0.4 + 0.5} />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile */}
        <div className="md:hidden relative pl-8">
          <div className="absolute left-3 top-3 bottom-3 w-[2px] bg-white/10" />
          <motion.div
            className="absolute left-3 top-3 w-[2px] bg-gradient-to-b from-white/50 via-white/30 to-transparent origin-top"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.5, ease: "easeOut" }}
            style={{ height: 'calc(100% - 24px)' }}
          />
          <div className="flex flex-col gap-2">
            {STEPS.map((step, i) => (
              <div key={step.num} className="relative">
                <div className="absolute -left-[26px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 border-white/40 bg-transparent shadow-[0_0_10px_rgba(255,255,255,0.2)] z-10" />
                <motion.div
                  className="flex items-center gap-4 py-3 px-4 rounded-xl border border-white/[0.08] bg-white/[0.02] hover:border-white/20 transition-all duration-400 group"
                  initial={{ opacity: 0, x: 30, filter: 'blur(4px)' }}
                  whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                  viewport={{ once: true, margin: '-20px' }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="relative w-10 h-11 flex-shrink-0">
                    <div
                      className="absolute inset-0 border border-white/20 bg-white/[0.04] group-hover:border-white/40 group-hover:bg-white/[0.08] transition-all duration-400"
                      style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-white/60 group-hover:text-white/90 transition-colors">
                        <path d={step.icon} />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="font-mono text-[9px] text-white/30 tracking-wider">{step.num}</span>
                      <h4 className="font-bebas text-base text-white/80 tracking-wide leading-none group-hover:text-white transition-colors">{step.label}</h4>
                    </div>
                    <span className="font-mono text-[8px] text-white/30 border border-white/10 rounded-full px-1.5 py-0.5 inline-block">{step.temp}</span>
                  </div>
                </motion.div>
                {i < STEPS.length - 1 && (
                  <div className="flex justify-center py-0.5">
                    <svg viewBox="0 0 8 12" className="w-2 h-3" fill="none">
                      <path d="M4 0 L4 8 M1 6 L4 10 L7 6" stroke="white" strokeWidth="1" strokeLinecap="round" opacity="0.2" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes flowH {
          0%   { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -18; }
        }
        @keyframes flowV {
          0%   { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -18; }
        }
        .hex-glow {
          background: radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%);
          filter: blur(20px);
          animation: hexPulse 3s ease-in-out infinite;
        }
        @keyframes hexPulse {
          0%, 100% { opacity: 0; transform: scale(0.9); }
          50% { opacity: 1; transform: scale(1.1); }
        }
      ` }} />
    </section>
  );
}
