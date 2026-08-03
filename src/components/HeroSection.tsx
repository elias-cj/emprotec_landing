'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, Server, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden tech-grid-bg transition-colors duration-400">
      {/* Background Glowing Ambient Orbs */}
      <div className="glow-orb-blue top-10 left-1/4 -translate-x-1/2 opacity-70 animate-pulse" />
      <div className="glow-orb-navy bottom-10 right-10 opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Top Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4295DC]/10 border border-[#4295DC]/40 text-[#4295DC] dark:text-[#4295DC] text-xs sm:text-sm font-bold tracking-wide mb-6 shadow-sm backdrop-blur-md">
              <span className="w-2.5 h-2.5 rounded-full bg-[#4295DC] animate-ping" />
              <span>Ingeniería & Servicios TIC Especializados</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0E315B] dark:text-white leading-tight mb-6 font-['Raleway'] tracking-tight">
              Soluciones Tecnológicas <br />
              <span className="gradient-text-blue">Avanzadas & Seguridad</span> <br />
              para Tu Empresa
            </h1>

            {/* Paragraph Content */}
            <p className="text-lg sm:text-xl text-[#58697d] dark:text-[#B0B1B0] mb-8 max-w-2xl leading-relaxed font-light">
              En <strong className="text-[#0E315B] dark:text-white font-semibold">EMPROTEC</strong> proveemos equipamiento tecnológico de vanguardia, diseñamos estructuras de red de alto rendimiento y desarrollamos proyectos de seguridad integral y outsourcing IT.
            </p>

            {/* Key Quick Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 w-full max-w-xl">
              {[
                'Infraestructura & Protección UPS',
                'Seguridad CCTV y Control de Acceso',
                'Climatización y Servidores TI',
                'Contratos de Tercerización IT',
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-sm text-[#0E315B] dark:text-[#FFFFFF] font-medium">
                  <CheckCircle2 className="w-4.5 h-4.5 text-[#4295DC] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <Link
                href="#tienda"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#4295DC] hover:bg-[#3482ca] text-white font-black text-base shadow-xl shadow-[#4295DC]/30 hover:shadow-[#4295DC]/60 hover:scale-105 active:scale-95 transition-all duration-300 group"
              >
                <span>Ver Tienda & Productos</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#nosotros"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white dark:bg-[#0E315B]/60 border border-[#4295DC]/40 hover:border-[#4295DC] text-[#0E315B] dark:text-white font-bold text-base shadow-sm hover:scale-105 transition-all duration-300"
              >
                <span>Conoce Más</span>
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Dynamic Graphic & Card Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Tech Hero Graphic Container */}
            <div className="relative box-servicio-effect-card p-3 rounded-3xl group">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#0E315B]">
                <Image
                  src="/hero-bg.png"
                  alt="EMPROTEC Data Center & Infrastructure"
                  width={600}
                  height={450}
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E315B]/80 via-transparent to-transparent opacity-80" />
              </div>

              {/* Floating Interactive Micro Card 1 */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-6 -left-6 bg-white/95 dark:bg-[#0E315B]/95 border border-[#4295DC]/40 p-4 rounded-2xl backdrop-blur-xl shadow-2xl flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-[#4295DC]/20 flex items-center justify-center border border-[#4295DC]/40">
                  <ShieldCheck className="w-6 h-6 text-[#4295DC]" />
                </div>
                <div>
                  <div className="text-xs text-[#58697d] dark:text-[#B0B1B0]">Seguridad TI</div>
                  <div className="text-sm font-bold text-[#0E315B] dark:text-white">100% Protegido</div>
                </div>
              </motion.div>

              {/* Floating Interactive Micro Card 2 */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-6 -right-6 bg-white/95 dark:bg-[#0E315B]/95 border border-[#4295DC]/40 p-4 rounded-2xl backdrop-blur-xl shadow-2xl flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-[#4295DC]/20 flex items-center justify-center border border-[#4295DC]/40">
                  <Server className="w-6 h-6 text-[#4295DC]" />
                </div>
                <div>
                  <div className="text-xs text-[#58697d] dark:text-[#B0B1B0]">Servidores & Redes</div>
                  <div className="text-sm font-bold text-[#0E315B] dark:text-white">Alta Disponibilidad</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
