import { Icon } from "./Icon";
import { GearMark } from "./GearMark";
import { Reveal } from "./Reveal";

export function Commitment() {
  return (
    <section className="relative overflow-hidden bg-navy-gradient py-20 lg:py-24">
      <div className="gear-pattern absolute inset-0 opacity-30" />
      <GearMark className="absolute -left-16 -bottom-16 h-64 w-64 opacity-10 animate-spin-slow" />

      <div className="container-x relative grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <span className="eyebrow text-amber-400">
            <span className="h-px w-8 bg-amber-500" /> Nuestro compromiso
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            Comprometidos con la excelencia y la mejora continua
          </h2>
          <p className="mt-5 max-w-xl leading-relaxed text-white/70">
            Nos esforzamos por mantener altos estándares en cada aspecto de
            nuestro trabajo, asegurando que cada cliente reciba un servicio
            excepcional y resultados duraderos.
          </p>
          <a href="#contacto" className="btn-primary mt-8">
            Hablemos de tu proyecto
            <Icon name="arrow" className="h-4 w-4" />
          </a>
        </Reveal>

        <Reveal delay={120} className="grid grid-cols-2 gap-4">
          {[
            { icon: "star", title: "Altos estándares", text: "Calidad en cada detalle" },
            { icon: "bolt", title: "Respuesta ágil", text: "Minimizamos interrupciones" },
            { icon: "shield", title: "Seguridad", text: "Protocolos en obra" },
            { icon: "smile", title: "Cliente primero", text: "Soluciones a la medida" },
          ].map((c) => (
            <div
              key={c.title}
              className="rounded-lg border border-white/10 bg-white/5 p-5 backdrop-blur"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-md bg-amber-gradient text-navy-900">
                <Icon name={c.icon} className="h-6 w-6" />
              </span>
              <p className="mt-4 font-display font-bold text-white">{c.title}</p>
              <p className="mt-1 text-sm text-white/60">{c.text}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
