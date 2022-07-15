import React from 'react';
import { useSelector } from 'react-redux';

//Helper Functions
import totalReviews from '../helpers/totalReviews';

export default function ReviewTiles() {
  const { productReviews } = useSelector((state) => state.productReviews);
  const { productMetaData } = useSelector((state) => state.productMetaData);

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
  );
}
