import { useEffect, useLayoutEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Products } from './components/sections/Products';
import { Manufacturing } from './components/sections/Manufacturing';
import { Quality } from './components/sections/Quality';
import { Industries } from './components/sections/Industries';
import { Leadership } from './components/sections/Leadership';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useLayoutEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
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
    <div className="mesh-bg min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <Manufacturing />
        <Quality />
        <Industries />
        <Leadership />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
