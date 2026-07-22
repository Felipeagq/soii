import { Icon } from "./Icon";
import { GearMark } from "./GearMark";
import { Reveal } from "./Reveal";

export function MissionVision() {
  return (
    <section className="bg-navy-50 py-20 lg:py-28">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">
            <span className="h-px w-8 bg-amber-500" /> Nuestro propósito
          </span>
          <h2 className="section-title mt-4">Misión y Visión</h2>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <article className="card group h-full hover:-translate-y-1 hover:shadow-card-hover">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-gradient text-navy-900">
                <Icon name="bolt" className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-2xl font-bold text-navy-900">
                Misión
              </h3>
              <p className="mt-3 leading-relaxed text-navy-600">
                Proporcionar mantenimientos locativos de alta calidad que permitan
                a nuestros clientes disfrutar de espacios seguros, funcionales y
                atractivos. Nos esforzamos por exceder las expectativas a través de
                una atención personalizada, profesionalismo y el uso de tecnologías
                avanzadas.
              </p>
            </article>
          </Reveal>

          <Reveal delay={120}>
            <article className="relative h-full overflow-hidden rounded-2xl bg-navy-gradient p-7 text-white shadow-card">
              <GearMark className="absolute -right-8 -top-8 h-40 w-40 opacity-10" />
              <span className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-amber-400">
                <Icon name="spark" className="h-6 w-6" />
              </span>
              <h3 className="relative mt-5 font-display text-2xl font-bold">
                Visión
              </h3>
              <p className="relative mt-3 leading-relaxed text-white/75">
                Ser líderes en el sector de mantenimientos locativos, distinguidos
                por nuestra excelencia, innovación y compromiso con la
                sostenibilidad. Queremos transformar la manera en que se gestionan
                y mantienen las infraestructuras, estableciendo nuevos estándares
                de calidad y eficiencia.
              </p>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
