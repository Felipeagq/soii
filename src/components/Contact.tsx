"use client";

import { useState } from "react";
import { Icon } from "./Icon";
import { GearMark } from "./GearMark";
import { site } from "@/lib/site";

const contactItems = [
  {
    icon: "phone",
    label: "Teléfono",
    value: site.contact.phone,
    href: `tel:${site.contact.phoneRaw}`,
  },
  {
    icon: "mail",
    label: "Correo",
    value: site.contact.email,
    href: `mailto:${site.contact.email}`,
  },
  {
    icon: "pin",
    label: "Ubicación",
    value: site.contact.location,
    href: undefined,
  },
];

export function Contact() {
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    servicio: "",
    mensaje: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = [
      `Hola SOII, soy ${form.nombre || "un cliente"}.`,
      form.servicio ? `Estoy interesado en: ${form.servicio}.` : "",
      form.mensaje ? `Mensaje: ${form.mensaje}` : "",
      form.telefono ? `Mi teléfono: ${form.telefono}` : "",
    ]
      .filter(Boolean)
      .join(" ");
    const url = `https://wa.me/${site.contact.phoneRaw}?text=${encodeURIComponent(
      text
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contacto" className="relative overflow-hidden bg-white py-20 lg:py-28">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          {/* Info */}
          <div>
            <span className="eyebrow">
              <span className="h-px w-8 bg-amber-500" /> Contáctenos
            </span>
            <h2 className="section-title mt-4">
              Cuéntanos sobre tu <span className="text-amber-500">proyecto</span>
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-navy-600">
              Escuchamos y entendemos tus necesidades para ofrecerte soluciones a
              la medida. Escríbenos y recibe una cotización sin compromiso.
            </p>

            <div className="mt-8 rounded-lg border border-navy-100 bg-navy-50 p-6">
              <p className="text-xs font-bold uppercase tracking-wide text-amber-600">
                {site.contact.role}
              </p>
              <p className="mt-1 font-display text-xl font-bold text-navy-900">
                {site.contact.name}
              </p>
            </div>

            <ul className="mt-6 space-y-3">
              {contactItems.map((item) => {
                const content = (
                  <div className="flex items-center gap-4 rounded-lg border border-navy-100 bg-white p-4 transition-all duration-300 hover:border-amber-200 hover:shadow-card">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-amber-gradient text-navy-900">
                      <Icon name={item.icon} className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-navy-500">
                        {item.label}
                      </p>
                      <p className="font-medium text-navy-900">{item.value}</p>
                    </div>
                  </div>
                );
                return (
                  <li key={item.label}>
                    {item.href ? (
                      <a href={item.href} className="block">
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Formulario */}
          <div className="relative overflow-hidden rounded-xl bg-navy-gradient p-7 shadow-card sm:p-10">
            <GearMark className="absolute -right-10 -top-10 h-44 w-44 opacity-10" />
            <h3 className="relative font-display text-2xl font-bold text-white">
              Solicita tu cotización
            </h3>
            <p className="relative mt-2 text-sm text-white/60">
              Completa el formulario y te contactaremos por WhatsApp.
            </p>

            <form onSubmit={handleSubmit} className="relative mt-6 space-y-4">
              <Field
                label="Nombre"
                id="nombre"
                value={form.nombre}
                onChange={(v) => setForm({ ...form, nombre: v })}
                placeholder="Tu nombre completo"
                required
              />
              <Field
                label="Teléfono"
                id="telefono"
                type="tel"
                value={form.telefono}
                onChange={(v) => setForm({ ...form, telefono: v })}
                placeholder="Tu número de contacto"
              />
              <div>
                <label
                  htmlFor="servicio"
                  className="mb-1.5 block text-sm font-medium text-white/80"
                >
                  Servicio de interés
                </label>
                <select
                  id="servicio"
                  value={form.servicio}
                  onChange={(e) => setForm({ ...form, servicio: e.target.value })}
                  className="w-full rounded-md border border-white/15 bg-white/10 px-4 py-3 text-white outline-none transition focus:border-amber-400 focus:ring-2 focus:ring-amber-400/40 [&>option]:text-navy-900"
                >
                  <option value="">Selecciona una opción</option>
                  <option>Mantenimiento preventivo</option>
                  <option>Mantenimiento correctivo</option>
                  <option>Obras civiles</option>
                  <option>Adecuaciones</option>
                  <option>Instalaciones técnicas</option>
                  <option>Otro</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="mensaje"
                  className="mb-1.5 block text-sm font-medium text-white/80"
                >
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  rows={4}
                  value={form.mensaje}
                  onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                  placeholder="Cuéntanos qué necesitas"
                  className="w-full resize-none rounded-md border border-white/15 bg-white/10 px-4 py-3 text-white placeholder:text-white/40 outline-none transition focus:border-amber-400 focus:ring-2 focus:ring-amber-400/40"
                />
              </div>
              <button type="submit" className="btn-primary w-full">
                <Icon name="whatsapp" className="h-5 w-5" />
                Enviar por WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  id,
  value,
  onChange,
  placeholder,
  type = "text",
  required = false,
}: {
  label: string;
  id: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-white/80">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-md border border-white/15 bg-white/10 px-4 py-3 text-white placeholder:text-white/40 outline-none transition focus:border-amber-400 focus:ring-2 focus:ring-amber-400/40"
      />
    </div>
  );
}
