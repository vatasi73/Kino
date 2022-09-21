import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { setClear } from "../controls/contols-slice";
export const setLoadTop250Movie = createAsyncThunk(
  "@@top250movie/load-top250movie",
  (page, { extra: { client, api } }) => {
    return client.get(api.top250Movie(page), {
      headers: {
        "X-API-KEY": api.API_KEY,
      },
    });
  }
);

const initialState = {
  status: "idle",
  error: null,
  list: [],
  currentPage: 1,
  favorites: [],
};

const top250movieslice = createSlice({
  name: "@@top250movie",
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(setLoadTop250Movie.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });
    builder.addCase(setLoadTop250Movie.rejected, (state, action) => {
      state.status = "rejected";
      state.error = action.payload || action.meta.error;
    });

    builder.addCase(setLoadTop250Movie.fulfilled, (state, action) => {
      state.status = "received";
      state.list = action.payload.data.films;
    });
    builder.addCase(setLoadTop250Movie, (state, action) => {
      state.currentPage = action.payload;
    });
    builder.addCase(setClear, (state) => {
      state.currentPage = 1;
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
