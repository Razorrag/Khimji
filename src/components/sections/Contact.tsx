import { useState } from 'react';
import type { FormEvent, ChangeEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    product: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Mock server action since supabase connection isn't provided
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate Supabase insert delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    
    setTimeout(() => {
      setIsSuccess(false);
      setFormData({ name: '', company: '', phone: '', email: '', product: '', message: '' });
    }, 5000);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const products = [
    "Hot Dip Galvanized Mild Steel Wire",
    "Low Carbon Galvanized Steel Wire",
    "Formed Wire for Cable Armouring",
    "Other / Custom Requirement"
  ];

  return (
    <section id="contact" className="relative py-32 bg-obsidian metallic-bg-dark border-t border-glass-border">
      <div className="max-w-[1280px] mx-auto px-[5vw] grid grid-cols-1 lg:grid-cols-[45%_55%] gap-20 relative z-10">
        
        {/* Left Column */}
        <div className="flex flex-col">
          <h2 className="font-bebas text-6xl md:text-[80px] leading-[0.9] text-cream uppercase mb-8 tracking-wide">
            Let's Build <br/>
            <span className="text-amber">Connections</span>
          </h2>
          
          <p className="font-sans font-light text-lg text-steel mb-20 max-w-[400px] leading-relaxed">
            Partner with us for reliable products, precise manufacturing, and unmatched industry quality.
          </p>

          <div className="flex flex-col gap-12 border-t border-glass-border pt-12">
            
            <div className="group flex flex-col items-start gap-4">
              <h4 className="font-mono text-[10px] text-amber tracking-widest uppercase flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber" />
                Office Location
              </h4>
              <p className="font-sans text-xl text-cream font-light leading-relaxed max-w-[320px]">
                F-153, Sarna Doongar, RIICO Industrial Area,<br/> Jaipur, Rajasthan
              </p>
            </div>

            <div className="group flex flex-col items-start gap-4">
              <h4 className="font-mono text-[10px] text-amber tracking-widest uppercase flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber" />
                Direct Lines
              </h4>
              <div className="font-sans text-xl text-cream font-light flex flex-col gap-2">
                <a href="tel:+919829277869" className="hover:text-amber transition-colors">+91-9829277869</a>
                <a href="tel:+911412954144" className="hover:text-amber transition-colors">+91-141-2954144</a>
              </div>
            </div>

            <div className="group flex flex-col items-start gap-4">
              <h4 className="font-mono text-[10px] text-amber tracking-widest uppercase flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber" />
                Digital Mail
              </h4>
              <div className="font-sans text-xl text-cream font-light flex flex-col gap-2">
                <a href="mailto:khemjiwire@gmail.com" className="hover:text-amber transition-colors">khemjiwire@gmail.com</a>
                <a href="mailto:info@khemjiwire.in" className="hover:text-amber transition-colors">info@khemjiwire.in</a>
              </div>
            </div>

          </div>
        </div>

        {/* Right Column - Form */}
        <div className="relative">
          <div className="p-8 md:p-12 relative border border-transparent">
            {/* Minimal Form Container */}
            <div className="absolute inset-0 border border-glass-border rounded-sm bg-charcoal pointer-events-none" />
            
            <h3 className="font-bebas text-4xl text-cream mb-12 tracking-wide relative z-10">Request a Quote</h3>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-10 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="relative">
                  <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="peer w-full bg-transparent border-b border-glass-border py-2 text-cream font-sans focus:outline-none focus:border-amber transition-colors placeholder-transparent" placeholder="Name" />
                  <label htmlFor="name" className="absolute left-0 -top-4 font-mono text-[10px] uppercase text-amber tracking-widest transition-all peer-placeholder-shown:text-steel peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-amber cursor-text">Name</label>
                </div>
                
                <div className="relative">
                  <input type="text" name="company" id="company" value={formData.company} onChange={handleChange} className="peer w-full bg-transparent border-b border-glass-border py-2 text-cream font-sans focus:outline-none focus:border-amber transition-colors placeholder-transparent" placeholder="Company" />
                  <label htmlFor="company" className="absolute left-0 -top-4 font-mono text-[10px] uppercase text-amber tracking-widest transition-all peer-placeholder-shown:text-steel peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-amber cursor-text">Company</label>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="relative">
                  <input type="tel" name="phone" id="phone" required value={formData.phone} onChange={handleChange} className="peer w-full bg-transparent border-b border-glass-border py-2 text-cream font-sans focus:outline-none focus:border-amber transition-colors placeholder-transparent" placeholder="Phone" />
                  <label htmlFor="phone" className="absolute left-0 -top-4 font-mono text-[10px] uppercase text-amber tracking-widest transition-all peer-placeholder-shown:text-steel peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-amber cursor-text">Phone</label>
                </div>
                
                <div className="relative">
                  <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="peer w-full bg-transparent border-b border-glass-border py-2 text-cream font-sans focus:outline-none focus:border-amber transition-colors placeholder-transparent" placeholder="Email" />
                  <label htmlFor="email" className="absolute left-0 -top-4 font-mono text-[10px] uppercase text-amber tracking-widest transition-all peer-placeholder-shown:text-steel peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-amber cursor-text">Email</label>
                </div>
              </div>

              <div className="relative mt-2">
                <select name="product" id="product" value={formData.product} onChange={handleChange} className="w-full bg-transparent border-b border-glass-border py-2 text-cream font-sans focus:outline-none focus:border-amber transition-colors appearance-none cursor-pointer">
                  <option value="" disabled className="bg-charcoal text-steel">Select a Product</option>
                  {products.map(prod => (
                    <option key={prod} value={prod} className="bg-charcoal text-cream">{prod}</option>
                  ))}
                </select>
                <label htmlFor="product" className="absolute left-0 -top-4 font-mono text-[10px] uppercase text-amber tracking-widest">Product Interested</label>
                <div className="absolute right-0 top-3 pointer-events-none text-steel">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </div>
              </div>

              <div className="relative mt-4">
                <textarea name="message" id="message" rows={4} value={formData.message} onChange={handleChange} className="peer w-full bg-transparent border-b border-glass-border py-2 text-cream font-sans focus:outline-none focus:border-amber transition-colors placeholder-transparent resize-none" placeholder="Message"></textarea>
                <label htmlFor="message" className="absolute left-0 -top-4 font-mono text-[10px] uppercase text-amber tracking-widest transition-all peer-placeholder-shown:text-steel peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-amber cursor-text">Message Details</label>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="mt-6 font-mono text-xs tracking-[0.2em] uppercase text-charcoal bg-gradient-to-r from-amber to-amber-dim py-5 flex items-center justify-center shadow-[0_8px_20px_rgba(234,88,12,0.2)] hover:shadow-[0_8px_30px_rgba(234,88,12,0.4)] transition-all hover:-translate-y-1 hover:brightness-110 disabled:opacity-50 disabled:transform-none rounded-sm"
              >
                <span className="flex items-center gap-2 font-bold">
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-obsidian" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                      Sending
                    </>
                  ) : (
                    "Init Transmission"
                  )}
                </span>
              </button>
            </form>

            <AnimatePresence>
              {isSuccess && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-charcoal/95 backdrop-blur-sm border border-amber/30 text-center px-6"
                >
                  <div className="w-16 h-16 rounded-full border border-amber/50 flex items-center justify-center mb-6 text-amber">
                     <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h3 className="font-bebas text-4xl text-cream mb-4 tracking-wide">Request Received</h3>
                  <p className="font-sans text-steel max-w-[280px] font-light leading-relaxed">Thank you for reaching out. Our technical team will review your requirements and respond shortly.</p>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>

      </div>
    </section>
  );
}
