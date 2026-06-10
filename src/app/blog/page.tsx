import type { Metadata } from 'next';
import Link from 'next/link';
import { BLOG_POSTS } from '@/lib/blog-data';
import { SplitText } from '@/components/ui/SplitText';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'The Wire Gazette — GI Wire Industry Insights | Khemji Wire Blog',
  description: 'Technical articles on galvanized wire manufacturing, IS standards, pricing trends, applications, and industry developments from Khemji Wire & Wire Pvt. Ltd.',
  alternates: { canonical: 'https://www.khemjiwire.in/blog' }
};

export default function BlogPage() {
  const featuredPost = BLOG_POSTS[0];
  const otherPosts = BLOG_POSTS.slice(1);

  return (
    <div className="pt-40 pb-24 px-[5vw] max-w-[1280px] mx-auto min-h-screen">
      <div className="mb-20">
        <h1 className="font-bebas text-7xl md:text-[100px] text-cream mb-4 uppercase tracking-wider leading-[0.85]">
          <SplitText text="The Wire" />
          <br />
          <span className="text-amber"><SplitText text="Gazette" delayOffset={0.2} /></span>
        </h1>
        <p className="font-mono text-xs text-steel tracking-widest uppercase mt-8 border-l-[3px] border-amber pl-6 py-1">
          Technical Insights from the Manufacturing Floor
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
        {/* Featured Post - Left/Full */}
        {featuredPost && (
          <div className="lg:col-span-7 flex flex-col">
            <Link href={`/blog/${featuredPost.slug}`} className="group flex-1">
              <div className="glass-panel p-8 md:p-12 rounded-2xl border border-glass-border hover:border-amber/50 transition-all duration-500 h-full flex flex-col justify-between bg-charcoal/40 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-amber/5 rounded-full blur-[120px] pointer-events-none" />
                
                <div>
                  <div className="flex items-center gap-6 font-mono text-[10px] tracking-widest uppercase text-steel/60 mb-6">
                    <span className="px-3 py-1 bg-amber/10 text-amber border border-amber/20 rounded-full">{featuredPost.category}</span>
                    <span className="flex items-center gap-2"><Calendar className="w-3.5 h-3.5" />{featuredPost.date}</span>
                    <span className="flex items-center gap-2"><Clock className="w-3.5 h-3.5" />{featuredPost.readTime}</span>
                  </div>
                  
                  <h2 className="font-bebas text-4xl md:text-5xl text-cream mb-6 leading-tight group-hover:text-amber transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="font-sans text-steel font-light text-base leading-relaxed mb-8">
                    {featuredPost.excerpt}
                  </p>
                </div>

                <div className="font-mono text-xs uppercase tracking-widest text-cream flex items-center justify-between border-t border-glass-border/30 pt-6 group-hover:border-amber/30 transition-colors">
                  <span>Read Technical Article</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:text-amber transition-all duration-300" />
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Other Posts - Right Stack */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          {otherPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
              <div className="glass-panel p-8 rounded-2xl border border-glass-border hover:border-amber/50 transition-all duration-500 bg-charcoal/40 relative overflow-hidden">
                <div className="flex items-center gap-6 font-mono text-[10px] tracking-widest uppercase text-steel/60 mb-4">
                  <span className="px-2.5 py-0.5 bg-white/5 text-steel border border-glass-border rounded-full">{post.category}</span>
                  <span className="flex items-center gap-1.5"><Calendar className="w-3 h-3" />{post.date}</span>
                </div>
                
                <h3 className="font-bebas text-2xl md:text-3xl text-cream mb-3 leading-tight group-hover:text-amber transition-colors">
                  {post.title}
                </h3>
                <p className="font-sans text-sm text-steel/80 font-light line-clamp-2 mb-6">
                  {post.excerpt}
                </p>

                <div className="font-mono text-[10px] uppercase tracking-widest text-cream flex items-center justify-between border-t border-glass-border/30 pt-4 group-hover:border-amber/30 transition-colors">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 group-hover:text-amber transition-all duration-300" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
