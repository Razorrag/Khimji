"use client";

import { useRef, useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

const PRODUCTS = [
  {
    name: "Hot Dip Galvanized Mild Steel Wire",
    ordinal: "01",
    specs: { "Size Range": "1.25 mm – 4.00 mm", "UTS": "300–550 MPa", "Zinc Coating": "Uniform as per standard", "Standard": "IS 280:2006" },
    apps: ["Corrosion Protected", "High Strength", "Excellent Flexibility", "Extended Durability"],
    img: "/1.png"
  },
  {
    name: "Cable Armouring Round Wire",
    ordinal: "02",
    specs: { "Size Range": "1.25 mm – 4.00 mm", "UTS": "300–500 MPa", "Resistivity": "14.5 Ohm-cm × 10⁻⁶ Max.", "Elongation": "10% Min.", "Standard": "IS 3975:1999" },
    apps: ["Mechanical Protection", "High Strength", "Corrosion Resistant", "Long Lasting Performance"],
    img: "/2.png"
  },
  {
    name: "Cable Armouring Formed Wire (Strip)",
    ordinal: "03",
    specs: { "Size": "4.00 mm × 0.80 mm", "UTS": "300–500 MPa", "Resistivity": "14.5 Ohm-cm × 10⁻⁶ Max.", "Elongation": "10% Min.", "Standard": "IS 3975:1999" },
    apps: ["Enhanced Protection", "Optimized Profile", "High Strength", "Corrosion Resistant"],
    img: "/3.png"
  }
];

function FullScreenProduct({ prod, index }: { prod: typeof PRODUCTS[0]; index: number }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const numberRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.5,
        }
      });

      tl.fromTo(imageRef.current,
        { scale: 1.25, filter: 'brightness(0.6)' },
        { scale: 1, filter: 'brightness(1)', ease: 'none', duration: 1 },
        0
      );

      tl.fromTo(overlayRef.current,
        { opacity: 0 },
        { opacity: 1, ease: 'power2.in', duration: 0.3 },
        0.1
      );

      tl.fromTo(numberRef.current,
        { x: -80, opacity: 0 },
        { x: 0, opacity: 1, ease: 'power3.out', duration: 0.4 },
        0.15
      );

      tl.fromTo(contentRef.current,
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, ease: 'power3.out', duration: 0.5 },
        0.2
      );

    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="relative h-screen overflow-hidden">
      <div ref={imageRef} className="absolute inset-0 w-full h-full">
        <img src={prod.img} alt={prod.name} loading="lazy" className="w-full h-full object-cover" />
      </div>

      <div ref={overlayRef} className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent pointer-events-none" />

      <div ref={numberRef} className="absolute top-1/2 -translate-y-1/2 right-[5vw] md:right-10 pointer-events-none z-[3]">
        <span className="font-bebas text-[200px] md:text-[300px] text-white/[0.03] leading-none select-none">{prod.ordinal}</span>
      </div>

      <div ref={contentRef} className="absolute inset-0 flex flex-col justify-end p-[5vw] md:p-16 lg:p-20 z-10">
        <div className="max-w-2xl">
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-amber text-sm font-bold tracking-wider">{prod.ordinal}</span>
            <div className="h-[1px] w-12 bg-amber/50" />
          </div>
          <h3 className="font-bebas text-4xl md:text-6xl lg:text-7xl text-cream tracking-wide leading-[0.9] mb-6">{prod.name}</h3>

          <div className="blob-card p-6 md:p-8 max-w-lg">
            <div className="flex flex-col mb-5">
              {Object.entries(prod.specs).map(([k, v]) => (
                <div key={k} className="flex justify-between items-center py-2.5 border-b last:border-b-0" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                  <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/50">{k}</span>
                  <span className="font-mono text-sm text-cream font-medium">{v}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 mb-5">
              {prod.apps.map(app => (
                <span key={app} className="text-[9px] font-mono px-2.5 py-1 rounded-full text-white/50 border border-white/8 uppercase tracking-wider">{app}</span>
              ))}
            </div>
            <Link href="/contact" className="blob-btn-product font-mono text-[10px] tracking-widest uppercase font-bold flex items-center justify-center gap-2 w-full px-5 py-3">
              <span>Contact Us</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProductsCatalogue() {
  return (
    <div>
      {/* Hero */}
      <div className="relative pt-40 pb-20 bg-transparent">
        <div className="max-w-[1280px] mx-auto px-[5vw]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="h-[2px] w-16 bg-amber mb-6" />
            <span className="font-mono text-[10px] text-amber/60 tracking-[0.3em] uppercase block mb-3">Our Products</span>
            <h1 className="font-bebas text-[clamp(56px,8vw,120px)] leading-[0.85] text-cream uppercase mb-6">
              Three Products.<br />
              <span className="text-amber">One Standard.</span>
            </h1>
            <p className="font-sans text-base lg:text-lg text-cream/60 max-w-[600px] leading-relaxed">
              Every strand engineered to IS 280 & IS 3975 standards. From raw wire to finished coil.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Full-screen product sections */}
      {PRODUCTS.map((prod, i) => (
        <FullScreenProduct key={i} prod={prod} index={i} />
      ))}
    </div>
  );
}
