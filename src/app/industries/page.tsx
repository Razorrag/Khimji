import { Industries } from '@/components/sections/Industries';
import type { Metadata } from 'next';
import { generateBreadcrumbs } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Industries & Applications | Khemji Wire',
  description: 'Explore the diverse industries served by Khemji Wire & Wire Pvt. Ltd.: cable manufacturing, power sector, infrastructure, construction, agriculture & more.',
  alternates: { canonical: 'https://www.khemjiwire.in/industries' },
  openGraph: {
    title: 'Industries & Applications | Khemji Wire & Wire Pvt. Ltd.',
    description: 'Cable manufacturing, power sector, infrastructure, construction & agriculture — industries served by Khemji Wire.',
    url: 'https://www.khemjiwire.in/industries',
    images: [{ url: '/logo.png', width: 1200, height: 630, alt: 'Khemji Wire Industries' }]
  },
  twitter: {
    title: 'Industries & Applications | Khemji Wire',
    description: 'Cable manufacturing, power sector, infrastructure, construction & agriculture.',
    images: ['/logo.png']
  }
};

export default function IndustriesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbs([{ name: 'Industries', href: '/industries' }])) }} />
      <Industries />
    </>
  );
}
