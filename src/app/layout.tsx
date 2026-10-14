import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import GlobalGlow from "@/components/GlobalGlow";
import CustomCursor from "@/components/CustomCursor";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const clearface = localFont({
  src: "../../public/fonts/Clearface.otf",
  variable: "--font-clearface",
  weight: "400",
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
    <html lang="et" className={`${inter.variable} ${clearface.variable}`}>
      <body className="min-h-screen">
        <GlobalGlow />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}