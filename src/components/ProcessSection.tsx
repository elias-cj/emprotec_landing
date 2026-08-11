'use client';

import { motion } from 'framer-motion';
import { SearchCheck, SlidersHorizontal, Headphones, ArrowRight } from 'lucide-react';

export default function ProcessSection() {
  const steps = [
    {
      number: '01',
      title: 'Evaluación & Análisis',
      description: 'Evaluamos minuciosamente tus necesidades tecnológicas y diseñamos soluciones específicas alineadas con tus objetivos estratégicos de negocio.',
      icon: SearchCheck,
    },
    {
      number: '02',
      title: 'Implementación Personalizada',
      description: 'Desplegamos el proyecto según tus requerimientos exactos, integrando equipamiento de alta fidelidad, seguridad de red y configuración precisa.',
      icon: SlidersHorizontal,
    },
    {
      number: '03',
      title: 'Soporte Continuo & Mantenimiento',
      description: 'Brindamos monitoreo constante, mesa de ayuda experta y mantenimiento preventivo para garantizar la operación continua sin interrupciones.',
      icon: Headphones,
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-white dark:bg-[#0F172A] tech-grid-bg transition-colors duration-400">
      <div className="glow-orb-blue bottom-10 left-10 opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#4295DC] bg-[#4295DC]/10 px-4 py-1.5 rounded-full border border-[#4295DC]/30">
            Metodología de Trabajo
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0E315B] dark:text-white mt-4 mb-6 font-['Raleway']">
            Cómo Transformamos Tu Empresa
          </h2>
          <p className="text-[#58697d] dark:text-slate-300 text-lg font-light leading-relaxed">
            Un proceso claro, estructurado y transparente para garantizar resultados óptimos desde el diagnóstico inicial hasta el soporte a largo plazo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => {
            const IconComp = step.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="box-servicio-effect-card p-8 flex flex-col justify-between relative group"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-4xl font-black text-[#4295DC] font-['Raleway']">
                      {step.number}
                    </span>
                    <div className="w-14 h-14 rounded-2xl bg-[#4295DC]/10 border border-[#4295DC]/30 flex items-center justify-center group-hover:border-[#4295DC] group-hover:bg-[#4295DC] transition-all duration-300">
                      <IconComp className="w-7 h-7 text-[#4295DC] group-hover:text-white transition-colors" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-[#0E315B] dark:text-white mb-4 font-['Raleway'] group-hover:text-[#4295DC] transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-[#58697d] dark:text-[#B0B1B0] text-sm leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#4295DC]/20 flex items-center gap-2 text-xs font-semibold text-[#4295DC]">
                  <span>Fase {idx + 1} de Ejecución</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
