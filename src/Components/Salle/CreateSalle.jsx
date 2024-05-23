// CreateSalle.jsx
import React, { useState } from 'react';
import axios from 'axios';
import './Salle.css'; // Import the new CSS file

const CreateSalle = () => {
  const [numSalle, setNumSalle] = useState('');
  const [capacité, setCapacite] = useState('');

  const handleCreateSalle = async () => {
    try {
      const response = await axios.post('https://localhost:7258/api/Salle/CreateSalle', {
        numSalle,
        capacité
      });
      console.log('Salle created:', response.data);
      window.location.reload(); 
    } catch (error) {
      console.error('Error creating Salle:', error);
    }
  };

  return (
    <div className="create-salle-modal-background">
      <div className="create-salle-modal-container">
        <div className="create-salle-modal-content">
          <h2>Créer une nouvelle Salle</h2>
          <input
            type="text"
            placeholder="Salle Number"
            value={numSalle}
            onChange={(e) => setNumSalle(e.target.value)}
            className="create-salle-modal-input"
          />
          <input
            type="number"
            placeholder="Capacity"
            value={capacité}
            onChange={(e) => setCapacite(e.target.value)}
            className="create-salle-modal-input"
          />
          <button onClick={handleCreateSalle} className="create-salle-modal-button">Créer</button>
        </div>
      </div>
    </div>
  );
};

export default CreateSalle;
