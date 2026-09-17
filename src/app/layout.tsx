import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Great_Vibes,
  Lora,
  Geist_Mono,
} from "next/font/google";
import { wedding } from "@/lib/wedding";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-cormorant",
});

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-great-vibes",
});

const lora = Lora({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-lora",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${wedding.namesDisplay} | Nuestra boda`,
  description: `${wedding.inviteLead} ${wedding.inviteBody}`,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${cormorant.variable} ${greatVibes.variable} ${lora.variable} ${geistMono.variable} h-full`}
    >
      <body className="flex min-h-full flex-col font-body">{children}</body>
    </html>
  );
}
