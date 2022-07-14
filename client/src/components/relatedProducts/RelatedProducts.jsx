import React, { useState, useEffect } from 'react';
//import Stars from
import { useSelector, useDispatch } from 'react-redux';
import RelatedCard from './RelatedCard';
import getRelatedDetails from '../../actions/relatedDetailsAction';
import getRelatedStyle from '../../actions/relatedStyleAction';

export default function RelatedProducts() {
  const { relatedProducts } = useSelector((state) => state.relatedProducts);
  const dispatch = useDispatch();
  console.log({ relatedProducts });
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
  console.log({ relatedStyle }, {relatedDetails}, {relatedStyleLoading});

  var cards = '';
  if (!loading && relatedDetails) {
    var cards = relatedDetails.map((item, index) => {
      return (
        <RelatedCard
          item={item}
          key={index}
          index = {index}
          style={{ display: 'flex', padding: '200px' }}
        />
      );
    });
  }
  console.log({ cards });
  return (
    <div>
      <h3>RELATED PRODUCTS</h3>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          width: '1000px'
        }}
      >
        {cards}
      </div>
    </div>
  );
}
