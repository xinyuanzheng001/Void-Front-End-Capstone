import styled from 'styled-components';

export const ProductBreakdownContainer = styled.div`
  box: border-box;
  width: 25%;
  font-size: 1.3em;
`;

export const RatingBreakdownContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 25%;
  font-size: 2em;

  .rating {
    font-size: 4em;
  }
`;

export const TableContainer = styled.div`
  box: border-box;
  width: 25%;
  font-size: 1em;

  span {
    display: flex;
    justify-content: space-around;
    text-align: center;
  }
`;
