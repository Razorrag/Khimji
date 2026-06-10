"use client";

function MarqueeRow({ items, direction = 1, speed = 40 }: { items: string[], direction?: number, speed?: number }) {
  // Triple the content to ensure standard screens are fully covered without gaps during translate3d transitions
  const content = [...items, ...items, ...items];
  const animName = direction === 1 ? "marquee-left" : "marquee-right";

  return (
    <div className="overflow-hidden whitespace-nowrap py-3 md:py-4 flex flex-nowrap items-center">
      <div
        className="inline-flex gap-8 md:gap-12 min-w-max"
        style={{
          animation: `${animName} ${speed}s linear infinite`,
        }}
      >
        {content.map((item, i) => (
          <span key={i} className="font-mono text-[10px] md:text-xs text-steel/50 uppercase tracking-[0.2em] md:tracking-[0.3em] font-medium flex items-center">
            {item} <span className="mx-4 md:mx-6 text-xs"
                          style={{ color: "rgba(249,115,22,0.4)" }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export function MarqueeBanner() {
  return (
    <section className="overflow-hidden py-2 md:py-3 flex flex-col gap-1 relative z-10 pointer-events-none select-none">
       
       <style dangerouslySetInnerHTML={{__html: `
         @keyframes marquee-left {
           0% { transform: translate3d(0, 0, 0); }
           100% { transform: translate3d(-33.3333%, 0, 0); }
         }
         @keyframes marquee-right {
           0% { transform: translate3d(-33.3333%, 0, 0); }
           100% { transform: translate3d(0, 0, 0); }
         }
       `}} />
       
       <MarqueeRow 
         items={["IS 280 CERTIFIED", "700+ MT MONTHLY", "JAIPUR RAJASTHAN", "GLOBAL STANDARDS", "HOT DIP GALVANIZED"]} 
         direction={1} 
         speed={25}
       />
       <MarqueeRow 
         items={["गुणवत्ता", "QUALITY", "विश्वास", "TRUST", "परिशुद्धता", "PRECISION"]} 
         direction={-1} 
         speed={35}
       />
       <MarqueeRow 
         items={["CABLE MANUFACTURERS", "POWER SECTOR", "INFRASTRUCTURE", "AGRICULTURE CO-OPS", "FENCING CONTRACTORS"]} 
         direction={1} 
         speed={30}
       />
    </section>
  );
}
