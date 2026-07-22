import Image from "next/image";

const sources = {
  full: {
    dark: "/logo/logo-dark.png",
    light: "/logo/logo-white.png",
    width: 419,
    height: 277,
  },
  mark: {
    dark: "/logo/logomark-dark.png",
    light: "/logo/logomark-white.png",
    width: 319,
    height: 187,
  },
} as const;

type LogoProps = {
  /** "dark" = texto navy (fondos claros) · "light" = texto blanco (fondos oscuros) */
  variant?: "dark" | "light";
  /** "mark" = solo la marca S⚙II · "full" = lockup con tagline */
  type?: "full" | "mark";
  className?: string;
  priority?: boolean;
};

export function Logo({
  variant = "dark",
  type = "mark",
  className = "",
  priority = false,
}: LogoProps) {
  const s = sources[type];
  return (
    <Image
      src={variant === "dark" ? s.dark : s.light}
      alt="SOII — Soluciones Industriales e Integrales"
      width={s.width}
      height={s.height}
      priority={priority}
      className={className}
    />
  );
}
