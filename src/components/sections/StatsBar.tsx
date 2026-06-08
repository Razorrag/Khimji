import { AnimatedStat } from '../ui/AnimatedStat';
import { motion } from 'framer-motion';

export function StatsBar() {
  return (
    <section className="relative py-24 bg-obsidian border-b border-glass-border overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-[5vw]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          <AnimatedStat value={700} suffix="+" label="Monthly Metric Tons" />
          <AnimatedStat value={15} suffix="+" label="Years of Excellence" />
          <AnimatedStat value={3} label="Core Product Lines" />
          <AnimatedStat value={99} suffix=".9%" label="Production Yield" />
        </div>
      </div>
    </section>
  );
}
