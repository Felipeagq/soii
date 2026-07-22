"use client";

import { useRef, useState } from "react";
import { Icon } from "./Icon";
import { GearMark } from "./GearMark";
import { Reveal } from "./Reveal";
import { videos } from "@/lib/site";

export function VideoShowcase() {
  const refs = useRef<(HTMLVideoElement | null)[]>([]);
  const [playing, setPlaying] = useState<number | null>(null);

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

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
          {videos.map((v, i) => (
            <Reveal key={v.src} delay={i * 100}>
              <div className="group relative mx-auto aspect-[9/16] w-full max-w-[320px] overflow-hidden rounded-xl border border-white/10 shadow-2xl">
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
                      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-gradient text-navy-900 shadow-lg transition-transform duration-300 group-hover:scale-110">
                        <Icon name="play" className="ml-1 h-7 w-7" fill="currentColor" stroke="none" />
                      </span>
                    </span>
                    <span className="relative p-5">
                      <span className="inline-flex rounded-full bg-white/15 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-amber-300 backdrop-blur">
                        {v.tag}
                      </span>
                      <span className="mt-2 block font-display text-lg font-bold text-white">
                        {v.title}
                      </span>
                    </span>
                  </button>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
