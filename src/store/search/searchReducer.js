import { SET_CLEAR, SET_SEARCH, SET_SORT } from "./searchAction";

const initialState = {
  search: "",
  sort: "",
};

export const searchReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_SEARCH:
      return {
        ...state,
        search: payload,
      };
    case SET_SORT:
      return {
        ...state,
        sort: payload,
      };
    case SET_CLEAR:
      return initialState;
    default:
      return state;
  }
};
