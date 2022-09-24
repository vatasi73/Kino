import React from "react";

import { useDispatch } from "react-redux";
import { setDeleteFromFavorites } from "./favorites-slice";

export default function FavoritesDelete(movie) {
  const dispatch = useDispatch();
  const handleDeleteClick = () => {
    dispatch(setDeleteFromFavorites(movie.filmId));
  };

  return (
    <div>
      <i
        onClick={handleDeleteClick}
        style={{ color: "yellow" }}
        className="medium material-icons favorites"
      >
        turned_in_not
      </i>
    </div>
  );
}
