import React from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  setAddFavorites,
  setRemoveFromFavorites,
} from "../store/favourites/favouritesAction";
import { selectFavoritesInfo } from "../store/favourites/favouritesSelector";
export default function FavoritesAddToggle(item) {
  const dispatch = useDispatch();

  const status = useSelector(selectFavoritesInfo);

  return (
    <div>
      <button
        onClick={() => {
          !status
            ? dispatch(setAddFavorites(item))
            : dispatch(setRemoveFromFavorites(item));
        }}
      >
        favourites
      </button>
    </div>
  );
}
