import React from "react";
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
