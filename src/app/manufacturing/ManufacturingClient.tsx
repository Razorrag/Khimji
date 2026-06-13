"use client";

import { useRef, useState, useCallback, useEffect } from 'react';
import Link from 'next/link';
import NextImage from 'next/image';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/* ── Phase 1: MS Wire Rod → MS Wire (3 steps) ── */
const MS_WIRE_STEPS = [
  {
    title: "Raw Material Inspection",
    num: "01",
    desc: "MS wire rod coils are inspected for surface defects, diameter tolerance, and carbon content before entering the production line.",
    purpose: "Rigorous incoming inspection ensures consistent metallurgical composition and dimensional accuracy \u2014 the foundation of every GI wire coil.",
    detail: "Only premium low-carbon steel wire rods sourced from certified mills pass through. Each coil undergoes visual inspection for surface defects, checks for diameter tolerance, and verification of mill test certificates confirming carbon content and tensile strength.",
    temp: "Raw Material",
    img: "/process/1.jpeg"
  },
  {
    title: "Descaling & Surface Preparation",
    num: "02",
    desc: "Wire rod is mechanically descaled to remove mill scale, rust, and surface impurities.",
    purpose: "Mechanical descaling removes the brittle oxide layer, exposing clean steel for effective downstream processing.",
    detail: "The wire passes through a series of breaker rolls and abrasive brushes that fracture and remove mill scale. This mechanical preparation ensures a uniformly clean surface and reduces acid consumption during pickling.",
    temp: "Mechanical",
    img: "/process/2.jpeg"
  },
  {
    title: "Wire Drawing",
    num: "03",
    desc: "Cleaned wire is drawn through a series of tungsten carbide dies to reduce diameter and achieve target tensile strength.",
    purpose: "Progressive die drawing achieves precise diameter control and work-hardens the wire to meet strength specifications.",
    detail: "Wire is pulled through tungsten carbide dies of progressively smaller apertures. Each pass reduces cross-section while increasing tensile strength through work hardening. Lubrication and cooling prevent surface damage and maintain die life.",
    temp: "Cold Process",
    img: "/process/3.jpeg"
  }
];

/* ── Phase 2: MS Wire → GI Wire (8 steps) ── */
const GI_WIRE_STEPS = [
  {
    title: "Annealing",
    num: "04",
    desc: "Drawn MS wire is annealed in a controlled atmosphere furnace to improve ductility and remove internal stresses.",
    purpose: "Controlled atmosphere annealing restores ductility, relieves work hardening, and creates a clean oxide-free surface essential for uniform zinc adhesion.",
    detail: "In a nitrogen-hydrogen atmosphere furnace, the wire is heated to precisely controlled temperatures and slowly cooled. This recrystallization process softens the wire and eliminates internal stresses from the drawing process.",
    temp: "Heat Treatment",
    img: "/process/4.jpeg"
  },
  {
    title: "Water Quenching & Cooling",
    num: "05",
    desc: "Annealed wire is rapidly cooled in a water quench to lock in the softened metallurgical structure.",
    purpose: "Rapid quenching stabilises the recrystallised grain structure, preparing the wire for the chemical cleaning stages that follow.",
    detail: "Immediately after the annealing furnace, the wire passes through a water quench tank. This controlled cooling halts the annealing process at the optimal point, preserving ductility while preventing surface oxidation before pickling.",
    temp: "Rapid Cool",
    img: "/process/6.jpeg"
  },
  {
    title: "Pickling",
    num: "06",
    desc: "Wire passes through a dilute acid bath to remove residual oxide and create a chemically clean surface.",
    purpose: "Acid pickling dissolves any remaining scale or oxide layer, exposing pure steel for a metallurgically sound zinc-iron bond.",
    detail: "The wire is immersed in a dilute hydrochloric acid bath. The acid dissolves residual iron oxides without attacking the base steel. Bath concentration, temperature, and immersion time are carefully controlled to achieve a uniformly etched surface.",
    temp: "Chemical Bath",
    img: "/more%20images/1.jpeg"
  },
  {
    title: "Rinsing",
    num: "07",
    desc: "Pickled wire is thoroughly rinsed with high-pressure water to remove all acid residues.",
    purpose: "Complete rinsing prevents acid carryover into the flux bath, ensuring consistent flux chemistry and uniform galvanizing.",
    detail: "High-pressure water jets rinse the wire immediately after pickling, removing all traces of acid and dissolved iron salts. Multi-stage rinsing with cascading water flow minimises water consumption while achieving a neutral surface pH.",
    temp: "Water Wash",
    img: "/more%20images/2.jpeg"
  },
  {
    title: "Fluxing",
    num: "08",
    desc: "Wire passes through a flux solution that promotes wetting and ensures a uniform reaction with molten zinc.",
    purpose: "The zinc ammonium chloride flux cleans the wire surface and prevents re-oxidation just before it enters the zinc bath, enabling a flawless coating.",
    detail: "The wire passes through a hot flux solution (typically zinc ammonium chloride). The flux decomposes on contact with the hot wire, releasing hydrochloric acid that gives a final etch, while the zinc salt deposits a thin layer that promotes immediate alloying with molten zinc.",
    temp: "Chemical Prep",
    img: "/more%20images/3.jpeg"
  },
  {
    title: "Hot-Dip Galvanizing",
    num: "09",
    desc: "Wire enters a bath of molten zinc at 450\u2013460\u00B0C, forming tightly bonded zinc-iron alloy layers.",
    purpose: "The metallurgical reaction between iron and molten zinc produces a multi-layer coating (Gamma, Delta, Zeta, Eta) that delivers 25+ years of corrosion protection.",
    detail: "The wire travels through a bath of molten zinc maintained at 450\u2013460\u00B0C. A diffusion-controlled reaction forms sequential intermetallic layers \u2014 Gamma (adjacent to steel), Delta, Zeta, and a pure Eta layer on the surface. Immersion time and bath chemistry are precisely controlled.",
    temp: "450\u2013460\u00B0C",
    img: "/process/5.jpeg"
  },
  {
    title: "Wiping & Coating Control",
    num: "10",
    desc: "As the wire exits the zinc bath, adjustable wiping dies control coating thickness with precision.",
    purpose: "Wiping dies meter the exact coating weight required by IS 280 standards, removing excess zinc while ensuring uniform coverage.",
    detail: "Immediately above the zinc bath, a set of adjustable ceramic or asbestos wiping dies surround the exiting wire. The dies scrape off excess molten zinc, controlling the final coating thickness to within tight tolerances. Die alignment and pressure are critical for uniform coating.",
    temp: "Precision",
    img: "/more%20images/4.jpeg"
  },
  {
    title: "Cooling, Coiling & Inspection",
    num: "11",
    desc: "Galvanized wire is air-cooled, precision-wound into coils, inspected, and prepared for dispatch.",
    purpose: "Controlled cooling sets the final coating, while automated winding and batch traceability ensure every coil meets quality standards.",
    detail: "The wire is air-cooled on a long cooling conveyor to solidify the coating fully. Automatic winding machines produce uniform coils weighing 25\u2013150 kg. Each coil is weighed, tagged with a unique batch number, sampled for QC testing, and wrapped in Hessian cloth with steel strapping.",
    temp: "Final Stage",
    img: "/process/7.jpeg"
  }
];

const ALL_STEPS = [...MS_WIRE_STEPS, ...GI_WIRE_STEPS];

const FINISHED_PRODUCTS = [
  {
    name: "Hot Dip Galvanized MS Wire",
    desc: "IS 280 compliant galvanized steel wire manufactured through our 11-step hot-dip process. Available in soft, half-hard, and hard grades for fencing, binding, and industrial applications.",
    spec: "1.25 mm \u2013 4.00 mm"
  },
  {
    name: "Round Wire for Cable Armouring",
    desc: "IS 3975 compliant galvanized round wire engineered for mechanical protection in power, control, and communication cables. Tested for low resistivity and high elongation.",
    spec: "1.25 mm \u2013 4.00 mm"
  },
  {
    name: "Formed Wire (Strip) for Cable Armouring",
    desc: "IS 3975 compliant galvanized formed wire (flat strip) for cable armouring applications. Precision-formed with uniform zinc coating for reliable cable protection.",
    spec: "4.00 mm \u00d7 0.80 mm"
  }
];

function useImagePreload(srcs: string[]): boolean {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (srcs.length === 0) return;
    let cancelled = false;
    let completed = 0;

    const checkDone = () => {
      if (cancelled) return;
      completed++;
      if (completed >= srcs.length) {
        setLoaded(true);
      }
    };

    srcs.forEach((src) => {
      const img = new Image();
      img.onload = checkDone;
      img.onerror = checkDone;
      img.src = src;
    });

    return () => { cancelled = true; };
  }, [srcs]);

  return srcs.length === 0 || loaded;
}

function useScrollTriggerRefresh() {
  const refresh = useCallback(() => ScrollTrigger.refresh(), []);

  useEffect(() => {
    const imgs = document.querySelectorAll<HTMLImageElement>('.process-step img');
    if (imgs.length === 0) { refresh(); return; }

    let count = 0;
    const check = () => {
      count++;
      if (count >= imgs.length) refresh();
    };
    imgs.forEach((img) => {
      if (img.complete) check();
      else { img.addEventListener('load', check, { once: true }); img.addEventListener('error', check, { once: true }); }
    });
  }, [refresh]);
}

export function ManufacturingClient() {
  const containerRef = useRef<HTMLDivElement>(null);
  const fillLineRef = useRef<HTMLDivElement>(null);
  const journeyRef = useRef<HTMLDivElement>(null);
  const gsapInitRef = useRef(false);
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const allImageSrcs = ALL_STEPS.map((s) => s.img);
  const imagesReady = useImagePreload(allImageSrcs);

  useScrollTriggerRefresh();

  // Track active step via IntersectionObserver
  useEffect(() => {
    const steps = document.querySelectorAll<HTMLElement>('.process-step');
    if (!steps.length) return;

    const stepsArr = Array.from(steps);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length) {
          const target = visible[Math.floor(visible.length / 2)].target as HTMLElement;
          const idx = stepsArr.indexOf(target);
          setActiveStep(idx >= 0 ? idx : null);
        }
      },
      { threshold: 0.3, rootMargin: '-80px 0px' }
    );

    steps.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!imagesReady || gsapInitRef.current) return;
    gsapInitRef.current = true;

    const ctx = gsap.context(() => {
      if (fillLineRef.current) {
        ScrollTrigger.create({
          trigger: journeyRef.current,
          start: "top 40%",
          end: "bottom 60%",
          scrub: 0.8,
          animation: gsap.fromTo(fillLineRef.current,
            { scaleY: 0, transformOrigin: "top" },
            { scaleY: 1, ease: "none" }
          )
        });
      }

      gsap.utils.toArray<HTMLElement>('.process-step').forEach((step) => {
        const viz = step.querySelector('.step-visual');
        const content = step.querySelector('.step-content');
        const node = step.querySelector('.step-node');

        if (viz) {
          gsap.fromTo(viz,
            { scale: 1.3, opacity: 0 },
            {
              scale: 1, opacity: 1,
              duration: 0.8, ease: 'power3.out',
              scrollTrigger: { trigger: step, start: 'top 75%' }
            }
          );
        }
        if (content) {
          gsap.fromTo(content,
            { y: 40, opacity: 0 },
            {
              y: 0, opacity: 1,
              duration: 0.6, ease: 'power3.out', delay: 0.15,
              scrollTrigger: { trigger: step, start: 'top 75%' }
            }
          );
        }
        if (node) {
          ScrollTrigger.create({
            trigger: step,
            start: 'top 60%',
            onEnter: () => {
              gsap.to(node, {
                scale: 1.4,
                borderColor: '#F97316',
                boxShadow: '0 0 30px 8px rgba(249,115,22,0.5)',
                duration: 0.4,
                ease: 'back.out(2)'
              });
            },
            onLeaveBack: () => {
              gsap.to(node, {
                scale: 1,
                borderColor: 'rgba(249,115,22,0.4)',
                boxShadow: 'none',
                duration: 0.4
              });
            }
          });
        }
      });
    }, containerRef);

    ScrollTrigger.refresh();

    return () => {
      ctx.revert();
      gsapInitRef.current = false;
    };
  }, [imagesReady]);

  return (
    <div ref={containerRef}>
      {/* ═══════════ HERO ═══════════ */}
      <section className="relative pt-36 pb-20 md:pb-28 overflow-hidden bg-transparent border-b border-glass-border">
        <div className="absolute inset-0 bg-gradient-to-b from-amber/[0.03] via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-amber/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-[1280px] mx-auto px-5 md:px-[5vw] relative z-10">
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 md:mb-12"
          >
            <ol className="flex items-center gap-2 font-mono text-[10px] md:text-xs uppercase tracking-widest text-steel">
              <li><Link href="/" className="hover:text-amber transition-colors">Home</Link></li>
              <li style={{ color: "rgba(249,115,22,0.4)" }}>/</li>
              <li className="text-cream">Manufacturing</li>
            </ol>
          </motion.nav>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10 items-end">
            <div>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "60px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-[2px] bg-amber mb-6"
              />
              <h1 className="font-bebas text-[clamp(36px,8.5vw,110px)] text-cream uppercase leading-[0.82] mb-4">
                Manufacturing
                <br />
                <span className="text-amber">Process</span>
              </h1>
              <p className="font-sans text-sm md:text-base text-white/60 font-light max-w-[520px] leading-relaxed mt-6">
                From Steel Wire Rod to Galvanized Wire &mdash; a meticulously engineered 11-step process where raw material is transformed into corrosion-resistant GI wire through drawing, heat treatment, chemical preparation, and hot-dip galvanizing.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="blob-card p-5 rounded-xl border border-white/10 flex-shrink-0"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-1.5 h-1.5 rounded-full bg-amber animate-pulse" />
                <span className="font-mono text-[10px] text-amber tracking-widest uppercase">The Journey</span>
              </div>
              <div className="grid grid-cols-6 gap-1.5">
                {ALL_STEPS.map((s, i) => (
                  <div key={i} className="group/step relative w-7 h-7 rounded-md bg-white/5 border border-white/10 flex items-center justify-center hover:bg-amber/10 hover:border-amber/40 transition-colors">
                    <span className="font-mono text-[9px] text-cream font-bold">{s.num}</span>
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap font-mono text-[7px] text-amber bg-obsidian px-2 py-1 rounded border border-amber/20 opacity-0 group-hover/step:opacity-100 transition-opacity pointer-events-none z-50">
                      {s.title}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-3 flex items-center gap-2">
                <div className="w-6 h-[1px] bg-amber/60" />
                <span className="font-mono text-[8px] text-white/50 tracking-widest uppercase">MS Rod to GI Wire</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════ PROCESS JOURNEY ═══════════ */}
      <section ref={journeyRef} className="process-journey py-16 md:py-24 lg:py-28 bg-transparent relative">
        <div className="absolute left-[30px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/5 -translate-x-[1px] md:-translate-x-1/2" />
        <div
          ref={fillLineRef}
          className="absolute left-[30px] md:left-1/2 top-0 bottom-0 w-[3px] bg-gradient-to-b from-amber via-amber/80 to-transparent -translate-x-[1.5px] md:-translate-x-1/2 z-10 shadow-[0_0_20px_rgba(249,115,22,0.4)]"
        />

        <div className="max-w-[1280px] mx-auto px-5 md:px-[5vw] relative z-20">

          {/* ── Phase 1 Label ── */}
          <div className="relative mb-16 md:mb-20 pl-[68px] md:pl-0">
            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-gradient-to-r from-amber/60 to-transparent max-w-[120px]" />
              <span className="font-mono text-[10px] text-amber tracking-[0.2em] uppercase">Phase 01</span>
            </div>
            <h2 className="font-bebas text-2xl md:text-3xl text-cream/80 tracking-wide uppercase mt-2">
              Conversion of MS Wire Rod to MS Wire
            </h2>
          </div>

          {MS_WIRE_STEPS.map((step, i) => {
            const isEven = i % 2 === 0;
            return (
              <div key={i} className="process-step relative mb-20 md:mb-28 last:mb-0">
                <div className="step-node absolute left-[30px] md:left-1/2 top-8 md:top-1/2 md:-translate-y-1/2 -translate-x-1/2 z-30 w-14 h-14 rounded-full bg-obsidian border-2 border-amber/40 flex items-center justify-center shadow-[0_0_20px_rgba(249,115,22,0.2)]">
                  <span className="font-bebas text-lg md:text-xl text-amber leading-none">{step.num}</span>
                </div>

                <div className="flex flex-col md:flex-row items-start gap-6 md:gap-10 lg:gap-16 pl-[68px] md:pl-0">
                  <div className={`step-visual w-full md:w-1/2 overflow-hidden rounded-2xl border border-white/10 ${isEven ? 'md:order-1' : 'md:order-2'}`}>
                    <div className="aspect-[16/10] relative overflow-hidden bg-obsidian">
                      <NextImage
                        src={step.img}
                        alt={step.title}
                        fill
                        className="object-cover brightness-[0.8] contrast-[1.05]"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute bottom-4 left-4">
                        <span className="font-mono text-[9px] text-amber tracking-widest uppercase bg-black/70 px-3 py-1.5 rounded-md border border-amber/30">
                          {step.temp}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className={`step-content w-full md:w-1/2 ${isEven ? 'md:order-2' : 'md:order-1'}`}>
                    <div className="max-w-[450px]">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="font-mono text-[10px] text-amber tracking-widest uppercase">Step {step.num}</span>
                        <div className="h-[1px] w-8 bg-amber/50" />
                      </div>
                      <h2 className="font-bebas text-3xl md:text-4xl lg:text-5xl text-cream tracking-wide uppercase mb-4 leading-[0.9]">
                        {step.title}
                      </h2>
                      <p className="font-sans text-sm md:text-base text-white/80 leading-relaxed mb-4">
                        {step.desc}
                      </p>
                      <div className="blob-card p-4 md:p-5 rounded-xl border border-white/10 bg-white/[0.02] mb-4">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber animate-pulse" />
                          <span className="font-mono text-[9px] text-amber tracking-widest uppercase">How It Works</span>
                        </div>
                        <p className="font-sans text-[12px] md:text-[13px] text-white/60 leading-relaxed">
                          {step.detail}
                        </p>
                      </div>
                      <p className="font-sans text-[11px] md:text-xs text-white/45 leading-relaxed italic border-l-2 border-amber/30 pl-3">
                        {step.purpose}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* ── Phase 2 Label ── */}
          <div className="relative my-16 md:my-20 pl-[68px] md:pl-0">
            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-gradient-to-r from-amber/60 to-transparent max-w-[120px]" />
              <span className="font-mono text-[10px] text-amber tracking-[0.2em] uppercase">Phase 02</span>
            </div>
            <h2 className="font-bebas text-2xl md:text-3xl text-cream/80 tracking-wide uppercase mt-2">
              Hot-Dip Galvanizing Process
            </h2>
          </div>

          {GI_WIRE_STEPS.map((step, i) => {
            const isEven = i % 2 === 0;
            return (
              <div key={i} className="process-step relative mb-20 md:mb-28 last:mb-0">
                <div className="step-node absolute left-[30px] md:left-1/2 top-8 md:top-1/2 md:-translate-y-1/2 -translate-x-1/2 z-30 w-14 h-14 rounded-full bg-obsidian border-2 border-amber/40 flex items-center justify-center shadow-[0_0_20px_rgba(249,115,22,0.2)]">
                  <span className="font-bebas text-lg md:text-xl text-amber leading-none">{step.num}</span>
                </div>

                <div className="flex flex-col md:flex-row items-start gap-6 md:gap-10 lg:gap-16 pl-[68px] md:pl-0">
                  <div className={`step-visual w-full md:w-1/2 overflow-hidden rounded-2xl border border-white/10 ${isEven ? 'md:order-1' : 'md:order-2'}`}>
                    <div className="aspect-[16/10] relative overflow-hidden bg-obsidian">
                      <NextImage
                        src={step.img}
                        alt={step.title}
                        fill
                        className="object-cover brightness-[0.8] contrast-[1.05]"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute bottom-4 left-4">
                        <span className="font-mono text-[9px] text-amber tracking-widest uppercase bg-black/70 px-3 py-1.5 rounded-md border border-amber/30">
                          {step.temp}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className={`step-content w-full md:w-1/2 ${isEven ? 'md:order-2' : 'md:order-1'}`}>
                    <div className="max-w-[450px]">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="font-mono text-[10px] text-amber tracking-widest uppercase">Step {step.num}</span>
                        <div className="h-[1px] w-8 bg-amber/50" />
                      </div>
                      <h2 className="font-bebas text-3xl md:text-4xl lg:text-5xl text-cream tracking-wide uppercase mb-4 leading-[0.9]">
                        {step.title}
                      </h2>
                      <p className="font-sans text-sm md:text-base text-white/80 leading-relaxed mb-4">
                        {step.desc}
                      </p>
                      <div className="blob-card p-4 md:p-5 rounded-xl border border-white/10 bg-white/[0.02] mb-4">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber animate-pulse" />
                          <span className="font-mono text-[9px] text-amber tracking-widest uppercase">How It Works</span>
                        </div>
                        <p className="font-sans text-[12px] md:text-[13px] text-white/60 leading-relaxed">
                          {step.detail}
                        </p>
                      </div>
                      <p className="font-sans text-[11px] md:text-xs text-white/45 leading-relaxed italic border-l-2 border-amber/30 pl-3">
                        {step.purpose}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* End terminus */}
          <div className="relative flex justify-center mt-8">
            <div className="w-4 h-4 rounded-full bg-amber shadow-[0_0_30px_#F97316] animate-pulse" />
          </div>
          <p className="text-center font-mono text-[9px] text-amber/60 tracking-widest uppercase mt-4">End of Process</p>
        </div>
      </section>

      {/* ═══════════ PROCESS FLOW DIAGRAM ═══════════ */}
      <section className="py-20 md:py-28 bg-transparent border-t border-glass-border relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber/[0.02] via-transparent to-transparent pointer-events-none" />

        <div className="max-w-[1280px] mx-auto px-5 md:px-[5vw]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px flex-1 bg-gradient-to-r from-amber/60 to-transparent max-w-[80px]" />
              <span className="font-mono text-[10px] text-amber tracking-[0.2em] uppercase">Visual Overview</span>
            </div>
            <h2 className="font-bebas text-3xl md:text-5xl lg:text-6xl text-cream tracking-wide uppercase mb-4">
              Process Flow
            </h2>
            <p className="font-sans text-sm md:text-base text-white/60 font-light max-w-[600px] leading-relaxed mb-10">
              End-to-end journey of GI wire manufacturing &mdash; from incoming MS wire rod to the finished galvanized product.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="overflow-x-auto pb-4"
          >
            <div className="flex items-center gap-2 min-w-max">
              <div className="blob-card px-4 py-3 rounded-lg border border-white/10 bg-amber/10 shrink-0">
                <span className="font-mono text-[10px] text-cream whitespace-nowrap">MS Wire Rod</span>
              </div>
              {[
                "Raw Material Inspection",
                "Descaling & Surface Preparation",
                "Wire Drawing",
                "Annealing",
                "Water Quenching & Cooling",
                "Pickling",
                "Rinsing",
                "Fluxing",
                "Hot-Dip Galvanizing",
                "Wiping & Coating Control",
                "Cooling, Coiling & Inspection"
              ].map((label, i) => (
                <div key={i} className="flex items-center gap-2 group/arrow">
                  <svg className="w-4 h-4 text-amber/40 shrink-0 group-hover/arrow:text-amber transition-colors duration-300 flowing-arrow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                  <div className="blob-card px-4 py-3 rounded-lg border border-white/10 shrink-0 transition-all duration-300 hover:border-amber/30 hover:bg-amber/[0.03]">
                    <span className="font-mono text-[10px] text-white/80 whitespace-nowrap">{label}</span>
                  </div>
                </div>
              ))}
              <svg className="w-4 h-4 text-amber/40 shrink-0 flowing-arrow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
              <div className="blob-card px-4 py-3 rounded-lg border border-green-500/30 bg-green-500/10 shrink-0">
                <span className="font-mono text-[10px] text-green-400 whitespace-nowrap font-bold">Finished GI Wire</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════ FINISHED PRODUCTS ═══════════ */}
      <section className="py-20 md:py-28 bg-transparent border-t border-glass-border relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber/[0.02] via-transparent to-transparent pointer-events-none" />

        <div className="max-w-[1280px] mx-auto px-5 md:px-[5vw]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px flex-1 bg-gradient-to-r from-amber/60 to-transparent max-w-[80px]" />
              <span className="font-mono text-[10px] text-amber tracking-[0.2em] uppercase">Our Range</span>
            </div>
            <h2 className="font-bebas text-3xl md:text-5xl lg:text-6xl text-cream tracking-wide uppercase mb-4">
              Finished <span className="text-amber">Products</span>
            </h2>
            <p className="font-sans text-sm md:text-base text-white/60 font-light max-w-[600px] leading-relaxed mb-10">
              From our galvanizing lines emerge a complete range of GI wire products serving construction, agriculture, industry, and infrastructure.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {FINISHED_PRODUCTS.map((product, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="blob-card p-6 rounded-xl border border-white/10 hover:border-amber/20 transition-all duration-500 group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber/10 border border-amber/20 flex items-center justify-center">
                    <span className="font-bebas text-sm text-amber">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                </div>
                <h3 className="font-bebas text-xl md:text-2xl text-cream tracking-wide uppercase mb-2">{product.name}</h3>
                <p className="font-sans text-[12px] md:text-[13px] text-white/60 leading-relaxed mb-3">{product.desc}</p>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[9px] text-amber tracking-widest uppercase">Spec</span>
                  <div className="h-[1px] w-4 bg-amber/40" />
                  <span className="font-mono text-[9px] text-white/50">{product.spec}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ CTA ═══════════ */}
      <section className="py-20 md:py-28 bg-transparent border-t border-glass-border relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber/[0.02] via-transparent to-transparent pointer-events-none" />
        <div className="max-w-[800px] mx-auto px-5 md:px-[5vw] text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-bebas text-4xl md:text-5xl lg:text-7xl text-cream mb-4 md:mb-6">
              Experience <span className="text-amber">Precision</span>
            </h2>
            <p className="font-sans text-white/60 text-base md:text-lg font-light leading-relaxed mb-8 md:mb-10 max-w-2xl mx-auto">
              Every coil that leaves our facility carries 30+ years of metallurgical expertise. Partner with us for wire that performs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
              <a href="https://wa.me/919829277869?text=I'm%20interested%20in%20your%20products%20at%20Khemji%20Wire.%20Please%20share%20pricing%20and%20availability." target="_blank" rel="noreferrer" className="blob-btn-product font-mono text-xs tracking-widest uppercase font-bold px-8 py-4 inline-flex items-center justify-center group transition-all duration-300 w-full sm:w-auto">
                <span className="relative z-10">Buy Now</span>
                <span className="ml-3 transition-transform group-hover:translate-x-1">&rarr;</span>
              </a>
              <Link href="/quality" className="glass-btn font-mono text-xs tracking-widest uppercase px-8 py-4 inline-flex items-center justify-center w-full sm:w-auto">
                View Quality Standards
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════ FLOATING STEP INDICATOR ═══════════ */}
      {activeStep !== null && (
        <div className="hidden md:flex fixed right-4 lg:right-8 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-2">
          <span className="font-mono text-[8px] text-amber/60 tracking-widest uppercase mb-1">Step</span>
          <div className="flex flex-col items-center gap-1.5">
            {ALL_STEPS.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  const el = document.querySelectorAll<HTMLElement>('.process-step')[i];
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === activeStep
                    ? 'bg-amber scale-150 shadow-[0_0_10px_rgba(249,115,22,0.6)]'
                    : 'bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to step ${i + 1}`}
              />
            ))}
          </div>
          <span className="font-mono text-[8px] text-amber/60 tracking-widest uppercase mt-1">
            {String(activeStep + 1).padStart(2, '0')}/{String(ALL_STEPS.length).padStart(2, '0')}
          </span>
        </div>
      )}
    </div>
  );
}
