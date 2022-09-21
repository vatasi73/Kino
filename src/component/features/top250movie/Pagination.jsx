import React from "react";
import { Link } from "react-router-dom";

import { usePagination } from "./use-pagination";

export default function Pagination() {
  const [pages, currentPage, handleCurrentPage] = usePagination();

  return (
    <div className="pagination_block">
      <ul className="pagination">
        {pages.map((page, index) => (
          <li key={index} className={currentPage === page ? "active" : ""}>
            <Link onClick={() => handleCurrentPage(page)} to={page}>
              {page}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
