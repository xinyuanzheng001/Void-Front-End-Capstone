import { combineReducers } from 'redux';
import productDetailReducer from './productDetailReducer';
import productStyleReducer from './productStyleReducer';
import relatedProductsReducer from './relatedProductsReducer';
import productReviewMetaDataReducer from './productReviewMetaDataReducer';
import productQuestionReducer from './productQuestionReducer';
import productReviewsReducer from './productReviewsReducer';

export default combineReducers({
  productDetail: productDetailReducer,
  productStyle: productStyleReducer,
  productMetaData: productReviewMetaDataReducer,
<<<<<<< HEAD
=======
  productQuestion: productQuestionReducer,
>>>>>>> 48fef1ffd991420a7b6b38fed3681c3093a621d6
  productReviews: productReviewsReducer,
  relatedProducts: relatedProductsReducer
});
