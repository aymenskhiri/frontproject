import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './MyReservations.css';
import deleteIcon from '../Images/delete.jpg'; 
import editIcon from '../Images/Edit.png';

const MyReservations = () => {
  const [reservations, setReservations] = useState([]);
  const [salles, setSalles] = useState([]);
  const [error, setError] = useState('');
  const [editingReservation, setEditingReservation] = useState(null);
  const [editData, setEditData] = useState({ dateRes: '', heureDebut: '', heureFin: '' });

  useEffect(() => {
    const fetchReservationsAndSalles = async () => {
      const idProf = localStorage.getItem('Id_Prof');
      if (!idProf) {
        setError('Id_Prof not found. Please log in again.');
        return;
      }

      try {
        const reservationsResponse = await axios.get(`https://localhost:7258/api/Reservations/GetReservationsByProf/${idProf}`);
        setReservations(reservationsResponse.data);

        const sallesResponse = await axios.get('https://localhost:7258/api/Salle');
        setSalles(sallesResponse.data);
      } catch (error) {
        setError('Failed to fetch reservations or salles. Please try again.');
      }
    };

    fetchReservationsAndSalles();
  }, []);

  const getSalleNumber = (idSalle) => {
    const salle = salles.find(salle => salle.id === idSalle);
    return salle ? salle.numSalle : 'Unknown';
  };

  const handleDelete = async (reservationId) => {
    try {
      await axios.delete(`https://localhost:7258/api/Reservations/${reservationId}`);
      setReservations(reservations.filter(reservation => reservation.id !== reservationId));
    } catch (error) {
      setError('Failed to delete reservation. Please try again.');
    }
  };

  const handleEditClick = (reservation) => {
    setEditingReservation(reservation);
    setEditData({ dateRes: reservation.dateRes, heureDebut: reservation.heureDebut, heureFin: reservation.heureFin });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  const handleEditSubmit = async () => {
    if (!editingReservation) return;

    try {
      await axios.put(`https://localhost:7258/api/Reservations/EditReservation/${editingReservation.id}`, editData);
      setReservations(reservations.map(res => res.id === editingReservation.id ? { ...res, ...editData } : res));
      setEditingReservation(null);
    } catch (error) {
      setError('Failed to edit reservation. Please try again.');
    }
  };

  return (
    <div className="reservations-container">
      <h2>My Reservations</h2>
      {error && <p>{error}</p>}
      {reservations.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Date de réservation</th>
              <th>Début de réservation</th>
              <th>Fin de réservation</th>
              <th>N° salle</th>
              <th>État</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((reservation) => (
              <tr key={reservation.id}>
                <td>{reservation.dateRes}</td>
                <td>{reservation.heureDebut}</td>
                <td>{reservation.heureFin}</td>
                <td>{getSalleNumber(reservation.idSalle)}</td>
                <td>{reservation.status}</td>
                <td>
                  <button className="delete-button" onClick={() => handleDelete(reservation.id)}>
                    <img src={deleteIcon} alt="Delete" className="delete-icon" />
                  </button>
                  <button className="edit-button" onClick={() => handleEditClick(reservation)}>
                    <img src={editIcon} alt="Edit" className="edit-icon" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No reservations found.</p>
      )}

      {editingReservation && (
        <div className="modal">
          <div className="modal-content">
            <h2>Edit Reservation</h2>
            <label>
              Date de réservation:
              <input
                type="date"
                name="dateRes"
                value={editData.dateRes}
                onChange={handleEditChange}
              />
            </label>
            <label>
              Début de réservation:
              <input
                type="time"
                name="heureDebut"
                value={editData.heureDebut}
                onChange={handleEditChange}
              />
            </label>
            <label>
              Fin de réservation:
              <input
                type="time"
                name="heureFin"
                value={editData.heureFin}
                onChange={handleEditChange}
              />
            </label>
            <button className="save-button" onClick={handleEditSubmit}>Save</button>
            <button className="cancel-button" onClick={() => setEditingReservation(null)}>Cancel</button>

          </div>
        </div>
      )}
    </div>
  );
};

export default MyReservations;
