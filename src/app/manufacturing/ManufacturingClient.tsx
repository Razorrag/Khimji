"use client";

import { useRef, useLayoutEffect } from 'react';
import { SplitText } from '@/components/ui/SplitText';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PROCESS_STEPS = [
  {
    title: "01. Annealing",
    desc: "The cold-drawn MS wire is passed through an annealing furnace (often a molten lead bath, fluidized sand bed, or tube furnace) operating at high temperatures.",
    purpose: "Drawing makes wire hard and brittle. Annealing relieves internal stresses, restores ductility, and softens it so it can be easily bent or woven later in its life cycle.",
    img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=2000"
  },
  {
    title: "02. Rinsing (Water Quenching)",
    desc: "The wire immediately passes through a water bath or high-pressure spray system.",
    purpose: "This rapidly cools the wire down from the high annealing temperatures and washes away any residual carryover from the annealing medium (like lead or sand).",
    img: "https://images.unsplash.com/photo-1542361345-89e58247f2d5?auto=format&fit=crop&q=80&w=2000"
  },
  {
    title: "03. Pickling",
    desc: "The wire is submerged in an acid bath—typically dilute Hydrochloric Acid (HCl) or Sulfuric Acid (H2SO4)—at a controlled concentration and temperature.",
    purpose: "This is a critical chemical cleaning step. The acid strips away all rust, mill scale, and metallic oxides from the surface of the MS wire. Zinc will not bond to oxidized steel.",
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000"
  },
  {
    title: "04. Rinsing (Post-Pickling)",
    desc: "The wire goes through another highly agitated water wash.",
    purpose: "This stops the chemical reaction by washing off the acid. It prevents 'carryover' of iron salts and acid into the flux tank, which would contaminate the flux.",
    img: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&q=80&w=2000"
  },
  {
    title: "05. Fluxing",
    desc: "The wire is passed through a hot chemical solution, usually a mixture of Zinc Ammonium Chloride. This is often followed by a drying plate or hot air blower to dry the flux onto the wire.",
    purpose: "Fluxing prevents the bare steel from re-oxidizing before it hits the zinc bath, and acts as a catalyst to promote the metallurgical bonding of molten zinc to the steel.",
    img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=2000"
  },
  {
    title: "06. Galvanizing (Zinc Bath)",
    desc: "The fluxed wire is immersed in a molten zinc bath maintained at approximately 450°C to 460°C.",
    purpose: "A metallurgical reaction occurs as the wire travels through the molten zinc, forming a series of tightly bonded zinc-iron alloy layers topped by a layer of pure zinc.",
    img: "https://images.unsplash.com/photo-1542361345-89e58247f2d5?auto=format&fit=crop&q=80&w=2000"
  },
  {
    title: "07. Cleaning & Wiping",
    desc: "As the wire exits the zinc bath, it passes through a wiping mechanism. Depending on desired coating weight, plants use charcoal, asbestos pads, sand, or nitrogen gas.",
    purpose: "Wiping removes excess liquid zinc and ensures a smooth, uniform coating thickness across the wire. This dictates whether the wire has a 'commercial' or 'heavy' coating.",
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000"
  },
  {
    title: "08. Bundling (Coiling)",
    desc: "The finished GI wire is pulled through a take-up frame (coiler or spooler) at high speeds.",
    purpose: "The machinery winds the continuous wire into neat coils or onto large spools for storage, transport, and final delivery.",
    img: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&q=80&w=2000"
  }
];

export function ManufacturingClient() {
  const containerRef = useRef<HTMLDivElement>(null);
  const fillLineRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Draw the central glowing molten wire
      if (fillLineRef.current) {
        ScrollTrigger.create({
          trigger: ".process-container",
          start: "top 50%",
          end: "bottom 70%",
          scrub: 0.5,
          animation: gsap.fromTo(fillLineRef.current, 
            { scaleY: 0 }, 
            { scaleY: 1, ease: "none", transformOrigin: "top" }
          )
        });
      }

      // 2. Animate nodes and content
      const steps = gsap.utils.toArray<HTMLElement>('.process-step-item');
      
      steps.forEach((step) => {
        const nodeOuter = step.querySelector('.process-node-outer');
        const nodeInner = step.querySelector('.process-node-inner');
        const contentLeft = step.querySelector('.content-left');
        const contentRight = step.querySelector('.content-right');
        
        // Node Glow Effect
        ScrollTrigger.create({
          trigger: step,
          start: "top 50%",
          onEnter: () => {
             gsap.to(nodeInner, { backgroundColor: "#F97316", boxShadow: "0 0 25px 5px rgba(249,115,22,0.6)", scale: 1.5, duration: 0.4, ease: "back.out(2)" });
             gsap.to(nodeOuter, { borderColor: "#F97316", scale: 1.2, duration: 0.4, ease: "back.out(2)" });
          },
          onLeaveBack: () => {
             gsap.to(nodeInner, { backgroundColor: "#475569", boxShadow: "none", scale: 1, duration: 0.4 });
             gsap.to(nodeOuter, { borderColor: "rgba(255,255,255,0.1)", scale: 1, duration: 0.4 });
          }
        });

        // Content Reveal Animations
        if (contentLeft && contentRight) {
          gsap.fromTo(contentLeft, 
            { x: -60, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: step, start: "top 65%" } }
          );
          gsap.fromTo(contentRight, 
            { x: 60, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.1, scrollTrigger: { trigger: step, start: "top 65%" } }
          );
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="pt-40 pb-20 relative overflow-hidden bg-obsidian border-b border-glass-border">
        <div className="absolute inset-0 mesh-bg opacity-40 mix-blend-screen pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-transparent to-obsidian opacity-80" />
        <div className="max-w-[1280px] mx-auto px-[5vw] relative z-10 pb-10">
          <h1 className="font-bebas text-[clamp(40px,10vw,140px)] text-cream uppercase leading-[0.85] mb-6">
            <SplitText text="The Wire" />
            <br/>
            <span className="text-amber"><SplitText text="Galvanizing" delayOffset={0.2} /></span>
            <br/>
            <span className="text-outline-amber">Process</span>
          </h1>
          <p className="font-sans text-lg md:text-xl text-steel/80 font-light max-w-[700px] leading-relaxed mt-8">
            A continuous wire galvanizing plant transforms drawn Mild Steel (MS) wire into corrosion-resistant galvanized iron (GI) wire through a rigorous, sequential surface treatment and coating process. 
          </p>
        </div>
      </section>

      {/* Animated Process Journey */}
      <section className="py-24 bg-obsidian relative z-10">
        <div className="max-w-[1280px] mx-auto px-[5vw] relative">
          
          <div className="relative process-container pb-20">
            {/* Base Wire Track */}
            <div className="absolute left-[30px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/5 -translate-x-[1px] md:-translate-x-1/2 rounded-full" />
            
            {/* The Molten Zinc Wire drawing down */}
            <div 
              ref={fillLineRef} 
              className="absolute left-[30px] md:left-1/2 top-0 bottom-0 w-[4px] bg-gradient-to-b from-[#F97316] via-[#FF8C00] to-transparent -translate-x-[2px] md:-translate-x-1/2 rounded-full z-10 shadow-[0_0_20px_rgba(249,115,22,0.8)]" 
            />

            <div className="flex flex-col gap-16 md:gap-32 relative z-20">
              {PROCESS_STEPS.map((step, idx) => {
                const isEven = idx % 2 === 0;
                
                return (
                  <div key={idx} className="process-step-item w-full flex flex-col md:flex-row relative group">
                    
                    {/* The Node on the Wire */}
                    <div className="absolute left-[30px] md:left-1/2 top-[40px] md:top-1/2 -translate-y-1/2 -translate-x-1/2 z-30">
                       <div className="process-node-outer w-10 h-10 md:w-14 md:h-14 rounded-full bg-obsidian border-[2px] border-white/10 flex items-center justify-center p-1 transition-colors">
                          <div className="process-node-inner w-full h-full rounded-full bg-slate-600 transition-all duration-300 relative flex items-center justify-center text-obsidian font-bebas text-lg md:text-xl">
                            {idx + 1}
                          </div>
                       </div>
                    </div>

                    {/* Left Column */}
                    <div className={`content-left w-full md:w-1/2 pl-[80px] md:pl-0 pr-0 md:pr-16 lg:pr-24 flex items-center ${!isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                      {isEven ? (
                        /* Image on Left for Even */
                        <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden glass-panel border border-glass-border relative group-hover:border-amber/30 transition-colors duration-500 hidden md:block">
                          <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent z-10 mix-blend-multiply" />
                          <img 
                            src={step.img} 
                            alt={step.title}
                            className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                          />
                        </div>
                      ) : (
                        /* Text on Left for Odd */
                        <div className="flex flex-col gap-6 w-full hidden md:flex">
                          <h2 className="font-bebas text-4xl lg:text-5xl text-cream tracking-wide liquid-metal-text !bg-none" style={{ WebkitTextFillColor: 'currentColor' }}>{step.title}</h2>
                          <div className="glass-panel p-6 lg:p-8 rounded-xl border border-glass-border/50 group-hover:border-amber/20 transition-colors shadow-lg">
                            <h4 className="font-mono text-[10px] text-amber tracking-[0.2em] uppercase mb-4 flex items-center gap-2"><span className="w-2 h-px bg-amber"></span> The Process</h4>
                            <p className="font-sans text-steel text-sm lg:text-base leading-relaxed mb-6">{step.desc}</p>
                            <h4 className="font-mono text-[10px] text-zinc-400 tracking-[0.2em] uppercase mb-4 flex items-center gap-2"><span className="w-2 h-px bg-zinc-400"></span> The Purpose</h4>
                            <p className="font-sans text-cream/90 text-sm lg:text-base leading-relaxed">{step.purpose}</p>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Right Column */}
                    <div className={`content-right w-full md:w-1/2 pl-[80px] md:pl-16 lg:pl-24 flex items-center mt-0 ${isEven ? 'md:justify-start' : 'md:justify-end'}`}>
                      {isEven ? (
                        /* Text on Right for Even (and for mobile always show text on right side of line) */
                        <div className="flex flex-col gap-4 md:gap-6 w-full">
                          <h2 className="font-bebas text-3xl md:text-4xl lg:text-5xl text-cream tracking-wide">{step.title}</h2>
                          
                          {/* Mobile-only image */}
                          <div className="w-full aspect-video rounded-xl overflow-hidden border border-glass-border relative md:hidden my-2">
                             <img src={step.img} alt={step.title} className="w-full h-full object-cover filter grayscale contrast-125" />
                          </div>

                          <div className="glass-panel p-5 md:p-6 lg:p-8 rounded-xl border border-glass-border/50 group-hover:border-amber/20 transition-colors shadow-lg mb-4 md:mb-0">
                            <h4 className="font-mono text-[10px] text-amber tracking-[0.2em] uppercase mb-3 flex items-center gap-2"><span className="w-2 h-px bg-amber"></span> The Process</h4>
                            <p className="font-sans text-steel text-sm lg:text-base leading-relaxed mb-6">{step.desc}</p>
                            
                            <h4 className="font-mono text-[10px] text-zinc-400 tracking-[0.2em] uppercase mb-3 flex items-center gap-2"><span className="w-2 h-px bg-zinc-400"></span> The Purpose</h4>
                            <p className="font-sans text-cream/90 text-sm lg:text-base leading-relaxed">{step.purpose}</p>
                          </div>
                        </div>
                      ) : (
                         /* Image on Right for Odd */
                         <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden glass-panel border border-glass-border relative group-hover:border-amber/30 transition-colors duration-500 hidden md:block">
                           <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent z-10 mix-blend-multiply" />
                           <img 
                             src={step.img} 
                             alt={step.title}
                             className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                           />
                         </div>
                      )}
                    </div>

                  </div>
                );
              })}
            </div>
            
            {/* Glowing bottom terminus */}
            <div className="absolute left-[30px] md:left-1/2 bottom-0 w-4 h-4 -translate-x-[8px] md:-translate-x-[8px] rounded-full bg-amber shadow-[0_0_20px_#F97316] z-10 animate-pulse hidden md:block" />
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-32 bg-obsidian border-t border-glass-border relative overflow-hidden">
        <div className="absolute inset-0 mesh-bg opacity-30 mix-blend-screen" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(249,115,22,0.1),transparent_70%)]" />
        <div className="max-w-[800px] mx-auto px-[5vw] text-center relative z-10">
           <h2 className="font-bebas text-6xl md:text-7xl text-cream mb-6">Experience <span className="text-amber">Precision</span></h2>
           <p className="font-sans text-steel text-lg font-light leading-relaxed mb-10 max-w-2xl mx-auto">
             Our continuous wire galvanizing plant is designed for scale, quality, and uncompromising durability. Partner with us for your industrial wire needs.
           </p>
           <a href="/contact" className="group inline-flex items-center justify-center px-10 py-5 bg-amber text-obsidian font-mono text-xs tracking-widest uppercase font-bold rounded-full hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(249,115,22,0.3)] hover:shadow-[0_0_50px_rgba(249,115,22,0.5)]">
             <span className="relative z-10">Get a Quote</span>
             <span className="ml-3 transition-transform group-hover:translate-x-1">→</span>
           </a>
        </div>
      </section>
    </div>
  );
}
