import { About } from '@/components/sections/About';
import type { Metadata } from 'next';
import { generateBreadcrumbs } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'About Us | Khemji Wire',
  description: 'Learn about Khemji Wire & Wire Pvt. Ltd., our 35+ year legacy since 1988, our vision, leadership team, and commitment to quality manufacturing.',
  alternates: { canonical: 'https://www.khemjiwire.in/about' },
  openGraph: {
    title: 'About Us | Khemji Wire & Wire Pvt. Ltd.',
    description: '35+ year legacy of quality wire manufacturing since 1988. BIS certified GI wire, MS wire & formed wire manufacturer in Jaipur.',
    url: 'https://www.khemjiwire.in/about',
    images: [{ url: '/logo.png', width: 1200, height: 630, alt: 'Khemji Wire About' }]
  },
  twitter: {
    title: 'About Us | Khemji Wire',
    description: '35+ year legacy of quality wire manufacturing since 1988.',
    images: ['/logo.png']
  }
};

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbs([{ name: 'About Us' }])) }} />
      <About />
    </>
  );
}
