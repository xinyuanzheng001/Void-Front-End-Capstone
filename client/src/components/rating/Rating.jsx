import React from 'react';
import { useSelector } from 'react-redux';

//Components
import ReviewTiles from './components/ReviewTiles';

//Helper Functions
import averageNumber from './helpers/averageNumber';

export default function Rating() {
  const productReviews = useSelector((state) => state.productReviews);
  const productMetaData = useSelector((state) => state.productMetaData);

  return (
    <>
      <h3>RATINGS & REVIEWS</h3>
      {averageNumber(productMetaData.productMetaData.ratings)}
      <ReviewTiles />
    </>
  );
}
