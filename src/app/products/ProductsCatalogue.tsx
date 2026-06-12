"use client";

import { useRef, useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { Check, ArrowLeft } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const PRODUCTS = [
  {
    name: "Hot Dip Galvanized Mild Steel Wire",
    ordinal: "01",
    slug: "hot-dip-galvanized-wire",
    desc: "Premium quality GI wire tailored for fencing, farming, and general engineering applications.",
    longDesc: "Our Hot Dip Galvanized Mild Steel Wire is manufactured using advanced continuous hot-dip galvanizing technology. This ensures a uniform, thick coating of zinc that provides exceptional corrosion resistance even in harsh environments. Designed for superior tensile strength and ductility, this wire is the backbone of India's fencing, agriculture, and construction industries.",
    standard: "IS 280",
    img: "/1.png",
    specs: {
      "Size Range": "1.25 mm to 4.00 mm",
      "Zinc Coating": "As per IS standards (Heavy/Medium)",
      "UTS Range": "300-550 N/mm\u00B2",
      "Tolerance": "\u00B10.05 mm"
    },
    features: [
      "Excellent atmospheric corrosion resistance",
      "Uniform zinc coating thickness",
      "High binding capacity",
      "Smooth finish free from rough spots",
      "Consistent diameter across coils",
      "Weather-proof for outdoor applications"
    ],
    applications: [
      "Agriculture and vineyard trellising",
      "Chain link fencing",
      "Wire mesh weaving",
      "General tying and binding",
      "Barbed wire manufacturing",
      "Highway crash barrier wiring"
    ],
    techTables: [
      {
        title: "IS 280 Zinc Coating Classes (g/m\u00B2)",
        subtitle: "Mandatory mass of zinc coating for different wire diameters as per Indian Standards.",
        headers: ["Wire Diameter (mm)", "Heavy Coated (Class A)", "Medium Coated (Class B)", "Light Coated (Class C)"],
        rows: [
          ["1.25 mm \u2013 1.60 mm", "150 \u2013 190 g/m\u00B2", "100 g/m\u00B2", "60 g/m\u00B2"],
          ["1.61 mm \u2013 2.00 mm", "220 \u2013 240 g/m\u00B2", "115 g/m\u00B2", "70 g/m\u00B2"],
          ["2.01 mm \u2013 2.50 mm", "240 \u2013 260 g/m\u00B2", "125 g/m\u00B2", "80 g/m\u00B2"],
          ["2.51 mm \u2013 3.15 mm", "260 \u2013 280 g/m\u00B2", "135 g/m\u00B2", "90 g/m\u00B2"],
          ["3.16 mm \u2013 4.00 mm", "280 \u2013 300 g/m\u00B2", "150 g/m\u00B2", "100 g/m\u00B2"]
        ]
      },
      {
        title: "Tensile Strength Classification",
        subtitle: "Mechanical grade designations based on ultimate tensile strength (UTS).",
        headers: ["Grade / Temper", "Tensile Range (N/mm\u00B2)", "Elongation (Min %)", "Typical Applications"],
        rows: [
          ["Soft (Annealed)", "300 \u2013 450 N/mm\u00B2", "15%", "Binding wire, light weaving, tying"],
          ["Half-Hard", "450 \u2013 550 N/mm\u00B2", "10%", "Barbed wire, vineyard trellises"],
          ["Hard Draw", "550 \u2013 850 N/mm\u00B2", "8%", "Chain link fence, high tension fencing"]
        ]
      }
    ]
  },
  {
    name: "Cable Armouring Round Wire",
    ordinal: "02",
    slug: "low-carbon-galvanized-wire",
    desc: "Soft and pliable wire perfect for tying, binding, and construction needs.",
    longDesc: "Manufactured from high-quality low-carbon steel, this wire undergoes rigorous annealing and galvanization processes. The result is a highly flexible, pliable wire that resists breaking under strain while maintaining excellent protective properties against rust. Ideal for construction sites where easy handling and reliable binding strength are essential.",
    standard: "IS 280 / IS 12753",
    img: "/2.png",
    specs: {
      "Size Range": "0.90 mm to 5.00 mm",
      "Tensile Strength": "Soft (Below 450 N/mm\u00B2)",
      "Elongation": "10-15%",
      "Coil Weight": "25 kg to 100 kg"
    },
    features: [
      "High ductility and flexibility",
      "Easy to bend, twist, and tie",
      "Consistent diameter profiling",
      "Optimal zinc adherence",
      "Minimal breakage during handling",
      "Suitable for machine and hand tying"
    ],
    applications: [
      "Construction binding wire",
      "Packaging and bailing",
      "Handicrafts",
      "Cable armouring substrate",
      "Reinforced concrete tying",
      "Hill slope stabilization mesh"
    ],
    techTables: [
      {
        title: "Binding Wire SWG to Diameter & Run Length",
        subtitle: "Standard wire gauges (SWG) used on construction sites and their equivalent yields.",
        headers: ["Standard Wire Gauge (SWG)", "Diameter (mm)", "Approx. Length per 1 Kg", "Tying Strength Capacity"],
        rows: [
          ["16 SWG", "1.60 mm", "\u2248 64 meters", "High (Slab joints, column foundation mats)"],
          ["18 SWG", "1.20 mm", "\u2248 113 meters", "Medium (Standard beam and slab rebar)"],
          ["20 SWG", "0.90 mm", "\u2248 200 meters", "Light (Stirrup positioning, mesh tying)"],
          ["22 SWG", "0.71 mm", "\u2248 320 meters", "Extra-Light (Precise detailing, craft binding)"]
        ]
      },
      {
        title: "Mechanical & Metallurgical Checklist",
        subtitle: "Quality tolerance verification metrics for low carbon structural binding wire.",
        headers: ["Parameter", "Target Specification", "Tolerance Limit", "Testing Standards"],
        rows: [
          ["Carbon Content", "0.08% \u2013 0.12%", "Max 0.15%", "Spectrometer analysis"],
          ["Elongation %", "Min 15%", "No upper limit", "Inline tensile test (IS 1608)"],
          ["Wrapping Test", "8 turns around self-diameter", "No fractures/peeling", "Mandrel wrapping test"],
          ["Diameter Tolerance", "\u00B10.02 mm to \u00B10.03 mm", "Max \u00B10.04 mm", "Digital micrometer verification"]
        ]
      }
    ]
  },
  {
    name: "Cable Armouring Formed Wire (Strip)",
    ordinal: "03",
    slug: "formed-wire-cable-armouring",
    desc: "High-protection armouring wire engineered for the electrical transmission industry.",
    longDesc: "Specifically designed for the heavy electrification sector, our formed wire provides mechanical protection to power and communication cables. It shields internal conductors from physical crushing, rodent attacks, and environmental degradation. Manufactured to strict IS 3975 standards with verified electrical continuity and zinc mass compliance.",
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
      "High mechanical resilience",
      "Rodent and crush resistant",
      "Long-term underground durability"
    ],
    applications: [
      "Underground power cables",
      "Telecommunication cables",
      "Submarine cables",
      "Heavy industrial conduit protection",
      "HT/LT cable armouring",
      "Solar farm cable protection"
    ],
    techTables: [
      {
        title: "IS 3975 Cable Armouring Size & Resistance Table",
        subtitle: "Standard round and flat formed wire dimensions with mandatory electrical resistance thresholds.",
        headers: ["Armour Type & Size", "Zinc Mass (Min)", "CuSO\u2084 Dips (Min)", "Max Resistivity at 20\u00B0C"],
        rows: [
          ["Round Wire (1.40 mm)", "180 g/m\u00B2", "3 dips of 1 min", "14.5 x 10\u207B\u2078 \u03A9\u00B7m (Max)"],
          ["Round Wire (1.60 mm)", "190 g/m\u00B2", "3 dips of 1 min", "14.5 x 10\u207B\u2078 \u03A9\u00B7m (Max)"],
          ["Round Wire (2.00 mm)", "200 g/m\u00B2", "4 dips of 1 min", "14.5 x 10\u207B\u2078 \u03A9\u00B7m (Max)"],
          ["Round Wire (2.50 mm)", "210 g/m\u00B2", "4 dips of 1 min", "14.5 x 10\u207B\u2078 \u03A9\u00B7m (Max)"],
          ["Round Wire (3.15 mm)", "220 g/m\u00B2", "4 dips of 1 min", "14.5 x 10\u207B\u2078 \u03A9\u00B7m (Max)"],
          ["Flat Formed (4.0 x 0.8 mm)", "180 g/m\u00B2", "3 dips of 1 min", "14.5 x 10\u207B\u2078 \u03A9\u00B7m (Max)"]
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
  }
];

function ProductSection({ prod, index }: { prod: typeof PRODUCTS[0]; index: number }) {
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
    <div ref={sectionRef} className="relative min-h-[85dvh] md:h-screen overflow-hidden">
      <div ref={imageRef} className="absolute inset-0 w-full h-full">
        <img src={prod.img} alt={prod.name} loading="lazy" className="w-full h-full object-cover" />
      </div>

      <div ref={overlayRef} className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent pointer-events-none" />

      <div ref={numberRef} className="absolute top-1/2 -translate-y-1/2 right-[5vw] md:right-10 pointer-events-none z-[3]">
        <span className="font-bebas text-[120px] md:text-[200px] lg:text-[300px] text-white/[0.03] leading-none select-none">{prod.ordinal}</span>
      </div>

      <div ref={contentRef} className="absolute inset-0 flex flex-col justify-end p-5 md:p-16 lg:p-20 z-10">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
            <span className="font-mono text-amber text-xs md:text-sm font-bold tracking-wider">{prod.ordinal}</span>
            <div className="h-[1px] w-8 md:w-12 bg-amber/50" />
          </div>
          <h3 className="font-bebas text-3xl md:text-6xl lg:text-7xl text-cream tracking-wide leading-[0.9] mb-4 md:mb-6">{prod.name}</h3>

          <div className="blob-card p-4 md:p-8 max-w-lg">
            <div className="flex flex-col mb-4 md:mb-5">
              {Object.entries(prod.specs).map(([k, v]) => (
                <div key={k} className="flex justify-between items-start gap-4 py-2.5 border-b last:border-b-0" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                  <span className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.1em] md:tracking-[0.15em] text-white/50 shrink-0">{k}</span>
                  <span className="font-mono text-xs md:text-sm text-cream font-medium text-right break-words">{v}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4 md:mb-5">
              {prod.applications.slice(0, 4).map((app: string) => (
                <span key={app} className="text-[8px] md:text-[9px] font-mono px-2 md:px-2.5 py-1 rounded-full text-white/50 border border-white/10 uppercase tracking-wider">{app}</span>
              ))}
            </div>
            <Link href="/contact" className="blob-btn-product font-mono text-[10px] tracking-widest uppercase font-bold flex items-center justify-center gap-2 w-full px-5 py-3">
              <span>Contact Us</span>
              <span>&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductDetails({ prod }: { prod: typeof PRODUCTS[0] }) {
  return (
    <section className="py-12 md:py-20 bg-transparent relative z-10">
      <div className="max-w-[1280px] mx-auto px-5 md:px-[5vw]">
        <div className="grid grid-cols-1 lg:grid-cols-[350px_1fr] gap-10 lg:gap-16 items-start">

          {/* Left: Specs only (image already in hero) */}
          <div className="flex flex-col gap-6 md:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="blob-card p-5 md:p-8 rounded-2xl border border-white/10"
            >
              <h3 className="font-mono text-[10px] md:text-xs text-amber tracking-widest uppercase mb-4 md:mb-6">Technical Specifications</h3>
              <div className="flex flex-col gap-3 md:gap-4">
                {Object.entries(prod.specs).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-start gap-4 py-2 border-b border-white/5 last:border-0 last:pb-0">
                    <span className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.1em] text-white/50 shrink-0">{key}</span>
                    <span className="font-mono text-xs md:text-sm text-cream font-medium text-right">{value as string}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-white/5">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-amber rounded-full animate-pulse" />
                  <span className="font-mono text-[9px] md:text-[10px] text-amber tracking-widest uppercase">Certified: {prod.standard}</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Content */}
          <div className="flex flex-col justify-start pt-0 lg:pt-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-bebas text-3xl md:text-4xl lg:text-5xl text-cream mb-4 md:mb-6 uppercase tracking-wider leading-[0.9]">
                {prod.name}
              </h2>
              <p className="font-sans text-base md:text-lg text-white/70 font-light leading-relaxed mb-6 md:mb-8">
                {prod.longDesc}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-8 md:mb-12"
            >
              <h3 className="font-mono text-[10px] md:text-xs text-amber tracking-widest uppercase mb-4 md:mb-6">Key Features</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {prod.features.map((feature: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-2.5 md:gap-3 text-sm text-cream/90 font-light">
                    <div className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                      style={{ backgroundColor: "rgba(249,115,22,0.15)", border: "1px solid rgba(249,115,22,0.4)" }}>
                      <Check className="w-3 h-3 text-amber" />
                    </div>
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-10 md:mb-16"
            >
              <h3 className="font-mono text-[10px] md:text-xs text-amber tracking-widest uppercase mb-4 md:mb-6">Applications</h3>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {prod.applications.map((app: string, idx: number) => (
                  <span key={idx} className="font-mono text-[9px] md:text-[10px] tracking-widest uppercase px-3 md:px-4 py-1.5 md:py-2 border border-white/10 rounded-full text-white/60 bg-white/5">
                    {app}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="blob-card p-5 md:p-8 rounded-2xl border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 md:gap-6">
                <div className="text-center sm:text-left">
                  <h4 className="font-mono text-[10px] md:text-xs text-cream tracking-widest uppercase mb-2">Ready to order?</h4>
                  <p className="font-sans text-xs md:text-sm text-white/50 font-light">Contact our sales team for pricing and availability.</p>
                </div>
                <Link href="/contact" className="blob-btn-product font-mono text-[10px] md:text-xs tracking-widest uppercase font-bold px-6 md:px-8 py-3 md:py-4 inline-flex items-center justify-center whitespace-nowrap w-full sm:w-auto">
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Technical Tables */}
        {prod.techTables && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-12 md:mt-20 pt-10 md:pt-16 border-t border-white/10"
          >
            <div className="mb-6 md:mb-10">
              <h3 className="font-mono text-[10px] md:text-xs text-amber tracking-widest uppercase mb-2 md:mb-3">Industrial Compliance Databanks</h3>
              <h2 className="font-bebas text-2xl md:text-3xl lg:text-4xl text-cream tracking-wide">Technical Tolerance & Testing Metrics</h2>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 md:gap-10">
              {prod.techTables.map((table, tIdx) => (
                <div key={tIdx} className="blob-card p-5 md:p-8 rounded-2xl border border-white/10 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bebas text-lg md:text-xl lg:text-2xl text-cream tracking-wider mb-2">{table.title}</h4>
                    <p className="font-sans text-[11px] md:text-xs text-white/40 font-light mb-4 md:mb-6">{table.subtitle}</p>

                    <div className="overflow-x-auto -mx-2 px-2 pb-2">
                      <table className="w-full border-collapse text-left text-[11px] md:text-xs font-sans text-white/60 min-w-[400px]">
                        <thead>
                          <tr className="border-b border-white/10">
                            {table.headers.map((header, hIdx) => (
                              <th key={hIdx} className="pb-2 md:pb-3 font-semibold text-cream uppercase tracking-wider text-[9px] md:text-[10px] pr-3 md:pr-4 whitespace-nowrap">{header}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {table.rows.map((row, rIdx) => (
                            <tr key={rIdx} className="border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors">
                              {row.map((cell, cIdx) => (
                                <td key={cIdx} className="py-2.5 md:py-3.5 pr-3 md:pr-4 font-light text-white/70 first:font-medium first:text-cream">
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
    </section>
  );
}

function ProductDivider({ index }: { index: number }) {
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
    <div ref={ref} className="relative py-12 md:py-20 bg-transparent">
      <div className="max-w-[1280px] mx-auto px-5 md:px-[5vw] text-center">
        <div className="h-[2px] w-12 bg-amber mx-auto mb-4" />
        <span className="font-mono text-[9px] md:text-[10px] text-amber/60 tracking-[0.3em] uppercase block mb-2">Crafted With Precision</span>
        <h2 className="font-bebas text-[clamp(28px,4vw,48px)] leading-[0.85] text-cream uppercase mb-3">
          {index < 2 ? (
            <>Next Product. <span className="text-amber">Same Standard.</span></>
          ) : (
            <>Three Products. <span className="text-amber">One Standard.</span></>
          )}
        </h2>
        <p className="font-sans text-xs md:text-sm text-white/30 max-w-md mx-auto leading-relaxed">
          Every strand engineered to IS 280 & IS 3975 standards.
        </p>
      </div>
    </div>
  );
}

export function ProductsCatalogue() {
  return (
    <div>
      {/* Hero */}
      <div className="relative pt-28 md:pt-40 pb-12 md:pb-20 bg-transparent">
        <div className="max-w-[1280px] mx-auto px-5 md:px-[5vw]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="h-[2px] w-12 md:w-16 bg-amber mb-4 md:mb-6" />
            <span className="font-mono text-[9px] md:text-[10px] text-amber/60 tracking-[0.3em] uppercase block mb-2 md:mb-3">Our Products</span>
            <h1 className="font-bebas text-[48px] md:text-[clamp(56px,8vw,120px)] leading-[0.85] text-cream uppercase mb-4 md:mb-6">
              Three Products.<br />
              <span className="text-amber">One Standard.</span>
            </h1>
            <p className="font-sans text-sm md:text-base lg:text-lg text-white/50 max-w-[600px] leading-relaxed">
              Every strand engineered to IS 280 & IS 3975 standards. From raw wire to finished coil.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Product sections with full details */}
      {PRODUCTS.map((prod, i) => (
        <div key={i}>
          {/* Full-screen hero card */}
          <ProductSection prod={prod} index={i} />
          {/* Detailed content below */}
          <ProductDetails prod={prod} />
          {/* Divider between products */}
          {i < PRODUCTS.length - 1 && <ProductDivider index={i} />}
        </div>
      ))}

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-transparent border-t border-white/10">
        <div className="max-w-[800px] mx-auto px-5 md:px-[5vw] text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-bebas text-4xl md:text-5xl lg:text-7xl text-cream mb-4 md:mb-6">Experience <span className="text-amber">Precision</span></h2>
            <p className="font-sans text-cream/70 text-base md:text-lg font-light leading-relaxed mb-8 md:mb-10 max-w-2xl mx-auto">
              Our continuous wire galvanizing plant is designed for scale, quality, and uncompromising durability. Partner with us for your industrial wire needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
              <Link href="/contact" className="blob-btn-product font-mono text-xs tracking-widest uppercase font-bold px-8 py-4 inline-flex items-center justify-center group transition-all duration-300 w-full sm:w-auto">
                <span className="relative z-10">Contact Us</span>
                <span className="ml-3 transition-transform group-hover:translate-x-1">&rarr;</span>
              </Link>
              <Link href="/quality" className="glass-btn font-mono text-xs tracking-widest uppercase px-8 py-4 inline-flex items-center justify-center w-full sm:w-auto">
                View Quality Standards
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
