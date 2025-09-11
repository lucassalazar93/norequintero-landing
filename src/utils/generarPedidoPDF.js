import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";

export const generarPedidoPDF = ({
  productos,
  subtotal,
  costoDomicilio,
  formData,
}) => {
  const doc = new jsPDF();

  // 🔹 Logo
  const logoUrl = "/logo.png"; // asegúrate de tenerlo en public/logo.png
  doc.addImage(logoUrl, "PNG", 15, 10, 40, 20);

  // 🔹 Encabezado
  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.text("📋 Comprobante de Pedido - NoreQuintero", 70, 20);

  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  const fecha = new Date().toLocaleString("es-CO");
  doc.text(`Fecha: ${fecha}`, 150, 20);

  // 🔹 Datos cliente
  doc.text(`Cliente: ${formData.nombre} ${formData.apellido}`, 15, 40);
  doc.text(`Teléfono: ${formData.celular}`, 15, 46);
  doc.text(`Correo: ${formData.correo || "No informado"}`, 15, 52);
  doc.text(`Dirección: ${formData.direccion}`, 15, 58);
  doc.text(`Comuna: ${formData.comuna}`, 15, 64);
  doc.text(`Barrio: ${formData.barrio}`, 15, 70);

  // 🔹 Tabla productos
  autoTable(doc, {
    startY: 80,
    head: [["Producto", "Descripción", "Precio Unitario", "Cantidad", "Total"]],
    body: productos.map((p) => {
      const precioUnitario = p.precio ?? p.presentacion?.precio ?? 0;
      const total = precioUnitario * (p.cantidad || 1);
      return [
        p.nombre,
        p.presentacion?.tipo || "—",
        `$${precioUnitario.toLocaleString("es-CO")}`,
        p.cantidad,
        `$${total.toLocaleString("es-CO")}`,
      ];
    }),
    styles: { fontSize: 10 },
    headStyles: { fillColor: [184, 50, 96], textColor: 255, halign: "center" },
    columnStyles: {
      0: { cellWidth: 40 },
      1: { cellWidth: 40 },
      2: { halign: "right" },
      3: { halign: "center" },
      4: { halign: "right" },
    },
  });

  // 🔹 Totales
  let y = doc.lastAutoTable.finalY + 10;
  doc.setFont("helvetica", "bold");
  doc.text(`Subtotal: $${subtotal.toLocaleString("es-CO")}`, 140, y);
  y += 8;
  doc.text(
    `Domicilio: ${
      subtotal >= 100000
        ? "Gratis 🎉"
        : `$${costoDomicilio.toLocaleString("es-CO")}`
    }`,
    140,
    y
  );
  y += 8;
  doc.setFontSize(12);
  doc.text(
    `TOTAL A PAGAR: $${(subtotal + costoDomicilio).toLocaleString("es-CO")}`,
    140,
    y
  );

  // 🔹 Mensaje final
  y += 20;
  doc.setFont("helvetica", "italic");
  doc.setFontSize(13);
  doc.text("🙏 ¡Gracias por tu compra!", 70, y);
  y += 10;
  doc.setFontSize(11);
  doc.text("Síguenos en nuestras redes sociales:", 65, y);
  y += 8;
  doc.text("📸 Instagram: @norequintero", 70, y);
  y += 6;
  doc.text("📘 Facebook: NoreQuintero Oficial", 70, y);

  // ✅ Guardar
  doc.save("Pedido_NoreQuintero.pdf");
};
