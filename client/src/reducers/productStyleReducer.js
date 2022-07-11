import {
  GET_PRODUCT_STYLE_REQUEST,
  GET_PRODUCT_STYLE_SUCCESS,
  GET_PRODUCT_STYLE_FAIL
} from '../actions/types';

// eslint-disable-next-line default-param-last
export default function productStyleReducer(state = {}, action) {
  switch (action.type) {
    case GET_PRODUCT_STYLE_REQUEST:
      return { loading: true };
    case GET_PRODUCT_STYLE_SUCCESS:
      return { loading: false, productStyle: action.payload };
    case GET_PRODUCT_STYLE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}
