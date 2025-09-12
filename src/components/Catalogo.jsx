// src/components/Catalogo.jsx
import React from "react";
import productos from "../data/productos";
import "../styles/Catalogo.css";
import CarruselDestacados from "./CarruselDestacados";
import Promo from "./Promo";
import ProductCard from "./ProductCard";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Catalogo = ({ onAddToCart }) => {
  const productosDestacados = productos.filter((producto) => producto.popular);

  // 🔹 Agrupar productos por categoría
  const productosPorCategoria = productos.reduce((acumulador, producto) => {
    if (!acumulador[producto.categoria]) {
      acumulador[producto.categoria] = {
        nombreCategoria: producto.categoria,
        ordenCategoria: producto.ordenCategoria,
        productos: [],
      };
    }
    acumulador[producto.categoria].productos.push(producto);
    return acumulador;
  }, {});

  // 🔹 Convertir a array y ordenar según el campo `ordenCategoria`
  const categoriasOrdenadas = Object.values(productosPorCategoria).sort(
    (a, b) => a.ordenCategoria - b.ordenCategoria
  );

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
        <CarruselDestacados
          productos={productosDestacados}
          onAddToCart={onAddToCart}
        />
      </section>

      {/* 🔹 2. Catálogo por categoría con cinta infinita */}
      <section className="catalogo-completo">
        <h2 className="subtitulo-catalogo">Todos los productos</h2>

        {categoriasOrdenadas.map(({ nombreCategoria, productos }) => (
          <div key={nombreCategoria} className="categoria-bloque">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={24}
              loop={true}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              speed={5000} // ⏱️ velocidad del scroll
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1440: { slidesPerView: 4 },
              }}
              grabCursor={true}
            >
              {productos.map((producto) => (
                <SwiperSlide key={producto.id}>
                  <div className="slide-wrapper">
                    <ProductCard
                      producto={producto}
                      onAddToCart={onAddToCart}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ))}
      </section>

      {/* 🔹 3. Promo final */}
      <Promo />
    </section>
  );
};

export default Catalogo;
