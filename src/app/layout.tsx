import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import { StructuredData } from "@/components/StructuredData";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "mantenimiento locativo",
    "obras civiles",
    "adecuaciones",
    "instalaciones técnicas",
    "mantenimiento preventivo",
    "mantenimiento correctivo",
    "soluciones industriales",
    "Colombia",
  ],
  authors: [{ name: site.fullName }],
  creator: site.fullName,
  publisher: site.fullName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: site.fullName,
    description: site.description,
    url: "/",
    siteName: site.name,
    type: "website",
    locale: "es_CO",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: site.fullName,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.fullName,
    description: site.description,
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#23273B",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${inter.variable} ${poppins.variable}`}>
      <body>
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
