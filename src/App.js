import React, { Suspense } from "react";

import { Routes, Route } from "react-router-dom";
import Loading from "./component/Loading";

import Header from "./pages/Header";

const Details = React.lazy(() => import("./pages/Details"));
const Favorites = React.lazy(() => import("./pages/Favorites"));
const HomePage = React.lazy(() => import("./pages/HomePage"));

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loading />}>
              <HomePage />
            </Suspense>
          }
        />

        <Route
          path="/movie/:id"
          element={
            <Suspense fallback={<Loading />}>
              <Details />
            </Suspense>
          }
        />

        <Route
          path="/favorites"
          element={
            <Suspense fallback={<Loading />}>
              <Favorites />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
}
