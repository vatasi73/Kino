import React from "react";

import { Link } from "react-router-dom";
import FavoritesAddToggle from "../../features/favorites/FavoritesAddToggle";

export default function Top250MovieItems(item) {
  const { nameRu, year, rating, posterUrlPreview, genres, filmId } = item;

  return (
    <div className="card">
      <FavoritesAddToggle {...item} />
      <div className="card-image">
        <img src={posterUrlPreview} alt={nameRu} />
        <span className="card-title white-text green ">{rating}</span>
      </div>
      <div className="card-content">
        <span>{year}, </span>
        <span>
          {genres.map((el) => (
            <span key={el.genre}>
              <span>{el.genre} </span>
            </span>
          ))}
        </span>
      </div>
      <div className="card-action">
        <Link to={`/movie/${filmId}/`}>{nameRu}</Link>
      </div>
    </div>
  );
}
