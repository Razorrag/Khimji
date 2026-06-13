import type { Metadata } from 'next';
import Link from 'next/link';
import { generateBreadcrumbs, generateProductSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Cable Armouring Formed Wire (Strip) Manufacturer | IS 3975 | Khemji Wire',
  description: 'Khemji Wire manufactures IS 3975:1999 certified Formed Wire for Cable Armouring. 4.00mm × 0.80mm optimized profile for superior cable coverage. 700+ MT/month capacity.',
  alternates: { canonical: 'https://www.khemjiwire.in/products/cable-armouring-formed-wire' },
  openGraph: {
    title: 'Formed Wire Cable Armouring Strip — IS 3975 Certified | Khemji Wire',
    description: 'IS 3975:1999 certified formed wire strip for cable armouring. 4.00mm × 0.80mm optimized cross-section for improved cable coverage.',
    url: 'https://www.khemjiwire.in/products/cable-armouring-formed-wire',
    images: [{ url: '/3.png', width: 1200, height: 630, alt: 'Cable Armouring Formed Wire' }]
  },
};

const specs = [
  { label: 'Standard', value: 'IS 3975:1999' },
  { label: 'Size', value: '4.00 mm × 0.80 mm' },
  { label: 'Width (A)', value: '4.00 mm' },
  { label: 'Width (B)', value: '3.40 mm' },
  { label: 'Thickness (C)', value: '0.80 mm' },
  { label: 'Radius (R)', value: '10.00 mm' },
  { label: 'Tensile Strength', value: '300 – 500 MPa' },
  { label: 'Resistivity (Max)', value: '14.5 Ohm-cm × 10⁻⁶' },
  { label: 'Elongation', value: '10% Minimum' },
];

const applications = [
  'Power industry cables', 'Reinforcing aluminium conductors', 'Underground cable networks',
  'Telecommunication cables', 'Heavy industrial conduit protection', 'HT/LT cable armouring'
];

export default function CableArmouringFormedWirePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbs([{ name: 'Products', href: '/products' }, { name: 'Cable Armouring Formed Wire' }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateProductSchema('Cable Armouring Formed Wire (Strip)', 'IS 3975:1999 certified formed wire strip for enhanced cable armouring. 4.00mm × 0.80mm with optimized profile for improved cable coverage.')) }} />

      <div className="relative pt-36 pb-20 bg-transparent">
        <div className="max-w-[1280px] mx-auto px-[5vw]">
          <ol className="flex items-center gap-2 font-mono text-[10px] md:text-xs uppercase tracking-widest text-steel mb-10">
            <li><Link href="/" className="hover:text-amber transition-colors">Home</Link></li>
            <li style={{ color: "rgba(249,115,22,0.4)" }}>/</li>
            <li><Link href="/products" className="hover:text-amber transition-colors">Products</Link></li>
            <li style={{ color: "rgba(249,115,22,0.4)" }}>/</li>
            <li className="text-cream">Armouring Formed Wire</li>
          </ol>

          <div className="h-[2px] w-16 bg-amber mb-6" />
          <h1 className="font-bebas text-[clamp(48px,8vw,100px)] leading-[0.85] text-cream mb-6">
            Cable Armouring<br />
            <span className="text-amber">Formed Wire (Strip)</span>
          </h1>
          <p className="font-sans text-base md:text-lg text-cream/70 max-w-[600px] leading-relaxed mb-10">
            IS 3975:1999 certified formed wire strip for power and telecom cable armouring. 
            Optimized formed cross-section delivers superior cable coverage and material efficiency.
          </p>

          <div className="flex flex-wrap gap-4 mb-16">
            <a href="https://wa.me/919829277869?text=I'm%20interested%20in%20Cable%20Armouring%20Formed%20Wire%20from%20Khemji%20Wire." target="_blank" rel="noreferrer"
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
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

          <h3 className="font-bebas text-3xl text-cream mb-6">IS 3975 Formed Wire Specifications</h3>
          <div className="overflow-x-auto mb-16">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-glass-border">
                  <th className="py-3 text-left font-semibold text-cream pr-4">Property</th>
                  <th className="py-3 text-left font-semibold text-cream">Specification</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Size", "4.00 × 0.80 mm"],
                  ["Width (A)", "4.00 mm"],
                  ["Width (B)", "3.40 mm"],
                  ["Thickness (C)", "0.80 mm"],
                  ["Radius (R)", "10.00 mm"],
                  ["Tolerance", "±10%"],
                  ["Tensile Strength", "300–500 MPa"],
                  ["Minimum Elongation", "10%"],
                  ["Maximum Resistivity", "14.5 × 10⁻⁶ Ohm-cm"]
                ].map((row, i) => (
                  <tr key={i} className="border-b border-glass-border/30 hover:bg-white/[0.02]">
                    <td className="py-3 pr-4 text-cream font-medium">{row[0]}</td>
                    <td className="py-3 text-steel/80">{row[1]}</td>
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
            <h4 className="font-bebas text-2xl text-cream mb-4">Why Formed Wire?</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { feature: 'Formed Profile', benefit: 'Improved cable coverage vs round wire' },
                { feature: 'Optimized Cross-Section', benefit: 'Efficient material utilization' },
                { feature: 'High Tensile Strength', benefit: 'Superior mechanical damage protection' },
                { feature: 'Uniform Zinc Coating', benefit: '25+ years corrosion protection' }
              ].map((item) => (
                <div key={item.feature} className="flex items-start gap-3">
                  <span className="text-amber mt-0.5">→</span>
                  <div>
                    <span className="font-sans text-sm text-cream font-medium">{item.feature}:</span>
                    <span className="font-sans text-sm text-steel/80 ml-1">{item.benefit}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-glass-border bg-transparent">
        <div className="max-w-[800px] mx-auto px-[5vw] text-center">
          <h2 className="font-bebas text-4xl md:text-5xl text-cream mb-4">Need Formed Armouring Wire?</h2>
          <p className="font-sans text-base text-steel/70 mb-8">
            Contact our team for IS 3975 formed wire pricing, technical data, and delivery schedules.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://wa.me/919829277869?text=I'm%20interested%20in%20Cable%20Armouring%20Formed%20Wire%20from%20Khemji%20Wire." target="_blank" rel="noreferrer"
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
