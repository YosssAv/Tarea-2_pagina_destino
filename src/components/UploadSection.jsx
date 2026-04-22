import React, { useRef } from 'react';

export function UploadSection({ photoUrl, onPhotoUpload }) {
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        onPhotoUpload(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="photo-upload-area">
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
      />
      
      {photoUrl ? (
        <img src={photoUrl} alt="Foto del lugar turístico" className="photo-preview" />
      ) : (
        <>
          <div className="camera-icon">📷</div>
          <p>Sube tu foto aquí</p>
        </>
      )}
      
      <button className="upload-button" onClick={handleButtonClick}>
        Subir Foto
      </button>
    </div>
  );
}
