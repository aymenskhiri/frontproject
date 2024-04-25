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
      // Add further logic (e.g., show success message, update UI)
    } catch (error) {
      console.error('Error creating Salle:', error);
      // Handle error (e.g., show error message)
    }
  };

  return (
    <div>
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
  );
};

export default CreateSalle;
