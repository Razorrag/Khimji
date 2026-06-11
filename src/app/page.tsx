import { Hero } from '@/components/sections/Hero';
import { Products } from '@/components/sections/Products';
import { MarqueeBanner } from '@/components/sections/MarqueeBanner';
import { ProcessTeaser } from '@/components/sections/ProcessTeaser';
import { QualityAssurance } from '@/components/sections/QualityAssurance';
import { IndustriesWeServe } from '@/components/sections/IndustriesWeServe';
import { LeadershipSection } from '@/components/sections/LeadershipSection';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Products />
      <MarqueeBanner />
      <ProcessTeaser />
      <QualityAssurance />
      <IndustriesWeServe />
      <LeadershipSection />
      <WhyChooseUs />
    </>
  );
}
