"use client";

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

const LEADERS = [
  {
    name: "Mr. Om Prakash Agarwal",
    title: "Founder & Chairman",
    initials: "OPA",
    goal: "\"To build a manufacturing organization founded on trust, uncompromising quality, and enduring customer relationships while contributing to India's industrial and infrastructure growth.\"",
    points: [
      "Founded Khemji Wire Industries in 1988",
      "Transformed a modest enterprise into a trusted wire manufacturing company",
      "Established a culture of quality, reliability, and ethical business practices",
      "Laid the foundation for sustainable growth and customer confidence"
    ]
  },
  {
    name: "Mr. Mahesh Chand Agarwal",
    title: "Director",
    initials: "MCA",
    goal: "\"Excellence is achieved through continuous improvement, operational discipline, and an unwavering commitment to quality.\"",
    points: [
      "Leads strategic growth and operational excellence initiatives",
      "Drives process optimization and technology advancement across manufacturing operations",
      "Ensures consistent quality standards across all product lines",
      "Expands the company's presence in the cable, infrastructure, and industrial sectors"
    ]
  }
];

function AnimatedPoint({ point, index, baseDelay }: { point: string; index: number; baseDelay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-20px' });

  return (
    <motion.div
      ref={ref}
      className="flex items-start gap-2.5"
      initial={{ opacity: 0, x: -20, filter: 'blur(4px)' }}
      animate={isInView ? { opacity: 1, x: 0, filter: 'blur(0px)' } : {}}
      transition={{ duration: 0.5, delay: baseDelay + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="w-1.5 h-1.5 rounded-full bg-amber mt-1.5 flex-shrink-0" />
      <p className="font-sans text-[13px] md:text-sm text-cream/70 leading-relaxed">{point}</p>
    </motion.div>
  );
}

export function LeadershipSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-60px' });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const sectionOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const sectionY = useTransform(scrollYProgress, [0, 0.2], [60, 0]);

  return (
    <section ref={sectionRef} className="relative py-20 md:py-28 overflow-hidden border-t border-glass-border">
      <div className="max-w-[1100px] mx-auto px-[5vw] relative z-10">

        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14 md:mb-18"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isHeaderInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="h-[2px] w-10 bg-amber origin-right"
            />
            <span className="font-mono text-[10px] text-amber/70 tracking-[0.3em] uppercase">Our Leadership</span>
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
              The People Behind
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="text-amber block"
            >
              Our Excellence
            </motion.span>
          </h2>
        </motion.div>

        {/* Two leaders */}
        <motion.div
          style={{ opacity: sectionOpacity, y: sectionY }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16"
        >
          {LEADERS.map((leader, i) => (
            <LeaderBlock key={leader.name} leader={leader} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function LeaderBlock({ leader, index }: { leader: typeof LEADERS[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, filter: 'blur(6px)' }}
      animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
      transition={{ duration: 0.8, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Avatar + Name */}
      <div className="flex items-center gap-4 mb-5">
        <motion.div
          initial={{ scale: 0, rotate: -90 }}
          animate={isInView ? { scale: 1, rotate: 0 } : {}}
          transition={{ duration: 0.6, delay: index * 0.2 + 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-amber/30 flex items-center justify-center flex-shrink-0"
        >
          <span className="font-bebas text-xl md:text-2xl text-amber">{leader.initials}</span>
        </motion.div>
        <div>
          <h3 className="font-bebas text-2xl md:text-3xl lg:text-4xl text-cream tracking-wide leading-tight">
            {leader.name}
          </h3>
          <span className="font-mono text-[10px] md:text-xs text-amber/70 tracking-[0.2em] uppercase">
            {leader.title}
          </span>
        </div>
      </div>

      {/* Goal */}
      <p className="font-sans text-sm md:text-base text-cream/80 leading-relaxed mb-5 pl-[70px] md:pl-[80px]">
        {leader.goal}
      </p>

      {/* Points */}
      <div className="flex flex-col gap-2.5 pl-[70px] md:pl-[80px]">
        {leader.points.map((point, pi) => (
          <AnimatedPoint key={pi} point={point} index={pi} baseDelay={index * 0.2 + 0.4} />
        ))}
      </div>
    </motion.div>
  );
}
