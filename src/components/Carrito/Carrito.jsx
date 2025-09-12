// src/components/Carrito/Carrito.jsx
import React, { useState } from "react";
import "./Carrito.css";
import ProductoCarrito from "./ProductoCarrito";
import FormularioEnvio from "./FormularioEnvio";

export default function Carrito({ onClose, productos, setProductos }) {
  // 📋 Estado del formulario
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    celular: "",
    direccion: "",
    comuna: "",
    barrio: "",
    unidad: "",
    comentarios: "",
    metodo: "Transferencia",
    correo: "",
  });

  // 🚚 Costos
  const [costoDomicilio, setCostoDomicilio] = useState(0);
  const [totalFinal, setTotalFinal] = useState(0);

  // 🔄 Aumentar/disminuir cantidad
  const handleCantidad = (uid, delta) => {
    setProductos((prev) =>
      prev.map((p) =>
        p.uid === uid
          ? { ...p, cantidad: Math.max((p.cantidad || 1) + delta, 1) }
          : p
      )
    );
  };

  // ❌ Eliminar producto
  const eliminarProducto = (uid) => {
    setProductos((prev) => prev.filter((p) => p.uid !== uid));
  };

  // 💰 Subtotal
  const subtotal = productos.reduce((acc, p) => {
    const precioUnitario =
      (typeof p.precio === "number" && p.precio) ||
      (p.presentacion?.precio ?? 0);

    let precioFinal = precioUnitario;

    if (p.promo?.tipo === "descuento") {
      precioFinal = precioUnitario - (precioUnitario * p.promo.valor) / 100;
    }

    let totalItem = precioFinal * (p.cantidad || 1);

    if (p.promo?.tipo === "2x1") {
      const pares = Math.floor((p.cantidad || 1) / 2);
      const impares = (p.cantidad || 1) % 2;
      totalItem = (pares + impares) * precioFinal;
    }

    return acc + totalItem;
  }, 0);

  return (
    <div className="carrito-overlay">
      <div className="carrito-modal">
        {/* Cerrar */}
        <button className="carrito-cerrar" onClick={onClose}>
          ✕
        </button>

        <div className="carrito-container">
          {/* 🧁 Productos */}
          <div className="productos">
            <h2>Tu pedido</h2>

            {productos && productos.length > 0 ? (
              productos.map((p) => (
                <ProductoCarrito
                  key={p.uid}
                  producto={p}
                  handleCantidad={handleCantidad}
                  eliminarProducto={eliminarProducto}
                />
              ))
            ) : (
              <p className="carrito-vacio">Tu carrito está vacío 🍪</p>
            )}

            {/* Resumen de costos */}
            <div className="subtotal">
              <p>
                Subtotal: <strong>${subtotal.toLocaleString("es-CO")}</strong>
              </p>
              <p>
                Domicilio:{" "}
                <strong>
                  {costoDomicilio === 0
                    ? subtotal >= 100000
                      ? "Gratis 🎉"
                      : "Selecciona tu barrio"
                    : `$${costoDomicilio.toLocaleString("es-CO")}`}
                </strong>
              </p>
              <h3>
                Total a pagar:{" "}
                <span>
                  $
                  {totalFinal > 0
                    ? totalFinal.toLocaleString("es-CO")
                    : subtotal.toLocaleString("es-CO")}
                </span>
              </h3>
            </div>
          </div>

          {/* 📋 Formulario (sticky) */}
          <FormularioEnvio
            formData={formData}
            setFormData={setFormData}
            productos={productos}
            subtotal={subtotal}
            setCostoDomicilio={setCostoDomicilio}
            setTotalFinal={setTotalFinal}
          />
        </div>
      </div>
    </div>
  );
}
