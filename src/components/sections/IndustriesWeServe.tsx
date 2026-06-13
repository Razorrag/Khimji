"use client";

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const INDUSTRIES = [
  {
    id: "01",
    name: "Cable Manufacturers",
    detail: "Trusted by leading cable manufacturers, our IS 3975 compliant Formed and Round Galvanized Armouring Wires are widely used for power, control, and communication cables across India. Consistent zinc coating, precise dimensional accuracy, and reliable mechanical properties ensure smooth processing and dependable cable performance.",
    tags: ["IS 3975", "Round Wire", "Formed Wire", "Resistivity Tested"],
    stat: "700+ MT",
    statLabel: "Monthly Supply Capacity"
  },
  {
    id: "02",
    name: "Power Sector",
    detail: "Transmission lines, distribution networks, and substation earthing systems depend on galvanized steel wire capable of withstanding prolonged outdoor exposure. Our IS 280 compliant galvanized wires offer superior corrosion resistance, reliable mechanical strength, and long-term performance for critical power infrastructure applications.",
    tags: ["IS 280 Compliant", "Earthing Applications", "Superior Corrosion Resistance", "Long Service Life"],
    stat: "40+ Yrs",
    statLabel: "Coating Lifespan (Rural)"
  },
  {
    id: "03",
    name: "Infrastructure Projects",
    detail: "Bridges, tunnels, highways, and mega construction sites demand binding wire that won't snap under rebar pressure or corrode before the concrete sets. Our soft annealed galvanized wire is specified by leading infrastructure contractors.",
    tags: ["Soft Grade", "Binding Wire", "Construction", "Corrosion Resistant"],
    stat: "16\u201320 SWG",
    statLabel: "Most Specified Gauges"
  },
  {
    id: "04",
    name: "Industrial Manufacturers",
    detail: "Serving diverse industrial applications with high-quality galvanized wires engineered for strength, flexibility, and consistent surface finish. Widely used in welded mesh, chain-link fencing, gabion baskets, and general fabrication, our wires are available in multiple diameters and zinc coating specifications to meet customer requirements.",
    tags: ["Custom Diameter Options", "Welded Mesh Applications", "Chain-Link Fencing", "OEM & Industrial Supply"],
    stat: "1.25\u20134.00 mm",
    statLabel: "Diameter Range"
  },
];

export function IndustriesWeServe() {
  return (
    <section className="relative py-12 md:py-20 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-[5vw] relative z-10">

        {/* Header */}
        <div className="mb-12 md:mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[2px] w-10 bg-amber" />
            <span className="font-mono text-[10px] text-amber tracking-[0.3em] uppercase">Industries We Serve</span>
          </div>
          <h2 className="font-bebas text-[clamp(40px,5.5vw,72px)] leading-[0.85] text-cream uppercase">
            Trusted Across<br/>
            <span className="text-amber">Sectors</span>
          </h2>
        </div>

        {/* Industry rows */}
        <div className="flex flex-col gap-0">
          {INDUSTRIES.map((industry, i) => (
            <IndustryRow key={industry.id} industry={industry} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function IndustryRow({ industry, index }: { industry: typeof INDUSTRIES[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '0px' });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      className="relative py-10 md:py-14 border-b border-glass-border group"
      initial={{ opacity: 0, x: isEven ? -40 : 40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Hover left border glow */}
      <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-amber scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

        {/* Number + Name */}
        <div className="lg:col-span-4">
          <div className="flex items-center gap-4">
            <span className="font-bebas text-5xl md:text-6xl text-white/20 leading-none select-none">{industry.id}</span>
            <div>
              <h3 className="font-bebas text-2xl md:text-3xl text-cream tracking-wide group-hover:text-amber transition-colors duration-500">
                {industry.name}
              </h3>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="font-bebas text-xl text-amber">{industry.stat}</span>
                <span className="font-mono text-[10px] md:text-xs text-cream/50 tracking-wider">{industry.statLabel}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="lg:col-span-5">
          <p className="font-sans text-sm text-steel/80 leading-relaxed">
            {industry.detail}
          </p>
        </div>

        {/* Tags */}
        <div className="lg:col-span-3">
          <div className="flex flex-wrap gap-2">
            {industry.tags.map((tag) => (
              <span key={tag} className="font-mono text-[10px] md:text-xs px-2.5 py-1 rounded-full border border-amber/40 text-amber bg-amber/[0.08]">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
