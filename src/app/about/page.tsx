import { About } from '@/components/sections/About';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Khemji Wire',
  description: 'Learn about Khemji Wire & Wire Pvt. Ltd., our 35+ year legacy since 1988, our vision, leadership team, and commitment to quality manufacturing.',
};

export default function AboutPage() {
  return <About />;
}
