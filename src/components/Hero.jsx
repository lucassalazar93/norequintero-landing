import { motion } from "framer-motion";
import "../styles/Hero.css";
import pastel from "../assets/sobre-nosotros.jpg";

export default function Hero() {
  // 🔹 Función para scroll suave
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero" id="inicio">
      {/* Contenido izquierdo */}
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="hero-label">Fresco • Artesanal • Diario</span>
        <h1 className="hero-title">El arte del postre gourmet</h1>
        <p className="hero-subtitle">By: Nore Quintero</p>
        <p className="hero-text">
          Este es el lugar donde cada bocado es un abrazo, donde lo dulce se
          convierte en recuerdo, y donde tus momentos más especiales encuentran
          su sabor perfecto. Bienvenido a tu refugio de felicidad.
        </p>

        {/* 🚚 Comunicado de promoción */}
        <motion.div
          className="hero-promo"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <span>🎁 ¡Envío GRATIS en compras superiores a</span>
          <strong> $100.000</strong>
        </motion.div>

        {/* Botones */}
        <div className="hero-buttons">
          <button className="btn-primary" onClick={() => handleScroll("promo")}>
            Promociones ✨
          </button>
          <button
            className="btn-secondary"
            onClick={() => handleScroll("postres")}
          >
            Ver menú 🍰
          </button>
        </div>

        {/* Reseñas */}
        <div className="hero-review">
          ⭐⭐⭐⭐⭐ Más de 500 clientes felices nos califican con <b>4.9/5</b>
        </div>
      </motion.div>

      {/* Imagen derecha */}
      <motion.div
        className="hero-image"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.3 }}
      >
        <img src={pastel} alt="Pastel artesanal" />
      </motion.div>

      {/* Decoraciones */}
      <div className="circle pink"></div>
      <div className="circle yellow"></div>
      <div className="circle blue"></div>
    </section>
  );
}
