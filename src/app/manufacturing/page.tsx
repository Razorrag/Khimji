import { ManufacturingClient } from './ManufacturingClient';
import type { Metadata } from 'next';
import { generateBreadcrumbs, generateHowToSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Manufacturing Process | Khemji Wire',
  description: 'From steel wire rod to galvanized wire: 11-step manufacturing process including wire drawing, annealing, pickling, fluxing, and hot-dip galvanizing at our RIICO Jaipur plant.',
  alternates: { canonical: 'https://www.khemjiwire.in/manufacturing' },
  openGraph: {
    title: 'Manufacturing Process | Khemji Wire & Wire Pvt. Ltd.',
    description: '11-step GI wire manufacturing: wire drawing, annealing, pickling, fluxing & hot-dip galvanizing at our RIICO Jaipur plant. BIS certified.',
    url: 'https://www.khemjiwire.in/manufacturing',
    images: [{ url: '/process/1.jpeg', width: 1200, height: 630, alt: 'Khemji Wire Manufacturing Process' }]
  },
  twitter: {
    title: 'Manufacturing Process | Khemji Wire',
    description: '11-step GI wire manufacturing: drawing, annealing, pickling, fluxing & galvanizing.',
    images: ['/process/1.jpeg']
  }
};

export default function ManufacturingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbs([{ name: 'Manufacturing', href: '/manufacturing' }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateHowToSchema(
        'How Hot Dip Galvanized Wire is Manufactured',
        '11-step process for manufacturing IS 280 certified GI wire from raw MS wire rod to finished coil, covering wire drawing and hot-dip galvanizing.',
        [
          { name: 'Raw Material Inspection', text: 'MS wire rod coils are inspected for surface defects, diameter tolerance, and carbon content. Only premium low-carbon steel from certified mills proceeds to production.' },
          { name: 'Descaling & Surface Preparation', text: 'Wire rod is mechanically descaled through breaker rolls and abrasive brushes to remove mill scale, rust, and impurities, exposing clean steel for processing.' },
          { name: 'Wire Drawing', text: 'Cleaned wire is drawn through tungsten carbide dies of progressively smaller apertures to reduce diameter and achieve target tensile strength.' },
          { name: 'Annealing', text: 'Drawn wire is annealed in a controlled nitrogen-hydrogen atmosphere furnace to restore ductility, relieve internal stresses, and prepare for uniform zinc adhesion.' },
          { name: 'Water Quenching & Cooling', text: 'Annealed wire is rapidly cooled through a water quench to lock in the softened metallurgical structure before entering the pickling stage.' },
          { name: 'Pickling', text: 'Wire passes through a dilute hydrochloric or sulfuric acid bath to remove any residual oxide layer, creating a chemically clean surface for galvanizing.' },
          { name: 'Rinsing', text: 'Pickled wire is thoroughly rinsed with high-pressure water to remove all acid residues and prevent contamination of the flux bath.' },
          { name: 'Fluxing', text: 'Wire passes through a flux solution (typically zinc ammonium chloride) which promotes wetting and ensures a uniform reaction between steel and molten zinc.' },
          { name: 'Hot-Dip Galvanizing', text: 'Wire enters a bath of molten zinc at 450–460°C. A metallurgical reaction forms tightly bonded zinc-iron alloy layers providing 25+ years of corrosion protection.' },
          { name: 'Wiping & Coating Control', text: 'As the wire exits the zinc bath, adjustable wiping dies control coating thickness with precision to meet IS 280 specifications.' },
          { name: 'Cooling, Coiling & Inspection', text: 'Galvanized wire is air-cooled, precision-wound into coils, weighed, tagged with batch numbers, and inspected before dispatch.' },
        ]
      )) }} />
      <ManufacturingClient />
    </>
  );
}
