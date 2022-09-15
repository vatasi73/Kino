import React from "react";
import { useSelector } from "react-redux";
import { selectFavorites } from "../store/favourites/favouritesSelector";

export default function Favorites() {
  const addFavourites = useSelector(selectFavorites);

  return (
    <div>
      {addFavourites.map((el) => (
        <div>
          <h6 key={el.filmId}>{el.nameRu}</h6>
        </div>
      ))}
    </div>
  );
}
