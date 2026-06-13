import type { Metadata } from 'next';
import Link from 'next/link';
import { generateBreadcrumbs, generateProductSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Cable Armouring Round Wire Manufacturer | IS 3975:1999 | Khemji Wire',
  description: 'Khemji Wire manufactures IS 3975:1999 certified Cable Armouring Round Wire in Jaipur. 7 sizes from 1.25mm to 4.00mm. Max resistivity 14.5 Ω/km. 700+ MT/month capacity.',
  alternates: { canonical: 'https://www.khemjiwire.in/products/cable-armouring-round-wire' },
  openGraph: {
    title: 'Cable Armouring Round Wire — IS 3975 Certified | Khemji Wire',
    description: 'IS 3975:1999 certified round wire for power and telecom cable armouring. 7 sizes, max 14.5 Ω/km resistivity, 300–500 MPa tensile strength.',
    url: 'https://www.khemjiwire.in/products/cable-armouring-round-wire',
    images: [{ url: '/2.png', width: 1200, height: 630, alt: 'Cable Armouring Round Wire' }]
  },
};

const specs = [
  { label: 'Standard', value: 'IS 3975:1999' },
  { label: 'Size Range', value: '1.25 mm to 4.00 mm (7 sizes)' },
  { label: 'Tensile Strength', value: '300 – 500 MPa' },
  { label: 'Resistivity (Max)', value: '14.5 Ohm-cm × 10⁻⁶' },
  { label: 'Elongation', value: '10% Minimum' },
  { label: 'Raw Material', value: 'High-quality low carbon steel' },
];

const applications = [
  'Power cables', 'Control cables', 'Instrumentation cables',
  'Communication cables', 'Underground cable networks', 'Industrial infrastructure projects'
];

export default function CableArmouringRoundWirePage() {
  const sizeTable = [
    ["1.25", "0.035", "300–500", "10", "14.5"],
    ["1.40", "0.040", "300–500", "10", "14.5"],
    ["1.60", "0.045", "300–500", "10", "14.5"],
    ["2.00", "0.050", "300–500", "10", "14.5"],
    ["2.50", "0.065", "300–500", "10", "14.5"],
    ["3.15", "0.080", "300–500", "10", "14.5"],
    ["4.00", "0.100", "300–500", "10", "14.5"]
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbs([{ name: 'Products', href: '/products' }, { name: 'Cable Armouring Round Wire' }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateProductSchema('Cable Armouring Round Wire', 'IS 3975:1999 certified galvanized round wire for power and telecom cable armouring. 7 sizes from 1.25mm to 4.00mm with max resistivity 14.5 × 10⁻⁶ Ohm-cm.')) }} />

      <div className="relative pt-36 pb-20 bg-transparent">
        <div className="max-w-[1280px] mx-auto px-[5vw]">
          <ol className="flex items-center gap-2 font-mono text-[10px] md:text-xs uppercase tracking-widest text-steel mb-10">
            <li><Link href="/" className="hover:text-amber transition-colors">Home</Link></li>
            <li style={{ color: "rgba(249,115,22,0.4)" }}>/</li>
            <li><Link href="/products" className="hover:text-amber transition-colors">Products</Link></li>
            <li style={{ color: "rgba(249,115,22,0.4)" }}>/</li>
            <li className="text-cream">Armouring Round Wire</li>
          </ol>

          <div className="h-[2px] w-16 bg-amber mb-6" />
          <h1 className="font-bebas text-[clamp(48px,8vw,100px)] leading-[0.85] text-cream mb-6">
            Cable Armouring<br />
            <span className="text-amber">Round Wire</span>
          </h1>
          <p className="font-sans text-base md:text-lg text-cream/70 max-w-[600px] leading-relaxed mb-10">
            IS 3975:1999 certified galvanized round wire for power, control, and telecommunication cable armouring. 
            Manufactured with precision dimensional tolerance and electrical resistivity control.
          </p>

          <div className="flex flex-wrap gap-4 mb-16">
            <a href="https://wa.me/919829277869?text=I'm%20interested%20in%20Cable%20Armouring%20Round%20Wire%20from%20Khemji%20Wire." target="_blank" rel="noreferrer"
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

          <h3 className="font-bebas text-3xl text-cream mb-6">IS 3975 Size & Mechanical Specifications</h3>
          <div className="overflow-x-auto mb-16">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-glass-border">
                  <th className="py-3 text-left font-semibold text-cream pr-4">Size (mm)</th>
                  <th className="py-3 text-left font-semibold text-cream pr-4">Tolerance (± mm)</th>
                  <th className="py-3 text-left font-semibold text-cream pr-4">Tensile (MPa)</th>
                  <th className="py-3 text-left font-semibold text-cream pr-4">Elongation % Min.</th>
                  <th className="py-3 text-left font-semibold text-cream">Resistivity (Max)</th>
                </tr>
              </thead>
              <tbody>
                {sizeTable.map((row, i) => (
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
            <h4 className="font-bebas text-2xl text-cream mb-4">Quality Testing</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { test: 'Copper Sulfate Dip Test', req: 'No copper deposition before min. dips', standard: 'IS 3975' },
                { test: 'Torsion Test', req: 'Min. 15 cycles without fracture', standard: 'IS 3975' },
                { test: 'Zinc Adhesion', req: 'Weight meets minimum spec', standard: 'IS 3975' }
              ].map((item) => (
                <div key={item.test} className="blob-card p-5 rounded-xl">
                  <div className="font-mono text-[9px] text-amber tracking-widest uppercase mb-2">{item.test}</div>
                  <p className="font-sans text-xs text-cream/70 mb-2">{item.req}</p>
                  <span className="font-mono text-[8px] text-steel/50 tracking-wider">{item.standard}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-glass-border bg-transparent">
        <div className="max-w-[800px] mx-auto px-[5vw] text-center">
          <h2 className="font-bebas text-4xl md:text-5xl text-cream mb-4">Need Cable Armouring Wire?</h2>
          <p className="font-sans text-base text-steel/70 mb-8">
            Contact our team for IS 3975 certified round wire pricing and availability.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://wa.me/919829277869?text=I'm%20interested%20in%20Cable%20Armouring%20Round%20Wire%20from%20Khemji%20Wire." target="_blank" rel="noreferrer"
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
