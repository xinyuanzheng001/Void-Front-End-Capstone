import React from 'react';
import { useSelector } from 'react-redux';
import { TitleHeader } from '../styles/Category.styled';
export default function Title() {
  const productDetail = useSelector((state) => state.productDetail);
  const { name, default_price } = productDetail.productDetail;
  console.log(name);

  return (
    <>
      <TitleHeader>{name}</TitleHeader>
      <p>${Number(default_price)}</p>
    </>
  );
}
