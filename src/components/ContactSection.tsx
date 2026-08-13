'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Send, CheckCircle2, Sparkles, Clock, ShieldCheck, ArrowUpRight, Copy, Check } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 },
    });

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', company: '', phone: '', email: '', message: '' });
    }, 5000);
  };

  const copyToClipboard = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section id="contacto" className="py-10 bg-slate-100/80 dark:from-[#0F172A] dark:via-[#162238] dark:to-[#0F172A] text-slate-900 dark:text-white relative overflow-hidden transition-colors duration-300">
      
      {/* Background Glow Orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#4295DC]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-slate-200/60 dark:bg-neutral-900/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-[#4295DC] bg-white dark:bg-slate-800 px-4 py-1.5 rounded-full border border-slate-200 dark:border-slate-700/60 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" /> CANALES DIRECTOS DE ATENCIÓN
          </span>

          <h2 className="text-4xl sm:text-6xl font-black text-[#0E315B] dark:text-white mt-4 mb-4 font-['Raleway'] tracking-tight">
            Hablemos sobre tu <span className="text-[#4295DC]">próximo proyecto.</span>
          </h2>

          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            Ingenieros especialistas listos para evaluar tus requerimientos y diseñar soluciones a medida en Santa Cruz y toda Bolivia.
          </p>
        </div>

        {/* Master Layout: Left Contact Cards + Map | Right Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            
            {/* Phone & WhatsApp Card */}
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-white dark:bg-[#1E293B] p-7 rounded-[28px] shadow-xl border border-slate-200/80 dark:border-slate-700/60 space-y-4 relative overflow-hidden group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#4295DC]/10 border border-[#4295DC]/30 flex items-center justify-center text-[#4295DC]">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-base font-extrabold text-[#0E315B] dark:text-white font-['Raleway']">Líneas Directas</h4>
                    <span className="text-[11px] font-bold text-emerald-600 flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" /> Respuesta Inmediata
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard('713-22727', 'phone')}
                  className="p-2 rounded-xl bg-slate-100 dark:bg-slate-700/60 text-slate-500 dark:text-slate-300 hover:text-[#4295DC] transition-colors"
                  title="Copiar teléfono"
                >
                  {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href="https://wa.me/59171322727"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl bg-slate-50 dark:bg-[#162238] hover:bg-[#4295DC] hover:text-white text-[#0E315B] dark:text-slate-200 border border-slate-200 dark:border-slate-700/60 transition-all font-extrabold text-xs flex items-center justify-between group/link"
                >
                  <span>📱 713-22727</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5" />
                </a>

                <a
                  href="https://wa.me/59177006615"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl bg-slate-50 dark:bg-[#162238] hover:bg-[#4295DC] hover:text-white text-[#0E315B] dark:text-slate-200 border border-slate-200 dark:border-slate-700/60 transition-all font-extrabold text-xs flex items-center justify-between group/link"
                >
                  <span>📱 77006615</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5" />
                </a>
              </div>
            </motion.div>

            {/* Email & Location Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Location Card */}
              <motion.div
                whileHover={{ y: -4 }}
                className="bg-white dark:bg-[#1E293B] p-6 rounded-[28px] shadow-xl border border-slate-200/80 dark:border-slate-700/60 space-y-2"
              >
                <div className="w-10 h-10 rounded-xl bg-[#4295DC]/10 border border-[#4295DC]/30 flex items-center justify-center text-[#4295DC]">
                  <MapPin className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-extrabold text-[#0E315B] dark:text-white font-['Raleway']">Ubicación Sede</h4>
                <p className="text-xs text-slate-500 dark:text-slate-300 font-light">Calle Barron #435, Santa Cruz — Bolivia</p>
              </motion.div>

              {/* Email Card */}
              <motion.div
                whileHover={{ y: -4 }}
                className="bg-white dark:bg-[#1E293B] p-6 rounded-[28px] shadow-xl border border-slate-200/80 dark:border-slate-700/60 space-y-2"
              >
                <div className="w-10 h-10 rounded-xl bg-[#4295DC]/10 border border-[#4295DC]/30 flex items-center justify-center text-[#4295DC]">
                  <Mail className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-extrabold text-[#0E315B] dark:text-white font-['Raleway']">Correo Oficial</h4>
                <a
                  href="mailto:info@emprotec.com.bo"
                  className="text-xs text-[#4295DC] font-extrabold hover:underline block truncate"
                >
                  info@emprotec.com.bo
                </a>
              </motion.div>

            </div>

            {/* Styled Map Container */}
            <div className="relative rounded-[28px] overflow-hidden shadow-2xl border border-slate-200/80 dark:border-slate-700/60 h-56 group">
              <iframe
                title="Mapa Ubicación EMPROTEC Santa Cruz"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57008.2046460395!2d-63.208479!3d-17.783324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93f1e81308d249f7%3A0xb35a09c25381f9b3!2sSanta%20Cruz%20de%20la%20Sierra%2C%20Bolivia!5e0!3m2!1ses!2sbo!4v1700000000000!5m2!1ses!2sbo"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full transition-all duration-300 group-hover:scale-105"
              />

              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-white/90 dark:bg-[#1E293B]/90 backdrop-blur-md border border-slate-200 dark:border-slate-700/60 flex items-center justify-between text-xs font-bold text-[#0E315B] dark:text-white">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#4295DC]" /> Santa Cruz, Bolivia
                </span>
                <span className="text-[10px] text-[#4295DC] bg-[#4295DC]/10 px-2 py-0.5 rounded border border-[#4295DC]/30">
                  Sede Central
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: High Impact Interactive Form */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-[#1E293B] rounded-[32px] p-8 sm:p-12 shadow-xl border border-slate-200/90 dark:border-slate-700/60 space-y-6">
              
              <div className="flex items-center justify-between border-b border-slate-200/50 dark:border-slate-700/60 pb-5">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-[#0E315B] dark:text-white font-['Raleway']">
                    Solicitud de Ingeniería
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-300 font-light mt-1">
                    Completa el formulario y te enviaremos una propuesta formal en menos de 24 horas.
                  </p>
                </div>

                <div className="hidden sm:flex items-center gap-1 text-[11px] font-bold text-slate-500 dark:text-slate-300 bg-white/85 dark:bg-[#162238] px-3 py-1.5 rounded-full border border-slate-200/80 dark:border-slate-700/60">
                  <Clock className="w-3.5 h-3.5 text-[#4295DC]" />
                  <span>Respuesta en &lt; 24h</span>
                </div>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-16 flex flex-col items-center justify-center text-center space-y-4"
                >
                  <div className="w-20 h-20 rounded-full bg-emerald-500/10 border-2 border-emerald-500 flex items-center justify-center text-emerald-500">
                    <CheckCircle2 className="w-10 h-10 animate-bounce" />
                  </div>
                  <h4 className="text-2xl font-black text-[#0E315B] dark:text-white font-['Raleway']">
                    ¡Solicitud Recibida!
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300 max-w-sm font-light leading-relaxed">
                    Gracias por comunicarte con EMPROTEC. Un ingeniero revisará tu requerimiento y te contactará a la brevedad.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">

                  {/* Name & Company Inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-black uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                        Nombre Completo *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ej. Ing. Carlos Mendoza"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-2xl bg-white dark:bg-[#162238] border border-slate-200 dark:border-slate-700/60 text-[#0E315B] dark:text-white placeholder-gray-400 dark:placeholder-slate-400 text-sm focus:outline-none focus:border-[#4295DC] focus:ring-2 focus:ring-[#4295DC]/25 transition-all shadow-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-black uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                        Empresa / Institución
                      </label>
                      <input
                        type="text"
                        placeholder="Ej. Grupo Logístico SRL"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-2xl bg-white dark:bg-[#162238] border border-slate-200 dark:border-slate-700/60 text-[#0E315B] dark:text-white placeholder-gray-400 dark:placeholder-slate-400 text-sm focus:outline-none focus:border-[#4295DC] focus:ring-2 focus:ring-[#4295DC]/25 transition-all shadow-sm"
                      />
                    </div>
                  </div>

                  {/* Phone & Email Inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-black uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                        Teléfono / Celular
                      </label>
                      <input
                        type="tel"
                        placeholder="+591 70000000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-2xl bg-white dark:bg-[#162238] border border-slate-200 dark:border-slate-700/60 text-[#0E315B] dark:text-white placeholder-gray-400 dark:placeholder-slate-400 text-sm focus:outline-none focus:border-[#4295DC] focus:ring-2 focus:ring-[#4295DC]/25 transition-all shadow-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-black uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                        Correo Electrónico *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="carlos@empresa.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-2xl bg-white dark:bg-[#162238] border border-slate-200 dark:border-slate-700/60 text-[#0E315B] dark:text-white placeholder-gray-400 dark:placeholder-slate-400 text-sm focus:outline-none focus:border-[#4295DC] focus:ring-2 focus:ring-[#4295DC]/25 transition-all shadow-sm"
                      />
                    </div>
                  </div>

                  {/* Message Textarea */}
                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                      Detalle del Proyecto / Requerimiento
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Describe brevemente la cantidad de cámaras, puntos de red, servidores o equipos requeridos..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-2xl bg-white dark:bg-[#162238] border border-slate-200 dark:border-slate-700/60 text-[#0E315B] dark:text-white placeholder-gray-400 dark:placeholder-slate-400 text-sm focus:outline-none focus:border-[#4295DC] focus:ring-2 focus:ring-[#4295DC]/25 transition-all shadow-sm resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 rounded-2xl bg-[#0E315B] hover:bg-[#4295DC] dark:bg-[#4295DC] dark:hover:bg-[#3480c4] text-white font-extrabold text-sm shadow-xl shadow-slate-900/10 transition-all duration-300 flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
                  >
                    <Send className="w-4 h-4" />
                    <span>Enviar Solicitud de Cotización</span>
                  </button>

                  <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 dark:text-slate-400 text-center font-medium">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#4295DC]" />
                    <span>Tus datos se manejan con estricta confidencialidad corporativa.</span>
                  </div>

                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
