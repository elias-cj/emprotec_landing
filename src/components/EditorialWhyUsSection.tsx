"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, Shield, Cpu, Award, Lock } from "lucide-react";

export default function EditorialWhyUsSection() {
  const concepts = [
    {
      title: "EXPERTICIA",
      num: "01",
      desc: "Ingenieros altamente calificados que diseñan y ejecutan proyectos bajo normativas internacionales.",
      icon: Award,
      image: "/assets/porque-somos-diferentes-min.webp",
    },
    {
      title: "SEGURIDAD",
      num: "02",
      desc: "Monitoreo perimetral 24/7, ciberseguridad UTM y respaldo contra amenazas físicas y digitales.",
      icon: Lock,
      image: "/assets/cctv.jpg",
    },
    {
      title: "INNOVACIÓN",
      num: "03",
      desc: "Adopción de tecnologías agnósticas de vanguardia para adelantarnos a los cambios del mercado.",
      icon: Cpu,
      image: "/assets/cloud.avif",
    },
    {
      title: "CONFIABILIDAD",
      num: "04",
      desc: "Sistemas energéticos redundantes y contratos de soporte continuo para garantizar cero caídas.",
      icon: Shield,
      image: "/assets/ups.jpg",
    },
  ];

  return (
    <section id="nosotros" className="py-10 bg-slate-100/70 dark:bg-[#0F172A] text-slate-900 dark:text-white relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-2">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#4295DC] bg-white dark:bg-slate-800 px-4 py-1 rounded-full border border-slate-200 dark:border-slate-700/60 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" /> SECCIÓN 05 — POR QUÉ EMPROTEC
          </span>

          <h2 className="text-2xl sm:text-4xl font-black text-[#0E315B] dark:text-white font-['Raleway'] tracking-tight">
            Más que <span className="text-[#4295DC]">tecnología.</span>
          </h2>

          <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm font-light leading-relaxed">
            Construimos soluciones pensadas para que tu empresa pueda avanzar con seguridad.
          </p>
        </div>

        {/* Compact 2x2 Grid Layout (Zero wasted space) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {concepts.map((item, idx) => {
            const IconComp = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white dark:bg-[#1E293B] p-5 sm:p-6 rounded-2xl border border-slate-200/90 dark:border-slate-700/60 shadow-md shadow-slate-200/60 flex flex-col justify-between space-y-4 group hover:border-[#4295DC] transition-all duration-300"
              >
                {/* Image Banner */}
                <div className="relative w-full h-36 sm:h-44 rounded-xl overflow-hidden shadow-md bg-slate-900">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="text-xs font-black font-['Raleway'] text-white bg-[#4295DC] px-2.5 py-0.5 rounded-md shadow">
                      {item.num}
                    </span>
                  </div>
                </div>

                {/* Title & Icon */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <IconComp className="w-4 h-4 text-[#4295DC]" />
                    <h3 className="text-lg font-black text-[#0E315B] dark:text-white font-['Raleway'] tracking-tight">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
