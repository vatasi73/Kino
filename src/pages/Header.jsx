import React from "react";
import { Link } from "react-router-dom";
import { useCleanUp } from "../component/features/controls/use-cleanUp";
import FavoritesAddToggle from "../component/features/favorites/FavoritesAddToggle";
import FavoritesLink from "../component/features/favorites/FavoritesLink";

export default function Header() {
  const cleanUP = useCleanUp();
  return (
    <>
      {" "}
      <nav>
        <div className="nav-wrapper">
          <Link onClick={cleanUP} to="/" className="brand-logo">
            Kino
          </Link>
        </div>
        <FavoritesLink />
      </nav>
    </>
  );
}
