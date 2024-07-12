import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import NavbarComponent from './NavbarComponent';

function Menu({ addToCart }) {
  const images = [
    { id: 1, name: 'Aloo-Parantha', amount: '₹110', src: '/Img/Aloo-Parantha.jpg' },
    { id: 2, name: 'Biryani', amount: '₹200', src: '/Img/Biryani.jpg' },
    { id: 3, name: 'Chole-Bhature', amount: '₹120', src: '/Img/Chole-Bhature.jpg' },
    { id: 4, name: 'Dhokla', amount: '₹80', src: '/Img/Dhokla.jpg' },
    { id: 5, name: 'Egg-Curry', amount: '₹90', src: '/Img/Egg-curry.jpg' },
    { id: 6, name: 'Falooda', amount: '₹60', src: '/Img/Falooda.jpg' },
    { id: 7, name: 'Gol-Gappe', amount: '₹80', src: '/Img/Gol-Gappe.jpg' },
    { id: 8, name: 'Halwa', amount: '₹30', src: '/Img/Halwa.jpg' },
    { id: 9, name: 'Idli-Sambhar', amount: '₹50', src: '/Img/Idli-Sambhar.jpg' },
    { id: 10, name: 'Jalebi', amount: '₹20', src: '/Img/jalebi.jpg' },
    { id: 11, name: 'Kachori', amount: '₹16', src: '/Img/Kachori.jpg' },
    { id: 12, name: 'Lachha-Tokri', amount: '₹22', src: '/Img/Lachha-Tokri.jpg' },
    { id: 13, name: 'Mushroom-Matar', amount: '₹17', src: '/Img/Mushroom-Matar.jpg' },
    { id: 14, name: 'Navratan-Korma', amount: '₹19', src: '/Img/Navratan-Korma.jpg' },
    { id: 15, name: 'Obbattu', amount: '₹21', src: '/Img/Obbattu.jpg' },
    { id: 16, name: 'Paneer-Do-Pyaza', amount: '₹24', src: '/Img/Paneer-Do-Pyaza.jpg' },
    { id: 17, name: 'Quinoa-Pulao', amount: '₹26', src: '/Img/Quinoa-Pulao.jpg' },
    { id: 18, name: 'Rajma', amount: '₹28', src: '/Img/Rajma.jpg' },
    { id: 19, name: 'Samosa', amount: '₹32', src: '/Img/Samosa-1.jpg' },
    { id: 20, name: 'Tandoori-Chicken', amount: '₹29', src: '/Img/Tandoori-Chicken.jpg' },
    { id: 21, name: 'Upma', amount: '₹27', src: '/Img/Upma-1.jpg' },
    { id: 22, name: 'Vada-Pav', amount: '₹23', src: '/Img/Vada-Pav.jpg' },
    { id: 23, name: 'Warqi-Samosa', amount: '₹31', src: '/Img/Warqi-Samosa.jpg' },
    { id: 24, name: 'Xacuti-Chicken', amount: '₹34', src: '/Img/Xacuti-Chicken.jpg' },
    { id: 25, name: 'Yellow-Moong-Dal', amount: '₹35', src: '/Img/Yellow-Moong-Dal.jpg' },
    { id: 26, name: 'Zarda', amount: '₹33', src: '/Img/Zarda.jpg' },
  ];

  return (
    <>
      <NavbarComponent />
      <Container className="mt-5">
        <div className="row">
          {images.map((image) => (
            <div key={image.id} className="col-md-3 mb-4">
              <Card>
                <Card.Img variant="top" src={image.src} />
                <Card.Body>
                  <Card.Title>{image.name}</Card.Title>
                  <Card.Text>Price: {image.amount}</Card.Text>
                  <Button variant="outline-primary" onClick={() => addToCart(image)}>
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}

export default Menu;
