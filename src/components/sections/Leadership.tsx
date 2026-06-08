import { motion } from 'framer-motion';

export function Leadership() {
  return (
    <section className="relative py-32 bg-transparent overflow-hidden border-t border-glass-border">
      <div className="max-w-[800px] mx-auto px-[5vw] text-center relative z-10">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="absolute -top-10 left-1/2 -translate-x-1/2 font-playfair text-[200px] text-amber opacity-15 leading-none select-none pointer-events-none"
        >
          &ldquo;
        </motion.div>

        <h3 className="font-mono text-[11px] text-amber tracking-widest uppercase mb-12 relative z-10">Vision & Leadership</h3>
        
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-playfair italic text-2xl md:text-[32px] md:leading-[1.4] text-cream mb-16 relative z-10"
        >
          Our vision is to build a manufacturing organization known for trust, quality, and long-term customer relationships while contributing to India's growing infrastructure and industrial sector.
        </motion.blockquote>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col md:flex-row items-start justify-center gap-12"
        >
          {/* Founder */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4 max-w-[300px]">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full glass-panel flex items-center justify-center overflow-hidden border border-glass-border">
                 <div className="font-bebas text-2xl text-cream pt-1">OA</div>
              </div>
              <div className="text-left">
                <div className="font-sans font-medium text-cream mb-1">Mr. Om Prakash Agarwal</div>
                <div className="font-mono text-[10px] text-amber tracking-widest uppercase">Founder</div>
              </div>
            </div>
            <ul className="text-left font-sans text-xs text-steel space-y-2 mt-2">
              <li className="flex items-start gap-2"><span className="text-amber">▹</span> Deliver high-quality galvanized wire products</li>
              <li className="flex items-start gap-2"><span className="text-amber">▹</span> Maintain consistency in every batch</li>
              <li className="flex items-start gap-2"><span className="text-amber">▹</span> Build long-term customer trust</li>
              <li className="flex items-start gap-2"><span className="text-amber">▹</span> Support India's industrial development</li>
            </ul>
          </div>

          {/* Director */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4 max-w-[300px]">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full glass-panel flex items-center justify-center overflow-hidden border border-glass-border">
                <div className="font-bebas text-2xl text-cream pt-1">MA</div>
              </div>
              <div className="text-left">
                <div className="font-sans font-medium text-cream mb-1">Mr. Mahesh Chand Agarwal</div>
                <div className="font-mono text-[10px] text-amber tracking-widest uppercase">Director</div>
              </div>
            </div>
            <p className="font-sans text-sm text-steel">
              Leading operational excellence, strategic planning, and business growth initiatives while ensuring quality standards remain uncompromised.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
