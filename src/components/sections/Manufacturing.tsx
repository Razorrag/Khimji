import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const NODES = [
  { step: "01", title: "Raw Material Selection", cx: 70, cy: (150/2800)*100, align: "left" },
  { step: "02", title: "Wire Drawing", cx: 30, cy: (450/2800)*100, align: "right" },
  { step: "03", title: "Surface Cleaning", cx: 70, cy: (750/2800)*100, align: "left" },
  { step: "04", title: "Pickling", cx: 30, cy: (1050/2800)*100, align: "right" },
  { step: "05", title: "Fluxing", cx: 70, cy: (1350/2800)*100, align: "left" },
  { step: "06", title: "Hot Dip Galvanizing", cx: 30, cy: (1650/2800)*100, align: "right" },
  { step: "07", title: "Cooling", cx: 70, cy: (1950/2800)*100, align: "left" },
  { step: "08", title: "Testing", cx: 30, cy: (2250/2800)*100, align: "right" },
  { step: "09", title: "Dispatch", cx: 70, cy: (2550/2800)*100, align: "left" },
];

const PATH_D = `
  M 500 0
  C 500 0, 700 50, 700 150
  C 700 250, 300 350, 300 450
  C 300 550, 700 650, 700 750
  C 700 850, 300 950, 300 1050
  C 300 1150, 700 1250, 700 1350
  C 700 1450, 300 1550, 300 1650
  C 300 1750, 700 1850, 700 1950
  C 700 2050, 300 2150, 300 2250
  C 300 2350, 700 2450, 700 2550
  C 700 2650, 500 2750, 500 2800
`.trim();

export function Manufacturing() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const mobilePathRef = useRef<HTMLDivElement>(null);
  const initRef = useRef(false);

  useEffect(() => {
    if (initRef.current) return;
    initRef.current = true;

    const ctx = gsap.context(() => {
      // Desktop SVG Path Draw
      if (pathRef.current) {
        let length: number;
        try {
          length = pathRef.current.getTotalLength();
        } catch {
          length = 2800;
        }
        gsap.set(pathRef.current, { strokeDasharray: length, strokeDashoffset: length });

        ScrollTrigger.create({
          trigger: ".process-section",
          start: "top 60%",
          end: "bottom 80%",
          scrub: 1,
          animation: gsap.to(pathRef.current, {
            strokeDashoffset: 0,
            ease: "none"
          })
        });
      }

      // Mobile Straight Path Draw
      if (mobilePathRef.current) {
         ScrollTrigger.create({
          trigger: ".mobile-process-section",
          start: "top 60%",
          end: "bottom 80%",
          scrub: 1,
          animation: gsap.fromTo(mobilePathRef.current, 
            { scaleY: 0 },
            { scaleY: 1, ease: "none", transformOrigin: "top" }
          )
        });
      }

      // Nodes Pop-in
      const nodes = gsap.utils.toArray<HTMLElement>('.process-node');
      nodes.forEach((node) => {
        gsap.from(node, {
          scale: 0,
          opacity: 0,
          duration: 0.8,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: node,
            start: "top 75%",
            toggleActions: "play none none reverse"
          }
        });
      });

      ScrollTrigger.refresh();
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="manufacturing" className="relative py-32 bg-transparent overflow-hidden" ref={containerRef}>
      {/* Ambient canvas shows through — no competing background */}
      
      <div className="max-w-[1280px] mx-auto px-[5vw] relative z-10">
        <div className="text-center mb-24 lg:mb-12">
          <h3 className="font-mono text-[11px] text-amber tracking-widest uppercase mb-4">The Process</h3>
          <h2 className="font-bebas text-6xl md:text-[80px] leading-[0.9] text-cream uppercase">Manufacturing <br/> <span className="text-steel">Excellence</span></h2>
        </div>

        {/* Mobile View: Vertical Timeline */}
        <div className="md:hidden flex flex-col gap-16 relative pl-12 mt-16 mobile-process-section">
          {/* Track line (faded) */}
          <div className="absolute top-[20px] bottom-[20px] left-[15px] w-[2px] bg-glass-border" />
          {/* Active drawing line */}
          <div ref={mobilePathRef} className="absolute top-[20px] bottom-[20px] left-[15px] w-[2px] bg-amber origin-top scale-y-0" />
          
          {NODES.map((node, i) => (
            <div key={i} className="flex flex-col gap-2 relative process-node min-h-[100px] justify-center">
              <div className="absolute -left-[40px] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-charcoal border-2 border-amber z-10 shadow-[0_0_15px_rgba(234,88,12,0.4)]" />
              <div className="font-mono text-xs text-amber">{node.step}</div>
              <div className="font-bebas text-3xl text-cream tracking-wide">{node.title}</div>
            </div>
          ))}
        </div>

        {/* Desktop View: Winding SVG Path */}
        <div className="hidden md:block relative w-full h-[2400px] mt-24 process-section">
          {/* Path Container */}
          <div className="absolute inset-x-0 top-0 bottom-0 pointer-events-none">
            <svg 
              className="w-full h-full" 
              viewBox="0 0 1000 2800"
              preserveAspectRatio="xMidYMid meet"
              fill="none" 
            >
              {/* Background Path */}
              <path 
                d={PATH_D} 
                stroke="rgba(15,23,42,0.08)" 
                strokeWidth="4" 
              />
              {/* Animated Path */}
              <path 
                ref={pathRef}
                d={PATH_D} 
                stroke="#EA580C" 
                strokeWidth="4" 
                strokeLinecap="round"
                className="drop-shadow-[0_0_8px_rgba(234,88,12,0.5)]"
              />
            </svg>
          </div>

          {/* Nodes positioned along the path approximation */}
          {NODES.map((node, i) => {
            return (
              <div 
                key={i}
                className="process-node absolute flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 group"
                style={{ top: `${node.cy}%`, left: `${node.cx}%` }}
              >
                {/* Node Label */}
                <div className={`absolute ${node.align === 'left' ? 'right-24 text-right' : 'left-24 text-left'} whitespace-nowrap opacity-100 min-w-[300px]`}>
                   <div className="font-mono text-[11px] font-bold text-amber mb-1 tracking-widest">{node.step}</div>
                   <div className="font-bebas text-5xl text-cream tracking-wide drop-shadow-lg">{node.title}</div>
                </div>

                {/* Node Circle */}
                <div className="w-16 h-16 rounded-full blob-card flex items-center justify-center relative z-10 transition-colors shadow-[0_0_30px_rgba(15,23,42,0.1)]"
                     style={{ border: "1px solid rgba(249,115,22,0.3)" }}>
                  <div className="w-3 h-3 rounded-full bg-amber shadow-[0_0_10px_#EA580C]" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
