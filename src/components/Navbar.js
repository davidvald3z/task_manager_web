import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/signup">Registrarse</Link></li>
        <li><Link to="/login">Ingresar</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
