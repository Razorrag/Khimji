import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed right-0 top-0 w-1.5 h-full bg-gradient-to-b from-amber-dim via-amber to-amber-dim origin-top z-[999] shadow-[0_0_15px_rgba(234,88,12,0.5)]"
      style={{ scaleY }}
    />
  );
}
