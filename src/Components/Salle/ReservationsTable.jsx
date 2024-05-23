import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ReservationsTable.css'; 
import Edit from '../Images/Edit.png';
import deleteIcon from '../Images/delete.jpg'; 

const ReservationsTable = () => {
  const [reservations, setReservations] = useState([]);
  const [selectedReservation, setSelectedReservation] = useState(null);
  const [newStatus, setNewStatus] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await axios.get('https://localhost:7258/api/Reservations');
        setReservations(response.data);
      } catch (error) {
        console.error('Error fetching reservations:', error);
      }
    };

    fetchReservations();
  }, []);

  const handleStatusChange = (reservation) => {
    setSelectedReservation(reservation);
    setNewStatus(reservation.status);
    setShowModal(true);
  };

  const handleConfirmChange = async () => {
    if (selectedReservation) {
      try {
        await axios.put(`https://localhost:7258/api/Reservations/${selectedReservation.id}`, {
          id: selectedReservation.id,
          status: newStatus
        });
        setReservations(prevReservations =>
          prevReservations.map(reservation =>
            reservation.id === selectedReservation.id ? { ...reservation, status: newStatus } : reservation
          )
        );
        setShowModal(false);
      } catch (error) {
        console.error('Error updating status:', error);
      }
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://localhost:7258/api/Reservations/${id}`);
      setReservations(prevReservations => prevReservations.filter(reservation => reservation.id !== id));
    } catch (error) {
      console.error('Error deleting reservation:', error);
    }
  };

  return (
    <div className="reservations-table-container">
      <h1 className="tabletitle">Reservations Table</h1> 
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Date de réservation</th>
            <th>Début de réservation</th>
            <th>Fin de réservation</th>
            <th>État</th>
            <th>N° salle</th>
            <th>Nom de Professeur</th>
            <th>Prénom de Professeur</th>
            <th>Actions</th> {/* Added Actions column */}
          </tr>
        </thead>
        <tbody>
          {reservations.map(reservation => (
            <tr key={reservation.id}>
              <td>{reservation.id}</td>
              <td>{reservation.dateRes}</td>
              <td>{reservation.heureDebut}</td>
              <td>{reservation.heureFin}</td>
              <td>
                <span>{reservation.status}</span>
                <button className="status-button" onClick={() => handleStatusChange(reservation)}>
                  <img src={Edit} alt="Edit" className="status-icon" />
                </button>
              </td>
              <td>{reservation.salle}</td>
              <td>{reservation.professeurNom}</td>
              <td>{reservation.professeurPrenom}</td>
              <td> {/* Actions column */}
              <button className="delete-button" onClick={() => handleDelete(reservation.id)}>
                    <img src={deleteIcon} alt="Delete" className="delete-icon" />
                  </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Change Status</h2>
            <select value={newStatus} onChange={(e) => setNewStatus(e.target.value)}>
              <option value="Approuvé">Approuvé</option>
              <option value="En Attente">En Attente</option>
              <option value="Refusé">Refusé</option>
            </select>
            <button onClick={handleConfirmChange} className="confirm-button">Confirmer</button>
            <button onClick={() => setShowModal(false)} className="close-button">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReservationsTable;
