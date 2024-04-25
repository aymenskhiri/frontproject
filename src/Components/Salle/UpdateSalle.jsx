import React, { useState } from 'react';
import axios from 'axios';
import './Salle.css';

const UpdateSalle = ({ salle, onUpdateSuccess, onClose }) => {
  const [capacite, setCapacite] = useState(salle.capacité);
  const [numSalle, setNumSalle] = useState(salle.numSalle);

  const handleUpdateSalle = async () => {
    try {
      const updatedSalle = {
        Id:salle.id,
        capacité: capacite,
        numSalle: numSalle
      };
      const response = await axios.put(`https://localhost:7247/api/Salle/${salle.id}`, updatedSalle);
      console.log('Salle updated:', response.data);
      onUpdateSuccess(); // Call the success callback
      onClose(); // Close the modal
    } catch (error) {
      console.error('Error updating Salle:', error);
      // Handle error
    }
  };

  return (
    <div className="modal-background">
      <div className="modal-container">
        <div className="modal-content">
          <h2>Modifier Salle</h2>
          <label>
            Nouvelle Capacité:
            <input
              type="number"
              value={capacite}
              onChange={(e) => setCapacite(e.target.value)}
            />
          </label>
          <label>
            Nouveau Numéro de Salle:
            <input
              type="text"
              value={numSalle}
              onChange={(e) => setNumSalle(e.target.value)}
            />
          </label>
          <div className="modal-buttons">
            <button onClick={handleUpdateSalle}>Enregistrer</button>
            <button onClick={onClose}>Fermer</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateSalle;
