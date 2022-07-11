import axios from 'axios';
import {
  GET_PRODUCT_DETAIL_REQUEST,
  GET_PRODUCT_DETAIL_SUCCESS,
  GET_PRODUCT_DETAIL_FAIL
} from './types';

const getProductDetail = (id) => async (dispatch) => {
  try {
    dispatch({
      type: GET_PRODUCT_DETAIL_REQUEST
    });
    const config = {
      headers: {
        Authorization: process.env.API_KEY
      }
    };
    const { data } = await axios.get(
      `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${id}`,
      config
    );
    dispatch({
      type: GET_PRODUCT_DETAIL_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: GET_PRODUCT_DETAIL_FAIL,
      payload: error
    });
  }
};

export default getProductDetail;
