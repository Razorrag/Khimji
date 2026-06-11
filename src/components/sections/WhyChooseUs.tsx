"use client";

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const REASONS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    headline: "IS 280 & IS 3975 Certified",
    metric: "BIS Standard Compliant",
    desc: "Every product line manufactured per Bureau of Indian Standards specifications. Test certificates provided with every dispatch."
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
        <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    headline: "700 MT Monthly Capacity",
    metric: "Large Scale. Consistent Supply.",
    desc: "Our wire drawing and hot-dip galvanizing line handles large project volumes without compromising quality or delivery timelines."
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
        <path d="M8 17h8m-8 4h8m-6-8h.01M5 12h.01M12 8h.01M5 16h.01M16 12h.01M12 4h.01M5 8h.01" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 3h18v12H3V3z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 21h10" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    headline: "Reliable PAN India Delivery",
    metric: "7\u201320 Day Lead Time",
    desc: "Trusted freight partners cover all major industrial hubs. GPS-tracked dispatch with Material Test Certificate for every shipment."
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
        <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    headline: "Custom Manufacturing",
    metric: "Your Spec. Our Precision.",
    desc: "Custom wire diameter, coating weight, tensile grade, and coil packaging \u2014 manufactured to your exact technical specification."
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
        <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    headline: "Serving Since 2008",
    metric: "Incorporated 2008 \u00b7 Founded 1988",
    desc: "35+ years of manufacturing experience. Trusted by cable manufacturers, infrastructure contractors, and power sector clients."
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    headline: "Long-Term Partnerships",
    metric: "200+ Active Clients",
    desc: "We don't just supply wire \u2014 we build supply relationships. Volume contracts, dedicated account management, and priority dispatch available."
  }
];

export function WhyChooseUs() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Center radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-amber/[0.03] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-[5vw] relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-[2px] w-12 bg-amber" />
            <span className="font-mono text-[10px] text-amber/60 tracking-[0.3em] uppercase">Why Choose Us</span>
            <div className="h-[2px] w-12 bg-amber" />
          </div>
          <h2 className="font-bebas text-[clamp(44px,6vw,80px)] leading-[0.85] text-cream uppercase mb-2">
            WHY CHOOSE<br/>
            <span className="text-amber">KHEMJI WIRE</span>
          </h2>
        </div>

        {/* Reason tiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {REASONS.map((reason, i) => (
            <ReasonTile key={reason.headline} reason={reason} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ReasonTile({ reason, index }: { reason: typeof REASONS[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      className="blob-card p-7 md:p-8 group relative"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Number watermark */}
      <div className="absolute top-4 right-6 font-bebas text-[70px] text-white/[0.03] leading-none select-none">
        {String(index + 1).padStart(2, '0')}
      </div>

      {/* Icon */}
      <div className="text-amber/70 group-hover:text-amber transition-colors duration-500 mb-5">
        {reason.icon}
      </div>

      {/* Headline */}
      <h3 className="font-bebas text-xl md:text-2xl text-cream tracking-wide mb-1 group-hover:text-amber transition-colors duration-500">
        {reason.headline}
      </h3>

      {/* Metric */}
      <p className="font-mono text-[10px] text-amber/60 tracking-wider mb-3">
        {reason.metric}
      </p>

      {/* Description */}
      <p className="font-sans text-sm text-steel/55 leading-relaxed">
        {reason.desc}
      </p>
    </motion.div>
  );
}
