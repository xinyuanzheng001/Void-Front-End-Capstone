import React from 'react';
import { useSelector } from 'react-redux';

//Helper Functions
import totalReviews from '../helpers/totalReviews';

//Styles
import { ReviewButton } from '../styles/ReviewButton.styled';

export default function ReviewFooter({ viewable, setViewable }) {
  const { productReviews } = useSelector((state) => state.productReviews);
  const { productMetaData } = useSelector((state) => state.productMetaData);

  const total = totalReviews(productMetaData.ratings);
  let button;

  if (total > 0) {
    button = (
      <ReviewButton
        onClick={() => {
          setViewable(() => {
            return viewable + 2;
          });
        }}
      >
        More Reviews
      </ReviewButton>
    );
  }

  return (
    <>
      {button}
      <ReviewButton>Add a Review +</ReviewButton>
    </>
  );
}
