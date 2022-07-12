import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default function RelatedCard() {
  const productStyle = useSelector((state) => state.productStyle);
  const productDetail = useSelector((state) => state.productDetail);
  const { default_price, name, category } = productDetail.productDetail;
  return (
    <Link to={`/${productDetail.productDetail.id}`}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '177px',
          outline: '2px solid black'
        }}
      >
        <img
          src={productStyle.productStyle.results[0].photos[0].url}
          style={{ width: '177px' }}
        />
        <p>{productDetail.productDetail.category}</p>
        <span className="placeholder" style={{ fontWeight: 'bold' }}>
          {productDetail.productDetail.name}
        </span>
        <span>{`$${default_price}`}</span>
      </div>
    </Link>
  );
}
