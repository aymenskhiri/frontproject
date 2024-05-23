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
import Footer from './Footer/Footer';
import Navbar from './Components/NavBar/Navbar';
import ReservationsTable from './Components/Salle/ReservationsTable';
import MyReservations from './Components/Reservations/MyResvations';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/MyReservations" element={<MyReservations />} />
          <Route path="/ReservationsTable" element={<ReservationsTable />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/create-salle" element={<CreateSalle />} />
          <Route path="/update-salle" element={<UpdateSalle />} />
          <Route path="/delete-salle" element={<DeleteSalle />} />
          <Route path="/reservation-form" element={<ReservationForm />} />
          <Route path="/reservation-list" element={<SallesReservations />} />
          <Route path="/reservation-modal" element={<ReservationModal />} />
          <Route path="/salle-list-page" element={<SalleListPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
