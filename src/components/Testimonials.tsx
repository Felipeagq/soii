import { Reveal } from "./Reveal";
import { testimonios } from "@/lib/site";

export function Testimonials() {
  return (
    <section className="bg-navy-50 py-20 lg:py-24">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">
            <span className="h-px w-8 bg-amber-500" /> Testimonios
          </span>
          <h2 className="section-title mt-4">
            Lo que dicen nuestros <span className="text-amber-500">clientes</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {testimonios.map((t, i) => (
            <Reveal key={t.author} delay={i * 100}>
              <blockquote className="flex h-full flex-col rounded-lg border border-navy-100 bg-white p-8 shadow-card">
                <span className="font-display text-4xl leading-none text-amber-400">&ldquo;</span>
                <p className="mt-2 flex-1 text-base leading-relaxed text-navy-700">{t.quote}</p>
                <footer className="mt-6 border-t border-navy-100 pt-5">
                  <p className="font-display text-sm font-bold text-navy-900">{t.author}</p>
                  <p className="text-xs text-navy-500">{t.company}</p>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
