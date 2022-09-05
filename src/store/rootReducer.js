import { combineReducers } from "redux";
import { detailsMovieReducer } from "./details/detailsReducer";
import { searchReducer } from "./search/searchReducer";
import { similarMovieReducer } from "./similar/similarReducer";

import { top250MovieReducer } from "./top250Movie/top250MovieReducer";
export const rootReducer = combineReducers({
  top250Movie: top250MovieReducer,
  search: searchReducer,
  movieDetails: detailsMovieReducer,
  similarMovie: similarMovieReducer,
});
