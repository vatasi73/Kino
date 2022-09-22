import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectSimilarMovie, setLoadSimilar } from "./similar-slice";

export const useSimilar = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const similarMovie = useSelector(selectSimilarMovie);
  useEffect(() => {
    dispatch(setLoadSimilar(id));
  }, [id, dispatch]);

  return [similarMovie];
};
