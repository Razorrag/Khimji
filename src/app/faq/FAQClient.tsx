"use client";

import { useState } from 'react';
import { SplitText } from '@/components/ui/SplitText';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

const FAQS = [
  {
    q: "What certifications do your galvanized wire products hold?",
    a: "Our products strictly adhere to IS 280 and IS 3975 standards. We conduct in-house mass-of-zinc and uniformity testing to guarantee highest compliance."
  },
  {
    q: "Can you manufacture custom wire gauges?",
    a: "Yes, we utilize computerized cold-draw machines capable of drawing wire precisely from 0.90 mm to 5.00 mm based on client specifications."
  },
  {
    q: "What makes your Hot Dip Galvanized Wire superior?",
    a: "We employ a continuous hot-dip setup that guarantees an ultra-smooth, uniform zinc finish. This drastically improves resistance to atmospheric corrosion compared to standard galvanizing methods."
  },
  {
    q: "What is your typical production turnaround time?",
    a: "With a 700+ MT monthly capacity across our advanced drawing lines, standard orders dispatch within 7-10 business days."
  },
  {
    q: "Do you offer nationwide shipping in India?",
    a: "Absolutely. We supply large-scale infrastructure and electrical transmission projects PAN India, assuring secure logistics."
  }
];

export function FAQClient() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="pt-40 pb-24 px-[5vw] max-w-[1000px] mx-auto min-h-screen">
      <h1 className="font-bebas text-6xl md:text-[100px] text-cream mb-6 tracking-wider uppercase leading-[0.85]">
        <SplitText text="FREQUENTLY" /> <br/>
        <span className="text-amber"><SplitText text="ASKED" delayOffset={0.2} /></span>
      </h1>
      <p className="font-sans text-steel text-lg font-light mb-20 max-w-[500px]">Technical specifications, ordering processes, and methodology clarifications.</p>
      
      <div className="flex flex-col border-t border-glass-border">
        {FAQS.map((faq, i) => (
          <div key={i} className="border-b border-glass-border overflow-hidden">
            <button 
              className="w-full flex items-center justify-between py-8 text-left group"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <span className={`font-bebas text-3xl tracking-wide transition-colors duration-300 ${openIndex === i ? 'text-amber' : 'text-cream group-hover:text-amber/80'}`}>
                 {faq.q}
              </span>
              <motion.div 
                animate={{ rotate: openIndex === i ? 45 : 0 }} 
                transition={{ duration: 0.3 }}
                className="w-10 h-10 rounded-full border border-glass-border flex items-center justify-center shrink-0 ml-6 group-hover:border-amber transition-colors"
              >
                <Plus className={`w-5 h-5 ${openIndex === i ? 'text-amber' : 'text-cream'}`} />
              </motion.div>
            </button>
            
            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <div className="pb-8 pr-12 font-sans text-steel font-light leading-relaxed">
                    {faq.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
