// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import Detail from './detail/Detail';
import Questions from './question/Questions';
import Rating from './rating/Rating';
import RelatedProducts from './relatedProducts/RelatedProducts';

export default function App() {
  // const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products')
  //     .then(({ data }) => setProducts(data))
  //     .catch((err) => console.log(err));
  // });
  return (
    <>
      <div>Hello world</div>
      <p>test2</p>
      <p>test3</p>
      <Detail />
      <Questions />
      <Rating />
      <RelatedProducts />
    </>
  );
}
