import {
  GET_RELATED_STYLE_REQUEST,
  GET_RELATED_STYLE_SUCCESS,
  GET_RELATED_STYLE_FAIL
} from '../actions/types';

// eslint-disable-next-line default-param-last
export default function relatedStyleReducer(state = {}, action) {
  switch (action.type) {
    case GET_RELATED_STYLE_REQUEST:
      return { loading: true };
    case GET_RELATED_STYLE_SUCCESS:
      console.log("PAYLOAD", action.payload)
      return { loading: false, relatedStyle: action.payload };
    case GET_RELATED_STYLE_FAIL:
      console.log(action.payload)
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}
