import React from 'react';
import { useSelector } from 'react-redux';

//Components
import Stars from '../../detail/Stars';

//Helper Functions
import averageNumber from '../helpers/averageNumber';
import percentRec from '../helpers/percentRec';

export default function RatingBreakdown() {
  const { productMetaData } = useSelector((state) => state.productMetaData);
  const percent = percentRec(productMetaData.recommended);

  let percentMessage;
  if (percent && percent >= 0) {
    percentMessage = <p>{percent}% of reviews recommend this product</p>;
  }

  return (
    <>
      {averageNumber(productMetaData.ratings)} <Stars />
      {percentMessage}
    </>
  );
}
