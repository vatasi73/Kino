import { SET_CLEAR } from "../search/searchAction";
import {
  SET_MOVIES,
  SET_CURRENT_PAGE,
  SET_ERROR,
  SET_LOADING,
} from "./top250MovieAction";

const initialState = {
  status: "idle",
  error: null,
  list: [],
  currentPage: 1,
};

export const top250MovieReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        status: "loading",
        error: null,
      };
    case SET_ERROR:
      return {
        ...state,
        status: "rejected",
        error: payload,
      };
    case SET_MOVIES:
      return {
        ...state,
        status: "received",
        list: payload,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: payload,
      };
    case SET_CLEAR:
      return {
        ...state,
        currentPage: 1,
      };

    default:
      return state;
  }
};
