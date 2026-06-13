"use client";

import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

const PRODUCTS = [
  {
    name: "Hot Dip Galvanized Mild Steel Wire",
    ordinal: "01",
    slug: "hot-dip-galvanized-wire",
    specs: { "Raw Material": "Premium Low Carbon MS Wire Rod", "Diameter Range": "1.25 mm to 4.00 mm", "Tensile Strength": "300 – 550 MPa", "Standard": "IS 280:2006" },
    apps: ["Corrosion Protected", "High Strength", "Excellent Flexibility", "Extended Durability"],
    img: "/1.png"
  },
  {
    name: "Cable Armouring Round Wire",
    ordinal: "02",
    slug: "low-carbon-galvanized-wire",
    specs: { "Size Range": "1.25 mm – 4.00 mm", "UTS": "300–500 MPa", "Resistivity": "14.5 Ohm-cm × 10⁻⁶ Max.", "Elongation": "10% Min.", "Standard": "IS 3975:1999" },
    apps: ["Mechanical Protection", "High Strength", "Corrosion Resistant", "Long Lasting Performance"],
    img: "/2.png"
  },
  {
    name: "Cable Armouring Formed Wire (Strip)",
    ordinal: "03",
    slug: "formed-wire-cable-armouring",
    specs: { "Size": "4.00 mm × 0.80 mm", "UTS": "300–500 MPa", "Resistivity": "14.5 Ohm-cm × 10⁻⁶ Max.", "Elongation": "10% Min.", "Standard": "IS 3975:1999" },
    apps: ["Enhanced Protection", "Optimized Profile", "High Strength", "Corrosion Resistant"],
    img: "/3.png"
  }
];

function FullScreenProduct({ prod }: { prod: typeof PRODUCTS[0]; index?: number }) {
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

      // Image scales down from 1.2 to 1
      tl.fromTo(imageRef.current,
        { scale: 1.25, filter: 'brightness(0.6)' },
        { scale: 1, filter: 'brightness(1)', ease: 'none', duration: 1 },
        0
      );

      // Dark overlay cuts in
      tl.fromTo(overlayRef.current,
        { opacity: 0 },
        { opacity: 1, ease: 'power2.in', duration: 0.3 },
        0.1
      );

      // Number slides in from left
      tl.fromTo(numberRef.current,
        { x: -80, opacity: 0 },
        { x: 0, opacity: 1, ease: 'power3.out', duration: 0.4 },
        0.15
      );

      // Content slides up
      tl.fromTo(contentRef.current,
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, ease: 'power3.out', duration: 0.5 },
        0.2
      );

    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="relative min-h-[85dvh] md:h-screen overflow-hidden">
      {/* Image */}
      <div ref={imageRef} className="absolute inset-0 w-full h-full">
        <img src={prod.img} alt={prod.name} loading="lazy" className="w-full h-full object-cover" />
      </div>

      {/* Gradient overlays */}
      <div ref={overlayRef} className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent pointer-events-none" />

      {/* Big number background */}
      <div ref={numberRef} className="absolute top-1/2 -translate-y-1/2 right-[5vw] md:right-10 pointer-events-none z-[3]">
        <span className="font-bebas text-[120px] md:text-[200px] lg:text-[300px] text-white/[0.03] leading-none select-none">{prod.ordinal}</span>
      </div>

      {/* Content */}
      <div ref={contentRef} className="absolute inset-0 flex flex-col justify-end p-5 md:p-16 lg:p-20 z-10">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
            <span className="font-mono text-amber text-xs md:text-sm font-bold tracking-wider">{prod.ordinal}</span>
            <div className="h-[1px] w-8 md:w-12 bg-amber/50" />
          </div>
          <h3 className="font-bebas text-3xl md:text-6xl lg:text-7xl text-cream tracking-wide leading-[0.9] mb-4 md:mb-6">{prod.name}</h3>

          <div className="blob-card p-4 md:p-8 max-w-lg">
            {/* Specs table */}
            <div className="flex flex-col mb-4 md:mb-5">
              {Object.entries(prod.specs).map(([k, v]) => (
                <div key={k} className="flex justify-between items-start gap-4 py-2.5 border-b last:border-b-0" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                  <span className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.1em] md:tracking-[0.15em] text-white/50 shrink-0">{k}</span>
                  <span className="font-mono text-xs md:text-sm text-cream font-medium text-right break-words">{v}</span>
                </div>
              ))}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4 md:mb-5">
              {prod.apps.map(app => (
                <span key={app} className="text-[8px] md:text-[9px] font-mono px-2 md:px-2.5 py-1 rounded-full text-white/50 border border-white/10 uppercase tracking-wider">{app}</span>
              ))}
            </div>

            {/* Buttons - stack on mobile, side-by-side on desktop */}
            <div className="flex flex-col md:flex-row gap-2.5 md:gap-4">
              <Link href="/products" className="blob-btn-product font-mono text-[10px] tracking-widest uppercase font-bold flex items-center justify-center gap-2 flex-1 px-5 py-3">
                <span>View Specs</span>
                <span>→</span>
              </Link>
              <a href={`https://wa.me/919829277869?text=${encodeURIComponent(`I'm interested in *${prod.name}* from Khemji Wire. Please share pricing and availability.`)}`} target="_blank" rel="noreferrer" className="font-mono text-[10px] tracking-widest uppercase flex items-center justify-center gap-2 flex-1 px-5 py-3 border border-white/10 hover:border-amber/50 hover:text-amber transition-colors text-cream">
                <span>Buy Now</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductTransition() {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(ref.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 80%',
            end: 'top 40%',
            scrub: 0.3,
          }
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className="relative py-20 md:py-28 bg-transparent">
      <div className="max-w-[1280px] mx-auto px-[5vw] text-center">
        <div className="h-[2px] w-16 bg-amber mx-auto mb-5" />
        <span className="font-mono text-[10px] text-amber/60 tracking-[0.3em] uppercase block mb-3">Crafted With Precision</span>
        <h2 className="font-bebas text-[clamp(36px,5vw,60px)] leading-[0.85] text-cream uppercase mb-4">
          Three Products.<br/>
          <span className="text-amber">One Standard.</span>
        </h2>
        <p className="font-sans text-sm text-white/30 max-w-md mx-auto leading-relaxed">
          Every strand engineered to IS 280 & IS 3975 standards. From raw wire to finished coil.
        </p>
      </div>
    </div>
  );
}

export function Products() {
  return (
    <section id="products" className="relative bg-transparent -mt-1">
      {PRODUCTS.map((prod, i) => (
        <FullScreenProduct key={i} prod={prod} index={i} />
      ))}
      <ProductTransition />
    </section>
  );
}
