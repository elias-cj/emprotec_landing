'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Server, Shield, Network, Flame, Zap, ArrowUpRight, Check, RefreshCw } from 'lucide-react';

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({});

  const toggleFlip = (index: number) => {
    setFlippedCards((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const services = [
    {
      icon: Server,
      category: 'Tecnología & Redes',
      title: 'Servidores & Almacenamiento TI',
      shortDesc: 'Climatización eficiente, máquinas virtuales y estructuras de almacenamiento para optimizar la infraestructura de tu centro de datos.',
      fullDesc: 'Diseño, armado y aprovisionamiento de plataformas de virtualización, almacenamiento centralizado SAN/NAS y acondicionadores de precisión (temperatura y humedad) para salas de cómputo.',
      features: ['Sistemas Operativos Enterprise', 'Máquinas Virtuales & Cluster', 'Servidores de Red y Almacenamiento', 'Control de Clima y Humedad'],
      tag: 'Infraestructura TI',
    },
    {
      icon: Shield,
      category: 'Seguridad TIC',
      title: 'Monitoreo & Control de Acceso',
      shortDesc: 'Sistemas de videovigilancia CCTV, control biométrico de acceso y seguridad perimetral para proteger tus instalaciones.',
      fullDesc: 'Desarrollamos proyectos integrales de monitoreo remoto, analítica de video, integración de alarmas y control automatizado para resguardar activos críticos.',
      features: ['CCTV de Alta Definición', 'Control de Acceso Biométrico', 'Alarmas Inteligentes y Sensores', 'Auditoría de Seguridad'],
      tag: 'Ciberseguridad & CCTV',
    },
    {
      icon: Zap,
      category: 'Energía & Continuidad',
      title: 'Sistemas Energéticos & UPS',
      shortDesc: 'Regulación de voltaje, sistemas de alimentación ininterrumpida UPS e instalación de estructuras eléctricas críticas.',
      fullDesc: 'Garantizamos que tu operación nunca se detenga ante fallos de suministro eléctrico. Equipos UPS de grado industrial y supresores de picos de voltaje.',
      features: ['Sistemas UPS Monofásicos y Trifásicos', 'Reguladores de Voltaje de Precisión', 'Estructura Energética de Respaldo', 'Protección contra Descargas Eléctricas'],
      tag: 'Energía Crítica',
    },
    {
      icon: Flame,
      category: 'Protección Ambiental',
      title: 'Supresión al Fuego',
      shortDesc: 'Sistemas de detección temprana y extinción limpia para data centers y salas de servidores.',
      fullDesc: 'Instalación de agentes limpios de supresión de fuego sin residuo hídrico, protegiendo tus equipos electrónicos ante eventualidades de sobrecalentamiento.',
      features: ['Detección Temprana por Aspiración', 'Agentes Limpios Novec / FM-200', 'Integración con Centros de Control', 'Mantenimiento Preventivo'],
      tag: 'Seguridad Ambiental',
    },
    {
      icon: Network,
      category: 'Conectividad',
      title: 'Diseño de Estructuras de Red',
      shortDesc: 'Cableado estructurado, enlaces inalámbricos, conmutación de red y contratos de soporte IT outsourcing.',
      fullDesc: 'Optimizamos la velocidad y fiabilidad de las comunicaciones de tu empresa con redes certificadas Cat 6A/Fibra Óptica y soporte proactivo 24/7.',
      features: ['Cableado Estructurado Certificado', 'Enlaces de Fibra y Radiofrecuencia', 'Equipamiento de Redes (Switches/Routers)', 'Contratos de Tercerización IT'],
      tag: 'Redes & Enlaces',
    },
  ];

  return (
    <section id="servicios" className="py-24 relative overflow-hidden bg-white dark:bg-[#0F172A] tech-grid-bg transition-colors duration-400">
      <div className="glow-orb-blue top-1/3 right-0 opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#4295DC] bg-[#4295DC]/10 px-4 py-1.5 rounded-full border border-[#4295DC]/30">
            Nuestros Servicios Especializados
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0E315B] dark:text-white mt-4 mb-6 font-['Raleway']">
            Soluciones Integrales de Ingeniería TIC
          </h2>
          <p className="text-[#58697d] dark:text-slate-300 text-lg font-light leading-relaxed">
            Explora nuestras soluciones. Pasa el cursor o haz clic en las tarjetas interactivas para descubrir los detalles técnicos de cada área.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {services.map((service, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === idx
                  ? 'bg-[#4295DC] text-white shadow-lg shadow-[#4295DC]/30 scale-105'
                  : 'bg-gray-100 dark:bg-[#0E315B]/50 text-[#0E315B] dark:text-[#B0B1B0] hover:text-[#4295DC] border border-[#4295DC]/20'
              }`}
            >
              {service.category}
            </button>
          ))}
        </div>

        {/* Flip Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const IconComp = service.icon;
            const isFlipped = flippedCards[idx];

            return (
              <div
                key={idx}
                className="flip-card-perspective h-[420px] cursor-pointer"
                onClick={() => toggleFlip(idx)}
              >
                <div className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}>
                  {/* Front Side */}
                  <div className="flip-card-front box-servicio-effect-card p-8 flex flex-col justify-between text-left">
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-14 h-14 rounded-2xl bg-[#4295DC]/10 border border-[#4295DC]/30 flex items-center justify-center">
                          <IconComp className="w-7 h-7 text-[#4295DC]" />
                        </div>
                        <span className="text-xs font-bold text-[#4295DC] bg-[#4295DC]/10 px-3 py-1 rounded-full border border-[#4295DC]/30">
                          {service.tag}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold text-[#0E315B] dark:text-white mb-3 font-['Raleway']">
                        {service.title}
                      </h3>

                      <p className="text-[#58697d] dark:text-[#B0B1B0] text-sm leading-relaxed font-light mb-6">
                        {service.shortDesc}
                      </p>
                    </div>

                    <div>
                      <div className="space-y-2 mb-6">
                        {service.features.slice(0, 2).map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-center gap-2 text-xs text-[#0E315B] dark:text-[#FFFFFF]">
                            <Check className="w-3.5 h-3.5 text-[#4295DC]" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center justify-between text-xs font-bold text-[#4295DC]">
                        <span className="flex items-center gap-1">
                          Girar para ver detalles <RefreshCw className="w-3.5 h-3.5" />
                        </span>
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Back Side */}
                  <div className="flip-card-back box-servicio-effect-card p-8 flex flex-col justify-between text-left bg-white dark:bg-[#1E293B] border-[#4295DC]/50">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-extrabold text-[#4295DC] uppercase tracking-wider">
                          Detalles del Servicio
                        </span>
                        <RefreshCw className="w-4 h-4 text-gray-400" />
                      </div>

                      <h4 className="text-xl font-bold text-[#0E315B] dark:text-white mb-3 font-['Raleway']">
                        {service.title}
                      </h4>

                      <p className="text-[#58697d] dark:text-[#B0B1B0] text-xs leading-relaxed mb-6 font-light">
                        {service.fullDesc}
                      </p>

                      <div className="space-y-2">
                        {service.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-center gap-2 text-xs text-[#0E315B] dark:text-[#FFFFFF]">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#4295DC]" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <a
                      href="https://wa.me/59171322727?text=Deseo%20cotizar%20el%20servicio%20de%20"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 rounded-xl bg-[#4295DC] hover:bg-[#3482ca] text-white font-bold text-center text-xs tracking-wide shadow-md transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Solicitar Cotización de Servicio
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
