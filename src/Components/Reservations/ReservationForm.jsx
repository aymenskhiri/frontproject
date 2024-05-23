import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Reservations/Reservations.css';

const ReservationForm = ({ salleId, onSubmitSuccess }) => {
  const [dateRes, setDateRes] = useState('');
  const [heureDebut, setHeureDebut] = useState('');
  const [heureFin, setHeureFin] = useState('');
  const [error, setError] = useState('');
  const [idProf, setIdProf] = useState(null);

  useEffect(() => {
    const storedIdProf = localStorage.getItem('Id_Prof');
    if (!storedIdProf) {
      setError('Id_Prof not found. Please log in again.');
    } else {
      console.log(`Retrieved idProf from localStorage: ${storedIdProf}`);
      setIdProf(parseInt(storedIdProf));
    }
  }, []);

  const handleReservationSubmit = async (event) => {
    event.preventDefault();
  
    const reservationData = {
      dateRes: dateRes,
      heureDebut: heureDebut,
      heureFin: heureFin,
      idSalle: salleId,
      idProf: localStorage.getItem('Id_Prof')
    };
  
    console.log("Sending reservation data:", reservationData); 
  
    try {
      const response = await axios.post('https://localhost:7258/api/Reservations', reservationData);
      console.log('Reservation created successfully:', response.data);
    } catch (error) {
      console.error('Error creating reservation:', error);
    }
  };
  

  return (
    <div>
      <div className='t'>
        <h2>Créer une réservation</h2>
      </div>
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
          Début de réservation :
          <input
            type="time"
            value={heureDebut}
            onChange={(e) => setHeureDebut(e.target.value)}
          />
        </label>
        <br />
        <label>
          Fin de reservation :
          <input
            type="time"
            value={heureFin}
            onChange={(e) => setHeureFin(e.target.value)}
          />
        </label>
        <br />
        <div className="submit-res">
          <button type="submit">Réserver</button>
        </div>
      </form>
    </div>
  );
};

export default ReservationForm;
