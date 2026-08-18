import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Creadores de Soft — Software B2B que simplifica tu negocio",
    template: "%s | Creadores de Soft",
  },
  description:
    "Soluciones de software B2B para hotelería, facturación y gestión académica. Más de 10 años transformando negocios con tecnología.",
  keywords: [
    "software",
    "B2B",
    "SaaS",
    "hotelería",
    "facturación",
    "gestión académica",
    "Argentina",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
