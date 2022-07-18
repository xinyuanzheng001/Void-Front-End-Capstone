import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

//Actions
import {
  toggleFilter,
  removeFilter
} from '../../../actions/ratingFilterAction';

//Components
import Stars from '../../detail/Stars';

//Styles
import {
  StarContainer,
  StarLeft,
  StarMiddle,
  StarBar,
  StarFill,
  StarRight
} from '../styles/RatingBreakdown.styled';
import {
  RatingBreakdownContainer,
  TableContainer
} from '../styles/FlexContainers.styled';

//Helper Functions
import averageNumber from '../helpers/averageNumber';
import percentRec from '../helpers/percentRec';
import starCounter from '../helpers/starCounter';
import totalReviews from '../helpers/totalReviews';

export default function RatingBreakdown() {
  const { productMetaData } = useSelector((state) => state.productMetaData);
  const ratingFilters = useSelector((state) => state.ratingFilters);
  const percent = percentRec(productMetaData.recommended);
  const reviews = totalReviews(productMetaData.ratings);
  const dispatch = useDispatch();

  let percentMessage;
  if (reviews !== 0 && percent >= 0) {
    percentMessage = (
      <p>
        {percent}% of {reviews} reviews recommend this product
      </p>
    );
  } else {
    percentMessage = <p>There are no reviews for this product yet</p>;
  }

  let clearFilters;
  if (ratingFilters.length > 0) {
    clearFilters = (
      <p onClick={() => {dispatch(removeFilter())}}>
        <u className="toggle">Clear All Filters</u>
      </p>
    );
  }

  let starBreakdown = starCounter(productMetaData.ratings);

  return (
    <>
      <RatingBreakdownContainer>
        <span className="rating">{averageNumber(productMetaData.ratings)}</span>
        <span>
          <Stars className="stars" />
        </span>
      </RatingBreakdownContainer>
      <TableContainer>
        {starBreakdown.map((star, index) => {
          const starRating = 5 - index;
          return (
            <StarContainer
              key={starRating}
              onClick={() => {
                dispatch(toggleFilter(starRating));
              }}
            >
              <StarLeft>
                <div>{starRating} Stars</div>
              </StarLeft>
              <StarMiddle>
                <StarBar>
                  <StarFill fill={star[0]}></StarFill>
                </StarBar>
              </StarMiddle>
              <StarRight>{star[1]}</StarRight>
            </StarContainer>
          );
        })}
        <div>{percentMessage}</div>
        <div>{clearFilters}</div>
      </TableContainer>
    </>
  );
}
