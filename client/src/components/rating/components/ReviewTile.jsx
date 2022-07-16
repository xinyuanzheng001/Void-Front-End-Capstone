import React from 'react';
import moment from 'moment';

//Components
import ReviewStars from './ReviewStars';
import ReviewGallery from './ReviewGallery';
import ReviewRec from './ReviewRec';
import ReviewHelpful from './ReviewHelpful';

//Styles
import { ReviewsData } from '../styles/ReviewTiles.styled';

export default function ReviewTile({ review }) {
  return (
    <div className="tile">
      <ReviewStars rating={review.rating} id={review.review_id} />
      <span>
        {review.reviewer_name}, {moment(`${review.date}`).format('LL')}{' '}
      </span>
      <h4>{review.summary}</h4>
      {review.body}
      <br></br>
      <ReviewRec rec={review.recommend} />
      <br></br>
      <ReviewGallery photos={review.photos} />
      <ReviewHelpful helpfulness={review.helpfulness} />
      <br></br>
    </div>
  );
}
