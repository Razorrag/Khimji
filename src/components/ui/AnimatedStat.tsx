"use client";

import { useRef, useEffect } from 'react';
import { useInView, motion } from 'framer-motion';
import gsap from 'gsap';

export function AnimatedStat({ value, suffix, label }: { value: number; suffix?: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const numberRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView && numberRef.current) {
      gsap.fromTo(numberRef.current, 
        { innerHTML: "0" }, 
        {
          innerHTML: value,
          duration: 2,
          ease: "power2.out",
          snap: { innerHTML: 1 },
          onUpdate: function() {
            if (numberRef.current) {
              const val = Math.round(Number(this.targets()[0].innerHTML));
              numberRef.current.innerHTML = val.toString() + (suffix ? `<span class="text-amber">${suffix}</span>` : '');
            }
          }
        }
      );
    }
  }, [isInView, value, suffix]);

  return (
    <div ref={ref} className="flex flex-col border-l border-glass-border pl-6">
      <div className="font-bebas text-[clamp(48px,8vw,96px)] leading-none text-cream mb-2">
        <span ref={numberRef}>0</span>
      </div>
      <div className="font-mono text-[10px] tracking-widest text-steel uppercase relative">
        {label}
        {/* Underline progress */}
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
          className="absolute -bottom-3 left-0 w-24 h-[1px] bg-amber origin-left"
        />
      </div>
    </div>
  );
}
