import React from 'react';
// eslint-disable-next-line object-curly-newline
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductScreen from './screens/ProductScreen';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/:id" element={<ProductScreen />} />
      </Routes>
    </Router>
  );
}
