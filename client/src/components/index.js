import React from "react";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";

function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <div className="flex justify-between ">
        <ul className="flex-row">
          <li className="mx-1 text-white">
            <Link to="/signup">Signup</Link>
          </li>
          <li className="mx-1 text-white">
            <Link to="/login">Login</Link>
          </li>
        </ul>
        </div>
      );
    }
  }

  return (
    <header className="flex text-center text-white ">
      <h1>Resume Builder</h1>

      <nav>{showNavigation()}</nav>
    </header>
  );
}

export default Nav;
