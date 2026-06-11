"use client";

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

const REASONS = [
  {
    num: "01",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    headline: "IS 280 & IS 3975 Certified",
    metric: "BIS Standard Compliant",
    desc: "Every product line manufactured per Bureau of Indian Standards specifications. Test certificates provided with every dispatch."
  },
  {
    num: "02",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
    headline: "700 MT Monthly Capacity",
    metric: "Large Scale. Consistent Supply.",
    desc: "Our wire drawing and hot-dip galvanizing line handles large project volumes without compromising quality or delivery timelines."
  },
  {
    num: "03",
    icon: "M8 17h8m-8 4h8m-6-8h.01M5 12h.01M12 8h.01M5 16h.01M16 12h.01M12 4h.01M5 8h.01M3 3h18v12H3V3zM7 21h10",
    headline: "Reliable PAN India Delivery",
    metric: "7\u201320 Day Lead Time",
    desc: "Trusted freight partners cover all major industrial hubs. GPS-tracked dispatch with Material Test Certificate for every shipment."
  },
  {
    num: "04",
    icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065zM15 12a3 3 0 11-6 0 3 3 0 016 0z",
    headline: "Custom Manufacturing",
    metric: "Your Spec. Our Precision.",
    desc: "Custom wire diameter, coating weight, tensile grade, and coil packaging \u2014 manufactured to your exact technical specification."
  },
  {
    num: "05",
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
    headline: "Serving Since 1988",
    metric: "35+ Years of Experience",
    desc: "Trusted by cable manufacturers, infrastructure contractors, and power sector clients across India."
  },
  {
    num: "06",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
    headline: "Long-Term Partnerships",
    metric: "200+ Active Clients",
    desc: "We don\u2019t just supply wire \u2014 we build supply relationships. Volume contracts, dedicated account management, and priority dispatch."
  }
];

function ReasonCard({ reason, index }: { reason: typeof REASONS[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-30px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, filter: 'blur(6px)' }}
      animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="relative p-5 md:p-6 h-full transition-all duration-500">
        {/* Number + Icon row */}
        <div className="flex items-center justify-between mb-4">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.08 + 0.2 }}
            className="font-mono text-[12px] md:text-[13px] text-amber font-bold tracking-widest"
          >
            {reason.num}
          </motion.span>
          <motion.div
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.08 + 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="w-11 h-11 md:w-12 md:h-12 rounded-xl border border-amber/30 bg-amber/10 flex items-center justify-center text-amber"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 md:w-6 h-5 md:h-6">
              <path d={reason.icon} />
            </svg>
          </motion.div>
        </div>

        {/* Headline */}
        <h3 className="font-bebas text-xl md:text-2xl lg:text-[26px] text-cream tracking-wide mb-1.5 leading-tight">
          {reason.headline}
        </h3>

        {/* Metric */}
        <p className="font-mono text-[10px] md:text-xs text-amber tracking-wider mb-3 uppercase font-semibold">
          {reason.metric}
        </p>

        {/* Description */}
        <p className="font-sans text-[13px] md:text-sm text-cream/70 leading-relaxed">
          {reason.desc}
        </p>
      </div>
    </motion.div>
  );
}

export function WhyChooseUs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-60px' });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const sectionOpacity = useTransform(scrollYProgress, [0, 0.15], [0, 1]);
  const sectionY = useTransform(scrollYProgress, [0, 0.15], [50, 0]);

  return (
    <section ref={sectionRef} className="relative py-16 md:py-24 overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-[5vw] relative z-10">

        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isHeaderInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="h-[2px] w-10 bg-amber origin-right"
            />
            <span className="font-mono text-[10px] text-amber/70 tracking-[0.3em] uppercase">Why Choose Us</span>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isHeaderInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="h-[2px] w-10 bg-amber origin-left"
            />
          </div>
          <h2 className="font-bebas text-[clamp(36px,5vw,64px)] leading-[0.85] text-cream uppercase">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="block"
            >
              Why Choose
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="text-amber block"
            >
              Khemji Wire
            </motion.span>
          </h2>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          style={{ opacity: sectionOpacity, y: sectionY }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
        >
          {REASONS.map((reason, i) => (
            <ReasonCard key={reason.headline} reason={reason} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
