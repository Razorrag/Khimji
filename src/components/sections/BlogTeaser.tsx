"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { BLOG_POSTS } from '@/lib/blog-data';
import { SplitText } from '../ui/SplitText';

export function BlogTeaser() {
  // Take the 3 latest blog posts
  const recentPosts = BLOG_POSTS.slice(0, 3);

  return (
    <section className="relative py-32 bg-transparent overflow-hidden border-t border-glass-border">
      {/* Background glow */}
       <div className="absolute bottom-10 right-[10%] w-[350px] h-[350px] blur-[90px] rounded-full pointer-events-none"
            style={{ backgroundColor: "rgba(249,115,22,0.05)" }} />

      <div className="max-w-[1280px] mx-auto px-[5vw] relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
          <div>
            <motion.div 
               initial={{ width: 0 }}
               whileInView={{ width: "60px" }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="h-[1px] bg-amber mb-6"
            />
            <h3 className="font-mono text-[11px] text-amber tracking-widest uppercase mb-4">Technical Resources</h3>
            <h2 className="font-bebas text-[clamp(44px,6vw,90px)] leading-[0.85] text-cream uppercase">
              <SplitText text="INDUSTRY KNOWLEDGE" />
            </h2>
          </div>
           <Link href="/blog" className="glass-btn font-mono text-[11px] uppercase tracking-widest px-8 py-4 inline-flex items-center justify-center gap-3 group">
            Read All Articles
            <ArrowRightIcon />
          </Link>
        </div>

        {/* Grid layout */}
        <div className="grid md:grid-cols-3 gap-8">
          {recentPosts.map((post, idx) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group flex flex-col justify-between blob-card p-8 rounded-2xl border border-glass-border hover:border-amber/40 transition-all duration-500 h-full"
            >
              <div>
                {/* Meta details */}
                <div className="flex items-center justify-between font-mono text-[10px] text-steel/60 mb-6">
                  <span className="font-semibold uppercase tracking-wider px-2 py-0.5 rounded"
                        style={{ color: "rgba(249,115,22,0.8)", backgroundColor: "rgba(249,115,22,0.05)", border: "1px solid rgba(249,115,22,0.1)" }}>{post.category}</span>
                  <span>{post.readTime} read</span>
                </div>

                {/* Title */}
                <h4 className="font-sans font-medium text-lg text-cream mb-4 group-hover:text-amber transition-colors duration-300 line-clamp-2 leading-snug">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h4>

                {/* Excerpt */}
                <p className="font-sans text-steel/70 text-[12.5px] leading-relaxed font-light mb-8 line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              {/* Read More Link */}
              <div className="border-t border-glass-border/30 pt-6 mt-auto">
                <Link 
                  href={`/blog/${post.slug}`} 
                  className="font-mono text-[11px] text-cream uppercase tracking-wider flex items-center gap-2 group-hover:text-amber transition-colors"
                >
                  Read Technical Guide
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}

function ArrowRightIcon() {
  return (
    <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  );
}
