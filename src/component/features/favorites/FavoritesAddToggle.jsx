import React from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  selectAddFavorites,
  setAddFavorites,
  setDeleteFromFavorites,
} from "./favorites-slice";

export default function FavoritesAddToggle(movie) {
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
  return (
    <div>
      <i
        onClick={handleClick}
        style={{ color: isFavorit ? "yellow" : "white" }}
        className="medium material-icons favorites"
      >
        turned_in_not
      </i>
    </div>
  );
}
