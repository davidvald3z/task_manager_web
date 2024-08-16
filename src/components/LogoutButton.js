import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    axios.delete('http://localhost:3000/auth/sign_out', {
      headers: {
        'access-token': localStorage.getItem('access-token'),
        'client': localStorage.getItem('client'),
        'uid': localStorage.getItem('uid')
      }
    })
    .then(response => {
      console.log('Sign out successful');
      // Aquí podrías limpiar el almacenamiento local y redirigir al usuario
      localStorage.removeItem('access-token');
      localStorage.removeItem('client');
      localStorage.removeItem('uid');
      navigate('/login');
    })
    .catch(error => {
      console.error('Sign out error:', error);
    });    
  };

  return (
    <button onClick={handleLogout} className="btn btn-primary bg-navy">
      Logout
    </button>
  );
};

export default LogoutButton;
