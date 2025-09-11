import React from "react";
import "../styles/Embudo.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const beneficios = [
  {
    icon: "🚚",
    titulo: "Domicilio GRATIS",
    descripcion: "En pedidos superiores a $50",
  },
  {
    icon: "⏰",
    titulo: "Entrega programada",
    descripcion: "Realiza tu pedido con 24 horas de anticipación.",
  },
  {
    icon: "🎁",
    titulo: "Envoltura de regalo",
    descripcion: "Disponible a solicitud.",
  },
  {
    icon: "💌",
    titulo: "Novedades exclusivas",
    descripcion: "Recibe lanzamientos y descuentos primero.",
  },
];

const Embudo = () => {
  // 🔹 Scroll suave hacia catálogo de postres
  const scrollToCatalogo = () => {
    const section = document.getElementById("postres");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    // 🔹 Este id conecta con el botón "Contacto" de la Navbar
    <section className="embudo" id="contacto">
      <div className="embudo-content">
        <h2>¿Listo para endulzar tu día?</h2>
        <p>
          Son cientos los que ya confían en <strong>Nore Quintero</strong> para
          endulzar sus celebraciones. Atrévete a vivir la experiencia: pide hoy
          tu postre artesanal y siente la diferencia en cada bocado.
        </p>

        {/* 🔥 Swiper de beneficios */}
        <div className="swiper-container">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            loop={true}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000 }}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {beneficios.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="beneficio">
                  <span className="icon">{item.icon}</span>
                  <h4>{item.titulo}</h4>
                  <p>{item.descripcion}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* 🔹 Formulario + botones CTA */}
        <div className="cta">
          <div className="cta-form">
            <input type="email" placeholder="Escribe tu correo" />
            <button>Suscríbete para recibir novedades →</button>
          </div>

          <div className="cta-botones">
            <button className="ordenar-hero" onClick={scrollToCatalogo}>
              🍰 Ordena ahora
            </button>
            <button className="blanco">Ver menú completo</button>
          </div>
        </div>

        <p className="legal">
          Prometemos: cero spam, solo promociones deliciosas y nuevos postres
          para ti.
        </p>
      </div>
    </section>
  );
};

export default Embudo;
