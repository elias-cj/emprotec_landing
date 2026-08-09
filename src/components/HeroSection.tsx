"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Server, Network, ShieldCheck, Zap, ArrowRight, ChevronDown, Sparkles } from "lucide-react";

export default function HeroSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const { scrollY } = useScroll();
  const heroScale = useTransform(scrollY, [0, 400], [1, 0.96]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0.6]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 30; // -15 to 15 deg
    const y = (clientY / innerHeight - 0.5) * 30;
    setMousePos({ x, y });
  };

  return (
    <motion.section
      id="inicio"
      style={{ scale: heroScale, opacity: heroOpacity }}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen pt-28 pb-16 flex flex-col justify-between bg-white dark:bg-[#181818] text-slate-900 dark:text-white overflow-hidden select-none transition-colors duration-300"
    >
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#4295DC]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-slate-100/80 dark:bg-neutral-900/40 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 my-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines & CTAs (Scaled Down Text) */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* Tag Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 dark:bg-[#1F1F1F] border border-slate-200 dark:border-neutral-800 text-[#4295DC] text-[11px] font-bold uppercase tracking-wider"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>EMPROTEC — Soluciones TIC & Ingeniería</span>
            </motion.div>

            {/* Scaled Down Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#0E315B] dark:text-white font-['Raleway'] tracking-tight leading-[1.15]"
            >
              Infraestructura tecnológica que{" "}
              <span className="text-[#4295DC] underline decoration-[#4295DC]/30 underline-offset-6">
                impulsa tu negocio.
              </span>
            </motion.h1>

            {/* Scaled Down Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-slate-600 dark:text-slate-300 text-xs sm:text-base font-light leading-relaxed max-w-xl"
            >
              Diseñamos, instalamos y mantenemos soluciones de alta disponibilidad: Redes de Fibra Óptica, CCTV, Data Centers, UPS y Domótica en Santa Cruz, Bolivia.
            </motion.p>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3 pt-1"
            >
              <Link
                href="#contacto"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-xs font-extrabold text-white bg-[#0E315B] dark:bg-[#4295DC] hover:bg-[#4295DC] dark:hover:bg-[#3480c4] shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 group"
              >
                <span>Solicitar cotización</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="#soluciones"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs font-extrabold text-[#0E315B] dark:text-white bg-slate-100 dark:bg-[#1F1F1F] hover:bg-slate-200 dark:hover:bg-neutral-800 transition-colors border border-slate-200 dark:border-neutral-800"
              >
                <span>Explorar Soluciones</span>
              </Link>
            </motion.div>

            {/* Micro Feature Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl"
            >
              <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-700 dark:text-slate-300">
                <Server className="w-3.5 h-3.5 text-[#4295DC]" /> Data Centers
              </div>
              <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-700 dark:text-slate-300">
                <Network className="w-3.5 h-3.5 text-[#4295DC]" /> Fibra 10G
              </div>
              <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-700 dark:text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-[#4295DC]" /> CCTV 4K
              </div>
              <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-700 dark:text-slate-300">
                <Zap className="w-3.5 h-3.5 text-[#4295DC]" /> UPS Online
              </div>
            </motion.div>

          </div>

          {/* Right Column: LARGER FLOATING EMPROTEC LOGO */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            <motion.div
              style={{
                rotateY: mousePos.x,
                rotateX: -mousePos.y,
              }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="relative w-full max-w-xl flex items-center justify-center p-2 group"
            >
              {/* Enhanced Backlight Aura Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 sm:w-[480px] h-96 sm:h-[480px] bg-[#4295DC]/20 dark:bg-[#4295DC]/35 rounded-full blur-3xl pointer-events-none group-hover:scale-110 transition-transform duration-700" />

              {/* Pure Floating Logo Image (Larger Size) */}
              <Image
                src="/assets/logo/logo_emprotec.png"
                alt="EMPROTEC Logo Oficial"
                width={700}
                height={280}
                className="w-full max-w-[480px] sm:max-w-[600px] h-auto object-contain group-hover:scale-105 transition-transform duration-700 filter drop-shadow-[0_20px_40px_rgba(66,149,220,0.35)]"
                priority
              />
            </motion.div>
          </div>

        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <div className="relative z-10 flex justify-center pt-6">
        <a
          href="#seccion-movimiento"
          className="inline-flex items-center gap-2 text-xs font-extrabold text-slate-400 hover:text-[#4295DC] uppercase tracking-widest transition-colors animate-bounce"
        >
          <span>SCROLL</span>
          <ChevronDown className="w-4 h-4 text-[#4295DC]" />
        </a>
      </div>
    </motion.section>
  );
}
