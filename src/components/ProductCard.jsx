// src/components/ProductCard.jsx
import React, { useState, useEffect } from "react";
import "../styles/ProductCard.css";

// 🔹 Normaliza los ids de categorías (para scroll correcto)
const normalizeId = (str) =>
  str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // quitar tildes
    .replace(/\s+/g, "-"); // espacios → guiones

const ProductCard = ({
  producto,
  onAddToCart,
  isCarousel = false,
  isPromo = false,
  onHoverChange,
  onExpandChange,
  onPresentationChange,
}) => {
  const [selected, setSelected] = useState(
    producto.presentaciones ? producto.presentaciones[0] : null
  );
  const [expanded, setExpanded] = useState(false);
  const [showVerMas, setShowVerMas] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // 📱 Detectar si es móvil
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // 🔍 Mostrar "Ver más" si hay descripción
  useEffect(() => {
    setShowVerMas(!!(producto.descripcion && producto.descripcion.length > 0));
  }, [producto.descripcion]);

  // ⏱️ En móvil: cerrar tarjeta tras 4s
  useEffect(() => {
    if (expanded && isMobile) {
      const timer = setTimeout(() => setExpanded(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [expanded, isMobile]);

  // 🛒 Acción del botón (solo fuera del carrusel)
  const handleClick = () => {
    if (isCarousel) return; // ❌ No hace nada en carrusel (solo informativo)

    const uid = selected
      ? `${producto.id}-${selected.tipo}`
      : `${producto.id}-default`;

    const productoCarrito = {
      ...producto,
      uid,
      presentacion: selected || producto.presentacion || null,
      cantidad: 1,
    };

    onAddToCart?.(productoCarrito);
  };

  // 💲 Precio final en promos
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
      onMouseEnter={() => onHoverChange?.(true)}
      onMouseLeave={() => {
        !isMobile && setExpanded(false);
        onHoverChange?.(false);
      }}
    >
      {/* 📸 Imagen */}
      <div className="img-wrapper">
        <img src={producto.imagen} alt={producto.nombre} />
        {isCarousel && <span className="badge-destacado">🎖️ Favorito</span>}
        {isPromo && (
          <span className="badge-destacado">
            {producto.promo?.tipo === "2x1" && "2x1 🎁"}
            {producto.promo?.tipo === "descuento" &&
              `-${producto.promo.valor}%`}
            {producto.promo?.tipo === "especial" && "✨ Especial"}
          </span>
        )}
      </div>

      {/* Contenido principal */}
      <div className="card-body">
        {/* 🏷️ Nombre */}
        <h3>{producto.nombre}</h3>

        {/* 📝 Descripción */}
        {!isCarousel && showVerMas && (
          <div className="descripcion-wrapper">
            {expanded && (
              <p className="descripcion expandida">{producto.descripcion}</p>
            )}
            <span
              className="ver-mas"
              onClick={() => {
                const newExpanded = !expanded;
                setExpanded(newExpanded);
                onExpandChange?.(newExpanded);
              }}
            >
              {expanded ? "Ver menos" : "Ver más"}
            </span>
          </div>
        )}

        {/* 💲 Precio */}
        <div className="precio-wrapper">
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
                  {producto.presentaciones?.[0]?.precio?.toLocaleString(
                    "es-CO"
                  )}
                </span>
              )}
              {producto.promo?.descripcion && (
                <p className="promo-text">{producto.promo.descripcion}</p>
              )}
            </div>
          ) : (
            <span className="precio">
              {producto.precio
                ? `$${producto.precio.toLocaleString("es-CO")}`
                : producto.presentaciones
                ? `Desde $${producto.presentaciones[0].precio.toLocaleString(
                    "es-CO"
                  )}`
                : ""}
            </span>
          )}
        </div>

        {/* 📦 Opciones disponibles (solo si NO es carrusel) */}
        {!isCarousel &&
          producto.presentaciones &&
          producto.presentaciones.length > 0 && (
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
                  onPresentationChange?.(true);
                }}
                onBlur={() => onPresentationChange?.(false)}
              >
                {producto.presentaciones.map((opcion, idx) => (
                  <option key={idx} value={opcion.tipo}>
                    {opcion.tipo} — ${opcion.precio.toLocaleString("es-CO")}
                  </option>
                ))}
              </select>
            </div>
          )}
      </div>

      {/* 🔘 Botón (❌ no aparece en carrusel destacados) */}
      {!isCarousel && (
        <button
          className={`btn-agregar ${isPromo ? "btn-promo" : ""}`}
          onClick={(e) => {
            e.preventDefault(); // evita efectos extra en Swiper
            handleClick();
          }}
        >
          {isPromo
            ? "Agregar Promo 🎉"
            : selected
            ? `Agregar ${selected.tipo} — $${selected.precio.toLocaleString(
                "es-CO"
              )} 🛒`
            : "Agregar 🛒"}
        </button>
      )}
    </div>
  );
};

export default ProductCard;
