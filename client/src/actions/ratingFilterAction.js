import {
  FILTER_TOGGLE,
  FILTER_REMOVE
} from './types';

export const toggleFilter = (rating) => (dispatch, getState) => {
  dispatch({
    type: FILTER_TOGGLE,
    payload: rating
  });
};

export const removeFilter = () => (dispatch, getState) => {
  dispatch({
    type: FILTER_REMOVE,
    payload: null
  });
};
