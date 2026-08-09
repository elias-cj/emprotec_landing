"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Phone, Sun, Moon, ShoppingCart, Search, MessageSquare } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

interface NavbarProps {
  cartCount?: number;
  onOpenCart?: () => void;
  onOpenSearch?: () => void;
}

export default function Navbar({ cartCount = 0, onOpenCart, onOpenSearch }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Productos", href: "#productos" },
    { name: "Servicios", href: "#servicios" },
    { name: "Nosotros", href: "#nosotros" },
    { name: "Proyectos", href: "#proyectos" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-[#0E315B]/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 py-3.5 transition-colors duration-300 shadow-sm">
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
        <div className="hidden lg:flex items-center space-x-6">
          <nav className="flex items-center space-x-5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[#0E315B] dark:text-slate-200 hover:text-[#4295DC] dark:hover:text-[#4295DC] text-sm font-semibold transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="h-5 w-px bg-slate-300 dark:bg-slate-700" />

          {/* Contact phone shortcut */}
          <a
            href="tel:71322727"
            className="flex items-center text-[#4295DC] text-xs font-bold space-x-1.5 hover:text-[#0E315B] dark:hover:text-white transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>713-22727</span>
          </a>

          {/* Search Button */}
          {onOpenSearch && (
            <button
              onClick={onOpenSearch}
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-[#4295DC] hover:text-[#0E315B] dark:hover:text-white border border-slate-200 dark:border-slate-700 transition-all shadow-sm"
              aria-label="Buscar productos y servicios"
              title="Buscar productos y servicios"
            >
              <Search className="w-4 h-4" />
            </button>
          )}

          {/* Cart Icon Button */}
          {onOpenCart && (
            <button
              onClick={onOpenCart}
              className="relative p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-[#4295DC] hover:text-[#0E315B] dark:hover:text-white border border-slate-200 dark:border-slate-700 transition-all shadow-sm"
              aria-label="Abrir Carrito"
              title="Abrir Carrito de Cotización"
            >
              <ShoppingCart className="w-4 h-4" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-black rounded-full h-4.5 w-4.5 flex items-center justify-center border-2 border-white dark:border-[#0E315B]">
                  {cartCount}
                </span>
              )}
            </button>
          )}

          {/* Theme Switcher Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-[#4295DC] hover:text-[#0E315B] dark:hover:text-white border border-slate-200 dark:border-slate-700 transition-all shadow-sm"
            aria-label="Alternar Modo Claro / Oscuro"
            title="Alternar Modo Claro / Oscuro"
          >
            {theme === "dark" ? <Sun className="w-4 h-4 text-[#4295DC]" /> : <Moon className="w-4 h-4 text-[#0E315B]" />}
          </button>

          {/* Highlighted CTA Button */}
          <Link
            href="#contacto"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-extrabold text-white bg-[#4295DC] hover:bg-[#3480c4] shadow-md shadow-cyan-500/20 transition-all transform hover:-translate-y-0.5"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Solicitar cotización</span>
          </Link>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="lg:hidden flex items-center space-x-3">
          {onOpenSearch && (
            <button
              onClick={onOpenSearch}
              className="p-1.5 rounded-full text-[#4295DC]"
              aria-label="Buscar"
            >
              <Search className="w-5 h-5" />
            </button>
          )}

          {onOpenCart && (
            <button
              onClick={onOpenCart}
              className="relative p-1.5 rounded-full text-[#4295DC]"
              aria-label="Abrir Carrito"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[9px] font-black rounded-full h-4 w-4 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          )}

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
        <div className="lg:hidden bg-white dark:bg-[#0E315B] border-b border-slate-200 dark:border-slate-800 px-6 pt-4 pb-6 space-y-4">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#0E315B] dark:text-slate-200 hover:text-[#4295DC] dark:hover:text-[#4295DC] text-base font-semibold transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex flex-col space-y-3">
              <a href="tel:71322727" className="text-[#4295DC] font-bold text-sm">
                📞 713-22727 / 77006615
              </a>
              <Link
                href="#contacto"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 rounded-xl text-xs font-extrabold text-white bg-[#4295DC] shadow-md"
              >
                Solicitar cotización
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
