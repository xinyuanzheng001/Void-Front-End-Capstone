import styled from 'styled-components';

export const FlexImageContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  width: 80%;
`;
export const CircleImage = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 100%;
  &:hover {
    cursor: pointer;
  }
`;

export const SquareImage = styled.img`
  height: 50px;
  width: 50px;
  margin: 5px;
  &:hover {
    cursor: pointer;
  }
`;
