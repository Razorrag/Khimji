import { Quality } from '@/components/sections/Quality';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quality Assurance | IS 280 & IS 3975 Certified | Khemji Wire',
  description: 'Learn about our rigorous testing methods for Galvanized MS Wire and Cable Armouring Wire to ensure zero-defect quality.',
};

export default function QualityPage() {
  return <Quality />;
}
