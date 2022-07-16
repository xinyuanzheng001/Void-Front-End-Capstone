import styled from 'styled-components';

export const ReviewImages = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  padding: 10px 0;

  img {
    max-height: 10%;
    max-width: 10%;
    padding: 10px;
  }

  img:hover {
    opacity: 0.6;
    cursor: pointer;
  }
`;

export const ReviewCheck = styled.div`
  padding: 5px 0;

  i {
    padding: 10px;
  }
`;
