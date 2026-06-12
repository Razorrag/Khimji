"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { HeroVideo } from "../ui/HeroVideo";

function CornerBracket({ position }: { position: "tl" | "tr" | "bl" | "br" }) {
  const base = "absolute w-16 h-16 md:w-24 md:h-24 pointer-events-none z-[6]";
  const pos = {
    tl: "top-6 left-6 md:top-10 md:left-10",
    tr: "top-6 right-6 md:top-10 md:right-10",
    bl: "bottom-6 left-6 md:bottom-10 md:left-10",
    br: "bottom-6 right-6 md:bottom-10 md:right-10",
  }[position];
  const border = {
    tl: "border-t border-l border-cream/20",
    tr: "border-t border-r border-cream/20",
    bl: "border-b border-l border-cream/20",
    br: "border-b border-r border-cream/20",
  }[position];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`${base} ${pos} ${border}`}
    />
  );
}

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], ["0%", "-5%"]);
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const overlayOpacity = useTransform(scrollYProgress, [0.3, 0.8], [0, 0.7]);
  const frameOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <div ref={heroRef} className="relative h-[150vh] -mt-16 md:mt-0">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-obsidian">
        
        {/* Video */}
        <motion.div
          style={{ y: videoY, scale: videoScale }}
          className="absolute inset-0 w-full h-full origin-center"
        >
          <HeroVideo />
        </motion.div>

        {/* Dark overlay */}
        <div className="absolute inset-0 z-[1] pointer-events-none">
          <div className="absolute inset-0" style={{
            background: "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 0%, rgba(8,5,2,0.4) 100%)"
          }} />
        </div>

        {/* Scroll-driven darken */}
        <motion.div
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-obsidian pointer-events-none z-[1]"
        />

        {/* Bottom gradient blend */}
        <div
          className="absolute bottom-0 inset-x-0 h-[250px] z-[2] pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, transparent 0%, rgba(8,5,2,0.5) 40%, rgba(8,5,2,0.9) 70%, #080502 100%)"
          }}
        />

        {/* Corner brackets */}
        <motion.div style={{ opacity: frameOpacity }}>
          <CornerBracket position="tl" />
          <CornerBracket position="tr" />
          <CornerBracket position="bl" />
          <CornerBracket position="br" />
        </motion.div>

        {/* Vertical side text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 1 }}
          style={{ opacity: frameOpacity }}
          className="hidden lg:block absolute left-8 top-1/2 -translate-y-1/2 z-[6]"
        >
          <div className="font-mono text-[9px] text-cream/40 tracking-[0.4em] uppercase" style={{ writingMode: "vertical-rl" }}>
            EST. 1988 · JAIPUR · INDIA
          </div>
        </motion.div>

        {/* Content — centered */}
        <motion.div
          style={{ opacity: contentOpacity, y: contentY }}
          className="absolute inset-0 z-[5] flex items-center justify-center"
        >
          <div className="text-center w-full mx-auto px-[5vw]">
            
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-3 mb-10"
            >
              <span className="w-8 h-[1px] bg-amber" />
              <span className="font-mono text-[10px] sm:text-xs text-amber tracking-[0.3em] uppercase">Galvanized Iron Wire</span>
              <span className="w-8 h-[1px] bg-amber" />
            </motion.div>

            {/* Tagline — Line 1 */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="font-bebas text-white mb-2 select-none"
              style={{
                fontSize: "clamp(38px, 8.5vw, 110px)",
                lineHeight: 0.9,
              }}
            >
              PRECISION IN EVERY STRAND
            </motion.h1>

            {/* Tagline — Line 2 */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="font-bebas text-white mb-10 select-none"
              style={{
                fontSize: "clamp(38px, 8.5vw, 110px)",
                lineHeight: 0.9,
              }}
            >
              STRENGTH IN EVERY CONNECTION
            </motion.h1>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <Link
                href="/contact"
                className="blob-btn-product font-mono text-[11px] tracking-[0.2em] uppercase font-bold px-8 py-4 inline-flex items-center justify-center"
              >
                Contact Us
              </Link>

              <a
                href="/contact?enquiry=catalogue"
                className="glass-btn font-mono text-[11px] tracking-[0.2em] uppercase px-8 py-4 inline-flex items-center gap-3 group/dl"
              >
                <span>Download Catalogue</span>
                <svg className="w-4 h-4 group-hover/dl:translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
