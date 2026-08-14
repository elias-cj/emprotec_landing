"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Building2, CheckCircle2, ArrowRight, X, ShieldCheck } from "lucide-react";

export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  category: string;
  desc: string;
  solution: string;
  image: string;
  results: string[];
}

const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "proj-1",
    title: "Sistema de Videovigilancia IP 4K Industrial",
    client: "Complejo Industrial & Logístico",
    category: "Seguridad Electrónica",
    desc: "Instalación de red de cámaras CCTV 4K con tecnología ColorVu para monitoreo perimetral 24/7 y analítica de video inteligente.",
    solution: "Despliegue de 32 cámaras IP 4K, 2 NVRs con redundancia RAID y sala de control centralizada con software HikCentral.",
    image: "/assets/cctv.jpg",
    results: ["100% de cobertura perimetral", "Monitoreo remoto desde Apps corporativas", "Grabación ininterrumpida por 60 días"],
  },
  {
    id: "proj-2",
    title: "Implementación de Red Empresarial & Fibra Óptica",
    client: "Edificio Corporativo de Oficinas",
    category: "Redes & Telecomunicaciones",
    desc: "Diseño y tendido de cableado estructurado categoría 6A y enlace troncal de fibra óptica monomodo.",
    solution: "Instalación de 120 puntos de red certificados, switches Cisco PoE+ gestionables y 15 Access Points Wi-Fi 6 UniFi LR.",
    image: "/assets/Cableado de Fibra Óptica y Estructurado.jpg",
    results: ["Velocidades de 10Gbps en backbone", "Roaming Wi-Fi continuo en 5 pisos", "Certificación OTDR entregada"],
  },
  {
    id: "proj-3",
    title: "Acondicionamiento de Sala de Servidores & UPS",
    client: "Empresa de Servicios Financieros",
    category: "Infraestructura & TI",
    desc: "Diseño e implementación de Data Center compacto con supresión de fuego limpia y respaldo energético ininterrumpido.",
    solution: "Montaje de 3 Racks de alta densidad, UPS APC Online 10KVA con banco de baterías de 4 horas y sistema Novec 1230.",
    image: "/assets/Cableado y Armado de Tableros Eléctricos.jpg",
    results: ["Cero minutos de inactividad registrados", "Protección completa contra fallas de red eléctrica", "Monitoreo térmico continuo"],
  },
  {
    id: "proj-4",
    title: "Control de Acceso Biométrico Faciales",
    client: "Centro Comercial & Empresarial",
    category: "Control de Acceso",
    desc: "Automatización de ingreso de personal y visitantes mediante terminales de reconocimiento facial de alta velocidad.",
    solution: "Instalación de 8 torniquetes con biometría ZKTeco integrada al software de recursos humanos e impresoras de badges.",
    image: "/assets/Control de Acceso Biométrico & Torniquetes.png",
    results: ["Verificación en menos de 0.3 segundos", "Eliminación de tarjetas físicas duplicadas", "Reportes automatizados de asistencia"],
  },
  {
    id: "proj-5",
    title: "Virtualización de Servidores & Backup NAS",
    client: "Distribuidora Nacional de Consumo Masivo",
    category: "Servidores & Cloud",
    desc: "Consolidación de infraestructura física legacy a un clúster virtual VMware con almacenamiento NAS redundante.",
    solution: "Servidores Dell PowerEdge Xeon en HA, arreglo de discos SAN/NAS WD Red Pro y copias de seguridad Veeam Backup.",
    image: "/assets/Virtualización de Servicios y Sistemas.png",
    results: ["Reducción de 60% en consumo eléctrico TI", "Recuperación de desastres (DRP) en 15 min", "Protección contra ransomware"],
  },
  {
    id: "proj-6",
    title: "Domótica & Automatización de Portones",
    client: "Condominio Residencial de Lujo",
    category: "Domótica",
    desc: "Automatización de accesos vehiculares con brazos electromecánicos y control de iluminación inteligente por escenas.",
    solution: "Motores italianos de alta frecuencia, control centralizado por voz y app móvil para residentes.",
    image: "/assets/Automatización de Luces y Portones (Domótica).png",
    results: ["Ingreso automatizado por lectura de tag", "Reducción de tiempos de espera en portón", "Control inteligente de consumo energético"],
  },
];

export default function ProjectsShowcase() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="proyectos" className="py-24 bg-slate-50 dark:bg-[#0F172A] relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#4295DC] bg-[#4295DC]/10 px-4 py-1.5 rounded-full border border-[#4295DC]/30">
            <Sparkles className="w-3.5 h-3.5" /> Casos de Éxito & Casos Reales
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0E315B] dark:text-white mt-4 mb-4 font-['Raleway']">
            Nuestros <span className="text-[#4295DC]">proyectos realizados</span>
          </h2>

          <p className="text-[#58697d] dark:text-slate-300 text-sm sm:text-base font-light leading-relaxed">
            Conoce algunas de las implementaciones tecnológicas ejecutadas por nuestro equipo de ingenieros en Santa Cruz y Bolivia.
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS_DATA.map((proj) => (
            <motion.div
              key={proj.id}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-[#1E293B] rounded-3xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-700/60 flex flex-col justify-between group"
            >
              <div>
                {/* Project Image */}
                <div className="relative w-full aspect-16/10 overflow-hidden bg-slate-900 dark:bg-[#162238] flex items-center justify-center p-3">
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    fill
                    className="object-contain p-3 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="text-[10px] font-extrabold uppercase bg-[#0E315B]/90 dark:bg-[#4295DC] text-white px-3 py-1 rounded-full backdrop-blur-sm">
                      {proj.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-1.5 text-xs text-[#4295DC] font-semibold">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>{proj.client}</span>
                  </div>

                  <h3 className="text-lg font-bold text-[#0E315B] dark:text-white font-['Raleway'] group-hover:text-[#4295DC] transition-colors leading-snug">
                    {proj.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-300 text-xs font-light leading-relaxed line-clamp-3">
                    {proj.desc}
                  </p>
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => setSelectedProject(proj)}
                  className="w-full py-2.5 rounded-xl font-bold text-xs bg-slate-100 dark:bg-slate-800/80 text-[#0E315B] dark:text-slate-200 hover:bg-[#4295DC] hover:text-white transition-all flex items-center justify-center gap-1.5 border border-slate-200 dark:border-slate-700"
                >
                  <span>Ver proyecto</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-2xl bg-white dark:bg-[#1E293B] rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#4295DC]/30 text-[#0E315B] dark:text-white"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <span className="text-[11px] font-extrabold uppercase text-[#4295DC] bg-[#4295DC]/10 px-3 py-1 rounded-full border border-[#4295DC]/30 mb-3 inline-block">
                {selectedProject.category}
              </span>

              <h3 className="text-2xl font-extrabold mb-2 font-['Raleway']">
                {selectedProject.title}
              </h3>

              <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-300 mb-4">
                <Building2 className="w-4 h-4 text-[#4295DC]" />
                <span>Cliente: {selectedProject.client}</span>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="text-xs font-bold uppercase text-[#4295DC] mb-1">Solución Implementada</h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-[#B0B1B0] font-light leading-relaxed">
                    {selectedProject.solution}
                  </p>
                </div>

                <div className="bg-slate-50 dark:bg-[#162238] p-4 rounded-2xl border border-slate-200/60 dark:border-slate-700/60 space-y-2">
                  <h4 className="text-xs font-bold uppercase text-[#4295DC] flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4" /> Resultados del Proyecto
                  </h4>
                  {selectedProject.results.map((res, rIdx) => (
                    <div key={rIdx} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#4295DC]" />
                      <span>{res}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href={`https://wa.me/59171322727?text=Hola%20EMPROTEC,%20me%20interesa%20un%20proyecto%20similar%20a:%20${encodeURIComponent(selectedProject.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl bg-[#4295DC] hover:bg-[#3480c4] text-white font-extrabold text-xs text-center block shadow-lg"
              >
                Solicitar un proyecto similar en WhatsApp &gt;
              </a>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
