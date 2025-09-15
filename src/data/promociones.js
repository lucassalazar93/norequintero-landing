import promoDuoVidrio from "../assets/promos/promo-duo-vidrio.png";
import promoAmor2 from "../assets/promos/promo-amor3.png";
import promoCupcakesAmor from "../assets/promos/promo-cupcakes-amor.png";
import promoCupcakesChoco3 from "../assets/promos/promo-cupcakes-choco3.png"; // ✅ corregido

const promociones = [
  {
    id: 102,
    nombre: "Duo Gourmet Amor & Amistad",
    descripcion:
      "✨ Incluye 2 postres artesanales de 8oz en envase de vidrio (puede ser panna cotta o cheesecake con frutos rojos o amarillos), presentados en una caja elegante con lazo 🎀.",
    presentaciones: [{ tipo: "Caja x2 frascos (8oz)", precio: 30000 }],
    imagen: promoDuoVidrio,
    etiqueta: "Edición Especial 💘",
  },
  {
    id: 103,
    nombre: "Caja Amor & Amistad",
    descripcion:
      "✨ Incluye 2 postres artesanales de 4oz (puede ser pavé, panna cotta, cheesecake, tiramisú o tres leches con fruta), presentados en una caja elegante con lazo 🎀.",
    presentaciones: [{ tipo: "Caja x2 unidades (4oz)", precio: 15000 }],
    imagen: promoAmor2,
    etiqueta: "Edición Especial 💝",
  },
  {
    id: 104,
    nombre: "Caja Cupcakes Amor & Amistad",
    descripcion:
      "✨ Caja con 6 cupcakes artesanales decorados con toppings especiales, perfectos para celebrar y compartir en Amor & Amistad. 🎀",
    presentaciones: [{ tipo: "Caja x6 cupcakes", precio: 30000 }],
    imagen: promoCupcakesAmor,
    etiqueta: "Edición Especial 💕",
  },
  {
    id: 106,
    nombre: "Amistad en 3 Bocados",
    descripcion:
      "✨ Caja con 3 cupcakes artesanales con chips de chocolate, horneados con amor y perfectos para regalar en Amor & Amistad. 💝",
    presentaciones: [{ tipo: "Caja x3 cupcakes", precio: 18000 }],
    imagen: promoCupcakesChoco3,
    etiqueta: "Edición Especial 💕",
  },
];

export default promociones;
