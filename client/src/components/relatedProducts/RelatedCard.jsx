import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import getRelatedStyle from '../../actions/relatedStyleAction';

export default function RelatedCard({ item, index }) {
  const { id, name, category, default_price } = item;
  const dispatch = useDispatch();

  const productDetail = useSelector((state) => state.productDetail);
  const { relatedStyle, loading } = useSelector((state) => state.relatedStyle);
  var photo = ''
  if (!loading && relatedStyle) {
    photo = relatedStyle[index].results[0].photos[0].url
    console.log(relatedStyle)
    var {results} = relatedStyle

  }
    return (
      <Link to={`/${id}`}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'column',
            width: '177px',
            outline: '2px solid black'
          }}
        >
           <img
            src={photo}
            style={{ width: '177px' }}
            alt="related product"
        />
          <p>{category}</p>
          <p>test</p>
          <span className="placeholder" style={{ fontWeight: 'bold' }}>
            {name}
          </span>
          <span>{`$${default_price}`}</span>
        </div>
      </Link>
    );

}
