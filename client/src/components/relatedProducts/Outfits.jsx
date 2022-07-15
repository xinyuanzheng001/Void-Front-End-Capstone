import React, { useState, useEffect } from 'react';
//import Stars from
import { useSelector, useDispatch } from 'react-redux';
import RelatedCard from './RelatedCard';
import OutfitCard from './OutfitCard';
import getRelatedDetails from '../../actions/relatedDetailsAction';
import getRelatedStyle from '../../actions/relatedStyleAction';
import { addOutfits, removeOutfits } from '../../actions/addOutfitsAction';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import transparentStar from '../../images/transparentstar.png';
import { OutfitCardContainer, AddOutfitsStyled } from './styles/Outfits.styled';

export default function Outfits() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2.5,
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
  const { productDetail } = useSelector((state) => state.productDetail);
  const { productStyle } = useSelector((state) => state.productStyle);
  const outfits = useSelector((state) => state.outfits);
  const addedOutfit = { style: productStyle, details: productDetail };
  const handleClick = (event) => {
    console.log('Clicked');
    dispatch(addOutfits(addedOutfit));
  }
  var cards = '';
  var slidingCards = '';
  if (!loading && relatedDetails) {
    var cards = outfits.map((item, index) => {
      return (
        <OutfitCard
          item={item.details}
          outfitStyle={item.style}
          key={index}
          index={index}
        />
      );
    });
    function RelatedSlider() {
      return (
        <Slider {...settings} style={{ display: 'flex' }}>
          {cards}
        </Slider>
      );
    }
    var slidingCards = RelatedSlider();
  }

  return (
    <div style={{ width: '1000px', backgroundColor: 'white' }}>
      <h3>Your Outfit</h3>
      <div style={{ display: 'flex' }}>
          <div style={{display: 'flex', flexDirection: "columns",
          boxShadow: '3px 1px 10px 0px white inset', margin: '10px',
          position: 'relative', backgroundColor: 'gray', width: '200px', height: '350px', borderRadius: '10px'}}>
        <OutfitCardContainer>
          <span>Add to Oufit</span>
          <AddOutfitsStyled
            className="fa-solid fa-plus fa-5x"
            onClick={handleClick}
          ></AddOutfitsStyled>
        </OutfitCardContainer>
          </div>
        <div style={{ width: '680px', }}>{slidingCards}</div>
      </div>
    </div>
  );
}
