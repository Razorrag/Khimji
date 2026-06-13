import { Contact } from '@/components/sections/Contact';
import type { Metadata } from 'next';
import { generateBreadcrumbs } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Contact Us | Khemji Wire',
  description: 'Get in touch with Khemji Wire & Wire Pvt. Ltd. for inquiries about GI wire, cable armouring wire, and formed wire. F-153, RIICO Industrial Area, Jaipur.',
  alternates: { canonical: 'https://www.khemjiwire.in/contact' },
  openGraph: {
    title: 'Contact Us | Khemji Wire & Wire Pvt. Ltd.',
    description: 'Contact Khemji Wire for GI wire, cable armouring & formed wire inquiries. F-153, RIICO Industrial Area, Jaipur.',
    url: 'https://www.khemjiwire.in/contact',
    images: [{ url: '/logo.png', width: 1200, height: 630, alt: 'Contact Khemji Wire' }]
  },
  twitter: {
    title: 'Contact Us | Khemji Wire',
    description: 'Contact Khemji Wire for GI wire & cable armouring inquiries.',
    images: ['/logo.png']
  }
};

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbs([{ name: 'Contact Us', href: '/contact' }])) }} />
      <div className="bg-transparent relative z-10 pt-20">
        <Contact />
      </div>
      
      {/* Google Maps embed */}
      <section className="py-24 border-t border-glass-border bg-transparent">
        <div className="max-w-[1280px] mx-auto px-[5vw]">
          <h3 className="font-mono text-xs text-amber tracking-[0.2em] uppercase mb-8">Find Us</h3>
          <div className="rounded-2xl overflow-hidden border border-glass-border h-[400px] relative">
            <iframe
              title="Khemji Wire Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14217.202573215903!2d75.71719875!3d27.0205809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db3ed2a04ec47%3A0xe54e6fffc31f4fc1!2sSarna%20Doongar%20Industrial%20Area%2C%20Jaipur%2C%20Rajasthan%20302012!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(100%) invert(90%) hue-rotate(180deg) brightness(85%) contrast(110%)' }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </section>
      
      {/* Company ID strip */}
      <section className="py-8 border-t border-glass-border bg-transparent backdrop-blur-md relative z-10">
        <div className="max-w-[1280px] mx-auto px-[5vw] flex flex-wrap gap-x-6 gap-y-3 font-mono text-[9px] md:text-[10px] text-steel/40 tracking-widest uppercase items-center justify-center text-center">
          <span>GSTIN: 08AAECA7760L1ZA</span>
          <span className="hidden sm:inline">·</span>
          <span>CIN: U51101RJ1988PTC004356</span>
          <span className="hidden md:inline">·</span>
          <span>UDYAM: UDYAM-RJ-17-0030256</span>
          <span className="hidden sm:inline">·</span>
          <span>PAN: AAECA7760L</span>
        </div>
      </section>
    </>
  );
}
