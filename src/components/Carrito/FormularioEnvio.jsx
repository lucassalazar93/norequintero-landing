// src/components/Carrito/FormularioEnvio.jsx
import React, { useState, useEffect } from "react";
import { jsPDF } from "jspdf"; // ✅ Generar PDF
import { comunasMedellin } from "../../data/comunasMedellin";

export default function FormularioEnvio({
  formData,
  setFormData,
  productos,
  subtotal,
  setCostoDomicilio,
  setTotalFinal,
}) {
  const [errores, setErrores] = useState({});
  const [sinCobertura, setSinCobertura] = useState(false);
  const [costoDomicilio, setCosto] = useState(0);

  // 🔄 Calcular domicilio y total
  useEffect(() => {
    let costo = 0;
    let sinCob = false;

    if (formData.comuna && formData.barrio) {
      const barrioData = comunasMedellin[formData.comuna].find(
        (b) => b.nombre === formData.barrio
      );
      if (barrioData?.costo === null) {
        sinCob = true;
      } else {
        costo = barrioData?.costo ?? 0;
      }
    }

    if (subtotal >= 100000) costo = 0;

    setSinCobertura(sinCob);
    setCosto(costo);
    setCostoDomicilio(costo);
    setTotalFinal(subtotal + costo);
  }, [
    formData.comuna,
    formData.barrio,
    subtotal,
    setCostoDomicilio,
    setTotalFinal,
  ]);

  // 🔄 Manejar inputs
  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    validarCampo(name, value);
  };

  // 🔍 Validaciones
  const validarCampo = (name, value) => {
    let error = "";
    switch (name) {
      case "nombre":
      case "apellido":
        if (!/^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]{2,30}$/.test(value)) {
          error = "Debe contener solo letras y mínimo 2 caracteres.";
        }
        break;
      case "celular":
        if (!/^[0-9]{10}$/.test(value)) {
          error = "Debe tener exactamente 10 dígitos.";
        }
        break;
      case "direccion":
        if (!/^[A-Za-z0-9#\-\s]{5,50}$/.test(value)) {
          error = "Debe ser una dirección válida.";
        }
        break;
      case "correo":
        if (value && !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)) {
          error = "Debe ser un correo válido.";
        }
        break;
      default:
        break;
    }
    setErrores((prev) => ({ ...prev, [name]: error }));
  };

  // ✅ Validar formulario
  const esFormularioValido = () => {
    const camposObligatorios = [
      "nombre",
      "apellido",
      "celular",
      "direccion",
      "comuna",
      "barrio",
      "metodo",
    ];
    return camposObligatorios.every(
      (campo) => formData[campo] && !errores[campo]
    );
  };

  // ✅ Calcular totales con promos
  const calcularTotalProducto = (p) => {
    let precioUnitario = p.precio ?? p.presentacion?.precio ?? 0;
    if (p.promo?.tipo === "descuento" && precioUnitario > 0) {
      precioUnitario = precioUnitario - (precioUnitario * p.promo.valor) / 100;
    }
    let total = precioUnitario * (p.cantidad || 1);
    if (p.promo?.tipo === "2x1" && precioUnitario > 0) {
      const pares = Math.floor((p.cantidad || 1) / 2);
      const impares = (p.cantidad || 1) % 2;
      total = (pares + impares) * precioUnitario;
    }
    return { precioUnitario, total };
  };

  // ✅ Generar WhatsApp con TODOS los datos
  const generarMensajeWhatsApp = () => {
    let mensaje = `*🍰 Pedido desde la página NoreQuintero*\n\n`;

    productos.forEach((p) => {
      const { total } = calcularTotalProducto(p);
      mensaje += `• *${p.nombre}* ${
        p.presentacion ? `(${p.presentacion.tipo})` : ""
      } x${p.cantidad} - *$${total.toLocaleString("es-CO")}*\n`;
    });

    mensaje += `\n📦 *Subtotal:* $${subtotal.toLocaleString("es-CO")}\n`;
    mensaje += `🚚 *Domicilio:* ${
      subtotal >= 100000
        ? "Gratis 🎉"
        : sinCobertura
        ? "🚫 Sin cobertura"
        : `$${costoDomicilio.toLocaleString("es-CO")}`
    }\n`;
    mensaje += `💰 *Total:* $${(subtotal + costoDomicilio).toLocaleString(
      "es-CO"
    )}\n\n`;

    mensaje += `👤 *Cliente:* ${formData.nombre} ${formData.apellido}\n`;
    mensaje += `📱 Celular: ${formData.celular}\n`;
    mensaje += `🏠 Dirección: ${formData.direccion}\n`;
    if (formData.correo) mensaje += `✉️ Correo: ${formData.correo}\n`;
    mensaje += `🏙️ Comuna: ${formData.comuna}\n`;
    mensaje += `📍 Barrio: ${formData.barrio}\n`;
    mensaje += `💳 Método de pago: ${formData.metodo}\n`;

    return `https://wa.me/573507881893?text=${encodeURIComponent(mensaje)}`;
  };

  // ✅ Generar PDF
  const generarPDF = () => {
    const doc = new jsPDF();
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.text("🍰 Comprobante de Pedido - NoreQuintero", 20, 20);

    let y = 40;
    doc.setFontSize(12);

    productos.forEach((p) => {
      const { total } = calcularTotalProducto(p);
      doc.text(
        `• ${p.nombre} (${p.presentacion?.tipo || "—"}) x${
          p.cantidad
        } - $${total.toLocaleString("es-CO")}`,
        20,
        y
      );
      y += 10;
    });

    y += 5;
    doc.text(`📦 Subtotal: $${subtotal.toLocaleString("es-CO")}`, 20, y);
    y += 10;
    doc.text(
      `🚚 Domicilio: ${
        subtotal >= 100000
          ? "Gratis"
          : `$${costoDomicilio.toLocaleString("es-CO")}`
      }`,
      20,
      y
    );
    y += 10;
    doc.text(
      `💰 Total: $${(subtotal + costoDomicilio).toLocaleString("es-CO")}`,
      20,
      y
    );
    y += 20;

    doc.text("👤 Datos del cliente:", 20, y);
    y += 10;
    doc.text(`Nombre: ${formData.nombre} ${formData.apellido}`, 20, y);
    y += 10;
    doc.text(`Celular: ${formData.celular}`, 20, y);
    y += 10;
    doc.text(`Dirección: ${formData.direccion}`, 20, y);
    y += 10;
    if (formData.correo) {
      doc.text(`Correo: ${formData.correo}`, 20, y);
      y += 10;
    }
    doc.text(`Comuna: ${formData.comuna}`, 20, y);
    y += 10;
    doc.text(`Barrio: ${formData.barrio}`, 20, y);
    y += 10;
    doc.text(`Método de pago: ${formData.metodo}`, 20, y);

    doc.save("Pedido_NoreQuintero.pdf");
  };

  // 🚀 Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!esFormularioValido() || sinCobertura) {
      alert("⚠️ Debes corregir errores o verificar cobertura antes de enviar.");
      return;
    }
    // 1. WhatsApp
    window.open(generarMensajeWhatsApp(), "_blank");
    // 2. PDF (por ahora deshabilitado)
    // generarPDF();
  };

  return (
    <form className="formulario" onSubmit={handleSubmit}>
      <h2>Datos de entrega</h2>

      {/* Nombre y Apellido */}
      <div className="grupo">
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={formData.nombre}
          onChange={handleInput}
          required
        />
        <input
          type="text"
          name="apellido"
          placeholder="Apellido"
          value={formData.apellido}
          onChange={handleInput}
          required
        />
      </div>

      {/* Celular */}
      <input
        type="tel"
        name="celular"
        placeholder="Celular"
        value={formData.celular}
        onChange={handleInput}
        required
      />

      {/* Dirección */}
      <input
        type="text"
        name="direccion"
        placeholder="Dirección"
        value={formData.direccion}
        onChange={handleInput}
        required
      />

      {/* Correo */}
      <input
        type="email"
        name="correo"
        placeholder="Correo electrónico (opcional)"
        value={formData.correo || ""}
        onChange={handleInput}
      />

      {/* Comuna */}
      <select
        name="comuna"
        value={formData.comuna}
        onChange={(e) => {
          handleInput(e);
          setFormData((prev) => ({ ...prev, barrio: "" }));
        }}
        required
      >
        <option value="">Selecciona tu comuna</option>
        {Object.keys(comunasMedellin).map((comuna) => (
          <option key={comuna} value={comuna}>
            {comuna}
          </option>
        ))}
      </select>

      {/* Barrio */}
      {formData.comuna && (
        <select
          name="barrio"
          value={formData.barrio}
          onChange={handleInput}
          required
        >
          <option value="">Selecciona tu barrio</option>
          {comunasMedellin[formData.comuna].map((b) => (
            <option key={b.nombre} value={b.nombre}>
              {b.nombre}
            </option>
          ))}
        </select>
      )}

      {/* Método de pago */}
      <label>Método de pago:</label>
      <select
        name="metodo"
        value={formData.metodo}
        onChange={handleInput}
        required
      >
        <option value="">Selecciona un método</option>
        <option value="Transferencia">Transferencia</option>
        <option value="Efectivo">Efectivo</option>
      </select>

      <button type="submit" className="boton-finalizar">
        Finalizar pedido → WhatsApp + PDF
      </button>
    </form>
  );
}
