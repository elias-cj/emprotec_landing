import type { Metadata } from "next";
import { Raleway, Lato } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800", "900"],
  variable: "--font-raleway",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "EMPROTEC | Soluciones Tecnológicas e Ingeniería",
  description: "Soluciones personalizadas para tu hogar o empresa. Proveemos e instalamos equipamiento de alta calidad en redes, seguridad, UPS, servidores y domótica en Santa Cruz, Bolivia.",
  keywords: ["EMPROTEC", "Servicios TI", "CCTV", "Fibra Óptica", "Cableado Estructurado", "UPS", "Servidores", "Santa Cruz Bolivia"],
  openGraph: {
    title: "EMPROTEC – Soluciones Tecnológicas e Ingeniería",
    description: "Soluciones personalizadas para tu hogar o empresa. Proveemos e instalamos equipamiento de alta calidad.",
    url: "https://emprotec.com.bo",
    siteName: "EMPROTEC",
    locale: "es_BO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`dark ${raleway.variable} ${lato.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#FFFFFF] dark:bg-[#191715] text-[#0E315B] dark:text-[#FFFFFF] antialiased selection:bg-[#4295DC] selection:text-white transition-colors duration-300">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
