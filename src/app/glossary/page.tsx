import type { Metadata } from 'next';
import Link from 'next/link';
import { generateBreadcrumbs, generateDefinedTermSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Wire Manufacturing Glossary | GI Wire, Cable Armouring & Galvanizing Terms | Khemji Wire',
  description: 'Industry glossary covering galvanized wire, cable armouring, hot dip galvanizing, zinc coating, and IS standard terminology from Khemji Wire & Wire Pvt. Ltd.',
  alternates: { canonical: 'https://www.khemjiwire.in/glossary' },
  openGraph: {
    title: 'Wire Manufacturing Glossary | Khemji Wire & Wire Pvt. Ltd.',
    description: 'Industry glossary covering galvanized wire, cable armouring, hot dip galvanizing, and IS standard terminology.',
    url: 'https://www.khemjiwire.in/glossary',
    images: [{ url: '/logo.png', width: 1200, height: 630, alt: 'Khemji Wire Glossary' }]
  },
  twitter: {
    title: 'Wire Manufacturing Glossary | Khemji Wire',
    description: 'Industry glossary covering galvanized wire, cable armouring, and IS standard terminology.',
    images: ['/logo.png']
  }
};

const terms = [
  {
    term: 'Galvanized Iron (GI) Wire',
    definition: 'Steel wire coated with a protective layer of zinc through the hot-dip galvanizing process. The zinc coating provides corrosion resistance, extending the wire\'s service life in outdoor and industrial environments. GI wire is manufactured as per IS 280:2006 for general engineering applications.',
    slug: 'galvanized-wire'
  },
  {
    term: 'Cable Armouring',
    definition: 'A protective layer of galvanized steel wire (round or formed) applied helically around power and telecommunication cables to provide mechanical protection against crushing, rodent damage, and installation stress. Armouring also serves as an electrical earth continuity conductor (ECC). Specified under IS 3975:1999.',
    slug: 'cable-armouring'
  },
  {
    term: 'Hot Dip Galvanizing',
    definition: 'A metallurgical process in which steel wire is immersed in a bath of molten zinc at 450–460°C, forming a series of zinc-iron alloy layers that provide long-term corrosion protection. Hot-dip galvanizing produces a coating weight of 45–300+ g/m², significantly higher than electro-galvanizing (10–30 g/m²).',
    slug: 'hot-dip-galvanizing'
  },
  {
    term: 'Zinc Coating Weight',
    definition: 'The mass of zinc applied to a steel wire surface, measured in grams per square meter (g/m²). IS 280:2006 defines three coating classes: Light (60–100 g/m²), Medium (150–200 g/m²), and Heavy (250+ g/m²). Higher coating weight directly correlates with longer corrosion protection.',
    slug: 'zinc-coating-weight'
  },
  {
    term: 'IS 280:2006',
    definition: 'Indian Standard for Mild Steel Wire used in general engineering, fencing, agriculture, and binding applications. Specifies tensile strength ranges, zinc coating weights, dimensional tolerances, and testing methods including the mass-of-zinc stripping test and copper sulfate dip test.',
    slug: 'is-280-specifications'
  },
  {
    term: 'IS 3975:1999',
    definition: 'Indian Standard for Mild Steel Wires, Formed Wires, and Steel Tapes used for armouring of power and telecommunication cables. Mandates strict electrical resistivity limits (max 14.5 Ω/km), tensile strength range (300–500 MPa), and minimum 10% elongation.',
    slug: 'is-3975-specifications'
  },
  {
    term: 'Wire Drawing',
    definition: 'A cold-working process where steel wire rod is pulled through a series of progressively smaller tungsten carbide dies to reduce its diameter and increase its length. Wire drawing work-hardens the steel, increasing tensile strength while achieving precise dimensional control.',
    slug: 'wire-drawing'
  },
  {
    term: 'Annealing (Wire)',
    definition: 'A heat treatment process where drawn steel wire is heated to 800–900°C in a controlled atmosphere furnace and slowly cooled. Annealing restores ductility lost during wire drawing, making the wire soft and pliable for binding, tying, and forming applications.',
    slug: 'wire-annealing'
  },
  {
    term: 'Earth Continuity Conductor (ECC)',
    definition: 'The metallic component of a cable that provides a continuous path for fault currents to ground. In armoured cables, the steel wire armouring serves as the ECC, requiring strict control of electrical resistivity as specified in IS 3975:1999 (max 14.5 Ω/km).',
    slug: 'earth-continuity-conductor'
  },
  {
    term: 'Copper Sulfate Dip Test',
    definition: 'A quality test for galvanized wire where a sample is immersed in a copper sulfate solution for a specified duration. If bare steel is exposed through the zinc coating, copper will deposit on the surface (visible as a pink/copper coloration), indicating coating discontinuity or inadequate thickness.',
    slug: 'copper-sulfate-dip-test'
  }
];

export default function GlossaryPage() {
  const definedTermSchemas = terms.map(t => generateDefinedTermSchema(t.term, t.definition, t.slug));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbs([{ name: 'Glossary', href: '/glossary' }])) }} />
      {definedTermSchemas.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      <div className="relative pt-36 pb-20 bg-transparent">
        <div className="max-w-[1280px] mx-auto px-[5vw]">
          <ol className="flex items-center gap-2 font-mono text-[10px] md:text-xs uppercase tracking-widest text-steel mb-10">
            <li><Link href="/" className="hover:text-amber transition-colors">Home</Link></li>
            <li style={{ color: "rgba(249,115,22,0.4)" }}>/</li>
            <li className="text-cream">Glossary</li>
          </ol>

          <div className="h-[2px] w-16 bg-amber mb-6" />
          <h1 className="font-bebas text-[clamp(48px,8vw,100px)] leading-[0.85] text-cream mb-6">
            Wire Industry<br />
            <span className="text-amber">Glossary</span>
          </h1>
          <p className="font-sans text-base md:text-lg text-cream/70 max-w-[600px] leading-relaxed">
            Definitions and explanations of key terms in galvanized wire manufacturing, cable armouring, and Indian standards.
          </p>
        </div>
      </div>

      <section className="py-16 border-t border-glass-border bg-transparent">
        <div className="max-w-[900px] mx-auto px-[5vw]">
          <div className="flex flex-col gap-6">
            {terms.map((t, i) => (
              <div key={i} className="blob-card p-6 md:p-8 rounded-2xl border border-glass-border hover:border-amber/30 transition-colors" id={t.slug}>
                <div className="font-mono text-[9px] text-amber tracking-widest uppercase mb-3">Term</div>
                <h2 className="font-bebas text-2xl md:text-3xl text-cream mb-4 tracking-wide">{t.term}</h2>
                <p className="font-sans text-sm md:text-base text-steel/80 leading-relaxed">{t.definition}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
