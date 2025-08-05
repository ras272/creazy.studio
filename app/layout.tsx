import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Creazy Studio - Estudio Creativo Y2K",
  description:
    "Estudio creativo especializado en diseño visual impactante, branding futurista y experiencias digitales únicas.",
  keywords:
    "estudio creativo, diseño Y2K, branding, diseño gráfico, experiencias digitales",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark">
      <body className="font-bricolage">{children}</body>
    </html>
  );
}
