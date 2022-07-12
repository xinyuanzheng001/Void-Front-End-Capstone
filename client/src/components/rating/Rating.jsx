import React from 'react';
import { useSelector } from 'react-redux';

export default function Rating() {
  const productReviews = useSelector((state) => state.productReviews);

  return (
    <>
      <h3>RATINGS & REVIEWS</h3>
    </>
  );
}
