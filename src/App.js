import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';        // Asegúrate de tener este componente creado
import SignUp from './components/SignUp';    // Asegúrate de tener este componente creado
import Login from './components/Login';      // Asegúrate de tener este componente creado
import MainScreen from './components/MainScreen';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css'; // Asegúrate de importar tu archivo CSS

const App = () => {
  return (
    <Router>
      <div className="app-background">
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/main" element={<MainScreen />} />
            {/* Puedes agregar más rutas aquí */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
