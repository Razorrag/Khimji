"use client";

import { useEffect, useState } from 'react';

export function HeroVideo() {
  const [isMobile, setIsMobile] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mq.matches);
    checkMobile();

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    window.addEventListener('resize', checkMobile);
    return () => {
      mq.removeEventListener('change', handler);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-obsidian">
      {/* Video — plays on ALL devices */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/hero-poster.jpg"
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center"
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Mobile: fallback image behind video in case it doesn't load */}
      {isMobile && (
        <img
          src="/mobile-bg.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ zIndex: -1 }}
        />
      )}

      {/* Desktop: animated CSS gradient glow overlay — recreates the mobile-bg.jpg look */}
      {!isMobile && !prefersReducedMotion && (
        <>
          <div className="hero-glow-1" />
          <div className="hero-glow-2" />
          <div className="hero-glow-3" />
        </>
      )}
    </div>
  );
}
