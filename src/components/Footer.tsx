import { Logo } from "./Logo";
import { Icon } from "./Icon";
import { nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      <div className="container-x grid gap-10 py-14 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo type="full" variant="light" className="h-20 w-auto" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
            {site.description}
          </p>
        </div>

        <div>
          <p className="font-display text-sm font-bold uppercase tracking-wide text-amber-400">
            Navegación
          </p>
          <ul className="mt-4 space-y-2.5">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm text-white/60 transition-colors hover:text-amber-400"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-display text-sm font-bold uppercase tracking-wide text-amber-400">
            Contacto
          </p>
          <ul className="mt-4 space-y-3 text-sm text-white/60">
            <li className="flex items-center gap-3">
              <Icon name="phone" className="h-4 w-4 text-amber-400" />
              <a href={`tel:${site.contact.phoneRaw}`} className="hover:text-white">
                {site.contact.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Icon name="mail" className="h-4 w-4 text-amber-400" />
              <a
                href={`mailto:${site.contact.email}`}
                className="break-all hover:text-white"
              >
                {site.contact.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Icon name="pin" className="h-4 w-4 text-amber-400" />
              {site.contact.location}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/50 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.fullName}. Todos los derechos
            reservados.
          </p>
          <p>Servicios certificados en mantenimiento locativo · Colombia</p>
        </div>
      </div>
    </footer>
  );
}
