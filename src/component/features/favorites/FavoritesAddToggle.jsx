import React from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  selectAddFavorites,
  setAddFavorites,
  setDeleteFromFavorites,
} from "./favorites-slice";
import { useFavorites } from "./use-favorites";

export default function FavoritesAddToggle(movie) {
  const { handleClick, onFavorite } = useFavorites(movie);
  return (
    <div>
      <i
        onClick={handleClick}
        style={{ color: onFavorite ? "yellow" : "white" }}
        className="medium material-icons favorites"
      >
        turned_in_not
      </i>
    </div>
  );
}
