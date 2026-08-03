"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SlideData {
  id: number;
  name: string;
  highlight: string;
  nameSuffix: string;
  des: string;
  image: string;
}

const slideData: SlideData[] = [
  {
    id: 1,
    name: "EMPROTEC — Soluciones Tecnológicas e ",
    highlight: "Ingeniería",
    nameSuffix: " para tu empresa",
    des: "Soluciones personalizadas para tu hogar o empresa. Proveemos e instalamos equipamiento de alta calidad en redes, seguridad y energía.",
    image: "/assets/logo/logo_emprotec.png",
  },
  {
    id: 2,
    name: "Diseño, implementación y cableado de ",
    highlight: "Redes & Data Centers",
    nameSuffix: "",
    des: "Fibra Óptica, Cableado Estructurado, enlaces corporativos, radio enlaces Wi-Fi y salas de servidores de alta densidad.",
    image: "/assets/gestion-de-inventario-almacen.webp",
  },
  {
    id: 3,
    name: "Sistemas de Videovigilancia, CCTV & ",
    highlight: "Seguridad Electrónica",
    nameSuffix: "",
    des: "Cámaras CCTV, control de acceso, gestión de asistencia, alarmas perimetrales y sistemas de supresión de fuego.",
    image: "/assets/produccion-fabricacion.webp",
  },
  {
    id: 4,
    name: "Infraestructura Eléctrica & ",
    highlight: "Respaldo UPS",
    nameSuffix: " corporativo",
    des: "Tableros eléctricos, protección contra descargas atmosféricas, regulación de voltaje y sistemas de energía ininterrumpida.",
    image: "/assets/aprovisionamiento-y-cmpras.webp",
  },
  {
    id: 5,
    name: "Servidores, Almacenamiento & ",
    highlight: "Virtualización Cloud",
    nameSuffix: "",
    des: "Configuración de servidores físicos, almacenamiento NAS/SAN, máquinas virtuales, VPNs y firewalls de red.",
    image: "/assets/distribucion-logistica.webp",
  },
  {
    id: 6,
    name: "Domótica & Climatización de ",
    highlight: "Precisión",
    nameSuffix: "",
    des: "Automatización de luces, portones y control de temperatura, humedad y filtrado para salas de servidores críticas.",
    image: "/assets/comercializacion-ventas.webp",
  },
];

export default function HeroCarousel() {
  const slideRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    if (!slideRef.current) return;
    const items = slideRef.current.querySelectorAll(".item");
    if (items.length > 0) {
      slideRef.current.appendChild(items[0]);
    }
  };

  const handlePrev = () => {
    if (!slideRef.current) return;
    const items = slideRef.current.querySelectorAll(".item");
    if (items.length > 0) {
      slideRef.current.prepend(items[items.length - 1]);
    }
  };

  const handleItemClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (target.closest("a, button, .see-more-btn, .button-controls")) {
      return;
    }

    if (!slideRef.current) return;
    const items = Array.from(slideRef.current.querySelectorAll(".item"));
    const clickedItem = e.currentTarget;
    const clickedIndex = items.indexOf(clickedItem);

    if (clickedIndex === 0) {
      handlePrev();
    } else if (clickedIndex >= 2) {
      const steps = clickedIndex - 1;
      for (let i = 0; i < steps; i++) {
        handleNext();
      }
    }
  };

  return (
    <section className="relative w-full h-[88vh] min-h-[600px] max-h-[800px] pt-16 bg-[#191715] text-white overflow-hidden select-none">
      <div className="carousel-container relative w-full h-full">
        {/* Slide Container */}
        <div ref={slideRef} className="slide absolute inset-0 w-full h-full">
          {slideData.map((item) => (
            <div key={item.id} className="item" onClick={handleItemClick}>
              {/* Background Image */}
              <Image
                src={item.image}
                alt={item.name}
                fill
                className={
                  item.image.includes("logo")
                    ? "object-contain p-4 bg-white/95 dark:bg-[#191715]/95"
                    : "object-cover object-center"
                }
                priority
              />

              {/* Dark Gradient Overlay for text side on main slide */}
              <div className="overlay-gradient absolute inset-0 bg-gradient-to-r from-[#191715]/75 via-[#191715]/20 to-transparent pointer-events-none" />

              {/* Slide Text Content */}
              <div className="content">
                <h1 className="name font-sans">
                  {item.name}
                  <span className="text-[#4295DC] underline decoration-[#4295DC]/40 decoration-wavy">
                    {item.highlight}
                  </span>
                  {item.nameSuffix}
                </h1>

                <p className="des">{item.des}</p>

                <div className="pt-2">
                  <Link href="#contacto" className="see-more-btn">
                    Saber más &gt;
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Buttons Controls */}
        <div className="button-controls">
          <button onClick={handlePrev} className="btn-prev" aria-label="Anterior" title="Anterior">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button onClick={handleNext} className="btn-next" aria-label="Siguiente" title="Siguiente">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* CSS Rules matching exact user code behavior */}
      <style jsx global>{`
        .carousel-container .slide .item {
          width: 200px;
          height: 300px;
          position: absolute;
          top: 50%;
          transform: translate(0, -50%);
          border-radius: 20px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
          border: 2px solid rgba(66, 149, 220, 0.4);
          background-position: 50% 50%;
          background-size: cover;
          display: inline-block;
          transition: 0.6s cubic-bezier(0.25, 1, 0.5, 1);
          overflow: hidden;
          cursor: pointer;
        }

        .slide .item:nth-child(1),
        .slide .item:nth-child(2) {
          top: 0;
          left: 0;
          transform: translate(0, 0);
          border-radius: 0;
          width: 100%;
          height: 100%;
          border: none;
          box-shadow: none;
          cursor: default;
        }

        .slide .item:nth-child(3) {
          left: 50%;
        }
        .slide .item:nth-child(4) {
          left: calc(50% + 220px);
        }
        .slide .item:nth-child(5) {
          left: calc(50% + 440px);
        }
        .slide .item:nth-child(n + 6) {
          left: calc(50% + 660px);
          opacity: 0;
          pointer-events: none;
        }

        @media (min-width: 1366px) {
          .slide .item:nth-child(3) {
            left: calc(100% - 700px);
          }
          .slide .item:nth-child(4) {
            left: calc(100% - 480px);
          }
          .slide .item:nth-child(5) {
            left: calc(100% - 260px);
          }
          .slide .item:nth-child(n + 6) {
            left: calc(100% - 40px);
            opacity: 0;
            pointer-events: none;
          }
        }

        .item .content {
          position: absolute;
          top: 50%;
          left: 60px;
          max-width: 550px;
          text-align: left;
          color: #fff;
          transform: translate(0, -50%);
          display: none;
          z-index: 30;
        }

        @media (max-width: 640px) {
          .item .content {
            left: 24px;
            right: 24px;
            max-width: 100%;
          }
          .slide .item:nth-child(3) {
            left: 60%;
            width: 140px;
            height: 220px;
          }
          .slide .item:nth-child(4) {
            left: calc(60% + 150px);
            width: 140px;
            height: 220px;
          }
        }

        .slide .item:nth-child(2) .content {
          display: block;
        }

        .slide .item:nth-child(n + 3) .overlay-gradient {
          display: none;
        }

        .content .name {
          font-size: clamp(24px, 4vw, 44px);
          font-weight: 900;
          line-height: 1.2;
          opacity: 0;
          animation: animate 0.8s ease-in-out 1 forwards;
          text-shadow: 0 2px 16px rgba(0, 0, 0, 0.85);
        }

        .content .des {
          margin-top: 12px;
          margin-bottom: 20px;
          font-size: clamp(12px, 1.8vw, 15px);
          color: #e0e0e0;
          line-height: 1.6;
          opacity: 0;
          animation: animate 0.8s ease-in-out 0.2s 1 forwards;
          text-shadow: 0 1px 10px rgba(0, 0, 0, 0.85);
        }

        .content .see-more-btn {
          display: inline-block;
          padding: 12px 28px;
          border-radius: 6px;
          font-size: 13px;
          font-weight: bold;
          color: #ffffff;
          background-color: #4295dc;
          box-shadow: 0 10px 25px rgba(66, 149, 220, 0.3);
          transition: all 0.3s ease;
          opacity: 0;
          animation: animate 0.8s ease-in-out 0.4s 1 forwards;
        }

        .content .see-more-btn:hover {
          background-color: #3480c4;
          transform: translateY(-2px);
        }

        @keyframes animate {
          from {
            opacity: 0;
            transform: translate(0, 80px);
            filter: blur(25px);
          }
          to {
            opacity: 1;
            transform: translate(0, 0);
            filter: blur(0);
          }
        }

        .button-controls {
          position: absolute;
          bottom: 30px;
          left: 60px;
          z-index: 40;
          display: flex;
          gap: 12px;
        }

        @media (max-width: 640px) {
          .button-controls {
            left: 24px;
            bottom: 24px;
          }
        }

        .button-controls button {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          border: 1px solid rgba(66, 149, 220, 0.4);
          background: rgba(14, 49, 91, 0.85);
          color: #ffffff;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          backdrop-filter: blur(8px);
        }

        .button-controls button:hover {
          background: #4295dc;
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
}
