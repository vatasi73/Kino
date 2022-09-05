import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../../store/top250Movie/top250MovieAction";
import { selectCurrentPage } from "../../store/top250Movie/top250MovieSelector";
import { createPages } from "./createPages";

export default function Pagination() {
  const dispatch = useDispatch();

  const currentPage = useSelector(selectCurrentPage);
  const pagesCount = 13;
  const pages = [];

  createPages(pages, pagesCount, currentPage);

  return (
    <div className="pagination_block">
      <ul className="pagination">
        {pages.map((page, index) => (
          <li key={index} className={currentPage === page ? "active" : ""}>
            <Link onClick={() => dispatch(setCurrentPage(page))} to={page}>
              {page}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
