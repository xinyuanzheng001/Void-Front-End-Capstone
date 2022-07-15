import React from 'react';
import { useSelector } from 'react-redux';

//Components
import ReviewTiles from './components/ReviewTiles';
import ReviewHeader from './components/ReviewHeader';
import ReviewFooter from './components/ReviewFooter';
import RatingBreakdown from './components/RatingBreakdown';
import ProductBreakdown from './components/ProductBreakdown';

//Styles
import {
  MainContainer,
  BreakdownContainer,
  ReviewContainer,
  StyledFooter
} from './styles/FlexContainers.styled';

//Helper Functions
import averageNumber from './helpers/averageNumber';
import percentRec from './helpers/percentRec';

export default function Rating() {
  const { productReviews } = useSelector((state) => state.productReviews);
  const { productMetaData } = useSelector((state) => state.productMetaData);

  return (
    <>
      <h3>RATINGS & REVIEWS</h3>
      <MainContainer>
        <BreakdownContainer>
          <RatingBreakdown />
          <ProductBreakdown />
        </BreakdownContainer>
        <ReviewContainer>
          <ReviewHeader />
          <ReviewTiles />
          <StyledFooter>
            <ReviewFooter />
          </StyledFooter>
        </ReviewContainer>
      </MainContainer>
    </>
  );
}
