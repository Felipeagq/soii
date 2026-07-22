import Image from "next/image";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";

const highlights = [
  "Atención personalizada y profesional",
  "Uso de tecnologías avanzadas",
  "Compromiso con la sostenibilidad",
  "Resultados duraderos y de calidad",
];

export function About() {
  return (
    <section id="nosotros" className="relative bg-white py-20 lg:py-28">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal className="relative order-2 lg:order-1">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-card">
            <Image
              src="/images/gallery-3.jpeg"
              alt="Equipo SOII trabajando en reforzamiento estructural"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 right-4 grid grid-cols-2 gap-3 rounded-2xl bg-navy-900 p-5 text-white shadow-card sm:right-8">
            <div>
              <p className="font-display text-2xl font-extrabold text-amber-400">+1</p>
              <p className="text-[0.7rem] uppercase tracking-wide text-white/60">
                Año en el mercado
              </p>
            </div>
            <div>
              <p className="font-display text-2xl font-extrabold text-amber-400">8+</p>
              <p className="text-[0.7rem] uppercase tracking-wide text-white/60">
                Clientes activos
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal className="order-1 lg:order-2">
          <span className="eyebrow">
            <span className="h-px w-8 bg-amber-500" /> ¿Quiénes somos?
          </span>
          <h2 className="section-title mt-4">
            Especialistas en soluciones{" "}
            <span className="text-amber-500">integrales</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-navy-600 sm:text-lg">
            En SOII Soluciones Industriales e Integrales somos especialistas en
            mantenimientos locativos, dedicados a asegurar la funcionalidad,
            seguridad y estética de tus instalaciones. Con más de un año de
            trayectoria nos hemos consolidado como una empresa de referencia,
            reconocida por nuestro compromiso con la calidad, la eficiencia y la
            satisfacción del cliente.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {highlights.map((h) => (
              <li key={h} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                  <Icon name="check" className="h-4 w-4" />
                </span>
                <span className="text-sm font-medium text-navy-700">{h}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
