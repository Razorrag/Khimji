import { PageTransition } from '../components/layout/PageTransition';
import { About } from '../components/sections/About';
import { Leadership } from '../components/sections/Leadership';

export function AboutPage() {
  return (
    <PageTransition>
      <About />
      <Leadership />
    </PageTransition>
  );
}
