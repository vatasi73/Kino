import React from "react";

import { Link } from "react-router-dom";
import FavoritesAddToggle from "../../features/favorites/FavoritesAddToggle";

export default function Top250MovieItems(item) {
  const { nameRu, year, rating, posterUrlPreview, genres, filmId } = item;

  return (
    <div className="card">
      <FavoritesAddToggle {...item} />
      <Link className="link" to={`/movie/${filmId}/`}>
        <div className="card-image ">
          <img className="medium_img" src={posterUrlPreview} alt={nameRu} />
          <span className="card-title white-text green ">{rating}</span>
        </div>
        <div className="card-content top250_title_content">
          <h5 className="film_name">{nameRu} </h5>

          <span> {year}, </span>
          <span>
            {genres.map((el) => (
              <span key={el.genre}>
                <span>{el.genre} </span>
              </span>
            ))}
          </span>
        </div>
      </Link>
    </div>
  );
}
