import React from "react";
import "../styles/legal.css";

const PoliticaPrivacidad = () => {
  return (
    <section className="legal-page">
      <div className="container">
        <h1>Política de Privacidad</h1>
        <p>
          En <strong>Nore Quintero Gourmet</strong> respetamos tu privacidad y
          nos comprometemos a proteger tus datos personales. Esta política
          explica cómo recopilamos, usamos y protegemos tu información.
        </p>
        <h2>1. Información que recopilamos</h2>
        <p>
          Podemos recopilar tu nombre, correo electrónico, dirección de envío y
          número de teléfono cuando realizas un pedido o te suscribes a nuestras
          novedades.
        </p>
        <h2>2. Uso de la información</h2>
        <p>
          Tus datos se utilizan para procesar pedidos, enviar confirmaciones,
          ofrecer promociones y mejorar tu experiencia de usuario.
        </p>
        <h2>3. Protección de datos</h2>
        <p>
          Implementamos medidas de seguridad para proteger tus datos, aunque
          ningún sistema es 100% seguro.
        </p>
      </div>
    </section>
  );
};

export default PoliticaPrivacidad;
