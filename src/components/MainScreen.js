import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Offcanvas } from 'react-bootstrap';
import { FaTachometerAlt, FaShoppingCart, FaFileInvoiceDollar, FaChartLine, FaSignOutAlt } from 'react-icons/fa';

const MainScreen = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleLogout = () => {
    //logout();
    navigate('/login');
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <nav className="col-md-2 d-none d-md-block bg-primary sidebar">
          <div className="sidebar-sticky">
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link text-white active" href="/main">
                  <FaTachometerAlt className="me-2" /> Dashboard
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/sales">
                  <FaShoppingCart className="me-2" /> Captura de Ventas
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/expenses">
                  <FaFileInvoiceDollar className="me-2" /> Captura de Gastos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/reports">
                  <FaChartLine className="me-2" /> Reportes
                </a>
              </li>
              <li className="nav-item">
                <button onClick={handleLogout} className="btn btn-link nav-link text-white">
                  <FaSignOutAlt className="me-2" /> Logout
                </button>
              </li>
            </ul>
          </div>
        </nav>

        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
          <button type="button" className="btn btn-primary d-md-none" onClick={handleShow}>
            ☰ Menú
          </button>

          <Offcanvas show={show} onHide={handleClose} className="bg-primary text-white">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Menú</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a className="nav-link text-white active" href="/main">
                    <FaTachometerAlt className="me-2" /> Dashboard
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="/sales">
                    <FaShoppingCart className="me-2" /> Captura de Ventas
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="/expenses">
                    <FaFileInvoiceDollar className="me-2" /> Captura de Gastos
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="/reports">
                    <FaChartLine className="me-2" /> Reportes
                  </a>
                </li>
              </ul>
            </Offcanvas.Body>
          </Offcanvas>

          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Dashboard</h1>
            <div>
              <button onClick={handleLogout} className="btn btn-primary">Logout</button>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Total de Ventas</h5>
                  <p className="card-text">Cantidad de ventas realizadas...</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Total de Gastos</h5>
                  <p className="card-text">Cantidad de gastos realizados...</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Utilidad Neta</h5>
                  <p className="card-text">Utilidad neta hasta el momento...</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainScreen;
