import React from 'react';
import Item from './Item';
import Summary from './Summary';
import {
  CartContainer,
  ProductName,
  ProductInfo,
  ProductStyle,
  HeadContainer
} from '../styles/Cart.styled';

export default function CartItems({ cartItems }) {
  console.log(cartItems);
  return (
    <>
      {cartItems.length === 0 ? (
        <div>
          <h1>Your cart is empty </h1>
        </div>
      ) : (
        <div style={{ display: 'flex' }}>
          <CartContainer>
            <HeadContainer>
              <ProductName>Product Name</ProductName>
              <ProductInfo>Category</ProductInfo>
              <ProductStyle>Style</ProductStyle>
              <ProductInfo>Size</ProductInfo>
              <ProductInfo>Quantity</ProductInfo>
              <ProductStyle>Price</ProductStyle>
            </HeadContainer>

            {cartItems.map((item) => (
              <Item key={item.style_id} item={item} />
            ))}
          </CartContainer>
          <Summary />
        </div>
      )}
    </>
  );
}
