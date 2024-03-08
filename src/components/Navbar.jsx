import React from "react";
import { NavLink } from "react-router-dom";
import ThemeIcon from "./ThemeIcon";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            Context Api
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <NavLink className="nav-item nav-link" to="/">
                Anasayfa
              </NavLink>
              <NavLink className="nav-item nav-link" to="/hakkimizda">
                Hakkımızda
              </NavLink>
              <NavLink className="nav-item nav-link" to="/iletisim">
                İletişim
              </NavLink>
              <ThemeIcon />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
