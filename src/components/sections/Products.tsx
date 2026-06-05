import { useRef, useState, useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
    <section id="products" className="relative bg-charcoal metallic-bg-charcoal" ref={containerRef}>
      
      {/* Mobile view */}
      <div className="md:hidden py-24 px-[5vw] space-y-12">
        <h2 className="font-bebas text-6xl text-cream mb-12">Our Products</h2>
        {PRODUCTS.map((prod, i) => (
          <div key={i} className="flex flex-col gap-6">
            <h3 className="font-bebas text-4xl text-cream">{prod.ordinal}. {prod.name}</h3>
            <img src={prod.img} alt={prod.name} className="w-full aspect-[4/3] object-cover rounded-xl filter grayscale contrast-125" />
            <div className="glass-panel p-6 rounded-xl">
              <div className="flex flex-col gap-2 font-mono text-xs text-steel mb-4">
                {Object.entries(prod.specs).map(([k, v]) => (
                  <div className="flex justify-between border-b border-glass-border pb-2" key={k}>
                    <span className="uppercase">{k}</span>
                    <span className="text-cream">{v}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {prod.apps.map(app => (
                  <span key={app} className="text-[10px] font-sans px-2 py-1 bg-amber/10 text-amber rounded-xs border border-amber/20 uppercase tracking-wider">{app}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop view (Scrolling Text / Sticky Image) */}
      <div className="hidden md:flex relative max-w-[1280px] mx-auto">
        
        {/* Left Panel (Scrolling Content) */}
        <div ref={leftPanelRef} className="w-[45%] pl-[5vw] pr-12 pb-[20vh] relative z-10">
          <div className="pt-[20vh] mb-[15vh]">
            <h3 className="font-mono text-[11px] text-amber tracking-widest uppercase mb-4">Our Expertise</h3>
            <h2 className="font-bebas text-[80px] leading-[0.9] text-cream uppercase">Our Products</h2>
          </div>

          <div className="flex flex-col gap-[15vh]">
            {PRODUCTS.map((prod, i) => (
              <div key={i} className="product-item min-h-[50vh] flex flex-col justify-center">
                <div className="flex items-start gap-6 border-b border-glass-border pb-6 mb-8">
                  <span className={`font-mono font-medium text-2xl mt-1 text-amber`}>
                    {prod.ordinal}
                  </span>
                  <h3 className="font-bebas text-5xl text-cream pt-1">{prod.name}</h3>
                </div>

                <div className="glass-panel p-8 rounded-xl shadow-2xl relative bg-obsidian/40 backdrop-blur-md">
                  <div className="flex flex-col gap-4 font-mono text-xs text-steel mb-8">
                    {Object.entries(prod.specs).map(([k, v]) => (
                      <div key={k} className="flex justify-between items-center border-b border-glass-border pb-3">
                        <span className="uppercase">{k}</span>
                        <span className="text-cream text-sm">{v}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {prod.apps.map(app => (
                      <span key={app} className="text-[10px] font-sans px-2 py-1 bg-amber/10 text-amber rounded-sm border border-amber/20 uppercase tracking-wider">{app}</span>
                    ))}
                  </div>
                  <a href="#contact" className="group mt-6 relative overflow-hidden rounded-sm font-mono text-[11px] tracking-widest uppercase flex items-center justify-center transition-all bg-glass-border hover:bg-amber text-cream hover:text-charcoal py-4 w-full sm:w-auto px-8 shadow-[0_4px_10px_rgba(0,0,0,0.2)] hover:shadow-[0_4px_15px_rgba(234,88,12,0.4)]">
                    <span className="relative z-10 flex items-center gap-2 font-bold">Request Quote <span className="transform group-hover:translate-x-1 transition-transform">→</span></span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Panel (Sticky Image) */}
        <div className="w-[55%] h-screen sticky top-0 right-0 overflow-hidden top-0">
          {PRODUCTS.map((prod, i) => (
            <div 
              key={i} 
              className={`absolute inset-0 transition-opacity duration-1000 bg-obsidian pointer-events-none ${activeIndex === i ? 'opacity-100' : 'opacity-0'}`}
            >
              {/* Gradient overlay to blend left and right text softly */}
              <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/40 to-transparent w-[30%] z-10" />
              <img 
                src={prod.img} 
                alt={prod.name} 
                className="w-full h-full object-cover filter grayscale contrast-[1.1] transition-transform duration-[10s] ease-linear scale-110 opacity-60"
                style={{
                  transform: activeIndex === i ? 'scale(1.05)' : 'scale(1.1)'
                }}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
