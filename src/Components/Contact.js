import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavbarComponent from './NavbarComponent';

function Contact() {
  return (
    <>
      <NavbarComponent /> 
      <Container className="mt-5 text-warning">
        <h2 className="mb-4">Contact Us</h2>
        <Row className="mb-3">
          <Col md={4} className="text-center">
            <a href="tel:+916383370277" className="text-warning">
              <i className="bi bi-telephone-fill"></i>
              <h5 className="mt-2">Phone</h5>
              <p>+91 6383370277</p>
            </a>
          </Col>
          <Col md={4} className="text-center">
            <a href="star@starskitchen.com" className="text-warning">
              <i className="bi bi-envelope-fill"></i>
              <h5 className="mt-2">Email</h5>
              <p>star@starskitchen.com</p>
            </a>
          </Col>
          <Col md={4} className="text-center">
            <a href="https://www.google.com/maps/search/?api=1&query=II-3-87+Chennai+TamilNadu+629152"  className="text-warning">
              <i className="bi bi-geo-alt-fill"></i>
              <h5 className="mt-2">Location</h5>
              <p>II-3-87, Chennai, TamilNadu,629 152</p>
            </a>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Contact;
