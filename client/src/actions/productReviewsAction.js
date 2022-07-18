import {
  GET_PRODUCT_REVIEWS_REQUEST,
  GET_PRODUCT_REVIEWS_SUCCESS,
  GET_PRODUCT_REVIEWS_FAIL
} from './types';
import axios from 'axios';

const getProductReviews = (id) => async (dispatch) => {
  try {
    dispatch({
      type: GET_PRODUCT_REVIEWS_REQUEST
    });
    const config = {
      headers: {
        Authorization: process.env.API_KEY
      }
    };
    const { data } = await axios.get(
      `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/?product_id=${id}&count=1000`,
      config
    );
    dispatch({
      type: GET_PRODUCT_REVIEWS_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: GET_PRODUCT_REVIEWS_FAIL,
      payload: error
    });
  }
};

export default getProductReviews;
