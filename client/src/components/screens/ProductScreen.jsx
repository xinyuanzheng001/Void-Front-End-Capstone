import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import Detail from '../detail/Detail';
import Questions from '../question/Questions';
import Rating from '../rating/Rating';
import RelatedProducts from '../relatedProducts/RelatedProducts';
import getProductDetail from '../../actions/productDetailAction';
import getProductStyle from '../../actions/productStyleAction';

export default function ProductScreen() {
  // 37311 - First product ID in the API
  let { id } = useParams();
  id = id >= 37311 ? id : 37311;
  const dispatch = useDispatch();
  const productDetail = useSelector((state) => state.productDetail);
  const productStyle = useSelector((state) => state.productStyle);
  const { loading } = productDetail;
  useEffect(() => {
    dispatch(getProductDetail(id));
    dispatch(getProductStyle(id));
  }, [id, dispatch]);
  console.log(loading);
  console.log(productStyle);
  return (
    <div>
      {loading === false && (
        <>
          <Detail />
          <Questions />
          <Rating />
          <RelatedProducts />
        </>
      )}
    </div>
  );
}
