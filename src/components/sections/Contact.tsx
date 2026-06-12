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

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const text = `*New Inquiry from Khemji Wire Website*
*Name:* ${formData.name}
*Company:* ${formData.company}
*Phone:* ${formData.phone}
*Email:* ${formData.email}
*Product:* ${formData.product || 'Not specified'}
*Message:* ${formData.message || 'Not specified'}`;

    const url = `https://wa.me/919829277869?text=${encodeURIComponent(text)}`;

    setIsSubmitting(false);
    setIsSuccess(true);

    setTimeout(() => {
      setIsSuccess(false);
      setFormData({ name: '', company: '', phone: '', email: '', product: '', message: '' });
      window.open(url, '_blank');
    }, 800);
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
          <h1 className="font-bebas text-[clamp(48px,6vw,90px)] leading-[0.85] text-cream uppercase mb-8 tracking-wide">
            <SplitText text="LET'S BUILD" /> <br/>
            <span className="text-amber"><SplitText text="CONNECTIONS" delayOffset={0.2} /></span>
          </h1>
          
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
                <a href="tel:+919829277869" className="hover:text-amber hover:translate-x-2 transition-all cursor-pointer">+91-9829277869</a>
                <a href="tel:+911412954144" className="hover:text-amber hover:translate-x-2 transition-all cursor-pointer">+91-141-2954144</a>
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
                <a href="mailto:khemjiwire@gmail.com" className="hover:text-amber hover:translate-x-2 transition-all cursor-pointer">khemjiwire@gmail.com</a>
                <a href="mailto:info@khemjiwire.in" className="hover:text-amber hover:translate-x-2 transition-all cursor-pointer">info@khemjiwire.in</a>
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
        >
          <div className="p-8 md:p-12 relative border border-white/10 rounded-2xl">
            <h3 className="font-bebas text-3xl md:text-4xl text-cream mb-8 border-b border-white/10 pb-5">Send Inquiry</h3>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-5" aria-label="Request a quote form">
              
              <div>
                <label htmlFor="name" className="block font-mono text-[11px] uppercase text-cream/80 tracking-widest mb-2">Full Name <span className="text-amber">*</span></label>
                <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-lg text-cream font-sans text-sm focus:outline-none transition-all border" style={{ backgroundColor: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.15)' }} onFocus={(e) => { e.target.style.borderColor = '#F97316'; e.target.style.backgroundColor = 'rgba(255,255,255,0.1)'; }} onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.15)'; e.target.style.backgroundColor = 'rgba(255,255,255,0.07)'; }} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="phone" className="block font-mono text-[11px] uppercase text-cream/80 tracking-widest mb-2">Phone <span className="text-amber">*</span></label>
                  <input type="tel" name="phone" id="phone" required value={formData.phone} onChange={handleChange} inputMode="tel" className="w-full px-4 py-3 rounded-lg text-cream font-sans text-sm focus:outline-none transition-all border" style={{ backgroundColor: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.15)' }} onFocus={(e) => { e.target.style.borderColor = '#F97316'; e.target.style.backgroundColor = 'rgba(255,255,255,0.1)'; }} onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.15)'; e.target.style.backgroundColor = 'rgba(255,255,255,0.07)'; }} />
                </div>
                <div>
                  <label htmlFor="email" className="block font-mono text-[11px] uppercase text-cream/80 tracking-widest mb-2">Email <span className="text-amber">*</span></label>
                  <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-lg text-cream font-sans text-sm focus:outline-none transition-all border" style={{ backgroundColor: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.15)' }} onFocus={(e) => { e.target.style.borderColor = '#F97316'; e.target.style.backgroundColor = 'rgba(255,255,255,0.1)'; }} onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.15)'; e.target.style.backgroundColor = 'rgba(255,255,255,0.07)'; }} />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block font-mono text-[11px] uppercase text-cream/80 tracking-widest mb-2">Company</label>
                <input type="text" name="company" id="company" value={formData.company} onChange={handleChange} className="w-full px-4 py-3 rounded-lg text-cream font-sans text-sm focus:outline-none transition-all border" style={{ backgroundColor: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.15)' }} onFocus={(e) => { e.target.style.borderColor = '#F97316'; e.target.style.backgroundColor = 'rgba(255,255,255,0.1)'; }} onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.15)'; e.target.style.backgroundColor = 'rgba(255,255,255,0.07)'; }} />
              </div>

              <div>
                <label htmlFor="product" className="block font-mono text-[11px] uppercase text-cream/80 tracking-widest mb-2">Product Interested In</label>
                <select name="product" id="product" value={formData.product} onChange={handleChange} className="w-full px-4 py-3 rounded-lg text-cream font-sans text-sm focus:outline-none transition-all cursor-pointer border" style={{ backgroundColor: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.15)' }} onFocus={(e) => e.target.style.borderColor = '#F97316'} onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.15)'}>
                  <option value="" disabled className="bg-obsidian text-white/40">Select a product</option>
                  {products.map(prod => (
                    <option key={prod} value={prod} className="bg-obsidian text-cream">{prod}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block font-mono text-[11px] uppercase text-cream/80 tracking-widest mb-2">Message</label>
                <textarea name="message" id="message" rows={4} value={formData.message} onChange={handleChange} className="w-full px-4 py-3 rounded-lg text-cream font-sans text-sm focus:outline-none transition-all border" style={{ backgroundColor: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.15)', resize: 'none' }} onFocus={(e) => { e.target.style.borderColor = '#F97316'; e.target.style.backgroundColor = 'rgba(255,255,255,0.1)'; }} onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.15)'; e.target.style.backgroundColor = 'rgba(255,255,255,0.07)'; }}></textarea>
              </div>

              <button type="submit" disabled={isSubmitting} className="w-full font-mono text-xs tracking-widest uppercase font-bold px-8 py-4 rounded-lg border border-amber/60 text-amber hover:bg-amber hover:text-obsidian transition-all duration-300 mt-4 disabled:opacity-50">
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-3">
                    <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                    Sending
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-3">
                    Submit Inquiry
                    <span>&rarr;</span>
                  </span>
                )}
              </button>
            </form>

            <AnimatePresence>
              {isSuccess && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-obsidian/95 text-center px-6 rounded-2xl"
                  style={{ border: "1px solid rgba(249,115,22,0.3)" }}
                  role="alert"
                  aria-live="polite"
                >
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 text-amber" style={{ border: "1px solid rgba(249,115,22,0.5)" }}>
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h3 className="font-bebas text-4xl text-cream mb-4 tracking-wide">Request Received</h3>
                  <p className="font-sans text-white/60 max-w-[280px] font-light leading-relaxed">Thank you for reaching out. Our team will review your requirements and respond shortly.</p>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
