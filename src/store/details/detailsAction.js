export const SET_MOVIE_BY_ID = `@@details/SET_MOVIE_BY_ID`;

const setMovieByid = (movie) => ({
  type: SET_MOVIE_BY_ID,
  payload: movie,
});

export const loadMovieById =
  (filmId) =>
  (dispatch, _, { client, api }) => {
    client
      .get(api.searchMovieById(filmId), {
        headers: {
          "X-API-KEY": api.API_KEY,
        },
      })
      .then(({ data }) => dispatch(setMovieByid(data)));
  };
