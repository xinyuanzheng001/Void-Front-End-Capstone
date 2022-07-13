import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default function RelatedCard({item}) {
 const {id, name, category, default_price} = item
  const productStyle = useSelector((state) => state.productStyle);
  const productDetail = useSelector((state) => state.productDetail);

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
          src={productStyle.productStyle.results[0].photos[0].url}
          style={{ width: '177px' }}
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
