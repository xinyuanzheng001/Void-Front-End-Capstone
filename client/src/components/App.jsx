import React from 'react';
// eslint-disable-next-line object-curly-newline
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="mycart" element={<CartScreen />} exact />
        <Route path="/:id" element={<ProductScreen />} />
      </Routes>
    </Router>
  );
}
