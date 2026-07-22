import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { name: string };

const paths: Record<string, React.ReactNode> = {
  shield: (
    <>
      <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  wrench: (
    <path d="M14.7 6.3a4 4 0 00-5.2 5.2L3 18l3 3 6.5-6.5a4 4 0 005.2-5.2l-2.4 2.4-2.6-.6-.6-2.6 2.2-2.6z" />
  ),
  building: (
    <>
      <rect x="4" y="3" width="16" height="18" rx="1" />
      <path d="M9 7h.01M12 7h.01M15 7h.01M9 11h.01M12 11h.01M15 11h.01M9 15h.01M15 15h.01" />
      <path d="M11 21v-3h2v3" />
    </>
  ),
  layout: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18M9 21V9" />
    </>
  ),
  plug: (
    <>
      <path d="M12 22v-5" />
      <path d="M9 8V2M15 8V2" />
      <path d="M7 8h10v3a5 5 0 01-10 0V8z" />
    </>
  ),
  truck: (
    <>
      <path d="M3 6h11v9H3zM14 9h4l3 3v3h-7z" />
      <circle cx="7" cy="18" r="1.6" />
      <circle cx="17" cy="18" r="1.6" />
    </>
  ),
  helmet: (
    <>
      <path d="M3 16a9 9 0 0118 0" />
      <path d="M2 16h20v2a1 1 0 01-1 1H3a1 1 0 01-1-1v-2z" />
      <path d="M10 8V5h4v3" />
    </>
  ),
  tower: (
    <>
      <rect x="6" y="2" width="12" height="20" rx="1" />
      <path d="M10 6h.01M14 6h.01M10 10h.01M14 10h.01M10 14h.01M14 14h.01M10 18h4" />
    </>
  ),
  star: <path d="M12 3l2.6 5.6 6 .7-4.5 4.1 1.2 6-5.3-3-5.3 3 1.2-6L3.4 9.3l6-.7L12 3z" />,
  badge: (
    <>
      <circle cx="12" cy="9" r="6" />
      <path d="M9 14l-1.5 7 4.5-2.5L16.5 21 15 14" />
    </>
  ),
  bolt: <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />,
  spark: (
    <>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
      <path d="M12 8a4 4 0 014 4 4 4 0 01-4 4 4 4 0 01-4-4 4 4 0 014-4z" />
    </>
  ),
  leaf: (
    <>
      <path d="M4 20C4 11 11 4 20 4c0 9-7 16-16 16z" />
      <path d="M9 15c2-4 5-7 9-8" />
    </>
  ),
  smile: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M8 14a5 5 0 008 0M9 9h.01M15 9h.01" />
    </>
  ),
  phone: (
    <path d="M4 4h4l2 5-2.5 1.5a11 11 0 006 6L15 14l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 011-2z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M4 7l8 6 8-6" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-6 7-11a7 7 0 10-14 0c0 5 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  check: <path d="M5 12l5 5L20 7" />,
  play: <path d="M8 5v14l11-7z" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  whatsapp: (
    <path d="M12 3a9 9 0 00-7.7 13.6L3 21l4.6-1.2A9 9 0 1012 3zm4.7 12.4c-.2.6-1.2 1.1-1.7 1.1-.4 0-1 .1-3-1s-3.3-3-3.4-3.2c-.1-.2-.9-1.2-.9-2.3s.6-1.6.8-1.8c.2-.2.4-.3.6-.3h.4c.2 0 .3 0 .5.4l.7 1.6c.1.2 0 .4-.1.5l-.4.5c-.1.2-.3.3-.1.6.2.3.8 1.2 1.6 1.9 1 .9 1.8 1.1 2 .9.2-.1.4-.4.6-.6.2-.2.3-.2.5-.1l1.5.7c.2.1.4.2.4.4v.9z" />
  ),
};

export function Icon({ name, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {paths[name] ?? paths.check}
    </svg>
  );
}
