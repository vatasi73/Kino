import Loading from "../../Loading";
import Pagination from "./Pagination";
import ErrorMsg from "../../ErrorMsg";
import Top250MovieItems from "./Top250MovieItems";
import { useTop250Movies } from "./use-top250movie";

export default function Top250MovieList() {
  const [movies, { status, error }] = useTop250Movies();

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
