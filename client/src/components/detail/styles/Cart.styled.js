import styled from 'styled-components';

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 400px;
  width: 70%;
`;
export const HeadContainer = styled.div`
  display: flex;
  @media (max-width: 550px) {
    display: none;
  }
`;
export const ProductName = styled.p`
  width: 20%;
  text-align: center;
  @media (max-width: 550px) {
    width: 30%;
    margin: 5px auto;
  }
`;
export const ProductInfo = styled.p`
  width: 10%;
  text-align: center;
  @media (max-width: 550px) {
    width: 50vw;
  }
`;

export const ProductStyle = styled.p`
  width: 15%;
  text-align: center;
  @media (max-width: 550px) {
    width: 100%;
  }
`;

export const ItemContainer = styled.div`
  display: flex;
  border-top: 1px lightgrey solid;
  margin: 5px 0;
  min-width: 400px;
`;

export const FSiconCheck = styled.i`
  font-size: 20px;
  color: green;
  margin-right: 10px;
  &:hover {
    cursor: pointer;
  }
`;

export const FSiconX = styled.i`
  font-size: 20px;
  color: red;
  &:hover {
    cursor: pointer;
  }
`;

export const FSiconEdit = styled.i`
  font-size: 20px;
  &:hover {
    cursor: pointer;
  }
`;
