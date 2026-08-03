"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section id="contacto" className="py-24 bg-gradient-to-b from-[#F0F5FA] via-[#E2EDF8] to-[#F0F5FA] dark:from-[#191715] dark:via-[#0E315B] dark:to-[#191715] relative text-[#0E315B] dark:text-white text-center overflow-hidden transition-colors duration-300">
      {/* Background radial cyan/navy glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-gradient-to-r from-[#4295DC]/25 via-[#0E315B]/40 to-[#4295DC]/25 blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight text-[#0E315B] dark:text-white"
        >
          ¿Querés proteger e impulsar tu{" "}
          <span className="text-[#4295DC]">hogar o empresa</span>?
        </motion.h2>

        <p className="text-[#5A6B80] dark:text-[#B0B1B0] text-sm sm:text-base max-w-2xl mx-auto font-light">
          Contáctanos hoy mismo para asesoramiento personalizado y cotización de proyectos de ingeniería, redes y seguridad.
        </p>

        <div className="pt-2 flex flex-wrap justify-center gap-4">
          <a
            href="https://wa.me/59171322727"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3.5 rounded-md text-sm font-bold text-white bg-[#4295DC] hover:bg-[#3480c4] shadow-lg shadow-cyan-500/25 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Conversemos por WhatsApp
          </a>

          <a
            href="mailto:info@emprotec.com.bo"
            className="inline-block px-8 py-3.5 rounded-md text-sm font-bold text-white bg-[#0E315B] hover:bg-[#154378] transition-all duration-300 shadow-md"
          >
            info@emprotec.com.bo
          </a>
        </div>
      </div>
    </section>
  );
}
