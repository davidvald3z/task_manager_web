import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';
import Layout from './Layout';
import { Modal, Button, Form } from 'react-bootstrap';

const Sales = () => {
  const [movements, setMovements] = useState([]);
  const [branches, setBranches] = useState([]); // Lista de sucursales
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [selectedMovement, setSelectedMovement] = useState(null);
  const [movementData, setMovementData] = useState({ description: '', amount: '', movement_date: '', branch_id: '' });

  useEffect(() => {
    const fetchMovements = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/v1/movements');
        setMovements(response.data);
      } catch (error) {
        console.error('Error al obtener los movimientos:', error);
      } finally {
        setLoading(false);
      }
    };

    const fetchBranches = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/v1/branches');
        setBranches(response.data);
      } catch (error) {
        console.error('Error al obtener las sucursales:', error);
      }
    };

    fetchMovements();
    fetchBranches(); // Obtener las sucursales al cargar la página
  }, []);

  const handleModalClose = () => {
    setShowModal(false);
    setEditMode(false);
    setMovementData({ description: '', amount: '', movement_date: '', branch_id: '' });
  };

  const handleModalShow = () => setShowModal(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMovementData((prevMovement) => ({
      ...prevMovement,
      [name]: value,
    }));
  };

  const handleAddMovement = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/v1/movements', movementData);
      setMovements([...movements, response.data]);
      handleModalClose();
    } catch (error) {
      console.error('Error al agregar la venta:', error);
    }
  };

  const handleEditMovement = (movement) => {
    setSelectedMovement(movement);
    setMovementData({ description: movement.description, amount: movement.amount, movement_date: movement.movement_date, branch_id: movement.branch_id });
    setEditMode(true);
    handleModalShow();
  };

  const handleUpdateMovement = async () => {
    try {
      const response = await axios.put(`http://localhost:3000/api/v1/movements/${selectedMovement.id}`, movementData);
      setMovements(movements.map(m => (m.id === selectedMovement.id ? response.data : m)));
      handleModalClose();
    } catch (error) {
      console.error('Error al actualizar la venta:', error);
    }
  };

  return (
    <Layout title="Ventas">
      <div className="col-md-12">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Listado de Ventas</h5>
            {loading ? (
              <p>Cargando ventas...</p>
            ) : (
              <>
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>Fecha</th>
                      <th>Sucursal</th>
                      <th>Descripción</th>
                      <th>Monto</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {movements.map((movement) => (
                      <tr key={movement.id}>
                        <td>{movement.movement_date}</td>
                        <td>{movement.branch?.name}</td> {/* Mostrar el nombre de la sucursal */}
                        <td>{movement.description}</td>
                        <td>{movement.amount}</td>
                        <td>
                          <button className="btn bg-navy btn-sm" onClick={() => handleEditMovement(movement)}>
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
                    Nueva Venta
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>{editMode ? 'Editar Venta' : 'Nueva Venta'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="movementDate">
              <Form.Label>Fecha</Form.Label>
              <Form.Control
                type="date"
                name="movement_date"
                value={movementData.movement_date}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="branchSelect" className="mt-3">
              <Form.Label>Sucursal</Form.Label>
              <Form.Control
                as="select"
                name="branch_id"
                value={movementData.branch_id}
                onChange={handleInputChange}
              >
                <option value="">Seleccione una sucursal</option>
                {branches.map((branch) => (
                  <option key={branch.id} value={branch.id}>
                    {branch.name}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="description" className="mt-3">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                type="text"
                name="description"
                value={movementData.description}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="amount" className="mt-3">
              <Form.Label>Monto</Form.Label>
              <Form.Control
                type="number"
                name="amount"
                value={movementData.amount}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={editMode ? handleUpdateMovement : handleAddMovement}>
            {editMode ? 'Actualizar' : 'Guardar'}
          </Button>
        </Modal.Footer>
      </Modal>
    </Layout>
  );
};

export default Sales;
