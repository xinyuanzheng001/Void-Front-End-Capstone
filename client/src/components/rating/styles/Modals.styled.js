import styled from 'styled-components';

export const Modal = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalImageStyle = styled.div`
  max-width: 80vh;
  max-height: 80vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 2%;

  img {
    max-height: 70vh;
    width: 70vh;
  }
`;

export const ModalReviewStyle = styled.div`
  max-width: 80vh;
  max-height: auto;
  display: flex;
  background: white;
  align-items: center;
  justify-content: center;
  padding: 2%;
`;

