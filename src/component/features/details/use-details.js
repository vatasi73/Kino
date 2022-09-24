import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  selectCurrentMovie,
  selectDetailsInfo,
  setLoadMovieById,
} from "./details-slice";

export const useDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { error, status } = useSelector(selectDetailsInfo);
  const currentMovie = useSelector(selectCurrentMovie);
  useEffect(() => {
    dispatch(setLoadMovieById(id));
  }, [id, dispatch]);

  return [currentMovie, error, status];
};
