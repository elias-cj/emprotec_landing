"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Phone, Sun, Moon } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Soluciones", href: "#soluciones" },
    { name: "Productos", href: "#servicios-y-productos" },
    { name: "Nosotros", href: "#nosotros" },
    { name: "Proyectos", href: "#proyectos" },
    { name: "Clientes", href: "#empresas-clientes" },
    { name: "Contacto", href: "#contacto" },
    { name: "Partners", href: "#partners" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/90 dark:bg-[#0F172A]/95 backdrop-blur-md py-3 border-b border-slate-200/80 dark:border-slate-700/60 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center space-x-2 group">
          <Image
            src="/assets/logo/logo_emprotec.png"
            alt="EMPROTEC Logo"
            width={280}
            height={90}
            className="h-14 sm:h-16 md:h-18 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            priority
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-slate-800 dark:text-slate-200 hover:text-[#4295DC] dark:hover:text-[#4295DC] text-xs font-bold uppercase tracking-wider transition-colors relative group py-1"
            >
              <span>{link.name}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#4295DC] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* CTA & Theme Controls */}
        <div className="hidden md:flex items-center space-x-4">
          
          {/* Theme Switcher Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-amber-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            title={theme === "dark" ? "Cambiar a Modo Claro" : "Cambiar a Modo Oscuro"}
            aria-label="Cambiar tema de color"
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4 text-slate-700" />}
          </button>

          <a
            href="tel:71322727"
            className="flex items-center gap-1.5 text-xs font-extrabold text-slate-700 dark:text-slate-200 hover:text-[#4295DC] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#4295DC]" />
            <span>713-22727</span>
          </a>

          <Link
            href="#contacto"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-extrabold text-white bg-[#0E315B] hover:bg-[#4295DC] dark:bg-[#4295DC] dark:hover:bg-[#327bc2] shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <span>Hablar con nosotros</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center space-x-2">
          {/* Mobile Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-amber-400 focus:outline-none"
            aria-label="Cambiar tema de color"
          >
            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5 text-slate-700" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-900 dark:text-white focus:outline-none"
            aria-label="Abrir menú de navegación"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#4295DC]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Fullscreen Animated Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 top-[60px] bg-white dark:bg-[#0F172A] z-40 px-6 py-10 flex flex-col justify-between border-t border-slate-200 dark:border-slate-700/60 overflow-y-auto"
          >
            <div className="space-y-6">
              <span className="text-[11px] font-black uppercase tracking-widest text-[#4295DC] block">
                Navegación EMPROTEC
              </span>
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.08 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-2xl font-black text-slate-900 dark:text-white hover:text-[#4295DC] font-['Raleway'] tracking-tight block"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>

            <div className="space-y-4 pt-6 border-t border-slate-100 dark:border-neutral-800">
              <a
                href="tel:71322727"
                className="flex items-center gap-2 text-sm font-extrabold text-slate-800 dark:text-slate-200"
              >
                <Phone className="w-4 h-4 text-[#4295DC]" />
                <span>713-22727 / 77006615</span>
              </a>

              <Link
                href="#contacto"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3.5 rounded-2xl bg-[#0E315B] dark:bg-[#4295DC] text-white font-extrabold text-xs text-center block shadow-lg"
              >
                Solicitar Cotización
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
