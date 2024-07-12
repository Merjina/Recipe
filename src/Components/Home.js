import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import '../Css/Home.css';
import images1 from '../Images/Biryani.jpg';
import images2 from '../Images/Idli-Sambhar.jpg';
import images3 from '../Images/Samosa-1.jpg';
import images4 from '../Images/meals.jpg';
import NavbarComponent from './NavbarComponent';
function Home() {
  return (
    <>
    <NavbarComponent />
      <Container className="mt-5">
        <Row>
          <Col md={6}>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={images1}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={images2}
                  alt="Second slide"
                />
                
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={images3}
                  alt="Third slide"
                />
               
              </Carousel.Item>
            <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={images4}
                  alt="Forth slide"
                />
               
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col md={4}>
            <div className="content">
              <h3 className='text-white'>Feeling hungry? We've got you covered!</h3>
              <p className='text-white'> At STAR'S KITCHEN, we offer a variety of delicious dishes.
              Our dishes are made with the finest ingredients and a touch of natural honey, adding a unique and wholesome sweetness.
              Come and enjoy a meal that will delight your taste buds and leave you feeling satisfied.
              Join us at STAR'S KITCHEN and taste the difference!
              </p>
             
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
