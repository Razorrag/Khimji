"use client";

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';

const QUALITY_TESTS = [
  {
    id: 'diameter',
    title: "Diameter Testing",
    desc: "Digital micrometer verification on every coil — tolerance held to ±0.01mm ensuring dimensional accuracy across full batch lengths.",
    metric: "±0.01mm",
    unit: "Tolerance",
    detail: "Inline micrometer checks every 100m of wire. Digital verification logged per batch.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="1" />
        <path d="M12 3v3m0 12v3M3 12h3m12 0h3" strokeLinecap="round" />
      </svg>
    )
  },
  {
    id: 'zinc',
    title: "Zinc Coating Testing",
    desc: "Gravimetric acid-strip method measures mass of zinc per m². Light, Medium, and Heavy coating classes verified against IS 280 tables.",
    metric: "60–300 g/m²",
    unit: "Coating Weight",
    detail: "Antimony chloride stripping test. Results compared against IS 280 minimum tables per wire diameter.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M4 6h16M4 10h16M4 14h16M4 18h16" strokeLinecap="round" />
        <circle cx="8" cy="6" r="2" fill="currentColor" fillOpacity="0.2" />
        <circle cx="16" cy="10" r="2" fill="currentColor" fillOpacity="0.3" />
        <circle cx="10" cy="14" r="2" fill="currentColor" fillOpacity="0.4" />
      </svg>
    )
  },
  {
    id: 'uts',
    title: "UTS Testing",
    desc: "Universal Testing Machine verifies Ultimate Tensile Strength against grade specification — soft, half-hard, or hard — before dispatch.",
    metric: "300–550 N/mm²",
    unit: "Tensile Strength",
    detail: "Tensile break test on calibrated UTM. Test certificates issued per batch.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M12 2v20M8 6l4-4 4 4M8 18l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    id: 'surface',
    title: "Surface Finish Inspection",
    desc: "Visual and tactile inspection for rough spots, zinc drips, bare patches, or surface porosity — zero tolerance for sub-standard finish.",
    metric: "Visual + Touch",
    unit: "Inspection Method",
    detail: "Bright light surface scan and trained inspector hand-verification.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    )
  },
  {
    id: 'resistivity',
    title: "Resistivity Testing",
    desc: "Mandatory for IS 3975 cable armouring wire. Electrical resistance measured per km — must not exceed 14.5 Ω/km at 20°C.",
    metric: "≤14.5 Ω/km",
    unit: "Max Resistance",
    detail: "Kelvin 4-wire bridge method. Critical for cable earthing continuity compliance.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
];

const qualityPillars = [
  { icon: '🔬', title: 'In-House Testing Lab', desc: 'Equipped with calibrated UTM, digital micrometers, coating weight balance, and resistivity bridge for complete quality verification.' },
  { icon: '📋', title: 'Batch Documentation', desc: 'Every production batch receives a Material Test Certificate with dimensional, tensile, and coating data for full traceability.' },
  { icon: '🎯', title: 'IS Standard Compliance', desc: 'Products manufactured and tested strictly against IS 280 (MS Wire) and IS 3975 (Formed Wire) Indian national standards.' },
  { icon: '👁️', title: 'Visual Inspection', desc: 'Trained QC inspectors verify surface finish, coating uniformity, and coil presentation before dispatch clearance.' },
];

export function Quality() {
  const containerRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-100px' });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section ref={containerRef} id="quality" className="relative bg-transparent overflow-hidden">

      {/* ───── Page Hero ───── */}
      <div className="relative pt-36 pb-20 bg-transparent">
        <div className="max-w-[1280px] mx-auto px-[5vw]">
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <ol className="flex items-center gap-2 font-mono text-[10px] md:text-xs uppercase tracking-widest text-steel">
              <li><a href="/" className="hover:text-amber transition-colors">Home</a></li>
              <li style={{ color: "rgba(249,115,22,0.4)" }}>/</li>
              <li className="text-cream">Quality</li>
            </ol>
          </motion.nav>

          <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
            <div className="max-w-[650px]">
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "60px" }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="h-[2px] bg-amber mb-6"
              />
              <h1 className="font-bebas text-[clamp(56px,8vw,120px)] leading-[0.85] text-cream mb-6">
                Quality You Can<br/>
                <span className="text-amber">Trust</span>
              </h1>
              <p className="font-sans text-base lg:text-lg text-cream/80 leading-relaxed">
                At Khemji Wire & Wire Pvt. Ltd., quality is not a department — it&apos;s built into every metre of wire we produce. Rigorous inspections at every stage ensure our products meet and exceed stringent industry standards.
              </p>
            </div>

            {/* Animated cert badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={isHeaderInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="cert-seal flex-shrink-0"
            >
              <div className="text-center">
                <div className="font-bebas text-2xl text-amber leading-none">BIS</div>
                <div className="font-mono text-[8px] text-cream/60 tracking-wider mt-1">CERTIFIED</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ───── Quality Pillars ───── */}
      <div className="py-20 bg-transparent border-t border-glass-border">
        <div className="max-w-[1280px] mx-auto px-[5vw]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {qualityPillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="blob-card p-7 rounded-2xl text-center group"
              >
                <div className="text-3xl mb-4">{pillar.icon}</div>
                <h3 className="font-bebas text-lg text-cream tracking-wider uppercase mb-3">{pillar.title}</h3>
                <p className="font-sans text-[12px] text-cream/60 leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ───── Detailed Tests ───── */}
      <div className="py-20 bg-transparent border-t border-glass-border relative industrial-grid-bg">
        <div className="max-w-[1280px] mx-auto px-[5vw] relative z-10">
          <div className="mb-16">
            <h3 className="font-mono text-[11px] text-amber tracking-widest uppercase mb-4">Our Methodology</h3>
            <h2 className="font-bebas text-[clamp(48px,6vw,80px)] leading-[0.85] text-cream">
              <span className="text-amber">Uncompromising</span><br/>
              Quality Control
            </h2>
          </div>

          <div className="border-t border-glass-border">
            {QUALITY_TESTS.map((test, i) => (
              <motion.div
                key={test.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative group flex flex-col md:flex-row md:items-center justify-between py-12 px-8 -mx-8 border-b border-glass-border hover:border-transparent transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-charcoal/80 scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 ease-[0.16,1,0.3,1] pointer-events-none rounded-xl" />

                <div className="flex items-center gap-10 md:w-1/2 mb-6 md:mb-0 relative z-10">
                  <div className="w-14 h-14 rounded-full border border-amber/25 bg-amber/[0.06] flex items-center justify-center text-amber flex-shrink-0 group-hover:border-amber/50 group-hover:bg-amber/10 transition-all duration-500">
                    {test.icon}
                  </div>
                  <div>
                    <h3 className="font-bebas text-3xl lg:text-4xl text-cream transition-colors duration-500 tracking-wide group-hover:text-amber">{test.title}</h3>
                    <p className="font-sans text-sm text-cream/70 mt-2 leading-relaxed group-hover:text-cream/90 transition-colors duration-500">{test.desc}</p>
                  </div>
                </div>

                <div className="md:w-1/4 mb-6 md:mb-0 pr-8 relative z-10 hidden md:block">
                  <p className="font-sans text-cream/60 text-sm font-light leading-relaxed group-hover:text-cream/80 transition-colors duration-500">{test.detail}</p>
                </div>

                <div className="md:w-1/4 flex flex-col md:items-end text-left md:text-right relative z-10 overflow-hidden">
                  <span className="font-bebas text-4xl lg:text-5xl text-amber font-light tracking-wide group-hover:scale-110 origin-right transition-transform duration-500 text-glow-amber">{test.metric}</span>
                  <span className="font-mono text-[10px] text-cream/50 group-hover:text-amber/80 transition-colors uppercase tracking-widest mt-1">{test.unit}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ISI Certification seals */}
          <div className="flex flex-wrap items-center justify-center gap-8 mt-16">
            {['IS 280', 'IS 3975'].map((cert, i) => (
              <motion.div
                key={cert}
                className="cert-seal"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="text-center">
                  <div className="font-bebas text-lg text-amber leading-none">{cert}</div>
                  <div className="font-mono text-[7px] text-cream/50 tracking-wider mt-1">COMPLIANT</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ───── Quality Promise ───── */}
      <div className="py-24 bg-transparent border-t border-glass-border">
        <div className="max-w-[1280px] mx-auto px-[5vw]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="font-mono text-[11px] text-amber tracking-widest uppercase mb-4">Our Promise</h3>
              <h2 className="font-bebas text-[clamp(48px,6vw,80px)] leading-[0.85] text-cream mb-8">
                Zero Defect <span className="text-amber">Philosophy</span>
              </h2>
              <div className="space-y-6">
                <p className="font-sans text-base text-cream/80 leading-relaxed">
                  Quality at Khemji Wire isn&apos;t just about passing tests — it&apos;s about building products that engineers, contractors, and businesses can depend on without hesitation. Every coil that leaves our facility carries our reputation.
                </p>
                <p className="font-sans text-base text-cream/60 leading-relaxed">
                  Our in-house quality laboratory is equipped with calibrated testing equipment — Universal Testing Machine (UTM), digital micrometers, coating weight analysis balance, and Kelvin 4-wire resistivity bridge. Each production batch undergoes comprehensive testing before dispatch clearance.
                </p>
              </div>

              <div className="mt-10 grid gap-4 font-mono text-[10px] lg:text-xs uppercase tracking-widest text-cream">
                {[
                  'BIS IS:280 & IS:3975 Certified',
                  'Every Batch Tested Before Dispatch',
                  'Material Test Certificate Issued',
                  'In-House Calibrated Lab Equipment',
                  'Zero Defect Track Record',
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-8 h-[1px] bg-glass-border relative overflow-hidden">
                      <motion.div
                        initial={{ x: "-100%" }}
                        whileInView={{ x: "0%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.6 + i * 0.1 }}
                        className="absolute inset-0 bg-amber"
                      />
                    </div>
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden relative bg-charcoal">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200"
                  alt="Quality Testing Laboratory"
                  loading="lazy"
                  className="w-full h-full object-cover filter grayscale contrast-125 brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ───── CTA ───── */}
      <div className="py-24 bg-transparent relative">
        <div className="max-w-[1280px] mx-auto px-[5vw]">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl p-12 md:p-20 text-center relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, rgba(249,115,22,0.15) 0%, rgba(249,115,22,0.05) 50%, rgba(249,115,22,0.1) 100%)', border: '1px solid rgba(249,115,22,0.2)' }}
          >
            <div className="relative z-10">
              <h2 className="font-bebas text-[clamp(40px,5vw,72px)] leading-[0.85] text-cream mb-6">
                Every Strand Tested.<br />
                Every Batch <span className="text-amber">Certified.</span>
              </h2>
              <p className="font-sans text-base lg:text-lg text-cream/70 max-w-[540px] mx-auto mb-10">
                With BIS certifications and rigorous in-house testing, we ensure every product meets the highest standards.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact" className="blob-btn-product font-mono text-xs tracking-widest uppercase font-bold px-8 py-4 inline-flex items-center justify-center">
                  Request Test Certificate
                </Link>
                <Link href="/manufacturing" className="glass-btn font-mono text-xs tracking-widest uppercase px-8 py-4 inline-flex items-center justify-center">
                  View Our Process
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
