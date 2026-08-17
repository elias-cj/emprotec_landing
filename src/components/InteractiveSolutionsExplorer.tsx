"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Server,
  Network,
  ShieldCheck,
  Zap,
  Wind,
  Cpu,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

export interface SolutionOption {
  id: string;
  num: string;
  title: string;
  shortTag: string;
  desc: string;
  icon: any;
  image: string;
  features: string[];
  waMsg: string;
}

const SOLUTIONS_DATA: SolutionOption[] = [
  {
    id: "sol-1",
    num: "01",
    title: "Infraestructura Tecnológica",
    shortTag: "Data Center & Servidores",
    desc: "Aprovisionamiento de servidores físicos de alta densidad, almacenamiento SAN/NAS redundante y clústeres virtuales.",
    icon: Server,
    image: "/assets/infraestructura tecnologica.jpg",
    features: [
      "Servidores tipo Rack / Tower Xeon & Epyc",
      "Arreglos de discos RAID 0/1/5/6/10 anti-ransomware",
      "Virtualización de máquinas con VMware & Hyper-V",
    ],
    waMsg: "Hola EMPROTEC, solicito asesoría para el área de Infraestructura Tecnológica.",
  },
  {
    id: "sol-2",
    num: "02",
    title: "Redes y Conectividad",
    shortTag: "Fibra Óptica & Wi-Fi 6",
    desc: "Diseño y tendido de cableado estructurado Cat 6A / 7, fusión de fibra óptica y enlaces inalámbricos punto a punto.",
    icon: Network,
    image: "/assets/Cableado de Fibra Óptica y Estructurado.jpg",
    features: [
      "Certificación Fluke Networks de puntos de red",
      "Configuración de VLANs & Enrutamiento BGP/OSPF",
      "Redes Wi-Fi Mesh corporativas de alta densidad",
    ],
    waMsg: "Hola EMPROTEC, solicito asesoría sobre Redes y Cableado de Fibra Óptica.",
  },
  {
    id: "sol-3",
    num: "03",
    title: "Seguridad Electrónica",
    shortTag: "CCTV 4K & Biometría",
    desc: "Sistemas integrados de videovigilancia IP ColorVu, control de acceso biométrico, torniquetes y alarmas contra incendio.",
    icon: ShieldCheck,
    image: "/assets/control_de_acceso.webp",
    features: [
      "Cámaras UltraHD con analítica de Inteligencia Artificial",
      "Reconocimiento facial y control de asistencia",
      "Detección y supresión automática de incendios",
    ],
    waMsg: "Hola EMPROTEC, me interesa cotizar Sistemas de CCTV y Seguridad Electrónica.",
  },
  {
    id: "sol-4",
    num: "04",
    title: "Energía y Respaldo",
    shortTag: "UPS Online & Tableros",
    desc: "Sistemas UPS de doble conversión senoidal pura, tableros de transferencia automática y grupos electrógenos.",
    icon: Zap,
    image: "/assets/Cableado y Armado de Tableros Eléctricos.jpg",
    features: [
      "Protección contra apagones, picos y armónicos",
      "Armado y mantenimiento de tableros eléctricos TI",
      "Sistemas de puesta a tierra física de baja impedancia",
    ],
    waMsg: "Hola EMPROTEC, requiero información sobre sistemas de Respaldo Energético UPS.",
  },
  {
    id: "sol-5",
    num: "05",
    title: "Climatización de Precisión",
    shortTag: "Control de Humedad TI",
    desc: "Unidades de aire acondicionado in-row y periférico de alta precisión para salas de cómputo y servidores.",
    icon: Wind,
    image: "/assets/datacenter.jpg",
    features: [
      "Control riguroso de humedad y temperatura 24/7",
      "Sistemas redundantes N+1 para cero caídas",
      "Monitoreo remoto de alertas de temperatura",
    ],
    waMsg: "Hola EMPROTEC, requiero asesoría sobre Climatización de Precisión para Data Center.",
  },
  {
    id: "sol-6",
    num: "06",
    title: "Servicios TIC & Domótica",
    shortTag: "VPN, Firewalls & Portones",
    desc: "Outsourcing informático, virtualización de escritorios, VPN empresariales y automatización de accesos y portones.",
    icon: Cpu,
    image: "/assets/Automatización de Luces y Portones (Domótica).png",
    features: [
      "Protección con Firewalls UTM Fortinet & Mikrotik",
      "Automatización de portones y luces inteligentes",
      "Soporte técnico presencial y remoto permanente",
    ],
    waMsg: "Hola EMPROTEC, solicito información sobre Servicios TIC y Domótica.",
  },
];

export default function InteractiveSolutionsExplorer() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeSol = SOLUTIONS_DATA[activeIdx];

  return (
    <section id="soluciones" className="py-10 bg-slate-100/80 dark:bg-[#0F172A] text-slate-900 dark:text-white relative overflow-hidden transition-colors duration-300 border-b border-slate-200 dark:border-slate-700/60">
      
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#4295DC]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-[#4295DC] bg-white dark:bg-slate-800 px-4 py-1.5 rounded-full border border-slate-200 dark:border-slate-700/60 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" /> SECCIÓN 02 — SOLUCIONES INTEGRALES
          </span>

          <h2 className="text-3xl sm:text-5xl font-black text-[#0E315B] dark:text-white font-['Raleway'] tracking-tight leading-tight">
            Explora nuestros <br />
            <span className="text-[#4295DC]">6 pilares tecnológicos.</span>
          </h2>

          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base font-light leading-relaxed">
              Diseñados para garantizar máxima continuidad operativa en tu empresa.
          </p>
        </div>

        {/* Master Interactive Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Pill Selector Sidebar */}
          <div className="lg:col-span-5 space-y-3">
            {SOLUTIONS_DATA.map((sol, idx) => {
              const isSelected = activeIdx === idx;
              const IconComp = sol.icon;

              return (
                <button
                  key={sol.id}
                  onClick={() => setActiveIdx(idx)}
                  className={`w-full p-4 rounded-2xl text-left transition-all duration-300 border flex items-center justify-between group ${
                    isSelected
                      ? "bg-[#0E315B] dark:bg-[#4295DC] text-white border-[#0E315B] dark:border-[#4295DC] shadow-xl translate-x-2"
                      : "bg-white dark:bg-[#1E293B] text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-700/60 shadow-sm hover:shadow-md hover:bg-slate-50 dark:hover:bg-slate-700/60"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                        isSelected
                          ? "bg-[#4295DC] text-white"
                          : "bg-slate-100 dark:bg-slate-700/60 text-[#4295DC] group-hover:bg-[#4295DC] group-hover:text-white"
                      }`}
                    >
                      <IconComp className="w-5 h-5" />
                    </div>

                    <div>
                      <span className="text-[10px] font-black uppercase tracking-wider block text-[#4295DC] dark:text-slate-300">
                        Pilar {sol.num}
                      </span>
                      <h3 className="text-sm font-extrabold font-['Raleway'] leading-snug">
                        {sol.title}
                      </h3>
                    </div>
                  </div>

                  <ArrowUpRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected ? "text-white translate-x-0.5 -translate-y-0.5" : "text-slate-400 opacity-0 group-hover:opacity-100"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Mutating Dynamic Visual Representation & Features */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSol.id}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                className="bg-white dark:bg-[#1E293B] rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-200/90 dark:border-slate-700/60 space-y-6"
              >
                {/* Visual Image Banner */}
                <div className="relative w-full h-56 sm:h-72 rounded-2xl overflow-hidden shadow-lg bg-slate-900 dark:bg-[#0F172A] border border-slate-200 dark:border-slate-700/60 flex items-center justify-center">
                  <Image
                    src={activeSol.image}
                    alt={activeSol.title}
                    fill
                    className="object-contain p-4 brightness-95"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                    <span className="text-xs font-black uppercase tracking-widest bg-[#4295DC] px-3 py-1 rounded-md shadow">
                      {activeSol.shortTag}
                    </span>
                  </div>
                </div>

                {/* Info Text */}
                <div className="space-y-3">
                  <h3 className="text-2xl sm:text-3xl font-black text-[#0E315B] dark:text-white font-['Raleway']">
                    {activeSol.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm font-light leading-relaxed">
                    {activeSol.desc}
                  </p>
                </div>

                {/* Bullet Points */}
                <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-700/60">
                  <span className="text-xs font-black uppercase text-[#0E315B] dark:text-[#4295DC] block mb-3">
                    Capacidades & Alcance Técnico
                  </span>
                  {activeSol.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs font-medium text-slate-700 dark:text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-[#4295DC] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* WhatsApp Action */}
                <div className="pt-4">
                  <a
                    href={`https://wa.me/59171322727?text=${encodeURIComponent(activeSol.waMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-extrabold text-white bg-[#0E315B] hover:bg-[#4295DC] dark:bg-[#4295DC] dark:hover:bg-[#3480c4] shadow-md transition-all duration-300"
                  >
                    <span>Solicitar cotización de {activeSol.title}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
