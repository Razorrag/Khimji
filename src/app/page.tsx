import { Hero } from '@/components/sections/Hero';
import { Products } from '@/components/sections/Products';
import { MarqueeBanner } from '@/components/sections/MarqueeBanner';
import { ProcessTeaser } from '@/components/sections/ProcessTeaser';
import { Industries } from '@/components/sections/Industries';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Products />
      <MarqueeBanner />
      <ScrollReveal direction="up" delay={0.1}>
        <ProcessTeaser />
      </ScrollReveal>
      <ScrollReveal direction="up" delay={0.1}>
        <Industries />
      </ScrollReveal>
    </>
  );
}
