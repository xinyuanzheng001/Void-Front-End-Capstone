import React, { useState, useEffect } from 'react';
import Stars from
import { useSelector } from 'react-redux';
import RelatedCard from './RelatedCard';

export default function RelatedProducts() {
  return (
    <div>
      <h3>RELATED PRODUCTS</h3>
      <RelatedCard />
      {/* Map the related cards based on info from the store */}
    </div>
  );
}

//