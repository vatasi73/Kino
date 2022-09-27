import React, { Suspense } from "react";
import Search from "../component/features/controls/Search";
import Sort from "../component/features/controls/Sort";

import Loading from "../component/Loading";

const Top250MovieList = React.lazy(() =>
  import("../component/features/top250movie/Top250MovieList")
);
export default function HomePage() {
  return (
    <div className="container content">
      <div className="serch_content">
        <Search />
        <Sort />
      </div>
      <Suspense fallback={<Loading />}>
        <Top250MovieList />
      </Suspense>
    </div>
  );
}
