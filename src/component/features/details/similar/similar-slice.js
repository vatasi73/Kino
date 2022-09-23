import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const setLoadSimilar = createAsyncThunk(
  "@@similar/load-similar",
  (filmId, { extra: { client, api }, rejectWithValue }) => {
    return client.get(api.similarFilm(filmId), {
      headers: {
        "X-API-KEY": api.API_KEY,
      },
    });
  }
);

const initialState = {
  status: "idle",
  error: null,
  similarCurrentMovie: [],
};

const setSimilarMovie = createSlice({
  name: "@@similar",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setLoadSimilar.fulfilled, (state, action) => {
      state.status = "received";
      state.similarCurrentMovie = action.payload.data.items.slice(0, 6);
    });
  },
});

export const SimilarMovieReducer = setSimilarMovie.reducer;
export const selectSimilarMovie = (state) =>
  state.similarMovie.similarCurrentMovie;
