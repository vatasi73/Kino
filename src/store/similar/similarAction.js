export const SET_SIMILAR = "@@similar/SET_SIMILAR";

const setSimilarMovie = (movie) => ({
  type: SET_SIMILAR,
  payload: movie,
});

export const loadSimilarMovie =
  (filmId) =>
  (dispatch, _, { client, api }) => {
    client
      .get(api.similarFilm(filmId), {
        headers: {
          "X-API-KEY": api.API_KEY,
        },
      })
      .then(({ data }) => dispatch(setSimilarMovie(data.items.slice(0, 6))));
  };
