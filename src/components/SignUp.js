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
        username,
        email,
        password,
      });
      console.log('Sign Up Success:', response.data);
      // Redirigir o realizar alguna acción después del registro exitoso
    } catch (error) {
      console.error('Sign Up Error:', error.response.data);
      setError(error.response.data.errors.full_messages.join(', '));
    }
  };

  return (
    <div className="form-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
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
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
        {error && <p className="error">{error}</p>}
        <a className="link" href="/login">Already have an account? Login</a>
      </form>
    </div>
  );
};

export default SignUp;
