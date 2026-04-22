import React from 'react';

export function Activities({ destination }) {
  return (
    <div className="section-card">
      <h3>
        <span className="section-icon">📍</span>
        Actividades para Hacer
      </h3>
      <ul className="activities-list">
        {destination.activities.map((activity, index) => (
          <li key={index}>
            <strong>{activity.name}</strong>
            <span>{activity.description}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
