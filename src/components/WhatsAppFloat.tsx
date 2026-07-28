import { Icon } from "./Icon";
import { site } from "@/lib/site";

export function WhatsAppFloat() {
  const text = encodeURIComponent(
    "Hola SOII, me gustaría recibir información sobre sus servicios."
  );
  return (
    <a
      href={`https://wa.me/${site.contact.phoneRaw}?text=${text}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="group safe-bottom fixed right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-6px_rgba(37,211,102,0.7)] transition-transform hover:scale-105"
    >
      <Icon name="whatsapp" className="h-8 w-8" fill="currentColor" stroke="none" />
      <span className="pointer-events-none absolute right-16 whitespace-nowrap rounded-lg bg-navy-900 px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
        ¡Escríbenos!
      </span>
    </a>
  );
}
