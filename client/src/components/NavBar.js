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
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/signup">Signup</Link>
          </li>
          <li className="mx-1">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      );
    }
  }

  return (
  <body>
    <header className="flex-row px-1" style={{background: "pink", height: "100px", textAlign: "center"}}>
      <h1 style={{textAlign: "center"}}>Resume Generator</h1>
      <br></br>
      <h2 >Please create and account so we can start!</h2>
    </header>
    <nav style={{textAlign: "center", marginTop: "80px"}}>{showNavigation()}</nav> 
  </body>
  

  );
}

export default Nav;
