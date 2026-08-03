"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function SuccessCases() {
  return (
    <section id="casos-de-exito" className="py-20 bg-gradient-to-b from-[#F8FAFC] via-white to-[#F8FAFC] dark:from-[#191715] dark:via-[#0E315B] dark:to-[#191715] relative text-[#0E315B] dark:text-white overflow-hidden transition-colors duration-300">
      {/* Background glow matching screenshot */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#4295DC]/20 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="text-left space-y-2"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0E315B] dark:text-white">
            Proyectos de <span className="text-[#4295DC]">Ingeniería & Redes</span>
          </h2>
        </motion.div>

        {/* Featured Project Card matching layout */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.94 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          whileHover={{ y: -6, scale: 1.01 }}
          viewport={{ once: false, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white dark:bg-[#0E315B]/90 border border-slate-200 dark:border-[#4295DC]/40 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-md transition-colors duration-300 cursor-pointer"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Image Block Left */}
            <div className="md:col-span-5 relative">
              <div className="relative w-full aspect-square max-w-sm mx-auto rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-[#4295DC]/40">
                <Image
                  src="/assets/comercializacion-y-ventas-01.webp"
                  alt="Implementación de Data Center y CCTV"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>

            {/* Content Block Right */}
            <div className="md:col-span-7 space-y-4">
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#0E315B] dark:text-white leading-snug">
                Diseño e Instalación de Data Center, Redes de Fibra Óptica y CCTV Centralizado
              </h3>
              <p className="text-[#5A6B80] dark:text-[#B0B1B0] text-sm sm:text-base leading-relaxed font-light">
                Proyecto integral "Llave en mano" que incluyó cableado estructurado, respaldo energético con UPS de alta capacidad, climatización de precisión para servidores y sistema de videovigilancia con analítica en tiempo real.
              </p>

              <div className="pt-2">
                <Link
                  href="#contacto"
                  className="inline-block px-6 py-2 rounded-md text-xs font-bold text-white bg-[#4295DC] hover:bg-[#3480c4] transition-colors uppercase tracking-wider shadow-md"
                >
                  Leer más
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
