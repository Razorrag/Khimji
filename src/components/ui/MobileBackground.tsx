"use client";

import { useEffect, useState } from 'react';

export function MobileBackground() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  if (!isMobile) return null;

  return (
    <img
      src="/mobile-bg.jpg"
      alt=""
      aria-hidden="true"
      className="fixed inset-0 w-full h-full object-cover pointer-events-none"
      style={{ zIndex: -1 }}
    />
  );
}
