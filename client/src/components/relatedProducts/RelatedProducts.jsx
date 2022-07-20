import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import RelatedCard from './RelatedCard';
import Outfits from './Outfits';

import getRelatedDetails from '../../actions/relatedDetailsAction';
import getRelatedStyle from '../../actions/relatedStyleAction';

import transparentStar from '../../images/transparentstar.png';
import {
  CardSliderContainer,
  BackArrow,
  ForwardArrow
} from './styles/Outfits.styled';
import {
  backClick,
  forwardClick,
  horizontalSlide
} from './Helpers/helperFunctions';
export default function RelatedProducts() {
  const relatedSliderRef = useRef(null);
  const backButton = useRef(null);
  const forwardButton = useRef(null);

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
      return (
        <CardSliderContainer ref={relatedSliderRef} id="relatedSlider">
          {cards}
        </CardSliderContainer>
      );
    }
    var slidingCards = RelatedSlider();
  }

  return (
    <>
      <div
        style={{
          width: '90%',
          backgroundColor: 'white',
          position: 'relative',
          margin: '25px'
        }}
      >
        <h3>RELATED PRODUCTS</h3>
        <div
          style={
            {
              /* backgroundColor:'#f5f5f5' */
            }
          }
        >
          <BackArrow
            onClick={() =>
              backClick(relatedSliderRef, backButton, forwardButton)
            }
            ref={backButton}
            className="fa-solid fa-circle-chevron-left fa-36px"
          ></BackArrow>
          <ForwardArrow
            onClick={() =>
              forwardClick(relatedSliderRef, backButton, forwardButton)
            }
            ref={forwardButton}
            className="fa-solid fa-circle-chevron-right fa-36px"
          ></ForwardArrow>
          {slidingCards}
        </div>
      </div>
      <Outfits />
    </>
  );
}
