"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export interface BrandLogo {
  id: string;
  name: string;
  svgPath?: string;
  colorSvg?: string;
}

const ALL_BRANDS: BrandLogo[] = [
  // Fila 1
  { id: "hikvision", name: "Hikvision", svgPath: "/assets/partners/hikvision.svg" },
  { id: "hanwha", name: "Hanwha Vision", svgPath: "/assets/partners/hanwha.svg" },
  { id: "ubiquiti", name: "Ubiquiti", svgPath: "/assets/partners/ubiquiti.svg" },
  { id: "mikrotik", name: "Mikrotik", svgPath: "/assets/partners/mikrotik.svg" },

  // Fila 2
  { id: "apc", name: "APC Schneider", svgPath: "/assets/partners/apc.svg" },
  { id: "cisco", name: "Cisco", svgPath: "/assets/partners/cisco.svg" },
  { id: "fortinet", name: "Fortinet", svgPath: "/assets/partners/fortinet.svg" },
  { id: "vmware", name: "VMware", svgPath: "/assets/partners/vmware.svg" },

  // Fila 3
  {
    id: "dahua",
    name: "Dahua Technology",
    colorSvg: `<svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg"><text x="5" y="28" fill="#E31b23" font-family="Arial, sans-serif" font-size="22" font-weight="bold">dahua</text></svg>`,
  },
  {
    id: "dell",
    name: "Dell Technologies",
    colorSvg: `<svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg"><text x="15" y="28" fill="#007DB8" font-family="Arial, sans-serif" font-size="24" font-weight="900">DELL</text></svg>`,
  },
  {
    id: "hpe",
    name: "HPE",
    colorSvg: `<svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg"><text x="20" y="28" fill="#01A781" font-family="Arial, sans-serif" font-size="24" font-weight="900">HPE</text></svg>`,
  },
  {
    id: "lenovo",
    name: "Lenovo",
    colorSvg: `<svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg"><text x="10" y="28" fill="#E2231A" font-family="Arial, sans-serif" font-size="22" font-weight="bold">Lenovo</text></svg>`,
  },

  // Fila 4
  {
    id: "wd",
    name: "Western Digital",
    colorSvg: `<svg viewBox="0 0 140 40" fill="none" xmlns="http://www.w3.org/2000/svg"><text x="5" y="26" fill="#005B94" font-family="Arial, sans-serif" font-size="16" font-weight="black">Western Digital</text></svg>`,
  },
  {
    id: "zkteco",
    name: "ZKTeco",
    colorSvg: `<svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg"><text x="10" y="28" fill="#84B819" font-family="Arial, sans-serif" font-size="22" font-weight="bold">ZKTeco</text></svg>`,
  },
  {
    id: "intel",
    name: "Intel",
    colorSvg: `<svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg"><text x="18" y="28" fill="#0068B5" font-family="Arial, sans-serif" font-size="24" font-weight="bold">intel</text></svg>`,
  },
  {
    id: "microsoft",
    name: "Microsoft",
    colorSvg: `<svg viewBox="0 0 140 40" fill="none" xmlns="http://www.w3.org/2000/svg"><text x="5" y="26" fill="#737373" font-family="Arial, sans-serif" font-size="18" font-weight="bold">Microsoft</text></svg>`,
  },
];

export default function PartnersSection() {
  return (
    <section id="partners" className="py-12 bg-[#F8FAFC] dark:bg-[#0F172A] text-slate-900 dark:text-white relative overflow-hidden transition-colors duration-300 border-t border-slate-200 dark:border-slate-700/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-[#4295DC] bg-white dark:bg-slate-800 px-4 py-1.5 rounded-full border border-slate-200 dark:border-slate-700/60 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" /> ALIANZAS & MARCAS HOMOLOGADAS
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0E315B] dark:text-white font-['Raleway']">
            Nuestros <span className="text-[#4295DC]">Partners Tecnológicos</span>
          </h2>
        </div>

        {/* Static Grid: 4 Columns per Row (4 Rows x 4 Columns = 16 Brands) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6">
          {ALL_BRANDS.map((brand, idx) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4, scale: 1.03 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.03 }}
              className="w-full h-24 sm:h-28 flex items-center justify-center p-4 rounded-2xl bg-white dark:bg-[#1E293B] border border-slate-200/90 dark:border-slate-700/60 shadow-sm hover:shadow-xl hover:border-[#4295DC]/60 cursor-pointer transition-all duration-300 group"
              title={brand.name}
            >
              {brand.svgPath ? (
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={brand.svgPath}
                    alt={brand.name}
                    width={160}
                    height={64}
                    className="max-h-14 w-auto object-contain filter opacity-90 group-hover:opacity-100 dark:brightness-110 group-hover:scale-105 transition-all duration-300"
                  />
                </div>
              ) : (
                <div
                  className="w-full h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300"
                  dangerouslySetInnerHTML={{ __html: brand.colorSvg! }}
                />
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
