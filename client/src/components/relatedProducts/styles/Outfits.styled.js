import styled from 'styled-components';

export const OutfitCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 350px;
  border-radius: 10px;
  position: relative;
  text-align: left;
  box-shadow: 3px 3px 5px 0px #949391;
`;
export const AddOutfitsStyled = styled.i`
margin-top: 25px;
display: flex;
align-items: center;
justify-content: center;
width: 40px;
  &:hover {
    cursor: pointer;
  }
`;
export const CardsIconStyled = styled.div`
display: flex;
border-radius: 50%;
justify-content: center;
align-items: center;
width: 40px;
height: 40px;
position: absolute;
top: 20px;
right: 15px;
background-color: white;
z-index: 1;
opacity: 70%;
  &:hover {
    cursor: pointer;
  }
`;
