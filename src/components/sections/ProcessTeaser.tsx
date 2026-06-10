"use client";

import { motion } from 'framer-motion';
import { SplitText } from '../ui/SplitText';
import Link from 'next/link';

const STEPS = [
  { icon: "⚙️", label: "Wire Drawing", num: "01", desc: "MS wire rod diameter reduction" },
  { icon: "🔥", label: "Annealing", num: "02", desc: "Thermal stress relief & softening" },
  { icon: "🧪", label: "Pickling", num: "03", desc: "Acid bath surface scaling removal" },
  { icon: "⚡", label: "Fluxing", num: "04", desc: "Rust prevention & binding catalyst" },
  { icon: "🏭", label: "Galvanizing", num: "05", desc: "450°C molten zinc hot dip bath" },
  { icon: "📦", label: "Dispatch & QC", num: "06", desc: "Batch test, coiling & verification" },
];

export function ProcessTeaser() {
  return (
    <section className="relative py-32 bg-transparent overflow-hidden border-t border-glass-border">
      <div className="max-w-[1280px] mx-auto px-[5vw] relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
          <div>
            <motion.div 
               initial={{ width: 0 }}
               whileInView={{ width: "60px" }}
               transition={{ duration: 0.8 }}
               className="h-[1px] bg-amber mb-6"
            />
            <h3 className="font-mono text-[11px] text-amber tracking-widest uppercase mb-4">Production Timeline</h3>
            <h2 className="font-bebas text-[clamp(44px,6vw,90px)] leading-[0.85] text-cream uppercase">
              <SplitText text="THE PRODUCTION" /> <br />
              <span className="text-steel"><SplitText text="STRAND" delayOffset={0.2} /></span>
            </h2>
          </div>
           <Link href="/manufacturing" className="glass-btn font-mono text-[11px] uppercase tracking-widest px-8 py-4 inline-flex items-center justify-center gap-3 group">
            See Full Journey
            <ArrowRightIcon />
          </Link>
        </div>

        {/* Step Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-6 relative">
          
          {/* Connecting Line (Dashed) */}
          <div className="absolute top-[28%] left-10 right-10 h-[1px] border-t border-dashed border-glass-border pointer-events-none hidden lg:block" />

          {STEPS.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group flex flex-col items-center text-center relative z-10"
            >
              {/* Card Container */}
               <div className="w-full blob-card p-6 rounded-2xl border border-glass-border group-hover:border-amber/50 transition-all duration-500 bg-charcoal/30 flex flex-col items-center h-full">
                 <span className="font-mono text-[10px] text-amber/60 font-semibold mb-4 self-start px-2.5 py-0.5 rounded-full"
                       style={{ backgroundColor: "rgba(249,115,22,0.05)", border: "1px solid rgba(249,115,22,0.1)" }}>{step.num}</span>
                <span className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 select-none">{step.icon}</span>
                <h4 className="font-bebas text-2xl text-cream mb-2 tracking-wide leading-none group-hover:text-amber transition-colors">{step.label}</h4>
                <p className="font-sans text-[11px] text-steel/70 font-light mt-1 leading-normal max-w-[120px]">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

function ArrowRightIcon() {
  return (
    <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  );
}
