import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';  // Opcional: archivo CSS para estilos

const Home = () => {
  return (
    <div className="home">
      <h1>Bienvenido a Agua Siempre</h1>
      <p>¡Administra tus ventas de manera eficiente con nuestra aplicación!</p>
      <div className="home-buttons">
        <Link to="/signup" className="button">Registrarse</Link>
        <Link to="/login" className="button">Ingresar</Link>
      </div>
    </div>
  );
};

export default Home;
