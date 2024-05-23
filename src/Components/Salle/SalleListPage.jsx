import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UpdateSalle from './UpdateSalle';
import DeleteSalle from './DeleteSalle';
import CreateSalle from './CreateSalle';
import './Salle.css';

const SalleListPage = () => {
  const [salles, setSalles] = useState([]);
  const [selectedSalle, setSelectedSalle] = useState(null);
  const [showCreateForm, setShowCreateForm] = useState(false);

  useEffect(() => {
    fetchSalles();
  }, []);

  const fetchSalles = async () => {
    try {
      const response = await axios.get('https://localhost:7258/api/Salle');
      setSalles(response.data);
    } catch (error) {
      console.error('Error fetching Salles:', error);
    }
  };

  const handleDeleteSuccess = () => {
    fetchSalles();
  };

  const handleUpdateClick = (salle) => {
    setSelectedSalle(salle);
  };

  const handleUpdateSuccess = () => {
    setSelectedSalle(null);
    fetchSalles();
  };

  const handleCloseModal = () => {
    setSelectedSalle(null);
  };

  const handleCreateFormToggle = () => {
    setShowCreateForm(!showCreateForm); 
  };

  return (
    <div className="salle-list-page">
      <div className="salle-list-container">
        <h1 className="salle-title">Liste des Salles</h1>
        <div className="button-table-container">
          <button className="create-button" onClick={handleCreateFormToggle}>Créer une salle</button>
          {showCreateForm && <CreateSalle onCreateSuccess={fetchSalles} onClose={handleCreateFormToggle} />}
          <table className="salle-table">
            <thead>
              <tr>
                <th>Numéro de Salle</th>
                <th>Capacité</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {salles.map((salle) => (
                <tr key={salle.id}>
                  <td>{salle.numSalle}</td>
                  <td>{salle.capacité}</td>
                  <td>
                    <button className='mod' onClick={() => handleUpdateClick(salle)}>Modifier</button>
                    <DeleteSalle salleId={salle.id} onDeleteSuccess={handleDeleteSuccess} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {selectedSalle && (
          <UpdateSalle
            salle={selectedSalle}
            onUpdateSuccess={handleUpdateSuccess}
            onClose={handleCloseModal}
          />
        )}
      </div>
    </div>
  );
};

export default SalleListPage;
