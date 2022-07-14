import styled from 'styled-components';

export const FlexImageContainer = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  width: 60%;
`;
export const CircleImage = styled.img`
  height: 55px;
  width: 55px;
  border-radius: 100%;
  object-fit: cover;
  &:hover {
    cursor: pointer;
  }
`;

export const SquareImage = styled.img`
  height: 9%;
  width: 110%;
  max-width: 50px;
  max-height: 50px;
  margin: 5px;
  &:hover {
    cursor: pointer;
  }
`;

export const SquareImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 30px;
  margin-top: 20px;
  height: 100%;
`;

export const FillImage = styled.img`
  margin: auto;
  width: 80%;
  height: 100%;
  object-fit: contain;
`;

export const FillImageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const ImageGalleryContainer = styled.div`
  display: flex;
  height: 60vh;
  width: 800px;
  background-color: rgb(245, 244, 242);
`;

export const FSiconUpDownArrow = styled.i`
  margin: 0 auto;
  font-size: 20px;
  &:hover {
    cursor: pointer;
  }
`;

export const FSiconLeftRightArrow = styled.i`
  margin: auto 0;
  font-size: 20px;
  &: hover {
    cursor: pointer;
  }
`;

export const FSiconExpand = styled.i`
  margin-top: 25px;
  &:hover {
    cursor: pointer;
  }
`;

export const FSRightArrowAndExpandContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 25px;
`;
