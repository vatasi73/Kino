import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../../store/search/searchAction";
import { selectSearch } from "../../store/search/searchSelector";

export default function Search() {
  const dispatch = useDispatch();

  const search = useSelector(selectSearch);

  const handleSearch = (e) => {
    dispatch(setSearch(e.target.value));
  };

  return (
    <div className="input-field">
      <input
        className="validate"
        placeholder="Поиск"
        type="search"
        onChange={handleSearch}
        value={search}
      />
    </div>
  );
}
