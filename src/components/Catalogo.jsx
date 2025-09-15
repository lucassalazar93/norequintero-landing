// src/components/Catalogo.jsx
import React, { useMemo, useEffect } from "react";
import productos from "../data/productos";
import "../styles/Catalogo.css";
import CarruselDestacados from "./CarruselDestacados";
import Promo from "./Promo";
import ProductCard from "./ProductCard";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// 🔹 Normaliza los ids (igual que en ProductCard)
const normalizeId = (str) =>
  str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-");

const Catalogo = ({ onAddToCart }) => {
  const destacados = useMemo(() => productos.filter((p) => p.popular), []);

  // 🔹 Agrupar productos por categoría
  const categoriasOrdenadas = useMemo(() => {
    const porCategoria = productos.reduce((acc, p) => {
      if (!acc[p.categoria]) {
        acc[p.categoria] = {
          nombreCategoria: p.categoria,
          ordenCategoria: p.ordenCategoria ?? 999,
          productos: [],
        };
      }
      acc[p.categoria].productos.push(p);
      return acc;
    }, {});
    return Object.values(porCategoria).sort(
      (a, b) => a.ordenCategoria - b.ordenCategoria
    );
  }, []);

  // 🔹 Helpers autoplay
  const pauseAutoplay = (categoria) => {
    const sw = window[`swiper-${categoria}`];
    if (sw?.autoplay) {
      sw.autoplay.stop();
    }
  };

  const resumeAutoplay = (categoria, delay = 0) => {
    const sw = window[`swiper-${categoria}`];
    if (sw?.autoplay) {
      if (delay > 0) {
        setTimeout(() => sw.autoplay.start(), delay);
      } else {
        sw.autoplay.start();
      }
    }
  };

  // 🔹 Efecto péndulo: invertir dirección cada 30s
  useEffect(() => {
    const interval = setInterval(() => {
      categoriasOrdenadas.forEach(({ nombreCategoria }) => {
        const sw = window[`swiper-${nombreCategoria}`];
        if (sw?.autoplay) {
          sw.params.autoplay.reverseDirection =
            !sw.params.autoplay.reverseDirection;
          sw.autoplay.start();
        }
      });
    }, 30000);
    return () => clearInterval(interval);
  }, [categoriasOrdenadas]);

  return (
    <section className="catalogo" id="postres">
      {/* 🔹 Encabezado premium */}
      <div className="catalogo-header">
        <h2>
          <span className="icon"></span> Nuestras{" "}
          <span className="highlight">creaciones</span>
        </h2>
        <p>
          Obras dulces hechas a mano con amor y los mejores ingredientes. Una
          experiencia gourmet en cada bocado.
        </p>
      </div>

      {/* 🔹 1. Carrusel de destacados */}
      <section className="destacados-section">
        <CarruselDestacados productos={destacados} onAddToCart={onAddToCart} />
      </section>

      {/* 🔹 2. Catálogo por categoría */}
      <section className="catalogo-completo">
        {categoriasOrdenadas.map(({ nombreCategoria, productos }, index) => {
          // 🔹 Si la categoría tiene <4 productos, duplicamos
          const items =
            productos.length < 4
              ? [...productos, ...productos, ...productos].slice(0, 6)
              : productos;

          const sectionId = normalizeId(nombreCategoria);

          return (
            <div
              key={nombreCategoria}
              id={sectionId} // ✅ id seguro para scroll desde ProductCard
              className="categoria-bloque"
            >
              <h2 className="titulo-categoria">{nombreCategoria}</h2>

              {/* Flechas */}
              <div
                className={`swiper-button-prev prev-${index}`}
                aria-label="Anterior"
              />
              <div
                className={`swiper-button-next next-${index}`}
                aria-label="Siguiente"
              />

              <Swiper
                modules={[Autoplay, Navigation]}
                loop={true}
                slidesPerGroup={1}
                watchSlidesProgress={true}
                autoplay={{
                  delay: 3000, // ⏱️ autoplay regular
                  disableOnInteraction: false,
                  pauseOnMouseEnter: false,
                }}
                speed={1800} // 🎞️ transición más suave
                spaceBetween={24}
                slidesPerView={1}
                centeredSlides={true}
                breakpoints={{
                  640: { slidesPerView: 2, centeredSlides: false },
                  1024: { slidesPerView: 3, centeredSlides: false },
                  1440: { slidesPerView: 4, centeredSlides: false },
                }}
                navigation={{
                  nextEl: `.next-${index}`,
                  prevEl: `.prev-${index}`,
                }}
                grabCursor={true}
                onSwiper={(swiper) => {
                  window[`swiper-${nombreCategoria}`] = swiper;
                }}
              >
                {items.map((producto, i) => (
                  <SwiperSlide key={`${producto.id}-${i}`}>
                    <div className="slide-wrapper">
                      <ProductCard
                        producto={producto}
                        onAddToCart={onAddToCart}
                        // 🛑 Hover → pausa, resume al salir
                        onHoverChange={(hovering) =>
                          hovering
                            ? pauseAutoplay(nombreCategoria)
                            : resumeAutoplay(nombreCategoria, 1000)
                        }
                        // 🛑 Ver más → pausa, reanuda 4s después de cerrar
                        onExpandChange={(expanded) =>
                          expanded
                            ? pauseAutoplay(nombreCategoria)
                            : resumeAutoplay(nombreCategoria, 4000)
                        }
                        // 🛑 Selección presentación → pausa mientras tenga focus
                        onPresentationChange={(interacting) =>
                          interacting
                            ? pauseAutoplay(nombreCategoria)
                            : resumeAutoplay(nombreCategoria, 1200)
                        }
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          );
        })}
      </section>

      {/* 🔹 3. Promo final
          <Promo onAddToCart={onAddToCart} /> */}
    </section>
  );
};

export default Catalogo;
