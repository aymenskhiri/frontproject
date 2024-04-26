import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/LoginSignup/Login';
import Signup from './Components/LoginSignup/Signup';
import CreateSalle from './Components/Salle/CreateSalle';
import UpdateSalle from './Components/Salle/UpdateSalle';
import DeleteSalle from './Components/Salle/DeleteSalle';
import SalleListPage from './Components/Salle/SalleListPage';
import SallesReservations from './Components/Reservations/SallesReservations';
import ReservationForm from './Components/Reservations/ReservationForm';
import ReservationModal from './Components/Reservations/ReservationModal ';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/CreateSalle" element={<CreateSalle />} />
        <Route path="/UpdateSalle" element={<UpdateSalle />} />
        <Route path="/DeleteSalle" element={<DeleteSalle />} />
        <Route path="/reservation-form" element={<ReservationForm />} />
        <Route path="/reservation-list" element={<SallesReservations />} />
        <Route path="/reservation-modal" element={<ReservationModal />} />
        
        <Route path="/" element={<SalleListPage />} />
      </Routes>
    </Router>
  );
};

export default App;
