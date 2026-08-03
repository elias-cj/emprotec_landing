'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Search, Check, Sparkles } from 'lucide-react';

export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  popular?: boolean;
}

interface ProductsSectionProps {
  onAddToCart: (product: Product) => void;
}

export const PRODUCTS_DATA: Product[] = [
  {
    id: 'prod-1',
    name: 'Sistemas Operativos Enterprise',
    price: 200.0,
    category: 'Software & OS',
    description: 'Licencias originales y configuración de sistemas operativos Windows Server / Linux para empresas.',
  },
  {
    id: 'prod-2',
    name: 'Máquinas Virtuales & Clustering',
    price: 900.0,
    category: 'Software & OS',
    description: 'Aprovisionamiento de servidores virtuales VMware / Hyper-V con optimización de recursos y alta disponibilidad.',
    popular: true,
  },
  {
    id: 'prod-3',
    name: 'Servidores de Alta Densidad',
    price: 4000.0,
    category: 'Hardware & Servidores',
    description: 'Servidores tipo Rack / Tower de procesadores Xeon/Epyc, memoria ECC y redundancia energética.',
    popular: true,
  },
  {
    id: 'prod-4',
    name: 'Almacenamiento SAN / NAS',
    price: 999.0,
    category: 'Hardware & Servidores',
    description: 'Arreglos de discos alta velocidad RAID, resguardo seguro de datos y copias de seguridad automatizadas.',
  },
  {
    id: 'prod-5',
    name: 'Enlaces & Equipamiento de Redes',
    price: 990.0,
    category: 'Redes & Conectividad',
    description: 'Switches gestionables L2/L3, routers de alto rendimiento y puntos de acceso WiFi 6 corporativos.',
  },
  {
    id: 'prod-6',
    name: 'Monitoreo & Seguridad CCTV',
    price: 790.0,
    category: 'Seguridad & CCTV',
    description: 'Kits de cámaras IP 4K, grabadores NVR inteligentes, sensores de movimiento y visión nocturna.',
  },
  {
    id: 'prod-7',
    name: 'Sistema de Supresión al Fuego',
    price: 600.0,
    category: 'Seguridad & CCTV',
    description: 'Detección por aspiración y extinción limpia para salas de cómputo sin daño a componentes informáticos.',
  },
  {
    id: 'prod-8',
    name: 'Acondicionadores de Clima TI',
    price: 855.0,
    category: 'Climatización & Energía',
    description: 'Control de temperatura, nivel de humedad y filtración de aire para Data Centers y salas server.',
  },
  {
    id: 'prod-9',
    name: 'Sistemas de Iluminación Industrial',
    price: 400.0,
    category: 'Climatización & Energía',
    description: 'Iluminación LED de alta eficiencia energética para salas de control y racks informáticos.',
  },
  {
    id: 'prod-10',
    name: 'Sistema de Energía UPS Ininterrumpida',
    price: 700.0,
    category: 'Climatización & Energía',
    description: 'Sistemas UPS online doble conversión para evitar caídas de tensión y pérdida de datos.',
    popular: true,
  },
  {
    id: 'prod-11',
    name: 'Reguladores de Voltaje de Precisión',
    price: 500.0,
    category: 'Climatización & Energía',
    description: 'Regulación de voltaje de alta fidelidad para proteger equipos sensibles contra fluctuaciones de red.',
  },
  {
    id: 'prod-12',
    name: 'Instalación de Estructura Energética',
    price: 1000.0,
    category: 'Climatización & Energía',
    description: 'Instalación de tableros eléctricos, tierras físicas y cableado de fuerza especializado para TI.',
  },
];

export default function ProductsSection({ onAddToCart }: ProductsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [addedItem, setAddedItem] = useState<string | null>(null);

  const categories = ['Todos', 'Software & OS', 'Hardware & Servidores', 'Redes & Conectividad', 'Seguridad & CCTV', 'Climatización & Energía'];

  const filteredProducts = PRODUCTS_DATA.filter((product) => {
    const matchesCategory = selectedCategory === 'Todos' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAdd = (product: Product) => {
    onAddToCart(product);
    setAddedItem(product.id);
    setTimeout(() => setAddedItem(null), 1500);
  };

  return (
    <section id="tienda" className="py-24 relative overflow-hidden bg-gray-50 dark:bg-[#081e38] transition-colors duration-400">
      <div className="glow-orb-blue top-1/4 right-10 opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#4295DC] bg-[#4295DC]/10 px-4 py-1.5 rounded-full border border-[#4295DC]/30">
            Catálogo & Tienda Tecnológica
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0E315B] dark:text-white mt-4 mb-6 font-['Raleway']">
            Equipamiento & Productos de Ingeniería
          </h2>
          <p className="text-[#58697d] dark:text-[#B0B1B0] text-lg font-light leading-relaxed">
            Optimiza y protege tu infraestructura con nuestras soluciones y productos certificados con garantía oficial.
          </p>
        </div>

        {/* Search & Filters */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-[#4295DC] text-white shadow-lg shadow-[#4295DC]/30 font-bold'
                    : 'bg-white dark:bg-[#0E315B]/50 text-[#0E315B] dark:text-[#B0B1B0] hover:text-[#4295DC] border border-[#4295DC]/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#4295DC] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar equipamiento..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full bg-white dark:bg-[#0E315B]/60 border border-[#4295DC]/30 text-[#0E315B] dark:text-white placeholder-gray-400 text-xs focus:outline-none focus:border-[#4295DC] transition-colors"
            />
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => {
            const isJustAdded = addedItem === product.id;
            const priceInBob = (product.price * 6.96).toLocaleString('es-BO', { maximumFractionDigits: 0 });

            return (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="box-servicio-effect-card p-6 flex flex-col justify-between group relative"
              >
                {product.popular && (
                  <div className="absolute top-4 right-4 z-20 bg-[#4295DC] text-white text-[10px] font-black uppercase px-2.5 py-1 rounded-full shadow-md flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> Destacado
                  </div>
                )}

                <div>
                  <div className="text-[11px] font-bold text-[#4295DC] uppercase tracking-wider mb-2">
                    {product.category}
                  </div>

                  <h3 className="text-lg font-bold text-[#0E315B] dark:text-white mb-2 font-['Raleway'] group-hover:text-[#4295DC] transition-colors">
                    {product.name}
                  </h3>

                  <p className="text-[#58697d] dark:text-[#B0B1B0] text-xs font-light leading-relaxed mb-6 line-clamp-3">
                    {product.description}
                  </p>
                </div>

                <div>
                  <div className="mb-4 pt-4 border-t border-[#4295DC]/20 flex items-baseline justify-between">
                    <div>
                      <span className="text-2xl font-extrabold text-[#0E315B] dark:text-white font-['Raleway']">
                        ${product.price.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                      </span>
                      <span className="text-[10px] text-gray-400 block font-normal">
                        USD / ~ Bs. {priceInBob}
                      </span>
                    </div>
                    <span className="text-[10px] text-[#4295DC] font-semibold bg-[#4295DC]/10 px-2 py-0.5 rounded border border-[#4295DC]/30">
                      Stock Disponible
                    </span>
                  </div>

                  <button
                    onClick={() => handleAdd(product)}
                    className={`w-full py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all duration-300 shadow-md ${
                      isJustAdded
                        ? 'bg-emerald-600 text-white scale-95'
                        : 'bg-[#4295DC] hover:bg-[#3482ca] text-white shadow-[#4295DC]/20 hover:shadow-[#4295DC]/40'
                    }`}
                  >
                    {isJustAdded ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>¡Agregado!</span>
                      </>
                    ) : (
                      <>
                        <ShoppingCart className="w-4 h-4" />
                        <span>Añadir al Carrito</span>
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
