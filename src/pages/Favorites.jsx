import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import FavoritesAddToggle from "../component/FavoritesAddToggle";

import { selectAddFavorites } from "../store/top250Movie/top250MovieSelector";

export default function Favorites(item) {
  const addFavourites = useSelector(selectAddFavorites);

  return (
    <div>
      {!!addFavourites.length &&
        addFavourites.map((el) => (
          <div className="items">
            {" "}
            <div className="card">
              <FavoritesAddToggle {...item} />
              <div className="card-image">
                <img src={el.posterUrlPreview} alt={el.nameRu} />
                <span className="card-title white-text green ">
                  {el.rating}
                </span>
              </div>
              <div className="card-content">
                <span>{el.year}, </span>
                <span>
                  {el.genres.map((el) => (
                    <span key={el.genre}>
                      <span>{el.genre} </span>
                    </span>
                  ))}
                </span>
              </div>
              <div className="card-action">
                <Link to={`/movie/${el.filmId}/`}>{el.nameRu}</Link>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
