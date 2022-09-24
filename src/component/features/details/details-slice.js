import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const setLoadMovieById = createAsyncThunk(
  "@@details/load-details",
  (filmId, { extra: { client, api }, rejectWithValue }) => {
    try {
      return client.get(api.searchMovieById(filmId), {
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
      state.error = action.payload || "Ошибка сервера";
    });
    builder.addCase(setLoadMovieById.fulfilled, (state, { payload }) => {
      const { data } = payload;
      if (data) {
        const currentMovie = {
          ...data,
          filmId: data.kinopoiskId,
        };
        state.status = "received";
        state.currentMovie = currentMovie;
      }
    });
  },
});
export const selectDetailsInfo = (state) => ({
  status: state.movieDetails.status,
  error: state.movieDetails.error,
});
export const detailsReducer = setDetailsSlice.reducer;

export const selectCurrentMovie = (state) => state.movieDetails.currentMovie;
