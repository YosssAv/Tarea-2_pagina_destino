import React from 'react';

export function RecommendedPlaces({ destination }) {
  return (
    <div className="section-card">
      <h3>
        <span className="section-icon">🗺️</span>
        Lugares Recomendados
      </h3>
      <ul className="places-list">
        {destination.nearbyPlaces.map((place, index) => (
          <li key={index}>
            <strong>{place}</strong>
            <span>Lugar cercano recomendado</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
