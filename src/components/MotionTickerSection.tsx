"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Server, Network, ShieldCheck, Lightbulb } from "lucide-react";

export default function MotionTickerSection() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const xPos = useTransform(scrollYProgress, [0, 1], ["15%", "-40%"]);
  const scaleVal = useTransform(scrollYProgress, [0.1, 0.5, 0.9], [0.96, 1, 0.98]);

  const items = [
    {
      word: "INFRAESTRUCTURA",
      sub: "Servidores & Data Center",
      icon: Server,
      img: "/assets/blog-data-center-guide-1.jpg",
    },
    {
      word: "CONECTIVIDAD",
      sub: "Fibra Óptica & Redes 10G",
      icon: Network,
      img: "/assets/distribucion-logistica.webp",
    },
    {
      word: "SEGURIDAD",
      sub: "CCTV 4K & Ciberseguridad",
      icon: ShieldCheck,
      img: "/assets/cctv.jpg",
    },
    {
      word: "INNOVACIÓN",
      sub: "Domótica & Nube Híbrida",
      icon: Lightbulb,
      img: "/assets/cloud.avif",
    },
  ];

  return (
    <section
      id="seccion-movimiento"
      ref={targetRef}
      className="py-14 sm:py-16 bg-slate-900 text-white overflow-hidden relative transition-colors duration-300"
    >
      {/* Editorial Header Tag */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-5 text-left">
        <span className="text-[11px] font-black uppercase tracking-widest text-[#4295DC]">
          SECCIÓN 01 — EMPROTEC EN MOVIMIENTO
        </span>
      </div>

      {/* Horizontal Moving Canvas */}
      <motion.div style={{ scale: scaleVal }} className="relative">
        <motion.div style={{ x: xPos }} className="flex items-center gap-6 sm:gap-10 whitespace-nowrap pl-4 sm:pl-8">
          {items.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div key={idx} className="flex items-center gap-5 sm:gap-6 shrink-0 group">
                
                {/* Compact Font for Seamless Display */}
                <div className="space-y-0.5">
                  <span className="text-2xl sm:text-4xl lg:text-5xl font-black font-['Raleway'] tracking-tight text-white/90 group-hover:text-[#4295DC] transition-colors duration-300">
                    {item.word}
                  </span>
                  <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-400 pl-0.5">
                    <IconComp className="w-3.5 h-3.5 text-[#4295DC]" />
                    <span>{item.sub}</span>
                  </div>
                </div>

                {/* Compact Tech Visual Element */}
                <div className="relative w-28 sm:w-36 h-16 sm:h-22 rounded-xl overflow-hidden shadow-lg border border-slate-700/80 group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src={item.img}
                    alt={item.word}
                    fill
                    className="object-cover object-center brightness-90 group-hover:brightness-100 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                </div>

                {/* Separator Symbol */}
                <span className="text-xl text-[#4295DC]/40 font-black">•</span>

              </div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
