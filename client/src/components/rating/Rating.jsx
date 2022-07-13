import React from 'react';
import { useSelector } from 'react-redux';

export default function Rating() {
  const productReviews = useSelector((state) => state.productReviews);
  const productMetaData = useSelector((state) => state.productMetaData);

  return (
    <>
      <h3>RATINGS & REVIEWS</h3>
      {productReviews.productReviews.results.map((review, index) => {
        return (
          <div key={index}>
            {' '}
            Summary: {review.summary} Rating: {review.rating}{' '}
          </div>
        );
      })}
    </>
  );
}
