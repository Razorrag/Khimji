import { Hero } from '@/components/sections/Hero';
import { Products } from '@/components/sections/Products';
import { MarqueeBanner } from '@/components/sections/MarqueeBanner';
import { ProcessTeaser } from '@/components/sections/ProcessTeaser';
import { QualityAssurance } from '@/components/sections/QualityAssurance';
import { IndustriesWeServe } from '@/components/sections/IndustriesWeServe';
import { FounderSection } from '@/components/sections/FounderSection';
import { LeadershipSection } from '@/components/sections/LeadershipSection';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
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
        <QualityAssurance />
      </ScrollReveal>
      <ScrollReveal direction="up" delay={0.1}>
        <IndustriesWeServe />
      </ScrollReveal>
      <ScrollReveal direction="up" delay={0.1}>
        <FounderSection />
      </ScrollReveal>
      <ScrollReveal direction="up" delay={0.1}>
        <LeadershipSection />
      </ScrollReveal>
      <ScrollReveal direction="up" delay={0.1}>
        <WhyChooseUs />
      </ScrollReveal>
    </>
  );
}
