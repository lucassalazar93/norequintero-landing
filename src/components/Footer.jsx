import React from "react";
import "../styles/Footer.css";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* 🌸 Columna 1 */}
        <div className="footer-col">
          <h4>Delicias dulces</h4>
          <p>
            Creamos recuerdos inolvidables con postres artesanales hechos con
            ingredientes de la más alta calidad.
          </p>
          <div className="footer-social">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* ⚡ Columna 2 */}
        <div className="footer-col">
          <h4>Enlaces rápidos</h4>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <a href="#postres">Nuestros postres</a>
            </li>
            <li>
              <a href="#sobre-nosotros">Sobre nosotros</a>
            </li>
            <li>
              <a href="#contacto">Contacto</a>
            </li>
          </ul>
        </div>

        {/* 🎂 Columna 3 */}
        <div className="footer-col">
          <h4>Servicios</h4>
          <ul>
            <li>
              <a href="#tortas">Tortas a tu medida</a>
            </li>
            <li>
              <a href="#cupcakes">Cupcakes artesanales</a>
            </li>
            <li>
              <a href="#eventos">Repostería para eventos</a>
            </li>
            <li>
              <a href="#domicilio">Servicio a domicilio</a>
            </li>
          </ul>
        </div>

        {/* 📍 Columna 4 */}
        <div className="footer-col">
          <h4>Contacto</h4>
          <ul>
            <li>
              <FaMapMarkerAlt /> Buenos Aires, Medellín
            </li>
            <li>
              <a href="tel:+573507881893">
                <FaPhoneAlt /> 350 7881893
              </a>
            </li>
            <li>
              <a href="mailto:norequintero.gourmet@gmail.com">
                <FaEnvelope /> norequintero.gourmet@gmail.com
              </a>
            </li>
            <li>
              <FaClock /> Atención personalizada
            </li>
          </ul>
        </div>
      </div>

      {/* 🌐 Línea inferior */}
      <div className="footer-bottom">
        <p>© 2025 NoreQuintero. Todos los derechos reservados.</p>
        <div className="footer-links">
          <Link to="/privacidad">Política de privacidad</Link>
          <Link to="/terminos">Términos y condiciones</Link>
          <Link to="/cookies">Política de cookies</Link>
        </div>
      </div>

      {/* ✨ Créditos de diseño */}
      <div className="footer-creditos">
        <p>
          Diseñado por{" "}
          <a
            href="https://lukbyte.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lucas Salazar
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
