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
    num: "01",
    desc: "High quality MS wire rod coils are selected as raw material for GI wire production.",
    purpose: "Raw material selection ensures consistent carbon content, diameter uniformity, and surface quality \u2014 the foundation of every GI wire coil.",
    detail: "Only premium low-carbon steel wire rods are sourced from certified mills. Each coil is inspected for surface defects, diameter tolerance, and metallurgical composition before entering the production line.",
    temp: "Raw Material",
    img: "/process/1.jpeg"
  },
  {
    title: "Descaling Process",
    num: "02",
    desc: "Wire rod is cleaned through descaling process to remove scale, rust and impurities.",
    purpose: "Mechanical descaling removes all oxide layer and surface contaminants, exposing clean steel for effective acid pickling and zinc bonding.",
    detail: "The wire passes through a series of breaker rolls and abrasive brushes that fracture and remove the brittle mill scale. This mechanical preparation reduces acid consumption in the subsequent pickling stage and ensures a uniformly clean surface.",
    temp: "Mechanical",
    img: "/process/2.jpeg"
  },
  {
    title: "Wire Drawing Process",
    num: "03",
    desc: "Cleaned wire is drawn through a series of dies to reduce diameter and achieve the desired strength and size.",
    purpose: "Progressive die drawing achieves precise diameter control and work-hardens the wire to meet target tensile strength specifications.",
    detail: "Wire is pulled through tungsten carbide dies of progressively smaller apertures. Each pass reduces the cross-section while increasing tensile strength through work hardening. Lubrication and cooling are critical to prevent surface damage and maintain die life.",
    temp: "Cold Process",
    img: "/process/3.jpeg"
  },
  {
    title: "Annealing Process",
    num: "04",
    desc: "Drawn wire is annealed in a controlled atmosphere to improve ductility and remove internal stresses.",
    purpose: "Controlled atmosphere annealing restores ductility lost during drawing, relieves internal stresses, and prepares the wire for uniform zinc adhesion.",
    detail: "In a nitrogen-hydrogen atmosphere furnace, the wire is heated to precisely controlled temperatures and slowly cooled. This recrystallization process softens the wire, eliminates work hardening effects, and creates a clean oxide-free surface essential for galvanizing.",
    temp: "Heat Treatment",
    img: "/process/4.jpeg"
  },
  {
    title: "Galvanizing Process",
    num: "05",
    desc: "Annealed wire is hot-dip galvanized in molten zinc to form a uniform, corrosion resistant zinc coating.",
    purpose: "Molten zinc at 450\u2013460\u00B0C reacts with steel to form tightly bonded zinc-iron alloy layers, providing 25+ years of rust protection.",
    detail: "The wire enters a bath of molten zinc maintained at 450\u2013460\u00B0C. A metallurgical reaction occurs as the wire travels through, forming sequential layers of zinc-iron alloys (Gamma, Delta, Zeta) topped with pure Eta zinc. Wiping dies control coating thickness with precision.",
    temp: "450\u2013460\u00B0C",
    img: "/process/5.jpeg"
  },
  {
    title: "Cooling & Surface Finish",
    num: "06",
    desc: "Galvanized wire is cooled and passivated to enhance surface finish and increase corrosion resistance.",
    purpose: "Rapid quenching solidifies the zinc coating, locks in the metallurgical bond, and passivation adds an extra protective chromate layer.",
    detail: "Immediately after galvanizing, the wire passes through a water quench tank that rapidly solidifies the molten zinc coating. A final chromate passivation treatment is applied to prevent white rust formation during storage and transit.",
    temp: "Water Quench",
    img: "/process/6.jpeg"
  },
  {
    title: "Winding & Packing",
    num: "07",
    desc: "GI wire is wound into coils, checked for quality and packed securely for safe delivery.",
    purpose: "Precise coiling into 25\u2013150 kg bundles with Hessian wrapping and wire binding ensures scratch-free transit and easy handling at site.",
    detail: "Finished wire is precision-wound into uniform coils using automatic winding machines. Each coil is weighed, tagged with a batch number, wrapped in Hessian cloth, and secured with steel strapping. Material Test Certificates accompany every dispatch.",
    temp: "Final Stage",
    img: "/process/7.jpeg"
  }
];

export function ManufacturingClient() {
  const containerRef = useRef<HTMLDivElement>(null);
  const fillLineRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      // Fill line scroll animation
      if (fillLineRef.current) {
        ScrollTrigger.create({
          trigger: ".process-journey",
          start: "top 40%",
          end: "bottom 60%",
          scrub: 0.8,
          animation: gsap.fromTo(fillLineRef.current,
            { scaleY: 0, transformOrigin: "top" },
            { scaleY: 1, ease: "none" }
          )
        });
      }

      // Step reveal animations
      gsap.utils.toArray<HTMLElement>('.process-step').forEach((step) => {
        const img = step.querySelector('.step-img');
        const content = step.querySelector('.step-content');
        const node = step.querySelector('.step-node');

        if (img) {
          gsap.fromTo(img,
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
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef}>
      {/* ═══════════ HERO ═══════════ */}
      <section className="relative pt-36 pb-20 md:pb-28 overflow-hidden bg-transparent border-b border-glass-border">
        {/* Background flame gradient */}
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
              <li><a href="/" className="hover:text-amber transition-colors">Home</a></li>
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
              <h1 className="font-bebas text-[clamp(48px,10vw,110px)] text-cream uppercase leading-[0.82] mb-4">
                The Wire
                <br />
                <span className="text-amber">Galvanizing</span>
                <br />
                <span className="text-outline-amber">Process</span>
              </h1>
              <p className="font-sans text-sm md:text-base text-white/60 font-light max-w-[520px] leading-relaxed mt-6">
                From raw MS wire rod to corrosion-resistant GI wire. A meticulously engineered 7-step journey where steel meets fire, chemistry, and precision.
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
              <div className="grid grid-cols-7 gap-1.5">
                {PROCESS_STEPS.map((s, i) => (
                  <div key={i} className="w-7 h-7 rounded-md bg-white/5 border border-white/10 flex items-center justify-center hover:bg-amber/10 hover:border-amber/40 transition-colors">
                    <span className="font-mono text-[9px] text-cream font-bold">{s.num}</span>
                  </div>
                ))}
              </div>
              <div className="mt-3 flex items-center gap-2">
                <div className="w-6 h-[1px] bg-amber/60" />
                <span className="font-mono text-[8px] text-white/50 tracking-widest uppercase">Raw Material to Dispatch</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════ PROCESS JOURNEY ═══════════ */}
      <section className="process-journey py-16 md:py-24 lg:py-28 bg-transparent relative">
        {/* The timeline line */}
        <div className="absolute left-[30px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/5 -translate-x-[1px] md:-translate-x-1/2" />

        {/* The animated fill line */}
        <div
          ref={fillLineRef}
          className="absolute left-[30px] md:left-1/2 top-0 bottom-0 w-[3px] bg-gradient-to-b from-amber via-amber/80 to-transparent -translate-x-[1.5px] md:-translate-x-1/2 z-10 shadow-[0_0_20px_rgba(249,115,22,0.4)]"
        />

        <div className="max-w-[1280px] mx-auto px-5 md:px-[5vw] relative z-20">

          {PROCESS_STEPS.map((step, i) => {
            const isEven = i % 2 === 0;
            return (
              <div key={i} className="process-step relative mb-20 md:mb-28 last:mb-0">
                {/* Timeline Node */}
                <div className="step-node absolute left-[30px] md:left-1/2 top-8 md:top-1/2 md:-translate-y-1/2 -translate-x-1/2 z-30 w-14 h-14 rounded-full bg-obsidian border-2 border-amber/40 flex items-center justify-center shadow-[0_0_20px_rgba(249,115,22,0.2)]">
                  <span className="font-bebas text-lg md:text-xl text-amber leading-none">{step.num}</span>
                </div>

                <div className="flex flex-col md:flex-row items-start gap-6 md:gap-10 lg:gap-16 pl-[68px] md:pl-0">
                  {/* Image Side */}
                  <div className={`step-img w-full md:w-1/2 overflow-hidden rounded-2xl border border-white/10 ${isEven ? 'md:order-1' : 'md:order-2'}`}>
                    <div className="aspect-[16/10] relative overflow-hidden">
                      <img
                        src={step.img}
                        alt={step.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                      {/* Temp badge on image */}
                      <div className="absolute bottom-4 left-4">
                        <span className="font-mono text-[9px] text-amber tracking-widest uppercase bg-black/60 px-3 py-1.5 rounded-md border border-amber/30">
                          {step.temp}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className={`step-content w-full md:w-1/2 ${isEven ? 'md:order-2' : 'md:order-1'}`}>
                    <div className="max-w-[450px]">
                      {/* Step number */}
                      <div className="flex items-center gap-3 mb-3">
                        <span className="font-mono text-[10px] text-amber tracking-widest uppercase">Step {step.num}</span>
                        <div className="h-[1px] w-8 bg-amber/50" />
                      </div>

                      {/* Title */}
                      <h2 className="font-bebas text-3xl md:text-4xl lg:text-5xl text-cream tracking-wide uppercase mb-4 leading-[0.9]">
                        {step.title}
                      </h2>

                      {/* Description */}
                      <p className="font-sans text-sm md:text-base text-white/80 leading-relaxed mb-4">
                        {step.desc}
                      </p>

                      {/* Detail */}
                      <div className="blob-card p-4 md:p-5 rounded-xl border border-white/10 bg-white/[0.02] mb-4">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber animate-pulse" />
                          <span className="font-mono text-[9px] text-amber tracking-widest uppercase">How It Works</span>
                        </div>
                        <p className="font-sans text-[12px] md:text-[13px] text-white/60 leading-relaxed">
                          {step.detail}
                        </p>
                      </div>

                      {/* Purpose */}
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
    </div>
  );
}
