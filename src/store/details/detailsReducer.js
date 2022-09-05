import { SET_MOVIE_BY_ID } from "./detailsAction";

const initialState = {
  currentMovie: null,
};

export const detailsMovieReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case SET_MOVIE_BY_ID:
      return {
        ...state,
        currentMovie: payload,
      };

    default:
      return state;
  }
};
