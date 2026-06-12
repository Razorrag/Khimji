import { ProductsCatalogue } from './ProductsCatalogue';
import type { Metadata } from 'next';

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
  return <ProductsCatalogue />;
}
