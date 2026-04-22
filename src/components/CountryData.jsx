import React from 'react';

export function CountryData({ destination }) {
  return (
    <div className="country-data">
      <h3>Datos del País</h3>
      
      <div className="data-item">
        <div className="data-icon">🏛️</div>
        <div>
          <strong>Capital:</strong>
          <span>{destination.capital}</span>
        </div>
      </div>

      <div className="data-item">
        <div className="data-icon">💬</div>
        <div>
          <strong>Idioma:</strong>
          <span>{destination.language}</span>
        </div>
      </div>

      <div className="data-item">
        <div className="data-icon">💰</div>
        <div>
          <strong>Moneda:</strong>
          <span>{destination.currency}</span>
        </div>
      </div>
    </div>
  );
}
