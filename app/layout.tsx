import type { Metadata } from "next";
import { Fraunces, Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arclimac | Ar-Condicionado em Campinas e Região",
  description:
    "Instalação, higienização e manutenção de ar-condicionado em Campinas e região, com agilidade e garantia. Atendimento residencial, comercial e PMOC.",
  keywords: [
    "ar condicionado Campinas",
    "instalação ar condicionado",
    "higienização ar condicionado",
    "manutenção ar condicionado",
    "PMOC Campinas",
    "Arclimac",
  ],
};

export const viewport = {
  themeColor: "#070B10",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${fraunces.variable} ${manrope.variable} ${spaceGrotesk.variable} font-body antialiased bg-ink text-frost`}
      >
        {children}
      </body>
    </html>
  );
}
