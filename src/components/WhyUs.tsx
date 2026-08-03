"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function WhyUs() {
  return (
    <section id="por-que-nosotros" className="py-20 bg-gradient-to-b from-[#F0F5FA] via-white to-[#F0F5FA] dark:from-[#191715] dark:via-[#0E315B]/80 dark:to-[#191715] relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">

        {/* Block 1: ¿Por qué elegir a EMPROTEC? */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          whileHover={{ y: -6 }}
          viewport={{ once: false, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white dark:bg-[#0E315B] text-slate-900 dark:text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-200 dark:border-[#4295DC]/30 transition-all duration-300"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Image Left */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-[#4295DC]/30">
                <Image
                  src="/assets/porque-somos-diferentes-min.webp"
                  alt="¿Por qué elegir a EMPROTEC?"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>

            {/* Content Right */}
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0E315B] dark:text-white">
                ¿Por qué elegir a <span className="text-[#4295DC]">EMPROTEC</span>?
              </h2>

              <div className="space-y-3 text-slate-700 dark:text-[#B0B1B0] text-sm sm:text-base leading-relaxed">
                <p>
                  <strong className="text-[#4295DC] font-bold">Proyectos "Llave en mano":</strong> Diseñamos, proveemos e instalamos la infraestructura completa sin fricciones ni intermediarios.
                </p>
                <p>
                  <strong className="text-[#4295DC] font-bold">Equipamiento de Alta Calidad:</strong> Trabajamos exclusivamente con marcas reconocidas para redes, seguridad CCTV, energía y climatización.
                </p>
                <p>
                  <strong className="text-[#4295DC] font-bold">Outsourcing de TI & Soporte:</strong> Contratos de tercerización de TI y mantenimiento preventivo para garantizar continuidad operativa 24/7.
                </p>
                <p>
                  <strong className="text-[#4295DC] font-bold">Respaldo Energético y de Seguridad:</strong> Soluciones robustas contra descargas atmosféricas, interrupciones eléctricas y amenazas físicas.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href="#contacto"
                  className="inline-block px-6 py-2.5 rounded-md text-xs font-bold text-white bg-[#4295DC] hover:bg-[#3480c4] transition-colors uppercase tracking-wider shadow-md"
                >
                  Ver más
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Block 2: ¿Por qué contar con un aliado en ingeniería y TI? */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          whileHover={{ y: -6 }}
          viewport={{ once: false, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white dark:bg-[#0E315B] text-slate-900 dark:text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-200 dark:border-[#4295DC]/30 transition-all duration-300"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Content Left */}
            <div className="lg:col-span-7 space-y-5 order-2 lg:order-1">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0E315B] dark:text-white">
                ¿Por qué contar con un <span className="text-[#4295DC]">aliado en ingeniería y TI</span>?
              </h2>

              <div className="space-y-3 text-slate-700 dark:text-[#B0B1B0] text-sm sm:text-base leading-relaxed">
                <p>
                  Tanto en proyectos corporativos como residenciales, contar con ingenieros especializados asegura que el cableado estructurado, la fibra óptica, los servidores y los respaldos energéticos cumplan con normativas internacionales.
                </p>
                <p>
                  Optimizamos tus costos de infraestructura, prevenimos fallas críticas en salas de servidores y te brindamos tranquilidad con monitoreo y videovigilancia permanente.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href="#contacto"
                  className="inline-block px-6 py-2.5 rounded-md text-xs font-bold text-white bg-[#4295DC] hover:bg-[#3480c4] transition-colors uppercase tracking-wider shadow-md"
                >
                  Ver más
                </Link>
              </div>
            </div>

            {/* Image Right */}
            <div className="lg:col-span-5 relative flex justify-center order-1 lg:order-2">
              <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-[#4295DC]/30">
                <Image
                  src="/assets/aliado-acelaracion-nuevo.webp"
                  alt="Aliado en Ingeniería y TI EMPROTEC"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
