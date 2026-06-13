import { Quality } from '@/components/sections/Quality';
import type { Metadata } from 'next';
import { generateBreadcrumbs } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Quality Assurance | IS 280 & IS 3975 Certified | Khemji Wire',
  description: 'Learn about our rigorous testing methods for Galvanized MS Wire and Cable Armouring Wire to ensure zero-defect quality.',
  alternates: { canonical: 'https://www.khemjiwire.in/quality' },
  openGraph: {
    title: 'Quality Assurance | IS 280 & IS 3975 Certified | Khemji Wire',
    description: 'Rigorous testing for GI wire & cable armouring wire. BIS certified quality assurance at Khemji Wire & Wire Pvt. Ltd.',
    url: 'https://www.khemjiwire.in/quality',
    images: [{ url: '/logo.png', width: 1200, height: 630, alt: 'Khemji Wire Quality Assurance' }]
  },
  twitter: {
    title: 'Quality Assurance | Khemji Wire',
    description: 'BIS certified quality testing for GI wire & cable armouring wire.',
    images: ['/logo.png']
  }
};

export default function QualityPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbs([{ name: 'Quality', href: '/quality' }])) }} />
      <Quality />
    </>
  );
}
