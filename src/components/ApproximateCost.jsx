import React from 'react';

export function ApproximateCost({ destination }) {
  const costLevels = {
    '$': 'Muy económico (menos de $50)',
    '$$': 'Económico ($50-150)',
    '$$$': 'Medio ($150-300)',
    '$$$$': 'Caro (más de $300)'
  };

  return (
    <div className="section-card">
      <h3>
        <span className="section-icon">💵</span>
        Costo Aproximado
      </h3>
      <div className="cost-content">
        <div>Costo por día: <strong>{destination.costPerDay}</strong> aprox.</div>
        <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#999' }}>
          {costLevels[destination.costPerDay]}
        </p>
      </div>
    </div>
  );
}
