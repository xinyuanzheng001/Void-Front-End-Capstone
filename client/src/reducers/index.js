import { combineReducers } from 'redux';
import productDetailReducer from './productDetailReducer';
import productStyleReducer from './productStyleReducer';

export default combineReducers({
  productDetail: productDetailReducer,
  productStyle: productStyleReducer
});
