import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import Detail from '../detail/Detail';
import Questions from '../question/Questions';
import Rating from '../rating/Rating';
import { Container } from '../styles/Container.styled';
import RelatedProducts from '../relatedProducts/RelatedProducts';
import getProductDetail from '../../actions/productDetailAction';
import getProductStyle from '../../actions/productStyleAction';
import getProductMetaData from '../../actions/productMetaDataAction';
import axios from 'axios';

export default function ProductScreen() {
  // 37311 - First product ID in the API
  let { id } = useParams();
  id = id >= 37311 ? id : 37311;
  const dispatch = useDispatch();
  const productDetail = useSelector((state) => state.productDetail);
  const productStyle = useSelector((state) => state.productStyle);
  const productMetaData = useSelector((state) => state.productMetaData);
  const { loading } = productDetail;
  const { loading: styleLoading } = productStyle;
  const { loading: metaDataLoading } = productMetaData;
  useEffect(() => {
    dispatch(getProductDetail(id));
    dispatch(getProductStyle(id));
    dispatch(getProductMetaData(id));
  }, [id, dispatch]);
  return (
    <Container>
      {loading === false &&
        styleLoading === false &&
        metaDataLoading === false && (
          <>
            <Detail />
            <RelatedProducts />
            <Questions />
            <Rating />
          </>
        )}
    </Container>
  );
}
