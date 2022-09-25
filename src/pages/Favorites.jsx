import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import FavoritesDelete from "../component/features/favorites/FavoritesDelete";

import { selectAddFavorites } from "../component/features/favorites/favorites-slice";
import { useFavorites } from "../component/features/favorites/use-favorites";

export default function Favorites(movie) {
  const { favorites } = useFavorites(movie);
  return (
    <div className="container content">
      {!favorites.length ? (
        <h5 className="favorites_null_title">
          Ваш список избранных фильмов пуст
        </h5>
      ) : (
        <div className="items">
          {!!favorites.length &&
            favorites.map((el, i) => (
              <div key={i} className="card">
                <FavoritesDelete {...el} />
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
            ))}
        </div>
      )}
    </div>
  );
}
