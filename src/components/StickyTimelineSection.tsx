"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Search, Compass, Wrench, Sliders, Headphones, Sparkles, CheckCircle2 } from "lucide-react";

export interface TimelineStage {
  num: string;
  title: string;
  subtitle: string;
  desc: string;
  icon: any;
  image: string;
}

const STAGES: TimelineStage[] = [
  {
    num: "01",
    title: "Diagnóstico",
    subtitle: "Levantamiento de requerimientos en sitio",
    desc: "Evaluamos la infraestructura existente, cuellos de botella de red y riesgos de seguridad física y lógica.",
    icon: Search,
    image: "/assets/produccion-fabricacion.webp",
  },
  {
    num: "02",
    title: "Diseño",
    subtitle: "Planos de ingeniería & cálculo de cargas",
    desc: "Diseñamos la arquitectura de red, cálculo de respaldo eléctrico UPS y esquema de videovigilancia CCTV a medida.",
    icon: Compass,
    image: "/assets/blog-data-center-guide-1.jpg",
  },
  {
    num: "03",
    title: "Implementación",
    subtitle: "Instalación llave en mano sin intermediarios",
    desc: "Montaje de racks, tendido y certificación de fibra óptica, armado de tableros eléctricos y configuración de servidores.",
    icon: Wrench,
    image: "/assets/aprovisionamiento-y-cmpras.webp",
  },
  {
    num: "04",
    title: "Optimización",
    subtitle: "Pruebas de estrés & auditoría de rendimiento",
    desc: "Validamos el balanceo de carga, calidad de servicio QoS en Wi-Fi 6 y redundancia ante fallos eléctricos.",
    icon: Sliders,
    image: "/assets/distribucion-logistica.webp",
  },
  {
    num: "05",
    title: "Soporte",
    subtitle: "Mantenimiento proactivo & guardias 24/7",
    desc: "Contratos de tercerización IT, soporte preventivo continuo y asistencia técnica ante cualquier eventualidad.",
    icon: Headphones,
    image: "/assets/servicio-cliente-soporte.webp",
  },
];

export default function StickyTimelineSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeStage = STAGES[activeIdx];
  const IconActive = activeStage.icon;

  return (
    <section id="metodologia" className="py-24 bg-white dark:bg-[#0F172A] text-slate-900 dark:text-white relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-[#4295DC] bg-slate-100 dark:bg-slate-800 px-4 py-1.5 rounded-full border border-slate-200 dark:border-slate-700/60">
            <Sparkles className="w-3.5 h-3.5" /> SECCIÓN 06 — METODOLOGÍA PROBADA
          </span>

          <h2 className="text-3xl sm:text-5xl font-black text-[#0E315B] dark:text-white mt-4 mb-4 font-['Raleway'] tracking-tight">
            Del desafío a la <span className="text-[#4295DC]">solución.</span>
          </h2>

          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base font-light leading-relaxed">
            Un proceso riguroso en 5 etapas que asegura ejecuciones impecables, dentro de presupuesto y sin interrupciones.
          </p>
        </div>

        {/* Timeline Progress Nav Bar */}
        <div className="relative mb-12">
          {/* Progress Bar Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-slate-200 dark:bg-neutral-800 -translate-y-1/2 z-0" />
          <div
            className="hidden md:block absolute top-1/2 left-0 h-1 bg-[#4295DC] -translate-y-1/2 z-0 transition-all duration-500"
            style={{ width: `${(activeIdx / (STAGES.length - 1)) * 100}%` }}
          />

          {/* Stage Buttons */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 relative z-10">
            {STAGES.map((stg, idx) => {
              const isCurrent = activeIdx === idx;
              return (
                <button
                  key={stg.num}
                  onClick={() => setActiveIdx(idx)}
                  className={`p-4 rounded-2xl text-left transition-all duration-300 border flex flex-col justify-between ${
                    isCurrent
                      ? "bg-[#0E315B] dark:bg-[#4295DC] text-white border-[#0E315B] dark:border-[#4295DC] shadow-xl scale-105"
                      : "bg-slate-50 dark:bg-[#1E293B] text-slate-700 dark:text-slate-200 border-slate-200/80 dark:border-slate-700/60 hover:bg-slate-100 dark:hover:bg-slate-700/60"
                  }`}
                >
                  <span
                    className={`text-xs font-black font-['Raleway'] px-2 py-0.5 rounded w-max mb-2 ${
                      isCurrent ? "bg-[#4295DC] dark:bg-slate-900 text-white" : "bg-slate-200 dark:bg-slate-700/60 text-slate-700 dark:text-slate-200"
                    }`}
                  >
                    {stg.num}
                  </span>
                  <span className="text-sm font-extrabold font-['Raleway'] block">
                    {stg.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Display Panel for Active Stage */}
        <motion.div
          key={activeStage.num}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-slate-50 dark:bg-[#1E293B] rounded-3xl p-8 sm:p-12 shadow-2xl border border-slate-200/80 dark:border-slate-700/60"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Info */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#4295DC] text-white flex items-center justify-center font-bold">
                  <IconActive className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-black uppercase text-[#4295DC] block">
                    Etapa {activeStage.num} de 05
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-[#0E315B] dark:text-white font-['Raleway']">
                    {activeStage.title}
                  </h3>
                </div>
              </div>

              <h4 className="text-base font-bold text-slate-800 dark:text-slate-200 font-['Raleway']">
                {activeStage.subtitle}
              </h4>

              <p className="text-slate-600 dark:text-slate-300 text-sm font-light leading-relaxed">
                {activeStage.desc}
              </p>

              <div className="pt-2 flex items-center gap-2 text-xs font-bold text-[#4295DC]">
                <CheckCircle2 className="w-4 h-4" />
                <span>Garantía y entrega de informes certificados EMPROTEC</span>
              </div>
            </div>

            {/* Right Visual Image */}
            <div className="lg:col-span-6">
              <div className="relative w-full aspect-16/10 rounded-2xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-700/60">
                <Image
                  src={activeStage.image}
                  alt={activeStage.title}
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
