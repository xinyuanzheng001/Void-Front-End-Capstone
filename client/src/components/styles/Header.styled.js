import styled from 'styled-components';

export const HeaderContainer = styled.div`
  height: 70px;
  margin-bottom: 25px;
  width: 100%;
  display: flex;
  background-color: #cae8ca;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 1;
`;

export const LogoContainer = styled.div`
  display: flex;
  width: 80%;
`;

export const Logo = styled.img`
  max-width: 50px;
  max-height: 50px;
  margin: auto 25px;
`;

export const SearchInput = styled.input`
  border: none;
  outline: none;
  border-bottom: 3px white solid;
  height: 35%;
  margin-top: 20px;
  font-size: 20px;
  width: 10%;
  background-color: #cae8ca;
`;

export const SearchIcon = styled.i`
  margin: 25px 0 0 10px;
  fontsize: 20px;
  color: white;
`;
