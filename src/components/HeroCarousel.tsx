"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Shield, Network, Server, Cpu, ArrowRight, Sparkles } from "lucide-react";

export interface HeroSlide {
  id: number;
  categoryTag: string;
  title: string;
  subtitleHighlight: string;
  description: string;
  image: string;
  icon: any;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    categoryTag: "Seguridad Electrónica",
    title: "Sistemas de Videovigilancia CCTV, Control de Acceso & ",
    subtitleHighlight: "Alarmas Perimetrales",
    description: "Protección integral para tu hogar y empresa con cámaras 4K, análisis inteligente de video y sensores perimetrales contra incendios.",
    image: "/assets/cctv.jpg",
    icon: Shield,
  },
  {
    id: 2,
    categoryTag: "Redes & Conectividad",
    title: "Cableado de Fibra Óptica, Estructurado & ",
    subtitleHighlight: "Redes WiFi 6",
    description: "Conexión de alta velocidad con certificación internacional, radio enlaces punto a punto y armados de tableros de red.",
    image: "/assets/blog-data-center-guide-1.jpg",
    icon: Network,
  },
  {
    id: 3,
    categoryTag: "Servidores e Infraestructura",
    title: "Virtualización Cloud, Almacenamiento NAS/SAN & ",
    subtitleHighlight: "Respaldo UPS",
    description: "Infraestructura robusta con prevención de caídas eléctricas, servidores de alta densidad y firewalls UTM perimetrales.",
    image: "/assets/ups.jpg",
    icon: Server,
  },
  {
    id: 4,
    categoryTag: "Automatización & Domótica",
    title: "Automatización de Luces, Portones & ",
    subtitleHighlight: "Climatización de Precisión",
    description: "Smart Home y entornos corporativos automatizados con control inteligente de voz, sensores y filtrado ambiental.",
    image: "/assets/comercializacion-ventas.webp",
    icon: Cpu,
  },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  // Auto slide every 5 seconds unless paused
  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, currentSlide]);

  const slide = HERO_SLIDES[currentSlide];
  const IconComp = slide.icon;

  return (
    <section
      id="inicio"
      className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 bg-[#0E315B] text-white overflow-hidden select-none transition-colors duration-300"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Gradient Orbs */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[#4295DC]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#0E315B]/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[500px]">

          {/* Left Side: Content & Buttons */}
          <div className="lg:col-span-7 space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="space-y-5"
              >
                {/* Small Tag */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#4295DC]/20 border border-[#4295DC]/40 text-[#4295DC] text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Soluciones Tecnológicas — {slide.categoryTag}</span>
                </div>

                {/* Main Headline */}
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight font-['Raleway']">
                  Soluciones personalizadas para tu <span className="text-[#4295DC]">hogar o empresa</span>.
                </h1>

                {/* Specific Slide Subheadline */}
                <h2 className="text-lg sm:text-xl font-bold text-slate-200">
                  {slide.title}
                  <span className="text-[#4295DC] underline underline-offset-4 decoration-[#4295DC]/40">
                    {slide.subtitleHighlight}
                  </span>
                </h2>

                {/* Standard Description */}
                <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed max-w-2xl">
                  Proveemos e instalamos equipamiento de alta calidad y soluciones tecnológicas adaptadas a las necesidades de cada cliente en Santa Cruz, Bolivia.
                </p>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <Link
                    href="#productos"
                    className="px-7 py-3.5 rounded-xl text-xs font-extrabold text-white bg-[#4295DC] hover:bg-[#3480c4] shadow-lg shadow-cyan-500/25 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-2"
                  >
                    <span>Ver productos</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link
                    href="#contacto"
                    className="px-7 py-3.5 rounded-xl text-xs font-extrabold text-white bg-slate-800/80 hover:bg-slate-700 border border-slate-700 transition-all duration-300"
                  >
                    Solicitar cotización
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Side: Technological Image Visual */}
          <div className="lg:col-span-5 relative flex justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, scale: 0.92, rotate: -1 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.92, rotate: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative w-full aspect-4/3 sm:aspect-16/10 lg:aspect-4/3 rounded-3xl overflow-hidden shadow-2xl border border-[#4295DC]/40 group"
              >
                <Image
                  src={slide.image}
                  alt={slide.categoryTag}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  priority
                />

                {/* Dark Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E315B]/90 via-transparent to-transparent pointer-events-none" />

                {/* Slide Icon Pill */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-[#0E315B]/85 backdrop-blur-md border border-[#4295DC]/30 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#4295DC] flex items-center justify-center text-white font-bold">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-[#4295DC] uppercase tracking-wider block">
                        EMPROTEC Bolivia
                      </span>
                      <h3 className="text-xs font-extrabold text-white font-['Raleway']">
                        {slide.categoryTag}
                      </h3>
                    </div>
                  </div>

                  <span className="text-[11px] font-bold text-slate-300 bg-slate-800 px-2.5 py-1 rounded-md border border-slate-700">
                    {currentSlide + 1} / {HERO_SLIDES.length}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Carousel Controls & Position Indicators */}
        <div className="mt-10 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Position Dot Indicators */}
          <div className="flex items-center space-x-2">
            {HERO_SLIDES.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentSlide === idx
                    ? "w-8 bg-[#4295DC]"
                    : "w-2.5 bg-slate-700 hover:bg-slate-500"
                }`}
                aria-label={`Ir al slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Prev / Next Manual Buttons */}
          <div className="flex items-center space-x-3">
            <button
              onClick={prevSlide}
              className="p-3 rounded-xl bg-slate-800/80 text-white hover:bg-[#4295DC] border border-slate-700 transition-all duration-300"
              aria-label="Slide anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={nextSlide}
              className="p-3 rounded-xl bg-slate-800/80 text-white hover:bg-[#4295DC] border border-slate-700 transition-all duration-300"
              aria-label="Slide siguiente"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
