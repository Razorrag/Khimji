import type { Metadata } from 'next';
import { ClientLayoutProviders } from './ClientLayoutProviders';
import { organizationSchemaEnriched, generatePersonSchema } from '@/lib/schema';
import {
  Bebas_Neue,
  DM_Sans,
  JetBrains_Mono,
  Playfair_Display,
} from 'next/font/google';
import './globals.css';

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bebas',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '1000'],
  variable: '--font-sans',
  display: 'swap',
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-mono',
  display: 'swap',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.khemjiwire.in'),
  title: {
    default: 'GI Wire Manufacturer in Jaipur | IS 280 & IS 3975 Certified | Khemji Wire',
    template: '%s | Khemji Wire'
  },
  description: 'Khemji Wire & Wire Pvt. Ltd. — Leading manufacturer of Galvanized Iron (GI) Wire, Hot Dip Galvanized MS Wire & Cable Armouring Wire in Jaipur, Rajasthan. IS 280 & IS 3975 certified. 700+ MT monthly capacity. PAN India supply.',
  keywords: [
    'GI wire manufacturer Jaipur',
    'galvanized iron wire Rajasthan',
    'hot dip galvanized wire India',
    'cable armouring wire manufacturer',
    'IS 280 wire manufacturer',
    'IS 3975 formed wire',
    'binding wire supplier India',
    'wire manufacturer RIICO Jaipur'
  ],
  authors: [{ name: 'Khemji Wire & Wire Pvt. Ltd.' }],
  creator: 'Khemji Wire & Wire Pvt. Ltd.',
  publisher: 'Khemji Wire & Wire Pvt. Ltd.',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true }
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.khemjiwire.in',
    siteName: 'Khemji Wire & Wire Pvt. Ltd.',
    title: 'GI Wire Manufacturer in Jaipur | IS 280 & IS 3975 Certified',
    description: 'Leading manufacturer of Galvanized Iron Wire and Cable Armouring Wire. IS 280 & IS 3975 certified. Jaipur, Rajasthan.',
    images: [{ url: '/logo.png', width: 1200, height: 630, alt: 'Khemji Wire Manufacturing Facility' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Khemji Wire — GI Wire Manufacturer Jaipur',
    description: 'IS 280 & IS 3975 certified GI wire and cable armouring wire manufacturer.',
    images: ['/logo.png']
  },
  alternates: {
    canonical: 'https://www.khemjiwire.in'
  },
  icons: {
    icon: '/tab logo just logo.png',
  }
};

const founderSchema = generatePersonSchema('Om Prakash Agarwal', 'Founder');
const directorSchema = generatePersonSchema('Mahesh Chand Agarwal', 'Director');

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.khemjiwire.in/#business",
  "name": "Khemji Wire & Wire Pvt. Ltd.",
  "priceRange": "₹₹",
  "openingHours": "Mo-Sa 09:00-18:00",
  "currenciesAccepted": "INR",
  "paymentAccepted": "Cash, Bank Transfer, UPI",
  "hasMap": "https://maps.google.com/?q=Sarna+Doongar+RIICO+Jaipur"
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "url": "https://www.khemjiwire.in",
  "name": "Khemji Wire & Wire Pvt. Ltd.",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.khemjiwire.in/blog?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth"
      className={`${bebasNeue.variable} ${dmSans.variable} ${jetBrainsMono.variable} ${playfairDisplay.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchemaEnriched) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(founderSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(directorSchema) }}
        />
      </head>
      <body>
        <ClientLayoutProviders>{children}</ClientLayoutProviders>
      </body>
    </html>
  );
}
