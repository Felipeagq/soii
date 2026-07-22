export const site = {
  name: "SOII",
  fullName: "SOII — Soluciones Industriales e Integrales",
  tagline: "Soluciones Industriales e Integrales",
  description:
    "Especialistas en mantenimientos locativos: aseguramos la funcionalidad, seguridad y estética de tus instalaciones con calidad, eficiencia e innovación.",
  contact: {
    name: "Alfredo Otero Romero",
    role: "Gerencia",
    email: "Gerenciasoii.col@gmail.com",
    phone: "+57 316 696 3081",
    phoneRaw: "573166963081",
    location: "Colombia",
  },
} as const;

export const nav = [
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Valores", href: "#valores" },
  { label: "Proyectos", href: "#galeria" },
  { label: "Videos", href: "#videos" },
  { label: "Clientes", href: "#clientes" },
  { label: "Contacto", href: "#contacto" },
] as const;

export type Servicio = {
  title: string;
  description: string;
  icon: string;
};

export const servicios: Servicio[] = [
  {
    title: "Mantenimiento preventivo",
    description:
      "Inspecciones y rutinas programadas que anticipan fallas y prolongan la vida útil de tus instalaciones.",
    icon: "shield",
  },
  {
    title: "Mantenimiento correctivo",
    description:
      "Corregimos fallas, daños o averías que ya se han presentado en una edificación de forma rápida y eficaz.",
    icon: "wrench",
  },
  {
    title: "Obras civiles",
    description:
      "Trabajos de construcción, modificación, reparación o reforzamiento de estructuras físicas.",
    icon: "building",
  },
  {
    title: "Adecuaciones",
    description:
      "Adaptamos, mejoramos o acondicionamos un espacio existente según nuevas necesidades funcionales.",
    icon: "layout",
  },
  {
    title: "Instalaciones técnicas",
    description:
      "Montaje, adecuación o modificación de equipos y estructuras con estándares de seguridad.",
    icon: "plug",
  },
  {
    title: "Suministro",
    description:
      "Provisión de materiales, insumos y equipos requeridos para la correcta ejecución de cada proyecto.",
    icon: "truck",
  },
  {
    title: "Ejecución",
    description:
      "Equipo profesional que ejecuta cada intervención con planeación, control y cumplimiento de plazos.",
    icon: "helmet",
  },
  {
    title: "Conservación de edificios",
    description:
      "Mantenimiento y conservación integral de edificios para garantizar seguridad, funcionalidad y estética.",
    icon: "tower",
  },
];

export type Valor = {
  title: string;
  description: string;
  icon: string;
};

export const valores: Valor[] = [
  {
    title: "Calidad",
    description:
      "Entregamos un trabajo de alta calidad en cada proyecto, garantizando durabilidad y buen funcionamiento.",
    icon: "star",
  },
  {
    title: "Profesionalismo",
    description:
      "Un equipo altamente capacitado y experimentado, dedicado a brindar el mejor servicio.",
    icon: "badge",
  },
  {
    title: "Eficiencia",
    description:
      "Trabajamos de manera rápida y eficaz para minimizar interrupciones y asegurar la continuidad operativa.",
    icon: "bolt",
  },
  {
    title: "Innovación",
    description:
      "Adoptamos tecnologías avanzadas y métodos innovadores para mejorar constantemente nuestros servicios.",
    icon: "spark",
  },
  {
    title: "Sostenibilidad",
    description:
      "Prácticas sostenibles en todas nuestras operaciones, cuidando el medio ambiente y los recursos.",
    icon: "leaf",
  },
  {
    title: "Satisfacción al cliente",
    description:
      "Escuchamos y entendemos tus necesidades, ofreciendo soluciones a medida que superan expectativas.",
    icon: "smile",
  },
];

export const clientes: string[] = [
  "Coningenio S.A.S.",
  "Cafam",
  "Isimo",
  "QC Mall",
  "BGreen",
  "Smart Fit",
  "Famisanar",
  "Banasan",
];

export const galeria = [
  { src: "/images/gallery-6.jpeg", alt: "Técnico SOII realizando mantenimiento estructural" },
  { src: "/images/gallery-3.jpeg", alt: "Reparación de losa en parqueadero" },
  { src: "/images/gallery-5.jpeg", alt: "Trabajo de reforzamiento estructural" },
  { src: "/images/gallery-2.jpeg", alt: "Mantenimiento locativo en centro comercial" },
  { src: "/images/gallery-1.jpeg", alt: "Adecuación de espacios en plaza pública" },
  { src: "/images/gallery-4.jpeg", alt: "Obras civiles en zona exterior" },
];

export const videos = [
  {
    src: "/videos/video-3.mp4",
    poster: "/videos/poster-3.jpg",
    title: "Mantenimiento de fachadas",
    tag: "Trabajo en alturas",
  },
  {
    src: "/videos/video-1.mp4",
    poster: "/videos/poster-1.jpg",
    title: "Adecuación de interiores",
    tag: "Entrega final",
  },
  {
    src: "/videos/video-2.mp4",
    poster: "/videos/poster-2.jpg",
    title: "Mobiliario a la medida",
    tag: "Adecuaciones",
  },
];

export const stats = [
  { value: "+1", label: "Año de trayectoria" },
  { value: "8+", label: "Clientes que confían" },
  { value: "100%", label: "Compromiso con la calidad" },
  { value: "24/7", label: "Atención y respuesta" },
];
