import React, { useState }  from 'react';
import Sidebar from './SideBar';
import SmallSideBar from './SmallSideBar';
import { Offcanvas } from 'react-bootstrap';
import LogoutButton from './LogoutButton';

const Layout = ({ title, children }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar />

        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
          <button type="button" className="btn btn-primary d-md-none bg-navy" onClick={handleShow}>
            ☰ Menú
          </button>

          <Offcanvas show={show} onHide={handleClose} className="bg-navy text-white">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Menú</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <SmallSideBar />
            </Offcanvas.Body>
          </Offcanvas>

          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Agua Siempre - {title}</h1>
            <div>
              <LogoutButton />
            </div>
          </div>

          <div className="row">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
