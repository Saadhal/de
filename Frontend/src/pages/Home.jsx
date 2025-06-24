import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="main-content">
      <div className="home-page">
        <div className="hero-section">
          <h1>Bienvenue au Cabinet Dentaire</h1>
          <p>Des soins dentaires de qualité pour toute la famille</p>
          <Link to="/booking" className="cta-button">
            Prendre rendez-vous
          </Link>
        </div>
        
        <div className="services-section">
          <h2>Nos Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Soins Dentaires</h3>
              <p>Soins préventifs et curatifs pour maintenir votre santé bucco-dentaire.</p>
            </div>
            <div className="service-card">
              <h3>Orthodontie</h3>
              <p>Solutions orthodontiques pour un sourire parfait.</p>
            </div>
            <div className="service-card">
              <h3>Implants Dentaires</h3>
              <p>Restauration complète de vos dents manquantes.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
