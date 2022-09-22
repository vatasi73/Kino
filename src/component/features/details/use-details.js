import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectMovieInfo } from "../top250movie/top250movie-slice";
import { selectCurrentMovie, setLoadMovieById } from "./details-slice";

export const useDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const currentMovie = useSelector(selectCurrentMovie);
  useEffect(() => {
    dispatch(setLoadMovieById(id));
  }, [id, dispatch]);

  return [currentMovie];
};
