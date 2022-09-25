import React from "react";

import { useDispatch } from "react-redux";
import { setDeleteFromFavorites } from "./favorites-slice";
import { useFavorites } from "./use-favorites";

export default function FavoritesDelete(movie) {
  const { deleteFilm } = useFavorites(movie);

  return (
    <div>
      <i
        onClick={deleteFilm}
        style={{ color: "yellow" }}
        className="medium material-icons favorites"
      >
        turned_in_not
      </i>
    </div>
  );
}
