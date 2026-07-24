"use client";

import { useRef, useState } from "react";
import { Icon } from "./Icon";
import { GearMark } from "./GearMark";
import { Reveal } from "./Reveal";
import { videos } from "@/lib/site";

const PER_PAGE = 2;

export function VideoShowcase() {
  const refs = useRef<(HTMLVideoElement | null)[]>([]);
  const [playing, setPlaying] = useState<number | null>(null);
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(videos.length / PER_PAGE);
  const start = page * PER_PAGE;
  const visible = videos.slice(start, start + PER_PAGE);

  const pauseAll = () => {
    refs.current.forEach((v) => v?.pause());
    setPlaying(null);
  };

  const goTo = (next: number) => {
    pauseAll();
    setPage((next + totalPages) % totalPages);
  };

  const handlePlay = (i: number) => {
    const vid = refs.current[i];
    if (!vid) return;
    refs.current.forEach((v, idx) => {
      if (v && idx !== i) v.pause();
    });
    void vid.play();
    setPlaying(i);
  };

  return (
    <section
      id="videos"
      className="relative overflow-hidden bg-navy-gradient py-20 lg:py-28"
    >
      <div className="gear-pattern absolute inset-0 opacity-20" />
      <GearMark className="absolute -right-20 top-10 h-72 w-72 opacity-[0.07] animate-spin-slow" />

      <div className="container-x relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center text-amber-400">
            <span className="h-px w-8 bg-amber-500" /> Nuestro trabajo en video
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-[2.75rem]">
            Míranos <span className="text-amber-400">en acción</span>
          </h2>
          <p className="mt-4 text-white/65">
            Fachadas, adecuaciones y trabajos a la medida. Historias reales de
            proyectos ejecutados por nuestro equipo.
          </p>
        </Reveal>

        <Reveal className="relative mt-14">
          {totalPages > 1 && (
            <>
              <button
                type="button"
                onClick={() => goTo(page - 1)}
                aria-label="Videos anteriores"
                className="absolute -left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-md border border-white/20 bg-navy-950/50 text-white backdrop-blur transition hover:bg-navy-950/70 sm:-left-4 lg:-left-12"
              >
                <Icon name="arrow" className="h-5 w-5 rotate-180" />
              </button>
              <button
                type="button"
                onClick={() => goTo(page + 1)}
                aria-label="Videos siguientes"
                className="absolute -right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-md border border-white/20 bg-navy-950/50 text-white backdrop-blur transition hover:bg-navy-950/70 sm:-right-4 lg:-right-12"
              >
                <Icon name="arrow" className="h-5 w-5" />
              </button>
            </>
          )}

          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {visible.map((v, localIndex) => {
              const i = start + localIndex;
              return (
                <div
                  key={v.src}
                  className="group relative mx-auto aspect-[9/16] w-full max-w-[320px] overflow-hidden rounded-xl border border-white/10 shadow-2xl"
                >
                  <video
                    ref={(el) => {
                      refs.current[i] = el;
                    }}
                    src={v.src}
                    poster={v.poster}
                    preload="none"
                    playsInline
                    loop
                    controls={playing === i}
                    className="h-full w-full object-cover"
                  />

                  {playing !== i && (
                    <button
                      type="button"
                      onClick={() => handlePlay(i)}
                      aria-label={`Reproducir: ${v.title}`}
                      className="absolute inset-0 flex flex-col justify-end text-left"
                    >
                      <span className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/10 to-navy-950/20 transition-opacity group-hover:from-navy-950/90" />
                      <span className="absolute inset-0 flex items-center justify-center">
                        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-gradient text-navy-900 shadow-lg transition-transform duration-300 group-hover:scale-110 sm:h-16 sm:w-16">
                          <Icon
                            name="play"
                            className="ml-1 h-6 w-6 sm:h-7 sm:w-7"
                            fill="currentColor"
                            stroke="none"
                          />
                        </span>
                      </span>
                      <span className="relative p-3 sm:p-5">
                        <span className="inline-flex rounded-full bg-white/15 px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-wide text-amber-300 backdrop-blur sm:px-3 sm:py-1 sm:text-[0.65rem]">
                          {v.tag}
                        </span>
                        <span className="mt-1.5 block font-display text-sm font-bold text-white sm:mt-2 sm:text-lg">
                          {v.title}
                        </span>
                      </span>
                    </button>
                  )}
                </div>
              );
            })}
          </div>

          {totalPages > 1 && (
            <div className="mt-6 flex items-center justify-center gap-6">
              <button
                type="button"
                onClick={() => goTo(page - 1)}
                className="text-sm font-medium text-white/60 transition hover:text-amber-400"
              >
                Anterior
              </button>
              <p className="text-sm font-medium text-white/80">
                {page + 1} / {totalPages}
              </p>
              <button
                type="button"
                onClick={() => goTo(page + 1)}
                className="text-sm font-medium text-white/60 transition hover:text-amber-400"
              >
                Siguiente
              </button>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
