'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Sparkles } from 'lucide-react';
import { Product } from './ProductsSection';

export interface CatalogItem extends Product {
  itemType: 'producto' | 'servicio';
}

export const EMPROTEC_12_ITEMS: CatalogItem[] = [
  // --- PRODUCTOS ---
  {
    id: 'emp-1',
    name: 'Cámaras de Seguridad',
    price: 790.0,
    category: 'Seguridad & CCTV',
    brand: 'Hikvision',
    description: 'Cámaras IP 4K ColorVu con visión nocturna a color y grabación NVR.',
    tags: ['CCTV', 'ColorVu', 'Producto'],
    image: '/assets/cctv.jpg',
    itemType: 'producto',
  },
  {
    id: 'emp-2',
    name: 'Videoporteros y Audioporteros',
    price: 450.0,
    category: 'Seguridad & Control',
    brand: 'ZKTeco',
    description: 'Sistemas de comunicación residencial y corporativa con pantalla táctil IP.',
    tags: ['Videoportero', 'Producto'],
    image: '/assets/comercializacion-y-ventas-01.webp',
    itemType: 'producto',
  },
  {
    id: 'emp-3',
    name: 'VPN & Firewalls para Máxima Protección',
    price: 650.0,
    category: 'Ciberseguridad',
    brand: 'Fortinet / Mikrotik',
    description: 'Dispositivos UTM con túneles VPN cifrados y protección contra intrusiones.',
    tags: ['Firewall', 'VPN', 'Producto'],
    image: '/assets/blog-data-center-guide-1.jpg',
    itemType: 'producto',
  },
  {
    id: 'emp-4',
    name: 'UPS para Respaldo de Energía',
    price: 700.0,
    category: 'Energía Crítica',
    brand: 'APC Schneider',
    description: 'Sistemas de energía ininterrumpida online senoidal pura para servidores y racks.',
    tags: ['UPS', 'APC', 'Producto'],
    image: '/assets/ups.jpg',
    itemType: 'producto',
  },
  {
    id: 'emp-5',
    name: 'Servidores de Almacenamiento Seguro y Eficiente',
    price: 4000.0,
    category: 'Infraestructura TI',
    brand: 'Dell / Western Digital',
    description: 'Servidores Xeon High-Density y almacenamiento SAN/NAS con respaldo anti-ransomware.',
    tags: ['Servidores', 'NAS', 'Producto'],
    image: '/assets/cloud.avif',
    itemType: 'producto',
  },
  {
    id: 'emp-6',
    name: 'Alarmas Contra Incendio y Perimetrales',
    price: 600.0,
    category: 'Seguridad Electrónica',
    brand: 'EMPROTEC Certificado',
    description: 'Sensores de humo, detección de temperatura y barreras perimetrales fotoeléctricas.',
    tags: ['Incendio', 'Alarmas', 'Producto'],
    image: '/assets/aprovisionamiento-y-cmpras.webp',
    itemType: 'producto',
  },

  // --- SERVICIOS ---
  {
    id: 'emp-7',
    name: 'Sistema de Control de Asistencia y Acceso',
    price: 350.0,
    category: 'Servicios Profesionales',
    brand: 'EMPROTEC Certificado',
    description: 'Instalación y configuración de torniquetes, biometría facial y marcación de personal.',
    tags: ['Biometría', 'Servicio'],
    image: '/assets/produccion-fabricacion.webp',
    itemType: 'servicio',
  },
  {
    id: 'emp-8',
    name: 'Cableado de Fibra Óptica y Estructurado',
    price: 990.0,
    category: 'Redes & Conectividad',
    brand: 'Fluke Certified',
    description: 'Tendido, fusión de fibra y certificación de puntos de red Cat 6A / 7.',
    tags: ['Fibra Óptica', 'Cableado', 'Servicio'],
    image: '/assets/distribucion-logistica.webp',
    itemType: 'servicio',
  },
  {
    id: 'emp-9',
    name: 'Cableado y Armado de Tableros Eléctricos',
    price: 1000.0,
    category: 'Energía & Fuerza',
    brand: 'EMPROTEC Certificado',
    description: 'Montaje de tableros de distribución, tierra física y protecciones termomagnéticas.',
    tags: ['Tableros', 'Energía', 'Servicio'],
    image: '/assets/aliado-acelaracion-nuevo.webp',
    itemType: 'servicio',
  },
  {
    id: 'emp-10',
    name: 'Configuración de Redes WiFi y Radio Enlaces',
    price: 500.0,
    category: 'Redes & Conectividad',
    brand: 'Ubiquiti / Mikrotik',
    description: 'Despliegue de Wi-Fi 6 Mesh corporativo y enlaces inalámbricos punto a punto.',
    tags: ['WiFi 6', 'Radio Enlace', 'Servicio'],
    image: '/assets/aprovisionamiento-compras-sin-txt.webp',
    itemType: 'servicio',
  },
  {
    id: 'emp-11',
    name: 'Automatización de Luces y Portones (Domótica)',
    price: 400.0,
    category: 'Domótica & Control',
    brand: 'EMPROTEC Certificado',
    description: 'Instalación de motores de portón, iluminación inteligente e integración móvil.',
    tags: ['Domótica', 'Portones', 'Servicio'],
    image: '/assets/comercializacion-ventas.webp',
    itemType: 'servicio',
  },
  {
    id: 'emp-12',
    name: 'Virtualización de Servicios y Sistemas',
    price: 900.0,
    category: 'Servicios IT & Nube',
    brand: 'VMware / Hyper-V',
    description: 'Migración a entornos virtuales, clústeres de alta disponibilidad y backup en la nube.',
    tags: ['Virtualización', 'Cloud', 'Servicio'],
    image: '/assets/porque-somos-diferentes-min.webp',
    itemType: 'servicio',
  },
];

export default function ServicesAndProductsGrid() {
  const [filter, setFilter] = useState<'todos' | 'producto' | 'servicio'>('todos');

  const filteredItems = EMPROTEC_12_ITEMS.filter((item) => {
    if (filter === 'todos') return true;
    return item.itemType === filter;
  });

  return (
    <section id="servicios-y-productos" className="py-24 bg-white dark:bg-[#181818] text-slate-900 dark:text-white relative overflow-hidden transition-colors duration-300 border-t border-slate-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#4295DC] bg-slate-100 dark:bg-[#1F1F1F] px-4 py-1.5 rounded-full border border-slate-200 dark:border-neutral-800 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" /> CATÁLOGO OFICIAL EMPROTEC
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white font-['Raleway'] tracking-tight">
            Nuestros Servicios y Productos
          </h2>

          <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm font-light leading-relaxed max-w-xl mx-auto">
            Soluciones personalizadas para tu hogar o empresa. Proveemos e instalamos equipamiento de alta calidad.
          </p>
        </div>

        {/* Filter Buttons: [Todos] [Productos] [Servicios] */}
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={() => setFilter('todos')}
            className={`px-5 py-2 rounded-full text-xs font-black uppercase tracking-wider transition-all duration-300 ${
              filter === 'todos'
                ? 'bg-[#0E315B] dark:bg-[#4295DC] text-white shadow-lg scale-105'
                : 'bg-slate-100 dark:bg-[#1F1F1F] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-neutral-800 hover:bg-slate-200 dark:hover:bg-neutral-800'
            }`}
          >
            Todos ({EMPROTEC_12_ITEMS.length})
          </button>

          <button
            onClick={() => setFilter('producto')}
            className={`px-5 py-2 rounded-full text-xs font-black uppercase tracking-wider transition-all duration-300 ${
              filter === 'producto'
                ? 'bg-[#0E315B] dark:bg-[#4295DC] text-white shadow-lg scale-105'
                : 'bg-slate-100 dark:bg-[#1F1F1F] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-neutral-800 hover:bg-slate-200 dark:hover:bg-neutral-800'
            }`}
          >
            Productos ({EMPROTEC_12_ITEMS.filter((i) => i.itemType === 'producto').length})
          </button>

          <button
            onClick={() => setFilter('servicio')}
            className={`px-5 py-2 rounded-full text-xs font-black uppercase tracking-wider transition-all duration-300 ${
              filter === 'servicio'
                ? 'bg-[#0E315B] dark:bg-[#4295DC] text-white shadow-lg scale-105'
                : 'bg-slate-100 dark:bg-[#1F1F1F] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-neutral-800 hover:bg-slate-200 dark:hover:bg-neutral-800'
            }`}
          >
            Servicios ({EMPROTEC_12_ITEMS.filter((i) => i.itemType === 'servicio').length})
          </button>
        </div>

        {/* Dynamic Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatePresence>
            {filteredItems.map((item) => {
              const priceFormatted = `$${item.price.toLocaleString('de-DE', { minimumFractionDigits: 2 })}`;
              const waMessage = `Hola EMPROTEC, me interesa solicitar información y cotización sobre: ${item.name} (${priceFormatted})`;

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col justify-between space-y-3 group"
                >
                  <div>
                    {/* Square Image Container */}
                    <div className="relative w-full aspect-square overflow-hidden rounded-xl bg-slate-100 dark:bg-[#1F1F1F] border border-slate-200/80 dark:border-neutral-800 mb-3 shadow-md">
                      <Image
                        src={item.image!}
                        alt={item.name}
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />

                      <div className="absolute top-2.5 left-2.5">
                        <span className="text-[10px] font-black uppercase text-white bg-[#0E315B]/90 dark:bg-[#4295DC]/90 px-2.5 py-0.5 rounded-md backdrop-blur-sm shadow">
                          {item.itemType === 'producto' ? 'Producto' : 'Servicio'}
                        </span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white font-['Raleway'] leading-snug">
                      {item.name}
                    </h3>

                    {/* Price */}
                    <span className="text-xs text-[#4295DC] font-extrabold block mt-1">
                      {priceFormatted}
                    </span>
                  </div>

                  {/* WhatsApp Direct Action */}
                  <a
                    href={`https://wa.me/59171322727?text=${encodeURIComponent(waMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-max px-3.5 py-2 rounded-lg text-xs font-extrabold bg-emerald-600 hover:bg-emerald-500 text-white transition-all duration-200 flex items-center gap-1.5 shadow-sm transform hover:-translate-y-0.5"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Cotizar por WhatsApp</span>
                  </a>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
