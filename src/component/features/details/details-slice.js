import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const setMovieById = createAsyncThunk(
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
  currentMovie: null,
};

const setDetailsSlice = createSlice({
  name: "@@details",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setMovieById.fulfilled, (state, action) => {
      state.currentMovie = action.payload.data;
    });
  },
});

export const detailsReducer = setDetailsSlice.reducer;

// export const selectDetails = (state) => state.movieDetails;

export const selectCurrentMovie = (state) => state.movieDetails.currentMovie;
