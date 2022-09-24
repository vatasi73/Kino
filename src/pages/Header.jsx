import React from "react";
import { Link } from "react-router-dom";
import { useCleanUp } from "../component/features/controls/use-cleanUp";

export default function Header() {
  const cleanUP = useCleanUp();
  return (
    <>
      <nav>
        <div className="nav-wrapper">
          <Link onClick={cleanUP} to="/" className="brand-logo">
            Kino
          </Link>
        </div>
      </nav>
    </>
  );
}
