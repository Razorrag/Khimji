"use client";

import { useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const qualityAssurance = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6"><circle cx="12" cy="12" r="9"/><path d="M12 8v4l3 3" strokeLinecap="round"/></svg>
    ),
    title: "Raw Material Inspection",
    desc: "Raw materials are thoroughly inspected to ensure quality is maintained before production begins."
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6"><path d="M20 7l-8-4-8 4m16 0v10l-8 4m0-10L4 7m8 4v10" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
    title: "In-Process Testing",
    desc: "Regular testing during the manufacturing process to verify adherence to specifications at every stage."
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
    title: "Final Inspection",
    desc: "Comprehensive quality checks on finished products, including dimensions, surface finish, and mechanical properties."
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6"><path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
    title: "Certifications",
    desc: "Our products are certified in terms of quality and performance, meeting IS 280 and IS 3975 standards."
  }
];

const afterSaleServices = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
    title: "Accountability",
    desc: "We assume full responsibility for any quality deficiencies and commit to prompt resolution."
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><path d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round"/><path d="M12 9v4m0 4h.01" strokeLinecap="round"/></svg>
    ),
    title: "Customer Support",
    desc: "Our dedicated support team is available to address any inquiries or concerns you may have."
  }
];

const differentiators = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7"><path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
    title: "Manufacturing Facility",
    desc: "State-of-the-art facilities producing high-quality wires with precision and consistency. Our RIICO plant operates with advanced continuous galvanizing technology."
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7"><path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
    title: "Proven Industry Expertise",
    desc: "Over 30+ years of experience delivering trusted solutions across infrastructure, power, and industrial sectors throughout India."
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7"><path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
    title: "Commitment To Quality & Sustainability",
    desc: "Strict quality control, certified processes, and eco-conscious practices that meet global standards."
  }
];

export function Quality() {
  const containerRef = useRef<HTMLElement>(null);

  return (
    <section ref={containerRef} className="relative bg-transparent overflow-hidden">

      {/* ───── Hero ───── */}
      <div className="relative pt-36 pb-20 bg-transparent">
        <div className="absolute inset-0 bg-gradient-to-b from-amber/[0.02] via-transparent to-transparent pointer-events-none" />
        <div className="max-w-[1280px] mx-auto px-5 md:px-[5vw]">
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <ol className="flex items-center gap-2 font-mono text-[10px] md:text-xs uppercase tracking-widest text-steel">
              <li><Link href="/" className="hover:text-amber transition-colors">Home</Link></li>
              <li style={{ color: "rgba(249,115,22,0.4)" }}>/</li>
              <li className="text-cream">Quality</li>
            </ol>
          </motion.nav>

          <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
            <div className="max-w-[620px]">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "60px" }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="h-[2px] bg-amber mb-6"
              />
              <h1 className="font-bebas text-[clamp(56px,8vw,120px)] leading-[0.85] text-cream mb-4">
                Quality<br/>
                <span className="text-amber">Assurance</span>
              </h1>
              <p className="font-sans text-sm md:text-base text-white/60 leading-relaxed">
                At every stage of production, we prioritise quality to deliver products and services that meet or exceed industry standards.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex-shrink-0 blob-card p-5 rounded-xl border border-white/10 text-center"
            >
              <div className="font-bebas text-3xl text-amber leading-none">30+</div>
              <div className="font-mono text-[9px] text-white/50 tracking-widest uppercase mt-1">Years of Excellence</div>
              <div className="mt-3 pt-3 border-t border-white/10">
                <div className="flex items-center justify-center gap-3">
                  <span className="px-2.5 py-1 rounded border border-white/20 font-mono text-[8px] text-white/60 uppercase tracking-wider">IS 280</span>
                  <span className="px-2.5 py-1 rounded border border-white/20 font-mono text-[8px] text-white/60 uppercase tracking-wider">IS 3975</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ───── Quality Assurance ───── */}
      <div className="py-20 bg-transparent border-t border-glass-border">
        <div className="max-w-[1280px] mx-auto px-5 md:px-[5vw]">
          <div className="mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="h-[2px] w-8 bg-amber" />
                <span className="font-mono text-[10px] text-amber/80 tracking-[0.3em] uppercase">Our Process</span>
              </div>
              <h2 className="font-bebas text-[clamp(38px,5vw,64px)] leading-[0.85] text-cream uppercase">
                Quality <span className="text-amber">Assurance</span>
              </h2>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {qualityAssurance.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="blob-card p-6 md:p-7 rounded-xl border border-white/10 group hover:border-amber/20 transition-all duration-400"
              >
                <div className="w-12 h-12 rounded-xl border border-amber/20 bg-amber/[0.05] flex items-center justify-center text-amber group-hover:bg-amber/[0.1] group-hover:border-amber/40 transition-all duration-400 mb-4">
                  {item.icon}
                </div>
                <h3 className="font-bebas text-lg md:text-xl text-cream tracking-wide uppercase mb-2">{item.title}</h3>
                <p className="font-sans text-[12px] md:text-[13px] text-white/60 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ───── After-Sale Services ───── */}
      <div className="py-20 bg-transparent border-t border-glass-border relative">
        <div className="absolute inset-0 bg-gradient-to-r from-amber/[0.01] via-transparent to-transparent pointer-events-none" />
        <div className="max-w-[1280px] mx-auto px-5 md:px-[5vw] relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="h-[2px] w-8 bg-amber" />
                <span className="font-mono text-[10px] text-amber/80 tracking-[0.3em] uppercase">Beyond Delivery</span>
              </div>
              <h2 className="font-bebas text-[clamp(38px,5vw,56px)] leading-[0.85] text-cream uppercase mb-6">
                After-Sale <span className="text-amber">Services</span>
              </h2>
              <p className="font-sans text-sm md:text-base text-white/60 leading-relaxed mb-8">
                We are committed towards providing dedicated customer support at every stage of the purchase journey.
              </p>
              <div className="flex flex-col gap-5">
                {afterSaleServices.map((service, i) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-lg border border-amber/20 bg-amber/[0.05] flex items-center justify-center text-amber flex-shrink-0 mt-0.5">
                      {service.icon}
                    </div>
                    <div>
                      <h4 className="font-bebas text-base md:text-lg text-cream tracking-wide uppercase mb-1">{service.title}</h4>
                      <p className="font-sans text-[12px] md:text-[13px] text-white/55 leading-relaxed">{service.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="blob-card p-8 md:p-10 rounded-2xl border border-white/10"
            >
              <div className="font-bebas text-5xl md:text-6xl text-amber leading-none mb-4">100%</div>
              <div className="font-mono text-[10px] text-white/50 tracking-widest uppercase mb-6">Customer Satisfaction Commitment</div>
              <p className="font-sans text-[13px] text-white/60 leading-relaxed">
                Every order is backed by our quality guarantee. If a product does not meet the agreed specifications, we replace it at no additional cost. Our team is just a call away.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ───── What Sets Us Apart ───── */}
      <div className="py-20 bg-transparent border-t border-glass-border relative">
        <div className="max-w-[1280px] mx-auto px-5 md:px-[5vw]">
          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-10 items-end mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="hidden lg:block aspect-[3/4] rounded-xl overflow-hidden order-1"
            >
              <img src="/more%20images/1.jpeg" alt="Khemji Wire quality manufacturing" loading="lazy" className="w-full h-full object-cover grayscale contrast-125 brightness-90" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="order-2"
            >
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-3 mb-3">
                  <div className="h-[2px] w-8 bg-amber" />
                  <span className="font-mono text-[10px] text-amber/80 tracking-[0.3em] uppercase">Why Choose Us</span>
                  <div className="h-[2px] w-8 bg-amber" />
                </div>
                <h2 className="font-bebas text-[clamp(38px,5vw,64px)] leading-[0.85] text-cream uppercase">
                  What Sets Us <span className="text-amber">Apart</span>
                </h2>
                <p className="font-sans text-sm md:text-base text-white/50 max-w-[600px] mt-4 leading-relaxed">
                  At Khemji Wire we go beyond manufacturing \u2014 we create dependable solutions that power progress and build lasting partnerships.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {differentiators.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="blob-card p-7 md:p-8 rounded-xl border border-white/10 group hover:border-amber/20 transition-all duration-400 text-center"
              >
                <div className="w-14 h-14 rounded-xl border border-amber/20 bg-amber/[0.05] flex items-center justify-center text-amber mx-auto mb-5 group-hover:bg-amber/[0.1] group-hover:border-amber/40 transition-all duration-400">
                  {item.icon}
                </div>
                <h3 className="font-bebas text-lg md:text-xl text-cream tracking-wide uppercase mb-3">{item.title}</h3>
                <p className="font-sans text-[12px] md:text-[13px] text-white/55 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ───── CTA ───── */}
      <div className="py-20 bg-transparent border-t border-glass-border relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber/[0.02] via-transparent to-transparent pointer-events-none" />
        <div className="max-w-[800px] mx-auto px-5 md:px-[5vw] text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-bebas text-4xl md:text-5xl lg:text-7xl text-cream mb-4 md:mb-6">
              Built on <span className="text-amber">Quality</span>
            </h2>
            <p className="font-sans text-white/60 text-base md:text-lg font-light leading-relaxed mb-8 md:mb-10 max-w-2xl mx-auto">
              From raw material inspection to final dispatch, every coil carries our commitment to excellence.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
              <a href="https://wa.me/919829277869?text=I'm%20interested%20in%20your%20products%20at%20Khemji%20Wire.%20Please%20share%20pricing%20and%20availability." target="_blank" rel="noreferrer" className="blob-btn-product font-mono text-xs tracking-widest uppercase font-bold px-8 py-4 inline-flex items-center justify-center group transition-all duration-300 w-full sm:w-auto">
                <span className="relative z-10">Buy Now</span>
                <span className="ml-3 transition-transform group-hover:translate-x-1">&rarr;</span>
              </a>
              <Link href="/manufacturing" className="glass-btn font-mono text-xs tracking-widest uppercase px-8 py-4 inline-flex items-center justify-center w-full sm:w-auto">
                View Our Process
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
