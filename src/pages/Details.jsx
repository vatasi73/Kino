import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { useNavigate, useParams } from "react-router-dom";

import SimilarMovie from "../component/SimilarMovie";
import { selectCurrentMovie } from "../store/details/details.Selector";
import { loadMovieById } from "../store/details/detailsAction";
import { loadSimilarMovie } from "../store/similar/similarAction";
import { selectSimilarMovie } from "../store/similar/similarSelector";
export default function Details() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currentMovie = useSelector(selectCurrentMovie);
  const similarMovie = useSelector(selectSimilarMovie);

  useEffect(() => {
    dispatch(loadSimilarMovie(id));
  }, [id, dispatch]);

  useEffect(() => {
    dispatch(loadMovieById(id));
  }, [id, dispatch]);

  return (
    <div className="container content">
      {currentMovie && (
        <div className="details_movie">
          <div className="card details">
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
              {" "}
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
  );
}
