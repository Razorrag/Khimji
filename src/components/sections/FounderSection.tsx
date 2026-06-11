"use client";

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const MISSION_ITEMS = [
  "Deliver high-quality galvanized wire products across India",
  "Maintain batch-to-batch consistency in every coil dispatched",
  "Build long-term customer trust through transparency and reliability",
  "Continuously improve manufacturing efficiency and technology",
  "Support India\u2019s industrial development through quality supply",
  "Uphold IS 280 and IS 3975 standards as the foundation of every product"
];


export function FounderSection() {
  const quoteRef = useRef<HTMLDivElement>(null);
  const isQuoteInView = useInView(quoteRef, { once: true, margin: '-80px' });

  return (
    <section className="relative py-16 md:py-24 overflow-hidden border-t border-glass-border">
      <div className="max-w-[1100px] mx-auto px-[5vw] relative z-10">

        {/* ── Founder Vision ── */}
        <div className="mb-16 md:mb-20">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-[2px] w-10 bg-amber" />
              <span className="font-mono text-[10px] text-amber/70 tracking-[0.3em] uppercase">Vision of Our Founder</span>
              <div className="h-[2px] w-10 bg-amber" />
            </div>
          </div>

          {/* Founder info + quote */}
          <div ref={quoteRef} className="text-center mb-10">
            <motion.div
              className="w-16 h-16 mx-auto mb-4 rounded-full border-2 border-dashed border-amber/40 flex items-center justify-center"
              whileHover={{ borderColor: 'rgba(249,115,22,0.8)', boxShadow: '0 0 20px rgba(249,115,22,0.12)' }}
              transition={{ duration: 0.4 }}
            >
              <span className="font-bebas text-xl text-amber">OPA</span>
            </motion.div>

            <h3 className="font-bebas text-2xl md:text-3xl text-cream tracking-wide mb-1">
              Mr. Om Prakash Agarwal
            </h3>
            <p className="font-mono text-[9px] md:text-[10px] text-steel/50 tracking-[0.2em] uppercase mb-6">
              Founder & Chairman
            </p>

            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              animate={isQuoteInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="font-playfair italic text-lg md:text-xl lg:text-2xl text-cream/80 leading-relaxed max-w-[650px] mx-auto"
            >
              &ldquo;Our vision is to build a manufacturing organization known for trust, quality, and long-term customer relationships while contributing to India&apos;s growing infrastructure and industrial sector.&rdquo;
            </motion.blockquote>

            <p className="font-mono text-[9px] text-amber/60 tracking-[0.3em] uppercase mt-5">
              &#8212; Est. 1988, Jaipur
            </p>
          </div>

          {/* Mission divider */}
          <div className="relative flex items-center justify-center mb-8">
            <div className="absolute inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-glass-border to-transparent" />
            <span className="relative font-mono text-[9px] text-steel/40 tracking-[0.4em] uppercase px-6 bg-transparent">
              Founder&apos;s Mission
            </span>
          </div>

          {/* Mission grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {MISSION_ITEMS.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-start gap-2.5 p-3 rounded-xl border border-glass-border bg-white/[0.02] hover:border-amber/20 hover:bg-amber/[0.02] transition-all duration-400"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-amber mt-1.5 flex-shrink-0" />
                <p className="font-sans text-[11px] md:text-xs text-steel/60 leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
