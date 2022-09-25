import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectAddFavorites } from "./favorites-slice";
import { useFavorites } from "./use-favorites";

export default function FavoritesLink(movie) {
  const { favorites } = useFavorites(movie);
  return (
    <div className="favorites_link">
      <Link to={`/favorites`}>
        <i
          style={{ color: favorites.length ? "yellow" : "white" }}
          className="medium material-icons favorites"
        >
          turned_in_not
        </i>{" "}
      </Link>
    </div>
  );
}
