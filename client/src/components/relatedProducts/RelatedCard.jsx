import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import getRelatedStyle from '../../actions/relatedStyleAction';

export default function RelatedCard({ item }) {
  const { id, name, category, default_price } = item;
  const dispatch = useDispatch();
  const productStyle = useSelector((state) => state.productStyle);
  const productDetail = useSelector((state) => state.productDetail);
  useEffect(() => {
    dispatch(getRelatedStyle(id));
  }, [id, dispatch]);
  const { relatedStyle, loading } = useSelector((state) => state.relatedStyle);
  if (!loading && relatedStyle) {
    console.log(relatedStyle)
    var {results} = relatedStyle
    var photo = results[0].photos[0].url

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
          <span className="placeholder" style={{ fontWeight: 'bold' }}>
            {name}
          </span>
          <span>{`$${default_price}`}</span>
        </div>
      </Link>
    );
  }
}
