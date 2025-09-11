// src/components/ProductCard.jsx
import React, { useState } from "react";
import "../styles/ProductCard.css";

const ProductCard = ({
  producto,
  onAddToCart,
  isCarousel = false,
  isPromo = false,
}) => {
  // Estado local para la presentación seleccionada
  const [selected, setSelected] = useState(
    producto.presentaciones ? producto.presentaciones[0] : null
  );
  const [showMore, setShowMore] = useState(false);

  // Manejo del botón según el contexto
  const handleClick = () => {
    if (isCarousel) {
      // 🔹 Si es carrusel → llevar al catálogo completo (#postres)
      const section = document.getElementById("postres");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });

        setTimeout(() => {
          const card = document.getElementById(`producto-${producto.id}`);
          if (card) {
            card.scrollIntoView({ behavior: "smooth", block: "center" });
            card.classList.add("highlight");
            setTimeout(() => card.classList.remove("highlight"), 2000);
          }
        }, 600);
      }
    } else {
      // 🔹 Catálogo normal o promo → agregar al carrito
      if (selected) {
        onAddToCart?.({ ...producto, presentacion: selected });
      } else {
        onAddToCart?.(producto);
      }
    }
  };

  // Si el producto es promo, calculamos precio final
  let precioFinal = producto.precio ?? null;
  if (
    isPromo &&
    producto.promo?.tipo === "descuento" &&
    typeof producto.precio === "number"
  ) {
    precioFinal =
      producto.precio - (producto.precio * producto.promo.valor) / 100;
  }

  return (
    <div
      id={`producto-${producto.id}`}
      className={`card 
        ${isCarousel ? "card--carousel" : ""} 
        ${isPromo ? "card--promo" : ""}`}
    >
      {/* Imagen */}
      <div className="img-wrapper">
        <img src={producto.imagen} alt={producto.nombre} />

        {/* Badge dinámico */}
        {isCarousel && <span className="badge-destacado">⭐ Top</span>}
        {isPromo && (
          <span className="badge-destacado">
            {producto.promo?.tipo === "2x1" && "2x1 🎁"}
            {producto.promo?.tipo === "descuento" &&
              `-${producto.promo.valor}%`}
            {producto.promo?.tipo === "especial" && "✨ Especial"}
          </span>
        )}
      </div>

      {/* Nombre */}
      <h3>{producto.nombre}</h3>

      {/* 🔹 Descripción solo en catálogo y promo (no en carrusel) */}
      {!isCarousel && (
        <>
          <p className={`descripcion ${showMore ? "expandida" : ""}`}>
            {showMore
              ? producto.descripcion
              : (producto.descripcion || "").slice(0, 90) +
                (producto.descripcion?.length > 90 ? "..." : "")}
          </p>
          {producto.descripcion?.length > 90 && (
            <span className="ver-mas" onClick={() => setShowMore(!showMore)}>
              {showMore ? "Ver menos" : "Ver más"}
            </span>
          )}
        </>
      )}

      {/* 🔹 Precios dinámicos */}
      {isPromo ? (
        <div className="precio-box">
          {producto.promo?.tipo === "descuento" && producto.precio ? (
            <>
              <span className="precio tachado">
                ${producto.precio.toLocaleString("es-CO")}
              </span>
              <span className="precio precio-final">
                ${precioFinal.toLocaleString("es-CO")}
              </span>
            </>
          ) : producto.precio ? (
            <span className="precio">
              ${producto.precio.toLocaleString("es-CO")}
            </span>
          ) : (
            <span className="precio">
              Desde $
              {producto.presentaciones?.[0]?.precio?.toLocaleString("es-CO")}
            </span>
          )}
          {producto.promo?.descripcion && (
            <p className="promo-text">{producto.promo.descripcion}</p>
          )}
        </div>
      ) : isCarousel ? (
        <span className="precio">
          {producto.precio
            ? `$${producto.precio.toLocaleString("es-CO")}`
            : producto.presentaciones
            ? `Desde $${producto.presentaciones[0].precio.toLocaleString(
                "es-CO"
              )}`
            : ""}
        </span>
      ) : producto.presentaciones && producto.presentaciones.length > 1 ? (
        <div className="presentaciones-box">
          <h4>Opciones disponibles:</h4>
          <select
            className="presentaciones-select"
            value={selected?.tipo}
            onChange={(e) => {
              const opcion = producto.presentaciones.find(
                (op) => op.tipo === e.target.value
              );
              setSelected(opcion);
            }}
          >
            {producto.presentaciones.map((opcion, idx) => (
              <option key={idx} value={opcion.tipo}>
                {opcion.tipo} — ${opcion.precio.toLocaleString("es-CO")}
              </option>
            ))}
          </select>
        </div>
      ) : producto.presentaciones && producto.presentaciones.length === 1 ? (
        <span className="precio">
          {producto.presentaciones[0].tipo}: $
          {producto.presentaciones[0].precio.toLocaleString("es-CO")}
        </span>
      ) : (
        <span className="precio">
          ${producto.precio?.toLocaleString("es-CO")}
        </span>
      )}

      {/* Botón dinámico */}
      <button
        className={`btn-agregar ${isPromo ? "btn-promo" : ""}`}
        onClick={handleClick}
      >
        {isCarousel
          ? "Ver producto"
          : isPromo
          ? "Agregar Promo 🎉"
          : `Agregar${selected ? ` — ${selected.tipo}` : ""}`}
      </button>
    </div>
  );
};

export default ProductCard;
