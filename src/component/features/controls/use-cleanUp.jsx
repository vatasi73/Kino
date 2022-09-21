import { useDispatch } from "react-redux";
import { setClear } from "./contols-slice";

export const useCleanUp = () => {
  const dispatch = useDispatch();
  const cleanUP = () => dispatch(setClear());
  return () => dispatch(cleanUP());
};
