export const site = {
  name: "SOII",
  fullName: "SOII — Soluciones Industriales e Integrales",
  tagline: "Soluciones Industriales e Integrales",
  description:
    "Especialistas en mantenimientos locativos: aseguramos la funcionalidad, seguridad y estética de tus instalaciones con calidad, eficiencia e innovación.",
  /** URL pública del sitio (usada en Open Graph / compartir). Actualizar al desplegar. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://soii.com.co",
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
  { label: "Proceso", href: "#proceso" },
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

export const serviciosImagen = {
  src: "/images/gallery-7.jpeg",
  alt: "Adecuación de cocina integral por SOII",
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

export const valoresImagenes = [
  {
    src: "/images/gallery-19.jpeg",
    alt: "Equipo SOII en operación industrial",
  },
  {
    src: "/images/gallery-22.jpeg",
    alt: "Mantenimiento de tanques industriales",
  },
];

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

export type Cliente = {
  name: string;
  logo: string;
};

export const clientes: Cliente[] = [
  { name: "Coningenio S.A.S.", logo: "/images/clients/congenio.png" },
  { name: "Cafam", logo: "/images/clients/cafam.png" },
  { name: "Isimo", logo: "/images/clients/isimo.png" },
  { name: "QC Mall", logo: "/images/clients/ocmall.png" },
  { name: "BGreen", logo: "/images/clients/bgreen.png" },
  { name: "Smart Fit", logo: "/images/clients/smartfit.png" },
  { name: "Famisanar", logo: "/images/clients/famisanar.png" },
  { name: "Banasan", logo: "/images/clients/banasan.png" },
  { name: "Homecenter", logo: "/images/clients/homecenter.png" },
];

export const heroSlides = [
  { src: "/images/gallery-7.jpeg", alt: "Adecuación de cocina integral" },
  { src: "/images/gallery-8.jpeg", alt: "Acabados en cocina moderna" },
  { src: "/images/gallery-18.jpeg", alt: "Instalación de malla en zona industrial" },
  { src: "/images/gallery-22.jpeg", alt: "Mantenimiento de tanques industriales" },
  { src: "/images/gallery-17.jpeg", alt: "Entrega de proyecto de adecuación" },
  { src: "/images/gallery-20.jpeg", alt: "Mantenimiento en planta industrial" },
];

export const galeria = [
  { src: "/images/gallery-7.jpeg", alt: "Adecuación de cocina integral" },
  { src: "/images/gallery-8.jpeg", alt: "Acabados en cocina moderna" },
  { src: "/images/gallery-17.jpeg", alt: "Entrega de proyecto de adecuación" },
  { src: "/images/gallery-18.jpeg", alt: "Instalación de malla en zona industrial" },
  { src: "/images/gallery-19.jpeg", alt: "Equipo SOII en operación industrial" },
  { src: "/images/gallery-20.jpeg", alt: "Mantenimiento en planta industrial" },
  { src: "/images/gallery-22.jpeg", alt: "Mantenimiento de tanques industriales" },
];

export const videos = [
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
  {
    src: "/videos/video-4.mp4",
    poster: "/videos/poster-4.jpg",
    title: "Instalaciones industriales",
    tag: "Señalización y montaje",
  },
];

export const stats = [
  { value: "+3", label: "Año de trayectoria" },
  { value: "8+", label: "Clientes que confían" },
  { value: "100%", label: "Compromiso con la calidad" },
  { value: "24/7", label: "Atención y respuesta" },
];

export const confianza = [
  { icon: "badge", title: "Personal capacitado", text: "Equipo con experiencia en obra y planta industrial" },
  { icon: "shield", title: "Seguridad en obra", text: "Protocolos y elementos de protección en cada intervención" },
  { icon: "star", title: "Calidad garantizada", text: "Materiales certificados y acabados de alto estándar" },
  { icon: "bolt", title: "Respuesta oportuna", text: "Atención ágil para minimizar tiempos de inactividad" },
];

export const proceso = [
  {
    step: "01",
    title: "Diagnóstico",
    description: "Visitamos tus instalaciones, evaluamos el estado y definimos el alcance del proyecto.",
  },
  {
    step: "02",
    title: "Cotización",
    description: "Entregamos una propuesta clara con tiempos, materiales y costos sin sorpresas.",
  },
  {
    step: "03",
    title: "Ejecución",
    description: "Intervenimos con personal calificado, cumpliendo normas de seguridad y calidad.",
  },
  {
    step: "04",
    title: "Entrega",
    description: "Verificamos el resultado contigo y damos seguimiento post-obra si es necesario.",
  },
];

export const testimonios = [
  {
    quote:
      "Cumplieron con los tiempos acordados y dejaron las instalaciones en excelentes condiciones. Un equipo serio y comprometido.",
    author: "Área de operaciones",
    company: "Cliente industrial",
  },
  {
    quote:
      "Desde la cotización hasta la entrega, el acompañamiento fue profesional. Recomendamos sus servicios de mantenimiento locativo.",
    author: "Administración",
    company: "Centro comercial",
  },
];
