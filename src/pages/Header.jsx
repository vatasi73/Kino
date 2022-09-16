import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setClear } from "../store/search/searchAction";

export default function Header() {
  const dispatch = useDispatch();
  const cleanUP = () => dispatch(setClear());
  return (
    <>
      <nav>
        <div className="nav-wrapper">
          <Link onClick={cleanUP} to="/" className="brand-logo">
            Kino
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link to={`/favorites`}>Избранное</Link>
            </li>
            <li>
              <a href="collapsible.html">JavaScript</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
