import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { content } from "@/lib/content";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${content.meta.siteName} · Villanueva del Trabuco, Málaga`,
    template: `%s · ${content.meta.siteName}`,
  },
  description: content.meta.description.es,
  keywords: content.meta.keywords,
  icons: { icon: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/icons/favicon.png` },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${inter.variable} ${cormorant.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
