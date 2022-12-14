import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import FavoritesDelete from "../component/features/favorites/FavoritesDelete";

import { useFavorites } from "../component/features/favorites/use-favorites";
import { itemsVariant } from "../component/animation";

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
            favorites.map((el) => (
              <motion.div
                variants={itemsVariant}
                initial="hidden"
                animate="visible"
                exit="exit"
                whileHover={{ scale: 1.1 }}
                key={el.filmId}
                className="card"
              >
                <FavoritesDelete {...el} />
                <Link className="link" to={`/movie/${el.filmId}/`}>
                  <div className="card-image">
                    <img
                      className="medium_img"
                      src={el.posterUrlPreview}
                      alt={el.nameRu}
                    />
                    <span className="card-title white-text green ">
                      {el.rating}
                    </span>
                  </div>
                  <div className="card-content top250_title_content">
                    <h5 className="film_name">{el.nameRu} </h5>
                    <span> {el.year}, </span>
                    <span>
                      {el.genres.map((el) => (
                        <span key={el.genre}>
                          <span>{el.genre} </span>
                        </span>
                      ))}
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
        </div>
      )}
    </div>
  );
}
