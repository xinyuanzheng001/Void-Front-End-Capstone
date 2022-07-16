import React from 'react';
import moment from 'moment';

//Components
import ReviewStars from './ReviewStars';
import ReviewGallery from './ReviewGallery';
import ReviewRec from './ReviewRec';

export default function ReviewTile({ review }) {
  return (
    <div className="tile">
      <ReviewStars rating={review.rating} id={review.review_id} />
      {review.reviewer_name}, {moment(`${review.date}`).format('LL')} <br></br>
      <b>{review.summary}</b>
      <br></br>
      {review.body}
      <br></br>
      <ReviewRec rec={review.recommend} />
      <br></br>
      <ReviewGallery photos={review.photos} />
      Was this review helpful? Yes ({review.helpfulness}) | Report
      <br></br>
    </div>
  );
}
