import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { MagneticButton } from '../ui/MagneticButton';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
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
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 p-2 ${
        isScrolled ? 'py-4' : 'py-8'
      }`}
    >
      <div className={`absolute inset-0 transition-opacity duration-500 bg-charcoal/80 backdrop-blur-xl border-b border-glass-border/50 shadow-2xl ${isScrolled ? 'opacity-100' : 'opacity-0'}`} />
      
      <div className="max-w-[1280px] mx-auto px-[5vw] flex items-center justify-between relative z-10">
        <MagneticButton className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-3">
             <span className="font-bebas text-4xl text-cream tracking-wider leading-none">K</span>
             <span className="font-mono text-xs font-medium text-steel tracking-widest leading-none mt-1">KHEMJI WIRE & WIRE</span>
          </Link>
        </MagneticButton>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <div key={link.label} className="relative group py-2">
              <Link
                to={link.href}
                className={`font-sans text-[11px] uppercase tracking-[0.2em] transition-colors relative ${location.pathname.startsWith(link.href) ? 'text-amber' : 'text-steel hover:text-cream'}`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-amber origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </Link>
            </div>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-6">
          <a href="tel:+919829277869" className="font-mono text-[10px] tracking-[0.2em] text-steel hover:text-amber transition-colors">
            +91-9829277869
          </a>
          <MagneticButton>
            <Link
              to="/contact"
              className="inline-flex relative group overflow-hidden rounded-full font-mono text-[10px] tracking-[0.2em] uppercase"
            >
              <div className="absolute inset-0 bg-transparent border border-amber/30 rounded-full group-hover:border-amber transition-colors duration-500" />
              <div className="absolute inset-0 bg-gradient-to-r from-amber to-amber-dim translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              <span className="relative px-6 py-3 text-cream font-medium group-hover:text-obsidian transition-colors duration-500">Get a Quote</span>
            </Link>
          </MagneticButton>
        </div>

        <button
          className="md:hidden text-cream p-2 z-50 relative"
          onClick={() => setIsOpen(true)}
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
          >
            <button
              className="absolute top-8 right-[5vw] text-cream p-4"
              onClick={() => setIsOpen(false)}
            >
              <X className="w-8 h-8" />
            </button>
            <nav className="flex flex-col items-center gap-8">
              {[...links, { label: 'Blog', href: '/blog' }, { label: 'FAQ', href: '/faq' }, { label: 'Contact', href: '/contact' }].map((link, i) => (
                <Link
                  key={link.label}
                  to={link.href}
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
    </header>
  );
}
