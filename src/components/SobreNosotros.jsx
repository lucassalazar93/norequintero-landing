import React from "react";
import "../styles/SobreNosotros.css";
import imgHistoria from "../assets/sobre-nosotros.jpg";

const SobreNosotros = () => {
  return (
    <section className="sobre-nosotros" id="sobre-nosotros">
      <div className="contenido">
        {/* Imagen con sello */}
        <div className="imagen">
          <img src={imgHistoria} alt="Postres artesanales" />
          <div className="sello">
            <span>100%</span>
            <small>Satisfacción</small>
          </div>
        </div>

        {/* Texto */}
        <div className="texto">
          <span className="etiqueta">Nuestra historia</span>
          <h2>Elaborado con pasión, servido con amor.</h2>
          <p>
            Desde hace más de 8 años, Nore se ha dedicado con pasión a la
            gastronomía, creando postres artesanales que endulzan cada ocasión
            especial. Su talento y amor por la repostería combinan técnicas
            tradicionales con un toque innovador, dando como resultado delicias
            que no solo conquistan la vista, sino también el paladar.
          </p>
          <p>
            Cada postre nace de la riqueza de nuestra tierra: frutas tropicales
            colombianas de la mejor calidad, acompañadas de ingredientes
            selectos que garantizan frescura y sabor incomparable. Es nuestra
            manera de transformar lo natural en experiencias dulces y
            memorables.
          </p>

          {/* Métricas */}
          <div className="metricas">
            <div>
              <span>8+</span>
              <p>Años de excelencia</p>
            </div>
            <div>
              <span>500+</span>
              <p>Clientes felices</p>
            </div>
            <div>
              <span>Fresco</span>
              <p>Hecho diariamente</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreNosotros;
