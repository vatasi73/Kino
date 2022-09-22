import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const setLoadMovieById = createAsyncThunk(
  "@@details/load-details",
  (filmId, { extra: { client, api } }) => {
    return client.get(api.searchMovieById(filmId), {
      headers: {
        "X-API-KEY": api.API_KEY,
      },
    });
  }
);

const initialState = {
  status: "idle",
  error: null,
  currentMovie: null,
};

const setDetailsSlice = createSlice({
  name: "@@details",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setLoadMovieById.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });
    builder.addCase(setLoadMovieById.rejected, (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    });
    builder.addCase(setLoadMovieById.fulfilled, (state, action) => {
      state.status = "received";
      state.currentMovie = action.payload.data;
    });
  },
});

export const detailsReducer = setDetailsSlice.reducer;

export const selectCurrentMovie = (state) => state.movieDetails.currentMovie;
