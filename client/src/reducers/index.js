import { combineReducers } from 'redux';
import productDetailReducer from './productDetailReducer';
import productStyleReducer from './productStyleReducer';
import relatedProductsReducer from './relatedProductsReducer';
import productReviewMetaDataReducer from './productReviewMetaDataReducer';
import productReviewsReducer from './productReviewsReducer';

export default combineReducers({
  productDetail: productDetailReducer,
  productStyle: productStyleReducer,
  productMetaData: productReviewMetaDataReducer,
  productReviews: productReviewsReducer,
  relatedProducts: relatedProductsReducer
});
