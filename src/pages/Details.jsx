import React from "react";

import SimilarMovie from "../component/features/details/similar/SimilarMovie";
import ErrorMsg from "../component/ErrorMsg";
import { useDetails } from "../component/features/details/use-details";
import { useSimilar } from "../component/features/details/similar/use-similar";

import Loading from "../component/Loading";
import FavoritesAddToggle from "../component/features/favorites/FavoritesAddToggle";
import FavoritesLink from "../component/features/favorites/FavoritesLink";

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
                <div className="container content animation">
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
                        <div className="details_title">
                          <h5>{currentMovie.nameRu}</h5>
                        </div>
                      </div>

                      <div>
                        <div className="card-content black-text details_description ">
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
                    {similarMovie.map((el) => (
                      <SimilarMovie key={el.filmId} {...el} />
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </>
      )}
    </>
  );
}
