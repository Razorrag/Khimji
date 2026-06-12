import { ManufacturingClient } from './ManufacturingClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Manufacturing Process | Khemji Wire',
  description: 'Explore Khemji Wire\'s manufacturing process: wire drawing, annealing, hot dip galvanizing, and quality testing — all at our RIICO Industrial Area plant in Jaipur.',
  alternates: { canonical: 'https://www.khemjiwire.in/manufacturing' },
  openGraph: {
    title: 'Manufacturing Process | Khemji Wire & Wire Pvt. Ltd.',
    description: 'Wire drawing, annealing, hot dip galvanizing & quality testing at our RIICO Jaipur plant. BIS certified wire manufacturing process.',
    url: 'https://www.khemjiwire.in/manufacturing',
    images: [{ url: '/process/1.jpeg', width: 1200, height: 630, alt: 'Khemji Wire Manufacturing Process' }]
  },
  twitter: {
    title: 'Manufacturing Process | Khemji Wire',
    description: 'Wire drawing, annealing, hot dip galvanizing & quality testing.',
    images: ['/process/1.jpeg']
  }
};

export default function ManufacturingPage() {
  return <ManufacturingClient />;
}
