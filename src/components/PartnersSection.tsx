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

const COLOR_BRANDS: BrandLogo[] = [
  { id: "hikvision", name: "Hikvision", svgPath: "/assets/partners/hikvision.svg" },
  { id: "ubiquiti", name: "Ubiquiti", svgPath: "/assets/partners/ubiquiti.svg" },
  { id: "mikrotik", name: "Mikrotik", svgPath: "/assets/partners/mikrotik.svg" },
  { id: "apc", name: "APC Schneider", svgPath: "/assets/partners/apc.svg" },
  { id: "cisco", name: "Cisco", svgPath: "/assets/partners/cisco.svg" },
  { id: "fortinet", name: "Fortinet", svgPath: "/assets/partners/fortinet.svg" },
  { id: "vmware", name: "VMware", svgPath: "/assets/partners/vmware.svg" },
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
    <section id="partners" className="py-20 bg-white dark:bg-[#0F172A] text-slate-900 dark:text-white relative overflow-hidden transition-colors duration-300 border-t border-slate-200 dark:border-slate-700/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Minimalist Section Tag Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-[#4295DC] bg-slate-100 dark:bg-slate-800 px-4 py-1 rounded-full border border-slate-200 dark:border-slate-700/60">
            <Sparkles className="w-3.5 h-3.5" /> ALIANZAS & MARCAS HOMOLOGADAS
          </span>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0E315B] dark:text-white mt-3 font-['Raleway']">
            Nuestros <span className="text-[#4295DC]">Partners</span>
          </h2>
        </div>

        {/* Clean Logo Showcase: NO CARDS, PURE FULL-COLOR LOGOS */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-8 sm:gap-12 items-center justify-items-center">
          {COLOR_BRANDS.map((brand) => (
            <motion.div
              key={brand.id}
              whileHover={{ scale: 1.15 }}
              transition={{ duration: 0.2 }}
              className="w-full flex items-center justify-center cursor-pointer p-3 transition-transform"
              title={brand.name}
            >
              {brand.svgPath ? (
                <div className="relative w-36 sm:w-40 h-14 flex items-center justify-center">
                  <Image
                    src={brand.svgPath}
                    alt={brand.name}
                    width={140}
                    height={56}
                    className="max-h-12 w-auto object-contain transition-all duration-300"
                  />
                </div>
              ) : (
                <div
                  className="w-36 sm:w-40 h-14 flex items-center justify-center"
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
