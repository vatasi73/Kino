import { SET_SIMILAR } from "./similarAction";

const initialState = {
  similarCurrentMovie: [],
};

export const similarMovieReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case SET_SIMILAR:
      return {
        ...state,
        similarCurrentMovie: payload,
      };
    default:
      return state;
  }
};
