import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// 🔹 Componentes principales
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cinta from "./components/Cinta";
import Catalogo from "./components/Catalogo";
import PromoTemporada from "./components/PromoTemporada"; // 👈 nuevo
import SobreNosotros from "./components/SobreNosotros";
import Embudo from "./components/Embudo";
import Footer from "./components/Footer";
import Carrito from "./components/Carrito/Carrito";

// 🔹 Data
import promociones from "./data/promociones"; // 👈 data para promos

// 🔹 Páginas legales
import PoliticaPrivacidad from "./pages/PoliticaPrivacidad";
import TerminosCondiciones from "./pages/TerminosCondiciones";
import PoliticaCookies from "./pages/PoliticaCookies";

export default function App() {
  // 🛒 Estado global del carrito
  const [productosCarrito, setProductosCarrito] = useState([]);
  const [carritoAbierto, setCarritoAbierto] = useState(false);

  // ➕ Agregar producto al carrito
  const addToCart = (producto) => {
    setProductosCarrito((prev) => {
      const index = prev.findIndex(
        (p) =>
          p.id === producto.id &&
          p.presentacion === (producto.presentacion || null)
      );

      if (index >= 0) {
        // ✅ Si ya existe → aumentar cantidad
        const nuevoCarrito = [...prev];
        nuevoCarrito[index].cantidad += 1;
        return nuevoCarrito;
      }

      // ➕ Si no existe → agregar nuevo
      return [...prev, { ...producto, cantidad: 1 }];
    });
  };

  // 📊 Contador total de productos
  const cartCount = productosCarrito.reduce((acc, p) => acc + p.cantidad, 0);

  return (
    <Router>
      {/* 🔝 Navbar */}
      <Navbar
        cartCount={cartCount}
        onCartOpen={() => setCarritoAbierto(true)}
      />

      <Routes>
        {/* 🏠 Página principal */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Cinta />
              <Catalogo onAddToCart={addToCart} />

              {/* 🎁 Promociones de temporada con empaques */}
              <PromoTemporada
                promociones={promociones}
                onAddToCart={addToCart}
              />

              <SobreNosotros />
              <Embudo />
            </>
          }
        />

        {/* 📜 Páginas legales */}
        <Route path="/privacidad" element={<PoliticaPrivacidad />} />
        <Route path="/terminos" element={<TerminosCondiciones />} />
        <Route path="/cookies" element={<PoliticaCookies />} />
      </Routes>

      {/* 🔻 Footer */}
      <Footer />

      {/* 🛒 Carrito modal */}
      {carritoAbierto && (
        <Carrito
          onClose={() => setCarritoAbierto(false)}
          productos={productosCarrito}
          setProductos={setProductosCarrito}
        />
      )}
    </Router>
  );
}
