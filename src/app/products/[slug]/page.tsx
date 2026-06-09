import { ProductDetailClient } from './ProductDetailClient';

export async function generateStaticParams() {
  return [
    { slug: 'hot-dip-galvanized-wire' },
    { slug: 'low-carbon-galvanized-wire' },
    { slug: 'formed-wire-cable-armouring' }
  ];
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <ProductDetailClient slug={slug} />;
}
