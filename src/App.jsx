import { useState } from 'react';
import { UploadSection } from './components/UploadSection';
import { LocationInfo } from './components/LocationInfo';
import { CountryData } from './components/CountryData';
import { ApproximateCost } from './components/ApproximateCost';
import { Activities } from './components/Activities';
import { RecommendedPlaces } from './components/RecommendedPlaces';
import destinationsData from './data/destinations.json';
import './styles/main.css';

function App() {
  const [photoUrl, setPhotoUrl] = useState(null);
  const [currentDestinationIndex, setCurrentDestinationIndex] = useState(0);

  const currentDestination = destinationsData.destinations[currentDestinationIndex];

  const handlePhotoUpload = (url) => {
    setPhotoUrl(url);
  };

  const handlePreviousDestination = () => {
    setCurrentDestinationIndex((prev) =>
      prev === 0 ? destinationsData.destinations.length - 1 : prev - 1
    );
    setPhotoUrl(null);
  };

  const handleNextDestination = () => {
    setCurrentDestinationIndex((prev) =>
      prev === destinationsData.destinations.length - 1 ? 0 : prev + 1
    );
    setPhotoUrl(null);
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Descubre Tu Destino</h1>
      </header>

      <div className="container">
        {/* Sección de Carga de Foto */}
        <div className="upload-section">
          <h2>Sube una Foto del Lugar Turístico</h2>
          <div className="upload-container">
            <LocationInfo destination={currentDestination} />
            <UploadSection photoUrl={photoUrl} onPhotoUpload={handlePhotoUpload} />
            <CountryData destination={currentDestination} />
          </div>
        </div>

        {/* Secciones de Contenido */}
        <div className="sections-grid">
          <ApproximateCost destination={currentDestination} />
          <Activities destination={currentDestination} />
          <RecommendedPlaces destination={currentDestination} />
        </div>

        {/* Navegación entre destinos */}
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <button
            className="upload-button"
            onClick={handlePreviousDestination}
            style={{ marginRight: '1rem' }}
          >
            ← Destino Anterior
          </button>
          <span style={{ 
            color: '#666', 
            margin: '0 1rem',
            fontSize: '1rem'
          }}>
            Destino {currentDestinationIndex + 1} de {destinationsData.destinations.length}
          </span>
          <button
            className="upload-button"
            onClick={handleNextDestination}
            style={{ marginLeft: '1rem' }}
          >
            Siguiente Destino →
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
