import { Icon } from "./Icon";
import { confianza } from "@/lib/site";

export function TrustStrip() {
  return (
    <section className="border-y border-navy-100 bg-white py-8">
      <div className="container-x">
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {confianza.map((item) => (
            <li key={item.title} className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-amber-100 text-amber-700">
                <Icon name={item.icon} className="h-5 w-5" />
              </span>
              <div>
                <p className="font-display text-sm font-bold text-navy-900">{item.title}</p>
                <p className="mt-1 text-xs leading-relaxed text-navy-500">{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
