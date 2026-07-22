import { Icon } from "./Icon";
import { GearMark } from "./GearMark";
import { site, stats } from "@/lib/site";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-navy-gradient">
      {/* Patrón de engranajes */}
      <div className="gear-pattern absolute inset-0 opacity-[0.4] [mask-image:linear-gradient(to_bottom,transparent,black_30%,black_70%,transparent)]" />
      {/* Engranaje decorativo */}
      <GearMark className="absolute -right-16 top-24 h-72 w-72 opacity-10 animate-spin-slow" />

      <div className="container-x relative grid items-center gap-12 pb-20 pt-28 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pb-28 lg:pt-36">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-amber-400">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
            {site.tagline}
          </span>

          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Mantenimientos locativos
            <span className="mt-2 block bg-amber-gradient bg-clip-text text-transparent">
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

        {/* Imagen con recorte diagonal */}
        <div className="relative animate-fade-up [animation-delay:150ms]">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] border-4 border-white/10 shadow-2xl sm:aspect-[4/4.2]">
            <video
              src="/videos/hero-loop.mp4"
              poster="/videos/poster-3.jpg"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="SOII realizando mantenimiento de fachadas"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
          </div>

          {/* Tarjeta flotante */}
          <div className="absolute -bottom-6 -left-4 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-card sm:-left-8">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-gradient text-navy-900">
              <Icon name="shield" className="h-6 w-6" />
            </span>
            <div>
              <p className="font-display text-sm font-bold text-navy-900">
                Trabajo garantizado
              </p>
              <p className="text-xs text-navy-500">Seguridad y durabilidad</p>
            </div>
          </div>

          <div className="absolute -right-3 top-6 rotate-3 rounded-xl bg-amber-gradient px-4 py-2 shadow-lg sm:-right-6">
            <p className="font-display text-xs font-extrabold uppercase tracking-wide text-navy-900">
              +1 año de trayectoria
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
