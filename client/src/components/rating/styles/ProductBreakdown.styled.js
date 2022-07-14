import styled from 'styled-components';

export const CharLabelTop = styled.div`
  float: left;
  width: 100%;
  margin-top: 5px;
`;

export const CharLabelLeft = styled.div`
  float: left;
  width: 50%;
  margin-top: 5px;
`;

export const CharLabelRight = styled.div`
  text-align: right;
  margin-top: 5px;
`;

export const CharBar = styled.div`
  margin-top: 15px;
  border-top: 10px solid;
  border-color: #f2f3f4;
  border-radius: 4px;
`;

export const CharFill = styled.div`
  position: relative;
  left: ${({ fill }) => Number(fill)}%;
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 10px solid #99A3A4;
`;
