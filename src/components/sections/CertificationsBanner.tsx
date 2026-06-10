"use client";

import { motion } from 'framer-motion';
import { SplitText } from '../ui/SplitText';

export function CertificationsBanner() {
  return (
    <section className="relative py-32 bg-transparent overflow-hidden border-t border-glass-border">
      {/* Abstract Grid Glow Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-amber/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-[5vw] relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div 
             initial={{ width: 0 }}
             whileInView={{ width: "60px" }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="h-[1px] bg-amber mb-6 mx-auto"
          />
          <h3 className="font-mono text-[11px] text-amber tracking-widest uppercase mb-4">Quality Verification</h3>
          <h2 className="font-bebas text-[clamp(44px,6vw,90px)] leading-[0.85] text-cream uppercase">
            <SplitText text="CERTIFIED STANDARDS" />
          </h2>
          <p className="font-sans text-steel/70 text-sm max-w-[500px] mx-auto mt-6 font-light">
            Every batch of Khemji wire undergoes strict chemical, mechanical, and surface testing to ensure total compliance with national industrial protocols.
          </p>
        </div>

        {/* Certifications Wall */}
        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          
          {/* Card 1: IS 280 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group relative glass-panel p-8 md:p-12 rounded-3xl border border-glass-border hover:border-amber/40 transition-all duration-500 bg-charcoal/20 flex flex-col justify-between"
          >
            {/* Stamp BG Watermark */}
            <div className="absolute right-6 top-6 font-bebas text-[120px] text-amber/[0.03] select-none pointer-events-none leading-none group-hover:text-amber/[0.05] transition-colors duration-500">
              IS 280
            </div>

            <div>
              {/* Badge */}
              <div className="flex items-center gap-3 mb-8">
                <span className="w-2 h-2 rounded-full bg-amber animate-pulse" />
                <span className="font-mono text-[10px] tracking-widest uppercase text-amber">Engineering Standard</span>
              </div>

              {/* Title & ISI Icon Mock */}
              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <h3 className="font-bebas text-4xl md:text-5xl text-cream tracking-wide leading-none mb-2">IS 280 : 2006</h3>
                  <p className="font-sans text-steel font-medium text-sm">Mild Steel Wire for General Engineering</p>
                </div>
                {/* ISI Mark Mock SVG */}
                <div className="flex-shrink-0 w-16 h-16 rounded-xl border border-amber/20 bg-amber/5 flex items-center justify-center p-2 group-hover:bg-amber/10 group-hover:border-amber/40 transition-all duration-300">
                  <svg viewBox="0 0 100 100" className="w-12 h-12 text-amber" fill="currentColor">
                    <rect x="10" y="10" width="80" height="80" fill="none" stroke="currentColor" strokeWidth="6" rx="4" />
                    <text x="50" y="45" fontFamily="sans-serif" fontWeight="900" fontSize="26" textAnchor="middle" fill="currentColor">ISI</text>
                    <line x1="20" y1="58" x2="80" y2="58" stroke="currentColor" strokeWidth="4" />
                    <text x="50" y="78" fontFamily="sans-serif" fontWeight="bold" fontSize="12" textAnchor="middle" fill="currentColor">IS 280</text>
                  </svg>
                </div>
              </div>

              <p className="font-sans text-steel/70 text-[13px] leading-relaxed font-light mb-8">
                Applies to mild steel wires for general engineering purposes like binding, fencing, reinforcement, and manufacturing. Covers mandatory quality checks on tensile strength, wrap testing, diameter tolerance, and hot-dip zinc coating consistency.
              </p>

              {/* Key Specs Checklist */}
              <ul className="space-y-3 font-mono text-[11px] text-steel/80 mb-8 border-t border-glass-border pt-6">
                <li className="flex items-center gap-3">
                  <span className="text-amber">✔</span> Tensile strength testing (300 to 550 N/mm²)
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-amber">✔</span> Torsion and wrap test verification for zero cracking
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-amber">✔</span> Zinc coating weight up to 260 g/m² (Heavy Coated)
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-amber">✔</span> Dimensional tolerance checks to ±0.02mm
                </li>
              </ul>
            </div>

            <div className="font-mono text-[10px] text-steel/50 flex justify-between items-center mt-auto border-t border-glass-border/30 pt-4">
              <span>LICENSE REF: CM/L-8300142981</span>
              <span className="text-amber/70 font-semibold group-hover:text-amber transition-colors">COMPLIANT</span>
            </div>
          </motion.div>

          {/* Card 2: IS 3975 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group relative glass-panel p-8 md:p-12 rounded-3xl border border-glass-border hover:border-amber/40 transition-all duration-500 bg-charcoal/20 flex flex-col justify-between"
          >
            {/* Stamp BG Watermark */}
            <div className="absolute right-6 top-6 font-bebas text-[120px] text-amber/[0.03] select-none pointer-events-none leading-none group-hover:text-amber/[0.05] transition-colors duration-500">
              IS 3975
            </div>

            <div>
              {/* Badge */}
              <div className="flex items-center gap-3 mb-8">
                <span className="w-2 h-2 rounded-full bg-amber animate-pulse" />
                <span className="font-mono text-[10px] tracking-widest uppercase text-amber">Armouring Standard</span>
              </div>

              {/* Title & ISI Icon Mock */}
              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <h3 className="font-bebas text-4xl md:text-5xl text-cream tracking-wide leading-none mb-2">IS 3975 : 1999</h3>
                  <p className="font-sans text-steel font-medium text-sm">Mild Steel Wires for Cable Armouring</p>
                </div>
                {/* ISI Mark Mock SVG */}
                <div className="flex-shrink-0 w-16 h-16 rounded-xl border border-amber/20 bg-amber/5 flex items-center justify-center p-2 group-hover:bg-amber/10 group-hover:border-amber/40 transition-all duration-300">
                  <svg viewBox="0 0 100 100" className="w-12 h-12 text-amber" fill="currentColor">
                    <rect x="10" y="10" width="80" height="80" fill="none" stroke="currentColor" strokeWidth="6" rx="4" />
                    <text x="50" y="45" fontFamily="sans-serif" fontWeight="900" fontSize="26" textAnchor="middle" fill="currentColor">ISI</text>
                    <line x1="20" y1="58" x2="80" y2="58" stroke="currentColor" strokeWidth="4" />
                    <text x="50" y="78" fontFamily="sans-serif" fontWeight="bold" fontSize="12" textAnchor="middle" fill="currentColor">IS 3975</text>
                  </svg>
                </div>
              </div>

              <p className="font-sans text-steel/70 text-[13px] leading-relaxed font-light mb-8">
                Governs requirements for galvanized mild steel round wires, flat wires, and double-steel strips used specifically for mechanical protection and grounding in low/high voltage power cables.
              </p>

              {/* Key Specs Checklist */}
              <ul className="space-y-3 font-mono text-[11px] text-steel/80 mb-8 border-t border-glass-border pt-6">
                <li className="flex items-center gap-3">
                  <span className="text-amber">✔</span> Low resistivity values (Max 14.5 x 10⁻⁸ Ω·m at 20°C)
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-amber">✔</span> Min 10% elongation rating for flexible bending properties
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-amber">✔</span> Uniform zinc dip test (pass 4 dips of 1 min in CuSO₄)
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-amber">✔</span> Flat wire dimension ratios and round wire tolerances
                </li>
              </ul>
            </div>

            <div className="font-mono text-[10px] text-steel/50 flex justify-between items-center mt-auto border-t border-glass-border/30 pt-4">
              <span>LICENSE REF: CM/L-8300143092</span>
              <span className="text-amber/70 font-semibold group-hover:text-amber transition-colors">COMPLIANT</span>
            </div>
          </motion.div>

        </div>

        {/* Small BIS disclaimer */}
        <div className="mt-12 text-center text-[10px] font-mono text-steel/40">
          * BIS logo is a registered trademark of the Bureau of Indian Standards. License registration status active and renewed periodically.
        </div>

      </div>
    </section>
  );
}
