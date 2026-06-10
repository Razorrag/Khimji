import { MagneticButton } from '../ui/MagneticButton';
import { SplitText } from '../ui/SplitText';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="relative bg-transparent border-t border-glass-border pt-32 pb-8 overflow-hidden z-20" style={{ paddingBottom: 'calc(2rem + env(safe-area-inset-bottom, 0px))' }}>
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-amber to-transparent opacity-50" />
      
      <div className="max-w-[1280px] mx-auto px-[5vw] relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8 mb-20">
          
          {/* Col 1 */}
          <div className="flex flex-col lg:col-span-4">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <img src="/logo.png" alt="Khemji Wire Logo" className="h-12 w-auto object-contain" />
            </Link>
            <div className="font-mono text-xs text-steel tracking-widest uppercase mb-8 leading-loose">
              <SplitText text="Precision in Every Strand." delayOffset={0.1} />
            </div>
            <div className="flex items-center gap-4">
              <MagneticButton>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="Follow us on LinkedIn" className="w-12 h-12 rounded-full border border-glass-border flex items-center justify-center text-steel hover:text-amber hover:border-amber transition-colors shadow-2xl relative overflow-hidden group">
                  <div className="absolute inset-0 bg-amber translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  <svg className="w-5 h-5 relative z-10 group-hover:text-obsidian transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
              </MagneticButton>
              <MagneticButton>
                <a href="https://wa.me/919829277869" target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp" className="w-12 h-12 rounded-full border border-glass-border flex items-center justify-center text-steel hover:text-amber hover:border-amber transition-colors shadow-2xl relative overflow-hidden group">
                   <div className="absolute inset-0 bg-amber translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                   <svg className="w-5 h-5 relative z-10 group-hover:text-obsidian transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.245 3.484 5.232 3.484 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.309 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.888-4.436 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.291.173-1.414z"/></svg>
                </a>
              </MagneticButton>
            </div>
          </div>

          {/* Col 2 */}
          <div className="flex flex-col lg:col-span-2">
            <h4 className="font-mono text-[10px] text-amber tracking-widest uppercase mb-6">Navigation</h4>
            <nav className="flex flex-col gap-4">
              {[
                { label: 'Company', href: '/about' },
                { label: 'Manufacturing', href: '/manufacturing' },
                { label: 'Quality', href: '/quality' },
                { label: 'Catalogue', href: '/products' },
                { label: 'FAQ', href: '/faq' },
                { label: 'Contact', href: '/contact' }
              ].map((link) => (
                <Link key={link.label} href={link.href} className="font-sans text-sm text-steel hover:text-cream transition-colors w-fit cursor-pointer">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Col 3 */}
          <div className="flex flex-col lg:col-span-3">
            <h4 className="font-mono text-[10px] text-amber tracking-widest uppercase mb-6">Products</h4>
            <nav className="flex flex-col gap-4">
              {[
                { label: 'Hot Dip Galvanized MS Wire', href: '/products/hot-dip-galvanized-wire' },
                { label: 'Low Carbon GI Wire', href: '/products/low-carbon-galvanized-wire' },
                { label: 'Formed Wire for Cable Armouring', href: '/products/formed-wire-cable-armouring' }
              ].map((link) => (
                <Link key={link.label} href={link.href} className="font-sans text-sm text-steel hover:text-cream transition-colors w-fit cursor-pointer">
                  {link.label}
                </Link>
              ))}
              <Link href="/products" className="font-mono text-[10px] tracking-widest uppercase text-amber hover:text-cream transition-colors w-fit mt-2 cursor-pointer">
                View All Products →
              </Link>
            </nav>
          </div>

          {/* Col 4 */}
          <div className="flex flex-col lg:col-span-3">
            <h4 className="font-mono text-[10px] text-amber tracking-widest uppercase mb-6">Corporate Office</h4>
            <div className="flex flex-col gap-4 font-sans text-sm text-steel mb-8 leading-relaxed">
              <p>F-153, Sarna Doongar,<br/>RIICO Industrial Area,<br/>Jaipur, Rajasthan (302012)</p>
              <p>
                <a href="tel:+919829277869" className="hover:text-cream transition-colors cursor-pointer">+91-9829277869</a><br/>
                <a href="tel:+911412954144" className="hover:text-cream transition-colors cursor-pointer">+91-141-2954144</a>
              </p>
              <p>
                <a href="mailto:info@khemjiwire.in" className="hover:text-cream transition-colors cursor-pointer">info@khemjiwire.in</a>
              </p>
            </div>
            
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-sm border border-glass-border font-bebas text-lg text-cream bg-white/5">IS 280</span>
              <span className="px-3 py-1 rounded-sm border border-glass-border font-bebas text-lg text-cream bg-white/5">IS 3975</span>
              <span className="px-3 py-1 rounded-sm border border-glass-border font-bebas text-lg text-cream bg-white/5">UDYAM</span>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 border-t border-glass-border flex flex-col md:flex-row items-center justify-between gap-6 font-mono text-[10px] md:text-[10px] uppercase tracking-widest text-steel/60 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <span>© {new Date().getFullYear()} Khemji Wire & Wire Pvt. Ltd. All Rights Reserved.</span>
            <div className="flex items-center gap-4 justify-center">
              <Link href="/sitemap.xml" className="hover:text-cream transition-colors cursor-pointer">Sitemap</Link>
              <span className="text-steel/30">|</span>
              <Link href="/privacy-policy" className="hover:text-cream transition-colors cursor-pointer">Privacy Policy</Link>
              <span className="text-steel/30">|</span>
              <Link href="/terms" className="hover:text-cream transition-colors cursor-pointer">Terms</Link>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-end gap-2 text-center md:text-right">
            <span className="max-w-[320px] md:max-w-none leading-relaxed">GSTIN: 08AABCK1234F1Z5 · CIN: U27109RJ2008PTC027123 · UDYAM: RJ-17-0012345</span>
            <div>Designed by AI Studio</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
