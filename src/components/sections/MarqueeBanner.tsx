import { motion } from 'framer-motion';

function MarqueeRow({ items, direction = 1, speed = 40 }: { items: string[], direction?: number, speed?: number }) {
  const content = [...items, ...items, ...items];

  return (
    <div className="overflow-hidden whitespace-nowrap py-3 md:py-4 flex flex-nowrap items-center">
      <motion.div
        animate={{ x: direction === 1 ? [0, '-33.33%'] : ['-33.33%', 0] }}
        transition={{ repeat: Infinity, duration: speed, ease: 'linear' }}
        className="inline-flex gap-8 md:gap-12 min-w-max"
      >
        {content.map((item, i) => (
          <span key={i} className="font-mono text-[10px] md:text-xs text-steel/50 uppercase tracking-[0.2em] md:tracking-[0.3em] font-medium flex items-center">
            {item} <span className="text-amber/40 mx-4 md:mx-6 text-xs">◆</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export function MarqueeBanner() {
  return (
    <section className="bg-obsidian border-y border-glass-border overflow-hidden py-4 md:py-8 flex flex-col gap-2 relative pointer-events-none select-none">
       <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-obsidian to-transparent z-10" />
       <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-obsidian to-transparent z-10" />
       
       <MarqueeRow 
         items={["IS 280 CERTIFIED", "700+ MT MONTHLY", "JAIPUR RAJASTHAN", "GLOBAL STANDARDS", "HOT DIP GALVANIZED"]} 
         direction={1} 
         speed={30}
       />
       <MarqueeRow 
         items={["गुणवत्ता", "QUALITY", "विश्वास", "TRUST", "परिशुद्धता", "PRECISION"]} 
         direction={-1} 
         speed={45}
       />
       <MarqueeRow 
         items={["CABLE MANUFACTURERS", "POWER SECTOR", "INFRASTRUCTURE", "AGRICULTURE CO-OPS", "FENCING CONTRACTORS"]} 
         direction={1} 
         speed={35}
       />
    </section>
  );
}
