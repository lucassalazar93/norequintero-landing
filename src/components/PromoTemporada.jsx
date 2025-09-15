// src/components/PromoTemporada.jsx
import React, { useState } from "react";
import "../styles/PromoTemporada.css";

const PromoTemporada = ({ promociones, onAddToCart }) => {
  // Estados globales por tarjeta (controlado por id)
  const [selectedOptions, setSelectedOptions] = useState({});
  const [expandedCards, setExpandedCards] = useState({});

  const toggleExpanded = (id) => {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleSelect = (id, value, promo) => {
    const opcion = promo.presentaciones.find((op) => op.tipo === value);
    setSelectedOptions((prev) => ({
      ...prev,
      [id]: opcion,
    }));
  };

  return (
    <section className="promo-temporada">
      {/* 🔹 Encabezado premium */}
      <div className="promo-header">
        <h2 className="seccion-titulo">
          <span className="icono-titulo"></span> Ediciones Gourmet de Temporada
        </h2>
        <p className="seccion-subtitulo">
          Ediciones limitadas con <strong>empaque artesanal</strong> para
          compartir dulces recuerdos con quienes más amas.
        </p>
      </div>

      {/* 🔹 Grid de promos */}
      <div className="promo-grid">
        {promociones.map((promo) => {
          const selected =
            selectedOptions[promo.id] || promo.presentaciones?.[0];
          const expanded = expandedCards[promo.id] || false;

          return (
            <div key={promo.id} className="promo-card">
              {/* Imagen + badge */}
              <div className="promo-img">
                <img src={promo.imagen} alt={promo.nombre} />
                {promo.etiqueta && (
                  <span className="promo-badge">{promo.etiqueta}</span>
                )}
              </div>

              {/* Contenido */}
              <div className="promo-body">
                <h3 className="promo-nombre">{promo.nombre}</h3>

                {/* Descripción con Ver más */}
                <p
                  className={`promo-descripcion ${
                    expanded ? "expanded" : "collapsed"
                  }`}
                >
                  {promo.descripcion}
                </p>
                {promo.descripcion.length > 90 && (
                  <button
                    className="ver-mas-btn"
                    onClick={() => toggleExpanded(promo.id)}
                  >
                    {expanded ? "Ver menos ▲" : "Descubrir edición →"}
                  </button>
                )}

                {/* Opciones */}
                {promo.presentaciones?.length > 0 && (
                  <div className="promo-select-box">
                    <label htmlFor={`select-${promo.id}`}>
                      Opciones disponibles:
                    </label>
                    <select
                      id={`select-${promo.id}`}
                      value={selected?.tipo}
                      onChange={(e) =>
                        handleSelect(promo.id, e.target.value, promo)
                      }
                    >
                      {promo.presentaciones.map((op, idx) => (
                        <option key={idx} value={op.tipo}>
                          {op.tipo} — ${op.precio.toLocaleString("es-CO")}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                {/* CTA */}
                <button
                  className="promo-btn"
                  onClick={() => {
                    if (!selected) return;
                    onAddToCart?.({
                      ...promo,
                      uid: `${promo.id}-${selected.tipo}`,
                      presentacion: selected,
                      cantidad: 1,
                    });
                  }}
                >
                  🛍️ Quiero {selected?.tipo} — $
                  {selected?.precio.toLocaleString("es-CO")}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PromoTemporada;
