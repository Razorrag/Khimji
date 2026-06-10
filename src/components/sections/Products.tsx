"use client";

import { useRef, useState, useLayoutEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from '../ui/SplitText';

gsap.registerPlugin(ScrollTrigger);

const PRODUCTS = [
  {
    name: "Hot Dip Galvanized Mild Steel Wire",
    ordinal: "01",
    specs: { "Size Range": "1.25 mm to 4.00 mm", "Zinc Coating": "As per IS standards", "UTS Range": "300–550", "Tensile": "High", "Standard": "IS 280" },
    apps: ["Industrial applications", "Fencing", "Binding", "Infrastructure use"],
    img: "https://images.unsplash.com/photo-1542361345-89e58247f2d5?auto=format&fit=crop&q=80&w=2000"
  },
  {
    name: "Low Carbon Galvanized Steel Wire",
    ordinal: "02",
    specs: { "Surface": "Smooth finish", "Diameter": "Consistent", "Properties": "Reliable Mechanical", "Packaging": "Custom available" },
    apps: ["Long-term corrosion resistance", "Flexible"],
    img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=2000"
  },
  {
    name: "Formed Wire for Cable Armouring",
    ordinal: "03",
    specs: { "Standard": "IS 3975", "Zinc Coating": "As per standards", "Resistivity": "Passed", "Dimensions": "Precision" },
    apps: ["Cable armouring", "Electrical cable manufacturers", "Infrastructure cable projects"],
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000"
  }
];

export function Products() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftPanelRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const productElements = gsap.utils.toArray<HTMLElement>('.product-item');
      
      productElements.forEach((el, index) => {
        ScrollTrigger.create({
          trigger: el,
          start: "top center",
          end: "bottom center",
          onEnter: () => setActiveIndex(index),
          onEnterBack: () => setActiveIndex(index),
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="products" className="relative bg-transparent" ref={containerRef}>
      
      {/* Mobile view */}
      <div className="md:hidden py-24 px-[5vw] space-y-16">
        <div className="mb-12">
          <h3 className="font-mono text-xs text-amber tracking-widest uppercase mb-4">Our Expertise</h3>
          <h2 className="font-bebas text-6xl text-cream"><SplitText text="OUR PRODUCTS" /></h2>
        </div>
        {PRODUCTS.map((prod, i) => (
            <div key={i} className="flex flex-col gap-6">
            <h3 className="font-bebas text-4xl text-cream">{prod.ordinal}. {prod.name}</h3>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <img src={prod.img} alt={prod.name} loading="lazy" className="w-full h-full object-cover filter grayscale contrast-125 hover:grayscale-0 transition-all duration-700" />
            </div>
            <div className="blob-card p-6">
              <div className="flex flex-col gap-2 font-mono text-xs text-steel mb-4">
                {Object.entries(prod.specs).map(([k, v]) => (
                  <div className="flex justify-between border-b pb-2" style={{ borderColor: "rgba(255,255,255,0.08)" }} key={k}>
                    <span className="uppercase" style={{ color: "rgba(203,213,225,0.7)" }}>{k}</span>
                    <span className="text-amber">{v}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 mt-6">
                {prod.apps.map(app => (
                  <span key={app} className="text-[9px] font-mono px-3 py-1.5 rounded-full text-steel border uppercase tracking-widest" style={{ backgroundColor: "rgba(28,30,36,0.8)", borderColor: "rgba(255,255,255,0.08)" }}>{app}</span>
                ))}
              </div>
              <a href="#contact" className="blob-btn font-mono text-[11px] tracking-widest uppercase font-bold flex items-center justify-center gap-3 w-full px-6 py-3 mt-6">
                <span>Request Quote</span>
                <span>→</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop view (Scrolling Text / Sticky Image) */}
      <div className="hidden md:flex relative max-w-[1400px] mx-auto min-h-[100svh]">
        
        {/* Left Panel (Scrolling Content) */}
        <div ref={leftPanelRef} className="w-1/2 pl-[5vw] pr-12 pb-[20vh] relative z-10">
          <div className="pt-[30vh] mb-[20vh]">
            <motion.div 
               initial={{ width: 0 }}
               whileInView={{ width: "80px" }}
               transition={{ duration: 1 }}
               className="h-[1px] bg-amber mb-6"
            />
            <h3 className="font-mono text-[11px] text-steel tracking-widest uppercase mb-4 opacity-80">Our Expertise</h3>
            <h2 className="font-bebas text-[110px] leading-[0.85] text-cream uppercase tracking-wide">
              <SplitText text="OUR" /> <br/>
              <span className="text-amber"><SplitText text="PRODUCTS" delayOffset={0.2} /></span>
            </h2>
          </div>

          <div className="flex flex-col">
            {PRODUCTS.map((prod, i) => {
              const isActive = activeIndex === i;
              return (
                <div 
                  key={i} 
                  className={`product-item min-h-[80vh] flex flex-col justify-center transition-all duration-700 ${isActive ? 'opacity-100 scale-100' : 'opacity-30 scale-95'}`}
                >
                  <div className="flex items-start gap-8 pb-8 mb-8 relative">
                    {/* Active line indicator */}
                    <motion.div 
                      className="absolute left-[-40px] top-4 bottom-0 w-[2px] bg-glass-border"
                      initial={false}
                    >
                      {isActive && <motion.div layoutId="product-active-line" className="absolute top-0 w-full h-1/2 bg-amber shadow-[0_0_10px_rgba(234,88,12,0.5)]" />}
                    </motion.div>
                    
                    <span className={`font-mono text-xl mt-2 transition-colors duration-500 min-w-8 ${isActive ? 'text-amber' : 'text-steel'}`}>
                      {prod.ordinal}
                    </span>
                    <h3 className="font-bebas text-6xl text-cream tracking-wide leading-[0.9]">{prod.name}</h3>
                  </div>

                  <div className={`transition-all duration-700 transform ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <div className="blob-card p-10 group">
                      <div className="flex flex-col gap-5 font-mono text-xs text-steel mb-10">
                        {Object.entries(prod.specs).map(([k, v]) => (
                          <div key={k} className="flex justify-between items-end border-b pb-3" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
                            <span className="uppercase text-[10px] tracking-widest" style={{ color: "rgba(203,213,225,0.6)" }}>{k}</span>
                            <span className="text-cream text-sm relative">{v}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-3 mb-10">
                        {prod.apps.map(app => (
                          <span key={app} className="text-[10px] font-mono px-3 py-1.5 rounded-full text-steel border uppercase tracking-widest" style={{ backgroundColor: "rgba(18,20,24,0.8)", borderColor: "rgba(255,255,255,0.08)" }}>{app}</span>
                        ))}
                      </div>
                      <a href="#contact" className="blob-btn font-mono text-[11px] tracking-widest uppercase font-bold flex items-center justify-center gap-3 w-full px-6 py-4">
                        <span>Request Quote</span>
                        <span>→</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Panel (Sticky Image) */}
        <div className="w-1/2 h-[100svh] sticky top-0 right-0 overflow-hidden ml-auto flex items-center justify-center p-12 lg:p-24 perspective-1000">
          <div className="relative w-full h-[80vh] rounded-3xl overflow-hidden glass-panel border border-glass-border shadow-2xl">
            {PRODUCTS.map((prod, i) => (
              <div 
                key={i} 
                className={`absolute inset-0 transition-opacity duration-[1.5s] bg-obsidian pointer-events-none ${activeIndex === i ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
              >
                {/* Vignette */}
                <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.8)] z-20 pointer-events-none" />
                <motion.img 
                  src={prod.img} 
                  alt={prod.name} 
                  loading="lazy"
                  className="w-full h-full object-cover filter grayscale contrast-125 brightness-110"
                  animate={{
                     scale: activeIndex === i ? 1.05 : 1.1,
                     filter: activeIndex === i ? 'grayscale(0%) contrast(110%) brightness(100%)' : 'grayscale(100%) contrast(125%) brightness(80%)'
                  }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
