import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../Images/logo.jpg';

const NavBar = () => {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [role, setRole] = useState('');

  useEffect(() => {
    const storedNom = localStorage.getItem('Nom');
    const storedPrenom = localStorage.getItem('Prenom');
    const storedRole = localStorage.getItem('Role');

    console.log('Retrieved from localStorage:', { storedNom, storedPrenom, storedRole });

    if (storedNom && storedPrenom && storedRole) {
      setNom(storedNom);
      setPrenom(storedPrenom);
      setRole(storedRole);
    } else {
      console.warn('No stored Nom, Prenom, or Role found');
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('Nom');
    localStorage.removeItem('Prenom');
    localStorage.removeItem('Id_Prof');
    localStorage.removeItem('Role');
    // Redirect to the login page
    window.location.href = '/login';
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="user-info">
        {nom && prenom ? (
          <span className='user-name'>Bienvenue !  {prenom} {nom}</span>
        ) : (
          <>
            <ul className="nav-list">
  <div className="nav-item">
    <NavItem to="/login" label="Login" />
  </div>
  <div className="nav-item">
    <NavItem to="/signup" label="Sign Up" />
  </div>
</ul>

          </>
        )}
      </div>
      <ul className="nav-list">
        {role === 'Professeur' && (
          <>
            <NavItem to="/reservation-list" label="Reservation List" />
            <NavItem to="/MyReservations" label="My Reservations" />
          </>
        )}
        {role === 'Admin' && (
          <>
            <NavItem to="/salle-list-page" label="Salle List Page" />
            <NavItem to="/ReservationsTable" label="Reservations Table" />
          </>
        )}
         { nom && prenom && (
          <LogoutButton onClick={handleLogout} />
        )}
      </ul>
    </nav>
  );
};

const NavItem = ({ to, label }) => {
  return (
    <li className="nav-item">
      <Link to={to} className="nav-link">
        {label}
      </Link>
    </li>
  );
};

const LogoutButton = ({ onClick }) => {
  return (
    <li className="nav-item logout">
      <button className="logout-btn" onClick={onClick}>
        Logout
      </button>
    </li>
  );
};

export default NavBar;
