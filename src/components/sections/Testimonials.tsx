"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TESTIMONIALS = [
  {
    quote: "We have been sourcing IS 3975 cable armouring wire from Khemji Wire for over 3 years. Their consistency in zinc coating and diameter tolerance has reduced our QC rejection rate to nearly zero.",
    name: "Procurement Manager",
    company: "Cable Manufacturing Company, Delhi NCR",
    initials: "PM"
  },
  {
    quote: "Switched our construction binding wire requirement to Khemji Wire last year. Coil weights are accurate, the zinc finish is uniform, and delivery to our Rajasthan sites is reliable.",
    name: "Site Procurement Head",
    company: "Infrastructure Contractor, Rajasthan",
    initials: "SP"
  },
  {
    quote: "Tested their IS 280 wire samples at an NABL lab before committing. Passed zinc coating, dip test, and tensile requirements without exception. Good product.",
    name: "Quality Assurance Engineer",
    company: "Engineering Firm",
    initials: "QA"
  }
];

export function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = () => {
    stopTimer();
    timerRef.current = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
  };

  const stopTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  useEffect(() => {
    startTimer();

    // Pause auto-rotation when tab is hidden to save battery
    const handleVisibility = () => {
      if (document.hidden) {
        stopTimer();
      } else {
        startTimer();
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      stopTimer();
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, []);

  const current = TESTIMONIALS[activeIdx];

  return (
    <section 
      id="testimonials"
      className="relative py-32 bg-transparent overflow-hidden border-t border-glass-border"
      onMouseEnter={stopTimer}
      onMouseLeave={startTimer}
    >
      {/* Decorative quotes graphic */}
      <div className="absolute top-10 left-[10vw] font-playfair text-[20vw] text-amber opacity-[0.04] leading-none pointer-events-none select-none">
        &ldquo;
      </div>

      <div className="max-w-[1000px] mx-auto px-[5vw] relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h3 className="font-mono text-[11px] text-amber tracking-widest uppercase mb-4">Client Feedback</h3>
          <h2 className="font-bebas text-5xl md:text-7xl text-cream uppercase">Partner trust</h2>
        </div>

        {/* Carousel Content */}
        <div className="min-h-[300px] md:min-h-[220px] flex items-center justify-center relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIdx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-center flex flex-col items-center"
            >
              <blockquote className="font-playfair italic text-xl md:text-2xl lg:text-3xl text-cream leading-relaxed mb-10 max-w-[850px]">
                "{current.quote}"
              </blockquote>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center font-bebas text-lg text-amber select-none"
                     style={{ backgroundColor: "rgba(249,115,22,0.1)", border: "1px solid rgba(249,115,22,0.3)" }}>
                  {current.initials}
                </div>
                <div className="text-left">
                  <div className="font-sans font-medium text-cream text-base">{current.name}</div>
                  <div className="font-mono text-[10px] text-steel/60 uppercase tracking-widest mt-1">{current.company}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-3 mt-16">
          {TESTIMONIALS.map((_, idx) => {
            const isActive = activeIdx === idx;
            return (
              <button
                key={idx}
                onClick={() => {
                  setActiveIdx(idx);
                  startTimer();
                }}
                className="w-12 h-11 flex items-center justify-center group cursor-pointer"
                aria-label={`Go to slide ${idx + 1}`}
              >
                <div className={`h-1 rounded-full transition-all duration-500 ${
                  isActive ? "w-8 bg-amber" : "w-3 bg-glass-border group-hover:bg-amber/50"
                }`} />
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}
