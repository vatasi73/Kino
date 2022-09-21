import React from "react";
import Search from "../component/features/controls/Search";
import Sort from "../component/features/controls/Sort";

import Top250MovieList from "../component/features/top250movie/Top250MovieList";

export default function HomePage() {
  return (
    <div className="container content">
      <div className="serch_content">
        <Search />
        <Sort />
      </div>
      <Top250MovieList />
    </div>
  );
}
