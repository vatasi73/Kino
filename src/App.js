import React from "react";

import { Routes, Route } from "react-router-dom";

import Details from "./pages/Details";
import Favorites from "./pages/Favorites";
import Header from "./pages/Header";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:id" element={<Details />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </>
  );
}
