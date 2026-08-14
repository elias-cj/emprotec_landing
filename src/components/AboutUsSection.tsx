"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldCheck, Cpu, Network, Server, Building2, Users, Award, CheckCircle2, Sparkles } from "lucide-react";

export default function AboutUsSection() {
  const metrics = [
    { value: "+500", label: "Proyectos realizados", desc: "Instalaciones de CCTV, redes y tableros." },
    { value: "+200", label: "Clientes satisfechos", desc: "Empresas y residencias en Bolivia." },
    { value: "+10", label: "Años de experiencia", desc: "Ingeniería de vanguardia certificada." },
    { value: "+1,000", label: "Equipos instalados", desc: "Servidores, UPS, cámaras y routers." },
  ];

  const specialties = [
    "Infraestructura tecnológica de alta densidad",
    "Seguridad electrónica & Videovigilancia 4K",
    "Redes corporativas & Telecomunicaciones",
    "Automatización domótica & Portones inteligentes",
    "Servidores físicos, virtualización & Cloud",
    "Soluciones empresariales llave en mano",
  ];

  return (
    <section id="nosotros" className="py-24 bg-white dark:bg-[#0F172A] relative overflow-hidden transition-colors duration-300">
      {/* Background glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#4295DC]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image showcase */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full aspect-4/3 sm:aspect-16/10 lg:aspect-4/3 rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-[#4295DC]/30 group">
              <Image
                src="/assets/datacenter.jpg"
                alt="Nosotros EMPROTEC Santa Cruz Bolivia"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E315B]/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/90 dark:bg-[#0E315B]/90 backdrop-blur-md border border-[#4295DC]/30">
                <span className="text-[10px] font-bold text-[#4295DC] uppercase tracking-wider block">
                  Sede Principal
                </span>
                <h3 className="text-sm font-extrabold text-[#0E315B] dark:text-white font-['Raleway']">
                  Santa Cruz — Bolivia
                </h3>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Specialties */}
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#4295DC] bg-[#4295DC]/10 px-4 py-1.5 rounded-full border border-[#4295DC]/30">
              <Sparkles className="w-3.5 h-3.5" /> Sobre EMPROTEC
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0E315B] dark:text-white font-['Raleway'] tracking-tight">
              Tecnología que impulsa tus <span className="text-[#4295DC]">proyectos</span>
            </h2>

            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base font-light leading-relaxed">
              En EMPROTEC nos especializamos en la venta, provisión, ingeniería e instalación de soluciones tecnológicas integrales para hogares y empresas en Santa Cruz y toda Bolivia.
            </p>

            {/* Specialties list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {specialties.map((spec, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-[#0E315B] dark:text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#4295DC] shrink-0" />
                  <span>{spec}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link
                href="#contacto"
                className="inline-block px-8 py-3.5 rounded-xl text-xs font-extrabold text-white bg-[#4295DC] hover:bg-[#3480c4] shadow-lg shadow-cyan-500/20 transition-all transform hover:-translate-y-0.5"
              >
                Conoce más sobre nosotros &gt;
              </Link>
            </div>
          </div>

        </div>

        {/* Counter Metrics Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-6 border-t border-slate-100 dark:border-slate-700/60">
          {metrics.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              className="p-6 rounded-3xl bg-slate-50 dark:bg-[#1E293B] border border-slate-200/80 dark:border-slate-700/60 text-center space-y-1"
            >
              <span className="text-3xl sm:text-4xl font-black text-[#4295DC] font-['Raleway'] block">
                {item.value}
              </span>
              <h3 className="text-xs sm:text-sm font-bold text-[#0E315B] dark:text-white font-['Raleway']">
                {item.label}
              </h3>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-light">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
