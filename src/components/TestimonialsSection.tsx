'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote, Building2 } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        'EMPROTEC nos proporcionó soluciones avanzadas que optimizaron nuestra infraestructura. Su equipo técnico es competente y altamente comprometido.',
      author: 'Gerente de Tecnología',
      company: 'Sector Financiero & Bancario',
      rating: 5,
    },
    {
      quote:
        'EMPROTEC implementó nuestra seguridad informática con soluciones proactivas e innovadoras. Son el socio confiable para nuestros proyectos tecnológicos.',
      author: 'Director de Operaciones',
      company: 'Empresa de Logística & Transporte',
      rating: 5,
    },
    {
      quote:
        'Gracias a EMPROTEC, nuestra empresa ha mejorado en eficiencia y seguridad. Su soporte técnico continuo ha sido invaluable. ¡Excelente servicio y resultados!',
      author: 'Jefe de Infraestructura TI',
      company: 'Corporación Comercial',
      rating: 5,
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-24 relative overflow-hidden bg-white dark:bg-[#0F172A] tech-grid-bg transition-colors duration-400">
      <div className="glow-orb-blue top-1/2 right-1/4 opacity-30" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#4295DC] bg-[#4295DC]/10 px-4 py-1.5 rounded-full border border-[#4295DC]/30">
            Comentario de Clientes
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0E315B] dark:text-white mt-4 mb-4 font-['Raleway']">
            La Confianza de Nuestros Clientes
          </h2>
          <p className="text-[#58697d] dark:text-slate-300 text-sm font-light">
            Explora la retroalimentación de las organizaciones que impulsan su continuidad operativa con EMPROTEC.
          </p>
        </div>

        {/* Carousel Card Container */}
        <div className="relative box-servicio-effect-card p-8 sm:p-12 min-h-[320px] flex flex-col justify-between">
          <Quote className="w-16 h-16 text-[#4295DC]/20 absolute top-6 right-6 pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-1">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#4295DC] text-[#4295DC]" />
                ))}
              </div>

              <blockquote className="text-xl sm:text-2xl text-[#0E315B] dark:text-white font-light italic leading-relaxed">
                "{testimonials[current].quote}"
              </blockquote>

              <div className="flex items-center gap-4 pt-4 border-t border-[#4295DC]/20">
                <div className="w-12 h-12 rounded-full bg-[#4295DC]/20 border border-[#4295DC]/40 flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-[#4295DC]" />
                </div>
                <div>
                  <div className="text-base font-bold text-[#0E315B] dark:text-white font-['Raleway']">
                    {testimonials[current].author}
                  </div>
                  <div className="text-xs text-[#4295DC]">
                    {testimonials[current].company}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8 pt-4 border-t border-[#4295DC]/10">
            {/* Pagination dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    current === idx ? 'w-8 bg-[#4295DC]' : 'w-2.5 bg-[#4295DC]/40 hover:bg-[#4295DC]'
                  }`}
                />
              ))}
            </div>

            {/* Navigation buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                className="p-2.5 rounded-full bg-gray-100 dark:bg-[#0E315B]/60 border border-[#4295DC]/30 text-[#0E315B] dark:text-white hover:border-[#4295DC] transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="p-2.5 rounded-full bg-gray-100 dark:bg-[#0E315B]/60 border border-[#4295DC]/30 text-[#0E315B] dark:text-white hover:border-[#4295DC] transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
