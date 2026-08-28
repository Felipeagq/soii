import { Icon } from "./Icon";
import { GearMark } from "./GearMark";
import { HeroCarousel } from "./HeroCarousel";
import { heroSlides, site, stats } from "@/lib/site";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-navy-gradient">
      {/* Patrón de engranajes */}
      <div className="gear-pattern absolute inset-0 opacity-[0.4] [mask-image:linear-gradient(to_bottom,transparent,black_30%,black_70%,transparent)]" />
      {/* Engranaje decorativo */}
      <GearMark className="absolute -right-16 top-24 h-72 w-72 opacity-10 animate-spin-slow" />

      <div className="container-x relative grid grid-cols-1 items-center gap-12 pb-20 pt-28 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pb-28 lg:pt-36">
        <div className="min-w-0 animate-fade-up">
          <span className="inline-flex max-w-full flex-wrap items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-amber-400 sm:text-xs sm:tracking-[0.2em]">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
            {site.tagline}
          </span>

          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.2] tracking-normal text-white sm:text-5xl lg:text-6xl">
            Mantenimientos locativos
            <span className="mt-2 block bg-amber-gradient bg-clip-text pb-[0.18em] text-transparent [-webkit-background-clip:text]">
              con calidad e ingeniería.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            En SOII aseguramos la funcionalidad, seguridad y estética de tus
            instalaciones. Soluciones integrales en mantenimiento, obras civiles,
            adecuaciones e instalaciones técnicas.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href="#contacto" className="btn-primary">
              Solicita una cotización
              <Icon name="arrow" className="h-4 w-4" />
            </a>
            <a href="#servicios" className="btn-outline">
              Ver servicios
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
            {stats.map((s) => (
              <li key={s.label}>
                <p className="font-display text-3xl font-extrabold text-amber-400">
                  {s.value}
                </p>
                <p className="text-xs font-medium uppercase tracking-wide text-white/55">
                  {s.label}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative min-w-0 animate-fade-up pb-10 [animation-delay:150ms] sm:pb-0">
          <HeroCarousel slides={heroSlides} />

          <div className="absolute -bottom-2 left-0 z-10 flex max-w-[calc(100%-1rem)] items-center gap-3 rounded-lg bg-white p-3 shadow-card sm:-bottom-6 sm:-left-8 sm:max-w-none sm:p-4">
            <span className="flex h-11 w-11 items-center justify-center rounded-md bg-amber-gradient text-navy-900">
              <Icon name="shield" className="h-6 w-6" />
            </span>
            <div>
              <p className="font-display text-sm font-bold text-navy-900">
                Trabajo garantizado
              </p>
              <p className="text-xs text-navy-500">Seguridad y durabilidad</p>
            </div>
          </div>

          <div className="absolute right-0 top-4 z-10 rotate-0 rounded-md bg-amber-gradient px-3 py-1.5 shadow-lg sm:-right-6 sm:top-6 sm:rotate-3 sm:px-4 sm:py-2">
            <p className="font-display text-[0.65rem] font-extrabold uppercase tracking-wide text-navy-900 sm:text-xs">
              +3 año de trayectoria
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
