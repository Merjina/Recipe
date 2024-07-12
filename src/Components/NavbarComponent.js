import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../Images/logo.webp';
import { useNavigate } from 'react-router-dom';

function NavbarComponent() {
  const navigate = useNavigate();
  return (
    <Navbar className="mt-3">
      <Container fluid>
        <Navbar.Collapse>
          <Navbar.Brand href="#">
            <img
              src={logo}
              alt="Logo"
              width="100"
              height="100"
              className="d-inline-block align-top rounded-circle"
            />
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link className="text-white" onClick={() => navigate('/')}>Home</Nav.Link>
            <Nav.Link className="text-white " onClick={() => navigate('/menu')}>Menu</Nav.Link>
            <Nav.Link className="text-white" onClick={() => navigate('/cart')}>My Cart</Nav.Link>
            <Nav.Link className="text-white" onClick={() => navigate('/ourteam')}>Our Team</Nav.Link>
            <Nav.Link className="text-white" onClick={() => navigate('/contact')}>Contact</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
