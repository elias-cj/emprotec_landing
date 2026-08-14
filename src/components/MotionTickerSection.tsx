"use client";

import Image from "next/image";
import { Server, Network, ShieldCheck, Lightbulb } from "lucide-react";

export default function MotionTickerSection() {
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
      img: "/assets/switches.avif",
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

  // Repeat items 4 times to ensure seamless infinite looping on all screen sizes
  const repeatedItems = [...items, ...items, ...items, ...items];

  return (
    <section
      id="seccion-movimiento"
      className="py-5 sm:py-7 bg-slate-900 text-white overflow-hidden relative border-y border-slate-800/80 select-none"
    >
      {/* Edge Blur / Gradient Overlays for Seamless Fade */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-l from-slate-900 via-slate-900/90 to-transparent z-10" />



      {/* Infinite Slider Track (Moves left smoothly, pauses on hover) */}
      <div className="relative w-full overflow-hidden group">
        <div className="flex w-max items-center animate-ticker group-hover:[animation-play-state:paused]">
          {repeatedItems.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-6 sm:gap-8 shrink-0 px-4 sm:px-6 py-2 group/card cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
              >
                {/* Text Block */}
                <div className="space-y-1">
                  <span className="text-2xl sm:text-4xl lg:text-5xl font-black font-['Raleway'] tracking-tight text-white/90 group-hover/card:text-[#4295DC] transition-colors duration-300">
                    {item.word}
                  </span>
                  <div className="flex items-center gap-2 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-400 pl-0.5">
                    <div className="p-1 rounded-md bg-slate-800/80 border border-slate-700/60 text-[#4295DC] group-hover/card:bg-[#4295DC] group-hover/card:text-white transition-colors duration-300">
                      <IconComp className="w-3.5 h-3.5" />
                    </div>
                    <span>{item.sub}</span>
                  </div>
                </div>

                {/* Card Visual Image */}
                <div className="relative w-28 sm:w-40 h-16 sm:h-24 rounded-xl overflow-hidden shadow-xl border border-slate-700/80 group-hover/card:border-[#4295DC]/60 group-hover/card:shadow-[#4295DC]/20 transition-all duration-300">
                  <Image
                    src={item.img}
                    alt={item.word}
                    fill
                    className="object-cover object-center brightness-90 group-hover/card:brightness-105 group-hover/card:scale-110 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80 group-hover/card:opacity-40 transition-opacity duration-300" />
                </div>

                {/* Separator Symbol */}
                <div className="flex items-center justify-center pl-2">
                  <span className="w-2 h-2 rounded-full bg-[#4295DC]/40 group-hover/card:bg-[#4295DC] group-hover/card:scale-125 transition-all duration-300" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

