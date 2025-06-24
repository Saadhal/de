import React from 'react';
import AppointmentForm from '../components/AppointmentForm';
import './Booking.css';

const Booking = () => {
  return (
    <div className="main-content">
      <div className="booking-page">
        <h1>Prendre rendez-vous</h1>
        <AppointmentForm />
      </div>
    </div>
  );
};

export default Booking;
