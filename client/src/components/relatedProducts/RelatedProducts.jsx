import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import RelatedCard from './RelatedCard';
import Outfits from './Outfits';

import getRelatedDetails from '../../actions/relatedDetailsAction';
import getRelatedStyle from '../../actions/relatedStyleAction';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import transparentStar from '../../images/transparentstar.png';

export default function RelatedProducts() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 3.5,
    slidesToScroll: 2
  };

  const { relatedProducts } = useSelector((state) => state.relatedProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRelatedDetails(relatedProducts));
    dispatch(getRelatedStyle(relatedProducts));
  }, [relatedProducts, dispatch]);
  const { relatedDetails, loading } = useSelector(
    (state) => state.relatedDetails
  );
  const { relatedStyle, loading: relatedStyleLoading } = useSelector(
    (state) => state.relatedStyle
  );

  var cards = '';
  var slidingCards = '';
  if (!loading && relatedDetails) {
    var cards = relatedDetails.map((item, index) => {
      return <RelatedCard item={item} key={index} index={index} />;
    });
    function RelatedSlider() {
      return <Slider {...settings}>{cards}</Slider>;
    }
    var slidingCards = RelatedSlider();
  }

  return (
    <div style={{ width: '1000px', backgroundColor: 'white' }}>
      <h3>RELATED PRODUCTS</h3>
      <div style={{ width: '790px' /* backgroundColor:'#f5f5f5' */ }}>
        {slidingCards}
        {/* <Slider {...settings} style={{padding: '30px',}}>
       {cards}
      </Slider> */}
      </div>
      <Outfits />
    </div>
  );
}
