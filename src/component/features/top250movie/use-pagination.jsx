import { useDispatch, useSelector } from "react-redux";
import { createPages } from "./createPages";
import { selectCurrentPage, setCurrentPage } from "./top250movie-slice";

export const usePagination = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector(selectCurrentPage);
  const handleCurrentPage = (e) => {
    dispatch(setCurrentPage(e));
  };
  const pagesCount = 13;
  const pages = [];

  createPages(pages, pagesCount, currentPage);
  return [pages, currentPage, handleCurrentPage];
};
