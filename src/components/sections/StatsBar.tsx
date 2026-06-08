import { AnimatedStat } from '../ui/AnimatedStat';
import { motion } from 'framer-motion';

function RingStat({ value, max = 100, suffix, label }: { value: number; max?: number; suffix?: string; label: string }) {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;  
  const strokeDashoffset = circumference - (Math.min(value, max) / max) * circumference;
  
  return (
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
        <div className="font-bebas text-4xl text-cream absolute">
          {value}{suffix && <span className="text-amber text-2xl">{suffix}</span>}
        </div>
      </div>
      <div className="font-mono text-[10px] sm:text-xs text-steel uppercase tracking-widest max-w-[120px] mx-auto">
        {label}
      </div>
    </div>
  );
}

export function StatsBar() {
  return (
    <section className="relative py-32 bg-obsidian border-b border-glass-border overflow-hidden">
      <div className="absolute inset-0 mesh-bg opacity-30 mix-blend-screen pointer-events-none" />
      
      <div className="max-w-[1280px] mx-auto px-[5vw] relative z-10">
        <div className="text-center mb-20">
          <h2 className="font-bebas text-5xl md:text-7xl text-cream uppercase tracking-wider">
            Wire In <span className="text-amber">Numbers</span>
          </h2>
          <p className="font-sans text-steel text-sm md:text-base mt-2 uppercase tracking-widest">Global Standards • Precision Engineering</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-4 justify-items-center">
          <RingStat value={700} max={1000} suffix="+" label="Monthly MT" />
          <RingStat value={15} max={20} suffix="+" label="Years Est." />
          <RingStat value={99} max={100} suffix=".9%" label="Yield" />
          <RingStat value={450} max={500} suffix="°C" label="Zinc Bath" />
          <RingStat value={0} max={100} suffix=".01" label="Tolerance (mm)" />
        </div>
      </div>
    </section>
  );
}
