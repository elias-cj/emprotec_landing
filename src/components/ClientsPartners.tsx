"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Server, ShieldAlert, Cpu, Zap, Wifi } from "lucide-react";

export default function ClientsPartners() {
  const catalogCategories = [
    {
      title: "Sistemas & Licenciamiento",
      desc: "Sistemas Operativos y entornos de Virtualización (Máquinas Virtuales).",
      icon: Cpu,
    },
    {
      title: "Servidores & Almacenamiento",
      desc: "Servidores físicos, sistemas NAS/SAN y almacenamiento corporativo de alta densidad.",
      icon: Server,
    },
    {
      title: "Redes & Conectividad",
      desc: "Switches, routers, antenas, fibra óptica y equipamiento de red estructurado.",
      icon: Wifi,
    },
    {
      title: "Seguridad & Detección",
      desc: "Cámaras CCTV, sensores, grabadores NVR/DVR y equipos de supresión de fuego.",
      icon: ShieldAlert,
    },
    {
      title: "Energía & Protección Climática",
      desc: "UPS, Reguladores de Voltaje, acondicionadores de clima de precisión e iluminación técnica.",
      icon: Zap,
    },
  ];

  return (
    <section id="clientes" className="py-20 bg-white dark:bg-[#0F172A] text-slate-900 dark:text-white relative overflow-hidden transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">

        {/* Section 1: Catálogo de Productos y Equipamiento */}
        <div className="space-y-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            className="space-y-3"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0E315B] dark:text-white">
              Catálogo de <span className="text-[#4295DC]">Productos y Equipamiento</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base max-w-2xl mx-auto font-light">
              Provisión e instalación especializada con garantía oficial e ingeniería a medida.
            </p>
          </motion.div>

          {/* Grid of 5 Product Catalog Categories */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            {catalogCategories.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <motion.div
                  key={cat.title}
                  initial={{ opacity: 0, y: 35, scale: 0.92 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  whileHover={{ y: -8, scale: 1.03 }}
                  viewport={{ once: false, margin: "-40px" }}
                  transition={{
                    duration: 0.45,
                    delay: idx * 0.08,
                    type: "spring",
                    stiffness: 110,
                  }}
                  className="p-6 rounded-2xl bg-slate-50 dark:bg-[#1E293B] border border-slate-200/80 dark:border-slate-700/60 shadow-md hover:shadow-xl transition-colors duration-300 text-left space-y-3 cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#4295DC]/15 flex items-center justify-center text-[#4295DC]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#0E315B] dark:text-white">{cat.title}</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{cat.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Section 2: Marcas & Soluciones Recomendadas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="space-y-8 text-center pt-8 border-t border-slate-200 dark:border-slate-700/60"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0E315B] dark:text-white">
            Marcas & <span className="text-[#4295DC]">Partners Tecnológicos</span>
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-14 pt-4">
            {[
              { name: "Cisco Systems", logo: "/assets/partners/cisco.svg" },
              { name: "Fortinet", logo: "/assets/partners/fortinet.svg" },
              { name: "Ubiquiti Networks", logo: "/assets/partners/ubiquiti.svg" },
              { name: "Hikvision", logo: "/assets/partners/hikvision.svg" },
              { name: "Hanwha Vision", logo: "/assets/partners/hanwha.svg" },
              { name: "APC by Schneider", logo: "/assets/partners/apc.svg" },
              { name: "VMware", logo: "/assets/partners/vmware.svg" },
              { name: "MikroTik", logo: "/assets/partners/mikrotik.svg" },
            ].map((partner, idx) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.12 }}
                viewport={{ once: false }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="flex items-center justify-center p-2 cursor-pointer group"
                title={partner.name}
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={200}
                  height={80}
                  className="h-12 sm:h-16 md:h-18 max-w-[160px] sm:max-w-[200px] md:max-w-[220px] w-auto object-contain filter opacity-85 group-hover:opacity-100 dark:brightness-125 dark:group-hover:brightness-150 transition-all duration-300"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
