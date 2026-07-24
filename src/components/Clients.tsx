import { Reveal } from "./Reveal";
import { clientes } from "@/lib/site";

export function Clients() {
  return (
    <section id="clientes" className="bg-white py-20 lg:py-24">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">
            <span className="h-px w-8 bg-amber-500" /> Confían en nosotros
          </span>
          <h2 className="section-title mt-4">
            Han confiado en nuestro{" "}
            <span className="text-amber-500">trabajo</span>
          </h2>
          <p className="mt-4 text-navy-600">
            Empresas de retail, salud, industria y sector público que avalan nuestra
            experiencia en campo.
          </p>
        </Reveal>

        <Reveal className="mt-12">
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {clientes.map((c) => (
              <li
                key={c}
                className="flex items-center justify-center rounded-lg border border-navy-100 bg-white px-4 py-6 text-center shadow-sm transition-all duration-300 hover:border-amber-200 hover:shadow-card"
              >
                <span className="font-display text-base font-bold tracking-tight text-navy-600 sm:text-lg">
                  {c}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
