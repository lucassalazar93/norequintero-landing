// src/components/ProductCard.jsx
import React, { useState, useEffect } from "react";
import "../styles/ProductCard.css";

const ProductCard = ({
  producto,
  onAddToCart,
  isCarousel = false,
  isPromo = false,
}) => {
  const [selected, setSelected] = useState(
    producto.presentaciones ? producto.presentaciones[0] : null
  );
  const [expanded, setExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detectar si es móvil
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // En móvil: cerrar tarjeta tras 4s
  useEffect(() => {
    if (expanded && isMobile) {
      const timer = setTimeout(() => setExpanded(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [expanded, isMobile]);

  // Acción del botón "Agregar"
  const handleClick = () => {
    if (isCarousel) {
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
      if (selected) {
        onAddToCart?.({ ...producto, presentacion: selected });
      } else {
        onAddToCart?.(producto);
      }
    }
  };

  // Precio final en promos
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
      className={`card ${expanded ? "expandida" : ""} 
        ${isCarousel ? "card--carousel" : ""} 
        ${isPromo ? "card--promo" : ""}`}
      onMouseLeave={() => !isMobile && setExpanded(false)} // 👈 cerrar al retirar mouse en desktop
    >
      {/* Imagen */}
      <div className="img-wrapper">
        <img src={producto.imagen} alt={producto.nombre} />
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

      {/* Descripción + Ver más */}
      {!isCarousel && (
        <>
          <p className={`descripcion ${expanded ? "expandida" : ""}`}>
            {producto.descripcion}
          </p>
          <span className="ver-mas" onClick={() => setExpanded(!expanded)}>
            {expanded ? "Ver menos" : "Ver más"}
          </span>
        </>
      )}

      {/* Precios */}
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

      {/* Botón Agregar */}
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
