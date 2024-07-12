import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import NavbarComponent from './NavbarComponent';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

function Cart({ cartItems, setCartItems }) {
  const [showEditModal, setShowEditModal] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [editedQuantity, setEditedQuantity] = useState(1);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const calculateTotalAmount = () => {
      let total = 0; 
      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        const amount = typeof item.amount === 'string' ? parseFloat(item.amount.replace('₹', '')) : item.amount;
        total += amount * item.quantity;
      }
    
      setTotalAmount(total);
    };
    

    calculateTotalAmount();
  }, [cartItems]);

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditedQuantity(cartItems[index].quantity);
    setShowEditModal(true);
  };

  const handleSaveEdit = () => {
    const updatedItems = [...cartItems];
    updatedItems[editIndex] = {
      ...updatedItems[editIndex],
      quantity: editedQuantity,
    };
    setCartItems(updatedItems);
    setShowEditModal(false);
  };

  const handleCancelEdit = () => {
    setShowEditModal(false);
  };

  const handleDelete = (index) => {
    const updatedItems = cartItems.filter((item, idx) => idx !== index);
    setCartItems(updatedItems);
  };

  return (
    <>
      <NavbarComponent />
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <Card>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Amount</th>
                    <th>Quantity</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.name}</td>
                      <td>
                        <img src={item.src} alt={item.name} style={{ width: '50px' }} />
                      </td>
                      <td>{item.amount}</td>
                      <td>{item.quantity}</td>
                      <td>
                        <Button variant="outline-info m-2" onClick={() => handleEdit(index)}>
                          Edit 
                        </Button>
                        <Button variant="outline-danger m-2" onClick={() => handleDelete(index)}>
                          Delete
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <Card.Footer>
                <h5>Total Amount: {totalAmount}</h5>
              </Card.Footer>
            </Card>
          </div>
        </div>
      </div>

      <Modal show={showEditModal} onHide={handleCancelEdit}>
        <Modal.Header closeButton>
          <Modal.Title>Edit </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formItemQuantity">
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                type="number"
                value={editedQuantity}
                onChange={(e) => setEditedQuantity(parseInt(e.target.value))}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancelEdit}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSaveEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Cart;
