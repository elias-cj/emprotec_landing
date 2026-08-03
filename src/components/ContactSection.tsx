'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Servicios TIC',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
    });

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', service: 'Servicios TIC', message: '' });
    }, 4000);
  };

  return (
    <section id="contacto" className="py-24 relative overflow-hidden bg-gray-50 dark:bg-[#081e38] transition-colors duration-400">
      <div className="glow-orb-blue top-1/4 left-10 opacity-30" />
      <div className="glow-orb-navy bottom-10 right-10 opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#4295DC] bg-[#4295DC]/10 px-4 py-1.5 rounded-full border border-[#4295DC]/30">
            Contáctanos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0E315B] dark:text-white mt-4 mb-6 font-['Raleway']">
            ¿Listo para Impulsar tu Infraestructura TI?
          </h2>
          <p className="text-[#58697d] dark:text-[#B0B1B0] text-lg font-light leading-relaxed">
            Estamos listos para evaluar tus requerimientos y ofrecerte soluciones tecnológicas de alto rendimiento.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Information Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Address */}
            <div className="box-servicio-effect-card p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#4295DC]/20 border border-[#4295DC]/40 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-[#4295DC]" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#0E315B] dark:text-white font-['Raleway'] mb-1">Nuestra Ubicación</h4>
                <p className="text-sm text-[#58697d] dark:text-[#B0B1B0] font-light">Calle Barron #435, Santa Cruz, Bolivia</p>
                <span className="text-xs text-[#4295DC] mt-1 block font-medium">Atención técnica presencial y proyectos a nivel nacional</span>
              </div>
            </div>

            {/* Email */}
            <div className="box-servicio-effect-card p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#4295DC]/20 border border-[#4295DC]/40 flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6 text-[#4295DC]" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#0E315B] dark:text-white font-['Raleway'] mb-1">Correo Electrónico</h4>
                <a href="mailto:info@emprotec.com.bo" className="text-sm text-[#0E315B] dark:text-white hover:text-[#4295DC] transition-colors font-semibold">
                  info@emprotec.com.bo
                </a>
                <span className="text-xs text-[#58697d] dark:text-[#B0B1B0] mt-1 block">Respuesta rápida a requerimientos corporativos</span>
              </div>
            </div>

            {/* Phone & WhatsApp */}
            <div className="box-servicio-effect-card p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#4295DC]/20 border border-[#4295DC]/40 flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-[#4295DC]" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#0E315B] dark:text-white font-['Raleway'] mb-1">Teléfono & WhatsApp</h4>
                <a href="https://wa.me/59171322727" target="_blank" rel="noopener noreferrer" className="text-base font-extrabold text-[#4295DC] hover:underline">
                  +(591) 71322727
                </a>
                <span className="text-xs text-[#58697d] dark:text-[#B0B1B0] mt-1 block">Lunes a Viernes: 08:30 - 18:30 | Emergencias 24/7</span>
              </div>
            </div>

            {/* Direct WhatsApp Widget Card */}
            <div className="box-servicio-effect-card p-6 bg-[#4295DC]/10 border-[#4295DC]/40">
              <div className="flex items-center gap-3 mb-3">
                <MessageSquare className="w-6 h-6 text-[#4295DC]" />
                <h4 className="text-lg font-bold text-[#0E315B] dark:text-white font-['Raleway']">Asesoría Inmediata por WhatsApp</h4>
              </div>
              <p className="text-xs text-[#58697d] dark:text-[#B0B1B0] leading-relaxed mb-4 font-light">
                Habla directamente con nuestros ingenieros especializados para resolver dudas o solicitar un levantamiento de requerimientos en tu empresa.
              </p>
              <a
                href="https://wa.me/59171322727?text=Hola%20EMPROTEC,%20requiero%20asesor%C3%ADa%20para%20un%20proyecto"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-[#4295DC] hover:bg-[#3482ca] text-white font-bold text-center text-xs flex items-center justify-center gap-2 shadow-lg transition-all"
              >
                <span>Iniciar Chat por WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="box-servicio-effect-card p-8 sm:p-10">
              <h3 className="text-2xl font-bold text-[#0E315B] dark:text-white mb-2 font-['Raleway']">
                Envíanos un Mensaje
              </h3>
              <p className="text-xs text-[#58697d] dark:text-[#B0B1B0] mb-8 font-light">
                Completa el formulario y un especialista de EMPROTEC se pondrá en contacto contigo en menos de 24 horas.
              </p>

              {submitted ? (
                <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center text-emerald-500">
                    <CheckCircle2 className="w-10 h-10 animate-bounce" />
                  </div>
                  <h4 className="text-2xl font-bold text-[#0E315B] dark:text-white font-['Raleway']">¡Mensaje Enviado con Éxito!</h4>
                  <p className="text-sm text-[#58697d] dark:text-[#B0B1B0] max-w-sm font-light">
                    Gracias por comunicarte con EMPROTEC. Nuestro equipo revisará tus requerimientos y te responderá a la brevedad.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-[#0E315B] dark:text-[#B0B1B0] uppercase tracking-wider mb-2">
                        Nombre Completo *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ej. Carlos Mendoza"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-[#0E315B]/60 border border-[#4295DC]/30 text-[#0E315B] dark:text-white placeholder-gray-400 text-sm focus:outline-none focus:border-[#4295DC] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#0E315B] dark:text-[#B0B1B0] uppercase tracking-wider mb-2">
                        Correo Electrónico *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="carlos@empresa.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-[#0E315B]/60 border border-[#4295DC]/30 text-[#0E315B] dark:text-white placeholder-gray-400 text-sm focus:outline-none focus:border-[#4295DC] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-[#0E315B] dark:text-[#B0B1B0] uppercase tracking-wider mb-2">
                        Teléfono / Celular
                      </label>
                      <input
                        type="tel"
                        placeholder="+591 70000000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-[#0E315B]/60 border border-[#4295DC]/30 text-[#0E315B] dark:text-white placeholder-gray-400 text-sm focus:outline-none focus:border-[#4295DC] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#0E315B] dark:text-[#B0B1B0] uppercase tracking-wider mb-2">
                        Servicio de Interés
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-[#0E315B] border border-[#4295DC]/30 text-[#0E315B] dark:text-white text-sm focus:outline-none focus:border-[#4295DC] transition-colors"
                      >
                        <option value="Servicios TIC">Servicios TIC</option>
                        <option value="Equipamiento Tecnológico">Equipamiento Tecnológico</option>
                        <option value="Diseño de Redes">Diseño de Redes</option>
                        <option value="Proyectos de Seguridad TIC">Proyectos de Seguridad TIC</option>
                        <option value="Contratos de Tercerización IT">Contratos de Tercerización IT</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0E315B] dark:text-[#B0B1B0] uppercase tracking-wider mb-2">
                      Detalle del Requerimiento / Proyecto
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Describe brevemente tus necesidades tecnológicas o de seguridad..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-[#0E315B]/60 border border-[#4295DC]/30 text-[#0E315B] dark:text-white placeholder-gray-400 text-sm focus:outline-none focus:border-[#4295DC] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-[#4295DC] hover:bg-[#3482ca] text-white font-extrabold text-base shadow-xl shadow-[#4295DC]/30 hover:scale-[1.01] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>Enviar Formulario de Consulta</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
