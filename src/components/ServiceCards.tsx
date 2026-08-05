"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface CardItem {
  id: string;
  type: "image" | "text";
  title?: string;
  image?: string;
  description?: string;
}

// 12 cards (6 rows x 2 columns) matching exact layout and EMPROTEC services
const cardsGrid: CardItem[] = [
  // Row 1
  {
    id: "r1-img",
    type: "image",
    image: "/assets/produccion-fabricacion.webp",
  },
  {
    id: "r1-txt",
    type: "text",
    title: "Seguridad, Monitoreo y Control CCTV",
    description: "Cámaras de seguridad CCTV, control de acceso, gestión de asistencia, alarmas perimetrales y supresión de fuego.",
  },
  // Row 2
  {
    id: "r2-txt",
    type: "text",
    title: "Infraestructura Eléctrica y UPS",
    description: "Estructura energética, tableros eléctricos, protección contra descargas/rayos, reguladores de voltaje y respaldo UPS.",
  },
  {
    id: "r2-img",
    type: "image",
    image: "/assets/aprovisionamiento-y-cmpras.webp",
  },
  // Row 3
  {
    id: "r3-img",
    type: "image",
    image: "/assets/blog-data-center-guide-1.jpg",
  },
  {
    id: "r3-txt",
    type: "text",
    title: "Redes, Data Centers y Fibra Óptica",
    description: "Diseño, implementación y cableado estructurado, enlaces corporativos, radio enlaces Wi-Fi y salas de servidores.",
  },
  // Row 4
  {
    id: "r4-txt",
    type: "text", 
    title: "Servidores, Almacenamiento y VPN",
    description: "Configuración de servidores, almacenamiento NAS/SAN, virtualización de sistemas operativos y firewalls de red.",
  },
  {
    id: "r4-img",
    type: "image",
    image: "/assets/distribucion-logistica.webp",
  },
  // Row 5
  {
    id: "r5-img",
    type: "image",
    image: "/assets/comercializacion-ventas.webp",
  },
  {
    id: "r5-txt",
    type: "text",
    title: "Domótica y Climatización de Precisión",
    description: "Automatización de luces y portones, más control de temperatura, humedad y filtrado para áreas críticas.",
  },
  // Row 6
  {
    id: "r6-txt",
    type: "text",
    title: "Proyectos Llave en Mano y Outsourcing IT",
    description: "Ingeniería integral llave en mano, contratos de tercerización de TI y soporte técnico continuo de infraestructura.",
  },
  {
    id: "r6-img",
    type: "image",
    image: "/assets/servicio-cliente-soporte.webp",
  },
];

export default function ServiceCards() {
  return (
    <section id="soluciones" className="py-24 bg-gradient-to-b from-[#F8FAFC] via-[#EBF3FA] to-[#F8FAFC] dark:from-[#191715] dark:via-[#0E315B] dark:to-[#191715] relative text-[#0E315B] dark:text-white overflow-x-clip transition-colors duration-300">
      {/* Background radial glows using palette #4295DC */}
      <div className="absolute top-0 left-0 w-96 h-full bg-gradient-to-r from-[#4295DC]/20 via-transparent to-transparent blur-[140px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-full bg-gradient-to-l from-[#0E315B]/40 via-transparent to-transparent blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Column: Text + Bullets + CTA Button */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6 pt-4 lg:sticky lg:top-28 self-start"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-snug text-[#0E315B] dark:text-white">
              <span className="text-[#4295DC]">Impulsá</span> tu negocio con nuestras Soluciones y Servicios.
            </h2>

            {/* Bullets with > arrow */}
            <div className="space-y-3.5 text-xs sm:text-sm text-[#0E315B] dark:text-slate-200 font-light leading-relaxed">
              <div className="flex items-start space-x-2">
                <span className="text-[#4295DC] font-bold text-base leading-none">&gt;</span>
                <p>
                  <strong className="text-[#0E315B] dark:text-white font-bold">Identificamos y seleccionamos</strong> la tecnología ideal para tu negocio.
                </p>
              </div>

              <div className="flex items-start space-x-2">
                <span className="text-[#4295DC] font-bold text-base leading-none">&gt;</span>
                <p>
                  <strong className="text-[#0E315B] dark:text-white font-bold">Gestionamos</strong> la implementación de principio a fin.
                </p>
              </div>

              <div className="flex items-start space-x-2">
                <span className="text-[#4295DC] font-bold text-base leading-none">&gt;</span>
                <p>
                  <strong className="text-[#0E315B] dark:text-white font-bold">Facilitamos</strong> el cambio y la adopción de nuevas tecnologías.
                </p>
              </div>

              <div className="flex items-start space-x-2">
                <span className="text-[#4295DC] font-bold text-base leading-none">&gt;</span>
                <p>
                  <strong className="text-[#0E315B] dark:text-white font-bold">Ofrecemos</strong> soporte continuo y mejoras constantes.
                </p>
              </div>
            </div>

            {/* Description Paragraph */}
            <p className="text-xs sm:text-sm text-[#5A6B80] dark:text-[#B0B1B0] font-light leading-relaxed pt-2">
              Nuestros servicios son totalmente agnósticos a las marcas y tecnologías, lo que nos permite ofrecerte las mejores soluciones personalizadas, independientemente de la estructura tecnológica existente en tu negocio.
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <Link
                href="#contacto"
                className="inline-block px-7 py-3 rounded-md text-xs font-bold text-white bg-[#4295DC] hover:bg-[#3480c4] shadow-lg shadow-cyan-500/20 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Conversemos &gt;
              </Link>
            </div>
          </motion.div>

          {/* Right Column: 2-Column Grid of 12 Square Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {cardsGrid.map((card, idx) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 45, scale: 0.92 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                viewport={{ once: false, margin: "-40px" }}
                transition={{
                  duration: 0.5,
                  delay: (idx % 2) * 0.1,
                  type: "spring",
                  stiffness: 90,
                }}
                className="aspect-square w-full rounded-2xl overflow-hidden shadow-xl border border-slate-200 dark:border-[#4295DC]/40 relative group cursor-pointer"
              >
                {card.type === "image" ? (
                  /* Image Card */
                  <div className="relative w-full h-full overflow-hidden bg-slate-200 dark:bg-[#0E315B]">
                    <Image
                      src={card.image!}
                      alt="Servicio EMPROTEC"
                      fill
                      className="object-cover object-center group-hover:scale-108 transition-transform duration-500"
                    />
                  </div>
                ) : (
                  /* Dark / Light Text Card with Flip / Hover Reveal */
                  <div className="relative w-full h-full bg-white dark:bg-[#0E315B] p-6 flex flex-col items-center justify-center text-center transition-colors duration-300 group-hover:bg-slate-50 dark:group-hover:bg-[#123E73]">
                    {/* Normal Front View */}
                    <div className="space-y-3 transition-opacity duration-300 group-hover:opacity-10 group-hover:pointer-events-none">
                      <h3 className="text-lg sm:text-xl font-extrabold text-[#0E315B] dark:text-white leading-snug px-2">
                        {card.title}
                      </h3>
                    </div>

                    {/* Hover Reveal View */}
                    <div className="absolute inset-0 p-6 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/95 dark:bg-[#0E315B]/95 backdrop-blur-sm space-y-3">
                      <h3 className="text-base font-extrabold text-[#4295DC]">
                        {card.title}
                      </h3>
                      <p className="text-xs text-[#5A6B80] dark:text-slate-200 leading-relaxed font-light line-clamp-4">
                        {card.description}
                      </p>
                      <span className="text-xs font-bold text-[#4295DC] hover:underline transition-colors">
                        Ver más &gt;
                      </span>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
