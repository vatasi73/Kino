export const SET_MOVIES = `@@movie/SET_MOVIES`;
export const SET_CURRENT_PAGE = "@@movie/SET_CURRENT_PAGE";
export const SET_LOADING = `@@movie/SET_LOADING`;
export const SET_ERROR = `@@movie/SET_ERROR`;
export const settop250Movie = (movie) => ({
  type: SET_MOVIES,
  payload: movie,
});
export const setCurrentPage = (page) => ({
  type: SET_CURRENT_PAGE,
  payload: page,
});
export const setLoading = () => ({
  type: SET_LOADING,
});
export const setError = (err) => ({
  type: SET_ERROR,
  payload: err,
});

export const loadTop250Movie =
  (page) =>
  (dispatch, _, { client, api }) => {
    dispatch(setLoading());
    client
      .get(api.top250Movie(page), {
        headers: {
          "X-API-KEY": api.API_KEY,
        },
      })
      .then(({ data }) => dispatch(settop250Movie(data.films)))
      .catch((err) => dispatch(setError(err.message)));
  };
