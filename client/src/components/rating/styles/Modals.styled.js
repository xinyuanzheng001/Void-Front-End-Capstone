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
  max-width: auto;
  max-height: 80vh;
  overflow: auto;
  position: relative;
  box-sizing: border-box;
  background: white;
  align-items: center;
  justify-content: center;
  padding: 2%;

  .checked {
    color: #f1dc19;
  }

  fieldset {
    text-align: left;
    display: flex;
  }

  .left {
    padding: 5px;
    text-align: left;
  }

  .right {
    padding: 5px;
    text-align: right;
  }

  [type=radio] {
    position: relative;
    width: 100%;
    height: 100%;
    opacity: 100;
  }
`;
