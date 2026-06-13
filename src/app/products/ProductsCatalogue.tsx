"use client";

import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { Check } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const PRODUCTS = [
  {
    name: "Hot Dip Galvanized Mild Steel Wire",
    ordinal: "01",
    tagline: "Corrosion-Protected Steel Wire",
    longDesc: "Galvanized Iron (GI) Wires are manufactured from high-quality steel wire rods coated with a protective layer of zinc through the hot-dip galvanization process. This zinc coating acts as a shield against corrosion and rust, significantly enhancing the wire's durability and service life in diverse environmental conditions. The thickness of the zinc coating, measured in grams per square meter (GSM), plays a crucial role in determining the wire's corrosion resistance and overall performance. Available in a wide range of diameters and coating specifications, GI Wires offer an excellent combination of strength, flexibility, and reliability. Known for their high tensile strength, superior ductility, and ease of handling, GI Wires are widely used across industries such as construction, agriculture, fencing, power transmission, cable armouring, wire mesh manufacturing, and general engineering applications.",
    standard: "IS 280:2006",
    img: "/1.png",
    highlights: ["Corrosion Protected", "High Strength", "Excellent Flexibility", "Extended Durability"],
    specs: {
      "Raw Material": "Premium Low Carbon MS Wire Rod",
      "Size Range": "1.25 mm to 4.00 mm",
      "Tensile Strength (UTS)": "300 \u2013 550 MPa",
      "Zinc Coating": "Uniform as per IS 280 standard",
      "Standard": "IS 280:2006"
    },
    features: [
      "Excellent atmospheric corrosion resistance",
      "Uniform zinc coating thickness across full batch",
      "High tensile strength and superior ductility",
      "Smooth finish free from rough spots or zinc drips",
      "Consistent diameter across coils",
      "Weather-proof for outdoor applications",
      "Easy handling for machine and manual operations"
    ],
    applications: [
      "Fencing and perimeter protection",
      "Agriculture and farming",
      "Solar fencing",
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
    tagline: "Mechanical Protection Wire",
    longDesc: "Cable Armouring Wires are designed to provide a robust metallic protective layer around power, control, and communication cables, safeguarding them against mechanical damage during installation, handling, and service life. Manufactured from high-quality steel and galvanized using advanced technology, these wires offer exceptional corrosion resistance, high tensile strength, superior flexibility, and long-term durability. Produced in accordance with IS 3975:1999 standards to ensure consistent quality and performance.",
    standard: "IS 3975:1999",
    img: "/2.png",
    highlights: ["Mechanical Protection", "High Strength", "Corrosion Resistant", "Long Lasting Performance"],
    specs: {
      "Size Range": "1.25 mm to 4.00 mm",
      "Tensile Strength (UTS)": "300 \u2013 500 MPa",
      "Resistivity (Max)": "14.5 Ohm-cm \u00D7 10\u207B\u2076",
      "Elongation": "10% Min.",
      "Standard": "IS 3975:1999"
    },
    features: [
      "Superior corrosion resistance for extended service life",
      "High tensile strength and excellent elongation properties",
      "Uniform zinc coating and dimensional accuracy",
      "Excellent flexibility for easy cable manufacturing",
      "Consistent electrical resistivity as per industry standards",
      "Manufactured in compliance with IS 3975:1999",
      "Uniform dip test passed (no copper deposition)"
    ],
    applications: [
      "Power cables",
      "Control cables",
      "Instrumentation cables",
      "Communication cables",
      "Underground cable networks",
      "Industrial and infrastructure projects"
    ],
    techTables: [
      {
        title: "IS 3975 Cable Armouring Round Wire Specifications",
        subtitle: "Available sizes with tolerance, tensile strength, elongation, and resistivity per IS 3975:1999.",
        headers: ["Size (mm)", "Tolerance (\u00B1 mm)", "Tensile Strength (MPa)", "Elongation % Min.", "Resistivity (Ohm-cm \u00D7 10\u207B\u2076 Max.)"],
        rows: [
          ["1.25", "0.035", "300\u2013500", "10", "14.5"],
          ["1.40", "0.040", "300\u2013500", "10", "14.5"],
          ["1.60", "0.045", "300\u2013500", "10", "14.5"],
          ["2.00", "0.050", "300\u2013500", "10", "14.5"],
          ["2.50", "0.065", "300\u2013500", "10", "14.5"],
          ["3.15", "0.080", "300\u2013500", "10", "14.5"],
          ["4.00", "0.100", "300\u2013500", "10", "14.5"]
        ]
      },
      {
        title: "Quality Testing Criteria",
        subtitle: "Mandatory quality checks for cable armouring wire compliance.",
        headers: ["Quality Check", "Testing Method", "Requirement", "Standard"],
        rows: [
          ["Copper Sulfate Dip Test", "0.1N copper sulfate solution", "No copper deposition before min. dips", "IS 3975"],
          ["Torsion Test", "Reverse torsion", "Min. 15 cycles without fracture", "IS 3975"],
          ["Zinc Adhesion", "Antimony chloride stripping", "Weight meets minimum spec", "IS 3975"]
        ]
      }
    ]
  },
  {
    name: "Cable Armouring Formed Wire (Strip)",
    ordinal: "03",
    tagline: "Enhanced Protection Armouring",
    longDesc: "Cable Armouring Formed Wire (Strip) is specially engineered to provide enhanced mechanical protection and structural strength to power, control, and communication cables. Its uniquely formed cross-section ensures improved cable coverage and efficient material utilization compared to conventional round armouring wires. Manufactured from high-quality steel and galvanized using advanced technology, these wires offer excellent corrosion resistance, high tensile strength, superior flexibility, and long service life. Produced in accordance with IS 3975:1999, Formed Armouring Wires ensure consistent quality and reliable performance in demanding operating environments.",
    standard: "IS 3975:1999",
    img: "/3.png",
    highlights: ["Enhanced Protection", "Optimized Profile", "High Strength", "Corrosion Resistant"],
    specs: {
      "Size": "4.00 mm \u00D7 0.80 mm",
      "Width (A)": "4.00 mm",
      "Width (B)": "3.40 mm",
      "Thickness (C)": "0.80 mm",
      "Radius (R)": "10.00 mm",
      "Tensile Strength (UTS)": "300 \u2013 500 MPa",
      "Resistivity (Max)": "14.5 Ohm-cm \u00D7 10\u207B\u2076",
      "Elongation": "10% Min.",
      "Standard": "IS 3975:1999"
    },
    features: [
      "Conforms to IS 3975:1999 standards",
      "Optimized formed profile for improved cable coverage",
      "Excellent corrosion and rust resistance",
      "High tensile strength and durability",
      "Superior flexibility and dimensional accuracy",
      "Suitable for power, control, and communication cables",
      "Efficient material utilization vs. round wire"
    ],
    applications: [
      "Power industry cables",
      "Reinforcing aluminium conductors",
      "Underground cable networks",
      "Telecommunication cables",
      "Heavy industrial conduit protection",
      "HT/LT cable armouring"
    ],
    techTables: [
      {
        title: "IS 3975 Formed Wire Technical Specifications",
        subtitle: "Detailed dimensional and mechanical properties for formed armouring strip.",
        headers: ["Property", "Specification"],
        rows: [
          ["Size", "4.00 \u00D7 0.80 mm"],
          ["Width (A)", "4.00 mm"],
          ["Width (B)", "3.40 mm"],
          ["Thickness (C)", "0.80 mm"],
          ["Radius (R)", "10.00 mm"],
          ["Tolerance", "\u00B110%"],
          ["Tensile Strength", "300\u2013500 MPa"],
          ["Minimum Elongation", "10%"],
          ["Maximum Resistivity", "14.5 \u00D7 10\u207B\u2076 Ohm-cm"]
        ]
      },
      {
        title: "Application Suitability",
        subtitle: "Formed wire advantages over conventional round armouring.",
        headers: ["Feature", "Benefit", "Use Case"],
        rows: [
          ["Formed Profile", "Improved cable coverage", "Power and control cables"],
          ["Optimized Cross-Section", "Efficient material utilization", "Cost-effective armouring"],
          ["High Tensile Strength", "Mechanical damage protection", "Underground installations"],
          ["Uniform Zinc Coating", "25+ years corrosion protection", "Outdoor and marine cables"]
        ]
      }
    ]
  }
];

function ProductHero({ prod }: { prod: typeof PRODUCTS[0]; index?: number }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.015]">
      <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] lg:grid-cols-[320px_1fr]">

        {/* Image */}
        <div className="relative aspect-[4/3] md:aspect-auto md:h-full overflow-hidden">
          <img src={prod.img} alt={prod.name} loading="lazy" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent md:bg-gradient-to-r pointer-events-none" />
          {/* Ordinal overlay */}
          <div className="absolute top-4 left-4 z-10">
            <span className="font-bebas text-5xl md:text-6xl text-white/[0.08] leading-none select-none">{prod.ordinal}</span>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center p-6 md:p-8 lg:p-10">
          {/* Ordinal + tagline */}
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-amber text-xs font-bold tracking-wider">{prod.ordinal}</span>
            <div className="h-[1px] w-8 bg-amber/60" />
            <span className="font-mono text-[9px] md:text-[10px] text-amber/70 tracking-widest uppercase">{prod.tagline}</span>
          </div>

          {/* Product name */}
          <h2 className="font-bebas text-3xl md:text-4xl lg:text-5xl text-cream tracking-wide leading-[0.9] mb-4">{prod.name}</h2>

          {/* Specs grid */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-2.5">
            {Object.entries(prod.specs).map(([k, v]) => (
              <div key={k} className="flex flex-col">
                <span className="font-mono text-[8px] md:text-[9px] uppercase tracking-[0.1em] text-white/40 mb-0.5">{k}</span>
                <span className="font-mono text-[11px] md:text-xs text-cream font-medium">{v as string}</span>
              </div>
            ))}
          </div>

          <div className="mt-4 pt-3 border-t border-white/[0.06]">
            <span className="font-mono text-[8px] md:text-[9px] text-white/35 tracking-widest uppercase">Certified: {prod.standard}</span>
          </div>
        </div>

      </div>
    </div>
  );
}

function ProductDetails({ prod }: { prod: typeof PRODUCTS[0] }) {
  return (
    <section className="py-12 md:py-20 bg-transparent relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">

          {/* Left: Description + Features */}
          <div className="flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="font-sans text-base md:text-lg text-white/70 font-light leading-relaxed">
                {prod.longDesc}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="font-mono text-[10px] md:text-xs text-amber tracking-widest uppercase mb-4 md:mb-5">Key Features</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {prod.features.map((feature: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-cream/85 font-light">
                    <div className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                      style={{ backgroundColor: "rgba(249,115,22,0.12)", border: "1px solid rgba(249,115,22,0.35)" }}>
                      <Check className="w-3 h-3 text-amber" />
                    </div>
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Right: Applications + CTA */}
          <div className="flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="font-mono text-[10px] md:text-xs text-amber tracking-widest uppercase mb-4 md:mb-5">Applications</h3>
              <div className="flex flex-wrap gap-2">
                {prod.applications.map((app: string, idx: number) => (
                  <span key={idx} className="font-mono text-[9px] md:text-[10px] tracking-widest uppercase px-3 py-1.5 border border-white/10 rounded-full text-white/55 bg-white/[0.03]">
                    {app}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="blob-card p-5 md:p-6 rounded-xl border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-center sm:text-left">
                  <h4 className="font-mono text-[10px] md:text-xs text-cream tracking-widest uppercase mb-1">Ready to order?</h4>
                  <p className="font-sans text-[11px] md:text-xs text-white/40 font-light">Get the best price for this product.</p>
                </div>
                <a href={`https://wa.me/919829277869?text=${encodeURIComponent(`I'm interested in *${prod.name}* from Khemji Wire. Please share pricing and availability.`)}`} target="_blank" rel="noreferrer" className="blob-btn-product font-mono text-[10px] tracking-widest uppercase font-bold px-6 py-3 inline-flex items-center justify-center whitespace-nowrap w-full sm:w-auto">
                  Buy Now
                </a>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Tech Tables */}
        {prod.techTables && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-12 md:mt-16 pt-10 md:pt-14 border-t border-white/10"
          >
            <div className="mb-6 md:mb-8">
              <h3 className="font-mono text-[10px] md:text-xs text-amber tracking-widest uppercase mb-2">Industrial Compliance Databanks</h3>
              <h2 className="font-bebas text-2xl md:text-3xl lg:text-4xl text-cream tracking-wide">Technical Tolerance & Testing Metrics</h2>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 md:gap-8">
              {prod.techTables.map((table, tIdx) => (
                <div key={tIdx} className="blob-card p-5 md:p-7 rounded-2xl border border-white/10">
                  <h4 className="font-bebas text-lg md:text-xl text-cream tracking-wider mb-1">{table.title}</h4>
                  <p className="font-sans text-[10px] md:text-[11px] text-white/35 font-light mb-4">{table.subtitle}</p>

                  <div className="overflow-x-auto -mx-2 px-2 pb-1">
                    <table className="w-full border-collapse text-left text-[10px] md:text-[11px] font-sans text-white/55 min-w-[380px]">
                      <thead>
                        <tr className="border-b border-white/10">
                          {table.headers.map((header, hIdx) => (
                            <th key={hIdx} className="pb-2 font-semibold text-cream uppercase tracking-wider text-[8px] md:text-[9px] pr-3 whitespace-nowrap">{header}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {table.rows.map((row, rIdx) => (
                          <tr key={rIdx} className="border-b border-white/5 last:border-0 hover:bg-white/[0.03] transition-colors">
                            {row.map((cell, cIdx) => (
                              <td key={cIdx} className="py-2.5 pr-3 font-light text-white/60 first:font-medium first:text-cream/90">
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
    </section>
  );
}

function ProductDivider() {
  return null;
}

export function ProductsCatalogue() {
  return (
    <div>
      {/* Page Hero */}
      <div className="relative pt-28 md:pt-40 pb-10 md:pb-16 bg-transparent">
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
            <p className="font-sans text-sm md:text-base text-white/60 max-w-[500px] leading-relaxed">
              Every strand engineered to IS 280 & IS 3975 standards. From raw wire to finished coil.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Products */}
      <div className="max-w-[1280px] mx-auto px-5 md:px-[5vw]">
        {PRODUCTS.map((prod, i) => (
          <div key={i} className="mb-16 md:mb-24">
            <ProductHero prod={prod} index={i} />
            <ProductDetails prod={prod} />
            <ProductDivider />
          </div>
        ))}
      </div>

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
            <p className="font-sans text-cream/60 text-base md:text-lg font-light leading-relaxed mb-8 md:mb-10 max-w-2xl mx-auto">
              Our continuous wire galvanizing plant is designed for scale, quality, and uncompromising durability.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
              <a href="https://wa.me/919829277869?text=I'm%20interested%20in%20your%20products%20at%20Khemji%20Wire.%20Please%20share%20pricing%20and%20availability." target="_blank" rel="noreferrer" className="blob-btn-product font-mono text-xs tracking-widest uppercase font-bold px-8 py-4 inline-flex items-center justify-center w-full sm:w-auto">
                <span>Buy Now</span>
                <span className="ml-3">&rarr;</span>
              </a>
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
