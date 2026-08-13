"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Sparkles } from "lucide-react";

export interface StatItem {
  id: string;
  value: string;
  targetNum?: number;
  prefix?: string;
  suffix?: string;
  label: string;
  desc: string;
}

const STATS_LIST: StatItem[] = [
  {
    id: "stat-1",
    value: "+10",
    targetNum: 10,
    prefix: "+",
    label: "Años de experiencia",
    desc: "Liderando soluciones de ingeniería en Bolivia.",
  },
  {
    id: "stat-2",
    value: "+100",
    targetNum: 100,
    prefix: "+",
    label: "Proyectos integrales",
    desc: "Redes, CCTV, Data Centers y domótica.",
  },
  {
    id: "stat-3",
    value: "24/7",
    label: "Soporte técnico",
    desc: "Atención proactiva y guardias permanentes.",
  },
  {
    id: "stat-4",
    value: "100%",
    targetNum: 100,
    suffix: "%",
    label: "Compromiso",
    desc: "Garantía oficial y cero intermediarios.",
  },
];

export default function MinimalStatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-8 sm:py-10 bg-white dark:bg-[#0F172A] text-slate-900 dark:text-white border-y border-slate-200/80 dark:border-slate-700/60 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Tag Header */}
        <div className="mb-6 text-center">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#4295DC] bg-slate-100 dark:bg-slate-800 px-4 py-1.5 rounded-full border border-slate-200 dark:border-slate-700/60">
            <Sparkles className="w-3.5 h-3.5" /> SECCIÓN 04 — CIFRAS QUE RESPALDAN NUESTRO TRABAJO
          </span>
        </div>

        {/* Scaled-down Numbers Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {STATS_LIST.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="space-y-1 group"
            >
              {/* Reduced Typography Number */}
              <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0E315B] dark:text-white group-hover:text-[#4295DC] transition-colors duration-300 font-['Raleway'] tracking-tight block">
                {stat.value}
              </span>

              {/* Reduced Label */}
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-200 font-['Raleway']">
                {stat.label}
              </h3>

              {/* Short Description */}
              <p className="text-[11px] text-slate-500 dark:text-slate-300 font-light max-w-xs mx-auto leading-relaxed">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
