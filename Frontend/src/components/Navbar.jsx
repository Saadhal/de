import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useSession } from '../hooks/SessionContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {session, logoutUser} = useSession();


  return (
    <nav className="navbar">
      {/* <div className="nav-brand">
        <Link to="/" className="brand-link">
          <div className="logo">
            <svg viewBox="0 0 24 24" className="logo-icon">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" fill="none"/>
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="#0083b0"/>
              <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" fill="#0083b0"/>
              <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" fill="#00b4db"/>
            </svg>
          </div>
          <div className="brand-text">
            <span className="brand-name">DentalCare</span>
            <span className="brand-slogan">Votre sourire, notre priorité</span>
          </div>
        </Link>
      </div> */}

      <button 
        className="menu-toggle"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
      </button>

      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li>
          <Link to="/" className="nav-link">Accueil</Link>
        </li>
        {session && (
          <>
            <li>
              <Link to="/booking" className="nav-link">Réservation</Link>
            </li>
            <li>
              <Link to="/calendar" className="nav-link">Calendrier</Link>
            </li>
            <li>
              <Link to="/patient" className="nav-link">Patients</Link>
            </li>
            <li>
              <Link to="/admin" className="nav-link admin-link">Admin</Link>
            </li>
          </>
        )}
        {!session && (
          <li>
            <Link to="/login" className="nav-link">Connexion</Link>
          </li>
        )}
        {session && (
          <li>
            <button className="nav-link" onClick={logoutUser} style={{background: 'none', border: 'none', cursor: 'pointer'}}>Déconnexion</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar; 