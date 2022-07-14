import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Stars from './Stars';
import ImageGallery from './ImageGallery';
import Category from './Category';
import Title from './Title';
import Style from './Style';

export default function Detail() {
  const productStyle = useSelector((state) => state.productStyle);
  const { results } = productStyle.productStyle;
  const [style, setStyle] = useState(results[0].photos);
  const [expandView, setExpandView] = useState(false);
  // eslint-disable-next-line object-curly-newline
  const changeStyleHandler = (selectedStyle) => {
    setStyle(selectedStyle);
  };
  const expandViewController = (view) => {
    setExpandView(view);
  };
  return (
    <div style={{ display: 'flex' }}>
      <ImageGallery style={style} expandViewController={expandViewController} />
      <div
        style={{
          marginLeft: '20px',
          width: '500px',
          display: expandView ? 'none' : ''
        }}
      >
        <Stars />
        <Category />
        <Title />
        <Style changeStyleHandler={changeStyleHandler} />
      </div>
    </div>
  );
}
