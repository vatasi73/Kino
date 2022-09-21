import React from "react";
import { useSearch } from "./use-search";

export default function Search() {
  const [search, handleSearch] = useSearch();
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
