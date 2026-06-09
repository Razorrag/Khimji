import type { Metadata } from 'next';
import { ClientLayoutProviders } from './ClientLayoutProviders';
import './globals.css';

export const metadata: Metadata = {
  title: 'GI Wire Manufacturer in Jaipur | IS 280 & IS 3975 Certified | Khemji Wire',
  description: 'Khemji Wire & Wire Pvt. Ltd. — Leading manufacturer of Galvanized Iron (GI) Wire, Hot Dip Galvanized MS Wire & Cable Armouring Wire in Jaipur, Rajasthan.',
  keywords: 'GI wire manufacturer Jaipur, galvanized iron wire Rajasthan, hot dip galvanized wire India',
  icons: {
    icon: '/tab logo just logo.png',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body>
        <ClientLayoutProviders>{children}</ClientLayoutProviders>
      </body>
    </html>
  );
}
