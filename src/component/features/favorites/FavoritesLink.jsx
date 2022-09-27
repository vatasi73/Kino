import React from "react";

import { Link } from "react-router-dom";

import { useFavorites } from "./use-favorites";

export default function FavoritesLink(movie) {
  const { favorites } = useFavorites(movie);
  return (
    <div>
      <Link to={`/favorites`}>
        <i
          style={{ color: favorites.length ? "yellow" : "white" }}
          className="medium material-icons favorites_link"
        >
          turned_in_not
        </i>{" "}
      </Link>
    </div>
  );
}
