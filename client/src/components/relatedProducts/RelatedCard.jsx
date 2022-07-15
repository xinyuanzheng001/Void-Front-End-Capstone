import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import getRelatedStyle from '../../actions/relatedStyleAction';
import Stars from '../detail/Stars.jsx';
import transparentStar from '../../images/transparentstar.png';
import star from '../../images/star.png';

export default function RelatedCard({ item, index }) {
  const { id, name, category, default_price } = item;
  const dispatch = useDispatch();

  const productDetail = useSelector((state) => state.productDetail);
  const { relatedStyle, loading } = useSelector((state) => state.relatedStyle);
  var photo = '';
  if (!loading && relatedStyle) {
    photo = relatedStyle[index].results[0].photos[0].url;
    var { results } = relatedStyle;
  }
  return (
    <Link to={`/${id}`} style={{ textDecoration: 'none', color: 'grey' }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '200px',
          height: '350px',
          // outline: '1px solid black',
          margin: '10px',
          borderRadius: '10px',
          position: 'relative',
          textAlign: 'left',
          boxShadow: '3px 3px 5px 0px #949391'
        }}
      >
        <div>
          <img
            src={transparentStar}
            style={{
              width: '25px',
              position: 'absolute',
              top: '15px',
              right: '20px',
              borderRadius: '25%'
            }}
          />
        </div>
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
          alt="related product"
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
      </div>
    </Link>
  );
}
