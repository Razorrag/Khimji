import { PageTransition } from '../components/layout/PageTransition';

export function BlogPost() {
  return (
    <PageTransition>
      <div className="pt-32 pb-24 px-[5vw] max-w-[1280px] mx-auto min-h-screen">
        <h1 className="font-bebas text-6xl text-cream mb-4">Blog Post</h1>
        <p className="font-sans text-steel">Full article coming soon.</p>
      </div>
    </PageTransition>
  );
}
