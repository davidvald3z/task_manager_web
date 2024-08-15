import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de que esté importado

const Home = () => {
  return (
    <div className="container text-center mt-5">
      <h1 className="mb-4">Bienvenido a Agua Siempre</h1>
      <h4 className="mb-4">Sistema de Registro de Ventas</h4>
      <p className="mb-4">¡Administra tus ventas de manera eficiente con nuestra aplicación!</p>
      <div>
        <Link to="/signup" className="btn btn-primary me-3">Registrarse</Link>
        <Link to="/login" className="btn btn-primary">Ingresar</Link>
      </div>
    </div>
  );
};

export default Home;
