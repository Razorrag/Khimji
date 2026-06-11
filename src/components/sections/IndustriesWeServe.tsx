"use client";

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const INDUSTRIES = [
  {
    id: "01",
    name: "Cable Manufacturers",
    detail: "Our IS 3975 formed wire and round galvanized wire is the backbone of underground power and telecom cable armouring across India. Cable manufacturers trust our consistent zinc coating and dimensional accuracy for zero-rejection production runs.",
    tags: ["IS 3975", "Round Wire", "Formed Wire", "Resistivity Tested"],
    stat: "700+ MT",
    statLabel: "Monthly Supply Capacity"
  },
  {
    id: "02",
    name: "Power Sector",
    detail: "Transmission towers, distribution infrastructure, and substation earthing systems all rely on galvanized wire that stands up to decades of outdoor exposure. Our heavy-coated IS 280 wire is specified in major power sector projects.",
    tags: ["Heavy Coating", "IS 280", "Earthing Wire", "Long Service Life"],
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
    detail: "Welded mesh, gabion baskets, chain-link fencing, and general industrial fastening all demand wire that balances strength, flexibility, and surface quality. Custom diameters and coating weights available for OEM requirements.",
    tags: ["Custom Gauges", "Mesh Wire", "Chain Link", "OEM Supply"],
    stat: "1.25\u20134mm",
    statLabel: "Full Diameter Range"
  },
  {
    id: "05",
    name: "Construction Sector",
    detail: "From foundation mats to slab reinforcement \u2014 construction sites across Rajasthan and North India rely on Khemji Wire binding wire for concrete reinforcement work. Consistent softness, accurate coil weights, and timely delivery are our commitment.",
    tags: ["Binding Wire", "Rebar Tying", "IS 280", "On-Site Ready"],
    stat: "8\u201310 kg",
    statLabel: "Per MT of Rebar (Typical Usage)"
  },
];

export function IndustriesWeServe() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-[5vw] relative z-10">

        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-[2px] w-12 bg-amber" />
            <span className="font-mono text-[10px] text-amber tracking-[0.3em] uppercase">Industries We Serve</span>
          </div>
          <h2 className="font-bebas text-[clamp(44px,6vw,80px)] leading-[0.85] text-cream uppercase mb-4">
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
  const isInView = useInView(ref, { once: true, margin: '-80px' });
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
        <div className={`lg:col-span-4 ${isEven ? '' : 'lg:text-right'}`}>
          <div className={`flex items-center gap-4 ${isEven ? '' : 'lg:justify-end'}`}>
            <span className="font-bebas text-5xl md:text-6xl text-white/[0.06] leading-none select-none">{industry.id}</span>
            <div>
              <h3 className="font-bebas text-2xl md:text-3xl text-cream tracking-wide group-hover:text-amber transition-colors duration-500">
                {industry.name}
              </h3>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="font-bebas text-xl text-amber">{industry.stat}</span>
                <span className="font-mono text-[9px] text-steel/60 tracking-wider">{industry.statLabel}</span>
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
          <div className={`flex flex-wrap gap-2 ${isEven ? '' : 'lg:justify-end'}`}>
            {industry.tags.map((tag) => (
              <span key={tag} className="font-mono text-[9px] px-2.5 py-1 rounded-full border border-amber/25 text-amber/70 bg-amber/[0.05]">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
