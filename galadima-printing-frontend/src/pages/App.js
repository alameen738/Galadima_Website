// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// import Products from './pages/Products'; // Comment out
// import Order from './pages/Order';       // Comment out
// import Contact from './pages/Contact';   // Comment out

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Comment or remove the below routes if pages are not yet created */}
      {/* <Route path="/products" element={<Products />} /> */}
      {/* <Route path="/order" element={<Order />} /> */}
      {/* <Route path="/contact" element={<Contact />} /> */}
    </Routes>
  );
}

export default App;

