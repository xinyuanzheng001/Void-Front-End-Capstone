import React from 'react';
import { useSelector } from 'react-redux';

//Helper Functions
import totalReviews from '../helpers/totalReviews';

//Styles
import { StyledButton } from '../styles/Button.styled';

export default function ReviewFooter() {
  const { productReviews } = useSelector((state) => state.productReviews);
  const { productMetaData } = useSelector((state) => state.productMetaData);

  return (
    <>
      <StyledButton>More Reviews</StyledButton>
      <StyledButton>Add a Review</StyledButton>
    </>
  );
}
