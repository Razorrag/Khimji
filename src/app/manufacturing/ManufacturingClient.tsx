"use client";

import { useRef, useLayoutEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PROCESS_STEPS = [
  {
    title: "MS Wire Rod Coil",
    desc: "High quality MS wire rod coils are selected as raw material for GI wire production.",
    purpose: "Raw material selection ensures consistent carbon content, diameter uniformity, and surface quality — the foundation of every GI wire coil.",
    temp: "Raw Material",
    img: "/process/1.jpeg"
  },
  {
    title: "Descaling Process",
    desc: "Wire rod is cleaned through descaling process to remove scale, rust and impurities.",
    purpose: "Mechanical descaling removes all oxide layer and surface contaminants, exposing clean steel for effective acid pickling and zinc bonding.",
    temp: "Mechanical",
    img: "/process/2.jpeg"
  },
  {
    title: "Wire Drawing Process",
    desc: "Cleaned wire is drawn through a series of dies to reduce diameter and achieve the desired strength and size.",
    purpose: "Progressive die drawing achieves precise diameter control and work-hardens the wire to meet target tensile strength specifications.",
    temp: "Cold Process",
    img: "/process/3.jpeg"
  },
  {
    title: "Annealing Process",
    desc: "Drawn wire is annealed in a controlled atmosphere to improve ductility and remove internal stresses.",
    purpose: "Controlled atmosphere annealing restores ductility lost during drawing, relieves internal stresses, and prepares the wire for uniform zinc adhesion.",
    temp: "Heat Treatment",
    img: "/process/4.jpeg"
  },
  {
    title: "Galvanizing Process",
    desc: "Annealed wire is hot-dip galvanized in molten zinc to form a uniform, corrosion resistant zinc coating.",
    purpose: "Molten zinc at 450\u2013460\u00B0C reacts with steel to form tightly bonded zinc-iron alloy layers, providing 25+ years of rust protection.",
    temp: "450\u2013460\u00B0C",
    img: "/process/5.jpeg"
  },
  {
    title: "Cooling & Surface Finish",
    desc: "Galvanized wire is cooled and passivated to enhance surface finish and increase corrosion resistance.",
    purpose: "Rapid quenching solidifies the zinc coating, locks in the metallurgical bond, and passivation adds an extra protective chromate layer.",
    temp: "Water Quench",
    img: "/process/6.jpeg"
  },
  {
    title: "Winding & Packing",
    desc: "GI wire is wound into coils, checked for quality and packed securely for safe delivery.",
    purpose: "Precise coiling into 25\u2013150 kg bundles with Hessian wrapping and wire binding ensures scratch-free transit and easy handling at site.",
    temp: "Final Stage",
    img: "/process/7.jpeg"
  }
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

export function ManufacturingClient() {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.mfg-step').forEach((step) => {
        if (!step) return;
        gsap.fromTo(step,
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0,
            duration: 0.6,
            ease: 'power3.out',
            scrollTrigger: { trigger: step, start: 'top 88%' }
          }
        );
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef}>
      {/* ═══════════ HERO ═══════════ */}
      <section className="relative pt-36 pb-16 md:pb-20 overflow-hidden bg-transparent border-b border-glass-border">
        <div className="max-w-[1280px] mx-auto px-5 md:px-[5vw] relative z-10">
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 md:mb-10"
          >
            <ol className="flex items-center gap-2 font-mono text-[10px] md:text-xs uppercase tracking-widest text-steel">
              <li><a href="/" className="hover:text-amber transition-colors">Home</a></li>
              <li style={{ color: "rgba(249,115,22,0.4)" }}>/</li>
              <li className="text-cream">Manufacturing</li>
            </ol>
          </motion.nav>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <div>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "60px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-[2px] bg-amber mb-6"
              />
              <h1 className="font-bebas text-[clamp(48px,10vw,100px)] text-cream uppercase leading-[0.85] mb-4">
                The Wire
                <br />
                <span className="text-amber">Galvanizing</span>
                <br />
                <span className="text-outline-amber">Process</span>
              </h1>
              <p className="font-sans text-sm md:text-base text-white/70 font-light max-w-[500px] leading-relaxed">
                From raw MS wire rod to corrosion-resistant GI wire through a rigorous 7-step galvanizing process.
              </p>
            </div>

            <div className="blob-card p-5 rounded-xl border border-white/10 flex-shrink-0">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-1.5 h-1.5 rounded-full bg-amber animate-pulse" />
                <span className="font-mono text-[10px] text-amber tracking-widest uppercase">7-Step Process</span>
              </div>
              <div className="grid grid-cols-7 gap-1.5">
                {PROCESS_STEPS.map((_, i) => (
                  <div key={i} className="w-7 h-7 rounded-md bg-white/5 border border-white/10 flex items-center justify-center">
                    <span className="font-mono text-[9px] text-cream font-bold">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                ))}
              </div>
              <div className="mt-3 flex items-center gap-2">
                <div className="w-6 h-[1px] bg-amber/60" />
                <span className="font-mono text-[8px] text-white/50 tracking-widest uppercase">Raw Material to Dispatch</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ PROCESS FLOW ═══════════ */}
      <section className="py-16 md:py-24 bg-transparent relative z-10">
        <div className="max-w-[1280px] mx-auto px-5 md:px-[5vw]">

          {/* ── Desktop: Images Row + Cards Row ── */}
          <div className="hidden lg:block">
            {/* Images + Arrows */}
            <div className="flex items-center">
              {PROCESS_STEPS.map((step, i) => (
                <div key={i} className="flex items-center flex-1 min-w-0">
                  <div className="relative w-[110px] xl:w-[120px] h-[110px] xl:h-[120px] rounded-full overflow-hidden border-[2.5px] border-amber/70 shadow-[0_0_24px_rgba(249,115,22,0.12)] flex-shrink-0 mx-auto">
                    <img src={step.img} alt={step.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                  </div>
                  {i < PROCESS_STEPS.length - 1 && <ArrowRight />}
                </div>
              ))}
            </div>

            {/* Cards: Number + Title + Desc + Icon */}
            <div className="flex items-stretch mt-6 gap-2.5 xl:gap-3">
              {PROCESS_STEPS.map((step, i) => (
                <div key={i} className="mfg-step flex-1 flex flex-col items-center text-center rounded-xl border border-white/[0.06] bg-white/[0.02] px-3 xl:px-4 py-5 xl:py-6">
                  <div className="w-9 h-9 rounded-full border-2 border-amber flex items-center justify-center bg-amber/15 mb-3">
                    <span className="font-bebas text-sm text-amber leading-none">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <h3 className="font-bebas text-[14px] xl:text-[16px] text-amber tracking-wide uppercase mb-2 leading-tight">{step.title}</h3>
                  <p className="font-sans text-[10px] xl:text-[11px] text-white/80 leading-[1.75] mb-3 flex-1">{step.desc}</p>
                  <div className="w-full pt-3 border-t border-white/[0.06]">
                    <p className="font-sans text-[9px] xl:text-[10px] text-white/55 leading-[1.7]">{step.purpose}</p>
                  </div>
                  <div className="mt-3 font-mono text-[8px] text-amber/60 tracking-widest uppercase">{step.temp}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Mobile: Vertical Cards ── */}
          <div className="flex lg:hidden flex-col">
            {PROCESS_STEPS.map((step, i) => (
              <div key={i}>
                <div className="mfg-step flex items-center gap-4 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                  <div className="relative w-[62px] h-[62px] rounded-full overflow-hidden border-[2px] border-amber/70 shadow-[0_0_14px_rgba(249,115,22,0.1)] flex-shrink-0">
                    <img src={step.img} alt={step.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-5 h-5 rounded-full border-[1.5px] border-amber flex items-center justify-center bg-amber/15 flex-shrink-0">
                        <span className="font-bebas text-[10px] text-amber leading-none">{String(i + 1).padStart(2, '0')}</span>
                      </span>
                      <h3 className="font-bebas text-[14px] text-amber tracking-wide uppercase leading-tight truncate">{step.title}</h3>
                    </div>
                    <p className="font-sans text-[11px] text-white/80 leading-[1.6] line-clamp-2 pl-7 mb-2">{step.desc}</p>
                    <p className="font-sans text-[10px] text-white/50 leading-[1.5] line-clamp-2 pl-7">{step.purpose}</p>
                    <div className="pl-7 mt-1.5">
                      <span className="font-mono text-[8px] text-amber/60 tracking-widest uppercase">{step.temp}</span>
                    </div>
                  </div>
                </div>
                {i < PROCESS_STEPS.length - 1 && <ArrowDown />}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ═══════════ CTA ═══════════ */}
      <section className="py-16 md:py-24 bg-transparent border-t border-glass-border relative overflow-hidden">
        <div className="max-w-[800px] mx-auto px-5 md:px-[5vw] text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-bebas text-4xl md:text-5xl lg:text-7xl text-cream mb-4 md:mb-6">Experience <span className="text-amber">Precision</span></h2>
            <p className="font-sans text-white/70 text-base md:text-lg font-light leading-relaxed mb-8 md:mb-10 max-w-2xl mx-auto">
              Our continuous wire galvanizing plant is designed for scale, quality, and uncompromising durability. Partner with us for your industrial wire needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
              <Link href="/contact" className="blob-btn-product font-mono text-xs tracking-widest uppercase font-bold px-8 py-4 inline-flex items-center justify-center group transition-all duration-300 w-full sm:w-auto">
                <span className="relative z-10">Buy Now</span>
                <span className="ml-3 transition-transform group-hover:translate-x-1">&rarr;</span>
              </Link>
              <Link href="/quality" className="glass-btn font-mono text-xs tracking-widest uppercase px-8 py-4 inline-flex items-center justify-center w-full sm:w-auto">
                View Quality Standards
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
