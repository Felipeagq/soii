import Image from "next/image";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";
import { servicios, serviciosImagen } from "@/lib/site";

export function Services() {
  return (
    <section id="servicios" className="relative bg-white py-20 lg:py-28">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">
            <span className="h-px w-8 bg-amber-500" /> Nuestros servicios
          </span>
          <h2 className="section-title mt-4">
            Todo para el cuidado de tus{" "}
            <span className="text-amber-500">instalaciones</span>
          </h2>
          <p className="mt-4 text-navy-600">
            Cubrimos el ciclo completo: desde el suministro y la ejecución hasta el
            mantenimiento y la conservación de edificios.
          </p>
        </Reveal>

        <Reveal className="mt-10">
          <div className="relative mx-auto aspect-[4/3] max-w-4xl overflow-hidden rounded-lg shadow-card sm:aspect-[16/7] lg:aspect-[16/6]">
            <Image
              src={serviciosImagen.src}
              alt={serviciosImagen.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 896px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-950/60 via-navy-950/20 to-transparent" />
            <p className="absolute bottom-0 left-0 max-w-md p-5 text-sm font-medium text-white sm:text-base">
              {serviciosImagen.alt}
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {servicios.map((s, i) => (
            <Reveal key={s.title} delay={(i % 4) * 90}>
              <article className="card group h-full hover:-translate-y-1.5 hover:border-amber-200 hover:shadow-card-hover">
                <span className="flex h-14 w-14 items-center justify-center rounded-lg bg-navy-50 text-navy-800 transition-colors duration-300 group-hover:bg-amber-gradient group-hover:text-navy-900">
                  <Icon name={s.icon} className="h-7 w-7" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-navy-900">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-600">
                  {s.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
