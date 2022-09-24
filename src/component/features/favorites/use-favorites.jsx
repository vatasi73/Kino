import { useDispatch, useSelector } from "react-redux";
import {
  selectAddFavorites,
  setAddFavorites,
  setDeleteFromFavorites,
} from "./favorites-slice";

export const useFavorites = (movie) => {
  const dispatch = useDispatch();

  const favorites = useSelector(selectAddFavorites);

  const isFavorit = favorites.some((el) => el.filmId === movie.filmId);

  const handleClick = (e) => {
    e.stopPropagation();
    if (!isFavorit) {
      dispatch(setAddFavorites(movie));
    } else {
      dispatch(setDeleteFromFavorites(movie.filmId));
    }
  };

  const handleDeleteClick = () => {
    dispatch(setDeleteFromFavorites(movie.filmId));
  };

  return [favorites, isFavorit, handleClick, handleDeleteClick];
};
