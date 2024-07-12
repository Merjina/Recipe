import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Ourteam from './Components/Ourteam';
import Contact from './Components/Contact';
import Menu from './Components/Menu';
import Cart from './Components/Cart';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
   
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      
      const updatedCartItems = cartItems.map((cartItem) =>
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      );
      setCartItems(updatedCartItems);
    } else {
    
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
    alert(`${item.name} has been added to the cart.`);

  };

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ourteam" element={<Ourteam />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu" element={<Menu addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
