import React, { useState } from 'react';
import axios from 'axios';

const ReservationForm = () => {
  const [dateRes, setDateRes] = useState('');
  const [heureDebut, setHeureDebut] = useState('');
  const [heureFin, setHeureFin] = useState('');
  const [salleId, setSalleId] = useState('');
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
      id_Salle: parseInt(salleId),
    };

    try {
      const response = await axios.post('https://localhost:7247/api/Reservations', reservationData);
      console.log('Reservation created:', response.data);
      // Reset form fields after successful reservation
      setDateRes('');
      setHeureDebut('');
      setHeureFin('');
      setSalleId('');
      setError('');
    } catch (error) {
      console.error('Error creating reservation:', error);
      setError('Failed to create reservation. Please try again.');
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
        <label>
          Salle ID:
          <input
            type="number"
            value={salleId}
            onChange={(e) => setSalleId(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Reserve</button>
      </form>
    </div>
  );
};

export default ReservationForm;
