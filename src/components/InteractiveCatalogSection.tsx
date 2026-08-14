"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ShoppingCart, ArrowRight, Check } from "lucide-react";

export interface CatalogProductCategory {
  id: string;
  name: string;
  featuredTitle: string;
  brand: string;
  price: string;
  desc: string;
  image: string;
  specs: string[];
}

const CATALOG_DATA: CatalogProductCategory[] = [
  {
    id: "cat-servidores",
    name: "SERVIDORES",
    featuredTitle: "Servidor Dell PowerEdge Rack 1U Dual Xeon",
    brand: "DELL Technologies",
    price: "$3,800.00 USD",
    desc: "Servidor corporativo de alta densidad para entornos de virtualización crítica, fuentes redundantes y almacenamiento RAID.",
    image: "/assets/Servidores de Almacenamiento Seguro y Eficiente.png",
    specs: ["Dual Intel Xeon Scalable", "64GB RAM ECC DDR4", "Chasis Rack 1U 8-Bay"],
  },
  {
    id: "cat-redes",
    name: "REDES",
    featuredTitle: "Switch Cisco Managed 24P PoE+ & SFP+ 10G",
    brand: "CISCO Systems",
    price: "$990.00 USD",
    desc: "Switch gestionable de nivel 3 para backbone corporativo, soporte de alimentación PoE+ 370W y uplinks de 10Gbps.",
    image: "/assets/Cableado de Fibra Óptica y Estructurado.jpg",
    specs: ["24 Puertos PoE+ Gigabit", "4 Uplinks SFP+ 10G", "Gestión L3 Avanzada"],
  },
  {
    id: "cat-seguridad",
    name: "SEGURIDAD",
    featuredTitle: "Kit de Cámaras IP 4K & NVR 8Ch ColorVu",
    brand: "HIKVISION",
    price: "$790.00 USD",
    desc: "Videovigilancia UltraHD con visión nocturna a color ColorVu de 24 horas y almacenamiento centralizado en NVR.",
    image: "/assets/cctv.jpg",
    specs: ["4 Cámaras IP 4K 8MP", "NVR 8 Puertos PoE", "Visión Nocturna ColorVu"],
  },
  {
    id: "cat-energia",
    name: "ENERGÍA",
    featuredTitle: "Tablero de Distribución & Fuerza Eléctrica TI",
    brand: "EMPROTEC Certificado",
    price: "$1,200.00 USD",
    desc: "Tablero eléctrico de precisión para salas de cómputo con protecciones termomagnéticas y mallas de tierra física.",
    image: "/assets/Cableado y Armado de Tableros Eléctricos.jpg",
    specs: ["Interruptores Schneider", "Supresor de picos Clase II", "Medidor multifunción digital"],
  },
  {
    id: "cat-ups",
    name: "UPS",
    featuredTitle: "UPS APC Smart-UPS Online 3KVA 230V",
    brand: "APC by Schneider",
    price: "$750.00 USD",
    desc: "Sistema UPS de doble conversión online senoidal pura para respaldo ininterrumpido en Data Centers y racks.",
    image: "/assets/Ups.jpg",
    specs: ["Potencia 3000VA / 2700W", "Doble conversión online", "Baterías reemplazables en caliente"],
  },
  {
    id: "cat-climatizacion",
    name: "CLIMATIZACIÓN",
    featuredTitle: "Acondicionador de Aire de Precisión TI",
    brand: "EMPROTEC Clima",
    price: "$855.00 USD",
    desc: "Control riguroso de temperatura, filtrado de partículas y nivel de humedad para salas de servidores críticas.",
    image: "/assets/datacenter.jpg",
    specs: ["Filtrado de aire de alta densidad", "Control de humedad digital", "Operación continua 24/7"],
  },
];

export default function InteractiveCatalogSection() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const activeItem = CATALOG_DATA[selectedIdx];

  return (
    <section id="productos" className="py-24 bg-[#0E315B] text-white relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-[#4295DC] bg-slate-800/80 px-4 py-1.5 rounded-full border border-slate-700">
            <Sparkles className="w-3.5 h-3.5" /> SECCIÓN 08 — CATÁLOGO CINEMATOGRÁFICO
          </span>

          <h2 className="text-3xl sm:text-5xl font-black text-white mt-4 mb-4 font-['Raleway'] tracking-tight">
            Equipamiento <span className="text-[#4295DC]">destacado.</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
            Explora las distintas líneas de hardware tecnológico con garantía directa oficial.
          </p>
        </div>

        {/* Cinematic Layout: Left Category Selector Sidebar + Right Featured Large Hero Product */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Category Sidebar */}
          <div className="lg:col-span-4 flex flex-col space-y-2">
            {CATALOG_DATA.map((item, idx) => {
              const isSelected = selectedIdx === idx;
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedIdx(idx)}
                  className={`p-4 rounded-2xl text-left font-black tracking-wider uppercase text-sm transition-all duration-300 flex items-center justify-between border ${
                    isSelected
                      ? "bg-[#4295DC] text-white border-[#4295DC] shadow-xl translate-x-2"
                      : "bg-slate-900/80 text-slate-300 border-slate-800 hover:bg-slate-800"
                  }`}
                >
                  <span>{item.name}</span>
                  {isSelected && <ArrowRight className="w-4 h-4" />}
                </button>
              );
            })}
          </div>

          {/* Right Featured Product Display with Cinematic Blur/Scale Transition */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem.id}
                initial={{ opacity: 0, scale: 0.95, filter: "blur(8px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.95, filter: "blur(8px)" }}
                transition={{ duration: 0.4 }}
                className="bg-slate-900/90 rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                  
                  {/* Product Image Visual */}
                  <div className="md:col-span-6">
                    <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-xl border border-slate-800 bg-slate-950 p-4 flex items-center justify-center">
                      <Image
                        src={activeItem.image}
                        alt={activeItem.featuredTitle}
                        fill
                        className="object-contain p-4"
                      />
                    </div>
                  </div>

                  {/* Product Info & Specs */}
                  <div className="md:col-span-6 space-y-4">
                    <div>
                      <span className="text-[11px] font-black text-[#4295DC] bg-[#4295DC]/10 px-3 py-1 rounded-full border border-[#4295DC]/30 uppercase block w-max mb-2">
                        {activeItem.brand}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-['Raleway'] leading-tight">
                        {activeItem.featuredTitle}
                      </h3>
                    </div>

                    <div className="text-2xl font-black text-[#4295DC] font-['Raleway']">
                      {activeItem.price}
                    </div>

                    <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed">
                      {activeItem.desc}
                    </p>

                    <div className="space-y-1.5 pt-2">
                      {activeItem.specs.map((spc, sIdx) => (
                        <div key={sIdx} className="flex items-center gap-2 text-xs text-slate-200">
                          <Check className="w-3.5 h-3.5 text-[#4295DC]" />
                          <span>{spc}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4">
                      <Link
                        href="#contacto"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-extrabold text-white bg-[#4295DC] hover:bg-[#3480c4] shadow-lg transition-all"
                      >
                        <ShoppingCart className="w-4 h-4" />
                        <span>Solicitar cotización de equipamiento</span>
                      </Link>
                    </div>

                  </div>

                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
