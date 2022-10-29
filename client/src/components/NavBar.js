import React from "react";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";

function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <div
        style={{
          boxSizing: "border-box",
          margin: "0 auto",
          width: "8.5in",
          height: "11in",
          backgroundColor: "#fff",
          boxShadow: "0 3px 8px -3px rgba(0, 0, 0, 0.7)",
        }}>
          <header className="flex justify-between items-center font-sans w-full h-1/6">
            <div className="flex flex-col px-5">
              <div className="text-3xl"></div>
              <div className="text-lg pt-3"></div>
            </div>

          </header>
        </div>

        
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
  <main>
    <body>
      <header className="flex-row px-1" style={{background: "pink", height: "100px", textAlign: "center"}}>
        <h1 style={{textAlign: "center"}}>Resume Generator</h1>
        <br></br>
        <h2 >Please create and account so we can start!</h2>
     </header>
     <nav style={{textAlign: "center", marginTop: "80px"}}>{showNavigation()}</nav> 
    </body>
      <footer style={{ background: "pink"}}>
        <h3 style={{ marginTop: "600px", position: "absolute", marginLeft: "425px", background: "pink"}}>
          Contact our team @ Bryguy20, DeQuanD, BenKawalec, HappyPanda6453, and AaronWilson113
          <br></br>
        </h3>
      </footer>
  </main>
  );
}

export default Nav;
