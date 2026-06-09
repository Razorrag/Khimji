import { Industries } from '@/components/sections/Industries';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Industries & Applications | Khemji Wire',
  description: 'Certified wire solutions for cable armouring, power transmission, construction, agriculture, and nationwide infrastructure projects.',
};

export default function IndustriesPage() {
  return <Industries />;
}
