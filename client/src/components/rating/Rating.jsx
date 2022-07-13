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
      {productReviews.productReviews.results.map((review, index) => {
        return (
          <div key={index}>
            {' '}
            Summary: {review.summary} Rating: {review.rating}{' '}
          </div>
        );
      })}
      <RatingBreakdown />
      <ProductBreakdown />
      <ReviewTiles />
    </>
  );
}
