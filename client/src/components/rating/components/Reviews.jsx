import React from 'react';
import { useSelector } from 'react-redux';

//Components
import ReviewTile from './ReviewTile';

//Styles
import { ReviewTileContainer } from '../styles/FlexContainers.styled';

export default function Reviews({ viewable }) {
  const { productReviews } = useSelector((state) => state.productReviews);
  const ratingFilters = useSelector((state) => state.ratingFilters);

  let reviewArray = productReviews.results.slice(0, viewable);

  return (
    <ReviewTileContainer>
      {reviewArray.map((review) => {
        if (ratingFilters.indexOf(review.rating) === -1) {
          return <ReviewTile key={review.review_id} review={review} />;
        }
      })}
    </ReviewTileContainer>
  );
}
