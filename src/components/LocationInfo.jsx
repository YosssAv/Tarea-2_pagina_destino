import React from 'react';

export function LocationInfo({ destination }) {
  return (
    <div className="location-info">
      <h3>Información del Lugar</h3>
      <div className="location-name">{destination.location}</div>
      <p className="location-description">{destination.description}</p>
    </div>
  );
}
