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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 shadow-[0_8px_30px_-12px_rgba(15,17,25,0.2)] backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between lg:h-20">
        <a href="#inicio" aria-label={site.name} className="shrink-0">
          <Logo
            type="mark"
            variant={scrolled ? "dark" : "light"}
            priority
            className="h-9 w-auto lg:h-10"
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
          className={`inline-flex h-11 w-11 items-center justify-center rounded-xl border transition-colors lg:hidden ${
            scrolled ? "border-navy-200 text-navy-800" : "border-white/30 text-white"
          }`}
          aria-label="Abrir menú"
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

      {/* Menú móvil */}
      <div
        className={`lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        } transition-opacity duration-300`}
      >
        <div className="container-x pb-6">
          <ul className="space-y-1 rounded-2xl border border-navy-100 bg-white p-3 shadow-card">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-base font-medium text-navy-800 hover:bg-navy-50"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-1">
              <a
                href="#contacto"
                onClick={() => setOpen(false)}
                className="btn-primary w-full"
              >
                Cotiza tu proyecto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
