import { ProductsCatalogue } from './ProductsCatalogue';
import type { Metadata } from 'next';
import { generateBreadcrumbs, generateProductSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Product Catalogue | Khemji Wire',
  description: 'Explore Khemji Wire & Wire Pvt. Ltd.\'s range of IS 280 and IS 3975 certified products: Hot Dip Galvanized MS Wire, Cable Armouring Round Wire & Formed Wire. Jaipur, Rajasthan.',
  alternates: { canonical: 'https://www.khemjiwire.in/products' },
  openGraph: {
    title: 'Product Catalogue | Khemji Wire & Wire Pvt. Ltd.',
    description: 'IS 280 & IS 3975 certified GI wire, cable armouring wire & formed wire. Hot dip galvanized MS wire manufacturer in Jaipur.',
    url: 'https://www.khemjiwire.in/products',
    images: [{ url: '/1.png', width: 1200, height: 630, alt: 'Khemji Wire Products' }]
  },
  twitter: {
    title: 'Product Catalogue | Khemji Wire',
    description: 'IS 280 & IS 3975 certified GI wire, cable armouring & formed wire.',
    images: ['/1.png']
  }
};

export default function ProductsPage() {
  const productSchemas = [
    generateProductSchema('Hot Dip Galvanized Mild Steel Wire', 'IS 280:2006 certified galvanized iron wire available in 1.25 mm to 4.00 mm diameter with tensile strength 300–550 MPa. Suitable for fencing, agriculture, solar fencing, chain link fencing, and general engineering.'),
    generateProductSchema('Cable Armouring Round Wire', 'IS 3975:1999 certified galvanized round wire for power and telecom cable armouring. Available in 7 sizes from 1.25 mm to 4.00 mm with max resistivity 14.5 × 10⁻⁶ Ohm-cm.'),
    generateProductSchema('Cable Armouring Formed Wire (Strip)', 'IS 3975:1999 certified formed wire strip for enhanced cable armouring. 4.00 mm × 0.80 mm size with optimized profile for improved cable coverage and efficient material utilization.'),
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbs([{ name: 'Products', href: '/products' }])) }} />
      {productSchemas.map((schema, i) => schema && (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <ProductsCatalogue />
    </>
  );
}
