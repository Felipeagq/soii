import Image from "next/image";
import { Reveal } from "./Reveal";
import { galeria } from "@/lib/site";

export function Gallery() {
  return (
    <section id="galeria" className="bg-navy-50 py-20 lg:py-28">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">
            <span className="h-px w-8 bg-amber-500" /> Galería
          </span>
          <h2 className="section-title mt-4">
            Proyectos que hablan por{" "}
            <span className="text-amber-500">nosotros</span>
          </h2>
          <p className="mt-4 text-navy-600">
            Una muestra de nuestras intervenciones en mantenimiento, obras civiles
            y adecuaciones.
          </p>
        </Reveal>

        <div className="mt-12 grid auto-rows-[220px] grid-cols-2 gap-4 sm:auto-rows-[260px] lg:grid-cols-4">
          {galeria.map((img, i) => (
            <Reveal
              key={img.src}
              delay={(i % 4) * 80}
              className={`group relative overflow-hidden rounded-2xl shadow-card ${
                i === 0 ? "col-span-2 row-span-2" : ""
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/10 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90" />
              <p className="absolute inset-x-0 bottom-0 p-4 text-sm font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {img.alt}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
