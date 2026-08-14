'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Search, Check, Sparkles, Eye, Filter, SlidersHorizontal } from 'lucide-react';
import ProductDetailModal from './ProductDetailModal';

export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  brand: string;
  description: string;
  tags: string[];
  image?: string;
  popular?: boolean;
  sku?: string;
  stock?: boolean;
}

interface ProductsSectionProps {
  onAddToCart: (product: Product) => void;
}

export const PRODUCTS_DATA: Product[] = [
  // Categoría: Seguridad & Control
  {
    id: 'prod-cctv',
    name: 'Kit de Cámaras IP 4K & NVR 8Ch',
    brand: 'Hikvision',
    price: 790.0,
    category: 'Seguridad & Control',
    description: 'Sistema completo de videovigilancia IP 4K UltraHD con visión nocturna a color ColorVu y NVR con analítica.',
    tags: ['CCTV 4K', 'NVR 8Ch', 'Visión Nocturna'],
    image: '/assets/cctv.jpg',
    popular: true,
    sku: 'HK-4K8CH-KIT',
    stock: true,
  },
  {
    id: 'prod-biometrico',
    name: 'Terminal Biométrico Facial & Huella',
    brand: 'ZKTeco',
    price: 450.0,
    category: 'Seguridad & Control',
    description: 'Control de acceso y asistencia con lectura facial ultra rápida a distancia y exportación a software de RRHH.',
    tags: ['Recon. Facial', 'Huella', 'Control Puertas'],
    image: '/assets/control_de_acceso.webp',
    sku: 'ZK-[#0E315B]-FACIAL',
    stock: true,
  },
  {
    id: 'prod-supresion',
    name: 'Sistema de Supresión al Fuego Novec',
    brand: 'Hikvision',
    price: 950.0,
    category: 'Seguridad & Control',
    description: 'Detección por aspiración y extinción con agente limpio para Data Centers sin residuo de agua.',
    tags: ['Agente Limpio', 'Detección Temprana', 'Data Center'],
    image: '/assets/sistema-de-alarmas-contra-incendios.webp',
    sku: 'HK-FIRE-NOVEC',
    stock: true,
  },

  // Categoría: Redes & Conectividad
  {
    id: 'prod-switch',
    name: 'Switch L3 Managed 24P PoE+ & SFP+',
    brand: 'Cisco',
    price: 990.0,
    category: 'Redes & Conectividad',
    description: 'Switch gestionable de alto rendimiento con 24 puertos Gigabit PoE+ 370W y 4 puertos SFP+ 10G para fibra.',
    tags: ['Managed L3', 'PoE+ 370W', '10G SFP+'],
    image: '/assets/Cableado de Fibra Óptica y Estructurado.jpg',
    popular: true,
    sku: 'CS-L3-24POE',
    stock: true,
  },
  {
    id: 'prod-ap-wifi6',
    name: 'Access Point UniFi Wi-Fi 6 Long Range',
    brand: 'Ubiquiti',
    price: 240.0,
    category: 'Redes & Conectividad',
    description: 'Punto de acceso Wi-Fi 6 empresarial de gran alcance con soporte Mesh, roaming sin cortes y controlador cloud.',
    tags: ['Wi-Fi 6', 'UniFi LR', 'Seamless Roaming'],
    image: '/assets/Configuración de Redes WiFi y Radio Enlaces.png',
    popular: true,
    sku: 'UB-U6-LR',
    stock: true,
  },
  {
    id: 'prod-mikrotik-router',
    name: 'RouterBoard Cloud Core Router 10G',
    brand: 'Mikrotik',
    price: 580.0,
    category: 'Redes & Conectividad',
    description: 'Router de alto rendimiento multi-core para enrutamiento corporativo, balanceo de cargas BGP y VPNs.',
    tags: ['CCR 10G', 'BGP Enrutamiento', 'RouterOS'],
    image: '/assets/fortinet-firewalls.png',
    sku: 'MK-CCR1009',
    stock: true,
  },

  // Categoría: Infraestructura TI & Energía
  {
    id: 'prod-servidor',
    name: 'Servidor PowerEdge Rack 1U Dual Xeon',
    brand: 'Dell',
    price: 3800.0,
    category: 'Infraestructura TI & Energía',
    description: 'Servidor de alta densidad con procesadores Xeon, 64GB RAM ECC, fuentes redundantes y soporte para virtualización.',
    tags: ['Dual Xeon', 'RAM ECC', 'RAID Hardware'],
    image: '/assets/Servidores de Almacenamiento Seguro y Eficiente.png',
    popular: true,
    sku: 'DELL-R640-XEON',
    stock: true,
  },
  {
    id: 'prod-ups-3kva',
    name: 'UPS Smart-UPS Online 3KVA 230V',
    brand: 'APC',
    price: 750.0,
    category: 'Infraestructura TI & Energía',
    description: 'UPS de onda senoidal pura doble conversión para protección de racks, servidores y equipos críticos contra apagones.',
    tags: ['UPS 3KVA', 'Online Senoidal', 'APC Smart'],
    popular: true,
    sku: 'APC-SRT3KXLI',
    stock: true,
  },
  {
    id: 'prod-nas-wd',
    name: 'Almacenamiento NAS WD Red Pro 4-Bay',
    brand: 'Western Digital',
    price: 890.0,
    category: 'Infraestructura TI & Energía',
    description: 'Unidad de almacenamiento centralizado NAS con discos de grado empresarial para backups y protección anti-ransomware.',
    tags: ['WD Red Pro', 'RAID 0/1/5/6', 'Backup Cloud'],
    image: '/assets/rack_servidores.jpg',
    sku: 'WD-NAS-4BAY',
    stock: true,
  },
];

export default function ProductsSection({ onAddToCart }: ProductsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [selectedBrand, setSelectedBrand] = useState<string>('Todas');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [addedItem, setAddedItem] = useState<string | null>(null);
  const [detailProduct, setDetailProduct] = useState<Product | null>(null);

  const categories = ['Todos', 'Seguridad & Control', 'Redes & Conectividad', 'Infraestructura TI & Energía'];
  const brands = ['Todas', 'Hikvision', 'Ubiquiti', 'Mikrotik', 'APC', 'Dell', 'Cisco', 'ZKTeco', 'Western Digital'];

  const filteredProducts = PRODUCTS_DATA.filter((product) => {
    const matchesCategory = selectedCategory === 'Todos' || product.category === selectedCategory;
    const matchesBrand = selectedBrand === 'Todas' || product.brand === selectedBrand;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesBrand && matchesSearch;
  });

  const handleAdd = (product: Product) => {
    onAddToCart(product);
    setAddedItem(product.id);
    setTimeout(() => setAddedItem(null), 1500);
  };

  return (
    <section id="productos" className="py-24 relative overflow-hidden bg-gray-50 dark:bg-[#0F172A] transition-colors duration-400">
      <div className="glow-orb-blue top-1/4 right-10 opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#4295DC] bg-[#4295DC]/10 px-4 py-1.5 rounded-full border border-[#4295DC]/30">
            <Sparkles className="w-3.5 h-3.5" /> Catálogo Ecommerce EMPROTEC
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0E315B] dark:text-white mt-4 mb-4 font-['Raleway']">
            Productos <span className="text-[#4295DC]">destacados</span>
          </h2>

          <p className="text-[#58697d] dark:text-slate-300 text-sm sm:text-base font-light leading-relaxed">
            Equipamiento original certificado con garantía directa de fábrica. Filtra por categoría o marca líder.
          </p>
        </div>

        {/* Filter Navigation Bar */}
        <div className="bg-white dark:bg-[#1E293B] p-5 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-700/60 mb-10 space-y-4">
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            
            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto">
              <span className="text-xs font-bold text-[#0E315B] dark:text-slate-300 mr-2 flex items-center gap-1">
                <SlidersHorizontal className="w-3.5 h-3.5 text-[#4295DC]" /> Categoría:
              </span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                    selectedCategory === cat
                      ? 'bg-[#4295DC] text-white shadow-md'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-[#4295DC]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input Bar */}
            <div className="relative w-full lg:w-72">
              <Search className="w-4 h-4 text-[#4295DC] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Buscar por marca o modelo..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-full bg-white dark:bg-[#162238] border border-[#4295DC]/45 text-[#0E315B] dark:text-white placeholder-gray-400 text-xs focus:outline-none focus:border-[#4295DC] focus:ring-2 focus:ring-[#4295DC]/20 transition-all"
              />
            </div>

          </div>

          {/* Brand Selection Row */}
          <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-slate-500 dark:text-slate-400 mr-2">Marcas:</span>
            {brands.map((b) => (
              <button
                key={b}
                onClick={() => setSelectedBrand(b)}
                className={`px-3 py-1 rounded-md text-[11px] font-semibold transition-all ${
                  selectedBrand === b
                    ? 'bg-[#0E315B] dark:bg-[#4295DC] text-white'
                    : 'bg-slate-100 dark:bg-slate-800/60 text-slate-600 dark:text-slate-300 hover:text-[#4295DC]'
                }`}
              >
                {b}
              </button>
            ))}
          </div>

        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => {
            const isJustAdded = addedItem === product.id;
            const priceInBob = (product.price * 6.96).toLocaleString('es-BO', { maximumFractionDigits: 0 });

            return (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-white dark:bg-[#1E293B] rounded-3xl p-6 shadow-xl border border-slate-200 dark:border-slate-700/60 flex flex-col justify-between group relative hover:border-[#4295DC] transition-all duration-300"
              >
                {product.popular && (
                  <div className="absolute top-4 right-4 z-10 bg-[#4295DC] text-white text-[10px] font-black uppercase px-2.5 py-1 rounded-full shadow-md flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> Destacado
                  </div>
                )}

                <div>
                  {/* Product Image Container */}
                  {product.image && (
                    <div className="relative w-full h-40 rounded-2xl overflow-hidden bg-slate-50 dark:bg-[#162238] border border-slate-200/80 dark:border-slate-700/60 mb-3 flex items-center justify-center p-2 shadow-inner">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}

                  {/* Brand & Category tags */}
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-black text-[#4295DC] bg-[#4295DC]/10 px-2.5 py-0.5 rounded-full border border-[#4295DC]/30">
                      {product.brand}
                    </span>
                    <span className="text-[10px] font-semibold text-emerald-500 flex items-center gap-1">
                      <Check className="w-3 h-3" /> En Stock
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-[#0E315B] dark:text-white mb-2 font-['Raleway'] group-hover:text-[#4295DC] transition-colors leading-snug">
                    {product.name}
                  </h3>

                  {/* Description */}
                  <p className="text-[#58697d] dark:text-slate-300 text-xs font-light leading-relaxed mb-4 line-clamp-2">
                    {product.description}
                  </p>

                  {/* Badge Chips */}
                  <div className="flex flex-wrap gap-1 mb-5">
                    {product.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-semibold bg-slate-100 dark:bg-slate-800 text-[#0E315B] dark:text-slate-200 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-700"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="mb-4 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-baseline justify-between">
                    <div>
                      <span className="text-2xl font-black text-[#0E315B] dark:text-white font-['Raleway']">
                        ${product.price.toLocaleString('en-US', { minimumFractionDigits: 2 })} USD
                      </span>
                      <span className="text-[10px] text-gray-400 block font-normal">
                        ~ Bs. {priceInBob} BOB
                      </span>
                    </div>
                  </div>

                  {/* Dual Action Buttons: Quick View + Cart */}
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setDetailProduct(product)}
                      className="py-2.5 rounded-xl font-bold text-xs bg-slate-100 dark:bg-slate-800 text-[#0E315B] dark:text-slate-200 hover:bg-[#4295DC] hover:text-white transition-colors flex items-center justify-center gap-1.5 border border-slate-200 dark:border-slate-700"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Ver producto</span>
                    </button>

                    <button
                      onClick={() => handleAdd(product)}
                      className={`py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-md ${
                        isJustAdded
                          ? 'bg-emerald-600 text-white'
                          : 'bg-[#4295DC] hover:bg-[#3482ca] text-white'
                      }`}
                    >
                      {isJustAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>¡Agregado!</span>
                        </>
                      ) : (
                        <>
                          <ShoppingCart className="w-3.5 h-3.5" />
                          <span>Al carrito</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Global CTA button */}
        <div className="mt-12 text-center">
          <a
            href="#contacto"
            className="inline-block px-8 py-3.5 rounded-xl text-xs font-extrabold text-white bg-[#0E315B] dark:bg-[#4295DC] hover:bg-[#4295DC] transition-all shadow-xl"
          >
            Ver todos los productos &gt;
          </a>
        </div>

      </div>

      {/* Product Quick View / Detail Modal */}
      <ProductDetailModal
        product={detailProduct}
        onClose={() => setDetailProduct(null)}
        onAddToCart={onAddToCart}
      />
    </section>
  );
}
