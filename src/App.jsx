import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Info from './pages/Info';
import Events from './pages/Events';
import Reviews from './pages/Reviews';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/info" element={<Info />} />
            <Route path="/events" element={<Events />} />
            <Route path="/reviews" element={<Reviews />} />
          </Routes>
        </Layout>
      </Router>
    </CartProvider>
  );
}

export default App;
