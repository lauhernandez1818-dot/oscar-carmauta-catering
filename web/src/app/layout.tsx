import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const siteDescription =
  "Carta de presentacion profesional de Oscar Carmauta: catering, eventos y soluciones de alimentacion en Catia La Mar, Vargas.";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ??
      (process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : "http://localhost:3000"),
  ),
  title: "Oscar Carmauta | Catering para eventos",
  description: siteDescription,
  openGraph: {
    title: "Oscar Carmauta | Catering para eventos",
    description: siteDescription,
    locale: "es_VE",
    type: "website",
    images: [
      {
        url: "/LOGOOC.jpg",
        width: 512,
        height: 512,
        alt: "Oscar Carmauta — Catering",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Oscar Carmauta | Catering para eventos",
    description: siteDescription,
    images: ["/LOGOOC.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${display.variable} ${sans.variable}`}>{children}</body>
    </html>
  );
}
