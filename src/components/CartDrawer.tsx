'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, ShoppingCart, Send, Plus, Minus, ShieldCheck } from 'lucide-react';
import { Product } from './ProductsSection';

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}: CartDrawerProps) {
  const totalUsd = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const totalBob = totalUsd * 6.96;

  const handleSendWhatsAppQuote = () => {
    if (items.length === 0) return;
    let message = 'Hola EMPROTEC! Quisiera solicitar una cotización formal para el siguiente equipamiento:\n\n';
    items.forEach((item, idx) => {
      message += `${idx + 1}. *${item.product.name}* x${item.quantity} - $${(item.product.price * item.quantity).toFixed(2)} USD\n`;
    });
    message += `\n*Monto Total Estimado:* $${totalUsd.toFixed(2)} USD (~ Bs. ${totalBob.toFixed(2)})\n`;
    message += '\nPor favor contactarme para enviar la propuesta en PDF o coordinar una visita técnica.';

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/59171322727?text=${encoded}`, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          />

          {/* Drawer Container */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 z-50 h-full w-full max-w-md bg-white dark:bg-[#1E293B] border-l border-[#4295DC]/30 shadow-2xl flex flex-col justify-between"
          >
            {/* Header */}
            <div className="p-6 border-b border-[#4295DC]/20 flex items-center justify-between bg-gray-50 dark:bg-[#162238]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#4295DC]/20 border border-[#4295DC]/40 flex items-center justify-center">
                  <ShoppingCart className="w-5 h-5 text-[#4295DC]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0E315B] dark:text-white font-['Raleway']">Tu Cotización / Carrito</h3>
                  <span className="text-xs text-[#58697d] dark:text-slate-300">{items.length} productos seleccionados</span>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-lg bg-gray-200 dark:bg-[#0E315B]/60 text-gray-500 dark:text-gray-300 hover:text-[#4295DC] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center text-gray-400 py-12">
                  <ShoppingCart className="w-16 h-16 text-[#4295DC]/40 mb-4 animate-bounce" />
                  <p className="text-lg font-bold text-[#0E315B] dark:text-white mb-1 font-['Raleway']">Tu carrito está vacío</p>
                  <p className="text-xs text-[#58697d] dark:text-slate-300 max-w-xs">
                    Explora nuestra tienda e incluye equipamiento informático o servicios para generar tu cotización instantánea.
                  </p>
                </div>
              ) : (
                items.map((item) => (
                  <div
                    key={item.product.id}
                    className="box-servicio-effect-card p-4 flex items-center justify-between gap-4"
                  >
                    <div className="flex-1">
                      <h4 className="text-sm font-bold text-[#0E315B] dark:text-white font-['Raleway'] line-clamp-1">
                        {item.product.name}
                      </h4>
                      <div className="text-xs text-[#4295DC] font-semibold mt-1">
                        ${(item.product.price * item.quantity).toFixed(2)} USD
                      </div>
                      <div className="text-[10px] text-gray-400">
                        ${item.product.price} c/u
                      </div>
                    </div>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-2 bg-gray-100 dark:bg-[#0E315B]/60 p-1.5 rounded-lg border border-[#4295DC]/30">
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, -1)}
                        className="p-1 rounded text-[#0E315B] dark:text-white hover:bg-gray-200 dark:hover:bg-[#0E315B]"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="text-xs font-bold text-[#0E315B] dark:text-white px-1">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, 1)}
                        className="p-1 rounded text-[#0E315B] dark:text-white hover:bg-gray-200 dark:hover:bg-[#0E315B]"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <button
                      onClick={() => onRemoveItem(item.product.id)}
                      className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                      title="Eliminar producto"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Footer Summary & WhatsApp CTA */}
            {items.length > 0 && (
              <div className="p-6 border-t border-[#4295DC]/20 bg-gray-50 dark:bg-[#162238] space-y-4">
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-sm text-[#58697d] dark:text-slate-300">
                    <span>Subtotal Estimado:</span>
                    <span className="font-semibold text-[#0E315B] dark:text-white">${totalUsd.toFixed(2)} USD</span>
                  </div>
                  <div className="flex items-center justify-between text-lg font-extrabold text-[#0E315B] dark:text-white">
                    <span>Total Estimado:</span>
                    <span className="text-[#4295DC] font-['Raleway']">${totalUsd.toFixed(2)} USD</span>
                  </div>
                  <div className="text-right text-xs text-gray-400">
                    (~ Bs. {totalBob.toLocaleString('es-BO', { maximumFractionDigits: 2 })})
                  </div>
                </div>

                <div className="flex items-center gap-2 text-[11px] text-[#4295DC] bg-[#4295DC]/10 p-2.5 rounded-lg border border-[#4295DC]/30">
                  <ShieldCheck className="w-4 h-4 text-[#4295DC] shrink-0" />
                  <span>Cotización directa sin compromiso con el equipo de ingeniería de EMPROTEC.</span>
                </div>

                <button
                  onClick={handleSendWhatsAppQuote}
                  className="w-full py-4 rounded-xl bg-[#4295DC] hover:bg-[#3482ca] text-white font-extrabold text-sm shadow-xl shadow-[#4295DC]/30 hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar Cotización por WhatsApp</span>
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
