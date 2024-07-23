import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Form.css';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/auth', {
        name: username,
        email,
        password,
        password_confirmation: password, 
        confirm_success_url: 'http://localhost:3001',
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        }
      });
      console.log('Registro Exitoso:', response.data);
      // Redirigir o realizar alguna acción después del registro exitoso
    } catch (error) {
      console.error('Error en el Registro:', error.response ? error.response.data : error);
      setError(error.response ? error.response.data.errors.full_messages.join(', ') : 'Error en el servidor');
    }
  };

  return (
    <div className="form-container">
      <h2>Registrarse</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre del Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Registrarse</button>
        {error && <p className="error">{error}</p>}
        <a className="link" href="/login">¿Ya está registrado? Ingresar</a>
      </form>
    </div>
  );
};

export default SignUp;
