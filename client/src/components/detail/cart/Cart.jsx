import React from 'react';
import { useSelector } from 'react-redux';
import { Container } from '../styles/Container.styled';
import CartItems from './CartItems';

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  return (
    <>
      <Container style={{ minWidth: '400px' }}>
        <h1>My Shopping Cart</h1>
        <CartItems cartItems={cartItems} />
      </Container>
    </>
  );
}
