import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAddFavorites,
  setAddFavorites,
  setDeleteFromFavorites,
} from "./favorites-slice";

export const useFavorites = (movie) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectAddFavorites);
  const [onFavorite, setOnFavorite] = useState(0);

  useEffect(() => {
    if (movie) {
      setOnFavorite(
        favorites.filter((el) => el.filmId === movie.filmId).length
      );
    }
  }, [favorites, movie]);

  const handleClick = (e) => {
    e.stopPropagation();
    if (onFavorite) {
      dispatch(setDeleteFromFavorites(movie.filmId));
    } else {
      dispatch(setAddFavorites(movie));
    }
  };

  const deleteFromFavorites = () => {
    dispatch(setDeleteFromFavorites(movie.filmId));
  };

  return {
    favorites,
    onFavorite,
    handleClick,
    deleteFilm: deleteFromFavorites,
  };
};
