import { FILTER_TOGGLE, FILTER_REMOVE } from '../actions/types';

export default function ratingFilterReducer(state = [], action) {
  switch (action.type) {
    case FILTER_TOGGLE:
      const toToggle = action.payload;
      const currentFilters = state.slice();

      let index = currentFilters.indexOf(toToggle);
      if (index !== -1) {
        currentFilters.splice(index, 1);
      } else {
        currentFilters.push(toToggle);
      }
      return currentFilters;
    case FILTER_REMOVE:
      return [];
    default:
      return state;
  }
}
