import React from "react";
import { motion } from "framer-motion";
import { useDetails } from "../component/features/details/use-details";
import { useSimilar } from "../component/features/details/similar/use-similar";

import SimilarMovie from "../component/features/details/similar/SimilarMovie";
import ErrorMsg from "../component/ErrorMsg";
import Loading from "../component/Loading";
import FavoritesAddToggle from "../component/features/favorites/FavoritesAddToggle";
import FavoritesLink from "../component/features/favorites/FavoritesLink";

import { detailsVariant, itemsVariant } from "../component/animation";
export default function Details(item) {
  const [currentMovie, error, status] = useDetails();
  const [similarMovie] = useSimilar();

  return (
    <>
      <FavoritesLink key={item.filmId} />
      {error ? (
        <ErrorMsg />
      ) : (
        <>
          {status === "loading" ? (
            <Loading />
          ) : (
            <>
              {status === "received" && (
                <motion.div
                  variants={detailsVariant}
                  initial="hidden"
                  animate="visible"
                  className="container content"
                >
                  {currentMovie && (
                    <div className="details_movie">
                      <div className="card details">
                        <FavoritesAddToggle
                          key={currentMovie.filmId}
                          {...currentMovie}
                        />
                        <div className="card-image details">
                          <img
                            src={currentMovie.posterUrlPreview}
                            alt={currentMovie.nameRu}
                          />

                          <span className="card-title white-text green ">
                            {currentMovie.ratingKinopoisk}
                          </span>
                        </div>
                      </div>

                      <div>
                        <div className="card-content black-text details_description ">
                          <h5 className="details_movie_name">
                            {currentMovie.nameRu}
                          </h5>
                          <span>Описание:</span>
                          <p> {currentMovie.description}</p>
                          <span>Цитата:</span>
                          <p>{currentMovie.slogan}</p>
                          <span>Страна:</span>
                          {currentMovie.countries.map((el) => (
                            <p key={el.country}>{el.country}</p>
                          ))}
                          <span>Год:</span>
                          <p>{currentMovie.year}</p>
                          <span>Жанр:</span>

                          {currentMovie.genres.map((el) => (
                            <p key={el.genre}>{el.genre}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                  <span>Похожие фильмы:</span>
                  <div className="similar_items">
                    {similarMovie.map((el, i) => (
                      <motion.div
                        variants={itemsVariant}
                        initial="hidden"
                        animate="visible"
                        whileHover={{ scale: 1.1 }}
                        custom={i}
                      >
                        {" "}
                        <SimilarMovie key={el.filmId} {...el} />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </>
          )}
        </>
      )}
    </>
  );
}
