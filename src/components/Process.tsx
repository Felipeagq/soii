import { Reveal } from "./Reveal";
import { proceso } from "@/lib/site";

export function Process() {
  return (
    <section id="proceso" className="bg-white py-20 lg:py-28">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">
            <span className="h-px w-8 bg-amber-500" /> Cómo trabajamos
          </span>
          <h2 className="section-title mt-4">
            Un proceso <span className="text-amber-500">claro y confiable</span>
          </h2>
          <p className="mt-4 text-navy-600">
            Metodología definida para que sepas qué esperar en cada etapa de tu proyecto.
          </p>
        </Reveal>

        <div className="relative mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-navy-100 lg:block" aria-hidden="true" />
          {proceso.map((p, i) => (
            <Reveal key={p.step} delay={i * 80}>
              <article className="relative text-center lg:text-left">
                <span className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-lg bg-navy-gradient font-display text-lg font-extrabold text-amber-400 lg:mx-0">
                  {p.step}
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-navy-900">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-600">{p.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
