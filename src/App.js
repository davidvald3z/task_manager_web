import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp';
import Login from './components/Login';
import MainScreen from './components/MainScreen';
import PrivateRoute from './components/PrivateRoute';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';
import Branches from './components/Branches';
import Sales from './components/Sales';
import Expenses from './components/Expenses';

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
            <Route path="/sales" element={<PrivateRoute><Sales /></PrivateRoute>} />
            <Route path="/expenses" element={<PrivateRoute><Expenses /></PrivateRoute>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
