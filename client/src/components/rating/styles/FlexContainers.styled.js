import styled from 'styled-components';

export const ProductBreakdownContainer = styled.div`
  box: border-box;
  width: 25%;
  min-width: 350px;
  font-size: 1em;
`;

export const RatingBreakdownContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 25%;
  min-width: 350px;

  .rating {
    font-size: 3.5em;
  }

`;

export const TableContainer = styled.div`
  box: border-box;
  width: 25%;
  min-width: 350px;
  font-size: 1.1em;

  span {
    display: flex;
    justify-content: space-around;
    text-align: center;
  }
`;
