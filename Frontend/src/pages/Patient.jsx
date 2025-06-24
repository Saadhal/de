import React, { useState, useEffect } from 'react';
import './Patient.css';
import { getAllPatients, createPatient } from '../services/patientService';

const Patient = () => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openDialog, setOpenDialog] = useState(false);
  const [form, setForm] = useState({ nom: '', prenom: '', telephone: '', dateNaissance: '', note: '' });

  useEffect(() => {
    getAllPatients()
      .then(setPatients)
      .finally(() => setLoading(false));
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPatient = await createPatient(form);
    setPatients([...patients, newPatient]);
    setForm({ nom: '', prenom: '', telephone: '', dateNaissance: '', note: '' });
    setOpenDialog(false);
  };

  if (loading) {
    return (
      <div className="main-content">
        <div className="loading">Chargement des patients...</div>
      </div>
    );
  }

  return (
    <div className="main-content">
      <div className="calendar-page">
        <h1>Liste des Patients</h1>
        <button className="add-patient-btn" onClick={() => setOpenDialog(true)} style={{marginBottom: '1rem'}}>Ajouter un patient</button>
        {openDialog && (
          <div className="modal" style={{background: 'rgba(0,0,0,0.2)', position: 'fixed', top:0, left:0, right:0, bottom:0, display:'flex', alignItems:'center', justifyContent:'center', zIndex:1000}}>
            <form onSubmit={handleSubmit} style={{background:'#fff', padding:24, borderRadius:8, minWidth:320, boxShadow:'0 2px 8px rgba(0,0,0,0.15)'}}>
              <h2>Ajouter un patient</h2>
              <div className="form-group">
                <label>Nom :</label>
                <input name="nom" value={form.nom} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Prénom :</label>
                <input name="prenom" value={form.prenom} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Téléphone :</label>
                <input name="telephone" value={form.telephone} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Date de naissance :</label>
                <input name="dateNaissance" type="date" value={form.dateNaissance} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Notes :</label>
                <textarea name="note" value={form.note} onChange={handleChange} />
              </div>
              <div style={{display:'flex', gap:8, marginTop:12}}>
                <button type="submit" className="dialog-btn">Ajouter</button>
                <button type="button" className="dialog-btn-cancel" onClick={() => setOpenDialog(false)}>Annuler</button>
              </div>
            </form>
          </div>
        )}
        <div className="appointments-table-container">
          <table className="appointments-table">
            <thead>
              <tr>
                <th>Nom</th>
                <th>Prénom</th>
                <th>Téléphone</th>
                <th>Date de naissance</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              {patients.map(p => (
                <tr key={p.id}>
                  <td>{p.nom}</td>
                  <td>{p.prenom}</td>
                  <td>{p.telephone}</td>
                  <td>{p.dateNaissance || ''}</td>
                  <td>{p.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Patient;


