import React from 'react';
import ReservationForm from './ReservationForm';



const ReservationModal = ({ salleId, onClose }) => {
  const handleReservationSubmit = () => {
    // Handle successful reservation (e.g., close modal)
    onClose();
  };

  return (
    <div className="modal-background">
      <div className="modal-container">
        <div className="modal-content">
          <h2>Make a Reservation for Salle {salleId}</h2>
          <ReservationForm salleId={salleId} onSubmit={handleReservationSubmit} />
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default ReservationModal;
