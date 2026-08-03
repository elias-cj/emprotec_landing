"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-100 dark:bg-[#191715] text-slate-600 dark:text-[#B0B1B0] text-xs py-14 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">

          {/* Company Column */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex flex-col">
              <Image
                src="/assets/logo/logo_emprotec.png"
                alt="EMPROTEC Logo"
                width={180}
                height={60}
                className="h-12 w-auto object-contain mb-2"
              />
              <span className="text-[10px] font-semibold text-[#5A6B80] dark:text-[#B0B1B0] tracking-widest uppercase">
                Soluciones Tecnológicas e Ingeniería
              </span>
            </div>
            <p className="text-slate-600 dark:text-[#B0B1B0] leading-relaxed text-xs max-w-sm">
              Soluciones personalizadas para tu hogar o empresa. Proveemos e instalamos equipamiento de alta calidad en redes, seguridad, UPS, servidores y domótica.
            </p>
          </div>

          {/* Services Links Column */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-[#0E315B] dark:text-white font-bold uppercase tracking-wider text-xs">Servicios de Ingeniería</h4>
            <ul className="space-y-2 text-slate-600 dark:text-slate-300">
              <li><Link href="#soluciones" className="hover:text-[#4295DC] dark:hover:text-[#4295DC] transition-colors">Videovigilancia y Cámaras CCTV</Link></li>
              <li><Link href="#soluciones" className="hover:text-[#4295DC] dark:hover:text-[#4295DC] transition-colors">Redes, Fibra Óptica y Cableado Estructurado</Link></li>
              <li><Link href="#soluciones" className="hover:text-[#4295DC] dark:hover:text-[#4295DC] transition-colors">Infraestructura Eléctrica, Tableros y UPS</Link></li>
              <li><Link href="#soluciones" className="hover:text-[#4295DC] dark:hover:text-[#4295DC] transition-colors">Servidores, Virtualización y Almacenamiento</Link></li>
              <li><Link href="#soluciones" className="hover:text-[#4295DC] dark:hover:text-[#4295DC] transition-colors">Proyectos "Llave en mano" y Tercerización IT</Link></li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-[#0E315B] dark:text-white font-bold uppercase tracking-wider text-xs">Datos de Contacto</h4>
            <ul className="space-y-2.5 text-slate-600 dark:text-slate-300">
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#4295DC]" />
                <a href="tel:71322727" className="hover:text-[#4295DC] dark:hover:text-[#4295DC] transition-colors font-medium">
                  713-22727 / 77006615
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[#4295DC]" />
                <a href="mailto:info@emprotec.com.bo" className="hover:text-[#4295DC] dark:hover:text-[#4295DC] transition-colors font-medium">
                  info@emprotec.com.bo
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-[#4295DC]" />
                <span>Santa Cruz – Bolivia</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="mt-12 pt-6 border-t border-slate-200 dark:border-slate-900 text-center text-slate-500 dark:text-[#B0B1B0]">
          <p>© {new Date().getFullYear()} EMPROTEC — Soluciones Tecnológicas e Ingeniería. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
