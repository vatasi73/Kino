export const SET_ADD_FAVORITES = "@@favorits/SET_ADD_FAVORITES";
export const SET_REMOVE_FAVORITES = "@@favorits/SET_REMOVE_FAVORITES";

export const setAddFavorites = (id) => ({
  type: SET_ADD_FAVORITES,
  payload: id,
});

export const setRemoveFromFavorites = (id) => ({
  type: SET_REMOVE_FAVORITES,
  payload: id,
});
// export const ADD_TO_CART = "ADD_TO_CART";
// export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

// export const addToCart = (obj) => ({
//   type: ADD_TO_CART,
//   payload: obj,
// });

// export const removeFromCart = (id) => ({
//   type: REMOVE_FROM_CART,
//   payload: id,
// });
