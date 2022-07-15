import React from 'react';
import { useSelector } from 'react-redux';

//Helper Functions
import totalReviews from '../helpers/totalReviews';

//Styles
import { ReviewButton } from '../styles/ReviewButton.styled';

export default function ReviewFooter() {
  const { productReviews } = useSelector((state) => state.productReviews);
  const { productMetaData } = useSelector((state) => state.productMetaData);

  const total = totalReviews(productMetaData.ratings);
  let button;

  if (total > 0) {
    button = <ReviewButton>More Reviews</ReviewButton>;
  }

  return (
    <>
      {button}
      <ReviewButton>Add a Review +</ReviewButton>
    </>
  );
}
