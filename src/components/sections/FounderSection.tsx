"use client";

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

const MISSION_ITEMS = [
  "Deliver high-quality galvanized wire products across India",
  "Maintain batch-to-batch consistency in every coil dispatched",
  "Build long-term customer trust through transparency and reliability",
  "Continuously improve manufacturing efficiency and technology",
  "Support India's industrial development through quality supply",
  "Uphold IS 280 and IS 3975 standards as the foundation of every product"
];

export function FounderSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);
  const isQuoteInView = useInView(quoteRef, { once: true, margin: '-100px' });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const quoteParallax = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const quoteOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3]);

  return (
    <section ref={sectionRef} className="relative py-20 md:py-32 overflow-hidden">
      {/* Giant quotation mark background */}
      <motion.div
        style={{ y: quoteParallax }}
        className="absolute top-10 left-1/2 -translate-x-1/2 font-playfair text-[200px] md:text-[300px] text-amber/[0.04] leading-none select-none pointer-events-none z-0"
      >
        &ldquo;
      </motion.div>

      <div className="max-w-[900px] mx-auto px-[5vw] relative z-10">

        {/* Label */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-[2px] w-12 bg-amber" />
            <span className="font-mono text-[10px] text-amber/60 tracking-[0.3em] uppercase">Vision of Our Founder</span>
            <div className="h-[2px] w-12 bg-amber" />
          </div>
        </div>

        {/* Founder info + quote */}
        <div ref={quoteRef} className="text-center mb-16">
          {/* Avatar ring */}
          <motion.div
            className="w-20 h-20 mx-auto mb-6 rounded-full border-2 border-dashed border-amber/40 flex items-center justify-center relative"
            whileHover={{ borderColor: 'rgba(249,115,22,0.8)', boxShadow: '0 0 30px rgba(249,115,22,0.2)' }}
            transition={{ duration: 0.4 }}
          >
            <div className="absolute inset-2 rounded-full border border-amber/20" />
            <span className="font-bebas text-2xl text-amber">OPA</span>
          </motion.div>

          <h3 className="font-bebas text-3xl md:text-4xl text-cream tracking-wide mb-1">
            Mr. Om Prakash Agarwal
          </h3>
          <p className="font-mono text-[10px] text-steel/50 tracking-[0.2em] uppercase mb-8">
            Founder & Chairman, Khemji Wire & Wire Pvt. Ltd.
          </p>

          {/* Quote */}
          <motion.blockquote
            initial={{ opacity: 0, y: 30 }}
            animate={isQuoteInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="font-playfair italic text-xl md:text-2xl lg:text-[28px] text-cream/90 leading-relaxed max-w-[700px] mx-auto"
          >
            &ldquo;Our vision is to build a manufacturing organization known for trust, quality, and long-term customer relationships while contributing to India&apos;s growing infrastructure and industrial sector.&rdquo;
          </motion.blockquote>

          <p className="font-mono text-[10px] text-amber/50 tracking-[0.3em] uppercase mt-6">
            \u2014 Est. 1988, Jaipur
          </p>
        </div>

        {/* Divider */}
        <div className="relative flex items-center justify-center mb-12">
          <div className="absolute inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-amber/30 to-transparent" />
          <span className="relative font-mono text-[9px] text-amber/60 tracking-[0.4em] uppercase bg-obsidian px-6">
            Founder&apos;s Mission
          </span>
        </div>

        {/* Mission grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {MISSION_ITEMS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20, y: 10 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-start gap-3 p-4 rounded-xl border border-glass-border bg-white/[0.02] hover:border-amber/20 hover:bg-amber/[0.02] transition-all duration-400"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-amber mt-1.5 flex-shrink-0" />
              <p className="font-sans text-sm text-steel/70 leading-relaxed">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
