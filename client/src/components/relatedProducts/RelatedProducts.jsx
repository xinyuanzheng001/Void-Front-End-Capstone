import React, { useState, useEffect } from 'react';
//import Stars from
import { useSelector, useDispatch } from 'react-redux';
import RelatedCard from './RelatedCard';
import getRelatedDetails from '../../actions/relatedDetailsAction';


export default function RelatedProducts() {
  const {relatedProducts} = useSelector((state) => state.relatedProducts)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRelatedDetails(relatedProducts));
  }, [relatedProducts, dispatch])
  const {relatedDetails, loading} = useSelector((state) => state.relatedDetails)

  var cards = ''
  if  (!loading && relatedDetails) {
    var cards = relatedDetails.map((item, index) => {
      return (
        <RelatedCard item={item} key={index} style={{display: "flex", padding: "200px"}} />
      )
    });
  }

  return (
    <div>
      <h3>RELATED PRODUCTS</h3>
    <div style ={{display: "flex", justifyContent:"space-around", width: "1000px"}}>
      {cards}
      {/* Map the related cards based on info from the store */}
    </div>
    </div>
  );
}

//