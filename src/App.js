import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp';    // Asegúrate de tener este componente creado
import Login from './components/Login';      // Asegúrate de tener este componente creado
import MainScreen from './components/MainScreen';
import PrivateRoute from './components/PrivateRoute';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css'; // Asegúrate de importar tu archivo CSS
import Branches from './components/Branches';

const App = () => {
  return (
    <Router>
      <div className="app-background">
        <div className="content">
          <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<PrivateRoute><MainScreen /></PrivateRoute>} />
            <Route path="/branches" element={<PrivateRoute><Branches /></PrivateRoute>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
