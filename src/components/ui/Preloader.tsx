"use client";

import { useEffect } from 'react';

export function Preloader({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    // Just notify parent immediately — no overlay needed
    // Hero content handles its own delayed reveal
    const timer = setTimeout(onComplete, 100);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return null;
}
