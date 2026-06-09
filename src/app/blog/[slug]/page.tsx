import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog Post | Khemji Wire',
  description: 'Technical insights from Khemji Wire.',
};

export default function BlogPostPage() {
  return (
    <div className="pt-40 pb-24 px-[5vw] max-w-[1280px] mx-auto min-h-screen">
      <Link href="/blog" className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-steel hover:text-amber transition-colors mb-12">
        <ArrowLeft className="w-4 h-4" />
        Back to Blog
      </Link>
      <h1 className="font-bebas text-6xl text-cream mb-4">Blog Post</h1>
      <p className="font-sans text-steel">Full article coming soon.</p>
    </div>
  );
}
