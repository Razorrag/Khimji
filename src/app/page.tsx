import { Hero } from '@/components/sections/Hero';
import { MarqueeBanner } from '@/components/sections/MarqueeBanner';
import { StatsBar } from '@/components/sections/StatsBar';
import { Products } from '@/components/sections/Products';
import { CertificationsBanner } from '@/components/sections/CertificationsBanner';
import { ProcessTeaser } from '@/components/sections/ProcessTeaser';
import { About } from '@/components/sections/About';
import { Industries } from '@/components/sections/Industries';

export default function HomePage() {
  return (
    <>
      <Hero />
      <MarqueeBanner />
      <StatsBar />
      <Products />
      <CertificationsBanner />
      <ProcessTeaser />
      <About />
      <Industries />
    </>
  );
}
