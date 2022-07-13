import React from 'react';
import { useSelector } from 'react-redux';

//Components
import ReviewTiles from './components/ReviewTiles';
import RatingBreakdown from './components/RatingBreakdown';
import ProductBreakdown from './components/ProductBreakdown';

//Helper Functions
import averageNumber from './helpers/averageNumber';
import percentRec from './helpers/percentRec';

export default function Rating() {
  const { productReviews } = useSelector((state) => state.productReviews);
  const { productMetaData } = useSelector((state) => state.productMetaData);

  return (
    <>
      <h3>RATINGS & REVIEWS</h3>
<<<<<<< HEAD
      {productReviews.productReviews.results.map((review) => {
        return (
          <div key={review.review_id}>
            {' '}
            Summary: {review.summary} Rating: {review.rating}{' '}
          </div>
        );
      })}
=======
      <RatingBreakdown />
      <ProductBreakdown />
      <ReviewTiles />
>>>>>>> 3bc993379f29a1a7b7af6e73eda21dbfa3ff34c9
    </>
  );
}
