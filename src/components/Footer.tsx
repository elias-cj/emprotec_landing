"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 dark:bg-[#0B132B] text-slate-300 text-xs py-16 border-t border-slate-800 dark:border-slate-700/60 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 items-start mb-12">

          {/* Column 1: EMPROTEC Branding */}
          <div className="space-y-4 lg:col-span-1">
            <Image
              src="/assets/logo/logo_emprotec.png"
              alt="EMPROTEC Logo"
              width={180}
              height={60}
              className="h-11 w-auto object-contain brightness-0 invert"
            />
            <p className="text-slate-400 text-xs leading-relaxed">
              Venta, instalación y configuración de productos y soluciones de ingeniería tecnológica IT para hogares y empresas en Bolivia.
            </p>
          </div>

          {/* Column 2: Navegación */}
          <div className="space-y-3">
            <h4 className="text-white font-bold uppercase tracking-wider text-xs font-['Raleway']">Navegación</h4>
            <ul className="space-y-2">
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
            <h4 className="text-white font-bold uppercase tracking-wider text-xs font-['Raleway']">Productos</h4>
            <ul className="space-y-2">
              <li><Link href="#servicios-y-productos" className="hover:text-[#4295DC] transition-colors">Cámaras & Seguridad CCTV</Link></li>
              <li><Link href="#servicios-y-productos" className="hover:text-[#4295DC] transition-colors">Redes & Switches L3</Link></li>
              <li><Link href="#servicios-y-productos" className="hover:text-[#4295DC] transition-colors">Servidores Rack / Tower</Link></li>
              <li><Link href="#servicios-y-productos" className="hover:text-[#4295DC] transition-colors">UPS Online & Energía</Link></li>
              <li><Link href="#servicios-y-productos" className="hover:text-[#4295DC] transition-colors">Control de Acceso Biométrico</Link></li>
            </ul>
          </div>

          {/* Column 4: Servicios */}
          <div className="space-y-3">
            <h4 className="text-white font-bold uppercase tracking-wider text-xs font-['Raleway']">Servicios</h4>
            <ul className="space-y-2">
              <li><Link href="#soluciones" className="hover:text-[#4295DC] transition-colors">Instalación & Montaje TI</Link></li>
              <li><Link href="#soluciones" className="hover:text-[#4295DC] transition-colors">Cableado Estructurado & Fibra</Link></li>
              <li><Link href="#soluciones" className="hover:text-[#4295DC] transition-colors">Virtualización Cloud</Link></li>
              <li><Link href="#soluciones" className="hover:text-[#4295DC] transition-colors">Auditoría de Ciberseguridad</Link></li>
              <li><Link href="#soluciones" className="hover:text-[#4295DC] transition-colors">Soporte Técnico 24/7</Link></li>
            </ul>
          </div>

          {/* Column 5: Contacto Directo */}
          <div className="space-y-3">
            <h4 className="text-white font-bold uppercase tracking-wider text-xs font-['Raleway']">Contacto</h4>
            <div className="space-y-2 text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#4295DC] shrink-0" />
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
              <a href="https://wa.me/59171322727" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-slate-800 hover:bg-[#4295DC] text-white transition-colors" aria-label="WhatsApp">
                <MessageCircle className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-slate-800 hover:bg-[#4295DC] text-white transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-slate-800 hover:bg-[#4295DC] text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-slate-800 hover:bg-[#4295DC] text-white transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Footer Bottom Line */}
        <div className="pt-8 border-t border-slate-800 dark:border-slate-700/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
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
