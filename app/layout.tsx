import type { Metadata } from "next";
import { DM_Sans, Fraunces, Inter, Noto_Sans, Open_Sans, Playfair_Display, Poppins, Roboto, Sora, Work_Sans } from "next/font/google";
import "./globals.css";

const isi = Poppins({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600"],
});

const header = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Kamil's Portfolio",
  description:
    "Portfolio of Kamil Hayyunaji Fabriano, Geodesy and Geomatics Engineering student at ITB with expertise in hydrography, GIS, and spatial data analysis.",
    icons: {
    icon: "/icon.ico",
  },
};

export default function RootLayout({
  children, 
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${isi.variable} ${header.variable} font-body`}>
        {children}
      </body>
    </html>
  );
}
