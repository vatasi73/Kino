export const SET_MOVIES = `@@movie/SET_MOVIES`;
export const SET_CURRENT_PAGE = "@@movie/SET_CURRENT_PAGE";
export const SET_LOADING = `@@movie/SET_LOADING`;
export const SET_ERROR = `@@movie/SET_ERROR`;
export const SET_ADD_FAVORITES = "@@favorits/SET_ADD_FAVORITES";
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
export const setAddFavorites = (id) => ({
  type: SET_ADD_FAVORITES,
  payload: id,
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
      .then(({ data }) =>
        dispatch(
          settop250Movie(data.films.map((_) => ({ ..._, status: false })))
        )
      )
      .catch((err) => dispatch(setError(err.message)));
  };
