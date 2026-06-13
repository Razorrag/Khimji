"use client";

import { useLayoutEffect, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Preloader } from '../components/ui/Preloader';
import { ScrollProgress } from '../components/ui/ScrollProgress';
import { CustomCursor } from '../components/ui/CustomCursor';
import { AmbientBackground } from '../components/ui/AmbientBackground';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';

import { MobileBackground } from '../components/ui/MobileBackground';
import { WhatsAppButton } from '../components/ui/WhatsAppButton';

gsap.registerPlugin(ScrollTrigger);

export function ClientLayoutProviders({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  useLayoutEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });
    lenisRef.current = lenis;

    lenis.on('scroll', ScrollTrigger.update);

    const lenisUpdate = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(lenisUpdate);

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
      gsap.ticker.remove(lenisUpdate);
    };
  }, []);

  // Reset scroll and refresh ScrollTrigger on route change (ensures new page triggers align properly)
  useEffect(() => {
    window.scrollTo(0, 0);
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);

    return () => clearTimeout(timer);
  }, [pathname]);

  // Safari bfcache: refresh ScrollTrigger when navigating back
  useEffect(() => {
    const handlePageShow = (e: PageTransitionEvent) => {
      if (e.persisted) {
        ScrollTrigger.refresh();
      }
    };
    window.addEventListener('pageshow', handlePageShow);
    return () => window.removeEventListener('pageshow', handlePageShow);
  }, []);

  return (
    <>
      {/* Mobile fallback background image */}
      <MobileBackground />

      {/* Preloader overlay — sits ON TOP of everything, fades out when hero video is playing */}
      <Preloader onComplete={() => {}} />

      {/* Main layout — always rendered, hero video starts immediately */}
      <div className="min-h-[100svh] relative flex flex-col pt-16 md:pt-0">
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
    </>
  );
}
