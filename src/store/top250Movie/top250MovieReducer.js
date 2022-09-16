import { SET_CLEAR } from "../search/searchAction";
import {
  SET_MOVIES,
  SET_CURRENT_PAGE,
  SET_ERROR,
  SET_LOADING,
  SET_ADD_FAVORITES,
} from "./top250MovieAction";

const initialState = {
  status: "idle",
  error: null,
  list: [],
  currentPage: 1,
  favorites: [],
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
    case SET_ADD_FAVORITES:
      let list = JSON.parse(JSON.stringify(state.list)).map((film) =>
        film.filmId === payload.filmId
          ? { ...film, status: !film.status }
          : { ...film }
      );

      let film = state.favorites.find((e) => e.filmId === payload.filmId);

      let favorites = film
        ? state.favorites.filter((e) => e.filmId !== film.filmId)
        : [...state.favorites, payload];

      return {
        ...state,
        list,
        favorites,
      };
    default:
      return state;
  }
};
