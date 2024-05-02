import React, { useState } from 'react';
import axios from 'axios';

const CreateSalle = () => {
  const [numSalle, setNumSalle] = useState('');
  const [capacité, setCapacite] = useState('');

  const handleCreateSalle = async () => {
    try {
      const response = await axios.post('https://localhost:7247/api/Salle/CreateSalle', {
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
    <div className="modal-background">
      <div className="modal-container">
        <div className="modal-content">
      <h2>Create New Salle</h2>
      <input
        type="text"
        placeholder="Salle Number"
        value={numSalle}
        onChange={(e) => setNumSalle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Capacity"
        value={capacité}
        onChange={(e) => setCapacite(e.target.value)}
      />
      <button onClick={handleCreateSalle}>Créer</button>
    </div>
    </div>
    </div>
  );
};

export default CreateSalle;
