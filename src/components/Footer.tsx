"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-100 dark:bg-[#0B132B] text-slate-700 dark:text-slate-300 text-xs py-16 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 items-start mb-12">

          {/* Column 1: EMPROTEC Branding */}
          <div className="space-y-4 lg:col-span-2">
            <Image
              src="/assets/logo/logo_emprotec.png"
              alt="EMPROTEC Logo"
              width={320}
              height={100}
              className="h-16 sm:h-20 md:h-24 w-auto object-contain"
            />
            <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed font-light max-w-sm">
              Venta, instalación y configuración de productos y soluciones de ingeniería tecnológica IT para hogares y empresas en Bolivia.
            </p>
          </div>

          {/* Column 2: Navegación */}
          <div className="space-y-3">
            <h4 className="text-[#0E315B] dark:text-white font-extrabold uppercase tracking-wider text-xs font-['Raleway']">Navegación</h4>
            <ul className="space-y-2 text-slate-600 dark:text-slate-300 font-medium">
              <li><Link href="#inicio" className="hover:text-[#4295DC] transition-colors">Inicio</Link></li>
              <li><Link href="#soluciones" className="hover:text-[#4295DC] transition-colors">Soluciones</Link></li>
              <li><Link href="#servicios-y-productos" className="hover:text-[#4295DC] transition-colors">Productos & Servicios</Link></li>
              <li><Link href="#nosotros" className="hover:text-[#4295DC] transition-colors">Nosotros</Link></li>
              <li><Link href="#proyectos" className="hover:text-[#4295DC] transition-colors">Proyectos</Link></li>
              <li><Link href="#contacto" className="hover:text-[#4295DC] transition-colors">Contacto</Link></li>
              <li><Link href="#partners" className="hover:text-[#4295DC] transition-colors">Partners</Link></li>
            </ul>
          </div>

          {/* Column 3: Productos */}
          <div className="space-y-3">
            <h4 className="text-[#0E315B] dark:text-white font-extrabold uppercase tracking-wider text-xs font-['Raleway']">Productos</h4>
            <ul className="space-y-2 text-slate-600 dark:text-slate-300 font-medium">
              <li><Link href="#servicios-y-productos" className="hover:text-[#4295DC] transition-colors">Cámaras & Seguridad CCTV</Link></li>
              <li><Link href="#servicios-y-productos" className="hover:text-[#4295DC] transition-colors">Redes & Switches L3</Link></li>
              <li><Link href="#servicios-y-productos" className="hover:text-[#4295DC] transition-colors">Servidores Rack / Tower</Link></li>
              <li><Link href="#servicios-y-productos" className="hover:text-[#4295DC] transition-colors">UPS Online & Energía</Link></li>
              <li><Link href="#servicios-y-productos" className="hover:text-[#4295DC] transition-colors">Control de Acceso Biométrico</Link></li>
            </ul>
          </div>

          {/* Column 4: Servicios */}
          <div className="space-y-3">
            <h4 className="text-[#0E315B] dark:text-white font-extrabold uppercase tracking-wider text-xs font-['Raleway']">Servicios</h4>
            <ul className="space-y-2 text-slate-600 dark:text-slate-300 font-medium">
              <li><Link href="#soluciones" className="hover:text-[#4295DC] transition-colors">Instalación & Montaje TI</Link></li>
              <li><Link href="#soluciones" className="hover:text-[#4295DC] transition-colors">Cableado Estructurado & Fibra</Link></li>
              <li><Link href="#soluciones" className="hover:text-[#4295DC] transition-colors">Virtualización Cloud</Link></li>
              <li><Link href="#soluciones" className="hover:text-[#4295DC] transition-colors">Auditoría de Ciberseguridad</Link></li>
              <li><Link href="#soluciones" className="hover:text-[#4295DC] transition-colors">Soporte Técnico 24/7</Link></li>
            </ul>
          </div>

          {/* Column 5: Contacto Directo */}
          <div className="space-y-3">
            <h4 className="text-[#0E315B] dark:text-white font-extrabold uppercase tracking-wider text-xs font-['Raleway']">Contacto</h4>
            <div className="space-y-2 text-slate-600 dark:text-slate-300 font-medium">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#4295DC] shrink-0 mt-0.5" />
                <span>Santa Cruz - Bolivia (Calle Barron #435)</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#4295DC] shrink-0" />
                <span>713-22727 / 77006615</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#4295DC] shrink-0" />
                <span>info@emprotec.com.bo</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-2 flex items-center space-x-3">
              <a href="https://wa.me/59171322727" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-white hover:bg-[#4295DC] hover:text-white dark:hover:bg-[#4295DC] transition-colors shadow-sm" aria-label="WhatsApp">
                <MessageCircle className="w-4 h-4" />
              </a>
              <a href="https://www.facebook.com/emprotecbolivia/?locale=es_LA" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-white hover:bg-[#4295DC] hover:text-white dark:hover:bg-[#4295DC] transition-colors shadow-sm" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/in/richard-burgos-coimbra/" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-white hover:bg-[#4295DC] hover:text-white dark:hover:bg-[#4295DC] transition-colors shadow-sm" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="p-2.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-white hover:bg-[#4295DC] hover:text-white dark:hover:bg-[#4295DC] transition-colors shadow-sm" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Footer Bottom Line */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 dark:text-slate-400">
          <p>© {new Date().getFullYear()} EMPROTEC. Todos los derechos reservados. Santa Cruz, Bolivia.</p>
          <div className="flex space-x-4">
            <Link href="#inicio" className="hover:text-[#4295DC] transition-colors">Términos de servicio</Link>
            <Link href="#inicio" className="hover:text-[#4295DC] transition-colors">Política de privacidad</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
