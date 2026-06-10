"use client";

import { useState } from 'react';
import { SplitText } from '@/components/ui/SplitText';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import { ALL_FAQS } from '@/lib/faq-data';

const TABS = ["All", "Products", "Ordering", "Quality", "Technical"];

export function FAQClient() {
  const [activeTab, setActiveTab] = useState("All");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filteredFaqs = ALL_FAQS.filter(
    (faq) => activeTab === "All" || faq.group === activeTab
  );

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="pt-40 pb-24 px-[5vw] max-w-[1000px] mx-auto min-h-[100svh]">
      <div className="mb-16">
        <h1 className="font-bebas text-6xl md:text-[100px] text-cream mb-6 tracking-wider uppercase leading-[0.85]">
          <SplitText text="FREQUENTLY" /> <br/>
          <span className="text-amber"><SplitText text="ASKED" delayOffset={0.2} /></span>
        </h1>
        <p className="font-sans text-steel text-base md:text-lg font-light max-w-[600px] leading-relaxed border-l-[3px] border-amber pl-6 py-1">
          Technical specifications, ordering processes, standard requirements, and quality validations. Filter by category below.
        </p>
      </div>

      {/* Categories Tabs */}
      <div className="flex gap-3 overflow-x-auto pb-6 mb-12 scrollbar-none border-b border-glass-border/30 -mx-[5vw] px-[5vw] md:mx-0 md:px-0">
        {TABS.map((tab) => {
          const isActive = activeTab === tab;
          return (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setOpenIndex(null); // Close active accordion
              }}
              className={`font-mono text-xs uppercase tracking-widest whitespace-nowrap transition-all duration-300 ${
                isActive
                  ? "blob-btn font-mono text-xs tracking-widest uppercase font-bold px-5 py-3 inline-flex items-center justify-center"
                  : "glass-btn font-mono text-xs tracking-widest uppercase px-5 py-3 inline-flex items-center justify-center"
              }`}
            >
              {tab}
            </button>
          );
        })}
      </div>

      {/* Accodions list */}
      <div className="flex flex-col border-t border-glass-border/30 min-h-[400px]">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="border-b border-glass-border/30 overflow-hidden">
                <button
                  className="w-full flex items-center justify-between py-6 text-left group"
                  onClick={() => handleToggle(i)}
                >
                   <span className={`font-bebas text-2xl md:text-3xl tracking-wide transition-colors duration-300 ${isOpen ? 'text-amber' : 'text-cream'}`}>
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-8 h-8 rounded-full border border-glass-border flex items-center justify-center shrink-0 ml-4 group-hover:border-amber transition-colors"
                  >
                    <Plus className={`w-4 h-4 ${isOpen ? 'text-amber' : 'text-cream'}`} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="pb-6 pr-8 font-sans text-sm md:text-base text-steel leading-relaxed font-light">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })
        ) : (
          <div className="py-20 text-center font-mono text-xs text-steel/60 uppercase tracking-widest">
            No results found.
          </div>
        )}
      </div>
    </div>
  );
}
