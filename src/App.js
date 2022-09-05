import React from "react";

import { Routes, Route } from "react-router-dom";

import Details from "./pages/Details";
import Header from "./pages/Header";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <>
      <Header />
      {/* <HomePage /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:id" element={<Details />} />
      </Routes>
    </>
  );
}
