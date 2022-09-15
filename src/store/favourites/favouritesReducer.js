import { SET_ADD_FAVORITES, SET_REMOVE_FAVORITES } from "./favouritesAction";

const initialState = {
  list: [],
  status: false,
};

export const addFavouritesReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case SET_ADD_FAVORITES:
      return {
        ...state,
        status: true,
        list: [...state.list, payload],
      };

    case SET_REMOVE_FAVORITES:
      return {
        ...state,
        list: state.list.filter((item) => item.filmId !== payload.filmId),
        status: false,
      };
    default:
      return state;
  }
};
