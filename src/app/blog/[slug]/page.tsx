import { BLOG_POSTS } from '@/lib/blog-data';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, ChevronRight } from 'lucide-react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { generateBreadcrumbs } from '@/lib/schema';

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

const AUTHOR = {
  name: "Technical Team, Khemji Wire & Wire Pvt. Ltd.",
  credentials: "IS 280 & IS 3975 certified wire manufacturing since 1988",
  url: "https://www.khemjiwire.in/about"
};

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": post.title,
    "description": post.meta,
    "datePublished": post.dateISO,
    "dateModified": post.dateISO,
    "proficiencyLevel": "Expert",
    "dependencies": "IS 280, IS 3975",
    "author": {
      "@type": "Person",
      "name": "Technical Team — Khemji Wire",
      "affiliation": { "@type": "Organization", "name": "Khemji Wire & Wire Pvt. Ltd." }
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbs([{ name: 'Blog', href: '/blog' }, { name: post.title }])) }}
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

        {/* Post Meta with visible machine-readable dates */}
        <div className="flex flex-wrap items-center gap-6 font-mono text-[10px] md:text-xs tracking-widest uppercase text-steel/60 mb-16">
          <span className="px-3 py-1 text-amber border rounded-full"
                style={{ backgroundColor: "rgba(249,115,22,0.1)", borderColor: "rgba(249,115,22,0.2)" }}>{post.category}</span>
          <span className="flex items-center gap-2">
            <Calendar className="w-3.5 h-3.5" />
            <time dateTime={post.dateISO.split('T')[0]}>{post.date}</time>
          </span>
          <span className="flex items-center gap-2"><Clock className="w-3.5 h-3.5" />{post.readTime}</span>
        </div>

        {/* Content Container */}
        <div className="overflow-x-auto -mx-[5vw] px-[5vw]">
          <div 
            className="prose-custom font-sans font-light text-steel/90 text-base md:text-lg leading-relaxed mb-20 min-w-0"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>

        {/* Author Bio Section */}
        <div className="blob-card p-6 md:p-8 rounded-2xl border border-glass-border mb-8">
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <div className="w-14 h-14 rounded-full bg-amber/10 border border-amber/25 flex items-center justify-center flex-shrink-0">
              <span className="font-bebas text-xl text-amber">KW</span>
            </div>
            <div>
              <h4 className="font-mono text-[10px] text-amber tracking-widest uppercase mb-1">Author</h4>
              <p className="font-sans text-sm text-cream font-medium mb-1">{AUTHOR.name}</p>
              <p className="font-sans text-xs text-steel/60">{AUTHOR.credentials}</p>
              <p className="font-sans text-[11px] text-steel/40 italic mt-3">
                This article was reviewed by Khemji Wire&apos;s engineering team and reflects IS 280:2006 and IS 3975:1999 standard requirements.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Box */}
        <div className="blob-card p-8 md:p-12 rounded-2xl border border-glass-border flex flex-col md:flex-row items-center justify-between gap-8 mt-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 rounded-full blur-[100px] pointer-events-none"
               style={{ backgroundColor: "rgba(249,115,22,0.05)" }} />
          <div className="relative z-10 text-center md:text-left">
            <h4 className="font-mono text-xs text-amber tracking-widest uppercase mb-3">Need Technical Advice?</h4>
            <p className="font-sans text-sm text-steel leading-relaxed max-w-[400px]">
              Our engineers can guide you through IS 280 & IS 3975 specifications for your bulk requirements.
            </p>
          </div>
          <Link href="/contact" className="blob-btn-product font-mono text-xs tracking-widest uppercase font-bold px-8 py-4 inline-flex items-center justify-center relative z-10 whitespace-nowrap">
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
        .quick-answer {
          background: rgba(249, 115, 22, 0.06);
          border-left: 4px solid #F97316;
          border-radius: 0.75rem;
          padding: 1.25rem 1.5rem;
          margin-bottom: 2rem;
        }
        .quick-answer strong {
          color: #F97316;
          font-weight: 600;
          text-transform: uppercase;
          font-size: 0.75rem;
          letter-spacing: 0.1em;
          display: block;
          margin-bottom: 0.5rem;
        }
        .quick-answer p {
          color: var(--color-cream);
          font-size: 1rem;
          margin-bottom: 0;
        }
        .key-takeaways {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 0.75rem;
          padding: 1.5rem;
          margin-top: 2.5rem;
          margin-bottom: 2rem;
        }
        .key-takeaways h3 {
          font-family: var(--font-bebas);
          font-size: 1.5rem;
          color: var(--color-amber);
          margin-bottom: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .key-takeaways ul {
          list-style: none;
          padding-left: 0;
          margin: 0;
        }
        .key-takeaways li {
          padding-left: 1.5rem;
          position: relative;
          margin-bottom: 0.75rem;
          color: var(--color-steel);
        }
        .key-takeaways li::before {
          content: "→";
          position: absolute;
          left: 0;
          color: #F97316;
        }
      `}} />
    </>
  );
}
