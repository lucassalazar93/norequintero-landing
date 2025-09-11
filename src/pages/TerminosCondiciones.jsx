import React from "react";
import "../styles/legal.css";

const TerminosCondiciones = () => {
  return (
    <section className="legal-page">
      <div className="container">
        <h1>Términos y Condiciones</h1>
        <p>
          Al utilizar nuestro sitio web y realizar compras en{" "}
          <strong>Nore Quintero Gourmet</strong>, aceptas los siguientes
          términos y condiciones.
        </p>
        <h2>1. Uso del sitio</h2>
        <p>
          El contenido es únicamente para fines informativos y comerciales. Está
          prohibido el mal uso de la marca o de sus productos.
        </p>
        <h2>2. Pedidos y pagos</h2>
        <p>
          Todos los pedidos están sujetos a disponibilidad. Los pagos deben
          realizarse a través de los medios habilitados en la plataforma.
        </p>
        <h2>3. Envíos</h2>
        <p>
          Los tiempos de entrega pueden variar según la zona. Cualquier retraso
          será comunicado oportunamente.
        </p>
      </div>
    </section>
  );
};

export default TerminosCondiciones;
