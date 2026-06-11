"use client";

import Link from 'next/link';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export function Footer() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <footer ref={ref} className="relative bg-transparent border-t border-glass-border pt-24 pb-8 overflow-hidden z-20" style={{ paddingBottom: 'calc(2rem + env(safe-area-inset-bottom, 0px))' }}>
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-amber/40 to-transparent" />

      <div className="max-w-[1280px] mx-auto px-[5vw] relative z-10">

        {/* Top section: Logo + Columns */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 mb-16">

          {/* Logo + Tagline + Socials */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col lg:w-[320px] flex-shrink-0"
          >
            <Link href="/" className="flex items-center gap-3 mb-5">
              <img src="/logo.png" alt="Khemji Wire Logo" className="h-20 w-auto object-contain" />
            </Link>
            <p className="font-sans text-[13px] text-cream/60 leading-relaxed mb-6 max-w-[280px]">
              Precision in Every Strand. Strength in Every Connection.
            </p>
            <div className="flex items-center gap-3">
              <a href="https://wa.me/919829277869" target="_blank" rel="noreferrer" aria-label="WhatsApp" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-cream/60 hover:text-amber hover:border-amber/40 transition-all duration-300">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.245 3.484 5.232 3.484 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.309 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.888-4.436 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.291.173-1.414z"/></svg>
              </a>
            </div>
          </motion.div>

          {/* Right side columns */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12">

            {/* Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex flex-col"
            >
              <h4 className="font-mono text-xs text-amber tracking-widest uppercase mb-5">Navigation</h4>
              <nav className="flex flex-col gap-3">
                {[
                  { label: 'Company', href: '/about' },
                  { label: 'Manufacturing', href: '/manufacturing' },
                  { label: 'Quality', href: '/quality' },
                  { label: 'Catalogue', href: '/products' },
                  { label: 'FAQ', href: '/faq' },
                  { label: 'Contact', href: '/contact' }
                ].map((link) => (
                  <Link key={link.label} href={link.href} className="font-sans text-[13px] text-cream/60 hover:text-cream transition-colors w-fit">
                    {link.label}
                  </Link>
                ))}
              </nav>
            </motion.div>

            {/* Products */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col"
            >
              <h4 className="font-mono text-xs text-amber tracking-widest uppercase mb-5">Products</h4>
              <nav className="flex flex-col gap-3">
                {[
                  { label: 'Hot Dip Galvanized MS Wire', href: '/products/hot-dip-galvanized-wire' },
                  { label: 'Low Carbon GI Wire', href: '/products/low-carbon-galvanized-wire' },
                  { label: 'Formed Wire for Cable Armouring', href: '/products/formed-wire-cable-armouring' }
                ].map((link) => (
                  <Link key={link.label} href={link.href} className="font-sans text-[13px] text-cream/60 hover:text-cream transition-colors w-fit">
                    {link.label}
                  </Link>
                ))}
                <Link href="/products" className="font-mono text-[10px] tracking-widest uppercase text-amber/70 hover:text-amber transition-colors w-fit mt-2">
                  View All Products
                </Link>
              </nav>
            </motion.div>

            {/* Contact + Certs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col col-span-2 md:col-span-1"
            >
              <h4 className="font-mono text-xs text-amber tracking-widest uppercase mb-5">Corporate Office</h4>
              <div className="flex flex-col gap-3 font-sans text-[13px] text-cream/60 leading-relaxed">
                <p>F-153, Sarna Doongar,<br/>RIICO Industrial Area,<br/>Jaipur, Rajasthan 302012</p>
                <p>
                  <a href="tel:+919829277869" className="hover:text-amber transition-colors">+91-9829277869</a><br/>
                  <a href="tel:+911412954144" className="hover:text-amber transition-colors">+91-141-2954144</a>
                </p>
                <a href="mailto:info@khemjiwire.in" className="hover:text-amber transition-colors">info@khemjiwire.in</a>
              </div>
              <div className="flex flex-wrap items-center gap-2 mt-5">
                <span className="px-2.5 py-1 rounded border border-white/20 font-mono text-[9px] text-cream/60 uppercase tracking-wider">IS 280</span>
                <span className="px-2.5 py-1 rounded border border-white/20 font-mono text-[9px] text-cream/60 uppercase tracking-wider">IS 3975</span>
                <span className="px-2.5 py-1 rounded border border-white/20 font-mono text-[9px] text-cream/60 uppercase tracking-wider">UDYAM</span>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Bottom Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <span className="font-mono text-[10px] text-cream/50 tracking-wider">
            © {new Date().getFullYear()} Khemji Wire & Wire Pvt. Ltd.
          </span>
          <div className="flex items-center gap-4 font-mono text-[10px] text-cream/50 tracking-wider">
            <Link href="/privacy-policy" className="hover:text-cream transition-colors">Privacy</Link>
            <span className="text-cream/20">·</span>
            <Link href="/terms" className="hover:text-cream transition-colors">Terms</Link>
            <span className="text-cream/20">·</span>
            <Link href="/sitemap.xml" className="hover:text-cream transition-colors">Sitemap</Link>
          </div>
          <span className="font-mono text-[10px] text-cream/50 tracking-wider">
            GSTIN: 08AABCK1234F1Z5
          </span>
        </motion.div>
      </div>
    </footer>
  );
}
