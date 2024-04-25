import React from 'react';
import axios from 'axios';

const DeleteSalle = ({ salleId }) => {
  const handleDeleteSalle = async () => {
    try {
      const response = await axios.delete(`https://localhost:7247/api/Salle/${salleId}`);
      console.log('Salle deleted:', response.data);
      // Add further logic (e.g., show success message, update UI)
    } catch (error) {
      console.error('Error deleting Salle:', error);
      // Handle error (e.g., show error message)
    }
  };

  return (
    <div>
      
      <button onClick={handleDeleteSalle}>Supprimer</button>
    </div>
  );
};

export default DeleteSalle;


