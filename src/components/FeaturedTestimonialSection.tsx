"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote, Sparkles, Star } from "lucide-react";

export default function FeaturedTestimonialSection() {
  return (
    <section className="py-24 bg-white dark:bg-[#0F172A] text-slate-900 dark:text-white relative overflow-hidden transition-colors duration-300 border-t border-slate-200 dark:border-slate-700/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Tag Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-[#4295DC] bg-slate-100 dark:bg-slate-800 px-4 py-1.5 rounded-full border border-slate-200 dark:border-slate-700/60">
            <Sparkles className="w-3.5 h-3.5" /> SECCIÓN 09 — EXPERIENCIA DE NUESTROS CLIENTES
          </span>
        </div>

        {/* Single Featured Testimonial Hero Layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#1E293B] dark:bg-[#1E293B] text-white rounded-3xl overflow-hidden shadow-2xl border border-slate-700 dark:border-slate-700/60 grid grid-cols-1 lg:grid-cols-12 items-center"
        >
          {/* Left Large Client Portrait */}
          <div className="lg:col-span-5 relative h-[380px] lg:h-[500px]">
            <Image
              src="/assets/servicio-cliente-soporte.webp"
              alt="Cliente Testimonio EMPROTEC"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B]/90 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#1E293B] pointer-events-none" />
          </div>

          {/* Right Quote & Details */}
          <div className="lg:col-span-7 p-8 sm:p-14 space-y-6">
            
            {/* Stars Rating */}
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400" />
              ))}
            </div>

            <Quote className="w-12 h-12 text-[#4295DC]/40" />

            <blockquote className="text-xl sm:text-2xl lg:text-3xl font-bold font-['Raleway'] leading-relaxed tracking-tight text-white">
              "EMPROTEC transformó la infraestructura de nuestro centro logístico en Santa Cruz. La migración a cableado de fibra y cámaras 4K fue impecable, sin detener nuestras operaciones en ningún momento."
            </blockquote>

            <div className="pt-4 border-t border-slate-700 dark:border-slate-700/60">
              <h4 className="text-lg font-black text-white font-['Raleway']">
                Ing. Carlos Mendoza
              </h4>
              <p className="text-xs text-[#4295DC] font-semibold">
                Director de Infraestructura & Operaciones — Grupo Logístico Bolivia
              </p>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}
