import { AnimatePresence, motion } from "framer-motion";
import Loading from "../../Loading";
import Pagination from "./Pagination";
import ErrorMsg from "../../ErrorMsg";
import Top250MovieItems from "./Top250MovieItems";
import { useTop250Movies } from "./use-top250movie";
import { itemsVariant } from "../../animation";
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
            <div>
              {!movies.length ? (
                <h4 className="nothing_found">Ничего не найдено..</h4>
              ) : (
                <>
                  {" "}
                  <Pagination />
                  <div className="items">
                    {status === "received" && (
                      <>
                        <AnimatePresence exitBeforeEnter>
                          {movies.map((item, i) => (
                            <motion.div
                              variants={itemsVariant}
                              initial="hidden"
                              animate="visible"
                              exit="hidden"
                              whileHover="hover"
                              key={item.filmId}
                            >
                              <Top250MovieItems key={item.filmId} {...item} />
                            </motion.div>
                          ))}
                        </AnimatePresence>
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
