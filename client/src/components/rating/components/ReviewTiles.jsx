import React from 'react';
import { useSelector } from 'react-redux';

export default function ReviewTiles() {
  const { productReviews } = useSelector((state) => state.productReviews);

  return (
    <>
      {productReviews.results.map((review) => {
        return (
          <div key={review.review_id}>
            Summary: {review.summary} Rating: {review.rating}
          </div>
        );
      })}
    </>
  )
}
