import React from 'react';

//Components
import ReviewTop from './ReviewTop';
import ReviewSummary from './ReviewSummary';
import ReviewBody from './ReviewBody';
import ReviewGallery from './ReviewGallery';
import ReviewRec from './ReviewRec';
import ReviewHelpful from './ReviewHelpful';

//Styles
import { ReviewsData, ReviewCheck } from '../styles/ReviewTiles.styled';

export default function ReviewTile({ review }) {
  return (
    <div className="tile">
      <ReviewTop
        rating={review.rating}
        id={review.review_id}
        name={review.reviewer_name}
        date={review.date}
      />
      <ReviewSummary summary={review.summary}/>
      <ReviewBody body={review.body} />
      <br></br>
      <ReviewCheck>
        <ReviewRec rec={review.recommend} />
      </ReviewCheck>
      <br></br>
      <ReviewGallery photos={review.photos} />
      <ReviewHelpful id={review.review_id} helpfulness={review.helpfulness} />
      <br></br>
    </div>
  );
}
