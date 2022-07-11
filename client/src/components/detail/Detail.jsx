import React from 'react';
import { useSelector } from 'react-redux';
import Stars from './Stars';

export default function Detail() {
  const productDetail = useSelector((state) => state.productDetail);
  // eslint-disable-next-line object-curly-newline
  const { name, slogan, description, category } = productDetail.productDetail;
  return (
    <>
      <div>detail</div>
      <p>{name}</p>
      <p>{slogan}</p>
      <p>{description}</p>
      <p>{category}</p>
      <p>{productDetail.productDetail.default_price}</p>
      <Stars />
    </>
  );
}
