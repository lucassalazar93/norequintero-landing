// ✅ Importamos las imágenes locales desde src/assets/productos
import pave from "../assets/productos/pave-leche-klim.jpg";
import redVelvet from "../assets/productos/torta_red_velvet.jpg";
import alfajores from "../assets/productos/alfajores.png";
import cupcakes from "../assets/productos/cupkate.jpg";
import cupcakesPremiun from "../assets/productos/cupkate-premiun.png";
import cheesecakeAmarillos from "../assets/productos/Cheesecake_frutos_amarillos.png";
import cheesecakeRojos from "../assets/productos/Cheesecake_frutos_rojos.png";
import cheesecakeOreo from "../assets/productos/cheesecake_oreo.png";
import cheesecakeLimon from "../assets/productos/cheesecake_limon.png";
import cheesecakeMilo from "../assets/productos/cheesecake_milo.png";
import tortaZanahoria from "../assets/productos/torta-zanahoria.png";
import tartaVazca from "../assets/productos/tarta-vazca.png";
import tortaChocolate from "../assets/productos/torta-chocolate.png";
import tortaArequipe from "../assets/productos/torta-arequipe.png";
import pannaFrutosAmarillos from "../assets/productos/pannacota-frutosAmarillos.png";
import pannaFrutosRojos from "../assets/productos/pannacotta-frutosRojos.png";
import pannabaileys from "../assets/productos/pannacotta-baileys.png";
import pannaDurazno from "../assets/productos/panna-durazno.png";
import cupcakesCanelaLimon from "../assets/productos/CupcakesCanelaLimón.png";
import cupcakesFiestaOreo from "../assets/productos/cupcakes-fiesta-oreo.png";
import cupcakesVainillaCereza from "../assets/productos/cupcakes-vainilla-cereza.png";
import cupcakesVainillaChips from "../assets/productos/cupcakes-vainilla-chips.png";
import cupcakesChocolate from "../assets/productos/cupcakes-chocolate.png";
import cupcakesFerrero from "../assets/productos/cupcakes-ferrero.png";
import cupcakesRedVelvet from "../assets/productos/cupcakes-redvelvet.png";
import paveMilo from "../assets/productos/pave-milo.png";
import brownie from "../assets/productos/brownie.png";

const productos = [
  {
    id: 1,
    categoria: "Individuales",
    ordenCategoria: 5,
    nombre: "Pavé de Leche Klim",
    descripcion:
      "Suave y cremoso pavé elaborado con leche Klim, capas de galleta y un toque artesanal que derrite el corazón.",
    precio: null,
    presentaciones: [
      { tipo: "Personal", precio: 15000 },
      { tipo: "Cont. 12 porciones", precio: 100000 },
    ],
    imagen: pave,
    popular: true,
    promo: null,
  },
  {
    id: 2,
    categoria: "Tortas",
    ordenCategoria: 1,
    nombre: "Torta Red Velvet",
    descripcion:
      "Clásica torta Red Velvet, esponjosa y aterciopelada, con un delicado relleno y cobertura de crema de queso.",
    precio: null,
    presentaciones: [
      { tipo: "2 porciones", precio: 18000 },
      { tipo: "6 porciones", precio: 35000 },
      { tipo: "10 porciones", precio: 65000 },
    ],
    imagen: redVelvet,
    popular: true,
    promo: {
      tipo: "descuento",
      valor: 20,
      descripcion: "20% OFF solo esta semana 🎉",
    },
  },

  {
    id: 3,
    categoria: "Individuales",
    ordenCategoria: 5,
    nombre: "Alfajores Artesanales",
    descripcion:
      "Suaves galletas rellenas de dulce de leche y cubiertas con un delicado toque de azúcar glas.",
    precio: null,
    presentaciones: [{ tipo: "Caja x6", precio: 12000 }],
    imagen: alfajores,
    popular: false,
    promo: {
      tipo: "2x1",
      valor: null,
      descripcion: "¡Llévate 2 y paga 1!",
    },
  },
  {
    id: 4,
    categoria: "Cupcakes",
    ordenCategoria: 2,
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
    imagen: cupcakes,
    popular: false,
    promo: null,
  },
  {
    id: 5,
    categoria: "Cupcakes",
    ordenCategoria: 2,
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
    imagen: cupcakesPremiun,
    popular: true,
    promo: null,
  },
  {
    id: 6,
    categoria: "Cheesecakes",
    ordenCategoria: 3,
    nombre: "Cheesecake de Frutos Amarillos",
    descripcion:
      "Delicioso cheesecake artesanal con base crocante y una cubierta fresca de frutos amarillos tropicales.",
    precio: null,
    presentaciones: [
      { tipo: "Porción individual", precio: 12000 },
      { tipo: "10 porciones", precio: 80000 },
      { tipo: "14 porciones", precio: 95000 },
    ],
    imagen: cheesecakeAmarillos,
    popular: false,
    promo: null,
  },

  {
    id: 7,
    categoria: "Cheesecakes",
    ordenCategoria: 3,
    nombre: "Cheesecake de Frutos Rojos",
    descripcion:
      "Cheesecake artesanal con base crocante y una fresca mezcla de frutos rojos que aportan un toque ácido y dulce irresistible.",
    precio: null,
    presentaciones: [
      { tipo: "Porción individual", precio: 12000 },
      { tipo: "10 porciones", precio: 80000 },
      { tipo: "14 porciones", precio: 95000 },
    ],
    imagen: cheesecakeRojos,
    popular: true,
    promo: {
      tipo: "especial",
      valor: null,
      descripcion: "Incluye empaque de regalo 🎁 en compras familiares",
    },
  },

  {
    id: 8,
    categoria: "Cheesecakes",
    ordenCategoria: 3,
    nombre: "Cheesecake de Oreo",
    descripcion:
      "Cremoso cheesecake con base de galleta Oreo, relleno suave y trozos de galleta, coronado con más galletas trituradas para un sabor irresistible.",
    precio: null,
    presentaciones: [
      { tipo: "Porción individual", precio: 12000 },
      { tipo: "10 porciones", precio: 80000 },
      { tipo: "14 porciones", precio: 95000 },
    ],
    imagen: cheesecakeOreo,
    popular: true,
    promo: null,
  },

  {
    id: 9,
    categoria: "Cheesecakes",
    ordenCategoria: 3,
    nombre: "Cheesecake de Limón",
    descripcion:
      "Refrescante cheesecake artesanal con base crocante y una cremosa mezcla de limón, coronado con ralladura cítrica para un sabor único.",
    precio: null,
    presentaciones: [
      { tipo: "Porción individual", precio: 12000 },
      { tipo: "10 porciones", precio: 80000 },
      { tipo: "14 porciones", precio: 95000 },
    ],
    imagen: cheesecakeLimon,
    popular: true,
    promo: null,
  },

  {
    id: 10,
    categoria: "Cheesecakes",
    ordenCategoria: 3,
    nombre: "Cheesecake de Milo",
    descripcion:
      "Irresistible cheesecake artesanal con base crocante, cremoso relleno y un toque único de Milo que conquista a grandes y pequeños.",
    precio: null,
    presentaciones: [
      { tipo: "Porción individual", precio: 12000 },
      { tipo: "10 porciones", precio: 80000 },
      { tipo: "14 porciones", precio: 95000 },
    ],
    imagen: cheesecakeMilo,
    popular: false,
    promo: null,
  },

  {
    id: 11,
    categoria: "Tortas",
    ordenCategoria: 1,
    nombre: "Torta de Zanahoria",
    descripcion:
      "Deliciosa torta de zanahoria artesanal, húmeda y esponjosa, con especias suaves y cobertura cremosa que enamora en cada bocado.",
    precio: null,
    presentaciones: [
      { tipo: "2 porciones", precio: 18000 },
      { tipo: "6 porciones", precio: 35000 },
      { tipo: "10 porciones", precio: 65000 },
    ],
    imagen: tortaZanahoria,
    popular: false,
    promo: null,
  },
  {
    id: 12,
    categoria: "Tortas",
    ordenCategoria: 1,
    nombre: "Tarta Vazca",
    descripcion:
      "Exquisita tarta vasca artesanal, suave y cremosa en su interior con un toque dorado en la superficie, ideal para los paladares más exigentes.",
    precio: null,
    presentaciones: [
      { tipo: "2 porciones", precio: 18000 },
      { tipo: "6 porciones", precio: 35000 },
      { tipo: "10 porciones", precio: 65000 },
    ],
    imagen: tartaVazca,
    popular: false,
    promo: null,
  },
  {
    id: 13,
    categoria: "Tortas",
    ordenCategoria: 1,
    nombre: "Torta de Chocolate",
    descripcion:
      "Clásica torta de chocolate artesanal, húmeda y esponjosa, con un intenso sabor a cacao que conquista a todos.",
    precio: null,
    presentaciones: [
      { tipo: "2 porciones", precio: 18000 },
      { tipo: "6 porciones", precio: 35000 },
      { tipo: "10 porciones", precio: 65000 },
    ],
    imagen: tortaChocolate,
    popular: false,
    promo: null,
  },
  {
    id: 14,
    categoria: "Tortas",
    ordenCategoria: 1,
    nombre: "Torta de Vainilla y Arequipe",
    descripcion:
      "Suave torta artesanal de vainilla rellena y cubierta con arequipe, una combinación clásica y deliciosa que encanta a todos.",
    precio: null,
    presentaciones: [
      { tipo: "2 porciones", precio: 18000 },
      { tipo: "6 porciones", precio: 35000 },
      { tipo: "10 porciones", precio: 65000 },
    ],
    imagen: tortaArequipe,
    popular: false,
    promo: null,
  },
  {
    id: 15,
    categoria: "Pannacotta",
    ordenCategoria: 4,
    nombre: "Pannacotta de Frutos Amarillos",
    descripcion:
      "Delicada panacota artesanal de textura cremosa, acompañada de una fresca mezcla de frutos amarillos tropicales.",
    presentaciones: [{ tipo: "8oz", precio: 15000 }],
    imagen: pannaFrutosAmarillos,
    popular: false,
    promo: null,
  },
  {
    id: 16,
    categoria: "Pannacotta",
    ordenCategoria: 4,
    nombre: "Panacota de Frutos Rojos",
    descripcion:
      "Panacota artesanal de textura suave y cremosa, coronada con una mezcla fresca de frutos rojos que equilibran dulzura y acidez.",
    presentaciones: [{ tipo: "8oz", precio: 15000 }],
    imagen: pannaFrutosRojos,
    popular: false,
    promo: null,
  },
  {
    id: 17,
    categoria: "Pannacotta",
    ordenCategoria: 4,
    nombre: "Panacota de Baileys",
    descripcion:
      "Exquisita panacota artesanal con un toque de licor Baileys, cremosa y sofisticada, ideal para los paladares que buscan un postre único.",
    presentaciones: [{ tipo: "8oz", precio: 15000 }],
    imagen: pannabaileys,
    popular: false,
    promo: null,
  },
  {
    id: 18,
    categoria: "Pannacotta",
    ordenCategoria: 4,
    nombre: "Panacota de Durazno",
    descripcion:
      "Panacota artesanal suave y cremosa, acompañada de trozos frescos de durazno que aportan dulzura natural y un toque frutal irresistible.",
    presentaciones: [{ tipo: "8oz", precio: 15000 }],
    imagen: pannaDurazno,
    popular: false,
    promo: null,
  },
  {
    id: 19,
    categoria: "Pannacotta",
    ordenCategoria: 4,
    nombre: "Panacota de Frutos Rojos",
    descripcion:
      "Panacota artesanal de textura suave y cremosa, coronada con una mezcla fresca de frutos rojos que equilibran dulzura y acidez.",
    presentaciones: [{ tipo: "8oz", precio: 15000 }],
    imagen: pannaFrutosRojos,
    popular: false,
    promo: null,
  },
  {
    id: 20,
    categoria: "Cupcakes",
    ordenCategoria: 2,
    nombre: "Cupcakes Canela y Limón",
    descripcion:
      "Deliciosos cupcakes artesanales con un toque de canela y ralladura de limón, combinando frescura y aroma en cada bocado.",
    precio: null,
    presentaciones: [
      { tipo: "Unid x1", precio: 8000 },
      { tipo: "Domo x2", precio: 13000 },
      { tipo: "Domo x3", precio: 24000 },
      { tipo: "Caja x6", precio: 36000 },
    ],
    imagen: cupcakesCanelaLimon,
    popular: false,
    promo: null,
  },
  {
    id: 21,
    categoria: "Cupcakes",
    ordenCategoria: 2,
    nombre: "Cupcakes Fiesta de Oreo",
    descripcion:
      "Irresistibles cupcakes artesanales con trozos de galleta Oreo en la masa y una cobertura cremosa coronada con más galleta triturada. ¡Una fiesta de sabor en cada bocado!",
    precio: null,
    presentaciones: [
      { tipo: "Unid x1", precio: 8000 },
      { tipo: "Domo x2", precio: 13000 },
      { tipo: "Domo x3", precio: 24000 },
      { tipo: "Caja x6", precio: 36000 },
    ],
    imagen: cupcakesFiestaOreo,
    popular: true,
    promo: null,
  },
  {
    id: 22,
    categoria: "Cupcakes",
    ordenCategoria: 2,
    nombre: "Cupcakes Vainilla y Cereza",
    descripcion:
      "Esponjosos cupcakes de vainilla con un delicado relleno y cobertura de cereza, una combinación fresca y elegante que encanta a todos.",
    precio: null,
    presentaciones: [
      { tipo: "Unid x1", precio: 8000 },
      { tipo: "Domo x2", precio: 13000 },
      { tipo: "Domo x3", precio: 24000 },
      { tipo: "Caja x6", precio: 36000 },
    ],
    imagen: cupcakesVainillaCereza,
    popular: false,
    promo: null,
  },
  {
    id: 23,
    categoria: "Cupcakes",
    ordenCategoria: 2,
    nombre: "Cupcakes Vainilla con Chips de Chocolate",
    descripcion:
      "Esponjosos cupcakes de vainilla rellenos de chips de chocolate, una combinación clásica y perfecta para los amantes del dulce.",
    precio: null,
    presentaciones: [
      { tipo: "Unid x1", precio: 8000 },
      { tipo: "Domo x2", precio: 13000 },
      { tipo: "Domo x3", precio: 24000 },
      { tipo: "Caja x6", precio: 36000 },
    ],
    imagen: cupcakesVainillaChips,
    popular: false,
    promo: null,
  },
  {
    id: 24,
    categoria: "Cupcakes",
    ordenCategoria: 2,
    nombre: "Cupcakes de Chocolate",
    descripcion:
      "Clásicos cupcakes de chocolate artesanal, suaves y húmedos, con un sabor intenso a cacao que enamora a todos.",
    precio: null,
    presentaciones: [
      { tipo: "Unid x1", precio: 8000 },
      { tipo: "Domo x2", precio: 13000 },
      { tipo: "Domo x3", precio: 24000 },
      { tipo: "Caja x6", precio: 36000 },
    ],
    imagen: cupcakesChocolate,
    popular: true,
    promo: null,
  },
  {
    id: 25,
    categoria: "Cupcakes",
    ordenCategoria: 2,
    nombre: "Cupcakes Ferrero Rocher",
    descripcion:
      "Exquisitos cupcakes premium rellenos y decorados con trozos de Ferrero Rocher, una experiencia única de sabor y lujo en cada bocado.",
    precio: null,
    presentaciones: [
      { tipo: "Unid x1", precio: 10000 },
      { tipo: "Domo x2", precio: 18000 },
      { tipo: "Domo x3", precio: 24000 },
      { tipo: "Caja x6", precio: 45000 },
    ],
    imagen: cupcakesFerrero,
    popular: true,
    promo: null,
  },
  {
    id: 26,
    categoria: "Cupcakes",
    ordenCategoria: 2,
    nombre: "Cupcakes Red Velvet",
    descripcion:
      "Delicados cupcakes Red Velvet con su característico color aterciopelado, esponjosos y acompañados de un suave glaseado de crema.",
    precio: null,
    presentaciones: [
      { tipo: "Unid x1", precio: 8000 },
      { tipo: "Domo x2", precio: 13000 },
      { tipo: "Domo x3", precio: 24000 },
      { tipo: "Caja x6", precio: 36000 },
    ],
    imagen: cupcakesRedVelvet,
    popular: false,
    promo: null,
  },
  {
    id: 27,
    categoria: "Individuales",
    ordenCategoria: 5,
    nombre: "Pavé de Milo",
    descripcion:
      "Suave y cremoso pavé artesanal con el inconfundible sabor de Milo, capas de galleta y un toque irresistible que encanta a grandes y pequeños.",
    precio: null,
    presentaciones: [
      { tipo: "Personal", precio: 15000 },
      { tipo: "Cont. 12 porciones", precio: 110000 },
    ],
    imagen: paveMilo,
    popular: false,
    promo: null,
  },
  {
    id: 29,
    categoria: "Individuales",
    ordenCategoria: 5,
    nombre: "Brownie artesanal",
    descripcion:
      "Irresistible brownie artesanal de chocolate, suave por dentro y con una ligera capa crocante por fuera.",
    precio: null,
    presentaciones: [
      { tipo: "1 unidad", precio: 6000 },
      { tipo: "Caja x4 unidades", precio: 18000 },
    ],
    imagen: brownie,
    popular: false,
    promo: null,
  },
  {
    id: 30,
    categoria: "Individuales",
    ordenCategoria: 5,
    nombre: "Pavé de Milo",
    descripcion:
      "Suave y cremoso pavé artesanal con el inconfundible sabor de Milo, capas de galleta y un toque irresistible que encanta a grandes y pequeños.",
    precio: null,
    presentaciones: [
      { tipo: "Personal", precio: 15000 },
      { tipo: "Cont. 12 porciones", precio: 110000 },
    ],
    imagen: paveMilo,
    popular: false,
    promo: null,
  },

  //{
  //  id: 28,
  // categoria: "Cheesecakes",
  // ordenCategoria: 3,
  // nombre: "Cheesecake de Frutos Amarillos",
  //  descripcion:
  //    "Delicioso cheesecake artesanal con base crocante y una cubierta fresca de frutos amarillos tropicales.",
  // precio: null,
  // presentaciones: [
  //   { tipo: "Porción individual", precio: 12000 },
  //   { tipo: "Mini Cheesecake", precio: 25000 },
  //    { tipo: "Tamaño familiar", precio: 48000 },
  // ],
  //  imagen: cheesecakeAmarillos,
  // popular: false,
  // promo: null,
  //},
  //{
  // id: 29,
  //  categoria: "Pannacotta",
  // ordenCategoria: 4,
  // nombre: "Pannacotta de Frutos Amarillos",
  // descripcion:
  //   "Delicada panacota artesanal de textura cremosa, acompañada de una fresca mezcla de frutos amarillos tropicales.",
  // precio: null,
  //  presentaciones: [{ tipo: "8oz", precio: 15000 }],
  //  imagen: pannaFrutosAmarillos,
  // popular: false,
  //  promo: null,
  // },
];

export default productos;
