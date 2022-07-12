import React from 'react';
import { useSelector } from 'react-redux';
import Stars from './Stars';
import ImageGallery from './ImageGallery';
import Category from './Category';
import Title from './Title';

export default function Detail() {
  const productDetail = useSelector((state) => state.productDetail);
  // eslint-disable-next-line object-curly-newline
  const { name, slogan, description, category } = productDetail.productDetail;
  return (
    <div style={{ display: 'flex' }}>
      <ImageGallery />
      <div style={{ marginLeft: '20px' }}>
        <Stars />
        <Category />
        <Title />
      </div>
    </div>
  );
}
