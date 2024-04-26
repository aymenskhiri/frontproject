import React, { useState } from 'react';
import axios from 'axios';

const ReservationForm = ({ salleId, onSubmitSuccess }) => {
  const [dateRes, setDateRes] = useState('');
  const [heureDebut, setHeureDebut] = useState('');
  const [heureFin, setHeureFin] = useState('');
  const [error, setError] = useState('');

  const handleReservationSubmit = async (e) => {
    e.preventDefault();
  
    if (!dateRes || !heureDebut || !heureFin || !salleId) {
      setError('Please fill out all fields.');
      return;
    }
  
    const reservationData = {
      dateRes,
      heureDebut,
      heureFin,
      id_Salle: salleId, // Ensure salleId is provided
    };
  
    try {
      const response = await axios.post('https://localhost:7247/api/Reservations', reservationData);
  
      console.log('Reservation created:', response.data);
  
      // Reset form fields after successful reservation
      setDateRes('');
      setHeureDebut('');
      setHeureFin('');
      setError('');
    } catch (error) {
      console.error('Error creating reservation:', error);
  
      if (error.response) {
        setError(`Error: ${error.response.data}`);
      } else if (error.request) {
        setError('Network error. Please try again.');
      } else {
        setError('Failed to create reservation. Please try again.');
      }
    }
  };
  

  return (
    <div>
      <h2>Make a Reservation</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleReservationSubmit}>
        <label>
          Date:
          <input
            type="date"
            value={dateRes}
            onChange={(e) => setDateRes(e.target.value)}
          />
        </label>
        <br />
        <label>
          Start Time:
          <input
            type="time"
            value={heureDebut}
            onChange={(e) => setHeureDebut(e.target.value)}
          />
        </label>
        <br />
        <label>
          End Time:
          <input
            type="time"
            value={heureFin}
            onChange={(e) => setHeureFin(e.target.value)}
          />
        </label>
        <br />
        {/* No input field for salleId here, using prop value directly */}
        <button type="submit">Reserve</button>
      </form>
    </div>
  );
};

export default ReservationForm;
