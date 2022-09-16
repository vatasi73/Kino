import React from "react";
import Search from "../component/search/Search";
import Sort from "../component/search/Sort";

import Top250MovieList from "../component/Top250MovieList";

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
