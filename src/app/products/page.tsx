import { ProductsCatalogue } from './ProductsCatalogue';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Product Catalogue | Khemji Wire',
  description: 'Browse our range of high-quality Hot Dip Galvanized Wire, Low Carbon Wire, and Formed Wire for Cable Armouring.',
};

export default function ProductsPage() {
  return <ProductsCatalogue />;
}
