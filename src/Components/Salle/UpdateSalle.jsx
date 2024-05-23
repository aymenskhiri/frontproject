// UpdateSalle.jsx
import React, { useState } from 'react';
import axios from 'axios';
import './Salle.css'; // Import the new CSS file

const UpdateSalle = ({ salle, onUpdateSuccess, onClose }) => {
  const [capacite, setCapacite] = useState(salle.capacité);
  const [numSalle, setNumSalle] = useState(salle.numSalle);

  const handleUpdateSalle = async () => {
    try {
      const updatedSalle = {
        Id: salle.id,
        capacité: capacite,
        numSalle: numSalle
      };
      const response = await axios.put(`https://localhost:7258/api/Salle/${salle.id}`, updatedSalle);
      console.log('Salle updated:', response.data);
      onUpdateSuccess(); // Call the success callback
      onClose(); // Close the modal
    } catch (error) {
      console.error('Error updating Salle:', error);
      // Handle error
    }
  };

  return (
    <div className="update-salle-modal-background">
      <div className="update-salle-modal-container">
        <div className="update-salle-modal-content">
          <h2>Modifier Salle</h2>
          <div className="update-salle-input-container">
            <label htmlFor="capaciteInput">Nouvelle Capacité:</label>
            <input
              id="capaciteInput"
              type="number"
              value={capacite}
              onChange={(e) => setCapacite(e.target.value)}
              className="update-salle-modal-input"
            />
          </div>
          <div className="update-salle-input-container">
            <label htmlFor="numSalleInput">Nouveau Numéro de Salle:</label>
            <input
              id="numSalleInput"
              type="text"
              value={numSalle}
              onChange={(e) => setNumSalle(e.target.value)}
              className="update-salle-modal-input"
            />
          </div>
          <div className="update-salle-modal-buttons">
            <button onClick={handleUpdateSalle} className="update-salle-modal-button">Enregistrer</button>
            <button onClick={onClose} className="update-salle-modal-button">Fermer</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateSalle;
