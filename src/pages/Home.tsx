import { Hero } from '../components/sections/Hero';
import { MarqueeBanner } from '../components/sections/MarqueeBanner';
import { StatsBar } from '../components/sections/StatsBar';
import { Products } from '../components/sections/Products';
import { Manufacturing } from '../components/sections/Manufacturing';
import { About } from '../components/sections/About';
import { Industries } from '../components/sections/Industries';
import { PageTransition } from '../components/layout/PageTransition';
import { SEOHead } from '../components/layout/SEOHead';

export function Home() {
  return (
    <PageTransition>
      <SEOHead 
        title="GI Wire Manufacturer in Jaipur | IS 280 & IS 3975 Certified | Khemji Wire"
        description="Khemji Wire & Wire Pvt. Ltd. — Leading manufacturer of Galvanized Iron (GI) Wire, Hot Dip Galvanized MS Wire & Cable Armouring Wire in Jaipur, Rajasthan."
        keywords="GI wire manufacturer Jaipur, galvanized iron wire Rajasthan, hot dip galvanized wire India"
      />
      <Hero />
      <MarqueeBanner />
      <StatsBar />
      <Products />
      <About />
      <Industries />
    </PageTransition>
  );
}

