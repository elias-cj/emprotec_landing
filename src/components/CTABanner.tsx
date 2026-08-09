"use client";

import Link from "next/link";
import { MessageSquare, PhoneCall, Sparkles } from "lucide-react";

export default function CTABanner() {
  const waUrl = "https://wa.me/59171322727?text=Hola%20EMPROTEC,%20necesito%20asesor%C3%ADa%20y%20cotizaci%C3%B3n%20para%20un%20proyecto%20tecnol%C3%B3gico.";

  return (
    <section className="py-16 bg-gradient-to-r from-[#0E315B] via-[#091f3a] to-[#0E315B] text-white relative overflow-hidden transition-colors duration-300">
      {/* Background Orbs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#4295DC]/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-8 sm:p-12 rounded-3xl bg-white/5 backdrop-blur-md border border-[#4295DC]/40 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          
          <div className="space-y-3 text-center lg:text-left max-w-2xl">
            <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-[#4295DC] bg-[#4295DC]/10 px-4 py-1.5 rounded-full border border-[#4295DC]/30">
              <Sparkles className="w-3.5 h-3.5" /> Asesoría Especializada Sin Compromiso
            </span>

            <h2 className="text-2xl sm:text-4xl font-extrabold font-['Raleway'] tracking-tight leading-snug">
              ¿Necesitas una solución tecnológica para tu empresa?
            </h2>

            <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
              Cuéntanos qué necesitas y nuestro equipo de ingenieros te ayudará a encontrar la solución adecuada con equipamiento certificado y garantía oficial.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full sm:w-auto">
            <Link
              href="#contacto"
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-xs font-extrabold text-white bg-[#4295DC] hover:bg-[#3480c4] shadow-lg shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5 text-center flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Solicitar cotización</span>
            </Link>

            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-xs font-extrabold text-white bg-emerald-600 hover:bg-emerald-700 shadow-lg transition-all text-center flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Contactar ahora</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
