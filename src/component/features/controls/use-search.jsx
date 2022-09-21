import { useDispatch, useSelector } from "react-redux";
import { selectSearch, setSearch } from "./contols-slice";

export const useSearch = () => {
  const dispatch = useDispatch();

  const search = useSelector(selectSearch);

  const handleSort = (e) => {
    dispatch(setSearch(e.target.value));
  };
  return [search, handleSort];
};
