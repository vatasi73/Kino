import axios from "axios";
import { configureStore } from "@reduxjs/toolkit";

import * as api from "./config";
import { controlsReducer } from "./component/features/controls/contols-slice";
import { top250MovieReducer } from "./component/features/top250movie/top250movie-slice";
import { favoritesReducer } from "./component/features/favorites/favorites-slice";
import { detailsReducer } from "./component/features/details/details-slice";

export const store = configureStore({
  reducer: {
    top250Movie: top250MovieReducer,
    controls: controlsReducer,
    favorites: favoritesReducer,
    movieDetails: detailsReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware({
      thunk: {
        extraArgument: {
          client: axios,
          api,
        },
      },
      serializableCheck: false,
    }),
});
