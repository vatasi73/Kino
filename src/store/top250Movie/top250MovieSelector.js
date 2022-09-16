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
