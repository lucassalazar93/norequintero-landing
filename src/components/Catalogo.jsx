// src/components/Catalogo.jsx
import React from "react";
import { motion } from "framer-motion";
import productos from "../data/productos";
import "../styles/Catalogo.css";
import CarruselDestacados from "./CarruselDestacados";
import Promo from "./Promo";
import ProductCard from "./ProductCard";

const Catalogo = ({ onAddToCart }) => {
  const destacados = productos.filter((p) => p.popular);

  return (
    <section className="catalogo" id="postres">
      {/* 🔹 Encabezado premium */}
      <div className="catalogo-header">
        <h2>
          <span className="icon">🍰</span> Nuestras{" "}
          <span className="highlight">creaciones</span>
        </h2>
        <p>
          Obras dulces hechas a mano con amor y los mejores ingredientes. Una
          experiencia gourmet en cada bocado.
        </p>
      </div>

      {/* 🔹 1. Carrusel de destacados */}
      <section className="destacados-section">
        <CarruselDestacados productos={destacados} onAddToCart={onAddToCart} />
      </section>

      {/* 🔹 2. Catálogo completo */}
      <section className="catalogo-completo">
        <h2 className="subtitulo-catalogo"> Todos los productos</h2>
        <div className="catalogo-grid">
          {productos.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <ProductCard producto={p} onAddToCart={onAddToCart} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🔹 3. Promo final */}
      <Promo />
    </section>
  );
};

export default Catalogo;
