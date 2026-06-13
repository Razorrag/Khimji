import type { Metadata } from 'next';
import Link from 'next/link';
import { generateBreadcrumbs, generateProductSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Hot Dip Galvanized MS Wire Manufacturer | IS 280:2006 | Khemji Wire, Jaipur',
  description: 'Khemji Wire manufactures IS 280:2006 certified Hot Dip Galvanized Mild Steel Wire in Jaipur. 1.25–4.00 mm diameter, 300–550 MPa tensile strength. 700+ MT/month capacity. PAN India supply.',
  alternates: { canonical: 'https://www.khemjiwire.in/products/galvanized-ms-wire' },
  openGraph: {
    title: 'Hot Dip Galvanized MS Wire — IS 280 Certified | Khemji Wire',
    description: 'IS 280:2006 certified GI wire from 1.25mm to 4.00mm. Light, medium & heavy zinc coating classes available. Direct from manufacturer.',
    url: 'https://www.khemjiwire.in/products/galvanized-ms-wire',
    images: [{ url: '/1.png', width: 1200, height: 630, alt: 'Hot Dip Galvanized MS Wire' }]
  },
};

const specs = [
  { label: 'Standard', value: 'IS 280:2006' },
  { label: 'Diameter Range', value: '1.25 mm to 4.00 mm' },
  { label: 'Tensile Strength', value: '300 – 550 MPa' },
  { label: 'Zinc Coating Classes', value: 'Light (60–100 g/m²), Medium (150–200 g/m²), Heavy (250+ g/m²)' },
  { label: 'Raw Material', value: 'Premium Low Carbon MS Wire Rod' },
  { label: 'Available Grades', value: 'Soft (Annealed), Half-Hard, Hard Draw' },
];

const applications = [
  'Fencing and perimeter protection', 'Agriculture and farming', 'Solar fencing',
  'Chain link fencing', 'Wire mesh weaving', 'General tying and binding',
  'Barbed wire manufacturing', 'Highway crash barrier wiring'
];

export default function GalvanizedMSWirePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbs([{ name: 'Products', href: '/products' }, { name: 'Hot Dip Galvanized MS Wire' }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateProductSchema('Hot Dip Galvanized Mild Steel Wire', 'IS 280:2006 certified GI wire from Khemji Wire & Wire Pvt. Ltd. Available in 1.25–4.00 mm diameter with tensile strength 300–550 MPa. Three zinc coating classes available.')) }} />

      <div className="relative pt-36 pb-20 bg-transparent">
        <div className="max-w-[1280px] mx-auto px-[5vw]">
          <ol className="flex items-center gap-2 font-mono text-[10px] md:text-xs uppercase tracking-widest text-steel mb-10">
            <li><Link href="/" className="hover:text-amber transition-colors">Home</Link></li>
            <li style={{ color: "rgba(249,115,22,0.4)" }}>/</li>
            <li><Link href="/products" className="hover:text-amber transition-colors">Products</Link></li>
            <li style={{ color: "rgba(249,115,22,0.4)" }}>/</li>
            <li className="text-cream">Galvanized MS Wire</li>
          </ol>

          <div className="h-[2px] w-16 bg-amber mb-6" />
          <h1 className="font-bebas text-[clamp(48px,8vw,100px)] leading-[0.85] text-cream mb-6">
            Hot Dip Galvanized<br />
            <span className="text-amber">Mild Steel Wire</span>
          </h1>
          <p className="font-sans text-base md:text-lg text-cream/70 max-w-[600px] leading-relaxed mb-10">
            IS 280:2006 certified galvanized iron wire manufactured at our RIICO facility in Jaipur. 
            Three coating classes, wide diameter range, and 700+ MT monthly capacity.
          </p>

          <div className="flex flex-wrap gap-4 mb-16">
            <a href="https://wa.me/919829277869?text=I'm%20interested%20in%20Hot%20Dip%20Galvanized%20MS%20Wire%20from%20Khemji%20Wire.%20Please%20share%20pricing." target="_blank" rel="noreferrer"
               className="blob-btn-product font-mono text-xs tracking-widest uppercase font-bold px-8 py-4">
              Get Price Quote
            </a>
            <Link href="/contact" className="glass-btn font-mono text-xs tracking-widest uppercase px-8 py-4">
              Contact Sales
            </Link>
          </div>
        </div>
      </div>

      <section className="py-16 border-t border-glass-border bg-transparent">
        <div className="max-w-[1280px] mx-auto px-[5vw]">
          <h2 className="font-mono text-[10px] text-amber tracking-widest uppercase mb-2">Product Specifications</h2>
          <h3 className="font-bebas text-3xl md:text-4xl text-cream mb-10">Technical Specifications</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
            {specs.map((s) => (
              <div key={s.label} className="blob-card p-5 rounded-xl flex items-start gap-4">
                <div className="w-1 h-8 bg-amber rounded-full mt-1 flex-shrink-0" />
                <div>
                  <span className="font-mono text-[9px] text-amber tracking-widest uppercase">{s.label}</span>
                  <p className="font-sans text-sm text-cream/80 mt-1">{s.value}</p>
                </div>
              </div>
            ))}
          </div>

          <h3 className="font-bebas text-3xl text-cream mb-6">IS 280 Zinc Coating Classes</h3>
          <div className="overflow-x-auto mb-16">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-glass-border">
                  <th className="py-3 text-left font-semibold text-cream pr-4">Wire Diameter (mm)</th>
                  <th className="py-3 text-left font-semibold text-cream pr-4">Heavy Coated (Class A)</th>
                  <th className="py-3 text-left font-semibold text-cream pr-4">Medium Coated (Class B)</th>
                  <th className="py-3 text-left font-semibold text-cream">Light Coated (Class C)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["1.25 – 1.60", "150 – 190 g/m²", "100 g/m²", "60 g/m²"],
                  ["1.61 – 2.00", "220 – 240 g/m²", "115 g/m²", "70 g/m²"],
                  ["2.01 – 2.50", "240 – 260 g/m²", "125 g/m²", "80 g/m²"],
                  ["2.51 – 3.15", "260 – 280 g/m²", "135 g/m²", "90 g/m²"],
                  ["3.16 – 4.00", "280 – 300 g/m²", "150 g/m²", "100 g/m²"]
                ].map((row, i) => (
                  <tr key={i} className="border-b border-glass-border/30 hover:bg-white/[0.02]">
                    {row.map((cell, j) => (
                      <td key={j} className={`py-3 pr-4 ${j === 0 ? 'text-cream font-medium' : 'text-steel/80'}`}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="font-bebas text-3xl text-cream mb-6">Applications</h3>
          <div className="flex flex-wrap gap-3 mb-16">
            {applications.map((app) => (
              <span key={app} className="font-mono text-[10px] tracking-widest uppercase px-4 py-2 border border-white/10 rounded-full text-steel/70 bg-white/[0.03]">
                {app}
              </span>
            ))}
          </div>

          <div className="blob-card p-8 rounded-2xl border border-glass-border">
            <h4 className="font-bebas text-2xl text-cream mb-4">Why Choose Khemji Wire?</h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                'IS 280:2006 certified — full compliance with Indian standards',
                'In-house tensile, zinc coating, and copper sulfate dip testing per batch',
                '700+ MT/month production capacity for bulk orders',
                'Direct-from-manufacturer pricing — no middleman margins',
                'Material Test Certificate (MTC) provided with every dispatch',
                'PAN India supply via road transport network',
                '35+ years of wire manufacturing expertise since 1988',
                'Custom coating weights and diameters available on request'
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-steel/80">
                  <span className="text-amber mt-0.5">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-glass-border bg-transparent">
        <div className="max-w-[800px] mx-auto px-[5vw] text-center">
          <h2 className="font-bebas text-4xl md:text-5xl text-cream mb-4">Need Bulk Pricing?</h2>
          <p className="font-sans text-base text-steel/70 mb-8">
            Contact our sales team for current rates, stock availability, and delivery timelines.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://wa.me/919829277869?text=I'm%20interested%20in%20Hot%20Dip%20Galvanized%20MS%20Wire%20from%20Khemji%20Wire." target="_blank" rel="noreferrer"
               className="blob-btn-product font-mono text-xs tracking-widest uppercase font-bold px-8 py-4">
              WhatsApp Inquiry
            </a>
            <a href="tel:+919829277869" className="glass-btn font-mono text-xs tracking-widest uppercase px-8 py-4">
              Call +91-9829277869
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
