import styled from 'styled-components';

export const ProductBreakdownContainer = styled.div`
  box: border-box;
  width: 25%;
  font-size: 1.3vw;
`;

export const RatingBreakdownContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 25%;
  font-size: 2vw;

  .rating {
    font-size: 4vw;
  }
`;

export const TableContainer = styled.div`
  box: border-box;
  width: 25%;
  font-size: 1vw;

  span {
    display: flex;
    justify-content: space-around;
    text-align: center;
  }
`;
