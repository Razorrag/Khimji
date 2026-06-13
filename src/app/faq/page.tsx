import { FAQClient } from './FAQClient';
import { ALL_FAQS } from '@/lib/faq-data';
import type { Metadata } from 'next';
import { generateBreadcrumbs } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'FAQ — GI Wire Specifications, Pricing & Delivery | Khemji Wire',
  description: 'Answers to common questions about GI wire specifications, IS 280 and IS 3975 standards, pricing, minimum order quantity, delivery timelines, and quality testing.',
  alternates: {
    canonical: 'https://www.khemjiwire.in/faq',
  },
};

export default function FAQPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": ALL_FAQS.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a,
      },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbs([{ name: 'FAQ', href: '/faq' }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <FAQClient />
    </>
  );
}
