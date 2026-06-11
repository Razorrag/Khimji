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
    img: "/1.png",
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
    img: "/2.png",
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
    img: "/3.png",
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

const TECHNICAL_TABLES: Record<string, { title: string; subtitle: string; headers: string[]; rows: string[][] }[]> = {
  'hot-dip-galvanized-wire': [
    {
      title: "IS 280 Zinc Coating Classes (g/m²)",
      subtitle: "Mandatory mass of zinc coating for different wire diameters as per Indian Standards.",
      headers: ["Wire Diameter (mm)", "Heavy Coated (Class A)", "Medium Coated (Class B)", "Light Coated (Class C)"],
      rows: [
        ["1.25 mm – 1.60 mm", "150 – 190 g/m²", "100 g/m²", "60 g/m²"],
        ["1.61 mm – 2.00 mm", "220 – 240 g/m²", "115 g/m²", "70 g/m²"],
        ["2.01 mm – 2.50 mm", "240 – 260 g/m²", "125 g/m²", "80 g/m²"],
        ["2.51 mm – 3.15 mm", "260 – 280 g/m²", "135 g/m²", "90 g/m²"],
        ["3.16 mm – 4.00 mm", "280 – 300 g/m²", "150 g/m²", "100 g/m²"]
      ]
    },
    {
      title: "Tensile Strength Classification",
      subtitle: "Mechanical grade designations based on ultimate tensile strength (UTS).",
      headers: ["Grade / Temper", "Tensile Range (N/mm²)", "Elongation (Min %)", "Typical Applications"],
      rows: [
        ["Soft (Annealed)", "300 – 450 N/mm²", "15%", "Binding wire, light weaving, tying"],
        ["Half-Hard", "450 – 550 N/mm²", "10%", "Barbed wire, vineyard trellises"],
        ["Hard Draw", "550 – 850 N/mm²", "8%", "Chain link fence, high tension fencing"]
      ]
    }
  ],
  'low-carbon-galvanized-wire': [
    {
      title: "Binding Wire SWG to Diameter & Run Length",
      subtitle: "Standard wire gauges (SWG) used on construction sites and their equivalent yields.",
      headers: ["Standard Wire Gauge (SWG)", "Diameter (mm)", "Approx. Length per 1 Kg", "Tying Strength Capacity"],
      rows: [
        ["16 SWG", "1.60 mm", "≈ 64 meters", "High (Slab joints, column foundation mats)"],
        ["18 SWG", "1.20 mm", "≈ 113 meters", "Medium (Standard beam and slab rebar)"],
        ["20 SWG", "0.90 mm", "≈ 200 meters", "Light (Stirrup positioning, mesh tying)"],
        ["22 SWG", "0.71 mm", "≈ 320 meters", "Extra-Light (Precise detailing, craft binding)"]
      ]
    },
    {
      title: "Mechanical & Metallurgical Checklist",
      subtitle: "Quality tolerance verification metrics for low carbon structural binding wire.",
      headers: ["Parameter", "Target Specification", "Tolerance Limit", "Testing Standards"],
      rows: [
        ["Carbon Content", "0.08% – 0.12%", "Max 0.15%", "Spectrometer analysis"],
        ["Elongation %", "Min 15%", "No upper limit", "Inline tensile test (IS 1608)"],
        ["Wrapping Test", "8 turns around self-diameter", "No fractures/peeling", "Mandrel wrapping test"],
        ["Diameter Tolerance", "±0.02 mm to ±0.03 mm", "Max ±0.04 mm", "Digital micrometer verification"]
      ]
    }
  ],
  'formed-wire-cable-armouring': [
    {
      title: "IS 3975 Cable Armouring Size & Resistance Table",
      subtitle: "Standard round and flat formed wire dimensions with mandatory electrical resistance thresholds.",
      headers: ["Armour Type & Size", "Zinc Mass (Min)", "CuSO₄ Dips (Min)", "Max Resistivity at 20°C"],
      rows: [
        ["Round Wire (1.40 mm)", "180 g/m²", "3 dips of 1 min", "14.5 x 10⁻⁸ Ω·m (Max)"],
        ["Round Wire (1.60 mm)", "190 g/m²", "3 dips of 1 min", "14.5 x 10⁻⁸ Ω·m (Max)"],
        ["Round Wire (2.00 mm)", "200 g/m²", "4 dips of 1 min", "14.5 x 10⁻⁸ Ω·m (Max)"],
        ["Round Wire (2.50 mm)", "210 g/m²", "4 dips of 1 min", "14.5 x 10⁻⁸ Ω·m (Max)"],
        ["Round Wire (3.15 mm)", "220 g/m²", "4 dips of 1 min", "14.5 x 10⁻⁸ Ω·m (Max)"],
        ["Flat Formed (4.0 x 0.8 mm)", "180 g/m²", "3 dips of 1 min", "14.5 x 10⁻⁸ Ω·m (Max)"]
      ]
    },
    {
      title: "Submersion & Adhesion Testing Criteria",
      subtitle: "Mandatory quality checks for high-voltage cable protection substrates.",
      headers: ["Quality Check", "Testing Agent/Method", "Failure Threshold", "Safety Goal"],
      rows: [
        ["Copper Sulfate Dip Test", "0.1N copper sulfate soln", "Copper deposition before 3 dips", "Guarantees zero bare steel spots"],
        ["Torsion Integrity", "Reverse torsion test", "Fracture under 15 cycles", "Ensures zero wire breakage during winding"],
        ["Zinc Stripping", "Antimony chloride & HCl", "Weight under spec minimum", "Guarantees 25+ years rust protection"]
      ]
    }
  ]
};

export function ProductDetailClient({ slug }: { slug: string }) {
  const product = PRODUCT_DB[slug];

  if (!product) {
    return (
      <div className="min-h-[100svh] flex items-center justify-center pt-20">
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
             className="aspect-[4/3] w-full rounded-2xl overflow-hidden blob-card border border-glass-border relative"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent z-10" />
            <img 
              src={product.img} 
              alt={product.name} 
              loading="lazy"
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
             className="blob-card p-8 rounded-2xl border border-glass-border"
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
                  <div className="mt-1 w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                       style={{ backgroundColor: "rgba(249,115,22,0.1)", border: "1px solid rgba(249,115,22,0.3)" }}>
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
                <span key={idx} className="font-mono text-[10px] tracking-widest uppercase px-4 py-2 border border-glass-border rounded-full text-steel bg-obsidian/30">
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
             <div className="blob-card p-8 rounded-2xl border border-glass-border flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="font-mono text-xs text-cream tracking-widest uppercase mb-2">Ready to order?</h4>
                <p className="font-sans text-sm text-steel font-light">Contact our sales team for pricing and availability.</p>
              </div>
               <Link href="/contact" className="blob-btn-product font-mono text-xs tracking-widest uppercase font-bold px-8 py-4 inline-flex items-center justify-center whitespace-nowrap">
                Contact Us
              </Link>
            </div>
          </motion.div>

        </div>

      </div>

      {/* Full-width Technical Specifications & Compliance Tables Section */}
      {TECHNICAL_TABLES[slug] && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 pt-16 border-t border-glass-border"
        >
          <div className="mb-12">
            <h3 className="font-mono text-xs text-amber tracking-widest uppercase mb-4">Industrial Compliance Databanks</h3>
            <h2 className="font-bebas text-4xl md:text-5xl text-cream tracking-wide">Technical Tolerance & Testing Metrics</h2>
          </div>
          
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
            {TECHNICAL_TABLES[slug].map((table, tIdx) => (
               <div key={tIdx} className="blob-card p-8 rounded-2xl border border-glass-border flex flex-col justify-between">
                <div>
                  <h4 className="font-bebas text-2xl text-cream tracking-wider mb-2">{table.title}</h4>
                  <p className="font-sans text-xs text-steel/60 font-light mb-6">{table.subtitle}</p>
                  
                  <div className="overflow-x-auto -mx-2 px-2 pb-2">
                    <table className="w-full border-collapse text-left text-xs font-sans text-steel min-w-[500px]">
                      <thead>
                        <tr className="border-b border-glass-border">
                          {table.headers.map((header, hIdx) => (
                            <th key={hIdx} className="pb-3 font-semibold text-cream uppercase tracking-wider text-[10px] pr-4 whitespace-nowrap">{header}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {table.rows.map((row, rIdx) => (
                          <tr key={rIdx} className="border-b border-glass-border/30 last:border-0 hover:bg-white/5 transition-colors">
                            {row.map((cell, cIdx) => (
                              <td key={cIdx} className="py-3.5 pr-4 font-light text-steel/95 first:font-medium first:text-cream">
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}

    </div>
  );
}
