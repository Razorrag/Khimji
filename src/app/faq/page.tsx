import { FAQClient } from './FAQClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ | Khemji Wire',
  description: 'Frequently asked questions concerning Khemji Wire\'s galvanized wire product manufacturing and specifications.',
};

export default function FAQPage() {
  return <FAQClient />;
}
