"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, ArrowUpRight, Building2 } from "lucide-react";

export default function EditorialProjectsSection() {
  const mainProject = {
    title: "Infraestructura Crítica & CCTV 4K para Complejo Industrial",
    client: "Zona Logística Santa Cruz",
    category: "CCTV & Ciberseguridad",
    desc: "Despliegue de 48 cámaras IP 4K ColorVu, anillo redundante de fibra óptica y sala de monitoreo centralizada con supresión de fuego.",
    image: "/assets/cctv.jpg",
  };

  const secondaryProjects = [
    {
      title: "Red Corporativa & Wi-Fi 6 Mesh 5 Pisos",
      client: "Edificio Financiero",
      category: "Redes & Telecomunicaciones",
      image: "/assets/blog-data-center-guide-1.jpg",
    },
    {
      title: "Clúster de Servidores Xeon & Backup Anti-Ransomware",
      client: "Distribuidora Nacional",
      category: "Servidores & Nube",
      image: "/assets/cloud.avif",
    },
    {
      title: "Control de Acceso Biométrico & Torniquetes",
      client: "Centro Comercial",
      category: "Biometría",
      image: "/assets/produccion-fabricacion.webp",
    },
  ];

  return (
    <section id="proyectos" className="py-10 bg-slate-100/70 dark:bg-[#0F172A] text-slate-900 dark:text-white relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div className="max-w-2xl space-y-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-[#4295DC] bg-white dark:bg-slate-800 px-4 py-1.5 rounded-full border border-slate-200 dark:border-slate-700/60 shadow-sm">
              <Sparkles className="w-3.5 h-3.5" /> SECCIÓN 07 — CASOS DE ÉXITO REGIONALES
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#0E315B] dark:text-white font-['Raleway'] tracking-tight">
              Nuestros <span className="text-[#4295DC]">proyectos destacados</span>
            </h2>
          </div>

          <a
            href="#contacto"
            className="text-xs font-extrabold text-[#4295DC] uppercase tracking-wider hover:underline flex items-center gap-1"
          >
            <span>Ver portafolio completo</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Asymmetrical Magazine Layout: 1 Hero Project Left (Span 7) + 3 Secondary Right (Span 5) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Hero Large Project */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-7 bg-white dark:bg-[#1E293B] rounded-3xl overflow-hidden shadow-xl border border-slate-200/90 dark:border-slate-700/60 group flex flex-col justify-between"
          >
            <div className="relative w-full aspect-16/10 overflow-hidden bg-slate-800">
              <Image
                src={mainProject.image}
                alt={mainProject.title}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-90 group-hover:brightness-100"
              />
              <div className="absolute top-5 left-5">
                <span className="text-[10px] font-black uppercase text-white bg-[#0E315B] px-3 py-1 rounded-full shadow-md">
                  Proyecto Destacado
                </span>
              </div>
            </div>

            <div className="p-8 space-y-3">
              <span className="text-xs font-bold text-[#4295DC] uppercase tracking-wider flex items-center gap-1">
                <Building2 className="w-3.5 h-3.5" /> {mainProject.client} — {mainProject.category}
              </span>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0E315B] dark:text-white font-['Raleway'] leading-tight group-hover:text-[#4295DC] transition-colors">
                {mainProject.title}
              </h3>

              <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm font-light leading-relaxed">
                {mainProject.desc}
              </p>
            </div>
          </motion.div>

          {/* Secondary Smaller Projects Column */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {secondaryProjects.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ x: 6 }}
                transition={{ duration: 0.3 }}
                className="bg-white dark:bg-[#1E293B] p-5 rounded-3xl shadow-xl border border-slate-200/80 dark:border-slate-700/60 flex items-center gap-5 group cursor-pointer"
              >
                <div className="relative w-28 h-24 rounded-2xl overflow-hidden shrink-0 bg-slate-200 dark:bg-slate-700/60">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-[#4295DC] uppercase tracking-wider block">
                    {item.category}
                  </span>
                  <h4 className="text-sm font-extrabold text-[#0E315B] dark:text-white font-['Raleway'] leading-snug group-hover:text-[#4295DC] transition-colors line-clamp-2">
                    {item.title}
                  </h4>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 block font-light">
                    {item.client}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
