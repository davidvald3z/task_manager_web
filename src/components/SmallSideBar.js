import React from 'react';
import { FaShoppingCart, FaFileInvoiceDollar, FaChartLine, FaMapMarkerAlt, FaHome} from 'react-icons/fa';

const SmallSideBar = () => {
  return (    
    <ul className="nav flex-column">
        <li className="nav-item">
            <a className="nav-link text-white active" href="/">
            <FaHome className="me-2" /> Home
            </a>
        </li>
        <li className="nav-item">
            <a className="nav-link text-white" href="/branches">
            <FaMapMarkerAlt className="me-2" /> Sucursales
            </a>
        </li>
        <li className="nav-item">
            <a className="nav-link text-white" href="/sales">
            <FaShoppingCart className="me-2" /> Ventas
            </a>
        </li>
        <li className="nav-item">
            <a className="nav-link text-white" href="/expenses">
            <FaFileInvoiceDollar className="me-2" /> Gastos
            </a>
        </li>
        <li className="nav-item">
            <a className="nav-link text-white" href="/reports">
            <FaChartLine className="me-2" /> Reportes
            </a>
        </li>
    </ul>
  );
};

export default SmallSideBar;
