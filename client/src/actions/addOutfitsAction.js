
import {
  OUTFITS_ADDED,
  OUTFITS_REMOVED
} from './types'
export const addOutfits = (outfit) => {
  return {
    type: OUTFITS_ADDED,
    payload: outfit,
  }
  // localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
}
export const removeOutfits = (removedOutfit) => {
  return {
    type: OUTFITS_REMOVED,
    payload: removedOutfit
  }
} 