import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img1 from '../Images/Boniya.jpeg';
import img2 from '../Images/Sreyas.jpeg';
import img3 from '../Images/Lekshmi.jpeg';
import img4 from '../Images/Merjina.jpg';
import NavbarComponent from './NavbarComponent'; 

function Ourteam() {
   
  return (
    <div className='text-dark'>
        <NavbarComponent />
         <Container className='bg-warning'>
      <Row className='mt-5'>
        <Col> 
        <h1 style={{ textAlign: 'center' }}>We Bee-lieve. We Achieve.</h1>
        <p>Alone we can do so little, together we can do so much – That’s how we operate at BitesBee
        – A Food Nest. Our brilliant master chefs along with the diligent team source the choicest 
        ingredients and blend them together to provide you with the unique, authentic taste. At BitesBee, we aim to provide you with an innovative, fun, and affordable food experience in a picture-perfect setting.</p>
   </Col>
      </Row>
      <Row className='mt-2 team'>
        <Col className='md-6 mt-3'style={{ textAlign: 'center' }}><img
                src={img1}
                alt="Logo"        
                width="250"
                height="250"
                className="d-inline-block "
              />
               <h3 className='mt-2' style={{ textAlign: 'center' }}>Boniya</h3>
            <p style={{ textAlign: 'center' }}>Founder</p>
         </Col>
              <Col className='md-6'><h1>Our Founder</h1>
              <p>Boniya is the CEO & Founder of BitesBee - A Food Nest. Inspired by the world of Bees, Satish is conscious of the fact that the world's nutrition is reliant on pollinators, and Bees are heavily responsible for crop pollination. To give the world a message, "Save and Protect the Bees because they are dying at an alarming rate," he planned to kick off his dream food business with a Bee-theme ambiance that aims to provide healthy, fresh, home-like meals at pocket-friendly prices.</p></Col>
      </Row>
      <Row>
        <h2 style={{ textAlign: 'center' }}>Meet Our Team</h2>
        <Col md={4} className='mt-3'>
            <img
              src={img2}
              alt="Team Member 1"
              width="200"
              height="200"
              className="d-inline-block mx-auto d-block"
            />
            <h3 className='mt-2' style={{ textAlign: 'center' }}>Sreyas</h3>
            <p style={{ textAlign: 'center' }}>Executive Director</p>
          </Col>
          <Col md={4} className='mt-3'>
            <img
              src={img3}
              alt="Team Member 2"
              width="200"
              height="200"
              className="d-inline-block mx-auto d-block"
            />
            <h3 className='mt-2' style={{ textAlign: 'center' }}>Lekshmi</h3>
            <p style={{ textAlign: 'center' }}>General Manager</p>
          </Col>
          <Col md={4} className='mt-3'>
            <img
              src={img4}
              alt="Team Member 3"
              width="200"
              height="200"
              className="d-inline-block mx-auto d-block"
            />
            <h3 className='mt-2' style={{ textAlign: 'center' }}>Merjina</h3>
            <p style={{ textAlign: 'center' }}>General Manager</p>
          </Col>
      </Row>
      </Container>
        
        </div>
  )
}

export default Ourteam