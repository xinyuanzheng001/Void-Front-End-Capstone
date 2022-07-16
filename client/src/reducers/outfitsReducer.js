import { OUTFITS_ADDED, OUTFITS_REMOVED } from '../actions/types';

export default function outfitsReducer (state = [], action) {
  switch(action.type){
    case OUTFITS_ADDED:
      console.log(OUTFITS_ADDED);
      const nextOutfit = action.payload
      return [nextOutfit, ...state]
    case OUTFITS_REMOVED:
      const id = action.payload.style.product_Id
      const stateCopy = state.slice();
      const index = stateCopy.findIndex(item => {
        item.style.product_Id === id
      })
      stateCopy.splice(index, 1);
      return stateCopy;
    default:
      return state;
  }
}



