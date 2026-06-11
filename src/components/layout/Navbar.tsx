"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MagneticButton } from '../ui/MagneticButton';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { label: 'About', href: '/about' },
    { label: 'Products', href: '/products', hasDropdown: true },
    { label: 'Manufacturing', href: '/manufacturing' },
    { label: 'Quality', href: '/quality' },
    { label: 'Industries', href: '/industries' },
  ];

  return (
    <motion.header
      className="fixed top-0 inset-x-0 z-50 transition-all duration-500 p-2"
    >
      <div className={`absolute inset-0 transition-opacity duration-500 backdrop-blur-xl border-b border-glass-border ${isScrolled ? 'opacity-100' : 'opacity-0'}`} style={{ backgroundColor: "rgba(28,30,36,0.85)" }} />
      
      <div className="max-w-[1280px] mx-auto px-[5vw] flex items-center justify-between relative z-10">
        <MagneticButton className="flex items-center gap-3 -ml-6">
          <Link href="/" className="flex items-center gap-3">
             <img src="/logo.png" alt="Khemji Wire Logo" className="h-20 lg:h-24 w-auto object-contain" />
          </Link>
        </MagneticButton>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <div key={link.label} className="relative group py-2">
              <Link
                href={link.href}
                className={`font-sans text-[11px] uppercase tracking-[0.2em] transition-colors relative cursor-pointer ${pathname.startsWith(link.href) ? 'text-amber' : 'text-steel hover:text-cream'}`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-amber origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </Link>
            </div>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-6">
          <MagneticButton>
            <Link
              href="/contact"
              className="blob-btn-product font-mono text-xs tracking-widest uppercase font-bold px-8 py-4 inline-flex items-center justify-center"
            >
              Contact Us
            </Link>
          </MagneticButton>
        </div>

        <button
          className="md:hidden text-cream p-3 z-50 relative min-w-[44px] min-h-[44px] flex items-center justify-center"
          onClick={() => setIsOpen(true)}
          aria-label="Open navigation menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 glass-panel bg-obsidian/95 backdrop-blur-3xl flex flex-col items-center justify-center"
            style={{ paddingTop: 'env(safe-area-inset-top, 0px)', paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
          >
            <button
              className="text-cream p-4"
              style={{ position: 'absolute', top: 'calc(1.5rem + env(safe-area-inset-top, 0px))', right: '5vw' }}
              onClick={() => setIsOpen(false)}
              aria-label="Close navigation menu"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="mb-12">
              <img src="/logo.png" alt="Khemji Wire" className="h-24 w-auto object-contain" />
            </div>
            <nav className="flex flex-col items-center gap-8">
              {[...links, { label: 'Blog', href: '/blog' }, { label: 'FAQ', href: '/faq' }, { label: 'Contact', href: '/contact' }].map((link, i) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-bebas text-5xl tracking-wider text-cream hover:text-amber transition-colors"
                >
                  <motion.span
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    {link.label}
                  </motion.span>
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
