import { SET_ERROR } from "../top250Movie/top250MovieAction";
import { SET_MOVIE_BY_ID } from "./detailsAction";

const initialState = {
  currentMovie: null,
};

export const detailsMovieReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    // case SET_ERROR:
    //   return {
    //     ...state,
    //     status: "rejected",
    //     error: payload,
    //   };
    case SET_MOVIE_BY_ID:
      return {
        ...state,
        currentMovie: payload,
      };

    default:
      return state;
  }
};
