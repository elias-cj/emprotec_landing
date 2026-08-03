import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import ServiceCards from "@/components/ServiceCards";
import WhyUs from "@/components/WhyUs";
import SuccessCases from "@/components/SuccessCases";
import ClientsPartners from "@/components/ClientsPartners";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0F172A] text-white selection:bg-[#0099FF] selection:text-white">
      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Hero Interactive Slider */}
      <HeroCarousel />

      {/* Solutions & Services 6 Grid Cards */}
      <ServiceCards />

      {/* Value Proposition & Why Choose Us */}
      <WhyUs />

      {/* Real Success Cases & Metrics */}
      <SuccessCases />

      {/* Client Testimonials, Logos & Partners */}
      <ClientsPartners />

      {/* Call to Action Conversion Banner */}
      <CTASection />

      {/* Main Footer */}
      <Footer />
    </main>
  );
}
