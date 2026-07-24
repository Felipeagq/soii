import { site } from "@/lib/site";

export function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.fullName,
    description: site.description,
    url: site.url,
    email: site.contact.email,
    telephone: site.contact.phone,
    areaServed: {
      "@type": "Country",
      name: "Colombia",
    },
    serviceType: [
      "Mantenimiento locativo",
      "Obras civiles",
      "Adecuaciones",
      "Instalaciones técnicas",
    ],
    image: `${site.url}/og-image.png`,
    logo: `${site.url}/logo/logo-dark.png`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
