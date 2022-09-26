import React from "react";
import { motion } from "framer-motion";
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
