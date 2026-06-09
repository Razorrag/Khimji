"use client";

import { motion } from "framer-motion";

export const SplitText = ({ 
  text, 
  delayOffset = 0, 
  className = "" 
}: { 
  text: string; 
  delayOffset?: number;
  className?: string;
}) => {
  return (
    <span className={`overflow-hidden inline-flex ${className}`}>
      {text.split("").map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          initial={{ y: "100%", opacity: 0, rotate: 5 }}
          whileInView={{ y: 0, opacity: 1, rotate: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
            delay: delayOffset + index * 0.03
          }}
          className={`${char === " " ? "w-4 md:w-6" : "inline-block"} origin-bottom`}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
};
