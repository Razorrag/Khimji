"use client";

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';

const timeline = [
  { year: '1988', title: 'Foundation', description: 'Shri Om Prakash Agarwal establishes Khemji Wire Industries in Jaipur with a clear vision: to build a manufacturing enterprise rooted in quality and honest business. Operations begin with limited resources but limitless determination.' },
  { year: 'Early 1990s', title: 'Building the Foundation', description: 'The company steadily builds its customer base across Rajasthan, earning a reputation for reliable supply and consistent wire quality. Customer trust becomes the company\'s most valuable asset.' },
  { year: '2000s', title: 'Expansion & Modernization', description: 'Under the growing leadership of Mahesh Agarwal, the company expands manufacturing capabilities, upgrades machinery, and begins supplying to infrastructure and power sector contractors beyond Rajasthan.' },
  { year: 'Incorporation', title: 'Private Limited Registration', description: 'Khemji Wire & Wire Pvt. Ltd. is formally incorporated under the Companies Act (CIN: U51101RJ1988PTC004356), marking a significant milestone in the company\'s institutional growth and governance.' },
  { year: 'BIS Certification', title: 'IS:280 & IS:3975 Certified', description: 'Bureau of Indian Standards certifications for Mild Steel Wire (IS:280) and Formed Wire (IS:3975) validate the company\'s commitment to manufacturing excellence and open doors to government and large infrastructure contracts.' },
  { year: 'Present', title: 'UDYAM Registered MSME', description: 'Registered as UDYAM-RJ-17-0030256, the company continues to grow — supplying HOT DIP Galvanized Wire, MS Wire, and Formed Wire across India from its RIICO Industrial Area facility in Jaipur.' },
];

const coreValues = [
  { num: '01', title: 'Quality First', description: 'Every product we manufacture is held to the same standard — BIS certified, tensile-tested, and consistent. Quality is not a checkbox; it is our identity.', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
  { num: '02', title: 'Integrity', description: 'Honest business practices, transparent dealings, and ethical conduct in every transaction — with customers, suppliers, and partners alike.', icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
  { num: '03', title: 'Reliability', description: 'Our customers depend on us for consistent supply, on-time delivery, and products that perform exactly as expected — every single time.', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
  { num: '04', title: 'Continuous Improvement', description: 'We invest in better processes, better machinery, and better knowledge — because standing still in manufacturing means falling behind.', icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15' },
];

const certifications = [
  { code: 'IS:280', name: 'BIS Certified — Mild Steel Wire', desc: 'Bureau of Indian Standards certification for Mild Steel Wire. Covers tensile strength, elongation, and dimensional tolerances as per Indian national standards.', tag: 'Bureau of Indian Standards' },
  { code: 'IS:3975', name: 'BIS Certified — Formed Wire', desc: 'BIS certification for Mild Steel Stay Wires and Formed Wire products used in power, telecom, and infrastructure applications.', tag: 'Bureau of Indian Standards' },
  { code: 'UDYAM', name: 'MSME Registration', desc: 'Registered Micro, Small & Medium Enterprise under the Government of India\'s UDYAM portal. Eligible for government tenders, MSME benefits, and priority sector supply.', tag: 'Govt. of India · MSME Ministry' },
];

const facilityDetails = [
  { label: 'Location', value: 'F-153, RIICO Industrial Area, Sarna Doongar, Jaipur, Rajasthan' },
  { label: 'Industrial Zone', value: 'RIICO — Rajasthan Industrial & Investment Corporation Zone' },
  { label: 'Core Processes', value: 'Wire Drawing · Annealing · Hot Dip Galvanizing · Wire Forming' },
  { label: 'Product Output', value: 'HDG Wire, MS Wire (Bright & Black Annealed), Formed & Stay Wires' },
  { label: 'Quality Infrastructure', value: 'In-house testing for tensile strength, elongation & zinc coating weight' },
  { label: 'Dispatch Connectivity', value: 'Road & rail access for pan-India logistics from Jaipur' },
  { label: 'Operational Since', value: '1988 — Over 35 years of continuous production' },
];

const teamPillars = [
  { icon: '🏭', title: 'Production Team', desc: 'Skilled operators managing wire drawing, annealing, and hot-dip galvanizing lines — trained for precision and consistency.' },
  { icon: '🔬', title: 'Quality Control', desc: 'Dedicated QC personnel conducting dimensional, tensile, and coating tests on every production batch before dispatch.' },
  { icon: '📦', title: 'Dispatch & Logistics', desc: 'Efficient packing, documentation, and coordination for timely delivery across Rajasthan and pan-India destinations.' },
  { icon: '💼', title: 'Sales & Customer Service', desc: 'Experienced team managing B2B relationships, order processing, and technical support for distributors and contractors.' },
];

export function About() {
  const containerRef = useRef<HTMLElement>(null);

  return (
    <section ref={containerRef} id="about" className="relative overflow-hidden bg-transparent">

      {/* ───── Page Hero ───── */}
      <div className="relative pt-36 pb-20 bg-transparent">
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

          <div className="max-w-[800px]">
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "60px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="h-[2px] bg-amber mb-6"
            />
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
              className="font-sans text-base lg:text-lg text-cream/80 max-w-[600px] leading-relaxed"
            >
              For over three decades, Khemji Wire & Wire Pvt. Ltd. has stood for one thing above all — the integrity of every product we make and every promise we keep.
            </motion.p>
          </div>
        </div>
      </div>

      {/* ───── Our Story / Timeline ───── */}
      <div className="py-24 md:py-32 bg-transparent relative border-t border-glass-border">
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
              From <span className="text-amber">Humble</span> Beginnings to Industry <span className="text-amber">Trust</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left sticky */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:sticky lg:top-32 lg:self-start"
            >
              <p className="font-sans text-base lg:text-lg text-cream/80 leading-relaxed">
                What began as a single entrepreneur&apos;s vision in 1988 has grown into one of Rajasthan&apos;s respected wire manufacturing enterprises. Rooted in <strong className="text-cream font-medium">integrity, craftsmanship, and customer commitment</strong>, our journey is a testament to what consistent effort can build — one strand at a time.
              </p>
            </motion.div>

            {/* Right timeline */}
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-glass-border" />

              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: 0.1 * i }}
                  className="relative mb-14 last:mb-0"
                >
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-amber border-2 border-obsidian z-10" />
                  <div className="pl-14 md:pl-0 md:w-1/2 md:pr-12 md:text-right">
                    <div className="font-bebas text-3xl text-amber mb-2">{item.year}</div>
                    <h3 className="font-bebas text-xl text-cream mb-3 tracking-wider uppercase">{item.title}</h3>
                    <p className="font-sans text-sm text-cream/70 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ───── Vision & Mission ───── */}
      <div className="py-24 md:py-32 bg-transparent relative border-t border-glass-border">
        <div className="max-w-[1280px] mx-auto px-[5vw]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          >
            <h3 className="font-mono text-[11px] text-amber tracking-widest uppercase mb-4">Our Direction</h3>
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
              <div className="w-14 h-14 rounded-lg bg-amber/10 border border-amber/25 flex items-center justify-center mb-8">
                <svg className="w-7 h-7 text-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
              <h3 className="font-bebas text-3xl text-cream mb-6 tracking-wider uppercase">Our Vision</h3>
              <p className="font-sans text-base lg:text-lg text-cream/80 leading-relaxed mb-6">
                To be the <strong className="text-cream font-medium">most trusted wire manufacturer in India</strong> — recognized for the consistent quality of our products, the reliability of our supply, and the integrity of our business conduct.
              </p>
              <p className="font-sans text-sm text-cream/60 leading-relaxed">
                We envision Khemji Wire as a brand synonymous with precision and dependability — from the infrastructure projects that shape India&apos;s future to the everyday industrial applications that keep industries running. Our goal is to grow not just in scale, but in purpose — advancing manufacturing standards, supporting skilled employment, and contributing to India&apos;s industrial self-reliance.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="blob-card p-10 md:p-14 rounded-2xl relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber to-amber/0" />
              <div className="w-14 h-14 rounded-lg bg-amber/10 border border-amber/25 flex items-center justify-center mb-8">
                <svg className="w-7 h-7 text-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-bebas text-3xl text-cream mb-6 tracking-wider uppercase">Our Mission</h3>
              <p className="font-sans text-base lg:text-lg text-cream/80 leading-relaxed mb-6">
                To <strong className="text-cream font-medium">deliver superior quality wire products</strong> through innovation, reliability, and customer-focused solutions — while contributing to the growth of industry and infrastructure across India.
              </p>
              <p className="font-sans text-sm text-cream/60 leading-relaxed">
                We are committed to manufacturing every product to BIS standards, ensuring each coil, spool, and formed wire that leaves our facility meets the expectations of the engineers, contractors, and businesses who depend on it. We achieve this through disciplined processes, ethical partnerships, continuous improvement, and an unwavering respect for the trust our customers place in us.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ───── Leadership ───── */}
      <div className="py-24 md:py-32 bg-transparent relative border-t border-glass-border">
        <div className="max-w-[1280px] mx-auto px-[5vw]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h3 className="font-mono text-[11px] text-amber tracking-widest uppercase mb-4">Our Leadership</h3>
            <h2 className="font-bebas text-[clamp(48px,6vw,80px)] leading-[0.85] text-cream">
              The People Behind <span className="text-amber">Khemji Wire</span>
            </h2>
          </motion.div>

          <div className="flex flex-col gap-8">
            {/* Founder */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="blob-card rounded-2xl overflow-hidden group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-0">
                <div className="relative bg-gradient-to-br from-charcoal to-obsidian flex flex-col items-center justify-center p-10 border-r border-glass-border">
                  <div className="w-32 h-32 rounded-full flex items-center justify-center mb-4"
                       style={{ backgroundColor: "rgba(249,115,22,0.1)", border: "2px solid rgba(249,115,22,0.3)" }}>
                    <span className="font-bebas text-5xl text-amber">OA</span>
                  </div>
                  <div className="font-bebas text-xl text-cream tracking-wider uppercase text-center">Om Prakash Agarwal</div>
                  <div className="font-mono text-[10px] text-amber tracking-widest uppercase mt-1">Founder</div>
                </div>
                <div className="p-8 md:p-10">
                  <div className="font-mono text-[10px] text-amber tracking-widest uppercase mb-3">Founder · Khemji Wire Industries</div>
                  <h3 className="font-bebas text-3xl text-cream tracking-wider uppercase mb-6">Shri Om Prakash Agarwal</h3>
                  <div className="font-sans text-sm text-cream/70 leading-relaxed space-y-4 mb-8">
                    <p>Shri Om Prakash Agarwal founded Khemji Wire Industries with a clear vision, unwavering determination, and a strong belief in the power of hard work. Starting from scratch with limited resources but limitless dedication, he built the foundation of the company through perseverance, integrity, and a commitment to delivering quality products.</p>
                    <p>His entrepreneurial journey reflects the spirit of transforming challenges into opportunities. Through years of consistent effort, disciplined business practices, and a customer-centric approach, he established Khemji Wire Industries as a trusted manufacturer in the wire industry.</p>
                    <p>The values instilled by him — quality, reliability, ethical business conduct, and continuous improvement — remain at the core of the organization.</p>
                  </div>
                  <blockquote className="font-playfair italic text-lg text-cream/90 pl-6"
                              style={{ borderLeft: "3px solid rgba(249,115,22,0.5)" }}>
                    &ldquo;Success is built not by resources alone, but by vision, hard work, and the courage to pursue excellence.&rdquo;
                    <cite className="block mt-3 font-sans not-italic text-[11px] font-semibold tracking-wider uppercase text-amber">— Om Prakash Agarwal, Founder</cite>
                  </blockquote>
                </div>
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
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-0">
                <div className="p-8 md:p-10 order-2 lg:order-1">
                  <div className="font-mono text-[10px] text-amber tracking-widest uppercase mb-3">Director · Khemji Wire & Wire Pvt. Ltd.</div>
                  <h3 className="font-bebas text-3xl text-cream tracking-wider uppercase mb-6">Shri Mahesh Agarwal</h3>
                  <div className="font-sans text-sm text-cream/70 leading-relaxed space-y-4 mb-8">
                    <p>Shri Mahesh Agarwal serves as the Director of Khemji Wire Industries and plays a key role in driving the company&apos;s growth, modernization, and strategic development. Under his leadership, the company has expanded its manufacturing capabilities while maintaining a strong commitment to quality, innovation, and customer service.</p>
                    <p>With extensive experience in the steel wire and galvanizing sector, he has successfully guided the organization towards operational excellence and sustainable growth. His forward-looking approach, combined with a deep understanding of industry requirements, continues to strengthen the company&apos;s position in domestic and emerging markets.</p>
                    <p>His vision for the company encompasses not just product excellence but also building long-term relationships with customers, distributors, and infrastructure partners across India.</p>
                  </div>
                  <blockquote className="font-playfair italic text-lg text-cream/90 pl-6"
                              style={{ borderLeft: "3px solid rgba(249,115,22,0.5)" }}>
                    &ldquo;Our mission is to deliver superior quality wire products through innovation, reliability, and customer-focused solutions while contributing to the growth of industry and infrastructure.&rdquo;
                    <cite className="block mt-3 font-sans not-italic text-[11px] font-semibold tracking-wider uppercase text-amber">— Mahesh Agarwal, Director</cite>
                  </blockquote>
                </div>
                <div className="relative bg-gradient-to-br from-charcoal to-obsidian flex flex-col items-center justify-center p-10 border-l border-glass-border order-1 lg:order-2">
                  <div className="w-32 h-32 rounded-full flex items-center justify-center mb-4"
                       style={{ backgroundColor: "rgba(249,115,22,0.1)", border: "2px solid rgba(249,115,22,0.3)" }}>
                    <span className="font-bebas text-5xl text-amber">MA</span>
                  </div>
                  <div className="font-bebas text-xl text-cream tracking-wider uppercase text-center">Mahesh Agarwal</div>
                  <div className="font-mono text-[10px] text-amber tracking-widest uppercase mt-1">Director</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ───── Core Values ───── */}
      <div className="py-24 md:py-32 bg-transparent relative border-t border-glass-border">
        <div className="max-w-[1280px] mx-auto px-[5vw]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h3 className="font-mono text-[11px] text-amber tracking-widest uppercase mb-4">What We Stand For</h3>
            <h2 className="font-bebas text-[clamp(48px,6vw,80px)] leading-[0.85] text-cream mb-4">
              Our Core <span className="text-amber">Values</span>
            </h2>
            <p className="font-sans text-sm text-cream/60 max-w-[520px] leading-relaxed">
              These are not words on a wall — they are the principles instilled by our founder and practiced in every decision, every batch, every delivery.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="blob-card p-8 rounded-2xl text-center group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber to-amber/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <div className="font-bebas text-5xl text-amber/10 leading-none mb-4 select-none">{value.num}</div>
                <div className="w-14 h-14 mx-auto mb-6 rounded-lg bg-amber/10 border border-amber/25 flex items-center justify-center group-hover:bg-amber/20 transition-colors">
                  <svg className="w-7 h-7 text-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={value.icon} />
                  </svg>
                </div>
                <h3 className="font-bebas text-xl text-cream tracking-wider uppercase mb-3">{value.title}</h3>
                <p className="font-sans text-sm text-cream/70 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ───── Team / Workforce ───── */}
      <div className="py-24 md:py-32 bg-transparent relative border-t border-glass-border">
        <div className="max-w-[1280px] mx-auto px-[5vw]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="font-mono text-[11px] text-amber tracking-widest uppercase mb-4">Our People</h3>
              <h2 className="font-bebas text-[clamp(48px,6vw,80px)] leading-[0.85] text-cream mb-8">
                The <span className="text-amber">Workforce</span> Behind Every Strand
              </h2>
              <p className="font-sans text-base text-cream/80 leading-relaxed mb-10">
                Khemji Wire&apos;s strength lies in its people — skilled workers, experienced supervisors, and a committed management team who share the same belief: that quality is everyone&apos;s responsibility. From the production floor to dispatch, each team member upholds the standards our customers have come to rely on.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { num: '35+', label: 'Years of Operations' },
                  { num: 'MSME', label: 'UDYAM Registered Unit' },
                  { num: 'RIICO', label: 'Industrial Area, Jaipur' },
                  { num: 'PAN India', label: 'Supply Network' },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                    className="blob-card p-5 rounded-xl text-center"
                  >
                    <div className="font-bebas text-2xl text-amber leading-none mb-1">{stat.num}</div>
                    <div className="font-mono text-[9px] text-cream/60 tracking-wider uppercase">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col gap-4"
            >
              {teamPillars.map((pillar, i) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="blob-card p-6 rounded-xl flex items-center gap-5 group hover:border-amber/20 transition-colors"
                >
                  <div className="text-2xl flex-shrink-0">{pillar.icon}</div>
                  <div>
                    <h4 className="font-bebas text-lg text-cream tracking-wider uppercase mb-1">{pillar.title}</h4>
                    <p className="font-sans text-[12px] text-cream/60 leading-relaxed">{pillar.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* ───── Certifications ───── */}
      <div className="py-24 md:py-32 bg-transparent relative border-t border-glass-border">
        <div className="max-w-[1280px] mx-auto px-[5vw]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h3 className="font-mono text-[11px] text-amber tracking-widest uppercase mb-4">Standards & Compliance</h3>
            <h2 className="font-bebas text-[clamp(48px,6vw,80px)] leading-[0.85] text-cream">
              Certifications & <span className="text-amber">Registrations</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.code}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="blob-card p-8 rounded-2xl text-center group"
              >
                <div className="font-bebas text-4xl text-amber mb-4 tracking-wider">{cert.code}</div>
                <h4 className="font-bebas text-lg text-cream tracking-wider uppercase mb-3">{cert.name}</h4>
                <p className="font-sans text-[12px] text-cream/60 leading-relaxed mb-5">{cert.desc}</p>
                <span className="inline-block px-4 py-1.5 border border-amber/30 bg-amber/[0.07] font-mono text-[9px] font-semibold tracking-wider uppercase text-amber">
                  {cert.tag}
                </span>
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
                { label: 'CIN', value: 'U51101RJ1988PTC004356' },
                { label: 'GSTIN', value: '08AAECA7760L1ZA' },
                { label: 'PAN', value: 'AAECA7760L' },
                { label: 'UDYAM No.', value: 'UDYAM-RJ-17-0030256' },
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

      {/* ───── Manufacturing Facility ───── */}
      <div className="py-24 md:py-32 bg-transparent relative border-t border-glass-border">
        <div className="max-w-[1280px] mx-auto px-[5vw]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h3 className="font-mono text-[11px] text-amber tracking-widest uppercase mb-4">Our Infrastructure</h3>
            <h2 className="font-bebas text-[clamp(48px,6vw,80px)] leading-[0.85] text-cream">
              Manufacturing <span className="text-amber">Facility</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-charcoal relative">
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
                      <span className="font-mono text-[10px] text-amber tracking-widest uppercase">F-153, RIICO Industrial Area · Sarna Doongar · Jaipur</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col gap-4"
            >
              {facilityDetails.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  className="blob-card p-5 rounded-xl flex items-start gap-5 border-l-2 border-transparent hover:border-amber transition-colors"
                >
                  <div className="w-2 h-2 rounded-full bg-amber mt-2 flex-shrink-0" />
                  <div>
                    <span className="font-mono text-[10px] text-amber tracking-widest uppercase">{item.label}</span>
                    <p className="font-sans text-sm text-cream/80 mt-1">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* ───── CTA Banner ───── */}
      <div className="py-24 md:py-32 bg-transparent relative">
        <div className="max-w-[1280px] mx-auto px-[5vw]">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl p-12 md:p-20 text-center relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, rgba(249,115,22,0.15) 0%, rgba(249,115,22,0.05) 50%, rgba(249,115,22,0.1) 100%)', border: '1px solid rgba(249,115,22,0.2)' }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-amber/5 via-transparent to-amber/5" />
            <div className="relative z-10">
              <h2 className="font-bebas text-[clamp(40px,5vw,72px)] leading-[0.85] text-cream mb-6">
                Partner with a Manufacturer<br />
                You Can <span className="text-amber">Trust</span>
              </h2>
              <p className="font-sans text-base lg:text-lg text-cream/70 max-w-[540px] mx-auto mb-10">
                Explore our product range or get in touch with our team for pricing and availability.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/products"
                  className="blob-btn font-mono text-xs tracking-widest uppercase font-bold px-8 py-4 inline-flex items-center justify-center"
                >
                  View Products
                </Link>
                <Link
                  href="/contact"
                  className="glass-btn font-mono text-xs tracking-widest uppercase px-8 py-4 inline-flex items-center justify-center"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
