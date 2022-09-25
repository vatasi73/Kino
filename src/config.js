export const API_KEY = process.env.REACT_APP_API_KEY;

export const top250Movie = (page) =>
  `https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=${page}`;

export const searchMovieById = (filmId) =>
  `https://kinopoiskapiunofficial.tech/api/v2.2/films/${filmId}`;

export const similarFilm = (
  filmId
) => `https://kinopoiskapiunofficial.tech/api/v2.2/films/${filmId}/similars
  `;
export const searchMovieByKeyWord = (keyword) =>
  `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${encodeURI(
    keyword
  )}`;
