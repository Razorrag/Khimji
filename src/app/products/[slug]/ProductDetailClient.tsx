"use client";

import Link from 'next/link';
import { SplitText } from '@/components/ui/SplitText';
import { ArrowLeft, Check } from 'lucide-react';
import { motion } from 'framer-motion';

const PRODUCT_DB: Record<string, any> = {
  'hot-dip-galvanized-wire': {
    name: "Hot Dip Galvanized Mild Steel Wire",
    desc: "Premium quality GI wire tailored for fencing, farming, and general engineering applications.",
    longDesc: "Our Hot Dip Galvanized Mild Steel Wire is manufactured using advanced continuous hot-dip galvanizing technology. This ensures a uniform, thick coating of zinc that provides exceptional corrosion resistance even in harsh environments. Designed for superior tensile strength and ductility.",
    standard: "IS 280",
    img: "https://images.unsplash.com/photo-1542361345-89e58247f2d5?auto=format&fit=crop&q=80&w=2000",
    specs: {
      "Size Range": "1.25 mm to 4.00 mm",
      "Zinc Coating": "As per IS standards (Heavy/Medium)",
      "UTS Range": "300–550 N/mm²",
      "Tolerance": "±0.05 mm"
    },
    features: [
      "Excellent atmospheric corrosion resistance",
      "Uniform zinc coating thickness",
      "High binding capacity",
      "Smooth finish free from rough spots"
    ],
    applications: [
      "Agriculture and vineyard trellising",
      "Chain link fencing",
      "Wire mesh weaving",
      "General tying and binding"
    ]
  },
  'low-carbon-galvanized-wire': {
    name: "Low Carbon Galvanized Steel Wire",
    desc: "Soft and pliable wire perfect for tying, binding, and construction needs.",
    longDesc: "Manufactured from high-quality low-carbon steel, this wire undergoes rigorous annealing and galvanization processes. The result is a highly flexible, pliable wire that resists breaking under strain while maintaining excellent protective properties against rust.",
    standard: "IS 280 / IS 12753",
    img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=2000",
    specs: {
      "Size Range": "0.90 mm to 5.00 mm",
      "Tensile Strength": "Soft (Below 450 N/mm²)",
      "Elongation": "10-15%",
      "Coil Weight": "25 kg to 100 kg"
    },
    features: [
      "High ductility and flexibility",
      "Easy to bend, twist, and tie",
      "Consistent diameter profiling",
      "Optimal zinc adherence"
    ],
    applications: [
      "Construction binding wire",
      "Packaging and bailing",
      "Handicrafts",
      "Cable armouring substrate"
    ]
  },
  'formed-wire-cable-armouring': {
    name: "Formed Wire for Cable Armouring",
    desc: "High-protection armouring wire engineered for the electrical transmission industry.",
    longDesc: "Specifically designed for the heavy electrification sector, our formed wire provides mechanical protection to power and communication cables. It shields internal conductors from physical crushing, rodent attacks, and environmental degradation.",
    standard: "IS 3975",
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000",
    specs: {
      "Standard Compliance": "IS 3975:1999",
      "Tolerance": "Strict dimensional accuracy",
      "Resistivity (Max)": "14.5 Ohm/km (as per specs)",
      "Coating": "Uniform Hot-Dip Zinc"
    },
    features: [
      "Passed rigorous mass-of-zinc tests",
      "Excellent electrical continuity",
      "Uniform dip test passed (no copper deposition)",
      "High mechanical resilience"
    ],
    applications: [
      "Underground power cables",
      "Telecommunication cables",
      "Submarine cables",
      "Heavy industrial conduit protection"
    ]
  }
};

export function ProductDetailClient({ slug }: { slug: string }) {
  const product = PRODUCT_DB[slug];

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
           <h1 className="font-bebas text-5xl text-cream mb-4">Product Not Found</h1>
           <Link href="/products" className="text-amber hover:text-cream transition-colors font-mono uppercase tracking-widest text-xs">
             ← Back to Catalogue
           </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 max-w-[1280px] mx-auto px-[5vw]">
      
      <Link href="/products" className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-steel hover:text-amber transition-colors mb-12">
        <ArrowLeft className="w-4 h-4" />
        Back to Catalogue
      </Link>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        
        {/* Left: Image & Quick Specs */}
        <div className="flex flex-col gap-8">
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
             className="aspect-[4/3] w-full rounded-2xl overflow-hidden glass-panel border border-glass-border shadow-2xl relative"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent z-10" />
            <img 
              src={product.img} 
              alt={product.name} 
              className="w-full h-full object-cover filter grayscale contrast-125"
            />
            <div className="absolute bottom-6 left-6 z-20">
              <div className="px-4 py-2 bg-amber text-obsidian font-mono text-xs tracking-widest uppercase rounded flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-obsidian rounded-full animate-pulse" />
                Certified: {product.standard}
              </div>
            </div>
          </motion.div>
          
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="glass-panel p-8 rounded-2xl border border-glass-border"
          >
            <h3 className="font-mono text-xs text-amber tracking-widest uppercase mb-6">Technical Specifications</h3>
            <div className="flex flex-col gap-4 font-sans text-sm text-steel">
              {Object.entries(product.specs).map(([key, value]) => (
                <div key={key} className="flex justify-between items-center py-2 border-b border-glass-border/30 last:border-0 last:pb-0">
                  <span className="uppercase text-[10px] tracking-widest text-steel/60">{key}</span>
                  <span className="text-cream text-right">{value as string}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right: Content */}
        <div className="flex flex-col justify-start pt-4">
          <motion.div
             initial={{ opacity: 0, x: 20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8 }}
          >
            <h1 className="font-bebas text-5xl md:text-7xl text-cream mb-6 uppercase tracking-wider leading-[0.9]">
              <SplitText text={product.name} />
            </h1>
            <p className="font-sans text-lg text-steel/90 font-light leading-relaxed mb-8">
              {product.longDesc}
            </p>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.3 }}
             className="mb-12"
          >
            <h3 className="font-mono text-xs text-amber tracking-widest uppercase mb-6">Key Features</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {product.features.map((feature: string, idx: number) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-cream font-light">
                  <div className="mt-1 w-5 h-5 rounded-full bg-amber/10 border border-amber/30 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-amber" />
                  </div>
                  <span className="leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.4 }}
             className="mb-16"
          >
            <h3 className="font-mono text-xs text-amber tracking-widest uppercase mb-6">Applications</h3>
            <div className="flex flex-wrap gap-3">
              {product.applications.map((app: string, idx: number) => (
                <span key={idx} className="font-mono text-[10px] tracking-widest uppercase px-4 py-2 border border-glass-border rounded-sm text-steel bg-obsidian/30">
                  {app}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="glass-panel p-8 rounded-2xl border border-glass-border flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="font-mono text-xs text-cream tracking-widest uppercase mb-2">Ready to order?</h4>
                <p className="font-sans text-sm text-steel font-light">Contact our sales team for pricing and availability.</p>
              </div>
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-amber text-obsidian font-mono text-xs tracking-widest uppercase font-bold rounded-full hover:bg-cream transition-colors whitespace-nowrap">
                Request Quote
              </Link>
            </div>
          </motion.div>

        </div>

      </div>

    </div>
  );
}
