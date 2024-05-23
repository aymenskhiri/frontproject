// ReservationModal.jsx
import React from 'react';
import ReservationForm from './ReservationForm';
import './Reservations.css'; // Import the CSS file for styling

const ReservationModal = ({ salleId, onClose }) => {
  const handleReservationSubmit = async () => {
    // Handle successful reservation (e.g., close modal)
    onClose();
  };

  return (
    <div className="modal-background">
      <div className="modal-container">
        <div className="modal-content">
          <h2 className='t'>Réservation pour la salle {salleId}</h2>
          <div className="reservation-form-container">
            <ReservationForm salleId={salleId} onSubmitSuccess={handleReservationSubmit} />
          </div>
          <button className="close" onClick={onClose}>Fermer</button>
        </div>
      </div>
    </div>
  );
};

export default ReservationModal;
