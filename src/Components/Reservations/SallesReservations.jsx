import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReservationModal from './ReservationModal ';

const SallesReservations = () => {
  const [salles, setSalles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedSalleId, setSelectedSalleId] = useState(null); // State to store selected salleId

  useEffect(() => {
    const fetchSalles = async () => {
      try {
        const response = await axios.get('https://localhost:7247/api/Reservations/Salles');
        setSalles(response.data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching salles. Please try again.');
        setLoading(false);
      }
    };

    fetchSalles();
  }, []);

  const handleOpenModal = (salleId) => {
    setSelectedSalleId(salleId); // Set the selected salleId in state
  };

  const handleCloseModal = () => {
    setSelectedSalleId(null); // Reset selected salleId when modal is closed
  };

  return (
    <div>
      <h2>List of Available Salles</h2>
      {loading ? (
        <p>Loading salles...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <ul>
          {salles.map((salle) => (
            <li key={salle.id}>
              {salle.numSalle} - Capacity: {salle.capacité}
              <button onClick={() => handleOpenModal(salle.id)}>Reserve</button>
            </li>
          ))}
        </ul>
      )}

      {selectedSalleId && (
        <ReservationModal
          salleId={selectedSalleId}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default SallesReservations;
