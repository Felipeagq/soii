"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { Icon } from "./Icon";
import { nav, site } from "@/lib/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const closeMenu = () => setOpen(false);

  const headerSolid = scrolled || open;
  const logoVariant = headerSolid ? "dark" : "light";

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          headerSolid
            ? "bg-white/95 shadow-[0_8px_30px_-12px_rgba(15,17,25,0.2)] backdrop-blur"
            : "bg-navy-950/40 backdrop-blur-md lg:bg-transparent"
        }`}
      >
        <nav className="container-x flex h-16 items-center justify-between lg:h-20">
          <a href="#inicio" aria-label={site.name} className="relative z-10 shrink-0" onClick={closeMenu}>
            <Logo
              type="mark"
              variant={logoVariant}
              priority
              className="h-8 w-auto sm:h-9 lg:h-10"
            />
          </a>

          <ul className="hidden items-center gap-8 lg:flex">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`text-sm font-medium transition-colors ${
                    scrolled
                      ? "text-navy-700 hover:text-amber-600"
                      : "text-white/90 hover:text-amber-400"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <a href="#contacto" className="btn-primary">
              Cotiza tu proyecto
              <Icon name="arrow" className="h-4 w-4" />
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className={`relative z-10 inline-flex h-10 w-10 items-center justify-center rounded-md border transition-colors lg:hidden ${
              headerSolid
                ? "border-navy-200 bg-white text-navy-800"
                : "border-white/25 bg-white/10 text-white"
            }`}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 h-0.5 w-5 bg-current transition-all ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 h-0.5 w-5 bg-current transition-all ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 h-0.5 w-5 bg-current transition-all ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </nav>

        {/* Menú móvil: posición absoluta para no agrandar el header */}
        <div
          className={`absolute left-0 right-0 top-full origin-top transition-all duration-300 lg:hidden ${
            open
              ? "pointer-events-auto scale-y-100 opacity-100"
              : "pointer-events-none scale-y-95 opacity-0"
          }`}
        >
          <div className="container-x pb-4 pt-2">
            <ul className="space-y-1 rounded-lg border border-navy-100 bg-white p-2 shadow-card">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={closeMenu}
                    className="block rounded-md px-4 py-3 text-base font-medium text-navy-800 transition-colors hover:bg-navy-50"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="pt-1">
                <a href="#contacto" onClick={closeMenu} className="btn-primary w-full">
                  Cotiza tu proyecto
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>

      {/* Backdrop detrás del menú */}
      <div
        className={`fixed inset-0 z-40 bg-navy-950/50 backdrop-blur-[2px] transition-opacity duration-300 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={closeMenu}
        aria-hidden={!open}
      />
    </>
  );
}
