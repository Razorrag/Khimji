"use client";

import { useState, useEffect } from 'react';

export function AmbientBackground() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  if (isMobile) {
    return (
      <div
        className="fixed inset-0 w-full h-full pointer-events-none -z-10"
        style={{
          background: `
            radial-gradient(ellipse 75% 75% at 95% 95%, rgba(249,115,22,0.65) 0%, rgba(180,60,5,0.3) 35%, transparent 65%),
            radial-gradient(ellipse 50% 50% at 2% 2%, rgba(160,50,5,0.55) 0%, rgba(100,30,3,0.25) 40%, transparent 65%),
            radial-gradient(ellipse 80% 40% at 90% 85%, rgba(249,115,22,0.2) 0%, transparent 50%),
            #060402
          `,
        }}
      />
    );
  }

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none -z-10">
      <img
        src="/mobile-bg - Copy.jpg"
        alt=""
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />
    </div>
  );
}
