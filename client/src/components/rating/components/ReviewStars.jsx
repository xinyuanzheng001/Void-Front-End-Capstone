import React from 'react';

export default function ReviewStars({ rating, id }) {
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

  return <span>{starBuilder(rating, id)}</span>;
}
