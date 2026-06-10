"use client";

import { useState } from 'react';
import { SplitText } from '@/components/ui/SplitText';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const CATALOGUE = [
  {
    slug: 'hot-dip-galvanized-wire',
    name: "Hot Dip Galvanized Mild Steel Wire",
    desc: "Premium quality GI wire for fencing, farming, and general engineering applications.",
    standard: "IS 280",
    img: "/1.png"
  },
  {
    slug: 'low-carbon-galvanized-wire',
    name: "Low Carbon Galvanized Steel Wire",
    desc: "Soft and pliable wire perfect for tying, binding, and construction needs.",
    standard: "IS 280 / IS 12753",
    img: "/2.png"
  },
  {
    slug: 'formed-wire-cable-armouring',
    name: "Formed Wire for Cable Armouring",
    desc: "High-protection armouring wire engineered for the electrical transmission industry.",
    standard: "IS 3975",
    img: "/3.png"
  }
];

export function ProductsCatalogue() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <div className="pt-40 pb-20 max-w-[1280px] mx-auto px-[5vw]">
      <div className="mb-20">
        <h1 className="font-bebas text-7xl md:text-[100px] text-cream mb-4 uppercase tracking-wider leading-[0.85]">
          <SplitText text="Masterpiece" />
          <br />
          <span className="text-amber"><SplitText text="Catalogue" delayOffset={0.2} /></span>
        </h1>
        <p className="font-sans font-light text-steel/80 max-w-[600px] text-lg leading-relaxed mt-8">
          Engineered for durability. Manufactured for precision. Discover our selection of certified galvanized steel wire products designed to support global infrastructure.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {CATALOGUE.map((prod, idx) => (
          <Link 
            key={prod.slug} 
            href={`/products/${prod.slug}`}
            className="group block relative"
            onMouseEnter={() => setHoveredIdx(idx)}
            onMouseLeave={() => setHoveredIdx(null)}
            onTouchStart={() => setHoveredIdx(idx)}
          >
            <div className="blob-card p-2 rounded-2xl border border-glass-border overflow-hidden h-full flex flex-col hover:border-amber/50 transition-colors">
              <div className="aspect-[4/3] w-full rounded-xl overflow-hidden relative bg-obsidian">
                 <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 to-transparent z-10" />
                 <img 
                   src={prod.img} 
                   alt={prod.name} 
                   loading="lazy"
                   className="w-full h-full object-cover filter grayscale contrast-125 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700" 
                 />
                 <div className="absolute bottom-4 left-4 z-20 px-3 py-1 bg-amber text-obsidian font-mono text-[10px] tracking-widest uppercase rounded flex items-center gap-2">
                   <span className="w-1.5 h-1.5 bg-obsidian rounded-full animate-pulse" />
                   {prod.standard}
                 </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-bebas text-3xl text-cream mb-3 leading-none group-hover:text-amber transition-colors">{prod.name}</h3>
                <p className="font-sans text-sm text-steel font-light leading-relaxed mb-6 flex-grow">
                  {prod.desc}
                </p>
                
                <div className="font-mono text-[10px] uppercase tracking-widest text-cream flex items-center justify-between border-t border-glass-border pt-4 group-hover:border-amber/30 transition-colors">
                  <span>View Specifications</span>
                  <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${hoveredIdx === idx ? 'translate-x-1 text-amber' : ''}`} />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
