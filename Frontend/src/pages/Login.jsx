import React, { useState } from 'react';
import './Login.css';
import { login } from '../services/userService';
import { useSession } from '../hooks/SessionContext';


const DENTAL_CHAIR_IMG =
  'https://www.dexigner.com/images/article/60566/Eurus_05_gallery.jpg';
const Login = () => {
  const [form, setForm] = useState({ login: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const {session, loginUser} = useSession();


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const user = await login(form.login, form.password);
      loginUser(user.login || form.login);
      setError('');
    } catch (err) {
      setError('Identifiants incorrects');
    }
    setLoading(false);
    };

  if (loading) {
    return (
      <div className="main-content login-page">
        <div className="login-form" style={{ minWidth: 320 }}>
          <div className="login-logo">
            <img src={DENTAL_CHAIR_IMG} alt="Logo Chaise dentaire" />
          </div>
          <div className="login-loader">
            <div className="loader"></div>
            <span>Vérification de la session...</span>
          </div>
        </div>
      </div>
    );
  }

  if (session) {
    return (
      <div className="main-content login-page">
        <div className="login-success">
          <div className="login-logo">
            <img src={DENTAL_CHAIR_IMG} alt="Logo Chaise dentaire" />
          </div>
          <h2>Bienvenue, {session.login} !</h2>
          <p>Connexion réussie.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="main-content login-page">
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="login-logo">
          <img src={DENTAL_CHAIR_IMG} alt="Logo Chaise dentaire" />
        </div>
        <h2>Connexion</h2>
        <div className="form-group">
          <label htmlFor="login">Login</label>
          <input
            type="text"
            id="login"
            name="login"
            value={form.login}
            onChange={handleChange}
            autoComplete="username"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            id="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            autoComplete="current-password"
            required
          />
        </div>
        {error && <div className="login-error">{error}</div>}
        <button type="submit" className="login-btn">Se connecter</button>
      </form>
    </div>
  );
};

export default Login;
