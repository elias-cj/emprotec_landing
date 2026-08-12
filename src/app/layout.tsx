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
  metadataBase: new URL("https://emprotec.com.bo"),
  title: {
    default: "EMPROTEC | Soluciones Tecnológicas, Ciberseguridad e Infraestructura TI en Bolivia",
    template: "%s | EMPROTEC Bolivia",
  },
  description:
    "Líder en soluciones de ingeniería e infraestructura tecnológica en Santa Cruz, Bolivia: Redes de Fibra Óptica, Servidores, Data Center, CCTV 4K, Ciberseguridad, UPS Online y Domótica.",
  keywords: [
    "EMPROTEC",
    "EMPROTEC Bolivia",
    "EMPROTEC Santa Cruz",
    "Servidores Data Center Bolivia",
    "Fibra Óptica Santa Cruz",
    "CCTV 4K Ciberseguridad",
    "UPS Online Bolivia",
    "Domótica Nube Híbrida",
    "Cableado Estructurado Santa Cruz",
    "Ingeniería Tecnológica Bolivia",
    "Soluciones TIC Santa Cruz",
  ],
  authors: [{ name: "EMPROTEC SRL", url: "https://emprotec.com.bo" }],
  creator: "EMPROTEC SRL",
  publisher: "EMPROTEC SRL",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://emprotec.com.bo/",
  },
  openGraph: {
    title: "EMPROTEC | Soluciones Tecnológicas e Ingeniería de Infraestructura TI",
    description:
      "Diseñamos e instalamos soluciones de alta disponibilidad: Redes de Fibra Óptica, CCTV 4K, Data Centers, UPS y Domótica en Santa Cruz, Bolivia.",
    url: "https://emprotec.com.bo",
    siteName: "EMPROTEC",
    locale: "es_BO",
    type: "website",
    images: [
      {
        url: "/assets/logo/logo_emprotec.png",
        width: 1200,
        height: 630,
        alt: "EMPROTEC Soluciones Tecnológicas Bolivia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EMPROTEC | Soluciones Tecnológicas e Ingeniería de Infraestructura TI",
    description:
      "Diseñamos e instalamos soluciones de alta disponibilidad: Redes de Fibra Óptica, CCTV 4K, Data Centers, UPS y Domótica en Santa Cruz, Bolivia.",
    images: ["/assets/logo/logo_emprotec.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/assets/logo/logo_emprotec.png",
    shortcut: "/assets/logo/logo_emprotec.png",
    apple: "/assets/logo/logo_emprotec.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://emprotec.com.bo/#organization",
    name: "EMPROTEC",
    legalName: "EMPROTEC SRL",
    url: "https://emprotec.com.bo",
    logo: "https://emprotec.com.bo/assets/logo/logo_emprotec.png",
    image: "https://emprotec.com.bo/assets/logo/logo_emprotec.png",
    description:
      "Líder en soluciones de ingeniería e infraestructura tecnológica: Servidores, Data Centers, Fibra Óptica, CCTV 4K, UPS Online y Domótica en Santa Cruz, Bolivia.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Santa Cruz de la Sierra",
      addressRegion: "Santa Cruz",
      addressCountry: "BO",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -17.7833,
      longitude: -63.1821,
    },
    areaServed: {
      "@type": "Country",
      name: "Bolivia",
    },
    priceRange: "$$",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios e Infraestructura TI",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Servidores & Data Center",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Fibra Óptica & Redes 10G",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "CCTV 4K & Ciberseguridad",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "UPS Online & Respaldo Energético",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Domótica & Nube Híbrida",
          },
        },
      ],
    },
  };

  return (
    <html lang="es" className={`dark ${raleway.variable} ${lato.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#FFFFFF] dark:bg-[#0F172A] text-[#0E315B] dark:text-[#FFFFFF] antialiased selection:bg-[#4295DC] selection:text-white transition-colors duration-300">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
