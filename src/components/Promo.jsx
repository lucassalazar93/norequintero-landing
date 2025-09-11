// src/components/Promo.jsx
import React, { useState } from "react";
import productos from "../data/productos"; // 📌 Fuente de datos
import "../styles/Promo.css"; // 📌 Importa tu CSS premium

const Promo = ({ onAddToCart }) => {
  // Filtrar solo productos con promo activa
  const promociones = productos.filter((p) => p?.promo != null);

  return (
    <section className="promo" id="promo" aria-label="Promociones especiales">
      {/* Encabezado */}
      <h2 className="promo-title"> Promociones Especiales</h2>
      <p className="promo-subtitle">
        Endulza tus momentos con nuestras ofertas exclusivas 💖
      </p>

      {/* Grid de tarjetas */}
      <div className="catalogo-grid">
        {promociones.map((p) => {
          let precioFinal = p.precio ?? null;
          if (p.promo?.tipo === "descuento" && typeof p.precio === "number") {
            precioFinal = p.precio - (p.precio * p.promo.valor) / 100;
          }

          return (
            <PromoCard
              key={p.id}
              producto={p}
              precioFinal={precioFinal}
              onAddToCart={onAddToCart}
            />
          );
        })}
      </div>
    </section>
  );
};

// 🔹 Tarjeta individual
const PromoCard = ({ producto, precioFinal, onAddToCart }) => {
  const [showMore, setShowMore] = useState(false);

  // Fallback por si no hay precio en raíz y sí en presentaciones
  const precioDesde =
    !producto.precio &&
    Array.isArray(producto.presentaciones) &&
    producto.presentaciones.length > 0
      ? producto.presentaciones[0].precio
      : null;

  return (
    <div className="card">
      {/* Imagen + badge */}
      <div className="img-wrapper">
        <img src={producto.imagen} alt={producto.nombre} loading="lazy" />
        <span className="badge-destacado">
          {producto.promo?.tipo === "2x1" && "2x1 🎁"}
          {producto.promo?.tipo === "descuento" && `-${producto.promo.valor}%`}
          {producto.promo?.tipo === "especial" && "✨ Especial"}
        </span>
      </div>

      {/* Nombre */}
      <h3>{producto.nombre}</h3>

      {/* Descripción con Ver más */}
      <p className={`descripcion ${showMore ? "expandida" : ""}`}>
        {producto.descripcion}
      </p>
      {producto.descripcion?.length > 90 && (
        <span
          className="ver-mas"
          role="button"
          tabIndex={0}
          onClick={() => setShowMore((v) => !v)}
          onKeyDown={(e) =>
            (e.key === "Enter" || e.key === " ") && setShowMore((v) => !v)
          }
        >
          {showMore ? "Ver menos" : "Ver más"}
        </span>
      )}

      {/* Precios */}
      {producto.promo?.tipo === "descuento" &&
      typeof producto.precio === "number" ? (
        <div className="precio-box">
          <span className="precio tachado">
            ${producto.precio.toLocaleString("es-CO")}
          </span>
          <span className="precio precio-final">
            ${precioFinal.toLocaleString("es-CO")}
          </span>
        </div>
      ) : typeof producto.precio === "number" ? (
        <span className="precio">
          ${producto.precio.toLocaleString("es-CO")}
        </span>
      ) : precioDesde != null ? (
        <span className="precio">
          Desde ${Number(precioDesde).toLocaleString("es-CO")}
        </span>
      ) : null}

      {/* Texto especial de promo */}
      {producto.promo?.descripcion && (
        <p className="promo-text">{producto.promo.descripcion}</p>
      )}

      {/* Botón */}
      <button
        className="btn-destacado"
        aria-label={`Agregar ${producto.nombre} al carrito`}
        onClick={() => onAddToCart?.(producto)}
      >
        Agregar {producto.promo?.tipo === "descuento" ? "🔥" : "🍰"}
      </button>
    </div>
  );
};

export default Promo;
