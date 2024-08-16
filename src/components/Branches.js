import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';
import Layout from './Layout';
import { Modal, Button, Form } from 'react-bootstrap';

const Branches = () => {
  const [branches, setBranches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [newBranch, setNewBranch] = useState({ name: '', address: '' });

  useEffect(() => {
    const fetchBranches = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/v1/branches');
        setBranches(response.data);
      } catch (error) {
        console.error('Error al obtener las sucursales:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBranches();
  }, []);

  const handleModalClose = () => setShowModal(false);
  const handleModalShow = () => setShowModal(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBranch((prevBranch) => ({
      ...prevBranch,
      [name]: value,
    }));
  };

  const handleAddBranch = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/v1/branches', newBranch);
      setBranches([...branches, response.data]);
      setNewBranch({ name: '', address: '' });
      handleModalClose();
    } catch (error) {
      console.error('Error al agregar la sucursal:', error);
    }
  };

  return (
    <Layout title="Sucursales">
      <div className="col-md-12">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Listado de Sucursales</h5>
            {loading ? (
              <p>Cargando sucursales...</p>
            ) : (
              <>
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Nombre</th>
                      <th>Dirección</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {branches.map((branch) => (
                      <tr key={branch.id}>
                        <td>{branch.id}</td>
                        <td>{branch.name}</td>
                        <td>{branch.address}</td>
                        <td>
                          <button className="btn bg-navy btn-sm">
                            <FaEdit />
                          </button>
                          <button className="btn bg-navy btn-sm ms-2">
                            <FaTrash />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="text-end mt-3">
                  <Button variant="success" onClick={handleModalShow}>
                    <FaPlus className="me-2" />
                    Nuevo
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Nueva Sucursal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="branchName">
              <Form.Label>Nombre de la Sucursal</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={newBranch.name}
                onChange={handleInputChange}
                placeholder="Ingrese el nombre de la sucursal"
              />
            </Form.Group>
            <Form.Group controlId="branchAddress" className="mt-3">
              <Form.Label>Dirección de la Sucursal</Form.Label>
              <Form.Control
                type="text"
                name="address"
                value={newBranch.address}
                onChange={handleInputChange}
                placeholder="Ingrese la dirección de la sucursal"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleAddBranch}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    </Layout>
  );
};

export default Branches;
