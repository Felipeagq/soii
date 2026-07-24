import Image from "next/image";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";
import { valores, valoresImagenes } from "@/lib/site";

export function Values() {
  return (
    <section id="valores" className="bg-navy-50 py-20 lg:py-28">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">
            <span className="h-px w-8 bg-amber-500" /> Nuestros valores
          </span>
          <h2 className="section-title mt-4">
            Lo que nos <span className="text-amber-500">distingue</span>
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {valoresImagenes.map((img, i) => (
            <Reveal key={img.src} delay={i * 80}>
              <div className="relative aspect-[16/10] overflow-hidden rounded-lg shadow-card">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 to-transparent" />
                <p className="absolute inset-x-0 bottom-0 p-4 text-sm font-medium text-white">
                  {img.alt}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {valores.map((v, i) => (
            <Reveal key={v.title} delay={(i % 3) * 90}>
              <article className="group relative h-full overflow-hidden rounded-lg border border-navy-100 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover">
                <span className="absolute left-0 top-0 h-full w-1.5 bg-amber-gradient" />
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-amber-100 text-amber-700 transition-colors group-hover:bg-amber-gradient group-hover:text-navy-900">
                    <Icon name={v.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="font-display text-lg font-bold text-navy-900">
                    {v.title}
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-navy-600">
                  {v.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
