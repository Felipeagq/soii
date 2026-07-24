"use client";

import { useEffect, useState } from "react";
import { Icon } from "./Icon";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <a
      href="#inicio"
      aria-label="Volver arriba"
      className="fixed bottom-24 right-5 z-40 flex h-11 w-11 items-center justify-center rounded-md border border-navy-200 bg-white text-navy-800 shadow-card transition hover:border-amber-300 hover:text-amber-600"
    >
      <Icon name="arrow" className="h-5 w-5 -rotate-90" />
    </a>
  );
}
