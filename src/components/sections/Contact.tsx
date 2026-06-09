"use client";

import { useState } from 'react';
import type { FormEvent, ChangeEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SplitText } from '../ui/SplitText';
import { MagneticButton } from '../ui/MagneticButton';

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
    <section id="contact" className="relative py-32 bg-transparent border-t border-glass-border">
      <div className="max-w-[1280px] mx-auto px-[5vw] grid grid-cols-1 lg:grid-cols-[45%_55%] gap-20 relative z-10">
        
        {/* Left Column */}
        <div className="flex flex-col">
          <motion.div 
             initial={{ width: 0 }}
             whileInView={{ width: "60px" }}
             transition={{ duration: 0.8 }}
             className="h-[1px] bg-amber mb-6"
          />
          <h2 className="font-bebas text-[clamp(48px,6vw,90px)] leading-[0.85] text-cream uppercase mb-8 tracking-wide">
            <SplitText text="LET'S BUILD" /> <br/>
            <span className="text-amber"><SplitText text="CONNECTIONS" delayOffset={0.2} /></span>
          </h2>
          
          <p className="font-sans font-light text-lg text-steel mb-20 max-w-[400px] leading-relaxed border-l-2 border-glass-border pl-6">
            Partner with us for reliable products, precise manufacturing, and unmatched industry quality.
          </p>

          <div className="flex flex-col gap-12 border-t border-glass-border pt-12">
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group flex flex-col items-start gap-4"
            >
              <h4 className="font-mono text-[10px] text-amber tracking-widest uppercase flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber group-hover:shadow-[0_0_10px_#EA580C] transition-shadow" />
                Office Location
              </h4>
              <p className="font-sans text-xl text-cream font-light leading-relaxed max-w-[320px] group-hover:text-amber transition-colors">
                F-153, Sarna Doongar, RIICO Industrial Area,<br/> Jaipur, Rajasthan
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group flex flex-col items-start gap-4"
            >
              <h4 className="font-mono text-[10px] text-amber tracking-widest uppercase flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber group-hover:shadow-[0_0_10px_#EA580C] transition-shadow" />
                Direct Lines
              </h4>
              <div className="font-sans text-xl text-cream font-light flex flex-col gap-2">
                <a href="tel:+919829277869" className="hover:text-amber hover:translate-x-2 transition-all">+91-9829277869</a>
                <a href="tel:+911412954144" className="hover:text-amber hover:translate-x-2 transition-all">+91-141-2954144</a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="group flex flex-col items-start gap-4"
            >
              <h4 className="font-mono text-[10px] text-amber tracking-widest uppercase flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber group-hover:shadow-[0_0_10px_#EA580C] transition-shadow" />
                Digital Mail
              </h4>
              <div className="font-sans text-xl text-cream font-light flex flex-col gap-2">
                <a href="mailto:khemjiwire@gmail.com" className="hover:text-amber hover:translate-x-2 transition-all">khemjiwire@gmail.com</a>
                <a href="mailto:info@khemjiwire.in" className="hover:text-amber hover:translate-x-2 transition-all">info@khemjiwire.in</a>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Right Column - Form */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="p-8 md:p-14 relative border border-glass-border/50 rounded-2xl overflow-hidden glass-panel shadow-2xl bg-charcoal/30">
            {/* Soft amber glow inside form */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber/5 rounded-full blur-[100px] pointer-events-none" />
            
            <h3 className="font-bebas text-4xl text-cream mb-12 tracking-wide relative z-10 border-b border-glass-border pb-4">Request a Quote</h3>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-10 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="relative group">
                  <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="peer w-full bg-transparent border-b border-glass-border py-2 text-cream font-sans focus:outline-none focus:border-amber transition-colors placeholder-transparent" placeholder="Name" />
                  <label htmlFor="name" className="absolute left-0 -top-4 font-mono text-[10px] uppercase text-amber tracking-widest transition-all peer-placeholder-shown:text-steel peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-amber cursor-text">Name</label>
                  <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-amber transition-all duration-300 peer-focus:w-full" />
                </div>
                
                <div className="relative group">
                  <input type="text" name="company" id="company" value={formData.company} onChange={handleChange} className="peer w-full bg-transparent border-b border-glass-border py-2 text-cream font-sans focus:outline-none focus:border-amber transition-colors placeholder-transparent" placeholder="Company" />
                  <label htmlFor="company" className="absolute left-0 -top-4 font-mono text-[10px] uppercase text-amber tracking-widest transition-all peer-placeholder-shown:text-steel peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-amber cursor-text">Company</label>
                  <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-amber transition-all duration-300 peer-focus:w-full" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="relative group">
                  <input type="tel" name="phone" id="phone" required value={formData.phone} onChange={handleChange} className="peer w-full bg-transparent border-b border-glass-border py-2 text-cream font-sans focus:outline-none focus:border-amber transition-colors placeholder-transparent" placeholder="Phone" />
                  <label htmlFor="phone" className="absolute left-0 -top-4 font-mono text-[10px] uppercase text-amber tracking-widest transition-all peer-placeholder-shown:text-steel peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-amber cursor-text">Phone</label>
                  <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-amber transition-all duration-300 peer-focus:w-full" />
                </div>
                
                <div className="relative group">
                  <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="peer w-full bg-transparent border-b border-glass-border py-2 text-cream font-sans focus:outline-none focus:border-amber transition-colors placeholder-transparent" placeholder="Email" />
                  <label htmlFor="email" className="absolute left-0 -top-4 font-mono text-[10px] uppercase text-amber tracking-widest transition-all peer-placeholder-shown:text-steel peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-amber cursor-text">Email</label>
                  <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-amber transition-all duration-300 peer-focus:w-full" />
                </div>
              </div>

              <div className="relative mt-2 group">
                <select name="product" id="product" value={formData.product} onChange={handleChange} className="peer w-full bg-transparent border-b border-glass-border py-2 text-cream font-sans focus:outline-none focus:border-amber transition-colors appearance-none cursor-pointer">
                  <option value="" disabled className="bg-charcoal text-steel">Select a Product</option>
                  {products.map(prod => (
                    <option key={prod} value={prod} className="bg-charcoal text-cream">{prod}</option>
                  ))}
                </select>
                <label htmlFor="product" className="absolute left-0 -top-4 font-mono text-[10px] uppercase text-amber tracking-widest">Product Interested</label>
                <div className="absolute right-0 top-3 pointer-events-none text-steel peer-focus:text-amber transition-colors">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </div>
                <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-amber transition-all duration-300 peer-focus:w-full" />
              </div>

              <div className="relative mt-4 group">
                <textarea name="message" id="message" rows={4} value={formData.message} onChange={handleChange} className="peer w-full bg-transparent border-b border-glass-border py-2 text-cream font-sans focus:outline-none focus:border-amber transition-colors placeholder-transparent resize-none" placeholder="Message"></textarea>
                <label htmlFor="message" className="absolute left-0 -top-4 font-mono text-[10px] uppercase text-amber tracking-widest transition-all peer-placeholder-shown:text-steel peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-amber cursor-text">Message Details</label>
                <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-amber transition-all duration-300 peer-focus:w-full" />
              </div>

              <MagneticButton 
                type="submit"
                disabled={isSubmitting}
                className="group/btn mt-6 relative overflow-hidden font-mono text-xs tracking-[0.2em] uppercase bg-charcoal text-amber border border-amber/30 hover:border-amber transition-colors py-5 flex items-center justify-center rounded-sm"
              >
                {/* Button shine */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-amber/10 to-transparent -translate-x-[200%] group-hover/btn:translate-x-[200%] transition-transform duration-1000 ease-in-out" />
                
                <span className="flex items-center gap-3 font-bold relative z-10 transition-colors">
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 h-4 w-4 text-amber" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                      Sending
                    </>
                  ) : (
                    <>
                      Init Transmission 
                      <span className="transform group-hover/btn:translate-x-1 transition-transform">→</span>
                    </>
                  )}
                </span>
              </MagneticButton>
            </form>

            <AnimatePresence>
              {isSuccess && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-charcoal/95 backdrop-blur-sm border border-amber/30 text-center px-6 rounded-2xl"
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
        </motion.div>

      </div>
    </section>
  );
}
