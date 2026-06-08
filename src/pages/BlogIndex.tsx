import { PageTransition } from '../components/layout/PageTransition';

export function BlogIndex() {
  return (
    <PageTransition>
      <div className="pt-40 pb-24 px-[5vw] max-w-[1280px] mx-auto min-h-screen">
        <h1 className="font-bebas text-6xl md:text-8xl text-cream mb-4 tracking-wider">The Wire Gazette</h1>
        <p className="font-mono text-amber tracking-widest uppercase mb-16">Technical Insights from the Manufacturing Floor</p>
        <p className="font-sans text-steel text-lg">Articles and insights coming soon.</p>
      </div>
    </PageTransition>
  );
}
