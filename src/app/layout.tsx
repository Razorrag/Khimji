import type { Metadata } from 'next';
import { ClientLayoutProviders } from './ClientLayoutProviders';
import './globals.css';

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

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Khemji Wire & Wire Pvt. Ltd.",
  "alternateName": ["Khemji Wire", "Khemji Wire Industries"],
  "url": "https://www.khemjiwire.in",
  "logo": "https://www.khemjiwire.in/logo.png",
  "image": "https://www.khemjiwire.in/logo.png",
  "description": "Manufacturer of Galvanized Iron Wire, Hot Dip Galvanized MS Wire and Formed Wire for Cable Armouring. IS 280 and IS 3975 certified. Established 1988.",
  "foundingDate": "1988",
  "numberOfEmployees": "50+",
  "telephone": ["+91-9829277869", "+91-141-2954144"],
  "email": "info@khemjiwire.in",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "F-153, Sarna Doongar, RIICO Industrial Area",
    "addressLocality": "Jaipur",
    "addressRegion": "Rajasthan",
    "postalCode": "302012",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "27.0206",
    "longitude": "75.7172"
  },
  "areaServed": "India",
  "knowsAbout": ["Galvanized Iron Wire", "Cable Armouring Wire", "IS 280", "IS 3975", "Hot Dip Galvanizing"],
  "sameAs": [
    "https://www.indiamart.com/khemji-wire",
    "https://www.linkedin.com/company/khemji-wire"
  ]
};

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
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" 
          rel="stylesheet" 
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body>
        <ClientLayoutProviders>{children}</ClientLayoutProviders>
      </body>
    </html>
  );
}
