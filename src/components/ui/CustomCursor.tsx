"use client";

import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const springX = useSpring(0, { stiffness: 500, damping: 28, mass: 0.1 });
  const springY = useSpring(0, { stiffness: 500, damping: 28, mass: 0.1 });

  const slowSpringX = useSpring(0, { stiffness: 250, damping: 20, mass: 0.5 });
  const slowSpringY = useSpring(0, { stiffness: 250, damping: 20, mass: 0.5 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      springX.set(e.clientX - 6);
      springY.set(e.clientY - 6);
      slowSpringX.set(e.clientX - 16);
      slowSpringY.set(e.clientY - 16);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-pointer') ||
        target.closest('input') ||
        target.closest('textarea')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible, springX, springY, slowSpringX, slowSpringY]);

  // Hide on touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <>
      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-amber rounded-full pointer-events-none z-[9999] hidden md:block" 
        style={{ x: springX, y: springY }}
        animate={{
          scale: isClicking ? 0.6 : isHovering ? 0.3 : 1,
          opacity: isVisible ? 1 : 0
        }}
        transition={{ scale: { type: 'spring', stiffness: 300, damping: 20 } }}
      />
      
      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-amber/30 rounded-full pointer-events-none z-[9998] hidden md:block"
        style={{ x: slowSpringX, y: slowSpringY }}
        animate={{
          scale: isClicking ? 0.8 : isHovering ? 2 : 1,
          opacity: isVisible ? 1 : 0,
          borderColor: isHovering ? '#F97316' : 'rgba(249, 115, 22, 0.3)',
          backgroundColor: isHovering ? 'rgba(249, 115, 22, 0.05)' : 'rgba(249, 115, 22, 0)'
        }}
        transition={{ 
          scale: { type: 'spring', stiffness: 200, damping: 22 },
          backgroundColor: { duration: 0.2 }
        }}
      />
    </>
  );
}
