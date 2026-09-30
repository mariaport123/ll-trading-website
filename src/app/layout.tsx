import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const orpheus = localFont({
  src: "../../public/fonts/OrpheusPro-Bold.woff2",
  variable: "--font-orpheus",
  weight: "700",
  style: "normal",
});

export const metadata: Metadata = {
  title: "LL Trading OÜ",
  description: "Raamatupidamisteenused alates 1997.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="et" className={`${inter.variable} ${orpheus.variable}`}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}