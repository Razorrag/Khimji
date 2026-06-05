export function Footer() {
  return (
    <footer className="relative bg-charcoal metallic-bg-charcoal border-t border-glass-border pt-24 pb-8 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-amber-dim to-transparent opacity-20" />
      
      <div className="max-w-[1280px] mx-auto px-[5vw] relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8 mb-20">
          
          {/* Col 1 */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-bebas text-4xl text-cream tracking-wider leading-none">K</span>
              <span className="font-mono text-sm font-medium text-steel tracking-widest leading-none mt-1">KHEMJI WIRE & WIRE</span>
            </div>
            <p className="font-mono text-xs text-amber tracking-widest uppercase mb-8">
              Precision in Every Strand.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-steel hover:text-cream transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-steel hover:text-cream transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.57-.187-.988-.365-1.739-.738-2.876-2.508-2.961-2.622-.085-.115-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.115-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.115.433-.505.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.001 3.825-3.113 6.938-6.937 6.938z"/></svg>
              </a>
            </div>
          </div>

          {/* Col 2 */}
          <div className="flex flex-col">
            <h4 className="font-mono text-[10px] text-amber tracking-widest uppercase mb-6">Quick Links</h4>
            <nav className="flex flex-col gap-4">
              {['Home', 'About', 'Products', 'Manufacturing', 'Quality', 'Industries', 'Contact'].map((link) => (
                <a key={link} href={`#${link.toLowerCase()}`} className="font-sans text-sm text-steel hover:text-cream transition-colors w-fit">
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Col 3 */}
          <div className="flex flex-col">
            <h4 className="font-mono text-[10px] text-amber tracking-widest uppercase mb-6">Products</h4>
            <nav className="flex flex-col gap-4">
              {['Hot Dip Galvanized Wire', 'Low Carbon Wire', 'Formed Armouring Wire', 'GI Cable Armouring'].map((link) => (
                <a key={link} href="#products" className="font-sans text-sm text-steel hover:text-cream transition-colors w-fit">
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Col 4 */}
          <div className="flex flex-col">
            <h4 className="font-mono text-[10px] text-amber tracking-widest uppercase mb-6">Contact Info</h4>
            <div className="flex flex-col gap-4 font-sans text-sm text-steel mb-8">
              <p>F-153, Sarna Doongar,<br/>RIICO Industrial Area,<br/>Jaipur, Rajasthan</p>
              <p>+91-9829277869<br/>+91-141-2954144</p>
              <p>khemjiwire@gmail.com<br/>info@khemjiwire.in</p>
            </div>
            
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-sm border border-glass-border font-bebas text-lg text-cream bg-white/5">IS 280</span>
              <span className="px-3 py-1 rounded-sm border border-glass-border font-bebas text-lg text-cream bg-white/5">IS 3975</span>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-glass-border flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-widest text-steel/60">
          <div className="flex items-center gap-6">
            <span>© 2026 Khemji Wire & Wire Pvt. Ltd. All Rights Reserved.</span>
            <a href="#" className="hover:text-cream transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-cream transition-colors">Terms</a>
          </div>
          <div>Website Designed & Developed by Expert Agency</div>
        </div>
      </div>
    </footer>
  );
}
