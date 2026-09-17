import type { Metadata } from "next";
import { Alice, Pinyon_Script, Quattrocento, Geist_Mono } from "next/font/google";
import "./globals.css";

const alice = Alice({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-alice",
});

const pinyon = Pinyon_Script({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-script",
});

const quattrocento = Quattrocento({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-quattro",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mateo & Vanessa | Nos casamos",
  description:
    "Te invitamos a celebrar con nosotros el 4 de septiembre de 2026 en Club El Zarzal, Copacabana.",
  openGraph: {
    title: "Mateo & Vanessa | Nos casamos",
    description:
      "Porque haces parte de nuestra historia… te invitamos a uno de los días más importantes de nuestra vida.",
    images: ["/media/hero.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${alice.variable} ${pinyon.variable} ${quattrocento.variable} ${geistMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col font-body">{children}</body>
    </html>
  );
}
