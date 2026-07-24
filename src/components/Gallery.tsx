import { Reveal } from "./Reveal";
import { GalleryCarousel } from "./GalleryCarousel";
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

        <Reveal className="mt-12">
          <GalleryCarousel slides={galeria} />
        </Reveal>
      </div>
    </section>
  );
}
