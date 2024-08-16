import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/auth/sign_in', { email, password });
      
      // Guardar los encabezados de autenticación en el localStorage
      const token = response.headers['access-token'];
      const client = response.headers['client'];
      const uid = response.headers['uid'];

      localStorage.setItem('access-token', token);
      localStorage.setItem('client', client);
      localStorage.setItem('uid', uid);

      navigate('/');
    } catch (error) {
      console.error('Login Error:', error.response.data);
      setError('Invalid email or password');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="w-100" style={{ maxWidth: '400px' }}>
        <h2 className="text-center mb-4">Iniciar Sesión</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Ingresar</button>
          {error && <p className="text-danger text-center mt-3">{error}</p>}
          <div className="text-center mt-3">
            <a href="/signup">¿Aun no está registrado? Registrarse</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
