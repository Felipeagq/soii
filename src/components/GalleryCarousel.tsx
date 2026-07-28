"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Icon } from "./Icon";

type Slide = {
  src: string;
  alt: string;
};

type GalleryCarouselProps = {
  slides: Slide[];
  intervalMs?: number;
};

export function GalleryCarousel({ slides, intervalMs = 6000 }: GalleryCarouselProps) {
  const [active, setActive] = useState(0);
  const total = slides.length;

  const goTo = (index: number) => {
    if (total === 0) return;
    setActive((index + total) % total);
  };

  useEffect(() => {
    if (total <= 1) return;
    const timer = window.setInterval(() => {
      setActive((prev) => (prev + 1) % total);
    }, intervalMs);
    return () => window.clearInterval(timer);
  }, [total, intervalMs]);

  if (total === 0) return null;

  const slide = slides[active];

  return (
    <div className="mx-auto max-w-4xl">
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-navy-100 shadow-card sm:aspect-[16/9]">
        {slides.map((item, i) => (
          <Image
            key={item.src}
            src={item.src}
            alt={item.alt}
            fill
            priority={i === 0}
            sizes="(max-width: 1024px) 100vw, 896px"
            className={`absolute inset-0 object-cover transition-opacity duration-500 ease-in-out ${
              i === active ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {total > 1 && (
          <>
            <button
              type="button"
              onClick={() => goTo(active - 1)}
              aria-label="Imagen anterior"
              className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-md border border-white/20 bg-navy-950/40 text-white backdrop-blur transition hover:bg-navy-950/60"
            >
              <Icon name="arrow" className="h-5 w-5 rotate-180" />
            </button>
            <button
              type="button"
              onClick={() => goTo(active + 1)}
              aria-label="Imagen siguiente"
              className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-md border border-white/20 bg-navy-950/40 text-white backdrop-blur transition hover:bg-navy-950/60"
            >
              <Icon name="arrow" className="h-5 w-5" />
            </button>
          </>
        )}

        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-950/80 to-transparent p-5 pt-12">
          <p className="text-sm font-medium text-white sm:text-base">{slide.alt}</p>
        </div>
      </div>

      {total > 1 && (
        <div className="mt-4 flex items-center justify-center gap-6">
          <button
            type="button"
            onClick={() => goTo(active - 1)}
            aria-label="Imagen anterior"
            className="text-sm font-medium text-navy-500 transition hover:text-amber-600"
          >
            Anterior
          </button>
          <p className="text-sm font-medium text-navy-600">
            {active + 1} / {total}
          </p>
          <button
            type="button"
            onClick={() => goTo(active + 1)}
            aria-label="Imagen siguiente"
            className="text-sm font-medium text-navy-500 transition hover:text-amber-600"
          >
            Siguiente
          </button>
        </div>
      )}
    </div>
  );
}
