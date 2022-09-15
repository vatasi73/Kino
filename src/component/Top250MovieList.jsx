import { useDispatch, useSelector } from "react-redux";

import React, { useEffect } from "react";

import { loadTop250Movie } from "../store/top250Movie/top250MovieAction";

import Top250MovieItems from "./Top250MovieItems";

import { selectSC } from "../store/search/searchSelector";
import {
  selectCurrentPage,
  selectMovieInfo,
  selectVisibleItems,
} from "../store/top250Movie/top250MovieSelector";
import Loading from "./Loading";
import Pagination from "../component/search/Pagination";
import ErrorMsg from "./ErrorMsg";

export default function Top250MovieList() {
  const dispatch = useDispatch();

  const { status, error } = useSelector(selectMovieInfo);
  const { search, sort } = useSelector(selectSC);
  const movies = useSelector((state) =>
    selectVisibleItems(state, { search, sort })
  );

  const currentPage = useSelector(selectCurrentPage);

  useEffect(() => {
    dispatch(loadTop250Movie(currentPage));
  }, [dispatch, currentPage]);

  return (
    <>
      {error ? (
        <ErrorMsg />
      ) : (
        <>
          {status === "loading" ? (
            <Loading />
          ) : (
            <div className="animation">
              {!movies.length ? (
                <h4 className="nothing_found">Ничего не найдено..</h4>
              ) : (
                <>
                  {" "}
                  <Pagination />
                  <div className="items">
                    {status === "received" && (
                      <>
                        {movies.map((item) => (
                          <Top250MovieItems key={item.filmId} {...item} />
                        ))}
                      </>
                    )}
                  </div>
                  <Pagination />
                </>
              )}
            </div>
          )}
        </>
      )}
    </>
  );
}
