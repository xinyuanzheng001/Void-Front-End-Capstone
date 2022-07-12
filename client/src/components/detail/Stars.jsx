import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import {
  SingleStarContainer,
  SingleStarFill,
  SingleStarOutline
} from '../styles/Stars.styled';
import star from '../../images/star.png';

export default function Stars() {
  const productMetaData = useSelector((state) => state.productMetaData);
  const { ratings } = productMetaData.productMetaData;
  let rates = 0;
  let totalPeople = 0;
  for (var i in ratings) {
    rates += Number(ratings[i]) * Number(i);
    totalPeople += Number(ratings[i]);
  }
  let aveRates = rates / totalPeople;
  let stars = [];
  while (stars.length < 5) {
    if (aveRates > 1) {
      stars.push(1);
    } else if (aveRates > 0) {
      let empty = Math.abs(0 - aveRates);
      let quart = Math.abs(0.25 - aveRates);
      let half = Math.abs(0.5 - aveRates);
      let three = Math.abs(0.75 - aveRates);
      let full = Math.abs(1 - aveRates);
      let closest = Math.min(empty, quart, half, three, full);
      switch (closest) {
        case empty:
          stars.push(0);
          break;
        case quart:
          stars.push(0.28);
          break;
        case half:
          stars.push(0.5);
          break;
        case three:
          stars.push(0.72);
          break;
        case full:
          stars.push(1.0);
          break;
        default:
          console.log('OOPS');
          stars.push(0);
          break;
      }
    } else {
      stars.push(0);
    }
    aveRates = aveRates - 1;
  }
  return (
    <div>
      {stars.map((item, index) => {
        return (
          <SingleStarContainer key={index}>
            <SingleStarFill style={{ width: `${item * 18}px` }}>
              <SingleStarOutline src={star} alt="star img" />
            </SingleStarFill>
          </SingleStarContainer>
        );
      })}
    </div>
  );
}
