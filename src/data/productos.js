const productos = [
  {
    id: 1,
    nombre: "Pavé de Leche Klim",
    descripcion:
      "Suave y cremoso pavé elaborado con leche Klim, capas de galleta y un toque artesanal que derrite el corazón.",
    precio: 28900,
    presentaciones: [],
    imagen: "/public/productos/pave-leche-klim.jpg",
    popular: true,
    promo: null,
  },
  {
    id: 2,
    nombre: "Torta Red Velvet",
    descripcion:
      "Clásica torta Red Velvet, esponjosa y aterciopelada, con un delicado relleno y cobertura de crema de queso.",
    precio: 38900,
    presentaciones: [],
    imagen: "/public/productos/torta_red_velvet.jpg",
    popular: true,
    promo: {
      tipo: "descuento",
      valor: 20, // 🔥 20% OFF
      descripcion: "20% OFF solo esta semana 🎉",
    },
  },
  {
    id: 3,
    nombre: "Alfajores Artesanales",
    descripcion:
      "Suaves galletas rellenas de dulce de leche y cubiertas con un delicado toque de azúcar glas.",
    precio: null,
    presentaciones: [{ tipo: "Caja x6", precio: 12000 }],
    imagen: "/public/productos/alfajores.png",
    popular: false,
    promo: {
      tipo: "2x1",
      valor: null,
      descripcion: "¡Llévate 2 y paga 1!",
    },
  },
  {
    id: 4,
    nombre: "Gourmet Cupcakes",
    descripcion:
      "Cupcakes artesanales decorados con amor y sabores irresistibles.",
    precio: null,
    presentaciones: [
      { tipo: "Unid x1", precio: 8000 },
      { tipo: "Domo x2", precio: 13000 },
      { tipo: "Domo x3", precio: 24000 },
      { tipo: "Caja x6", precio: 36000 },
    ],
    imagen: "/public/productos/cupkate.jpg",
    popular: false,
    promo: null,
  },
  {
    id: 5,
    nombre: "Gourmet Cupcakes Premiun",
    descripcion:
      "Cupcakes premiun rellenos decorados con amor y sabores irresistibles.",
    precio: null,
    presentaciones: [
      { tipo: "Unid x1", precio: 10000 },
      { tipo: "Domo x2", precio: 18000 },
      { tipo: "Domo x3", precio: 24000 },
      { tipo: "Caja x6", precio: 45000 },
    ],
    imagen: "/public/productos/cupkate-premiun.png",
    popular: true,
    promo: null,
  },
  {
    id: 6,
    nombre: "Cheesecake de Frutos Amarillos",
    descripcion:
      "Delicioso cheesecake artesanal con base crocante y una cubierta fresca de frutos amarillos tropicales.",
    precio: null,
    presentaciones: [
      { tipo: "Porción individual", precio: 12000 },
      { tipo: "Mini Cheesecake", precio: 25000 },
      { tipo: "Tamaño familiar", precio: 48000 },
    ],
    imagen: "/assets/productos/Cheesecake_frutos_amarillos.png",
    popular: false,
    promo: null,
  },
  {
    id: 7,
    nombre: "Cheesecake de Frutos Rojos",
    descripcion:
      "Cheesecake artesanal con base crocante y una fresca mezcla de frutos rojos que aportan un toque ácido y dulce irresistible.",
    precio: null,
    presentaciones: [
      { tipo: "Porción individual", precio: 12000 },
      { tipo: "Mini Cheesecake", precio: 25000 },
      { tipo: "Tamaño familiar", precio: 48000 },
    ],
    imagen: "/public/productos/Cheesecake_frutos_rojos.png",
    popular: true,
    promo: {
      tipo: "especial",
      valor: null,
      descripcion: "Incluye empaque de regalo 🎁 en compras familiares",
    },
  },
  {
    id: 8,
    nombre: "Cheesecake de Oreo",
    descripcion:
      "Cremoso cheesecake con base de galleta Oreo, relleno suave y trozos de galleta, coronado con más galletas trituradas para un sabor irresistible.",
    precio: null,
    presentaciones: [
      { tipo: "Porción individual", precio: 12000 },
      { tipo: "Mini Cheesecake", precio: 26000 },
      { tipo: "Tamaño familiar", precio: 50000 },
    ],
    imagen: "/public/productos/cheesecake_oreo.png",
    popular: true,
    promo: null,
  },
  {
    id: 9,
    nombre: "Cheesecake de Limón",
    descripcion:
      "Refrescante cheesecake artesanal con base crocante y una cremosa mezcla de limón, coronado con ralladura cítrica para un sabor único.",
    precio: null,
    presentaciones: [
      { tipo: "Porción individual", precio: 11000 },
      { tipo: "Mini Cheesecake", precio: 23000 },
      { tipo: "Tamaño familiar", precio: 46000 },
    ],
    imagen: "/public/productos/cheesecake_limon.png",
    popular: true,
    promo: null,
  },
  {
    id: 10,
    nombre: "Cheesecake de Milo",
    descripcion:
      "Irresistible cheesecake artesanal con base crocante, cremoso relleno y un toque único de Milo que conquista a grandes y pequeños.",
    precio: null,
    presentaciones: [
      { tipo: "Porción individual", precio: 12000 },
      { tipo: "Mini Cheesecake", precio: 26000 },
      { tipo: "Tamaño familiar", precio: 49000 },
    ],
    imagen: "/public/productos/cheesecake_milo.png",
    popular: false,
    promo: null,
  },
];

export default productos;
