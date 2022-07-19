import React from 'react';
import { useSelector } from 'react-redux';

//Components
import ReviewTile from './ReviewTile';

//Styles
import { ReviewTileContainer } from '../styles/FlexContainers.styled';

export default function Reviews({ filters, viewable }) {
  const { productReviews } = useSelector((state) => state.productReviews);

  let reviewArray = [];
  if (filters.length === 0) {
    reviewArray = productReviews.results.slice(0, viewable);
  } else {
    for (let i = 0; reviewArray.length < viewable; i++) {
      let review = productReviews.results[i];
      if (filters.indexOf(review.rating) !== -1) {
        reviewArray.push(review);
      }
    }
  }

  return (
    <ReviewTileContainer>
      {reviewArray.map((review) => {
        return <ReviewTile key={review.review_id} review={review} />;
      })}
    </ReviewTileContainer>
  );
}
