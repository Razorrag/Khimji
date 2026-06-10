import { BLOG_POSTS } from '@/lib/blog-data';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, ChevronRight } from 'lucide-react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  
  return {
    title: post.title,
    description: post.meta,
    alternates: {
      canonical: `https://www.khemjiwire.in/blog/${slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.meta,
    "datePublished": "2026-06-09T12:00:00+05:30",
    "dateModified": "2026-06-09T12:00:00+05:30",
    "author": {
      "@type": "Organization",
      "name": "Khemji Wire & Wire Pvt. Ltd.",
      "url": "https://www.khemjiwire.in"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Khemji Wire & Wire Pvt. Ltd.",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.khemjiwire.in/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.khemjiwire.in/blog/${slug}`
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      
      <article className="pt-40 pb-24 px-[5vw] max-w-[900px] mx-auto min-h-[100svh]">
        {/* Back Link */}
        <div className="mb-12 flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-steel/60">
          <Link href="/blog" className="hover:text-amber transition-colors flex items-center gap-1.5">
            <ArrowLeft className="w-3.5 h-3.5" />
            The Gazette
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-steel/30" />
          <span className="font-bold truncate max-w-[200px] md:max-w-none"
                style={{ color: "rgba(249,115,22,0.8)" }}>{post.category}</span>
        </div>

        {/* Title */}
        <h1 className="font-bebas text-5xl md:text-7xl text-cream mb-8 leading-tight tracking-wide border-b border-glass-border/30 pb-6">
          {post.title}
        </h1>

        {/* Post Meta */}
        <div className="flex flex-wrap items-center gap-6 font-mono text-[10px] md:text-xs tracking-widest uppercase text-steel/60 mb-16">
          <span className="px-3 py-1 text-amber border rounded-full"
                style={{ backgroundColor: "rgba(249,115,22,0.1)", borderColor: "rgba(249,115,22,0.2)" }}>{post.category}</span>
          <span className="flex items-center gap-2"><Calendar className="w-3.5 h-3.5" />{post.date}</span>
          <span className="flex items-center gap-2"><Clock className="w-3.5 h-3.5" />{post.readTime}</span>
        </div>

        {/* Content Container */}
        <div className="overflow-x-auto -mx-[5vw] px-[5vw]">
          <div 
            className="prose-custom font-sans font-light text-steel/90 text-base md:text-lg leading-relaxed mb-20 min-w-0"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>

        {/* CTA Box */}
        <div className="blob-card p-8 md:p-12 rounded-2xl border border-glass-border flex flex-col md:flex-row items-center justify-between gap-8 mt-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 rounded-full blur-[100px] pointer-events-none"
               style={{ backgroundColor: "rgba(249,115,22,0.05)" }} />
          <div className="relative z-10 text-center md:text-left">
            <h4 className="font-mono text-xs text-amber tracking-widest uppercase mb-3">Need Technical Advice?</h4>
            <p className="font-sans text-sm text-steel leading-relaxed max-w-[400px]">
              Our engineers can guide you through IS 280 & IS 3975 specifications for your bulk requirements.
            </p>
          </div>
          <Link href="/contact" className="blob-btn font-mono text-xs tracking-widest uppercase font-bold px-8 py-4 inline-flex items-center justify-center relative z-10 whitespace-nowrap">
            Consult An Engineer
          </Link>
        </div>
      </article>

      {/* Embedded CSS for Rich Blog Content Styling */}
      <style dangerouslySetInnerHTML={{ __html: `
        .prose-custom h2 {
          font-family: var(--font-bebas);
          font-size: 2.25rem;
          color: var(--color-cream);
          margin-top: 3rem;
          margin-bottom: 1.25rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          line-height: 1.1;
        }
        .prose-custom h3 {
          font-family: var(--font-bebas);
          font-size: 1.75rem;
          color: var(--color-amber);
          margin-top: 2.5rem;
          margin-bottom: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .prose-custom p {
          margin-bottom: 1.5rem;
        }
        .prose-custom ul {
          list-style-type: disc;
          padding-left: 1.5rem;
          margin-top: 1rem;
          margin-bottom: 1.5rem;
        }
        .prose-custom li {
          margin-bottom: 0.5rem;
          padding-left: 0.25rem;
        }
        .prose-custom table {
          border-collapse: collapse;
          width: 100%;
          margin: 2rem 0;
          font-size: 0.875rem;
        }
        .prose-custom th {
          border-bottom: 2px solid var(--color-glass-border);
          padding: 0.75rem 1rem;
          color: var(--color-cream);
          font-weight: 600;
          text-align: left;
        }
        .prose-custom td {
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          padding: 0.75rem 1rem;
          color: var(--color-steel);
        }
        .prose-custom tr:hover td {
          color: var(--color-cream);
          background-color: rgba(255, 255, 255, 0.02);
        }
        .prose-custom strong {
          color: var(--color-cream);
          font-weight: 600;
        }
      `}} />
    </>
  );
}
