"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Camera,
  Network,
  Server,
  BatteryCharging,
  Wifi,
  Zap,
  ShieldCheck,
  Lock,
  Wrench,
  Layers,
  Sliders,
  Cloud,
  ShieldAlert,
  Home,
  Headphones,
  Building2,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export interface CategoryItem {
  id: string;
  name: string;
  desc: string;
  icon: any;
  type: "producto" | "servicio";
  link: string;
}

const CATEGORIES_DATA: CategoryItem[] = [
  // Categorías de Productos
  {
    id: "prod-cctv",
    name: "Cámaras de seguridad",
    desc: "Equipos CCTV IP 4K, visión nocturna y NVRs de monitoreo continuo.",
    icon: Camera,
    type: "producto",
    link: "#productos",
  },
  {
    id: "prod-redes",
    name: "Redes y conectividad",
    desc: "Switches gestionables L2/L3, routers de alto rendimiento y patch panels.",
    icon: Network,
    type: "producto",
    link: "#productos",
  },
  {
    id: "prod-servidores",
    name: "Servidores",
    desc: "Servidores de alta densidad en Rack / Tower con redundancia Xeon.",
    icon: Server,
    type: "producto",
    link: "#productos",
  },
  {
    id: "prod-ups",
    name: "UPS",
    desc: "Sistemas de energía ininterrumpida Online doble conversión.",
    icon: BatteryCharging,
    type: "producto",
    link: "#productos",
  },
  {
    id: "prod-wifi",
    name: "Equipos WiFi",
    desc: "Puntos de acceso Wi-Fi 6 de alta densidad para oficinas e industrias.",
    icon: Wifi,
    type: "producto",
    link: "#productos",
  },
  {
    id: "prod-fibra",
    name: "Fibra óptica",
    desc: "Bobinas, jumpers, conectores y equipos de fusión para fibra monomodo.",
    icon: Zap,
    type: "producto",
    link: "#productos",
  },
  {
    id: "prod-acceso",
    name: "Control de acceso",
    desc: "Lectores biométricos por huella, reconocimiento facial y molinetes.",
    icon: ShieldCheck,
    type: "producto",
    link: "#productos",
  },
  {
    id: "prod-seguridad",
    name: "Sistemas de seguridad",
    desc: "Sensores de incendio, barreras perimetrales y sirenas inteligentes.",
    icon: Lock,
    type: "producto",
    link: "#productos",
  },

  // Categorías de Servicios
  {
    id: "serv-instalacion",
    name: "Instalación profesional",
    desc: "Montaje físico e integración de equipamiento tecnológico llave en mano.",
    icon: Wrench,
    type: "servicio",
    link: "#servicios",
  },
  {
    id: "serv-cableado",
    name: "Cableado estructurado",
    desc: "Tendido y certificación de redes Cat 6A/7 y empalmes de fibra.",
    icon: Layers,
    type: "servicio",
    link: "#servicios",
  },
  {
    id: "serv-config",
    name: "Configuración de redes",
    desc: "Segmentación VLAN, calidad de servicio QoS y radio enlaces corporativos.",
    icon: Sliders,
    type: "servicio",
    link: "#servicios",
  },
  {
    id: "serv-virtualizacion",
    name: "Virtualización",
    desc: "Clústeres VMware / Hyper-V y migraciones de servidores a entornos virtuales.",
    icon: Cloud,
    type: "servicio",
    link: "#servicios",
  },
  {
    id: "serv-firewall",
    name: "VPN y Firewalls",
    desc: "Protección perimetral UTM, cifrado VPN y auditorías de ciberseguridad.",
    icon: ShieldAlert,
    type: "servicio",
    link: "#servicios",
  },
  {
    id: "serv-domotica",
    name: "Domótica",
    desc: "Automatización de luces, portones vehiculares y control de clima por voz.",
    icon: Home,
    type: "servicio",
    link: "#servicios",
  },
  {
    id: "serv-mantenimiento",
    name: "Mantenimiento IT",
    desc: "Contratos de tercerización IT, soporte técnico 24/7 y limpiezas preventivas.",
    icon: Headphones,
    type: "servicio",
    link: "#servicios",
  },
  {
    id: "serv-infraestructura",
    name: "Implementación de infraestructura",
    desc: "Diseño y acondicionamiento integral de Data Centers y salas server.",
    icon: Building2,
    type: "servicio",
    link: "#servicios",
  },
];

export default function SolutionCategories() {
  const [activeTab, setActiveTab] = useState<"todos" | "producto" | "servicio">("todos");

  const filteredCategories = CATEGORIES_DATA.filter((item) => {
    if (activeTab === "todos") return true;
    return item.type === activeTab;
  });

  return (
    <section id="categorias" className="py-20 bg-slate-50 dark:bg-[#0F172A] relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-[#4295DC] bg-[#4295DC]/10 px-4 py-1.5 rounded-full border border-[#4295DC]/30">
            <Sparkles className="w-3.5 h-3.5" /> Catálogo Ecosistema EMPROTEC
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0E315B] dark:text-white mt-4 mb-4 font-['Raleway']">
            Explora nuestras <span className="text-[#4295DC]">soluciones</span>
          </h2>

          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base font-light leading-relaxed">
            Descubre nuestra gama de productos tecnológicos de alta resistencia y servicios profesionales de ingeniería.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex justify-center gap-3 mb-10">
          <button
            onClick={() => setActiveTab("todos")}
            className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
              activeTab === "todos"
                ? "bg-[#4295DC] text-white shadow-md shadow-cyan-500/20"
                : "bg-white dark:bg-[#1E293B] text-[#0E315B] dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
            }`}
          >
            Todas las soluciones
          </button>
          <button
            onClick={() => setActiveTab("producto")}
            className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
              activeTab === "producto"
                ? "bg-[#4295DC] text-white shadow-md shadow-cyan-500/20"
                : "bg-white dark:bg-[#1E293B] text-[#0E315B] dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
            }`}
          >
            Categorías de Productos
          </button>
          <button
            onClick={() => setActiveTab("servicio")}
            className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
              activeTab === "servicio"
                ? "bg-[#4295DC] text-white shadow-md shadow-cyan-500/20"
                : "bg-white dark:bg-[#1E293B] text-[#0E315B] dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
            }`}
          >
            Categorías de Servicios
          </button>
        </div>

        {/* Categories Cards Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredCategories.map((item) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white dark:bg-[#1E293B] rounded-3xl p-6 shadow-xl border border-slate-200 dark:border-slate-700/60 flex flex-col justify-between group transition-all duration-300 hover:border-[#4295DC]"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-[#4295DC]/10 border border-[#4295DC]/30 flex items-center justify-center text-[#4295DC] group-hover:bg-[#4295DC] group-hover:text-white transition-all duration-300">
                        <IconComponent className="w-6 h-6" />
                      </div>

                      <span
                        className={`text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full border ${
                          item.type === "producto"
                            ? "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/30"
                            : "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/30"
                        }`}
                      >
                        {item.type}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-[#0E315B] dark:text-white mb-2 font-['Raleway'] group-hover:text-[#4295DC] transition-colors leading-snug">
                      {item.name}
                    </h3>

                    <p className="text-slate-600 dark:text-slate-300 text-xs font-light leading-relaxed mb-4 line-clamp-2">
                      {item.desc}
                    </p>
                  </div>

                  <Link
                    href={item.link}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#4295DC] hover:underline pt-2 border-t border-slate-100 dark:border-slate-800"
                  >
                    <span>Ver más</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
