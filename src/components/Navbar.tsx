"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Phone, Sun, Moon } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { name: "Servicios", href: "#soluciones" },
    { name: "Por qué nosotros", href: "#por-que-nosotros" },
    { name: "Catálogo", href: "#clientes" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-[#191715]/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800/80 py-3.5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Logo Branding */}
        <Link href="/" className="flex items-center space-x-2 group">
          <Image
            src="/assets/logo/logo_emprotec.png"
            alt="EMPROTEC Logo"
            width={200}
            height={60}
            className="h-10 sm:h-11 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Links & Controls */}
        <div className="hidden md:flex items-center space-x-7">
          <a href="tel:71322727" className="flex items-center text-[#4295DC] text-xs font-bold space-x-1.5 hover:text-[#0E315B] dark:hover:text-white transition-colors">
            <Phone className="w-3.5 h-3.5" />
            <span>713-22727 / 77006615</span>
          </a>

          <nav className="flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[#0E315B] dark:text-slate-200 hover:text-[#4295DC] dark:hover:text-[#4295DC] text-sm font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Theme Switcher Button (Dark / Light) */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-slate-100 dark:bg-slate-800/80 text-[#4295DC] hover:text-[#0E315B] dark:hover:text-white transition-all border border-slate-300 dark:border-slate-700/60 shadow-sm"
            aria-label="Alternar Modo Claro / Oscuro"
            title="Alternar Modo Claro / Oscuro"
          >
            {theme === "dark" ? <Sun className="w-4 h-4 text-[#4295DC]" /> : <Moon className="w-4 h-4 text-[#0E315B]" />}
          </button>

          <Link
            href="#contacto"
            className="inline-block px-5 py-2 rounded-md text-xs font-bold text-white bg-[#4295DC] hover:bg-[#3480c4] transition-colors shadow-md shadow-cyan-500/20"
          >
            Conversemos &gt;
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <div className="md:hidden flex items-center space-x-3">
          <button
            onClick={toggleTheme}
            className="p-1.5 rounded-full text-[#4295DC]"
            aria-label="Alternar Modo Claro / Oscuro"
          >
            {theme === "dark" ? <Sun className="w-5 h-5 text-[#4295DC]" /> : <Moon className="w-5 h-5 text-[#0E315B]" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#0E315B] dark:text-slate-200"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-[#191715] border-b border-slate-200 dark:border-slate-800 px-6 pt-4 pb-6 space-y-4">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#0E315B] dark:text-slate-200 hover:text-[#4295DC] dark:hover:text-[#4295DC] text-base font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <a href="tel:71322727" className="text-[#4295DC] font-bold text-sm pt-2">
              📞 713-22727 / 77006615
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
