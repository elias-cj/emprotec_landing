"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Server, Network, ShieldCheck, Zap, Sparkles } from "lucide-react";

export default function ImmersiveParallaxSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax scale and zoom effects
  const bgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.15, 1.25]);

  return (
    <section
      ref={containerRef}
      className="py-12 bg-white text-white overflow-hidden select-none transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Trimmed Image Box: 1rem (py-4 / my-4) padding above and below text content */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-950 border border-slate-800 py-4 px-6 sm:px-12 my-4">
          
          {/* Layer 1: Background Data Center Image */}
          <motion.div
            style={{ scale: bgScale }}
            className="absolute inset-0 w-full h-full opacity-40 pointer-events-none"
          >
            <Image
              src="/assets/blog-data-center-guide-1.jpg"
              alt="Data Center Parallax Immersive"
              fill
              className="object-cover object-center"
            />
          </motion.div>

          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/60 to-slate-950/90 pointer-events-none" />

          {/* Layer 2: Foreground Content trimmed to 1rem vertical padding */}
          <div className="relative z-10 text-center space-y-6 py-4">
            
            <div className="space-y-3">
              <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-[#4295DC] bg-[#4295DC]/10 px-4 py-1.5 rounded-full border border-[#4295DC]/30">
                <Sparkles className="w-3.5 h-3.5" /> SECCIÓN 03 — EXPERIENCIA INMERSIVA
              </span>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white font-['Raleway'] tracking-tight leading-tight">
                Ingresando al corazón de la <span className="text-[#4295DC]">infraestructura.</span>
              </h2>

              <p className="text-slate-300 text-xs sm:text-base font-light leading-relaxed max-w-2xl mx-auto">
                Cada capa de red, servidor y respaldo energético trabaja en perfecta armonía para garantizar la continuidad total de tu negocio.
              </p>
            </div>

            {/* Core Tech Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto pt-2">
              <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 backdrop-blur-md flex items-center justify-center gap-2 text-xs font-bold text-slate-200">
                <Server className="w-4 h-4 text-[#4295DC]" />
                <span>Servidores High-Density</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 backdrop-blur-md flex items-center justify-center gap-2 text-xs font-bold text-slate-200">
                <Network className="w-4 h-4 text-[#4295DC]" />
                <span>Fibra & Backbone 10G</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 backdrop-blur-md flex items-center justify-center gap-2 text-xs font-bold text-slate-200">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Ciberseguridad UTM</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 backdrop-blur-md flex items-center justify-center gap-2 text-xs font-bold text-slate-200">
                <Zap className="w-4 h-4 text-amber-400" />
                <span>UPS Senoidal Online</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
