"use client";

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const LEADERS = [
  {
    name: "Mr. Mahesh Chand Agarwal",
    title: "Director",
    initials: "MCA",
    quote: "Excellence in manufacturing is not just about meeting standards \u2014 it's about setting them. Every batch tells our story.",
    points: [
      "Leading operational excellence and strategic planning",
      "Driving manufacturing process optimization and technology upgrades",
      "Ensuring quality standards remain uncompromised across all product lines",
      "Expanding market reach across India's cable and infrastructure sectors",
      "Building long-term B2B partnerships with OEM and project clients"
    ]
  }
];

function GeometricAvatar({ initials }: { initials: string }) {
  return (
    <div className="relative w-24 h-24 flex-shrink-0">
      {/* Outer dashed ring - rotates */}
      <div className="absolute inset-0 rounded-full border-2 border-dashed border-amber/30 animate-[spin_20s_linear_infinite]" />
      {/* Middle ring - pulses */}
      <motion.div
        className="absolute inset-1 rounded-full border border-amber/15"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Inner circle with initials */}
      <div className="absolute inset-3 rounded-full bg-charcoal border border-amber/20 flex items-center justify-center">
        <span className="font-bebas text-xl text-amber">{initials}</span>
      </div>
      {/* Corner dot */}
      <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-amber" />
    </div>
  );
}

export function LeadershipSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-[5vw] relative z-10">

        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-[2px] w-12 bg-amber" />
            <span className="font-mono text-[10px] text-amber/60 tracking-[0.3em] uppercase">Leadership</span>
          </div>
          <h2 className="font-bebas text-[clamp(44px,6vw,80px)] leading-[0.85] text-cream uppercase mb-4">
            The People Behind<br/>
            <span className="text-amber">The Precision</span>
          </h2>
        </div>

        {/* Leader cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {LEADERS.map((leader, i) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="blob-card p-8 md:p-10 group"
            >
              <div className="flex items-start gap-6 mb-6">
                <GeometricAvatar initials={leader.initials} />
                <div>
                  <h3 className="font-bebas text-2xl md:text-3xl text-cream tracking-wide group-hover:text-amber transition-colors duration-500">
                    {leader.name}
                  </h3>
                  {/* Director badge */}
                  <span className="inline-block mt-2 px-3 py-1 rounded border border-amber/30 font-mono text-[9px] text-amber tracking-[0.2em] uppercase rotate-[-1deg]">
                    {leader.title}
                  </span>
                </div>
              </div>

              {/* Quote */}
              <blockquote className="font-playfair italic text-lg text-cream/80 leading-relaxed mb-6 pl-4 border-l-2 border-amber/30">
                &ldquo;{leader.quote}&rdquo;
              </blockquote>

              {/* Points */}
              <div className="flex flex-col gap-3">
                {leader.points.map((point, pi) => (
                  <div key={pi} className="flex items-start gap-3">
                    <div className="w-1 h-1 rounded-full bg-amber mt-2 flex-shrink-0" />
                    <p className="font-sans text-sm text-steel/60 leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Connector line on desktop */}
          <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 w-[1px] h-20 bg-gradient-to-b from-transparent via-amber/30 to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
