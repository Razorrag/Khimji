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

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const links = [
    { label: 'About', href: '/about' },
    { label: 'Products', href: '/products', hasDropdown: true },
    { label: 'Manufacturing', href: '/manufacturing' },
    { label: 'Quality', href: '/quality' },
    { label: 'Industries', href: '/industries' },
  ];

  const allLinks = [...links, { label: 'Blog', href: '/blog' }, { label: 'FAQ', href: '/faq' }, { label: 'Contact', href: '/contact' }];

  return (
    <motion.header
      className="fixed top-0 inset-x-0 z-50 transition-all duration-500 p-2"
    >
      <div className={`absolute inset-0 transition-opacity duration-500 backdrop-blur-xl border-b border-glass-border ${isScrolled ? 'opacity-100' : 'opacity-0'}`} style={{ backgroundColor: "rgba(28,30,36,0.85)" }} />
      
      <div className="max-w-[1280px] mx-auto px-4 md:px-[5vw] flex items-center justify-between relative z-10">
        <MagneticButton className="flex items-center gap-3 -ml-2 md:-ml-6">
          <Link href="/" className="flex items-center gap-3">
             <img src="/logo.png" alt="Khemji Wire Logo" className="h-14 md:h-20 lg:h-24 w-auto object-contain" />
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
          className="md:hidden text-cream p-2 z-[60] relative min-w-[44px] min-h-[44px] flex items-center justify-center"
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
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[55] bg-obsidian/98 backdrop-blur-2xl flex flex-col"
          >
            {/* Top bar with logo + close */}
            <div className="flex items-center justify-between px-5 pt-4 pb-4 border-b border-white/5">
              <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center">
                <img src="/logo.png" alt="Khemji Wire" className="h-14 w-auto object-contain" />
              </Link>
              <button
                className="text-cream/60 hover:text-cream p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
                onClick={() => setIsOpen(false)}
                aria-label="Close navigation menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Menu links */}
            <nav className="flex-1 flex flex-col justify-center items-center gap-1 px-8 py-6 overflow-y-auto">
              {allLinks.map((link, i) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`w-full text-center font-bebas text-[32px] tracking-wide transition-colors py-2.5 ${pathname.startsWith(link.href) ? 'text-amber' : 'text-cream/70 hover:text-amber'}`}
                >
                  <motion.span
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: i * 0.03, duration: 0.25 }}
                    className="block"
                  >
                    {link.label}
                  </motion.span>
                </Link>
              ))}
            </nav>

            {/* Bottom CTA */}
            <div className="px-6 pb-6 pt-4 border-t border-white/5">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="blob-btn-product font-mono text-[11px] tracking-widest uppercase font-bold px-6 py-3.5 flex items-center justify-center gap-2 w-full"
              >
                <span>Contact Us</span>
                <span>→</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
