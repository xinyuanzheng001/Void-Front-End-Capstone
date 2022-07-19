import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { addOutfits, removeOutfits } from '../../actions/addOutfitsAction';
import getRelatedStyle from '../../actions/relatedStyleAction';
import Stars from '../detail/Stars.jsx';
import transparentStar from '../../images/transparentstar.png';
import star from '../../images/star.png';
import { CardsIconStyled, OutfitContainer } from './styles/Outfits.styled'

export default function OutfitCard({ item, index, outfitStyle, removeOutfit }) {
  const { id, name, category, default_price } = item;
  const { results } = outfitStyle;
  const dispatch = useDispatch();
  const outfitToRemove = { style: outfitStyle, details: item };
  const productDetail = useSelector((state) => state.productDetail);
  const { relatedStyle, loading } = useSelector((state) => state.relatedStyle);
  var photo = '';

  const handleClick = (event) => {
    console.log('Clicked');
    dispatch(removeOutfits(outfitToRemove));
  };
  if (!loading && relatedStyle) {
    photo = results[0].photos[0].url;
  }
  return (
    <>
      <OutfitContainer >
        <div onClick={handleClick}>
        <CardsIconStyled>
          <i className="fa-solid fa-x" style={{opacity:'80%', fontSize: '15px'}} />
        </CardsIconStyled>
        </div>
        <div>
          <Link to={`/${id}`} style={{ textDecoration: 'none', color: '#458161' }}>
            <div
              style={{
                boxShadow: '3px 1px 10px 0px white inset',
                width: '200px',
                height: '350px',
                position: 'absolute',
                borderRadius: '10px',
                opacity: '95%'
                // zIndex: '9px',
              }}
            ></div>
            <img
              src={photo}
              style={{
                width: '200px',
                height: '225px',
                objectFit: 'cover',
                borderRadius: '10px 10px 0 0',
                boxShadow: '0 0 8px 8px white inset'
              }}
              alt={name}
            />
            <span style={{ margin: '0 0 0 10px' }}>{category}</span>
            <br />
            <span
              className="placeholder"
              style={{ fontWeight: 'bold', margin: '0 0 0 10px' }}
            >
              {name}
            </span>
            <span style={{ margin: '0 0 0 10px' }}>{`$${default_price}`}</span>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                margin: '7px auto',
                height: '30px',
                width: '130px'
              }}
            >
              <Stars product_id={id} style={{}} />
            </div>
          </Link>
        </div>
      </OutfitContainer>
    </>
  );
}
