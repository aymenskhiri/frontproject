import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReservationModal from './ReservationModal ';
import '../Reservations/Reservations.css'


const SallesReservations = () => {
  const [salles, setSalles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedSalleId, setSelectedSalleId] = useState(null); // State to store selected salleId

  useEffect(() => {
    const fetchSalles = async () => {
      try {
        const response = await axios.get('https://localhost:7258/api/Reservations/Salles');
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
     <div className="titresalle"> 
    <h2>Liste des Salles</h2>
    </div>
    <div className="list-container">
      {loading ? (
        <p>Chargement des Salles...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        salles.map((salle) => (
          <div key={salle.id} className="salle-frame">
            <p>Salle  {salle.numSalle} <br>
            </br>- Capacité : {salle.capacité}</p>
            <button onClick={() => handleOpenModal(salle.id)}>Réserver</button>
          </div>
        ))
      )}
    </div>

    {selectedSalleId && (
      <ReservationModal salleId={selectedSalleId} onClose={handleCloseModal} />
    )}
  </div>
  );
};

export default SallesReservations;
