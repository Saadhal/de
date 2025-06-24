import React, { useState } from 'react';

const AppointmentForm = () => {
  const [appointments, setAppointments] = useState([]);
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    appointmentDate: '',
    appointmentTime: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add new appointment to the array
    setAppointments(prevAppointments => [...prevAppointments, formData]);

    // Reset form
    setFormData({
      fullName: '',
      phoneNumber: '',
      appointmentDate: '',
      appointmentTime: ''
    });
  };

  return (
    <div className="appointment-form">
      <h2 style={{ color: '#2c3e50' }}>Prenez votre rendez-vous</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Nom complet :</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phoneNumber">Numéro de téléphone :</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="appointmentDate">Date du rendez-vous :</label>
          <input
            type="date"
            id="appointmentDate"
            name="appointmentDate"
            value={formData.appointmentDate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="appointmentTime">Heure du rendez-vous :</label>
          <input
            type="time"
            id="appointmentTime"
            name="appointmentTime"
            value={formData.appointmentTime}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Réserver le rendez-vous</button>
      </form>

      {/* Display appointments */}
      <div className="appointments-list">
        <h3>Rendez-vous réservés :</h3>
        {appointments.map((appointment, index) => (
          <div key={index} className="appointment-item">
            <p>Nom : {appointment.fullName}</p>
            <p>Téléphone : {appointment.phoneNumber}</p>
            <p>Date : {appointment.appointmentDate}</p>
            <p>Heure : {appointment.appointmentTime}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppointmentForm;
