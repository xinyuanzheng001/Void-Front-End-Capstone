import React from 'react';
import { useSelector } from 'react-redux';

//Components
import FilterSelect from '../components/FilterSelect';

//Helper Functions
import totalReviews from '../helpers/totalReviews';

//Styles
import { StyledHeader } from '../styles/FlexContainers.styled';

export default function ReviewHeader() {
  const { productReviews } = useSelector((state) => state.productReviews);
  const { productMetaData } = useSelector((state) => state.productMetaData);

  return (
    <StyledHeader>
      <p>
        {totalReviews(productMetaData.ratings)} reviews, sorted by{' '}
        <FilterSelect />
      </p>
    </StyledHeader>
  );
}
