"use client";

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { SplitText } from '../ui/SplitText';

const StatCounter = ({ value, label, suffix = "" }: { value: number; label: string; suffix?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="glass-panel p-3 md:p-6 flex flex-col items-center justify-center text-center backdrop-blur-xl">
      <div className="font-bebas text-3xl md:text-5xl text-cream mb-1 md:mb-2 flex items-center">
        {isInView ? (
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {value}
          </motion.span>
        ) : (
          <span className="opacity-0">{value}</span>
        )}
        <span className="text-amber ml-1">{suffix}</span>
      </div>
      <div className="font-mono text-[10px] md:text-[10px] text-steel tracking-[0.1em] md:tracking-widest uppercase line-clamp-2 md:line-clamp-none">{label}</div>
    </div>
  );
};

const timeline = [
  { year: '1988', title: 'The Foundation', description: 'A small manufacturing unit with a clear vision — produce high-quality galvanized wire for India\'s growing industries. This marked the beginning of a journey built on trust and craftsmanship.' },
  { year: '1990s', title: 'Building the Brand', description: 'Expanded operations, introduced advanced machinery, and built a reputation for quality and timely delivery across North India.' },
  { year: '2000s', title: 'Growing Reputation', description: 'Became a preferred supplier to major cable and infrastructure companies, winning clients through consistent product quality.' },
  { year: '2008', title: 'Incorporation', description: 'Formed as a private limited company to scale operations and meet growing demand with enhanced quality standards.' },
  { year: '2015', title: 'BIS Certification', description: 'Achieved BIS Standard certification for core product lines — a milestone reflecting uncompromising quality control.' },
  { year: 'Present', title: 'Trusted Partner', description: 'Today, we serve 200+ clients across India with an expanded product range, advanced manufacturing, and a commitment to customer satisfaction.' },
];

const coreValues = [
  { title: 'Quality', description: 'Every wire that leaves our facility meets the highest industry standards. We maintain strict quality control at every stage of production.', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
  { title: 'Integrity', description: 'We conduct business with honesty, transparency, and ethical practices — building trust with every client and partner.', icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
  { title: 'Reliability', description: 'On-time delivery, consistent product quality, and responsive service — dependability you can count on.', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
  { title: 'Continuous Improvement', description: 'We constantly upgrade technology, processes, and skills to stay ahead of industry standards and customer expectations.', icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15' },
];

export function About() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const yContent = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <section ref={containerRef} id="about" className="relative overflow-hidden bg-transparent">

      {/* ───── Hero ───── */}
      <div className="relative pt-40 pb-20 bg-transparent">
        <div className="max-w-[1280px] mx-auto px-[5vw]">
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <ol className="flex items-center gap-2 font-mono text-[10px] md:text-xs uppercase tracking-widest text-steel">
              <li><a href="/" className="hover:text-amber transition-colors">Home</a></li>
              <li style={{ color: "rgba(249,115,22,0.4)" }}>/</li>
              <li className="text-cream">About Us</li>
            </ol>
          </motion.nav>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 items-center">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="font-bebas text-[clamp(56px,8vw,120px)] leading-[0.85] text-cream mb-6"
              >
                Built on <span className="text-amber">Trust.</span><br />
                Driven by <span className="text-amber">Purpose.</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-sans text-base lg:text-lg text-steel/90 max-w-[540px]"
              >
                For over 35 years, Khemji Wire & Wire Pvt. Ltd. has been at the forefront of galvanized steel wire manufacturing — building trust, delivering quality, and contributing to India&apos;s industrial growth.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="hidden lg:flex flex-col items-center justify-center"
            >
              <div className="relative w-64 h-64">
                <div className="absolute inset-0 rounded-full animate-[spin_20s_linear_infinite]"
                     style={{ border: "2px solid rgba(249,115,22,0.2)" }} />
                <div className="absolute inset-3 rounded-full border border-glass-border" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="font-bebas text-7xl text-amber leading-none">35+</div>
                    <div className="font-mono text-[10px] text-cream tracking-widest uppercase mt-1">Years of Trust</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ───── Our Story / Timeline ───── */}
      <div className="py-32 bg-transparent relative">
        <div className="max-w-[1280px] mx-auto px-[5vw]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <h3 className="font-mono text-[11px] text-amber tracking-widest uppercase mb-4">Our Journey</h3>
            <h2 className="font-bebas text-[clamp(48px,6vw,80px)] leading-[0.85] text-cream">
              35 Years of <span className="text-amber">Excellence</span>
            </h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-glass-border" />

            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.1 * i }}
                className={`relative flex flex-col md:flex-row items-start gap-8 mb-16 last:mb-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className={`w-full md:w-1/2 ${i % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                  <div className="font-bebas text-3xl text-amber mb-2">{item.year}</div>
                  <h3 className="font-bebas text-2xl text-cream mb-3 tracking-wider uppercase">{item.title}</h3>
                  <p className="font-sans text-sm text-steel/90 leading-relaxed">{item.description}</p>
                </div>

                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-amber border-2 border-obsidian z-10" />

                <div className="w-full md:w-1/2 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ───── About Company (Enhanced) ───── */}
      <div className="py-32 bg-transparent relative">
        <div className="max-w-[1280px] mx-auto px-[5vw] grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden relative group shadow-2xl bg-charcoal">
              <motion.img 
                style={{ y: yImage, scale: 1.1 }}
                src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1200" 
                alt="Khemji Wire Manufacturing Facility" 
                loading="lazy"
                className="w-full h-[120%] object-cover filter grayscale contrast-125 brightness-110 group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-[1.5s]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(18,20,24,0.8)] via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-700" />
              <div className="absolute inset-x-0 bottom-0 p-8 pt-20 bg-gradient-to-t from-obsidian to-transparent">
                 <h4 className="font-bebas text-3xl text-cream tracking-wider">Facility & Excellence</h4>
                 <p className="font-mono text-xs text-amber mt-2 uppercase tracking-widest">Jaipur, India</p>
              </div>
            </div>

            <div className="absolute -bottom-8 -right-8 w-[calc(100%+2rem)] grid grid-cols-3 gap-4">
              <StatCounter value={700} suffix="+" label="MT Capacity" />
              <StatCounter value={1988} label="Est. Year" />
              <StatCounter value={200} suffix="+" label="Clients" />
            </div>
          </motion.div>

          <motion.div
            style={{ y: yContent }}
            initial={{ x: 60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col pt-10 md:pt-0"
          >
            <motion.div 
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="h-[1px] max-w-[100px] mb-6 block"
              style={{ backgroundColor: "rgba(249,115,22,0.5)" }}
            />
            <h3 className="font-mono text-[11px] text-amber tracking-widest uppercase mb-4">About Company</h3>
            <h2 className="font-bebas text-[clamp(48px,6vw,90px)] leading-[0.85] text-cream mb-10 border-l-[3px] border-amber pl-6 py-2 uppercase min-h-[160px]">
              <SplitText text="KHEMJI WIRE" delayOffset={0.1} /> <br />
              <span className="text-steel"><SplitText text="& WIRE PVT. LTD." delayOffset={0.3} /></span>
            </h2>
            <div className="space-y-6 font-sans font-light text-base lg:text-lg text-steel/90 max-w-[480px]">
               <p>
                Founded in 1988 by Mr. Om Prakash Agarwal, Khemji Wire & Wire Pvt. Ltd. has emerged as a trusted manufacturer of galvanized steel wire solutions catering to the cable, infrastructure, and industrial sectors.
              </p>
              <p>
                With a commitment to quality manufacturing and customer satisfaction, we produce wire products that meet stringent Indian standards and industrial performance requirements.
              </p>
            </div>

            <div className="mt-10 grid gap-3 font-mono text-[10px] lg:text-xs uppercase tracking-widest text-cream">
              {['Founded in 1988 — 35+ Years of Trust', 'Manufacturing Capacity: 700+ MT', 'IS Standard Compliant Products', 'Specialized in Cable Armouring Wire', 'Custom Manufacturing Capability'].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-8 h-[1px] bg-glass-border relative overflow-hidden">
                    <motion.div 
                      initial={{ x: "-100%" }}
                      whileInView={{ x: "0%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.6 + i * 0.1 }}
                      className="absolute inset-0 bg-amber" 
                    />
                  </div>
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>

            <motion.a 
              href="#products" 
              className="blob-btn font-mono text-xs tracking-widest uppercase font-bold px-8 py-4 inline-flex items-center justify-center group mt-16 w-fit"
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="font-mono text-xs text-amber tracking-widest uppercase">
                Explore Our Products
              </span>
              <span className="w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                    style={{ backgroundColor: "rgba(249,115,22,0.1)" }}>
                <span className="text-amber group-hover:text-obsidian transition-colors">→</span>
              </span>
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* ───── Vision & Mission ───── */}
      <div className="py-32 bg-transparent relative border-t border-glass-border">
        <div className="max-w-[1280px] mx-auto px-[5vw]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20 text-center"
          >
            <h3 className="font-mono text-[11px] text-amber tracking-widest uppercase mb-4">Our Purpose</h3>
            <h2 className="font-bebas text-[clamp(48px,6vw,80px)] leading-[0.85] text-cream">
              Vision & <span className="text-amber">Mission</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="blob-card p-10 md:p-14 rounded-2xl relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber to-amber/0" />
              <h3 className="font-bebas text-3xl text-amber mb-6 tracking-wider uppercase">Our Vision</h3>
              <p className="font-sans text-base lg:text-lg text-steel/90 leading-relaxed">
                To build a manufacturing organization known for trust, quality, and long-term customer relationships while contributing to India&apos;s growing infrastructure and industrial sector.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="w-12 h-[1px]"
                     style={{ backgroundColor: "rgba(249,115,22,0.5)" }} />
                <span className="font-mono text-[10px] text-amber tracking-widest uppercase">Trusted Since 1988</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="blob-card p-10 md:p-14 rounded-2xl relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber to-amber/0" />
              <h3 className="font-bebas text-3xl text-amber mb-6 tracking-wider uppercase">Our Mission</h3>
              <p className="font-sans text-base lg:text-lg text-steel/90 leading-relaxed">
                To deliver high-quality galvanized wire products with exceptional customer service, maintaining the highest standards of manufacturing excellence while fostering long-term partnerships.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="w-12 h-[1px]"
                     style={{ backgroundColor: "rgba(249,115,22,0.5)" }} />
                <span className="font-mono text-[10px] text-amber tracking-widest uppercase">Quality First</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ───── Leadership ───── */}
      <div className="py-32 bg-transparent relative border-t border-glass-border">
        <div className="max-w-[1280px] mx-auto px-[5vw]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20 text-center"
          >
            <h3 className="font-mono text-[11px] text-amber tracking-widest uppercase mb-4">Our Team</h3>
            <h2 className="font-bebas text-[clamp(48px,6vw,80px)] leading-[0.85] text-cream">
              Leadership <span className="text-amber">Team</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Founder */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="blob-card rounded-2xl overflow-hidden group"
            >
              <div className="relative h-64 bg-gradient-to-br from-charcoal to-obsidian flex items-center justify-center overflow-hidden">
                <div className="w-32 h-32 rounded-full flex items-center justify-center"
                     style={{ backgroundColor: "rgba(249,115,22,0.1)", border: "2px solid rgba(249,115,22,0.3)" }}>
                  <span className="font-bebas text-5xl text-cream pt-1">OA</span>
                </div>
                <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-obsidian to-transparent" />
              </div>
              <div className="p-8 md:p-10">
                <h3 className="font-bebas text-3xl text-cream tracking-wider uppercase mb-1">Mr. Om Prakash Agarwal</h3>
                <p className="font-mono text-[10px] text-amber tracking-widest uppercase mb-6">Founder & Chairman</p>
                <blockquote className="font-playfair italic text-lg text-steel/90 pl-6 mb-6"
                            style={{ borderLeft: "2px solid rgba(249,115,22,0.4)" }}>
                  &ldquo;Quality is never an accident — it is always the result of intelligent effort. We build trust through every wire we produce.&rdquo;
                </blockquote>
                <ul className="space-y-3 font-sans text-sm text-steel/80">
                  <li className="flex items-start gap-3"><span className="text-amber mt-1">▹</span> Founded Khemji Wire in 1988 with a vision to serve India&apos;s industrial growth</li>
                  <li className="flex items-start gap-3"><span className="text-amber mt-1">▹</span> Pioneered quality standards in galvanized wire manufacturing</li>
                  <li className="flex items-start gap-3"><span className="text-amber mt-1">▹</span> Built a reputation for integrity, trust, and customer relationships</li>
                  <li className="flex items-start gap-3"><span className="text-amber mt-1">▹</span> Passionate about contributing to India&apos;s industrial development</li>
                </ul>
              </div>
            </motion.div>

            {/* Director */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="blob-card rounded-2xl overflow-hidden group"
            >
              <div className="relative h-64 bg-gradient-to-br from-charcoal to-obsidian flex items-center justify-center overflow-hidden">
                <div className="w-32 h-32 rounded-full flex items-center justify-center"
                     style={{ backgroundColor: "rgba(249,115,22,0.1)", border: "2px solid rgba(249,115,22,0.3)" }}>
                  <span className="font-bebas text-5xl text-cream pt-1">MA</span>
                </div>
                <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-obsidian to-transparent" />
              </div>
              <div className="p-8 md:p-10">
                <h3 className="font-bebas text-3xl text-cream tracking-wider uppercase mb-1">Mr. Mahesh Chand Agarwal</h3>
                <p className="font-mono text-[10px] text-amber tracking-widest uppercase mb-6">Director</p>
                <blockquote className="font-playfair italic text-lg text-steel/90 pl-6 mb-6"
                            style={{ borderLeft: "2px solid rgba(249,115,22,0.4)" }}>
                  &ldquo;Excellence in manufacturing is not just about meeting standards — it&apos;s about setting them. Every batch tells our story.&rdquo;
                </blockquote>
                <ul className="space-y-3 font-sans text-sm text-steel/80">
                  <li className="flex items-start gap-3"><span className="text-amber mt-1">▹</span> Leading operational excellence and strategic growth initiatives</li>
                  <li className="flex items-start gap-3"><span className="text-amber mt-1">▹</span> Driving process optimization and technology upgrades</li>
                  <li className="flex items-start gap-3"><span className="text-amber mt-1">▹</span> Ensuring quality standards remain uncompromised</li>
                  <li className="flex items-start gap-3"><span className="text-amber mt-1">▹</span> Expanding market reach across India and international markets</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ───── Core Values ───── */}
      <div className="py-32 bg-transparent relative border-t border-glass-border">
        <div className="max-w-[1280px] mx-auto px-[5vw]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20 text-center"
          >
            <h3 className="font-mono text-[11px] text-amber tracking-widest uppercase mb-4">What We Stand For</h3>
            <h2 className="font-bebas text-[clamp(48px,6vw,80px)] leading-[0.85] text-cream">
              Core <span className="text-amber">Values</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="blob-card p-8 rounded-2xl text-center group"
              >
                <div className="w-14 h-14 mx-auto mb-6 rounded-full flex items-center justify-center group-hover:bg-amber/20 transition-colors"
                     style={{ backgroundColor: "rgba(249,115,22,0.1)" }}>
                  <svg className="w-7 h-7 text-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={value.icon} />
                  </svg>
                </div>
                <h3 className="font-bebas text-xl text-cream tracking-wider uppercase mb-3">{value.title}</h3>
                <p className="font-sans text-sm text-steel/80 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ───── Manufacturing Facility ───── */}
      <div className="py-32 bg-transparent relative border-t border-glass-border">
        <div className="max-w-[1280px] mx-auto px-[5vw] grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-mono text-[11px] text-amber tracking-widest uppercase mb-4">Our Infrastructure</h3>
            <h2 className="font-bebas text-[clamp(48px,6vw,80px)] leading-[0.85] text-cream mb-8">
              Manufacturing <span className="text-amber">Facility</span>
            </h2>

            <div className="space-y-6">
              {[
                { label: 'Location', value: 'Jaipur, Rajasthan, India' },
                { label: 'Industrial Zone', value: 'RIICO Industrial Area' },
                { label: 'Key Processes', value: 'Drawing, Galvanizing, Annealing' },
                { label: 'Monthly Output', value: '700+ MT of GI Wire' },
                { label: 'Quality Control', value: 'In-house Lab, IS Standard Testing' },
                { label: 'Dispatch', value: 'PAN India Logistics Network' },
                { label: 'Established', value: '1988' },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  className="flex items-start gap-4"
                >
                  <div className="w-2 h-2 rounded-full bg-amber mt-2 flex-shrink-0" />
                  <div>
                    <span className="font-mono text-[10px] text-amber tracking-widest uppercase">{item.label}</span>
                    <p className="font-sans text-sm text-cream/90 mt-1">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
             <div className="aspect-square rounded-2xl overflow-hidden bg-charcoal">
              <img
                src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1200"
                alt="Khemji Wire Manufacturing Facility"
                loading="lazy"
                className="w-full h-full object-cover filter grayscale contrast-125 brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                 <div className="blob-card rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-2 h-2 rounded-full bg-amber animate-pulse" />
                    <span className="font-mono text-[10px] text-amber tracking-widest uppercase">Facility Highlights</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="font-bebas text-2xl text-cream">700+</div>
                      <div className="font-mono text-[9px] text-steel tracking-widest uppercase">MT/Month</div>
                    </div>
                    <div>
                      <div className="font-bebas text-2xl text-cream">1988</div>
                      <div className="font-mono text-[9px] text-steel tracking-widest uppercase">Established</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ───── Certifications ───── */}
      <div className="py-32 bg-transparent relative border-t border-glass-border">
        <div className="max-w-[1280px] mx-auto px-[5vw]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          >
            <h3 className="font-mono text-[11px] text-amber tracking-widest uppercase mb-4">Quality Assurance</h3>
            <h2 className="font-bebas text-[clamp(48px,6vw,80px)] leading-[0.85] text-cream">
              Our <span className="text-amber">Certifications</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            {[
              { name: 'IS:280', desc: 'Galvanized Iron Wire' },
              { name: 'IS:3975', desc: 'Steel Wire for Armouring' },
              { name: 'UDYAM', desc: 'MSME Registration' },
            ].map((cert, i) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="certification-stamp text-center"
              >
                {cert.name}
                <p className="font-mono text-[9px] text-steel/70 mt-1 tracking-wider">{cert.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="blob-card rounded-xl p-6 md:p-8"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { label: 'CIN', value: 'U27219RJ2008PTC026566' },
                { label: 'GSTIN', value: '08AABCK0105A1ZY' },
                { label: 'PAN', value: 'AABCK0105A' },
                { label: 'UDYAM No.', value: 'UDYAM-RJ-06-0001234' },
              ].map((item) => (
                <div key={item.label}>
                  <div className="font-mono text-[9px] text-amber tracking-widest uppercase mb-2">{item.label}</div>
                  <div className="font-mono text-[10px] md:text-xs text-cream/80 break-all">{item.value}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ───── CTA Banner ───── */}
      <div className="py-32 bg-transparent relative">
        <div className="max-w-[1280px] mx-auto px-[5vw]">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="blob-card rounded-2xl p-12 md:p-20 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-amber/5 via-transparent to-amber/5" />
            <div className="relative z-10">
              <h2 className="font-bebas text-[clamp(40px,5vw,72px)] leading-[0.85] text-cream mb-6">
                Partner with a Manufacturer<br />
                You Can <span className="text-amber">Trust</span>
              </h2>
              <p className="font-sans text-base lg:text-lg text-steel/80 max-w-[540px] mx-auto mb-10">
                With 35+ years of experience, IS-certified quality, and a commitment to customer satisfaction — we&apos;re ready to be your trusted wire manufacturing partner.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="/products"
                  className="blob-btn font-mono text-xs tracking-widest uppercase font-bold px-8 py-4 inline-flex items-center justify-center"
                >
                  View Products
                </a>
                <a
                  href="/contact"
                  className="glass-btn font-mono text-xs tracking-widest uppercase px-8 py-4 inline-flex items-center justify-center"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}