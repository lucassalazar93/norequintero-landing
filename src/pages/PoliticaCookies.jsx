import React from "react";
import "../styles/legal.css";

const PoliticaCookies = () => {
  return (
    <section className="legal-page">
      <div className="container">
        <h1>Política de Cookies</h1>
        <p>
          Utilizamos cookies para mejorar tu experiencia en{" "}
          <strong>Nore Quintero Gourmet</strong>, analizar el tráfico del sitio
          y personalizar contenido.
        </p>
        <h2>1. ¿Qué son las cookies?</h2>
        <p>
          Son pequeños archivos de texto que se almacenan en tu navegador para
          recordar tus preferencias y mejorar la navegación.
        </p>
        <h2>2. Tipos de cookies que usamos</h2>
        <ul>
          <li>
            <strong>Cookies esenciales:</strong> necesarias para el
            funcionamiento del sitio.
          </li>
          <li>
            <strong>Cookies analíticas:</strong> nos ayudan a mejorar el sitio
            mediante estadísticas.
          </li>
          <li>
            <strong>Cookies de marketing:</strong> para mostrarte ofertas
            relevantes.
          </li>
        </ul>
        <h2>3. Cómo gestionarlas</h2>
        <p>
          Puedes desactivar o eliminar cookies desde la configuración de tu
          navegador en cualquier momento.
        </p>
      </div>
    </section>
  );
};

export default PoliticaCookies;
