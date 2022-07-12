import React from 'react';
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
