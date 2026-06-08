import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { Products } from '../components/sections/Products';
import { Manufacturing } from '../components/sections/Manufacturing';
import { Quality } from '../components/sections/Quality';
import { Industries } from '../components/sections/Industries';
import { Leadership } from '../components/sections/Leadership';
import { Contact } from '../components/sections/Contact';
import { PageTransition } from '../components/layout/PageTransition';

export function Home() {
  return (
    <PageTransition>
      <Hero />
      <About />
      <Products />
      <Manufacturing />
      <Quality />
      <Industries />
      <Leadership />
      <Contact />
    </PageTransition>
  );
}
