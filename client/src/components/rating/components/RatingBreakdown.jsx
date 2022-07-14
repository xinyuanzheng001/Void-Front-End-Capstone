import React from 'react';
import { useSelector } from 'react-redux';

//Components
import Stars from '../../detail/Stars';

//Helper Functions
import averageNumber from '../helpers/averageNumber';
import percentRec from '../helpers/percentRec';
import starCounter from '../helpers/starCounter';

export default function RatingBreakdown() {
  const { productMetaData } = useSelector((state) => state.productMetaData);
  const percent = percentRec(productMetaData.recommended);

  let percentMessage;
  if (percent && percent >= 0) {
    percentMessage = <p>{percent}% of reviews recommend this product</p>;
  } else {
    percentMessage = <p>There are no reviews for this product yet</p>;
  }

  let starBreakdown = starCounter(productMetaData.ratings);

  return (
    <>
      {averageNumber(productMetaData.ratings)} <Stars />
      {starBreakdown.map((star, index) => {
        return (
          <p key={index + 1}>
            {5 - index} Stars Percent: {star[0]} Total: {star[1]}
          </p>
        );
      })}
      {percentMessage}
    </>
  );
}
