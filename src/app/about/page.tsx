import { About } from '@/components/sections/About';
import { Leadership } from '@/components/sections/Leadership';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Khemji Wire',
  description: 'Learn about Khemji Wire & Wire Pvt. Ltd., our history since 2008, and our technical leadership team.',
};

export default function AboutPage() {
  return (
    <>
      <About />
      <Leadership />
    </>
  );
}
