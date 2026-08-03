'use client';

import { motion } from 'framer-motion';
import { Target, Eye, Award, Shield, Sparkles, Users, Globe } from 'lucide-react';

export default function AboutSection() {
  const values = [
    { title: 'Honestidad', desc: 'Relaciones éticas y sinceras en cada proyecto.', icon: Shield },
    { title: 'Transparencia', desc: 'Claridad total en propuestas, costos y ejecución.', icon: Eye },
    { title: 'Calidad y Pasión', desc: 'Entusiasmo y máximo estándar técnico en el trabajo.', icon: Award },
    { title: 'Diferenciación', desc: 'Soluciones únicas adaptadas exactamente a cada cliente.', icon: Sparkles },
    { title: 'Orientación al cliente', desc: 'El beneficio y la satisfacción del cliente como centro.', icon: Users },
    { title: 'Responsabilidad social', desc: 'Compromiso firme con el entorno y la comunidad.', icon: Globe },
  ];

  return (
    <section id="nosotros" className="py-24 relative overflow-hidden bg-gray-50 dark:bg-[#081e38] transition-colors duration-400">
      <div className="glow-orb-blue bottom-0 left-1/3 opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#4295DC] bg-[#4295DC]/10 px-4 py-1.5 rounded-full border border-[#4295DC]/30">
            Sobre EMPROTEC
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0E315B] dark:text-white mt-4 mb-6 font-['Raleway']">
            Especialistas en Redes & Seguridad Informática
          </h2>
          <p className="text-[#58697d] dark:text-[#B0B1B0] text-lg font-light leading-relaxed">
            Somos una empresa de ingeniería orientada a la prestación de servicios TIC, proveemos equipamiento tecnológico, diseñamos estructuras de red, desarrollamos proyectos de seguridad llave en mano y contratos de tercerización IT.
          </p>
        </div>

        {/* Mission & Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="box-servicio-effect-card p-8 sm:p-10 flex flex-col justify-between"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#4295DC]/20 border border-[#4295DC]/40 flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-[#4295DC]" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#4295DC]">Nuestro Propósito</span>
              <h3 className="text-3xl font-extrabold text-[#0E315B] dark:text-white mt-1 mb-4 font-['Raleway']">
                Nuestra Misión
              </h3>
              <p className="text-[#58697d] dark:text-[#B0B1B0] text-base leading-relaxed font-light">
                Nuestra misión y mayor preocupación está centrada en los beneficios del cliente, nuestra pregunta interna cuando nos contactamos con un cliente es en qué se pueden beneficiar ellos con nuestra participación.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#4295DC]/20 text-xs font-semibold text-[#4295DC]">
              Compromiso real con la rentabilidad y protección de tu negocio.
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="box-servicio-effect-card p-8 sm:p-10 flex flex-col justify-between"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#4295DC]/20 border border-[#4295DC]/40 flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-[#4295DC]" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#4295DC]">Rumbo Futuro</span>
              <h3 className="text-3xl font-extrabold text-[#0E315B] dark:text-white mt-1 mb-4 font-['Raleway']">
                Nuestra Visión
              </h3>
              <p className="text-[#58697d] dark:text-[#B0B1B0] text-base leading-relaxed font-light">
                Ser pioneros en transformación digital, esto lo logramos estando atentos a todas las innovaciones tecnológicas del mercado con el fin de crear mayor competitividad y protección del negocio a nuestros clientes.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#4295DC]/20 text-xs font-semibold text-[#4295DC]">
              Líderes en adopción de tecnologías de vanguardia en Bolivia.
            </div>
          </motion.div>
        </div>

        {/* Corporate Values */}
        <div>
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0E315B] dark:text-white font-['Raleway']">
              Valores que Nos Definen
            </h3>
            <p className="text-[#58697d] dark:text-[#B0B1B0] text-sm mt-2">
              Principios fundamentales que guían cada proyecto de ingeniería y soporte en EMPROTEC
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((val, idx) => {
              const IconComp = val.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="box-servicio-effect-card p-6 flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#4295DC]/10 border border-[#4295DC]/30 flex items-center justify-center shrink-0 group-hover:border-[#4295DC] group-hover:bg-[#4295DC] transition-all duration-300">
                    <IconComp className="w-6 h-6 text-[#4295DC] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#0E315B] dark:text-white mb-1 group-hover:text-[#4295DC] transition-colors font-['Raleway']">
                      {val.title}
                    </h4>
                    <p className="text-xs text-[#58697d] dark:text-[#B0B1B0] leading-relaxed font-light">
                      {val.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
