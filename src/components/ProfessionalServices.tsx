"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Camera,
  ShieldCheck,
  Flame,
  PhoneCall,
  Network,
  Zap,
  Wifi,
  Server,
  Lock,
  BatteryCharging,
  HardDrive,
  Home,
  Cpu,
  CheckCircle2,
  ArrowUpRight,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import ServiceDetailModal, { ServiceDetailItem } from "./ServiceDetailModal";

export interface ProfessionalServiceItem {
  id: string;
  category: "Seguridad" | "Infraestructura" | "Tecnología empresarial" | "Automatización";
  title: string;
  desc: string;
  benefits: string[];
  icon: any;
  image: string;
  whatsappMsg: string;
}

const SERVICES_CATALOG: ProfessionalServiceItem[] = [
  // 1. Seguridad
  {
    id: "serv-cctv",
    category: "Seguridad",
    title: "Cámaras de Seguridad CCTV",
    desc: "Instalación e integración de sistemas de videovigilancia IP 4K con monitoreo remoto móvil 24/7 y analítica de video.",
    benefits: ["Grabación continua NVR redundante", "Visión nocturna a color ColorVu", "Detección de cruce de línea y rostro"],
    icon: Camera,
    image: "/assets/cctv.jpg",
    whatsappMsg: "Hola EMPROTEC, solicito cotización para el servicio de Cámaras de Seguridad CCTV.",
  },
  {
    id: "serv-acceso",
    category: "Seguridad",
    title: "Control de Asistencia y Acceso",
    desc: "Lectores biométricos por reconocimiento facial, huella dactilar y molinetes magnéticos con software de gestión.",
    benefits: ["Registro de asistencias para RRHH", "Apertura magnética de puertas", "Exportación de datos de personal"],
    icon: ShieldCheck,
    image: "/assets/Control de Acceso Biométrico & Torniquetes.png",
    whatsappMsg: "Hola EMPROTEC, me interesa el servicio de Control de Asistencia y Acceso Biométrico.",
  },
  {
    id: "serv-incendio",
    category: "Seguridad",
    title: "Alarmas Contra Incendio y Perimetrales",
    desc: "Sensores de humo por aspiración temprana, supresión de fuego limpia Novec/FM-200 y cercos infrarrojos.",
    benefits: ["Cero residuos hídricos en Data Centers", "Notificación instantánea a central", "Certificación de seguridad perimetral"],
    icon: Flame,
    image: "/assets/sistema-de-alarmas-contra-incendios.webp",
    whatsappMsg: "Hola EMPROTEC, solicito cotización para Alarmas Contra Incendio y Perimetrales.",
  },
  {
    id: "serv-videoporteros",
    category: "Seguridad",
    title: "Videoporteros y Audioporteros",
    desc: "Frentes de calle IP con cámara HD, pantallas táctiles interiores y apertura de puerta remota desde el celular.",
    benefits: ["Atención de llamadas desde Smartphone", "Integración con cerraduras electrónicas", "Diseño para residencias y edificios"],
    icon: PhoneCall,
    image: "/assets/Videoporteros y Audioporteros.jpg",
    whatsappMsg: "Hola EMPROTEC, necesito el servicio de Videoporteros y Audioporteros.",
  },

  // 2. Infraestructura
  {
    id: "serv-fibra",
    category: "Infraestructura",
    title: "Cableado de Fibra Óptica y Estructurado",
    desc: "Tendido de cableado estructurado certificado Cat 6A/7 y empalmes por fusión de fibra óptica mono/multimodo.",
    benefits: ["Certificación de canal OTDR y Fluke", "Organización profesional de Racks TI", "Máximo rendimiento sin interferencias"],
    icon: Network,
    image: "/assets/Cableado de Fibra Óptica y Estructurado.jpg",
    whatsappMsg: "Hola EMPROTEC, solicito cotización para Cableado de Fibra Óptica y Estructurado.",
  },
  {
    id: "serv-tableros",
    category: "Infraestructura",
    title: "Cableado y Armado de Tableros Eléctricos",
    desc: "Distribución de fuerza eléctrica, tableros con protecciones termomagnéticas y mallas de tierra física especializadas.",
    benefits: ["Balanceo de cargas monofásicas y trifásicas", "Protección contra descargas atmosféricas", "Cumplimiento de normas eléctricas"],
    icon: Zap,
    image: "/assets/Cableado y Armado de Tableros Eléctricos.jpg",
    whatsappMsg: "Hola EMPROTEC, necesito cotización para Cableado y Armado de Tableros Eléctricos.",
  },
  {
    id: "serv-wifi-radio",
    category: "Infraestructura",
    title: "Configuración de Redes WiFi y Radio Enlaces",
    desc: "Despliegue de Puntos de Acceso Wi-Fi 6 de alta densidad y radio enlaces inalámbricos punto a punto de larga distancia.",
    benefits: ["Estudio de cobertura RF por mapa de calor", "Redes de invitados aisladas y seguras", "Enlaces de kilómetros sin pérdida"],
    icon: Wifi,
    image: "/assets/Configuración de Redes WiFi y Radio Enlaces.png",
    whatsappMsg: "Hola EMPROTEC, me interesa el servicio de Configuración de Redes WiFi y Radio Enlaces.",
  },

  // 3. Tecnología empresarial
  {
    id: "serv-virt",
    category: "Tecnología empresarial",
    title: "Virtualización de Servicios y Sistemas",
    desc: "Creación y optimización de plataformas virtuales VMware / Hyper-V y migraciones de servidores a entornos cloud.",
    benefits: ["Alta disponibilidad y failover automático", "Ahorro de energía en Data Centers", "Copias de seguridad de máquinas virtuales"],
    icon: Server,
    image: "/assets/Virtualización de Servicios y Sistemas.png",
    whatsappMsg: "Hola EMPROTEC, requiero asesoría para Virtualización de Servicios y Sistemas.",
  },
  {
    id: "serv-vpn",
    category: "Tecnología empresarial",
    title: "VPN & Firewalls para Máxima Protección",
    desc: "Seguridad digital perimetral con Firewalls UTM, túneles VPN cifrados para teletrabajo y filtrado de navegación.",
    benefits: ["Prevención de intrusiones e infecciones malware", "Conexión segura de sucursales remotas", "Políticas avanzadas de ancho de banda"],
    icon: Lock,
    image: "/assets/fortinet-firewalls.png",
    whatsappMsg: "Hola EMPROTEC, necesito el servicio de VPN & Firewalls para Máxima Protección.",
  },
  {
    id: "serv-ups-respaldo",
    category: "Tecnología empresarial",
    title: "UPS para Respaldo de Energía",
    desc: "Instalación de sistemas UPS Online doble conversión monofásicos y trifásicos para energía ininterrumpida.",
    benefits: ["Cero micro-cortes en salas de servidores", "Bancos de baterías externas de alta capacidad", "Mantenimiento preventivo de potencia"],
    icon: BatteryCharging,
    image: "/assets/Ups.jpg",
    whatsappMsg: "Hola EMPROTEC, requiero cotización para UPS para Respaldo de Energía.",
  },
  {
    id: "serv-servidores-nas",
    category: "Tecnología empresarial",
    title: "Servidores de Almacenamiento Seguro y Eficiente",
    desc: "Configuración de arreglos de almacenamiento NAS/SAN con RAID redundante y esquemas de backup anti-ransomware.",
    benefits: ["Almacenamiento centralizado rápido", "Protección redundante RAID 0/1/5/6/10", "Backups automatizados en sitio y nube"],
    icon: HardDrive,
    image: "/assets/Servidores de Almacenamiento Seguro y Eficiente.png",
    whatsappMsg: "Hola EMPROTEC, me interesa el servicio de Servidores de Almacenamiento Seguro y Eficiente.",
  },

  // 4. Automatización
  {
    id: "serv-luces-portones",
    category: "Automatización",
    title: "Automatización de Luces y Portones",
    desc: "Sistemas inteligentes para apertura automatizada de portones vehiculares y control programado de iluminación.",
    benefits: ["Brazo electromecánico para portones", "Sensor de detección de presencia vehicular", "Ahorro energético con luces inteligentes"],
    icon: Cpu,
    image: "/assets/Automatización de Luces y Portones (Domótica).png",
    whatsappMsg: "Hola EMPROTEC, solicito cotización para Automatización de Luces y Portones.",
  },
  {
    id: "serv-domotica",
    category: "Automatización",
    title: "Domótica para Hogares & Empresas",
    desc: "Integración de Smart Home con control por voz (Alexa, Google, Siri), persianas automatizadas y escenas de confort.",
    benefits: ["Control centralizado desde App móvil", "Escenas personalizadas de iluminación", "Ahorro en climatización"],
    icon: Home,
    image: "/assets/Automatización de Luces y Portones (Domótica).png",
    whatsappMsg: "Hola EMPROTEC, deseo información sobre soluciones de Domótica.",
  },
];

export default function ProfessionalServices() {
  const [selectedCat, setSelectedCat] = useState<string>("Todas");
  const [activeModalService, setActiveModalService] = useState<ServiceDetailItem | null>(null);

  const categories = ["Todas", "Seguridad", "Infraestructura", "Tecnología empresarial", "Automatización"];

  const filteredServices = SERVICES_CATALOG.filter((item) => {
    if (selectedCat === "Todas") return true;
    return item.category === selectedCat;
  });

  const openModal = (item: ProfessionalServiceItem) => {
    setActiveModalService({
      title: item.title,
      category: item.category,
      description: item.desc,
      features: item.benefits,
      tags: [item.category, "Garantía EMPROTEC", "Llave en Mano"],
      whatsappMessage: item.whatsappMsg,
    });
  };

  return (
    <section id="servicios" className="py-24 bg-[#0E315B] text-white relative overflow-hidden transition-colors duration-300">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#4295DC]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-[#4295DC] bg-[#4295DC]/10 px-4 py-1.5 rounded-full border border-[#4295DC]/30">
            <Sparkles className="w-3.5 h-3.5" /> Ingeniería & Soluciones Profesionales
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-4 mb-4 font-['Raleway'] tracking-tight">
            Servicios profesionales de <span className="text-[#4295DC]">tecnología</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
            Diseñamos, proveemos e instalamos proyectos llave en mano adaptados a hogares, comercios e industrias en Bolivia.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
                selectedCat === cat
                  ? "bg-[#4295DC] text-white shadow-lg shadow-cyan-500/25 scale-105"
                  : "bg-slate-800/80 text-slate-300 hover:text-white border border-slate-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredServices.map((item) => {
              const IconComp = item.icon;

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="bg-slate-900/90 rounded-3xl p-7 border border-slate-800 hover:border-[#4295DC]/50 shadow-xl flex flex-col justify-between group transition-all duration-300"
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-[#4295DC]/15 border border-[#4295DC]/30 flex items-center justify-center text-[#4295DC] group-hover:bg-[#4295DC] group-hover:text-white transition-all duration-300">
                        <IconComp className="w-6 h-6" />
                      </div>

                      <span className="text-[10px] font-bold text-[#4295DC] bg-[#4295DC]/10 px-3 py-1 rounded-full border border-[#4295DC]/30 uppercase">
                        {item.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-extrabold text-white mb-2.5 font-['Raleway'] group-hover:text-[#4295DC] transition-colors leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed mb-5">
                      {item.desc}
                    </p>

                    {/* Benefits bullet list */}
                    <div className="space-y-2 mb-6 pt-4 border-t border-slate-800">
                      {item.benefits.map((b, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#4295DC] shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-3">
                    <button
                      onClick={() => openModal(item)}
                      className="text-xs font-bold text-slate-400 hover:text-[#4295DC] transition-colors flex items-center gap-1"
                    >
                      <span>Ver especificaciones</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    <a
                      href={`https://wa.me/59171322727?text=${encodeURIComponent(item.whatsappMsg)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 rounded-xl bg-[#4295DC] hover:bg-[#3480c4] text-white font-extrabold text-xs shadow-md flex items-center gap-1.5 transition-all"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Solicitar cotización</span>
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Progressive Disclosure Modal */}
      <ServiceDetailModal
        service={activeModalService}
        onClose={() => setActiveModalService(null)}
      />
    </section>
  );
}
