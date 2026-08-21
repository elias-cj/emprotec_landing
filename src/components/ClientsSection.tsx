"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, CheckCircle2 } from "lucide-react";

export interface ClientLogoItem {
  id: string;
  name: string;
  logoSrc?: string;
  logoSrcDark?: string;
  fallbackText?: string;
}

const CLIENT_LOGOS: ClientLogoItem[] = [
  {
    id: "fidalga",
    name: "Supermercados Fidalga",
    logoSrc: "/assets/logo/fidalga.webp",
  },
  {
    id: "nur",
    name: "NUR Srl",
    logoSrc: "/logos_clientes/nur_modo_claro.png",
    logoSrcDark: "/logos_clientes/nur_modo_oscuro.png",
  },
  {
    id: "orbol",
    name: "Orbol, S.A.",
    logoSrc: "/logos_clientes/orbol.png",
  },
  {
    id: "lido",
    name: "Hotel Lido",
    logoSrc: "/logos_clientes/hotel lido.avif",
  },
  {
    id: "bolivian-automotors",
    name: "Bolivian Automotors",
    logoSrc: "/logos_clientes/bolivians automotors.jpg",
  },
  {
    id: "mamaya",
    name: "Mamaya Tech",
    logoSrc: "/logos_clientes/mamaya tech.jpg",
  },
  {
    id: "principito",
    name: "Cadena Hotelera Principito",
    logoSrc: "/logos_clientes/cadena hotelera el principito.jpg",
  },
  {
    id: "aip",
    name: "AIP",
    fallbackText: "AIP",
  },
  {
    id: "zuka",
    name: "Grupo Zuka",
    fallbackText: "GRUPO ZUKA",
    logoSrc: "/logos_clientes/zucar.jpeg",
  },
];

// Duplicamos la lista para un scroll infinito sin saltos
const MARQUEE_LOGOS = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

export default function ClientsSection() {
  return (
    <section id="empresas-clientes" className="py-10 bg-slate-100/60 dark:bg-[#0F172A] text-slate-900 dark:text-white relative overflow-hidden transition-colors duration-300 border-t border-slate-200/80 dark:border-slate-700/60">
      
      {/* Background Decorative Ambient Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#4295DC]/5 dark:bg-[#4295DC]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#4295DC] bg-white dark:bg-slate-800 px-4 py-1.5 rounded-full border border-slate-200 dark:border-slate-700/60 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5" /> CONFÍAN EN EMPROTEC
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0E315B] dark:text-white tracking-tight font-['Raleway']"
          >
            Nuestros <span className="text-[#4295DC]">Clientes</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12 }}
            className="text-slate-600 dark:text-slate-300 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed"
          >
            Infraestructura tecnológica, redes y seguridad electrónica respaldando a las organizaciones y empresas líderes de Bolivia.
          </motion.p>
        </div>

        {/* Marquee Container with Left & Right Gradient Shadows */}
        <div className="relative w-full overflow-hidden py-4">
          
          {/* Left Gradient Fade Mask */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-slate-100/60 dark:from-[#0F172A] to-transparent z-10" />

          {/* Right Gradient Fade Mask */}
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-slate-100/60 dark:from-[#0F172A] to-transparent z-10" />

          {/* Animated Ticker Track Moving Right to Left */}
          <motion.div
            className="flex items-center gap-12 sm:gap-16 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 25,
            }}
          >
            {MARQUEE_LOGOS.map((client, idx) => (
              <div
                key={`${client.id}-${idx}`}
                className="flex items-center justify-center cursor-pointer group shrink-0 transition-transform duration-300 hover:scale-110"
                title={client.name}
              >
                {client.logoSrc ? (
                  <div className="relative w-44 sm:w-56 h-20 sm:h-24 flex items-center justify-center p-3 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 shadow-md group-hover:shadow-xl group-hover:border-[#4295DC]/60 transition-all">
                    {client.logoSrcDark ? (
                      <>
                        <Image
                          src={client.logoSrc}
                          alt={client.name}
                          width={220}
                          height={100}
                          className="max-h-16 sm:max-h-20 w-auto object-contain filter opacity-95 group-hover:opacity-100 dark:hidden group-hover:scale-105 transition-all duration-300"
                        />
                        <Image
                          src={client.logoSrcDark}
                          alt={client.name}
                          width={220}
                          height={100}
                          className="max-h-16 sm:max-h-20 w-auto object-contain filter opacity-95 group-hover:opacity-100 hidden dark:block dark:brightness-110 group-hover:scale-105 transition-all duration-300"
                        />
                      </>
                    ) : (
                      <Image
                        src={client.logoSrc}
                        alt={client.name}
                        width={220}
                        height={100}
                        className="max-h-16 sm:max-h-20 w-auto object-contain filter opacity-95 group-hover:opacity-100 dark:brightness-110 group-hover:scale-105 transition-all duration-300"
                      />
                    )}
                  </div>
                ) : (
                  <div className="w-44 sm:w-56 h-20 sm:h-24 flex flex-col items-center justify-center px-4 text-center rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 group-hover:border-[#4295DC] shadow-md group-hover:shadow-xl transition-all">
                    <span className="text-sm sm:text-base font-black tracking-wider uppercase text-[#0E315B] dark:text-white group-hover:text-[#4295DC] font-['Raleway'] transition-colors">
                      {client.fallbackText}
                    </span>
                    <span className="text-[10px] text-[#4295DC] font-bold uppercase tracking-widest block mt-1">
                      Cliente Homologado
                    </span>
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Minimal Footer Tag */}
        <div className="text-center pt-4 border-t border-slate-100 dark:border-slate-800/80">
          <p className="inline-flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-medium">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Más de 50 proyectos corporativos ejecutados con éxito en todo el país.
          </p>
        </div>

      </div>
    </section>
  );
}
