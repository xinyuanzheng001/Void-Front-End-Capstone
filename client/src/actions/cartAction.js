import {
  ADD_ITEM_TO_CART_REQUEST,
  ADD_ITEM_TO_CART_SUCCESS,
  ADD_ITEM_TO_CART_FAIL
} from './types';

const addItemToCart = (item) => (dispatch) => {
  dispatch({
    type: ADD_ITEM_TO_CART_SUCCESS,
    payload: {
      product_id: item.product_id,
      product_name: item.product_name,
      selected_size: item.selected_size,
      selected_qty: item.selected_qty,
      style_id: item.style_id,
      style_name: item.style_name,
      price: item.price,
      favorite: item.favorite
    }
  });
};

export default addItemToCart;
