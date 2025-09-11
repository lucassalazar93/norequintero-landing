// src/components/Carrito/ProductoCarrito.jsx
import React from "react";

export default function ProductoCarrito({
  producto,
  handleCantidad,
  eliminarProducto,
}) {
  // 🚨 Si el producto no existe, no se renderiza nada
  if (!producto) return null;

  // ✅ Asegurar cantidad mínima
  const cantidad =
    producto.cantidad && producto.cantidad > 0 ? producto.cantidad : 1;

  // ✅ Precio unitario base (seguro)
  let precioUnitario = 0;
  if (typeof producto.precio === "number" && producto.precio > 0) {
    precioUnitario = producto.precio;
  } else if (
    producto.presentacion &&
    typeof producto.presentacion.precio === "number"
  ) {
    precioUnitario = producto.presentacion.precio;
  }

  // ✅ Precio final (aplicando promo si es descuento)
  let precioFinal = precioUnitario;
  if (producto.promo?.tipo === "descuento" && precioUnitario > 0) {
    precioFinal =
      precioUnitario - (precioUnitario * producto.promo.valor) / 100;
  }

  // ✅ Total general
  let total = precioFinal * cantidad;

  // Caso especial: promo 2x1
  if (producto.promo?.tipo === "2x1" && precioFinal > 0) {
    const pares = Math.floor(cantidad / 2);
    const impares = cantidad % 2;
    total = (pares + impares) * precioFinal;
  }

  return (
    <div className="producto">
      {/* Imagen */}
      <img
        src={producto.imagen}
        alt={producto.nombre || "Producto"}
        loading="lazy"
      />

      {/* Detalles */}
      <div className="detalle">
        <h4>{producto.nombre || "Producto sin nombre"}</h4>

        {/* Presentación */}
        {producto.presentacion?.tipo && (
          <small className="presentacion">({producto.presentacion.tipo})</small>
        )}

        {/* Precios */}
        <div className="precios">
          {producto.promo?.tipo === "descuento" && precioUnitario > 0 ? (
            <>
              <span className="precio tachado">
                ${precioUnitario.toLocaleString("es-CO")}
              </span>
              <span className="precio">
                ${precioFinal.toLocaleString("es-CO")}
              </span>
            </>
          ) : (
            <span className="precio">
              ${precioFinal > 0 ? precioFinal.toLocaleString("es-CO") : "—"}
            </span>
          )}

          {/* Texto de promos */}
          {producto.promo?.tipo === "2x1" && (
            <small className="promo-text">🎁 ¡Llévate 2 y paga 1!</small>
          )}
          {producto.promo?.tipo === "especial" && (
            <small className="promo-text">{producto.promo.descripcion}</small>
          )}
        </div>

        {/* Controles de cantidad */}
        <div className="acciones">
          <button onClick={() => handleCantidad(producto.uid, -1)}>-</button>
          <span>{cantidad}</span>
          <button onClick={() => handleCantidad(producto.uid, 1)}>+</button>
        </div>

        {/* Total */}
        <strong>Total: ${total.toLocaleString("es-CO")}</strong>
      </div>

      {/* Botón eliminar */}
      <button
        className="eliminar"
        onClick={() => eliminarProducto(producto.uid)}
        aria-label={`Eliminar ${producto.nombre || "producto"}`}
      >
        ✕
      </button>
    </div>
  );
}
