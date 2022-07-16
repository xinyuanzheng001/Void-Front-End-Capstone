import React from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';

//Helper Functions
import totalReviews from '../helpers/totalReviews';

//Styles
import {
  ReviewTileContainer,
  ReviewImages
} from '../styles/FlexContainers.styled';

export default function Reviews() {
  const { productReviews } = useSelector((state) => state.productReviews);
  const { productMetaData } = useSelector((state) => state.productMetaData);

  //Build stars
  const starBuilder = (rating, id) => {
    let stars = [];
    for (let i = 1; i < 6; i++) {
      if (i <= rating) {
        stars.push(
          <i key={`star${i}.${id}`} className="fa fa-star checked"></i>
        );
      } else {
        stars.push(
          <i
            key={`star${i}.${id}`}
            className="fa-regular fa-star unchecked"
          ></i>
        );
      }
    }
    return stars;
  };

  const galleryBuilder = (photos) => {
    let gallery = [];
    function isImage(url) {
      return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url);
    }

    for (let photo of photos) {
      if (isImage(photo.url)) {
        gallery.push(<img key={photo.id} src={photo.url}></img>);
      }
    }
    return gallery;
  };

  return (
    <ReviewTileContainer>
      {productReviews.results.map((review) => {
        let recommended;

        if (review.recommend) {
          recommended = (
            <div>
              <i className="fa-solid fa-check"></i> I recommend this product.
            </div>
          );
        }

        return (
          <div className="tile" key={review.review_id}>
            {starBuilder(review.rating, review.review_id)}
            {review.reviewer_name}, {moment(`${review.date}`).format('LL')}{' '}
            <br></br>
            <b>{review.summary}</b>
            <br></br>
            {review.body}
            <br></br>
            {recommended}
            <br></br>
            <ReviewImages>{galleryBuilder(review.photos)}</ReviewImages>
            Was this review helpful? Yes ({review.helpfulness}) | Report
            <br></br>
          </div>
        );
      })}
    </ReviewTileContainer>
  );
}
