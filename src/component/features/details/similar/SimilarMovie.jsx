import React from "react";
import { Link } from "react-router-dom";
export default function SimilarMovie(el) {
  const { posterUrl, nameRu, filmId } = el;
  return (
    <div className="card similar animation">
      <Link to={`/movie/${filmId}/`} className="link">
        <div className="card-image">
          <img src={posterUrl} alt={nameRu} />
        </div>
        <h6 className="similar_title">{nameRu}</h6>
      </Link>
    </div>
  );
}
