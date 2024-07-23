import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Form.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/auth/sign_in', {
        email,
        password,
      });
      console.log('Login Success:', response.data);
      // Almacenar el token y redirigir o realizar alguna acción después del inicio de sesión exitoso
    } catch (error) {
      console.error('Login Error:', error.response.data);
      setError('Invalid email or password');
    }
  };

  return (
    <div className="form-container">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Ingresar</button>
        {error && <p className="error">{error}</p>}
        <a className="link" href="/signup">¿Aun no está registrado? Registrarse</a>
      </form>
    </div>
  );
};

export default Login;
