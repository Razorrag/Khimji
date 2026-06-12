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
                  { label: 'Hot Dip Galvanized MS Wire' },
                  { label: 'Low Carbon GI Wire' },
                  { label: 'Formed Wire for Cable Armouring' }
                ].map((link) => (
                  <Link key={link.label} href="/products" className="font-sans text-[13px] text-cream/60 hover:text-cream transition-colors w-fit">
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
                <p>F-153, Sarna Doongar,<br />RIICO Industrial Area,<br />Jaipur, Rajasthan 302012</p>
                <p>
                  <a href="tel:+919829277869" className="hover:text-amber transition-colors">+91-9829277869</a><br />
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

        {/* Built by — prominent */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="relative py-8 mb-6 text-center"
        >
          <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-amber/30 to-transparent" />
          <p className="font-sans text-[11px] text-cream/40 mb-2 tracking-wide">Built with precision by</p>
          <a
            href="https://reverbex.in"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 font-bebas text-2xl tracking-wider text-cream/80 hover:text-amber transition-all duration-300 group"
          >
            <span className="relative">
              Reverbex
              <span className="absolute -bottom-0.5 left-0 w-full h-[1px] bg-amber/50 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </span>
            <span className="text-amber/60 font-mono text-[10px] tracking-[0.2em] uppercase">Technologies</span>
            <svg className="w-4 h-4 text-amber/50 group-hover:translate-x-1 group-hover:text-amber transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </motion.div>

        {/* Bottom Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="pt-5 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <span className="font-mono text-[10px] text-cream/50 tracking-wider">
            © {new Date().getFullYear()} Khemji Wire & Wire Pvt. Ltd.
          </span>
          <div className="flex items-center gap-4 font-mono text-[10px] text-cream/50 tracking-wider">
            <Link href="/privacy-policy" className="hover:text-cream transition-colors">Privacy</Link>
            <span className="text-cream/20">·</span>
            <Link href="/terms" className="hover:text-cream transition-colors">Terms</Link>
            <span className="text-cream/20">·</span>
            <Link href="/disclaimer" className="hover:text-cream transition-colors">Disclaimer</Link>
            <span className="text-cream/20">·</span>
            <Link href="/sitemap.xml" className="hover:text-cream transition-colors">Sitemap</Link>
          </div>
          <span className="font-mono text-[10px] text-cream/40 tracking-wider">
            GSTIN: 08AABCK1234F1Z5
          </span>
        </motion.div>
      </div>
    </footer>
  );
}
