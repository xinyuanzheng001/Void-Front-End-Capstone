import axios from 'axios';
import {
  GET_PRODUCT_STYLE_REQUEST,
  GET_PRODUCT_STYLE_SUCCESS,
  GET_PRODUCT_STYLE_FAIL
} from './types';

const getProductStyle = (id) => async (dispatch) => {
  try {
    dispatch({
      type: GET_PRODUCT_STYLE_REQUEST
    });
    const config = {
      headers: {
        Authorization: process.env.API_KEY
      }
    };
    const { data } = await axios.get(
      `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${id}/styles`,
      config
    );
    dispatch({
      type: GET_PRODUCT_STYLE_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: GET_PRODUCT_STYLE_FAIL,
      payload: error
    });
  }
};

export default getProductStyle;
