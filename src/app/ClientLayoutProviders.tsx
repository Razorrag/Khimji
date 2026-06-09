"use client";

import { useState, useLayoutEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Preloader } from '../components/ui/Preloader';
import { ScrollProgress } from '../components/ui/ScrollProgress';
import { CustomCursor } from '../components/ui/CustomCursor';
import { AmbientBackground } from '../components/ui/AmbientBackground';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { WhatsAppButton } from '../components/ui/WhatsAppButton';

gsap.registerPlugin(ScrollTrigger);

export function ClientLayoutProviders({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useLayoutEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove((time) => {
        lenis.raf(time * 1000);
      });
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <Preloader key="preloader" onComplete={() => setIsLoading(false)} />
      ) : (
        <div className="min-h-screen relative flex flex-col pt-16 md:pt-0">
          <ScrollProgress />
          <div className="hidden md:block">
            <CustomCursor />
          </div>
          <div className="noise-bg pointer-events-none fixed inset-0 z-50 opacity-[0.03] mix-blend-overlay"></div>
          <AmbientBackground />
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
        </div>
      )}
    </AnimatePresence>
  );
}
