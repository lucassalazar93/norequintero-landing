import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

// 🛒 Ícono carrito
function CartIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M7 18a2 2 0 100 4 2 2 0 000-4zm10 0a2 2 0 100 3.999A2 2 0 0017 18zM6.3 6l.84 6.03A3 3 0 0010.11 15h6.78a3 3 0 002.96-2.52l.84-5.48A1 1 0 0019.7 6H6.3zM4 4h1.38a1 1 0 01.98.8L7 7H20a1 1 0 110 2H7.23l.42 3.02A1 1 0 008.62 13h8.27a1 1 0 110 2H8.62a3 3 0 01-2.96-2.52L4.46 5.2A1 1 0 003.49 4H2a1 1 0 110-2h2a2 2 0 012 2z" />
    </svg>
  );
}

// 🍔 Ícono menú hamburguesa / cerrar
function MenuIcon({ open }) {
  return open ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M18.3 5.71L12 12l6.3 6.29-1.41 1.42L10.59 13.4 4.3 19.71 2.89 18.3 9.17 12 2.89 5.71 4.3 4.29l6.29 6.3 6.29-6.3z" />
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" />
    </svg>
  );
}

export default function Navbar({ cartCount = 0, onCartOpen }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Cierra el menú si la pantalla es grande
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 992) setMenuOpen(false);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const LINKS = [
    { label: "Inicio", href: "inicio" },
    { label: "Postres", href: "postres" },
    { label: "Sobre nosotros", href: "sobre-nosotros" },
    { label: "Contacto", href: "contacto" },
  ];

  // 🔹 Redirigir + scroll
  const handleNav = (id) => {
    if (location.pathname !== "/") {
      // 👉 Si no estoy en home, me voy a home con query ?section=id
      navigate(`/?section=${id}`);
    } else {
      // 👉 Si ya estoy en home, hago scroll directo
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <nav className="nav">
        {/* Logo */}
        <a
          href="/"
          className="nav__brand"
          onClick={(e) => {
            e.preventDefault();
            handleNav("inicio");
          }}
        >
          <img src="/logo.png" alt="NoreQuintero Logo" className="nav__logo" />
        </a>

        {/* Toggle móvil */}
        <button
          className="nav__toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          <MenuIcon open={menuOpen} />
        </button>

        {/* Links */}
        <ul className={`nav__links ${menuOpen ? "is-open" : ""}`}>
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={`#${link.href}`}
                className="nav__link"
                onClick={(e) => {
                  e.preventDefault();
                  handleNav(link.href);
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Carrito */}
        <div className="nav__actions">
          <button className="nav__cart" onClick={onCartOpen}>
            <CartIcon />
            <span>Carrito</span>
            {cartCount > 0 && <span className="nav__badge">{cartCount}</span>}
          </button>
        </div>
      </nav>

      {/* Overlay móvil */}
      {menuOpen && (
        <div className="nav__overlay" onClick={() => setMenuOpen(false)} />
      )}
    </header>
  );
}
