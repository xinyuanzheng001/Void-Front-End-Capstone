import React from 'react';
import { useSelector } from 'react-redux';

import averageNumber from './helpers/averageNumber'

export default function Rating() {
  const productReviews = useSelector((state) => state.productReviews);
  const productMetaData = useSelector((state) => state.productMetaData);

  return (
    <>
      <h3>RATINGS & REVIEWS</h3>
      {averageNumber(productMetaData.productMetaData.ratings)}
      {productReviews.productReviews.results.map((review) => {
        return (
          <div key={review.review_id}>
            Summary: {review.summary} Rating: {review.rating}{' '}
          </div>
        );
      })}
    </>
  );
}
