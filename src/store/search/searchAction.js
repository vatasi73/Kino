export const SET_SEARCH = "@@search/SET_SEARCH";
export const SET_SORT = "@@sort/SET_SORT";
export const SET_CLEAR = "@@clear/SET_CLEAR";

export const setSort = (sort) => ({
  type: SET_SORT,
  payload: sort,
});
export const setSearch = (search) => ({
  type: SET_SEARCH,
  payload: search,
});

export const setClear = () => ({
  type: SET_CLEAR,
});
