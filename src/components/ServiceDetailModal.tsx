'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, MessageSquare, ShieldCheck } from 'lucide-react';

export interface ServiceDetailItem {
  title: string;
  category: string;
  description: string;
  features: string[];
  tags: string[];
  icon?: any;
  whatsappMessage?: string;
}

interface ServiceDetailModalProps {
  service: ServiceDetailItem | null;
  onClose: () => void;
}

export default function ServiceDetailModal({ service, onClose }: ServiceDetailModalProps) {
  if (!service) return null;

  const waLink = `https://wa.me/59171322727?text=${encodeURIComponent(
    service.whatsappMessage || `Hola EMPROTEC, me interesa solicitar cotización e información de: ${service.title}`
  )}`;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-lg bg-white dark:bg-[#1E293B] rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#4295DC]/30 text-[#0E315B] dark:text-white"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Category Tag */}
          <span className="inline-block text-[11px] font-extrabold uppercase tracking-wider text-[#4295DC] bg-[#4295DC]/10 px-3 py-1 rounded-full border border-[#4295DC]/30 mb-3">
            {service.category}
          </span>

          {/* Title */}
          <h3 className="text-2xl font-extrabold mb-3 font-['Raleway'] leading-tight">
            {service.title}
          </h3>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {service.tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-[11px] font-semibold bg-slate-100 dark:bg-slate-800 text-[#0E315B] dark:text-slate-200 px-2.5 py-0.5 rounded-md border border-slate-200 dark:border-slate-700"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Description */}
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-light leading-relaxed mb-6">
            {service.description}
          </p>

          {/* Highlights */}
          <div className="space-y-2.5 mb-8 bg-slate-50 dark:bg-[#162238] p-4 rounded-2xl border border-slate-200/60 dark:border-slate-700/60">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#4295DC] flex items-center gap-1.5 mb-3">
              <ShieldCheck className="w-4 h-4" /> Ventajas & Especificaciones Técnicas
            </h4>
            {service.features.map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-200">
                <Check className="w-4 h-4 text-[#4295DC] shrink-0 mt-0.5" />
                <span>{feat}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 rounded-xl bg-[#4295DC] hover:bg-[#3480c4] text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 transition-all duration-300 transform hover:-translate-y-0.5 font-sans"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Cotizar este servicio por WhatsApp &gt;</span>
          </a>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
