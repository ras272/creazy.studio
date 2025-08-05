import type { Metadata } from "next";
import "./globals.css";
import StructuredData from "./components/StructuredData";

export const metadata: Metadata = {
  title: "Creazy Studio - Desarrollo Web y Marketing Digital en Paraguay | Agencia Creativa",
  description:
    "Agencia de desarrollo web, diseño de apps y marketing digital en Paraguay. Creamos sitios web modernos, aplicaciones móviles y estrategias digitales para empresas y startups. Especialistas en diseño UX/UI, e-commerce y branding.",
  keywords:
    "desarrollo web Paraguay, agencia marketing digital Paraguay, diseño web Asunción, desarrollo apps móviles Paraguay, agencia creativa Paraguay, diseño UX UI Paraguay, e-commerce Paraguay, branding Paraguay, sitios web Paraguay, marketing digital Asunción, desarrollo software Paraguay, agencia publicidad Paraguay, diseño gráfico Paraguay, páginas web Paraguay, tiendas online Paraguay, SEO Paraguay, redes sociales Paraguay, startup Paraguay, empresa tecnología Paraguay",
  authors: [{ name: "Creazy Studio" }],
  creator: "Creazy Studio",
  publisher: "Creazy Studio",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "es_PY",
    url: "https://creazy.studio",
    siteName: "Creazy Studio",
    title: "Creazy Studio - Desarrollo Web y Marketing Digital en Paraguay",
    description: "Agencia líder en desarrollo web, diseño de apps y marketing digital en Paraguay. Transformamos ideas en experiencias digitales exitosas.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Creazy Studio - Agencia de Desarrollo Web en Paraguay",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Creazy Studio - Desarrollo Web y Marketing Digital en Paraguay",
    description: "Agencia líder en desarrollo web, diseño de apps y marketing digital en Paraguay.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://creazy.studio",
  },
  other: {
    "geo.region": "PY",
    "geo.placename": "Paraguay",
    "geo.position": "-25.2637;-57.5759",
    "ICBM": "-25.2637, -57.5759",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark">
      <head>
        <StructuredData />
        <meta name="google-site-verification" content="your-google-verification-code" />
        <link rel="canonical" href="https://creazy.studio" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#7c3aed" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Creazy Studio" />
      </head>
      <body className="font-bricolage">{children}</body>
    </html>
  );
}
