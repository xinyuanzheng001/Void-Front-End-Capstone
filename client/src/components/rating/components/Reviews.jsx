import React from 'react';
import { useSelector } from 'react-redux';

//Components
import ReviewTile from './ReviewTile';

//Styles
import { ReviewTileContainer } from '../styles/FlexContainers.styled';

export default function Reviews() {
  const { productReviews } = useSelector((state) => state.productReviews);

  return (
    <ReviewTileContainer>
      {productReviews.results.map((review) => {
        return <ReviewTile key={review.review_id} review={review} />;
      })}
    </ReviewTileContainer>
  );
}
