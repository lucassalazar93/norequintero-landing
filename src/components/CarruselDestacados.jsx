// src/components/CarruselDestacados.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "../styles/CarruselDestacados.css";
import ProductCard from "./ProductCard";

const CarruselDestacados = ({ productos, onAddToCart }) => {
  return (
    <div className="carrusel-destacados">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={"auto"}
        loop={true}
        freeMode={true}
        autoplay={{
          delay: 0, // ⚡ movimiento continuo sin pausas
          disableOnInteraction: false,
        }}
        speed={4000} // ⏱️ velocidad del scroll
        grabCursor={true}
      >
        {productos.map((p) => (
          <SwiperSlide key={p.id}>
            <div className="slide-wrapper">
              {/* 🔹 Pasamos isCarousel para que ProductCard cambie su lógica */}
              <ProductCard
                producto={p}
                onAddToCart={onAddToCart}
                isCarousel={true}
              />
              {/* Badge destacado solo en el carrusel */}
              <span className="badge-destacado"></span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarruselDestacados;
