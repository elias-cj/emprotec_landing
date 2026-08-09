"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Network, Server, ShieldCheck } from "lucide-react";

export default function FinalCTASection() {
  return (
    <section className="py-28 bg-white text-slate-900 relative overflow-hidden transition-colors duration-300">
      
      {/* Background Abstract Tech Floating Geometry Parallax */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border-2 border-dashed border-[#4295DC]/20 pointer-events-none"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        {/* Tag */}
        <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-[#4295DC] bg-slate-100 px-4 py-1.5 rounded-full border border-slate-200">
          <Sparkles className="w-3.5 h-3.5" /> SECCIÓN 10 — TRANSFORMACIÓN DIGITAL
        </span>

        {/* Title */}
        <h2 className="text-4xl sm:text-6xl font-black text-[#0E315B] font-['Raleway'] tracking-tight leading-tight">
          ¿Tu infraestructura está preparada para el{" "}
          <span className="text-[#4295DC] underline decoration-[#4295DC]/30 underline-offset-8">
            siguiente nivel?
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-slate-600 text-base sm:text-xl font-light leading-relaxed max-w-2xl mx-auto">
          Hablemos sobre cómo podemos mejorar, proteger y potenciar la tecnología de tu empresa.
        </p>

        {/* Magnetic CTA Button */}
        <div className="pt-6">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="#contacto"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl text-sm font-black text-white bg-[#0E315B] hover:bg-[#4295DC] shadow-2xl shadow-slate-900/20 transition-all duration-300 group"
            >
              <span>Hablar con un especialista</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Abstract Floating Icons */}
        <div className="pt-12 flex items-center justify-center gap-8 text-slate-400">
          <div className="flex items-center gap-2 text-xs font-bold">
            <Server className="w-4 h-4 text-[#4295DC]" /> Data Centers
          </div>
          <div className="flex items-center gap-2 text-xs font-bold">
            <Network className="w-4 h-4 text-[#4295DC]" /> Fibra & Redes
          </div>
          <div className="flex items-center gap-2 text-xs font-bold">
            <ShieldCheck className="w-4 h-4 text-[#4295DC]" /> Seguridad 24/7
          </div>
        </div>

      </div>
    </section>
  );
}
