import React, { useState } from 'react';
import logo from '../../images/logo.png';
import {
  HeaderContainer,
  LogoContainer,
  Logo,
  SearchInput,
  SearchIcon
} from '../styles/Header.styled';

export default function Header() {
  const [keyWord, setKeyWord] = useState('');
  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo src={logo} alt="logo"></Logo>
      </LogoContainer>
      <SearchInput
        type="text"
        value={keyWord}
        onChange={(e) => setKeyWord(e.target.value)}
      ></SearchInput>
      <SearchIcon className="fa-solid fa-magnifying-glass"></SearchIcon>
    </HeaderContainer>
  );
}
