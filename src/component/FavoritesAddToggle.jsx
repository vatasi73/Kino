import React from "react";

import { useDispatch } from "react-redux";
import { setAddFavorites } from "../store/top250Movie/top250MovieAction";

export default function FavoritesAddToggle(item) {
  const dispatch = useDispatch();

  return (
    <div>
      <i
        onClick={() => {
          dispatch(setAddFavorites(item));
        }}
        style={{ color: !item.status ? "" : "yellow" }}
        className="medium material-icons favorites"
      >
        turned_in_not
      </i>
    </div>
  );
}
