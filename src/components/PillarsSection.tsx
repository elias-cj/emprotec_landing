'use client';

import { motion } from 'framer-motion';
import { Cpu, ShieldAlert, Rocket, CheckCircle } from 'lucide-react';

export default function PillarsSection() {
  const pillars = [
    {
      icon: Cpu,
      title: 'Experticia en Soluciones TIC',
      description:
        'Vasta experiencia en soluciones TIC personalizadas que optimizan la eficiencia y la seguridad de los procesos críticos de tu empresa.',
      badge: 'Soluciones TI',
    },
    {
      icon: ShieldAlert,
      title: 'Enfoque en Seguridad & Protección',
      description:
        'Implementamos proyectos robustos para resguardar tus activos informáticos y prevenir cualquier tipo de amenaza cibernética o fallo operacional.',
      badge: 'Ciberseguridad',
    },
    {
      icon: Rocket,
      title: 'Innovación Continua',
      description:
        'Mantenemos tu negocio constantemente actualizado con las tecnologías emergentes, equipos de última generación y mejores prácticas del mercado.',
      badge: 'Transformación',
    },
  ];

  return (
    <section id="pilares" className="py-24 relative overflow-hidden bg-gray-50 dark:bg-[#081e38] transition-colors duration-400">
      <div className="glow-orb-blue top-1/2 left-0 -translate-y-1/2 opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#4295DC] bg-[#4295DC]/10 px-4 py-1.5 rounded-full border border-[#4295DC]/30">
            Diferenciación & Valor
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0E315B] dark:text-white mt-4 mb-6 font-['Raleway']">
            Fortalece Tu Infraestructura Tecnológica
          </h2>
          <p className="text-[#58697d] dark:text-[#B0B1B0] text-lg font-light leading-relaxed">
            En EMPROTEC nos destacamos por nuestra dedicación constante en brindar servicios integrales de ingeniería TIC con atención meticulosa a cada detalle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => {
            const IconComp = pillar.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="box-servicio-effect-card p-8 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#4295DC]/10 border border-[#4295DC]/30 flex items-center justify-center group-hover:border-[#4295DC] group-hover:bg-[#4295DC] transition-all duration-300">
                      <IconComp className="w-7 h-7 text-[#4295DC] group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-xs font-bold text-[#4295DC] bg-[#4295DC]/10 px-3 py-1 rounded-full border border-[#4295DC]/20">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-[#0E315B] dark:text-white mb-4 group-hover:text-[#4295DC] transition-colors font-['Raleway']">
                    {pillar.title}
                  </h3>

                  <p className="text-[#58697d] dark:text-[#B0B1B0] text-sm leading-relaxed font-light mb-6">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#4295DC]/20 flex items-center gap-2 text-xs font-semibold text-[#4295DC]">
                  <CheckCircle className="w-4 h-4 text-[#4295DC]" />
                  <span>Garantía de Continuidad Operativa</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
