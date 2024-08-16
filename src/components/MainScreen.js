import React, { useState } from 'react';
import Layout from './Layout';

const MainScreen = () => {
  return (
    <Layout title="Sistema de Ventas">
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
    </Layout>
  );
};

export default MainScreen;
