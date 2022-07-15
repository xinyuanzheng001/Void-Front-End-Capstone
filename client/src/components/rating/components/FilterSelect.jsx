import React from 'react';

import { StyledSelect } from '../styles/FilterSelect.styled';

export default function FilterSelect() {
  return (
    <StyledSelect name="filter" id="review-filter">
      <option value="relevant"> relevance</option>
      <option value="newest"> date</option>
      <option value="helpful"> helpfulness</option>
    </StyledSelect>
  );
}
