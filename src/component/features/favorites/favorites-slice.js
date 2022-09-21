import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "@@favorites",
  initialState: {
    itemsInFavorites: [],
  },
  reducers: {
    setAddFavorites: (state, action) => {
      state.itemsInFavorites.push(action.payload);
    },
    setDeleteFromFavorites: (state, action) => {
      state.itemsInFavorites = state.itemsInFavorites.filter(
        (movie) => movie.filmId !== action.payload
      );
    },
  },
});

export const { setAddFavorites, setDeleteFromFavorites } =
  favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;

export const selectAddFavorites = (state) => state.favorites.itemsInFavorites;
