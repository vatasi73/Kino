import { useDispatch, useSelector } from "react-redux";
import { selectSort, setSort } from "./contols-slice";

export const useSort = () => {
  const dispatch = useDispatch();
  const sort = useSelector(selectSort);

  const handleSelect = (genre) => {
    dispatch(setSort(genre?.value || ""));
  };
  return [sort, handleSelect];
};
