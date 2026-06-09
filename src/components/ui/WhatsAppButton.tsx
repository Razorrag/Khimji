"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function WhatsAppButton() {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div className="fixed bottom-6 right-6 z-[9990] flex flex-col items-end gap-3 pointer-events-none">
      
      {/* Expanded: Quick message templates */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="glass-panel p-4 rounded-2xl border border-glass-border flex flex-col gap-2 max-w-[220px] pointer-events-auto"
          >
            <p className="font-mono text-[9px] text-steel uppercase tracking-widest mb-2">Quick Enquiry</p>
            {[
              "I need IS 280 GI Wire rates.",
              "I need IS 3975 Cable Armouring.",
              "Please send product catalogue.",
            ].map((msg, i) => (
              <a 
                key={i}
                href={`https://wa.me/919829277869?text=${encodeURIComponent(msg)}`}
                target="_blank"
                rel="noreferrer"
                className="font-sans text-xs text-cream bg-white/5 hover:bg-white/10 border border-glass-border rounded-lg px-3 py-2 transition-colors"
                onClick={() => setIsExpanded(false)}
              >
                {msg}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Main button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_10px_25px_rgba(37,211,102,0.4)] hover:scale-105 transition-transform relative pointer-events-auto group"
      >
        {/* Pulsing ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30 group-hover:opacity-50 transition-opacity" />
        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.57-.187-.988-.365-1.739-.738-2.876-2.508-2.961-2.622-.085-.115-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.115-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.115.433-.505.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.001 3.825-3.113 6.938-6.937 6.938z"/>
        </svg>
      </button>
    </div>
  );
}
