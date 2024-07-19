import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';        // Asegúrate de tener este componente creado
import SignUp from './components/SignUp';    // Asegúrate de tener este componente creado
import Login from './components/Login';      // Asegúrate de tener este componente creado

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          {/* Puedes agregar más rutas aquí */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
