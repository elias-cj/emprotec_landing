"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ShoppingCart, MessageSquare, Check, ShieldCheck, Tag, Box } from "lucide-react";
import { Product } from "./ProductsSection";

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

export default function ProductDetailModal({
  product,
  onClose,
  onAddToCart,
}: ProductDetailModalProps) {
  if (!product) return null;

  const priceInBob = (product.price * 6.96).toLocaleString("es-BO", { maximumFractionDigits: 0 });
  const sku = product.sku || `EMP-${product.id.toUpperCase()}`;
  const brand = product.brand || "EMPROTEC Certificado";

  const waMessage = `Hola EMPROTEC! Quisiera consultar la disponibilidad y pedir información sobre el producto: *${product.name}* (SKU: ${sku}).`;
  const waUrl = `https://wa.me/59171322727?text=${encodeURIComponent(waMessage)}`;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-3xl bg-white dark:bg-[#1E293B] rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#4295DC]/30 text-[#0E315B] dark:text-white max-h-[90vh] overflow-y-auto my-auto"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors z-20"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Left Image Column */}
            <div className="md:col-span-5 space-y-4">
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-slate-100 dark:bg-[#162238] border border-slate-200 dark:border-slate-700/60 p-4 flex items-center justify-center">
                <Image
                  src={product.image || "/assets/blog-data-center-guide-1.jpg"}
                  alt={product.name}
                  fill
                  className="object-cover object-center"
                />
              </div>

              <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-[#162238] p-3 rounded-xl border border-slate-200/60 dark:border-slate-700/60">
                <span className="flex items-center gap-1">
                  <Box className="w-3.5 h-3.5 text-[#4295DC]" /> SKU: {sku}
                </span>
                <span className="flex items-center gap-1 font-semibold text-emerald-500">
                  <Check className="w-3.5 h-3.5" /> En Stock
                </span>
              </div>
            </div>

            {/* Right Product Specifications Column */}
            <div className="md:col-span-7 space-y-5">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#4295DC] bg-[#4295DC]/10 px-3 py-0.5 rounded-full border border-[#4295DC]/30">
                    {product.category}
                  </span>
                  <span className="text-[11px] font-bold text-slate-500 dark:text-slate-300">
                    Marca: {brand}
                  </span>
                </div>

                <h2 className="text-2xl font-extrabold text-[#0E315B] dark:text-white font-['Raleway'] leading-tight">
                  {product.name}
                </h2>
              </div>

              {/* Pricing */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#162238] border border-slate-200/80 dark:border-slate-700/60 flex items-baseline justify-between">
                <div>
                  <span className="text-3xl font-black text-[#0E315B] dark:text-white font-['Raleway']">
                    ${product.price.toLocaleString("en-US", { minimumFractionDigits: 2 })} USD
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 block font-light">
                    Aproximadamente Bs. {priceInBob} BOB
                  </span>
                </div>

                <span className="text-xs font-bold text-[#4295DC] bg-[#4295DC]/10 px-3 py-1 rounded-full border border-[#4295DC]/30">
                  Garantía Oficial 1 Año
                </span>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-light leading-relaxed">
                {product.description}
              </p>

              {/* Key Tags / Features */}
              <div className="space-y-2">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#4295DC] flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" /> Características Clave & Especificaciones
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {product.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-[#0E315B] dark:text-slate-200 px-3 py-1 rounded-lg border border-slate-200 dark:border-slate-700"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => {
                    onAddToCart(product);
                    onClose();
                  }}
                  className="flex-1 py-3.5 rounded-xl bg-[#4295DC] hover:bg-[#3480c4] text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 transition-all"
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span>Agregar al Carrito</span>
                </button>

                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-lg transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Consultar por WhatsApp</span>
                </a>
              </div>

            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
