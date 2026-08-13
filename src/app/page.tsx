'use client';

import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MotionTickerSection from "@/components/MotionTickerSection";
import InteractiveSolutionsExplorer from "@/components/InteractiveSolutionsExplorer";
import ServicesAndProductsGrid from "@/components/ServicesAndProductsGrid";
import ImmersiveParallaxSection from "@/components/ImmersiveParallaxSection";
import MinimalStatsSection from "@/components/MinimalStatsSection";
import EditorialWhyUsSection from "@/components/EditorialWhyUsSection";
import StickyTimelineSection from "@/components/StickyTimelineSection";
import EditorialProjectsSection from "@/components/EditorialProjectsSection";
import FeaturedTestimonialSection from "@/components/FeaturedTestimonialSection";
import ClientsSection from "@/components/ClientsSection";
import PartnersSection from "@/components/PartnersSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CartDrawer, { CartItem } from "@/components/CartDrawer";
import { Product } from "@/components/ProductsSection";

export default function Home() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex((item) => item.product.id === product.id);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += 1;
        return updated;
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (productId: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  return (
    <main className="min-h-screen bg-white dark:bg-[#0F172A] text-slate-900 dark:text-white selection:bg-[#4295DC] selection:text-white font-sans antialiased overflow-x-hidden transition-colors duration-300">
      {/* 1. Header Sticky Minimalista */}
      <Header />

      {/* 2. Hero — Impacto Inicial */}
      <HeroSection />

      {/* 3. Sección 01 — EMPROTEC en Movimiento (Scroll Horizontal) */}
      <MotionTickerSection />

      {/* 4. Sección 02 — SOLUCIONES ("Todo comienza con una infraestructura preparada.") */}
      <InteractiveSolutionsExplorer />

      {/* 5. NUESTROS SERVICIOS Y PRODUCTOS (Ubicado directamente abajo de Sección 02) */}
      <ServicesAndProductsGrid onAddToCart={handleAddToCart} />

      {/* 6. Sección 03 — PARALLAX INMERSIVO (Zoom Cámara Data Center) */}
      <ImmersiveParallaxSection />

      {/* 7. Sección 04 — CIFRAS (Números Gigantes Animados) */}
      <MinimalStatsSection />

      {/* 8. Sección 05 — POR QUÉ EMPROTEC (Composición Editorial Asimétrica) */}
      <EditorialWhyUsSection />

      {/* 9. Sección 06 — METODOLOGÍA (Timeline Interactivo Sticky en 5 Etapas) */}
      <StickyTimelineSection />

      {/* 10. Sección 07 — PROYECTOS (Portfolio Revista Tecnológica Asimétrico) */}
      <EditorialProjectsSection />

      {/* 11. Sección 09 — TESTIMONIOS (Testimonio Destacado Único) */}
      <FeaturedTestimonialSection />

      {/* 12. EMPRESAS CLIENTES (Supermercados Fidalga, NUR Srl, Orbol SA, Hotel Lido, Bolivian Automotors, Mamaya, etc.) */}
      <ClientsSection />

      {/* 13. Contacto & Mapa Interactivo */}
      <ContactSection />

      {/* 13. PARTNERS & MARCAS (Ubicado justo arriba del Footer) */}
      <PartnersSection />

      {/* 14. Footer Corporativo */}
      <Footer />

      {/* Shopping Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />
    </main>
  );
}
