import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import {
  HeaderContainer,
  LogoContainer,
  Logo,
  SearchInput,
  SearchIcon,
  CartIcon
} from './styles/Header.styled';

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
      <label style={{ border: 'none' }}>
        <SearchIcon className="fa-solid fa-magnifying-glass"></SearchIcon>
      </label>
      <CartIcon
        as={Link}
        to="/mycart"
        className="fa-solid fa-cart-shopping"
        style={{ color: 'black' }}
        title="My shopping cart"
      ></CartIcon>
    </HeaderContainer>
  );
}
