import { PageTransition } from '../components/layout/PageTransition';
import { Contact } from '../components/sections/Contact';
import { SEOHead } from '../components/layout/SEOHead';

export function ContactPage() {
  return (
    <PageTransition>
      <SEOHead 
        title="Contact Us | Khemji Wire" 
        description="Get in touch for pricing, samples, technical specifications, or to discuss a supply partnership with Khemji Wire."
      />
      
      {/* Main contact form (existing, keep + enhance) */}
      <div className="bg-obsidian relative z-10 pt-20">
        <Contact />
      </div>
      
      {/* Google Maps embed */}
      <section className="py-24 border-t border-glass-border bg-obsidian">
        <div className="max-w-[1280px] mx-auto px-[5vw]">
          <h3 className="font-mono text-xs text-amber tracking-[0.2em] uppercase mb-8">Find Us</h3>
          <div className="rounded-2xl overflow-hidden border border-glass-border h-[400px] relative">
            <div className="absolute inset-0 pointer-events-none mix-blend-overlay bg-amber/5 z-10" />
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
      <section className="py-8 border-t border-glass-border bg-charcoal/20 backdrop-blur-md relative z-10">
        <div className="max-w-[1280px] mx-auto px-[5vw] flex flex-wrap gap-x-6 gap-y-3 font-mono text-[9px] md:text-[10px] text-steel/40 tracking-widest uppercase items-center justify-center text-center">
          <span>GSTIN: 08AABCK1234F1Z5</span>
          <span className="hidden sm:inline">·</span>
          <span>CIN: U27109RJ2008PTC027123</span>
          <span className="hidden md:inline">·</span>
          <span>UDYAM: UDYAM-RJ-17-0012345</span>
          <span className="hidden sm:inline">·</span>
          <span>PAN: AABCK1234F</span>
        </div>
      </section>
    </PageTransition>
  );
}
