"use client";

import { motion } from 'framer-motion';
import { ScrollReveal, StaggerReveal, StaggerItem } from '../ui/ScrollReveal';

function RingStat({ value, max = 100, suffix, label, displayValue }: { value: number; max?: number; suffix?: string; label: string; displayValue?: string }) {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;  
  const strokeDashoffset = circumference - (Math.min(value, max) / max) * circumference;
  
  return (
    <StaggerItem>
      <div className="relative flex flex-col items-center text-center p-4">
        <div className="relative w-[140px] h-[140px] flex items-center justify-center mb-6">
          <svg width="140" height="140" className="absolute inset-0 -rotate-90">
            <circle cx="70" cy="70" r={radius} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="2" />
            <motion.circle
              cx="70" cy="70" r={radius}
              fill="none" stroke="#F97316" strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray={circumference}
              initial={{ strokeDashoffset: circumference }}
              whileInView={{ strokeDashoffset }}
              transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
              viewport={{ once: true, margin: "-10%" }}
            />
          </svg>
          <div className="font-bebas text-4xl text-cream absolute flex items-baseline">
            {displayValue ? displayValue : (
              <>
                {value}
                {suffix && <span className="text-amber text-2xl">{suffix}</span>}
              </>
            )}
          </div>
        </div>
        <div className="font-mono text-[10px] sm:text-xs text-steel uppercase tracking-widest max-w-[120px] mx-auto">
          {label}
        </div>
      </div>
    </StaggerItem>
  );
}

export function StatsBar() {
  return (
    <section className="relative py-32 bg-transparent border-b border-glass-border overflow-hidden">
      
      <div className="max-w-[1280px] mx-auto px-[5vw] relative z-10">
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-center mb-20">
            <h2 className="font-bebas text-5xl md:text-7xl text-cream uppercase tracking-wider">
              Wire In <span className="text-amber">Numbers</span>
            </h2>
            <p className="font-sans text-steel text-sm md:text-base mt-2 uppercase tracking-widest">Global Standards • Precision Engineering</p>
          </div>
        </ScrollReveal>

        <StaggerReveal className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-4 justify-items-center" staggerDelay={0.1}>
          <RingStat value={700} max={1000} suffix="+" label="Monthly MT" />
          <RingStat value={15} max={20} suffix="+" label="Years Est." />
          <RingStat value={99} max={100} suffix=".9%" label="Yield" />
          <RingStat value={450} max={500} suffix="°C" label="Zinc Bath" />
          <div className="col-span-2 md:col-span-1 flex justify-center w-full">
            <RingStat value={98} max={100} displayValue="±0.01" label="Tolerance (mm)" />
          </div>
        </StaggerReveal>
      </div>
    </section>
  );
}
