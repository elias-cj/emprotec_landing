"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export interface BrandItem {
  id: string;
  name: string;
  category: string;
}

const BRANDS_LIST: BrandItem[] = [
  { id: "hikvision", name: "HIKVISION", category: "CCTV & Seguridad" },
  { id: "hanwha", name: "HANWHA VISION", category: "CCTV & Analítica AI" },
  { id: "ubiquiti", name: "UBIQUITI", category: "Redes Wi-Fi & Enlaces" },
  { id: "mikrotik", name: "MIKROTIK", category: "Routers & Firewalls" },
  { id: "apc", name: "APC by Schneider", category: "Energía & UPS" },
  { id: "dell", name: "DELL Technologies", category: "Servidores & Racks" },
  { id: "cisco", name: "CISCO", category: "Conectividad L3" },
  { id: "zkteco", name: "ZKTECO", category: "Control Biométrico" },
  { id: "wd", name: "WESTERN DIGITAL", category: "Almacenamiento NAS" },
];

export default function BrandsSection() {
  return (
    <section className="py-16 bg-white dark:bg-[#0F172A] border-y border-slate-200 dark:border-slate-700/60 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#4295DC] bg-[#4295DC]/10 px-4 py-1 rounded-full border border-[#4295DC]/30">
            <Sparkles className="w-3.5 h-3.5" /> Equipamiento Certificado
          </span>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0E315B] dark:text-white mt-3 font-['Raleway']">
            Trabajamos con <span className="text-[#4295DC]">marcas líderes</span>
          </h2>
        </div>

        {/* Minimalist Brands Logos Grid (Grayscale to Color hover) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-9 gap-4 items-center">
          {BRANDS_LIST.map((brand) => (
            <motion.div
              key={brand.id}
              whileHover={{ scale: 1.05, y: -2 }}
              className="p-4 rounded-2xl bg-slate-50 dark:bg-[#1E293B] border border-slate-200/80 dark:border-slate-700/60 flex flex-col items-center justify-center text-center cursor-pointer group transition-all duration-300"
            >
              <span className="text-sm font-black text-slate-400 dark:text-slate-200 group-hover:text-[#4295DC] dark:group-hover:text-[#4295DC] font-['Raleway'] tracking-wider uppercase transition-colors">
                {brand.name}
              </span>
              <span className="text-[9px] text-slate-400 dark:text-slate-300 font-medium block mt-1">
                {brand.category}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
