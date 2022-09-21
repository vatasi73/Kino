import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectControls } from "../controls/contols-slice";
import {
  selectCurrentPage,
  selectMovieInfo,
  selectVisibleItems,
  setLoadTop250Movie,
} from "./top250movie-slice";

export const useTop250Movies = () => {
  const dispatch = useDispatch();

  const { status, error } = useSelector(selectMovieInfo);
  const controls = useSelector(selectControls);
  const movies = useSelector((state) => selectVisibleItems(state, controls));

  const currentPage = useSelector(selectCurrentPage);

  useEffect(() => {
    dispatch(setLoadTop250Movie(currentPage));
  }, [dispatch, currentPage]);
  return [movies, { status, error }, currentPage];
};
