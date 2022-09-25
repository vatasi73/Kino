import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { setClear } from "../controls/contols-slice";
export const setSearchMovie = createAsyncThunk(
  "@@searchMovie/load-search",
  (page, { extra: { client, api }, rejectWithValue }) => {
    try {
      return client.get(api.searchMovieByKeyWord(page), {
        headers: {
          "X-API-KEY": api.API_KEY,
        },
      });
    } catch (error) {
      if (error instanceof Error) return rejectWithValue(error.massage);
      return rejectWithValue("Unknown error");
    }
  }
);

const initialState = {
  status: "idle",
  error: null,
  search: "",
  searchList: [],
  isSearch: false,
};

const top250movieslice = createSlice({
  name: "@@top250movie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setSearchMovie.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });
    builder.addCase(setSearchMovie.rejected, (state, action) => {
      state.status = "rejected";
      state.error = action.payload || "Ошибка сервера";
    });

    builder.addCase(setSearchMovie.fulfilled, (state, action) => {
      state.status = "received";
      state.list = action.payload.data.films;
    });
    builder.addCase(setSearchMovie, (state, action) => {
      state.currentPage = action.payload;
    });
  },
});
export const { setCurrentPage } = top250movieslice.actions;
export const top250MovieReducer = top250movieslice.reducer;

//selectors
export const selectMovieInfo = (state) => ({
  status: state.top250Movie.status,
  error: state.top250Movie.error,
});
export const selectTop250Movie = (state) => state.top250Movie.list;

export const selectVisibleItems = (state, { search = "", sort = "" }) => {
  return state.top250Movie.list.filter(
    (item) =>
      item.nameRu.toLowerCase().includes(search.toLowerCase()) &&
      (!sort.length ||
        item.genres.map((el) => el.genre).includes(sort.toLowerCase()))
  );
};

export const selectCurrentPage = (state) => state.top250Movie.currentPage;

export const selectAddFavorites = (state) => state.top250Movie.favorites;
