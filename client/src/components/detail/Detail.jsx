import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Header from './Header';
import Stars from './Stars';
import GoToReview from './GoToReview';
import ImageGallery from './ImageGallery';
import Category from './Category';
import Title from './Title';
import Style from './Style';
import SocialMedia from './SocialMedia';
import Description from './Description';

export default function Detail() {
  const productStyle = useSelector((state) => state.productStyle);
  const { results } = productStyle.productStyle;
  const [style, setStyle] = useState(results[0].photos);
  const [expandView, setExpandView] = useState(false);
  const currentImage = style[0].url;
  // eslint-disable-next-line object-curly-newline
  const changeStyleHandler = (selectedStyle) => {
    setStyle(selectedStyle);
  };
  const expandViewController = (view) => {
    setExpandView(view);
  };
  return (
    <>
      <Header />
      <div style={{ display: 'flex' }}>
        <ImageGallery
          style={style}
          expandViewController={expandViewController}
        />
        <div
          style={{
            marginLeft: '20px',
            width: '500px',
            display: expandView ? 'none' : ''
          }}
        >
          <div className="test" style={{ display: 'flex' }}>
            <Stars />
            <GoToReview />
          </div>
          <Category />
          <Title />
          <Style changeStyleHandler={changeStyleHandler} />
        </div>
      </div>
      <SocialMedia currentImage={currentImage} />
      <Description />
    </>
  );
}
